/**
 * LocalStorage Management Utilities
 * Handles conversation state persistence with checksums for data integrity
 */

import { generateId, generateChecksum } from './helpers';
import { conversationFlow } from '../data/conversationFlow';

const STORAGE_KEYS = {
  CONVERSATION: 'chatbot_conversation',
  METADATA: 'chatbot_metadata',
  REFERENCE: 'chatbot_reference'
};

const STORAGE_LIMITS = {
  MAX_SIZE: 1000000, // 1MB warning threshold
  MAX_TRANSCRIPT_LENGTH: 100,
  KEEP_RECENT_MESSAGES: 50
};

/**
 * Initialize a new conversation state
 */
export function initNewConversation() {
  const conversationId = generateId();
  const now = new Date().toISOString();

  const state = {
    conversation_id: conversationId,
    status: 'in_progress',
    current_question_id: 'Q1',
    completed_question_ids: [],
    answers: {},
    transcript: [],
    contact_details: null,
    metadata: {
      page_url: window.location.href,
      referrer: document.referrer || 'direct',
      user_agent: navigator.userAgent,
      device_type: getDeviceType(),
      language: navigator.language || 'en',
      started_at: now,
      last_active_at: now,
      completed_at: null,
      total_time_seconds: 0
    },
    branching_path: [],
    schema_version: '1.0',
    _checksum: ''
  };

  // Generate checksum
  state._checksum = generateChecksum(state.answers);

  // Save to localStorage
  saveConversationState(state);

  return state;
}

/**
 * Get current conversation state from localStorage
 */
export function getConversationState() {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.CONVERSATION);

    if (!stored) {
      return initNewConversation();
    }

    const state = JSON.parse(stored);

    // Verify data integrity
    if (!verifyChecksum(state)) {
      console.warn('Conversation data integrity check failed - starting fresh');
      clearConversation();
      return initNewConversation();
    }

    return state;
  } catch (error) {
    console.error('Error loading conversation state:', error);
    return initNewConversation();
  }
}

/**
 * Save conversation state to localStorage
 */
export function saveConversationState(state) {
  try {
    // Update timestamp
    state.metadata.last_active_at = new Date().toISOString();

    // Calculate total time
    const startTime = new Date(state.metadata.started_at);
    const now = new Date();
    state.metadata.total_time_seconds = Math.floor((now - startTime) / 1000);

    // Update checksum
    state._checksum = generateChecksum(state.answers);

    // Check storage size
    checkStorageSize(state);

    // Save
    localStorage.setItem(STORAGE_KEYS.CONVERSATION, JSON.stringify(state));

    return true;
  } catch (error) {
    console.error('Error saving conversation state:', error);
    return false;
  }
}

/**
 * Save a user's answer
 */
export function saveAnswer(questionId, answer) {
  const state = getConversationState();

  // Get the question to find its key
  const question = conversationFlow[questionId];

  if (!question) {
    console.error('Question not found:', questionId);
    return state;
  }

  // Add answer using the question's key (not questionId)
  state.answers[question.key] = answer.value;

  // Mark question as completed
  if (!state.completed_question_ids.includes(questionId)) {
    state.completed_question_ids.push(questionId);
  }

  // Add to transcript
  state.transcript.push({
    id: generateId(),
    type: 'user',
    content: answer.label,
    question_id: questionId,
    selected_value: answer.value,
    timestamp: new Date().toISOString()
  });

  // Save state
  saveConversationState(state);

  return state;
}

/**
 * Add bot message to transcript
 */
export function addBotMessage(questionId, message) {
  const state = getConversationState();

  state.transcript.push({
    id: generateId(),
    type: 'bot',
    content: message,
    question_id: questionId,
    timestamp: new Date().toISOString()
  });

  saveConversationState(state);

  return state;
}

/**
 * Update current question
 */
export function updateCurrentQuestion(questionId) {
  const state = getConversationState();
  state.current_question_id = questionId;
  saveConversationState(state);
  return state;
}

/**
 * Add branching decision to history
 */
export function addBranchingDecision(fromQuestionId, toQuestionId, reason) {
  const state = getConversationState();

  state.branching_path.push({
    from: fromQuestionId,
    to: toQuestionId,
    reason,
    timestamp: new Date().toISOString()
  });

  saveConversationState(state);
  return state;
}

/**
 * Save contact details
 */
export function saveContactDetails(contactData) {
  const state = getConversationState();

  state.contact_details = {
    name: contactData.name,
    phone: contactData.phone,
    organization: contactData.organization || 'Individual'
  };

  saveConversationState(state);
  return state;
}

/**
 * Mark conversation as completed
 */
export function markConversationCompleted() {
  const state = getConversationState();

  state.status = 'completed';
  state.metadata.completed_at = new Date().toISOString();

  saveConversationState(state);

  // Move to reference storage
  saveReference(state);

  return state;
}

/**
 * Clear current conversation
 */
export function clearConversation() {
  try {
    localStorage.removeItem(STORAGE_KEYS.CONVERSATION);
    return true;
  } catch (error) {
    console.error('Error clearing conversation:', error);
    return false;
  }
}

/**
 * Check if user should resume conversation
 */
