/**
 * Validation Utilities
 * Handles validation for contact details and user inputs
 */

/**
 * Validate phone number (India-first, international support)
 */
export function validatePhone(input) {
  if (!input || input.trim() === '') {
    return {
      valid: false,
      error: 'Phone number is required',
      normalized: null
    };
  }

  // Remove formatting characters
  const cleaned = input.replace(/[\s\-()]/g, '');

  // Pattern 1: 10 digits (India local)
  if (/^\d{10}$/.test(cleaned)) {
    // Check if starts with 0 (invalid for India mobile)
    if (cleaned[0] === '0') {
      return {
        valid: false,
        error: 'Please remove leading 0',
        normalized: null
      };
    }

    // Check if starts with valid India mobile prefix (6-9)
    if (!/^[6-9]/.test(cleaned)) {
      return {
        valid: false,
        error: 'Indian mobile numbers start with 6-9',
        normalized: null
      };
    }

    // Check for repeated digits (spam prevention)
    if (/^(\d)\1{9}$/.test(cleaned)) {
      return {
        valid: false,
        error: 'Please enter a valid phone number',
        normalized: null
      };
    }

    // Valid India local - normalize to E.164
    return {
      valid: true,
      error: null,
      normalized: `+91${cleaned}`
    };
  }

  // Pattern 2: E.164 international format
  if (/^\+\d{8,15}$/.test(cleaned)) {
    // Check for repeated digits
    const digits = cleaned.slice(1); // Remove + sign
    if (/^(\d)\1+$/.test(digits)) {
      return {
        valid: false,
        error: 'Please enter a valid phone number',
        normalized: null
      };
    }

    return {
      valid: true,
      error: null,
      normalized: cleaned
    };
  }

  // Pattern 3: Number with country code but no + (e.g., 919876543210)
  if (/^91\d{10}$/.test(cleaned)) {
    return {
      valid: true,
      error: null,
      normalized: `+${cleaned}`
    };
  }

  // Invalid format
  return {
    valid: false,
    error: 'Please enter a valid phone number (example: +91 98765 43210)',
    normalized: null
  };
}

/**
 * Validate name
 */
