/**
 * Conversation Flow Configuration
 * Defines all 49 questions with branching logic
 */

export const conversationFlow = {
  // Welcome & Intent
  Q1: {
    id: 'Q1',
    key: 'language',
    question_text: 'Choose your preferred language',
    subtext: '',
    optionType: 'chips',
    options: [
      { label: 'English', value: 'en' },
      { label: 'हिंदी', value: 'hi' }
    ],
    next: 'Q2',
    validationRules: {
      required: true,
      minSelections: 1,
      maxSelections: 1
    },
    progressWeight: 1
  },

  Q2: {
    id: 'Q2',
    key: 'intent_main',
    question_text: 'How can I help you today?',
    subtext: '',
    optionType: 'cards',
    options: [
      { label: 'Security Services', value: 'security_services', icon: '🛡️', description: '24/7 protection solutions' },
      { label: 'Facility Management', value: 'facility_management', icon: '🏢', description: 'Complete facility services' },
      { label: 'Manpower/Payroll', value: 'manpower_payroll', icon: '👥', description: 'Outsourcing solutions' },
      { label: 'Training', value: 'training', icon: '📚', description: 'Professional training programs' },
      { label: 'Careers', value: 'careers', icon: '💼', description: 'Join our team' },
      { label: 'About Company', value: 'about_company', icon: 'ℹ️', description: 'Learn about us' },
      { label: 'Contact & Locations', value: 'contact_locations', icon: '📞', description: 'Get in touch' },
      { label: 'Existing Client Support', value: 'existing_client_support', icon: '🆘', description: 'Help for clients' }
    ],
    branching: {
      security_services: 'Q3',
      facility_management: 'Q18',
      manpower_payroll: 'Q25',
      training: 'Q32',
      careers: 'Q38',
      about_company: 'Q42',
      contact_locations: 'Q43',
      existing_client_support: 'Q45'
    },
    validationRules: {
      required: true,
      minSelections: 1,
      maxSelections: 1
    },
    progressWeight: 1
  },

  // Security Services Flow (Q3-Q11)
  Q3: {
    id: 'Q3',
    key: 'security_use_case',
    question_text: 'What do you need security for?',
    subtext: '',
    optionType: 'buttons',
    options: [
      { label: 'Corporate Office', value: 'corporate_office' },
      { label: 'Industrial/Plant', value: 'industrial_plant' },
      { label: 'Warehouse/Logistics', value: 'warehouse_logistics' },
      { label: 'Retail/Mall', value: 'retail_mall' },
      { label: 'Residential/Society', value: 'residential_society' },
      { label: 'Event', value: 'event' },
      { label: 'VIP/Executive', value: 'vip_executive' },
      { label: 'Security Audit/Survey', value: 'security_audit_survey' },
      { label: 'Quick Response Team (QRT)', value: 'qrt' }
    ],
    branching: {
      event: 'Q12',
      security_audit_survey: 'Q15',
      qrt: 'Q17',
      default: 'Q4'
    },
    validationRules: {
      required: true,
      minSelections: 1,
      maxSelections: 1
    },
    progressWeight: 1
  },

  Q4: {
    id: 'Q4',
    key: 'security_coverage',
    question_text: 'Which coverage type do you need?',
    subtext: '',
    optionType: 'chips',
    options: [
      { label: '24x7', value: '24x7' },
      { label: 'Day Shift', value: 'day_shift' },
      { label: 'Night Shift', value: 'night_shift' },
      { label: 'Multiple Shifts', value: 'multiple_shifts' },
      { label: 'Not Sure', value: 'not_sure' }
    ],
    next: 'Q5',
    validationRules: {
      required: true,
      minSelections: 1,
      maxSelections: 1
    },
    progressWeight: 1
  },

  Q5: {
    id: 'Q5',
    key: 'security_guard_count',
    question_text: 'How many guards do you need (approx.)?',
    subtext: '',
    optionType: 'buttons',
    options: [
      { label: '1–2', value: '1_2' },
      { label: '3–5', value: '3_5' },
      { label: '6–10', value: '6_10' },
      { label: '11–20', value: '11_20' },
      { label: '20+', value: '20_plus' },
      { label: 'Not Sure', value: 'not_sure' }
    ],
    next: 'Q6',
    validationRules: {
      required: true,
      minSelections: 1,
      maxSelections: 1
    },
    progressWeight: 1
  },

  Q6: {
    id: 'Q6',
    key: 'security_armed',
    question_text: 'Do you need armed guards?',
    subtext: '',
    optionType: 'chips',
    options: [
      { label: 'Yes', value: 'yes' },
      { label: 'No', value: 'no' },
      { label: 'Not Sure', value: 'not_sure' }
    ],
    next: 'Q7',
    validationRules: {
      required: true,
      minSelections: 1,
      maxSelections: 1
    },
    progressWeight: 1
  },

  Q7: {
    id: 'Q7',
    key: 'start_timeline',
    question_text: 'When do you need to start?',
    subtext: '',
    optionType: 'buttons',
    options: [
      { label: 'Immediately', value: 'immediately' },
      { label: 'Within 1 Week', value: 'within_1_week' },
      { label: 'Within 1 Month', value: 'within_1_month' },
      { label: 'Later', value: 'later' },
      { label: 'Not Sure', value: 'not_sure' }
    ],
    next: 'Q8',
    validationRules: {
      required: true,
      minSelections: 1,
      maxSelections: 1
    },
    progressWeight: 1
  },

  Q8: {
    id: 'Q8',
    key: 'site_count_type',
    question_text: 'How many locations?',
    subtext: '',
    optionType: 'chips',
    options: [
      { label: 'Single Site', value: 'single_site' },
      { label: 'Multiple Sites', value: 'multiple_sites' }
    ],
    next: 'Q9',
    validationRules: {
      required: true,
      minSelections: 1,
      maxSelections: 1
    },
    progressWeight: 1
  },

  Q9: {
    id: 'Q9',
    key: 'city_state',
    question_text: 'Where is your location?',
    subtext: '',
    optionType: 'location-picker',
    options: [], // Special handling for location picker
    next: 'Q10',
    validationRules: {
      required: true,
      minSelections: 1,
      maxSelections: 1
    },
    progressWeight: 1
  },

  Q10: {
    id: 'Q10',
    key: 'site_survey_before_quote',
    question_text: 'Want a site survey before quote?',
    subtext: '',
    optionType: 'chips',
    options: [
      { label: 'Yes', value: 'yes' },
      { label: 'No', value: 'no' },
      { label: 'Not Sure', value: 'not_sure' }
    ],
    next: 'Q11',
    validationRules: {
      required: true,
      minSelections: 1,
      maxSelections: 1
    },
    progressWeight: 1
  },

  Q11: {
    id: 'Q11',
    key: 'preferred_contact_channel',
    question_text: 'How should we connect with you?',
    subtext: '',
    optionType: 'buttons',
    options: [
      { label: 'Request Callback', value: 'request_callback' },
      { label: 'WhatsApp', value: 'whatsapp' },
      { label: 'Email', value: 'email' },
      { label: 'Call Now', value: 'call_now' },
      { label: 'Submit Enquiry', value: 'submit_enquiry' }
    ],
    next: 'REVIEW',
    validationRules: {
      required: true,
      minSelections: 1,
      maxSelections: 1
    },
    progressWeight: 1
  },

  // Event Security Sub-flow (Q12-Q14)
  Q12: {
    id: 'Q12',
    key: 'event_size',
    question_text: 'What is the expected crowd size?',
    subtext: '',
    optionType: 'buttons',
    options: [
      { label: 'Less than 200', value: 'less_200' },
      { label: '200–500', value: '200_500' },
      { label: '500–2000', value: '500_2000' },
      { label: '2000+', value: '2000_plus' },
      { label: 'Not Sure', value: 'not_sure' }
    ],
    next: 'Q13',
    validationRules: {
      required: true,
      minSelections: 1,
      maxSelections: 1
    },
    progressWeight: 1
  },

  Q13: {
    id: 'Q13',
    key: 'event_duration',
    question_text: 'How long is the event?',
    subtext: '',
    optionType: 'chips',
    options: [
      { label: 'Few Hours', value: 'few_hours' },
      { label: '1 Day', value: '1_day' },
      { label: '2–3 Days', value: '2_3_days' },
      { label: '4+ Days', value: '4_plus_days' },
      { label: 'Not Sure', value: 'not_sure' }
    ],
    next: 'Q14',
    validationRules: {
      required: true,
      minSelections: 1,
      maxSelections: 1
    },
    progressWeight: 1
  },

  Q14: {
    id: 'Q14',
    key: 'event_venue_type',
    question_text: 'What type of venue?',
    subtext: '',
    optionType: 'chips',
    options: [
      { label: 'Indoor', value: 'indoor' },
      { label: 'Outdoor', value: 'outdoor' },
      { label: 'Mixed', value: 'mixed' },
      { label: 'Not Sure', value: 'not_sure' }
    ],
    next: 'Q4', // Return to main security flow
    validationRules: {
      required: true,
      minSelections: 1,
      maxSelections: 1
    },
    progressWeight: 1
  },

  // Security Audit Sub-flow (Q15-Q16)
  Q15: {
    id: 'Q15',
    key: 'audit_scope',
    question_text: 'What audit scope do you need?',
    subtext: '',
    optionType: 'buttons',
    options: [
      { label: 'Physical Security', value: 'physical_security' },
      { label: 'Access Control', value: 'access_control' },
      { label: 'CCTV & Monitoring', value: 'cctv_monitoring' },
      { label: 'SOP Review', value: 'sop_review' },
      { label: 'Full Audit', value: 'full_audit' },
      { label: 'Not Sure', value: 'not_sure' }
    ],
    next: 'Q16',
    validationRules: {
      required: true,
      minSelections: 1,
      maxSelections: 1
    },
    progressWeight: 1
  },

  Q16: {
    id: 'Q16',
    key: 'audit_site_type',
    question_text: 'What type of site needs audit?',
    subtext: '',
    optionType: 'chips',
    options: [
      { label: 'Office', value: 'office' },
      { label: 'Plant', value: 'plant' },
      { label: 'Warehouse', value: 'warehouse' },
      { label: 'Retail', value: 'retail' },
      { label: 'Residential', value: 'residential' },
      { label: 'Other', value: 'other' }
    ],
    next: 'Q4', // Return to main security flow
    validationRules: {
      required: true,
      minSelections: 1,
      maxSelections: 1
    },
    progressWeight: 1
  },

  // QRT Sub-flow (Q17)
  Q17: {
    id: 'Q17',
    key: 'qrt_purpose',
    question_text: 'What is the QRT purpose?',
    subtext: '',
    optionType: 'buttons',
    options: [
      { label: 'Incident Response', value: 'incident_response' },
      { label: 'Night Patrol', value: 'night_patrol' },
      { label: 'High-Risk Coverage', value: 'high_risk_coverage' },
      { label: 'Temporary Support', value: 'temporary_support' },
      { label: 'Not Sure', value: 'not_sure' }
    ],
    next: 'Q4', // Return to main security flow
    validationRules: {
      required: true,
      minSelections: 1,
      maxSelections: 1
    },
    progressWeight: 1
  },

  // Facility Management Flow (Q18-Q24)
  Q18: {
    id: 'Q18',
    key: 'facility_service',
    question_text: 'Which facility service do you need?',
    subtext: '',
    optionType: 'buttons',
    options: [
      { label: 'Total Facility Management', value: 'total_facility_management' },
      { label: 'Housekeeping', value: 'housekeeping' },
      { label: 'Horticulture', value: 'horticulture' },
      { label: 'Utility Monitoring', value: 'utility_monitoring' },
      { label: 'Pest Control', value: 'pest_control' },
      { label: 'Other', value: 'other' }
    ],
    next: 'Q19',
    validationRules: {
      required: true,
      minSelections: 1,
      maxSelections: 1
    },
    progressWeight: 1
  },

  Q19: {
    id: 'Q19',
    key: 'facility_type',
    question_text: 'What type of facility?',
    subtext: '',
    optionType: 'buttons',
    options: [
      { label: 'Office', value: 'office' },
      { label: 'Hospital', value: 'hospital' },
      { label: 'Plant', value: 'plant' },
      { label: 'Hotel', value: 'hotel' },
      { label: 'School/College', value: 'school_college' },
      { label: 'Mall/Retail', value: 'mall_retail' },
      { label: 'Residential', value: 'residential' },
      { label: 'Other', value: 'other' }
    ],
    next: 'Q20',
    validationRules: {
      required: true,
      minSelections: 1,
      maxSelections: 1
    },
    progressWeight: 1
  },

  Q20: {
    id: 'Q20',
    key: 'facility_site_size',
    question_text: 'What is the site size?',
    subtext: '',
    optionType: 'chips',
    options: [
      { label: 'Small', value: 'small' },
      { label: 'Medium', value: 'medium' },
      { label: 'Large', value: 'large' },
      { label: 'Not Sure', value: 'not_sure' }
    ],
    next: 'Q21',
    validationRules: {
      required: true,
      minSelections: 1,
      maxSelections: 1
    },
    progressWeight: 1
  },

  Q21: {
    id: 'Q21',
    key: 'facility_schedule',
    question_text: 'What coverage schedule?',
    subtext: '',
    optionType: 'chips',
    options: [
      { label: 'Day', value: 'day' },
      { label: 'Night', value: 'night' },
      { label: '24x7', value: '24x7' },
      { label: 'Custom', value: 'custom' },
      { label: 'Not Sure', value: 'not_sure' }
    ],
    next: 'Q22',
    validationRules: {
      required: true,
      minSelections: 1,
      maxSelections: 1
    },
    progressWeight: 1
  },

  Q22: {
    id: 'Q22',
    key: 'facility_consumables',
    question_text: 'Need consumables included?',
    subtext: '',
    optionType: 'chips',
    options: [
      { label: 'Yes', value: 'yes' },
      { label: 'No', value: 'no' },
      { label: 'Not Sure', value: 'not_sure' }
    ],
    next: 'Q23',
    validationRules: {
      required: true,
      minSelections: 1,
      maxSelections: 1
    },
    progressWeight: 1
  },

  Q23: {
    id: 'Q23',
    key: 'facility_city_state',
    question_text: 'Where is your facility located?',
    subtext: '',
    optionType: 'location-picker',
    options: [],
    next: 'Q24',
    validationRules: {
      required: true,
      minSelections: 1,
      maxSelections: 1
    },
    progressWeight: 1
  },

  Q24: {
    id: 'Q24',
    key: 'preferred_contact_channel',
    question_text: 'How should we connect with you?',
    subtext: '',
    optionType: 'buttons',
    options: [
      { label: 'Request Callback', value: 'request_callback' },
      { label: 'WhatsApp', value: 'whatsapp' },
      { label: 'Email', value: 'email' },
      { label: 'Call Now', value: 'call_now' },
      { label: 'Submit Enquiry', value: 'submit_enquiry' }
    ],
    next: 'REVIEW',
    validationRules: {
      required: true,
      minSelections: 1,
      maxSelections: 1
    },
    progressWeight: 1
  },

  // Manpower/Payroll Flow (Q25-Q31)
  Q25: {
    id: 'Q25',
    key: 'manpower_payroll_need',
    question_text: 'What do you need?',
    subtext: '',
    optionType: 'chips',
    options: [
      { label: 'Manpower Outsourcing', value: 'manpower_outsourcing' },
      { label: 'Payroll Outsourcing', value: 'payroll_outsourcing' },
      { label: 'Both', value: 'both' }
    ],
    next: 'Q26',
    validationRules: {
      required: true,
      minSelections: 1,
      maxSelections: 1
    },
    progressWeight: 1
  },

  Q26: {
    id: 'Q26',
    key: 'hiring_type',
    question_text: 'What hiring type?',
    subtext: '',
    optionType: 'buttons',
    options: [
      { label: 'Temporary', value: 'temporary' },
      { label: 'Contract', value: 'contract' },
      { label: 'Permanent Support', value: 'permanent_support' },
      { label: 'Not Sure', value: 'not_sure' }
    ],
    next: 'Q27',
    validationRules: {
      required: true,
      minSelections: 1,
      maxSelections: 1
    },
    progressWeight: 1
  },

  Q27: {
    id: 'Q27',
    key: 'headcount_needed',
    question_text: 'How many people do you need?',
    subtext: '',
    optionType: 'buttons',
    options: [
      { label: '1��5', value: '1_5' },
      { label: '6–20', value: '6_20' },
      { label: '21–50', value: '21_50' },
      { label: '50+', value: '50_plus' },
      { label: 'Not Sure', value: 'not_sure' }
    ],
    next: 'Q28',
    validationRules: {
      required: true,
      minSelections: 1,
      maxSelections: 1
    },
    progressWeight: 1
  },

  Q28: {
    id: 'Q28',
    key: 'role_category',
    question_text: 'What role category?',
    subtext: '',
    optionType: 'buttons',
    options: [
      { label: 'Security Staff', value: 'security_staff' },
      { label: 'Housekeeping', value: 'housekeeping' },
      { label: 'Supervisors', value: 'supervisors' },
      { label: 'Office Support', value: 'office_support' },
      { label: 'Technical', value: 'technical' },
      { label: 'Other', value: 'other' }
    ],
    next: 'Q29',
    validationRules: {
      required: true,
      minSelections: 1,
      maxSelections: 1
    },
    progressWeight: 1
  },

  Q29: {
    id: 'Q29',
    key: 'locations_type',
    question_text: 'How many locations?',
    subtext: '',
    optionType: 'chips',
    options: [
      { label: 'Single Location', value: 'single_location' },
      { label: 'Multiple Locations', value: 'multiple_locations' },
      { label: 'Not Sure', value: 'not_sure' }
    ],
    next: 'Q30',
    validationRules: {
      required: true,
      minSelections: 1,
      maxSelections: 1
    },
    progressWeight: 1
  },

  Q30: {
    id: 'Q30',
    key: 'start_timeline',
    question_text: 'When do you need to start?',
    subtext: '',
    optionType: 'buttons',
    options: [
      { label: 'Immediately', value: 'immediately' },
      { label: 'Within 1 Week', value: 'within_1_week' },
      { label: 'Within 1 Month', value: 'within_1_month' },
      { label: 'Later', value: 'later' },
      { label: 'Not Sure', value: 'not_sure' }
    ],
    next: 'Q31',
    validationRules: {
      required: true,
      minSelections: 1,
      maxSelections: 1
    },
    progressWeight: 1
  },

  Q31: {
    id: 'Q31',
    key: 'preferred_contact_channel',
    question_text: 'How should we connect with you?',
    subtext: '',
    optionType: 'buttons',
    options: [
      { label: 'Request Callback', value: 'request_callback' },
      { label: 'WhatsApp', value: 'whatsapp' },
      { label: 'Email', value: 'email' },
      { label: 'Call Now', value: 'call_now' },
      { label: 'Submit Enquiry', value: 'submit_enquiry' }
    ],
    next: 'REVIEW',
    validationRules: {
      required: true,
      minSelections: 1,
      maxSelections: 1
    },
    progressWeight: 1
  },

  // Training Flow (Q32-Q37)
  Q32: {
    id: 'Q32',
    key: 'training_audience',
    question_text: 'Who needs training?',
    subtext: '',
    optionType: 'buttons',
    options: [
      { label: 'Client (train staff)', value: 'client_train_staff' },
      { label: 'Candidate (join training)', value: 'candidate_join_training' },
      { label: 'Corporate (bulk training)', value: 'corporate_bulk_training' },
      { label: 'Other', value: 'other' }
    ],
    next: 'Q33',
    validationRules: {
      required: true,
      minSelections: 1,
      maxSelections: 1
    },
    progressWeight: 1
  },

  Q33: {
    id: 'Q33',
    key: 'training_type',
    question_text: 'What type of training?',
    subtext: '',
    optionType: 'buttons',
    options: [
      { label: 'Basic', value: 'basic' },
      { label: 'Refresher', value: 'refresher' },
      { label: 'Specialized', value: 'specialized' },
      { label: 'Supervisory', value: 'supervisory' },
      { label: 'First Aid', value: 'first_aid' },
      { label: 'Crisis/Disaster', value: 'crisis_disaster' },
      { label: 'Not Sure', value: 'not_sure' }
    ],
    next: 'Q34',
    validationRules: {
      required: true,
      minSelections: 1,
      maxSelections: 1
    },
    progressWeight: 1
  },

  Q34: {
    id: 'Q34',
    key: 'training_mode',
    question_text: 'What training mode?',
    subtext: '',
    optionType: 'chips',
    options: [
      { label: 'On-site', value: 'on_site' },
      { label: 'Off-site', value: 'off_site' },
      { label: 'Residential', value: 'residential' },
      { label: 'Not Sure', value: 'not_sure' }
    ],
    next: 'Q35',
    validationRules: {
      required: true,
      minSelections: 1,
      maxSelections: 1
    },
    progressWeight: 1
  },

  Q35: {
    id: 'Q35',
    key: 'batch_size',
    question_text: 'What batch size?',
    subtext: '',
    optionType: 'buttons',
    options: [
      { label: '1–10', value: '1_10' },
      { label: '11–25', value: '11_25' },
      { label: '26–50', value: '26_50' },
      { label: '50+', value: '50_plus' },
      { label: 'Not Sure', value: 'not_sure' }
    ],
    next: 'Q36',
    validationRules: {
      required: true,
      minSelections: 1,
      maxSelections: 1
    },
    progressWeight: 1
  },

  Q36: {
    id: 'Q36',
    key: 'training_city_state',
    question_text: 'Where do you need training?',
    subtext: '',
    optionType: 'location-picker',
    options: [],
    next: 'Q37',
    validationRules: {
      required: true,
      minSelections: 1,
      maxSelections: 1
    },
    progressWeight: 1
  },

  Q37: {
    id: 'Q37',
    key: 'preferred_contact_channel',
    question_text: 'How should we connect with you?',
    subtext: '',
    optionType: 'buttons',
    options: [
      { label: 'Request Callback', value: 'request_callback' },
      { label: 'WhatsApp', value: 'whatsapp' },
      { label: 'Email', value: 'email' },
      { label: 'Call Now', value: 'call_now' },
      { label: 'Submit Enquiry', value: 'submit_enquiry' }
    ],
    next: 'REVIEW',
    validationRules: {
      required: true,
      minSelections: 1,
      maxSelections: 1
    },
    progressWeight: 1
  },

  // Careers Flow (Q38-Q41)
  Q38: {
    id: 'Q38',
    key: 'career_role',
    question_text: 'What role are you interested in?',
    subtext: '',
    optionType: 'buttons',
    options: [
      { label: 'Security Guard', value: 'security_guard' },
      { label: 'Supervisor', value: 'supervisor' },
      { label: 'Office Staff', value: 'office_staff' },
      { label: 'Trainer', value: 'trainer' },
      { label: 'Other', value: 'other' }
    ],
    next: 'Q39',
    validationRules: {
      required: true,
      minSelections: 1,
      maxSelections: 1
    },
    progressWeight: 1
  },

  Q39: {
    id: 'Q39',
    key: 'experience_level',
    question_text: 'What is your experience level?',
    subtext: '',
    optionType: 'buttons',
    options: [
      { label: 'Fresher', value: 'fresher' },
      { label: '1–3 Years', value: '1_3_years' },
      { label: '3–7 Years', value: '3_7_years' },
      { label: '7+ Years', value: '7_plus_years' }
    ],
    next: 'Q40',
    validationRules: {
      required: true,
      minSelections: 1,
      maxSelections: 1
    },
    progressWeight: 1
  },

  Q40: {
    id: 'Q40',
    key: 'career_city_state',
    question_text: 'Preferred work location?',
    subtext: '',
    optionType: 'location-picker',
    options: [],
    next: 'Q41',
    validationRules: {
      required: true,
      minSelections: 1,
      maxSelections: 1
    },
    progressWeight: 1
  },

  Q41: {
    id: 'Q41',
    key: 'career_next_step',
    question_text: 'What would you like to do next?',
    subtext: '',
    optionType: 'buttons',
    options: [
      { label: 'Upload Resume', value: 'upload_resume' },
      { label: 'Get HR Contact', value: 'get_hr_contact' },
      { label: 'View Openings', value: 'view_openings' },
      { label: 'Request Callback', value: 'request_callback' }
    ],
    next: 'REVIEW',
    validationRules: {
      required: true,
      minSelections: 1,
      maxSelections: 1
    },
    progressWeight: 1
  },

  // About Company (Q42)
  Q42: {
    id: 'Q42',
    key: 'about_topic',
    question_text: 'What would you like to know?',
    subtext: '',
    optionType: 'buttons',
    options: [
      { label: 'Company Overview', value: 'company_overview' },
      { label: 'Service Areas', value: 'service_areas' },
      { label: 'Certifications', value: 'certifications' },
      { label: 'Key Strengths', value: 'key_strengths' },
      { label: 'Client Sectors', value: 'client_sectors' },
      { label: 'Back to Main Menu', value: 'back_to_main_menu' }
    ],
    branching: {
      back_to_main_menu: 'Q2',
      default: 'END'
    },
    validationRules: {
      required: true,
      minSelections: 1,
      maxSelections: 1
    },
    progressWeight: 1
  },

  // Contact & Locations (Q43-Q44)
  Q43: {
    id: 'Q43',
    key: 'contact_department',
    question_text: 'Who do you want to reach?',
    subtext: '',
    optionType: 'buttons',
    options: [
      { label: 'Sales', value: 'sales' },
      { label: 'Helpdesk', value: 'helpdesk' },
      { label: 'Command Center', value: 'command_center' },
      { label: 'Corporate Office', value: 'corporate_office' },
      { label: 'Email Directory', value: 'email_directory' }
    ],
    next: 'Q44',
    validationRules: {
      required: true,
      minSelections: 1,
      maxSelections: 1
    },
    progressWeight: 1
  },

  Q44: {
    id: 'Q44',
    key: 'preferred_contact_method',
    question_text: 'How would you like to contact us?',
    subtext: '',
    optionType: 'chips',
    options: [
      { label: 'Call', value: 'call' },
      { label: 'WhatsApp', value: 'whatsapp' },
      { label: 'Email', value: 'email' }
    ],
    next: 'END',
    validationRules: {
      required: true,
      minSelections: 1,
      maxSelections: 1
    },
    progressWeight: 1
  },

  // Existing Client Support (Q45-Q48)
  Q45: {
    id: 'Q45',
    key: 'support_need',
    question_text: 'What do you need help with?',
    subtext: '',
    optionType: 'buttons',
    options: [
      { label: 'Raise a Complaint', value: 'raise_complaint' },
      { label: 'Request Extra Staff', value: 'request_extra_staff' },
      { label: 'Replace Staff', value: 'replace_staff' },
      { label: 'Site Supervisor Contact', value: 'site_supervisor_contact' },
      { label: 'Billing/Invoice', value: 'billing_invoice' },
      { label: 'Other', value: 'other' }
    ],
    next: 'Q46',
    validationRules: {
      required: true,
      minSelections: 1,
      maxSelections: 1
    },
    progressWeight: 1
  },

  Q46: {
    id: 'Q46',
    key: 'support_site_type',
    question_text: 'What type of site?',
    subtext: '',
    optionType: 'buttons',
    options: [
      { label: 'Security Site', value: 'security_site' },
      { label: 'Facility Site', value: 'facility_site' },
      { label: 'Manpower/Payroll', value: 'manpower_payroll' },
      { label: 'Training', value: 'training' }
    ],
    next: 'Q47',
    validationRules: {
      required: true,
      minSelections: 1,
      maxSelections: 1
    },
    progressWeight: 1
  },

  Q47: {
    id: 'Q47',
    key: 'priority_level',
    question_text: 'How urgent is this?',
    subtext: '',
    optionType: 'chips',
    options: [
      { label: 'Urgent', value: 'urgent' },
      { label: 'High', value: 'high' },
      { label: 'Normal', value: 'normal' },
      { label: 'Low', value: 'low' }
    ],
    next: 'Q48',
    validationRules: {
      required: true,
      minSelections: 1,
      maxSelections: 1
    },
    progressWeight: 1
  },

  Q48: {
    id: 'Q48',
    key: 'preferred_contact_channel',
    question_text: 'How should we contact you?',
    subtext: '',
    optionType: 'buttons',
    options: [
      { label: 'Call Back', value: 'call_back' },
      { label: 'WhatsApp', value: 'whatsapp' },
      { label: 'Email', value: 'email' },
      { label: 'Call Now', value: 'call_now' }
    ],
    next: 'REVIEW',
    validationRules: {
      required: true,
      minSelections: 1,
      maxSelections: 1
    },
    progressWeight: 1
  },

  // Fallback (Q49)
  Q49: {
    id: 'Q49',
    key: 'fallback_choice',
    question_text: "I didn't catch that. What would you like to do?",
    subtext: '',
    optionType: 'buttons',
    options: [
      { label: 'Security Services', value: 'security_services' },
      { label: 'Facility Management', value: 'facility_management' },
      { label: 'Manpower/Payroll', value: 'manpower_payroll' },
      { label: 'Training', value: 'training' },
      { label: 'Careers', value: 'careers' },
      { label: 'Contact & Locations', value: 'contact_locations' },
      { label: 'Existing Client Support', value: 'existing_client_support' },
      { label: 'Main Menu', value: 'main_menu' }
    ],
    branching: {
      security_services: 'Q3',
      facility_management: 'Q18',
      manpower_payroll: 'Q25',
      training: 'Q32',
      careers: 'Q38',
      contact_locations: 'Q43',
      existing_client_support: 'Q45',
      main_menu: 'Q2',
      default: 'Q2'
    },
    next: 'Q2',
    validationRules: {
      required: true,
      minSelections: 1,
      maxSelections: 1
    },
    progressWeight: 1
  }
};