export function shouldResumeConversation() {
  const stored = localStorage.getItem(STORAGE_KEYS.CONVERSATION);

  if (!stored) return { should: false, reason: 'no_data' };

  try {
    const state = JSON.parse(stored);

    // Check if already completed
    if (state.status === 'completed') {
      return { should: false, reason: 'already_completed' };
    }

    // Check age
    const lastActive = new Date(state.metadata.last_active_at);
    const now = new Date();
    const hoursSince = (now - lastActive) / (1000 * 60 * 60);

    if (hoursSince > 168) { // 7 days
      clearConversation();
      return { should: false, reason: 'too_old' };
    }

    if (hoursSince > 24) {
      return {
        should: true,
        reason: 'old_but_resumable',
        hoursSince,
        state
      };
    }

    return {
      should: true,
      reason: 'recent',
      hoursSince,
      state
    };
  } catch (error) {
    console.error('Error checking resume status:', error);
    clearConversation();
    return { should: false, reason: 'error' };
  }
}

/**
 * Handle answer change (edit)
 */
export function handleAnswerChange(questionId, newAnswer) {
  const state = getConversationState();

  // Find index of changed question
  const changeIndex = state.completed_question_ids.indexOf(questionId);

  if (changeIndex === -1) {
    // Question not answered yet, just add it
    return saveAnswer(questionId, newAnswer);
  }

  // Remove all answers after this point
  const removedQuestions = state.completed_question_ids.slice(changeIndex + 1);

  removedQuestions.forEach(qId => {
    const removedQuestion = conversationFlow[qId];
    if (removedQuestion) {
      delete state.answers[removedQuestion.key];
    }
  });

  // Update with new answer using the question's key
  const question = conversationFlow[questionId];
  if (question) {
    state.answers[question.key] = newAnswer.value;
  }

  // Truncate completed questions list
  state.completed_question_ids = state.completed_question_ids.slice(0, changeIndex + 1);

  // Truncate transcript to point of change
  const transcriptIndex = state.transcript.findIndex(
    msg => msg.question_id === questionId && msg.type === 'user'
  );

  if (transcriptIndex !== -1) {
    state.transcript = state.transcript.slice(0, transcriptIndex);
  }

  // Add new message to transcript
  state.transcript.push({
    id: generateId(),
    type: 'user',
    content: newAnswer.label,
    question_id: questionId,
    selected_value: newAnswer.value,
    timestamp: new Date().toISOString(),
    is_edit: true
  });

  // Save state
  saveConversationState(state);

  return state;
}

/**
 * Save reference after successful submission
 */
function saveReference(state) {
  try {
    const reference = {
      id: state.conversation_id,
      reference_id: state.conversation_id.split('-').slice(0, 3).join('-'),
      submitted_at: state.metadata.completed_at,
      contact: state.contact_details,
      expires_at: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString() // 24 hours
    };

    localStorage.setItem(STORAGE_KEYS.REFERENCE, JSON.stringify(reference));
  } catch (error) {
    console.error('Error saving reference:', error);
  }
}

/**
 * Get last submission reference
 */
export function getLastReference() {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.REFERENCE);
    if (!stored) return null;

    const reference = JSON.parse(stored);

    // Check if expired
    if (new Date(reference.expires_at) < new Date()) {
      localStorage.removeItem(STORAGE_KEYS.REFERENCE);
      return null;
    }

    return reference;
  } catch (error) {
    console.error('Error loading reference:', error);
    return null;
  }
}

/**
 * Verify checksum integrity
 */
function verifyChecksum(state) {
  if (!state._checksum) return false;

  const expectedChecksum = generateChecksum(state.answers);
  return state._checksum === expectedChecksum;
}

/**
 * Check storage size and truncate if needed
 */
function checkStorageSize(state) {
  const size = new Blob([JSON.stringify(state)]).size;

  if (size > STORAGE_LIMITS.MAX_SIZE) {
    console.warn('Conversation state is large:', size, 'bytes');

    // Truncate transcript if too long
    if (state.transcript.length > STORAGE_LIMITS.MAX_TRANSCRIPT_LENGTH) {
      const keep = STORAGE_LIMITS.KEEP_RECENT_MESSAGES;
      state.transcript = state.transcript.slice(-keep);
      console.warn(`Truncated transcript to last ${keep} messages`);
    }
  }
}

/**
 * Get device type
 */
function getDeviceType() {
  const ua = navigator.userAgent;

  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return 'tablet';
  }

  if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
    return 'mobile';
  }

  return 'desktop';
}

/**
 * Export conversation data for debugging
 */
export function exportConversationData() {
  const state = getConversationState();
  return {
    ...state,
    _exported_at: new Date().toISOString()
  };
}

/**
 * Get conversation statistics
 */
export function getConversationStats() {
  const state = getConversationState();

  return {
    total_questions_answered: state.completed_question_ids.length,
    total_messages: state.transcript.length,
    time_spent_seconds: state.metadata.total_time_seconds,
    edit_count: state.transcript.filter(m => m.is_edit).length,
    current_status: state.status,
    progress_percentage: calculateProgress(state)
  };
}

/**
 * Calculate progress percentage
 */
function calculateProgress(state) {
  // Simple calculation based on completed questions
  // In real implementation, this should be based on expected flow length
  const completed = state.completed_question_ids.length;
  const estimated = 15; // Average flow length
  return Math.min(Math.round((completed / estimated) * 100), 100);
}
