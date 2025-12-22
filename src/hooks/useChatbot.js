import { useState, useEffect, useCallback } from 'react';
import { conversationFlow, getNextQuestionId } from '../data/conversationFlow';
import { getQuestionText, getQuestionOptions } from '../data/translations';
import {
  getConversationState,
  saveAnswer,
  addBotMessage,
  updateCurrentQuestion,
  addBranchingDecision,
  saveContactDetails,
  markConversationCompleted,
  clearConversation,
  shouldResumeConversation,
  handleAnswerChange
} from '../utils/storage';
import {
  trackChatbotOpened,
  trackQuestionAnswered,
  trackEnquiryCompleted,
  trackRestartClicked,
  Timer
} from '../utils/analytics';
import { wait } from '../utils/helpers';

/**
 * Main chatbot state management hook
 */
export function useChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentScreen, setCurrentScreen] = useState('chat'); // 'chat' | 'review' | 'contact' | 'success'
  const [conversationState, setConversationState] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [questionTimer, setQuestionTimer] = useState(null);

  // Initialize conversation state
  useEffect(() => {
    const state = getConversationState();
    setConversationState(state);
  }, []);

  // Update state when it changes (for debugging)
  useEffect(() => {
    if (isOpen) {
      console.log('Conversation State:', conversationState);
      console.log('Messages:', conversationState?.transcript);
    }
  }, [conversationState, isOpen]);

  // Open chatbot
  const openChat = useCallback(() => {
    // Check if should resume
    const resumeCheck = shouldResumeConversation();

    if (resumeCheck.should) {
      // Load existing conversation
      setConversationState(resumeCheck.state);
    } else {
      // Fresh conversation - show first question
      const firstQuestion = conversationFlow['Q1'];
      addBotMessage('Q1', firstQuestion.question_text);

      // Refresh state after adding message
      const updatedState = getConversationState();
      setConversationState(updatedState);
    }

    setIsOpen(true);
    setCurrentScreen('chat');
    trackChatbotOpened();

    // Start timer for first question
    setQuestionTimer(new Timer());
  }, []);

  // Close chatbot
  const closeChat = useCallback(() => {
    setIsOpen(false);
    // State is automatically saved to localStorage
  }, []);

  // Minimize chatbot (desktop only)
  const minimizeChat = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Restart conversation
  const restartConversation = useCallback(() => {
    const questionsAnswered = conversationState?.completed_question_ids.length || 0;
    trackRestartClicked(questionsAnswered);

    clearConversation();
    const newState = getConversationState();
    setConversationState(newState);
    setCurrentScreen('chat');

    // Show first question
    const firstQuestion = conversationFlow['Q1'];
    addBotMessage('Q1', firstQuestion.question_text);

    setQuestionTimer(new Timer());
  }, [conversationState]);

  // Handle option selection
  const handleSelectOption = useCallback(async (option) => {
    if (isProcessing) return;

    setIsProcessing(true);

    // Track answer time
    const timeToAnswer = questionTimer ? questionTimer.getElapsedSeconds() : 0;
    const currentQuestionId = conversationState.current_question_id;

    console.log('=== SELECTING OPTION ===');
    console.log('Current Question:', currentQuestionId);
    console.log('Selected Option:', option);

    trackQuestionAnswered(currentQuestionId, option.value, timeToAnswer);

    // Save answer
    saveAnswer(currentQuestionId, option);

    // Force fresh state read from localStorage
    const freshState = getConversationState();
    console.log('Fresh state after save:', freshState);
    console.log('Transcript length:', freshState.transcript.length);
    setConversationState(freshState);

    // Determine next question
    const nextQuestionId = getNextQuestionId(currentQuestionId, option.value);

    console.log('=== NEXT QUESTION DETERMINATION ===');
    console.log('Next Question ID:', nextQuestionId);
    console.log('Current Question Config:', conversationFlow[currentQuestionId]);

    // Add branching decision if applicable
    if (nextQuestionId) {
      addBranchingDecision(
        currentQuestionId,
        nextQuestionId,
        `${currentQuestionId}=${option.value}`
      );
    } else {
      console.error('⚠️ WARNING: No next question ID determined!');
      console.error('This will cause the conversation to get stuck.');
    }

    // Show typing indicator
    setIsTyping(true);
    await wait(500); // 500ms delay
    setIsTyping(false);

    // Handle special cases
    if (nextQuestionId === 'REVIEW') {
      // Go to review screen
      setCurrentScreen('review');
    } else if (nextQuestionId === 'END') {
      // End conversation - add thank you message and go to review
      const currentLanguage = freshState.answers?.language || 'en';
      const thankYouMessage = currentLanguage === 'hi'
        ? 'धन्यवाद! आइए आपके विवरण की समीक्षा करें।'
        : 'Thank you! Let\'s review your details.';

      // Show typing for thank you message
      setIsTyping(true);
      await wait(600);
      setIsTyping(false);

      addBotMessage('END', thankYouMessage);

      // Refresh state
      const finalState = getConversationState();
      setConversationState(finalState);

      // Brief pause to show the message
      await wait(1000);

      // Go to review screen
      setCurrentScreen('review');
    } else if (nextQuestionId) {
      // Show next question
      const nextQuestion = conversationFlow[nextQuestionId];

      if (nextQuestion) {
        console.log('=== ADDING NEXT QUESTION ===');
        console.log('Next Question ID:', nextQuestionId);
        console.log('Question Text:', nextQuestion.question_text);

        // Get current language and translate question text
        const currentLanguage = freshState.answers?.language || 'en';
        const translatedQuestionText = getQuestionText(nextQuestionId, currentLanguage);
        const questionTextToUse = translatedQuestionText || nextQuestion.question_text;

        addBotMessage(nextQuestionId, questionTextToUse, nextQuestion.subtext);
        updateCurrentQuestion(nextQuestionId);

        // Refresh state
        const newState = getConversationState();
        console.log('State after adding bot message:', newState);
        console.log('Transcript length:', newState.transcript.length);
        setConversationState(newState);

        // Start timer for new question
        setQuestionTimer(new Timer());
      }
    } else {
      // No next question found - this shouldn't happen, but handle gracefully
      console.error('No next question ID found! Current:', currentQuestionId, 'Selected:', option.value);

      // Fallback: go to review screen
      const currentLanguage = freshState.answers?.language || 'en';
      const fallbackMessage = currentLanguage === 'hi'
        ? 'आइए आपके विवरण की समीक्षा करें।'
        : 'Let\'s review your details.';

      addBotMessage('FALLBACK', fallbackMessage);

      const fallbackState = getConversationState();
      setConversationState(fallbackState);

      await wait(800);
      setCurrentScreen('review');
    }

    setIsProcessing(false);
  }, [isProcessing, questionTimer, conversationState]);

  // Edit answer from review screen
  const handleEditAnswer = useCallback((questionId) => {
    // Update answer
    const question = conversationFlow[questionId];

    // Go back to chat screen at that question
    setCurrentScreen('chat');
    updateCurrentQuestion(questionId);

    // Refresh state
    const newState = getConversationState();
    setConversationState(newState);
  }, []);

  // Continue from review screen
  const handleContinueFromReview = useCallback(() => {
    setCurrentScreen('contact');
  }, []);

  // Submit contact details
  const handleSubmitContact = useCallback(async (contactData) => {
    // Save contact details
    saveContactDetails(contactData);

    // Mark as completed
    const finalState = markConversationCompleted();

    // Track completion
    trackEnquiryCompleted(
      finalState.conversation_id,
      finalState.answers.intent_main,
      finalState.metadata.total_time_seconds,
      finalState.transcript.filter(m => m.is_edit).length
    );

    // Update state
    setConversationState(finalState);

    // Show success screen
    await wait(300);
    setCurrentScreen('success');
  }, []);

  // Get current language from conversation state
  const getCurrentLanguage = useCallback(() => {
    if (!conversationState?.answers?.language) return 'en';
    return conversationState.answers.language;
  }, [conversationState]);

  // Get current question with translations
  const getCurrentQuestion = useCallback(() => {
    if (!conversationState || currentScreen !== 'chat') return null;

    const questionId = conversationState.current_question_id;
    const question = conversationFlow[questionId];
    if (!question) return null;

    // Get current language
    const language = getCurrentLanguage();

    // Get translations for question text and options
    const translatedQuestionText = getQuestionText(questionId, language);
    const translatedOptions = getQuestionOptions(questionId, language);

    // Return question with translations if available
    return {
      ...question,
      question_text: translatedQuestionText || question.question_text,
      options: translatedOptions || question.options
    };
  }, [conversationState, currentScreen, getCurrentLanguage]);

  // Get messages for transcript
  const getMessages = useCallback(() => {
    if (!conversationState) return [];
    return conversationState.transcript || [];
  }, [conversationState]);

  // Calculate progress
  const getProgress = useCallback(() => {
    if (!conversationState) return { percent: 0, currentStep: 0, totalSteps: 10 };

    const completed = conversationState.completed_question_ids.length;
    const estimated = 12; // Average flow length
    const percent = Math.min(Math.round((completed / estimated) * 100), 95);

    return {
      percent,
      currentStep: completed,
      totalSteps: estimated
    };
  }, [conversationState]);

  // Get current values
  const currentQuestion = getCurrentQuestion();
  const messages = getMessages();
  const progress = getProgress();

  return {
    // State
    isOpen,
    currentScreen,
    conversationState,
    isTyping,
    isProcessing,

    // Actions
    openChat,
    closeChat,
    minimizeChat,
    restartConversation,
    handleSelectOption,
    handleEditAnswer,
    handleContinueFromReview,
    handleSubmitContact,

    // Getters
    getCurrentQuestion: currentQuestion,
    messages,
    progress
  };
}