/**
 * Get next question ID based on current question and selected answer
 */
export function getNextQuestionId(currentQuestionId, selectedValue) {
  const question = conversationFlow[currentQuestionId];

  if (!question) return null;

  // Check for branching logic
  if (question.branching) {
    // Check if there's a specific branch for this value
    if (question.branching[selectedValue]) {
      return question.branching[selectedValue];
    }
    // Fall back to default if exists
    if (question.branching.default) {
      return question.branching.default;
    }
  }

  // Use direct next if no branching
  return question.next || null;
}

/**
 * Get all question IDs for a given flow path
 */
export function getFlowQuestions(intentValue) {
  const flowMap = {
    security_services: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10', 'Q11'],
    facility_management: ['Q1', 'Q2', 'Q18', 'Q19', 'Q20', 'Q21', 'Q22', 'Q23', 'Q24'],
    manpower_payroll: ['Q1', 'Q2', 'Q25', 'Q26', 'Q27', 'Q28', 'Q29', 'Q30', 'Q31'],
    training: ['Q1', 'Q2', 'Q32', 'Q33', 'Q34', 'Q35', 'Q36', 'Q37'],
    careers: ['Q1', 'Q2', 'Q38', 'Q39', 'Q40', 'Q41'],
    about_company: ['Q1', 'Q2', 'Q42'],
    contact_locations: ['Q1', 'Q2', 'Q43', 'Q44'],
    existing_client_support: ['Q1', 'Q2', 'Q45', 'Q46', 'Q47', 'Q48']
  };

  return flowMap[intentValue] || [];
}
