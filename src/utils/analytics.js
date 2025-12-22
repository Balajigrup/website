/**
 * Analytics Tracking Utilities
 * Handles event tracking without exposing PII
 */

/**
 * Track event
 */
export function trackEvent(eventName, properties = {}) {
  // Filter out PII before tracking
  const sanitizedProperties = sanitizeProperties(properties);

  // Send to Google Analytics (if available)
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, sanitizedProperties);
  }

  // Send to custom analytics (if available)
  if (typeof window.analytics === 'function') {
    window.analytics.track(eventName, sanitizedProperties);
  }

  // Console log in development
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics]', eventName, sanitizedProperties);
  }
}

/**
 * Track page view
 */
export function trackPageView(pageName) {
  trackEvent('page_view', { page_name: pageName });
}

/**
 * Chatbot specific events
 */

export function trackChatbotOpened() {
  trackEvent('chatbot_opened', {
    timestamp: new Date().toISOString(),
    device_type: getDeviceType()
  });
}

export function trackQuestionAnswered(questionId, answerValue, timeToAnswer) {
  trackEvent('question_answered', {
    question_id: questionId,
    answer_value: answerValue,
    time_to_answer_seconds: Math.round(timeToAnswer),
    device_type: getDeviceType()
  });
}

export function trackFlowStepCompleted(stepName, flowType, progressPercent) {
  trackEvent('flow_step_completed', {
    step_name: stepName,
    flow_type: flowType,
    progress_percent: progressPercent,
    device_type: getDeviceType()
  });
}

export function trackReviewScreenViewed() {
  trackEvent('review_screen_viewed', {
    timestamp: new Date().toISOString()
  });
}

export function trackAnswerEdited(questionId, oldValue, newValue) {
  trackEvent('answer_edited', {
    question_id: questionId,
    had_value: !!oldValue,
    changed_to_value: !!newValue
    // Don't send actual values to protect privacy
  });
}

export function trackContactDetailsStarted() {
  trackEvent('contact_details_started', {
    timestamp: new Date().toISOString()
  });
}

export function trackContactDetailsSubmitted() {
  trackEvent('contact_details_submitted', {
    timestamp: new Date().toISOString()
  });
}

export function trackEnquiryCompleted(conversationId, flowType, totalTime, editCount) {
  trackEvent('enquiry_completed', {
    conversation_id: conversationId,
    flow_type: flowType,
    total_time_seconds: totalTime,
    edit_count: editCount,
    device_type: getDeviceType()
  });
}

/**
 * Drop-off tracking
 */

export function trackChatbotClosed(currentQuestionId, progressPercent, timeSpent) {
  trackEvent('chatbot_closed', {
    current_question_id: currentQuestionId,
    progress_percent: progressPercent,
    time_spent_seconds: timeSpent,
    device_type: getDeviceType()
  });
}

export function trackChatbotMinimized(currentQuestionId) {
  trackEvent('chatbot_minimized', {
    current_question_id: currentQuestionId,
    device_type: getDeviceType()
  });
}

export function trackQuestionAbandoned(questionId, timeOnQuestion) {
  trackEvent('question_abandoned', {
    question_id: questionId,
    time_on_question_seconds: timeOnQuestion
  });
}

export function trackContactDetailsAbandoned() {
  trackEvent('contact_details_abandoned', {
    timestamp: new Date().toISOString()
  });
}

/**
 * Error tracking
 */

export function trackValidationError(fieldName, errorType) {
  trackEvent('validation_error', {
    field_name: fieldName,
    error_type: errorType
  });
}

export function trackSubmissionFailed(errorCode, errorMessage) {
  trackEvent('submission_failed', {
    error_code: errorCode,
    error_message: errorMessage,
    timestamp: new Date().toISOString()
  });
}

export function trackDataCorrupted() {
  trackEvent('data_corrupted', {
    timestamp: new Date().toISOString()
  });
}

export function trackFlowError(errorType, questionId) {
  trackEvent('flow_error', {
    error_type: errorType,
    question_id: questionId
  });
}

/**
 * Engagement tracking
 */

export function trackRestartClicked(questionsAnswered) {
  trackEvent('restart_clicked', {
    questions_answered: questionsAnswered
  });
}

export function trackHelpClicked(questionId) {
  trackEvent('help_clicked', {
    question_id: questionId
  });
}

export function trackBackNavigation(fromQuestionId, toQuestionId) {
  trackEvent('back_navigation', {
    from_question_id: fromQuestionId,
    to_question_id: toQuestionId
  });
}

export function trackLanguageChanged(fromLang, toLang) {
  trackEvent('language_changed', {
    from_language: fromLang,
    to_language: toLang
  });
}

/**
 * Performance tracking
 */

export function trackLoadTime(loadTimeMs) {
  trackEvent('chatbot_load_time', {
    load_time_ms: loadTimeMs,
    device_type: getDeviceType()
  });
}

export function trackRenderTime(componentName, renderTimeMs) {
  trackEvent('component_render_time', {
    component_name: componentName,
    render_time_ms: renderTimeMs
  });
}

/**
 * Helper functions
 */

function sanitizeProperties(properties) {
  const piiFields = ['name', 'phone', 'email', 'organization', 'contact'];

  const sanitized = { ...properties };

  // Remove PII fields
  piiFields.forEach(field => {
    if (sanitized[field]) {
      delete sanitized[field];
    }
  });

  // Remove nested PII
  Object.keys(sanitized).forEach(key => {
    if (typeof sanitized[key] === 'object' && sanitized[key] !== null) {
      sanitized[key] = sanitizeProperties(sanitized[key]);
    }
  });

  return sanitized;
}

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
 * Track timing
 */
export class Timer {
  constructor() {
    this.startTime = Date.now();
  }

  getElapsedMs() {
    return Date.now() - this.startTime;
  }

  getElapsedSeconds() {
    return Math.round(this.getElapsedMs() / 1000);
  }

  reset() {
    this.startTime = Date.now();
  }
}

/**
 * Funnel tracking helper
 */
export class FunnelTracker {
  constructor(funnelName) {
    this.funnelName = funnelName;
    this.steps = [];
    this.startTime = Date.now();
  }

  trackStep(stepName, metadata = {}) {
    const stepData = {
      funnel_name: this.funnelName,
      step_name: stepName,
      step_index: this.steps.length,
      time_since_start_seconds: Math.round((Date.now() - this.startTime) / 1000),
      ...metadata
    };

    this.steps.push(stepData);
    trackEvent('funnel_step', stepData);
  }

  trackComplete(metadata = {}) {
    trackEvent('funnel_complete', {
      funnel_name: this.funnelName,
      total_steps: this.steps.length,
      total_time_seconds: Math.round((Date.now() - this.startTime) / 1000),
      ...metadata
    });
  }

  trackDrop(reason, metadata = {}) {
    trackEvent('funnel_drop', {
      funnel_name: this.funnelName,
      last_step: this.steps.length > 0 ? this.steps[this.steps.length - 1].step_name : 'start',
      reason,
      ...metadata
    });
  }
}

/**
 * Initialize analytics
 */
export function initAnalytics() {
  // Track initial load time
  if (window.performance && window.performance.timing) {
    const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
    trackLoadTime(loadTime);
  }

  // Set up error tracking
  window.addEventListener('error', (event) => {
    trackEvent('javascript_error', {
      error_message: event.message,
      error_source: event.filename,
      error_line: event.lineno,
      error_column: event.colno
    });
  });

  // Track unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    trackEvent('unhandled_promise_rejection', {
      reason: event.reason?.message || 'Unknown'
    });
  });

  console.log('[Analytics] Initialized');
}