export function validateName(input) {
  if (!input || input.trim() === '') {
    return {
      valid: false,
      error: 'Name is required'
    };
  }

  const trimmed = input.trim();

  // Minimum length
  if (trimmed.length < 2) {
    return {
      valid: false,
      error: 'Please enter your full name'
    };
  }

  // Maximum length
  if (trimmed.length > 100) {
    return {
      valid: false,
      error: 'Name is too long'
    };
  }

  // Check for valid characters (letters, spaces, dots, hyphens, apostrophes)
  if (!/^[a-zA-Z\s.'\-]+$/.test(trimmed)) {
    return {
      valid: false,
      error: 'Please use only letters, spaces, and common punctuation'
    };
  }

  // Check for numbers
  if (/\d/.test(trimmed)) {
    return {
      valid: false,
      error: 'Name cannot contain numbers'
    };
  }

  return {
    valid: true,
    error: null
  };
}

/**
 * Validate organization (optional field)
 */
export function validateOrganization(input) {
  // Organization is optional
  if (!input || input.trim() === '') {
    return {
      valid: true,
      error: null,
      value: 'Individual' // Default value
    };
  }

  const trimmed = input.trim();

  // Maximum length
  if (trimmed.length > 200) {
    return {
      valid: false,
      error: 'Organization name is too long',
      value: null
    };
  }

  // Allow alphanumeric + common punctuation
  if (!/^[a-zA-Z0-9\s.,'&\-()]+$/.test(trimmed)) {
    return {
      valid: false,
      error: 'Please use only letters, numbers, and common punctuation',
      value: null
    };
  }

  return {
    valid: true,
    error: null,
    value: trimmed
  };
}

/**
 * Validate all contact details at once
 */
export function validateContactDetails(contactData) {
  const errors = {};
  let isValid = true;

  // Validate name
  const nameValidation = validateName(contactData.name);
  if (!nameValidation.valid) {
    errors.name = nameValidation.error;
    isValid = false;
  }

  // Validate phone
  const phoneValidation = validatePhone(contactData.phone);
  if (!phoneValidation.valid) {
    errors.phone = phoneValidation.error;
    isValid = false;
  }

  // Validate organization (always valid, just normalize)
  const orgValidation = validateOrganization(contactData.organization);
  if (!orgValidation.valid) {
    errors.organization = orgValidation.error;
    isValid = false;
  }

  return {
    valid: isValid,
    errors,
    normalized: isValid ? {
      name: contactData.name.trim(),
      phone: phoneValidation.normalized,
      organization: orgValidation.value
    } : null
  };
}

/**
 * Sanitize text input (prevent XSS)
 */
export function sanitizeInput(input) {
  if (!input) return '';

  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
    .trim();
}

/**
 * Validate answer value against allowed options
 */
export function validateAnswerValue(value, allowedOptions) {
  const allowedValues = allowedOptions.map(opt => opt.value);

  if (!allowedValues.includes(value)) {
    return {
      valid: false,
      error: 'Invalid option selected'
    };
  }

  return {
    valid: true,
    error: null
  };
}

/**
 * Check if required fields are filled for a flow
 */
export function validateRequiredFields(answers, flowType) {
  const requiredFieldsMap = {
    security_services: [
      'language',
      'intent_main',
      'security_use_case',
      'security_coverage',
      'security_guard_count',
      'preferred_contact_channel'
    ],
    facility_management: [
      'language',
      'intent_main',
      'facility_service',
      'facility_type',
      'preferred_contact_channel'
    ],
    manpower_payroll: [
      'language',
      'intent_main',
      'manpower_payroll_need',
      'hiring_type',
      'preferred_contact_channel'
    ],
    training: [
      'language',
      'intent_main',
      'training_audience',
      'training_type',
      'preferred_contact_channel'
    ],
    careers: [
      'language',
      'intent_main',
      'career_role',
      'experience_level'
    ],
    contact_locations: [
      'language',
      'intent_main',
      'contact_department',
      'preferred_contact_method'
    ],
    existing_client_support: [
      'language',
      'intent_main',
      'support_need',
      'priority_level'
    ]
  };

  const requiredFields = requiredFieldsMap[flowType] || [];
  const missingFields = requiredFields.filter(field => !answers[field]);

  return {
    valid: missingFields.length === 0,
    missingFields
  };
}

/**
 * Format phone number for display
 */
export function formatPhoneDisplay(phone) {
  if (!phone) return '';

  // E.164 format: +919876543210
  if (phone.startsWith('+91') && phone.length === 13) {
    // Format as +91 98765 43210
    const countryCode = phone.slice(0, 3);
    const part1 = phone.slice(3, 8);
    const part2 = phone.slice(8);
    return `${countryCode} ${part1} ${part2}`;
  }

  // Generic international number
  if (phone.startsWith('+')) {
    return phone.replace(/(\+\d{1,3})(\d{3})(\d+)/, '$1 $2 $3');
  }

  return phone;
}

/**
 * Check for spam indicators
 */
export function detectSpam(contactData, timeSpentSeconds) {
  const spamIndicators = [];

  // Too fast completion
  if (timeSpentSeconds < 10) {
    spamIndicators.push('too_fast');
  }

  // Suspicious name patterns
  const name = contactData.name.toLowerCase();
  if (name.includes('test') || name.includes('spam') || name === 'admin') {
    spamIndicators.push('suspicious_name');
  }

  // Repeated characters in name
  if (/(.)\1{4,}/.test(contactData.name)) {
    spamIndicators.push('repeated_chars_name');
  }

  // Generic organization names
  const org = (contactData.organization || '').toLowerCase();
  if (org === 'test' || org === 'spam' || org === 'none') {
    spamIndicators.push('suspicious_org');
  }

  return {
    isLikelySpam: spamIndicators.length >= 2,
    indicators: spamIndicators
  };
}

/**
 * Validate email format (if email collection is added)
 */
export function validateEmail(email) {
  if (!email || email.trim() === '') {
    return {
      valid: false,
      error: 'Email is required'
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return {
      valid: false,
      error: 'Please enter a valid email address'
    };
  }

  // Check for disposable email domains
  const disposableDomains = [
    'tempmail.com',
    'throwaway.email',
    'guerrillamail.com',
    '10minutemail.com'
  ];

  const domain = email.split('@')[1];
  if (disposableDomains.includes(domain)) {
    return {
      valid: false,
      error: 'Please use a valid email address'
    };
  }

  return {
    valid: true,
    error: null
  };
}
