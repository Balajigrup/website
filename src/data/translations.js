/**
 * Hindi Translations for Chatbot
 * Complete translation of all 49 questions and options
 */

export const translations = {
  // Q1 - Language Selection
  Q1: {
    question_text: {
      en: 'Choose your preferred language',
      hi: 'अपनी पसंदीदा भाषा चुनें'
    },
    options: {
      en: [
        { label: 'English', value: 'en' },
        { label: 'हिंदी', value: 'hi' }
      ],
      hi: [
        { label: 'English', value: 'en' },
        { label: 'हिंदी', value: 'hi' }
      ]
    }
  },

  // Q2 - Main Intent
  Q2: {
    question_text: {
      en: 'How can I help you today?',
      hi: 'मैं आज आपकी कैसे मदद कर सकता हूँ?'
    },
    options: {
      en: [
        { label: 'Security Services', value: 'security_services', icon: '🛡️', description: '24/7 protection solutions' },
        { label: 'Facility Management', value: 'facility_management', icon: '🏢', description: 'Complete facility services' },
        { label: 'Manpower/Payroll', value: 'manpower_payroll', icon: '👥', description: 'Outsourcing solutions' },
        { label: 'Training', value: 'training', icon: '📚', description: 'Professional training programs' },
        { label: 'Careers', value: 'careers', icon: '💼', description: 'Join our team' },
        { label: 'About Company', value: 'about_company', icon: 'ℹ️', description: 'Learn about us' },
        { label: 'Contact & Locations', value: 'contact_locations', icon: '📞', description: 'Get in touch' },
        { label: 'Existing Client Support', value: 'existing_client_support', icon: '🆘', description: 'Help for clients' }
      ],
      hi: [
        { label: 'सुरक्षा सेवाएं', value: 'security_services', icon: '🛡️', description: '24/7 सुरक्षा समाधान' },
        { label: 'सुविधा प्रबंधन', value: 'facility_management', icon: '🏢', description: 'संपूर्ण सुविधा सेवाएं' },
        { label: 'मानव शक्ति/पेरोल', value: 'manpower_payroll', icon: '👥', description: 'आउटसोर्सिंग समाधान' },
        { label: 'प्रशिक्षण', value: 'training', icon: '📚', description: 'व्यावसायिक प्रशिक्षण कार्यक्रम' },
        { label: 'करियर', value: 'careers', icon: '💼', description: 'हमारी टीम में शामिल हों' },
        { label: 'कंपनी के बारे में', value: 'about_company', icon: 'ℹ️', description: 'हमारे बारे में जानें' },
        { label: 'संपर्क और स्थान', value: 'contact_locations', icon: '📞', description: 'संपर्क करें' },
        { label: 'मौजूदा ग्राहक सहायता', value: 'existing_client_support', icon: '🆘', description: 'ग्राहकों के लिए सहायता' }
      ]
    }
  },

  // Q3 - Security Use Case
  Q3: {
    question_text: {
      en: 'What do you need security for?',
      hi: 'आपको किसके लिए सुरक्षा चाहिए?'
    },
    options: {
      en: [
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
      hi: [
        { label: 'कॉर्पोरेट कार्यालय', value: 'corporate_office' },
        { label: 'औद्योगिक/संयंत्र', value: 'industrial_plant' },
        { label: 'गोदाम/लॉजिस्टिक्स', value: 'warehouse_logistics' },
        { label: 'रिटेल/मॉल', value: 'retail_mall' },
        { label: 'आवासीय/सोसायटी', value: 'residential_society' },
        { label: 'कार्यक्रम', value: 'event' },
        { label: 'VIP/कार्यकारी', value: 'vip_executive' },
        { label: 'सुरक्षा ऑडिट/सर्वेक्षण', value: 'security_audit_survey' },
        { label: 'त्वरित प्रतिक्रिया टीम (QRT)', value: 'qrt' }
      ]
    }
  },

  // Q4 - Security Coverage
  Q4: {
    question_text: {
      en: 'Which coverage type do you need?',
      hi: 'आपको किस प्रकार का कवरेज चाहिए?'
    },
    options: {
      en: [
        { label: '24x7', value: '24x7' },
        { label: 'Day Shift', value: 'day_shift' },
        { label: 'Night Shift', value: 'night_shift' },
        { label: 'Multiple Shifts', value: 'multiple_shifts' },
        { label: 'Not Sure', value: 'not_sure' }
      ],
      hi: [
        { label: '24x7', value: '24x7' },
        { label: 'दिन की पाली', value: 'day_shift' },
        { label: 'रात की पाली', value: 'night_shift' },
        { label: 'कई पालियां', value: 'multiple_shifts' },
        { label: 'निश्चित नहीं', value: 'not_sure' }
      ]
    }
  },

  // Q5 - Guard Count
  Q5: {
    question_text: {
      en: 'How many guards do you need (approx.)?',
      hi: 'आपको कितने गार्ड चाहिए (अनुमानित)?'
    },
    options: {
      en: [
        { label: '1–2', value: '1_2' },
        { label: '3–5', value: '3_5' },
        { label: '6–10', value: '6_10' },
        { label: '11–20', value: '11_20' },
        { label: '20+', value: '20_plus' },
        { label: 'Not Sure', value: 'not_sure' }
      ],
      hi: [
        { label: '1–2', value: '1_2' },
        { label: '3–5', value: '3_5' },
        { label: '6–10', value: '6_10' },
        { label: '11–20', value: '11_20' },
        { label: '20+', value: '20_plus' },
        { label: 'निश्चित नहीं', value: 'not_sure' }
      ]
    }
  },

  // Q6 - Armed Guards
  Q6: {
    question_text: {
      en: 'Do you need armed guards?',
      hi: 'क्या आपको सशस्त्र गार्ड चाहिए?'
    },
    options: {
      en: [
        { label: 'Yes', value: 'yes' },
        { label: 'No', value: 'no' },
        { label: 'Not Sure', value: 'not_sure' }
      ],
      hi: [
        { label: 'हां', value: 'yes' },
        { label: 'नहीं', value: 'no' },
        { label: 'निश्चित नहीं', value: 'not_sure' }
      ]
    }
  },

  // Q7 - Start Timeline
  Q7: {
    question_text: {
      en: 'When do you need to start?',
      hi: 'आपको कब शुरू करना है?'
    },
    options: {
      en: [
        { label: 'Immediately', value: 'immediately' },
        { label: 'Within 1 Week', value: 'within_1_week' },
        { label: 'Within 1 Month', value: 'within_1_month' },
        { label: 'Later', value: 'later' },
        { label: 'Not Sure', value: 'not_sure' }
      ],
      hi: [
        { label: 'तुरंत', value: 'immediately' },
        { label: '1 सप्ताह के भीतर', value: 'within_1_week' },
        { label: '1 महीने के भीतर', value: 'within_1_month' },
        { label: 'बाद में', value: 'later' },
        { label: 'निश्चित नहीं', value: 'not_sure' }
      ]
    }
  },

  // Q8 - Site Count Type
  Q8: {
    question_text: {
      en: 'How many locations?',
      hi: 'कितने स्थान हैं?'
    },
    options: {
      en: [
        { label: 'Single Site', value: 'single_site' },
        { label: 'Multiple Sites', value: 'multiple_sites' }
      ],
      hi: [
        { label: 'एक साइट', value: 'single_site' },
        { label: 'कई साइट', value: 'multiple_sites' }
      ]
    }
  },

  // Q9 - Location (uses LocationPicker component - translations in component)
  Q9: {
    question_text: {
      en: 'Where is your location?',
      hi: 'आपका स्थान कहाँ है?'
    }
  },

  // Q10 - Site Survey
  Q10: {
    question_text: {
      en: 'Want a site survey before quote?',
      hi: 'कोटेशन से पहले साइट सर्वेक्षण चाहिए?'
    },
    options: {
      en: [
        { label: 'Yes', value: 'yes' },
        { label: 'No', value: 'no' },
        { label: 'Not Sure', value: 'not_sure' }
      ],
      hi: [
        { label: 'हां', value: 'yes' },
        { label: 'नहीं', value: 'no' },
        { label: 'निश्चित नहीं', value: 'not_sure' }
      ]
    }
  },

  // Q11 - Contact Channel
  Q11: {
    question_text: {
      en: 'How should we connect with you?',
      hi: 'हम आपसे कैसे जुड़ें?'
    },
    options: {
      en: [
        { label: 'Request Callback', value: 'request_callback' },
        { label: 'WhatsApp', value: 'whatsapp' },
        { label: 'Email', value: 'email' },
        { label: 'Call Now', value: 'call_now' },
        { label: 'Submit Enquiry', value: 'submit_enquiry' }
      ],
      hi: [
        { label: 'कॉलबैक का अनुरोध करें', value: 'request_callback' },
        { label: 'व्हाट्सएप', value: 'whatsapp' },
        { label: 'ईमेल', value: 'email' },
        { label: 'अभी कॉल करें', value: 'call_now' },
        { label: 'पूछताछ सबमिट करें', value: 'submit_enquiry' }
      ]
    }
  },

  // Q12 - Event Crowd Size
  Q12: {
    question_text: {
      en: 'What is the expected crowd size?',
      hi: 'अपेक्षित भीड़ का आकार क्या है?'
    },
    options: {
      en: [
        { label: 'Less than 200', value: 'less_200' },
        { label: '200–500', value: '200_500' },
        { label: '500–2000', value: '500_2000' },
        { label: '2000+', value: '2000_plus' },
        { label: 'Not Sure', value: 'not_sure' }
      ],
      hi: [
        { label: '200 से कम', value: 'less_200' },
        { label: '200–500', value: '200_500' },
        { label: '500–2000', value: '500_2000' },
        { label: '2000+', value: '2000_plus' },
        { label: 'निश्चित नहीं', value: 'not_sure' }
      ]
    }
  },

  // Q13 - Event Duration
  Q13: {
    question_text: {
      en: 'How long is the event?',
      hi: 'कार्यक्रम कितने समय का है?'
    },
    options: {
      en: [
        { label: 'Few Hours', value: 'few_hours' },
        { label: '1 Day', value: '1_day' },
        { label: '2–3 Days', value: '2_3_days' },
        { label: '4+ Days', value: '4_plus_days' },
        { label: 'Not Sure', value: 'not_sure' }
      ],
      hi: [
        { label: 'कुछ घंटे', value: 'few_hours' },
        { label: '1 दिन', value: '1_day' },
        { label: '2–3 दिन', value: '2_3_days' },
        { label: '4+ दिन', value: '4_plus_days' },
        { label: 'निश्चित नहीं', value: 'not_sure' }
      ]
    }
  },

  // Q14 - Event Venue Type
  Q14: {
    question_text: {
      en: 'What type of venue?',
      hi: 'किस प्रकार का स्थल है?'
    },
    options: {
      en: [
        { label: 'Indoor', value: 'indoor' },
        { label: 'Outdoor', value: 'outdoor' },
        { label: 'Mixed', value: 'mixed' },
        { label: 'Not Sure', value: 'not_sure' }
      ],
      hi: [
        { label: 'इनडोर', value: 'indoor' },
        { label: 'आउटडोर', value: 'outdoor' },
        { label: 'मिश्रित', value: 'mixed' },
        { label: 'निश्चित नहीं', value: 'not_sure' }
      ]
    }
  },

  // Q15 - Security Audit Scope
  Q15: {
    question_text: {
      en: 'What audit scope do you need?',
      hi: 'आपको किस प्रकार के ऑडिट की आवश्यकता है?'
    },
    options: {
      en: [
        { label: 'Physical Security', value: 'physical_security' },
        { label: 'Access Control', value: 'access_control' },
        { label: 'CCTV & Monitoring', value: 'cctv_monitoring' },
        { label: 'SOP Review', value: 'sop_review' },
        { label: 'Full Audit', value: 'full_audit' },
        { label: 'Not Sure', value: 'not_sure' }
      ],
      hi: [
        { label: 'भौतिक सुरक्षा', value: 'physical_security' },
        { label: 'एक्सेस कंट्रोल', value: 'access_control' },
        { label: 'CCTV और निगरानी', value: 'cctv_monitoring' },
        { label: 'SOP समीक्षा', value: 'sop_review' },
        { label: 'संपूर्ण ऑडिट', value: 'full_audit' },
        { label: 'निश्चित नहीं', value: 'not_sure' }
      ]
    }
  },

  // Q16 - Audit Site Type
  Q16: {
    question_text: {
      en: 'What type of site needs audit?',
      hi: 'किस प्रकार के स्थल को ऑडिट की आवश्यकता है?'
    },
    options: {
      en: [
        { label: 'Office', value: 'office' },
        { label: 'Plant', value: 'plant' },
        { label: 'Warehouse', value: 'warehouse' },
        { label: 'Retail', value: 'retail' },
        { label: 'Residential', value: 'residential' },
        { label: 'Other', value: 'other' }
      ],
      hi: [
        { label: 'कार्यालय', value: 'office' },
        { label: 'संयंत्र', value: 'plant' },
        { label: 'गोदाम', value: 'warehouse' },
        { label: 'रिटेल', value: 'retail' },
        { label: 'आवासीय', value: 'residential' },
        { label: 'अन्य', value: 'other' }
      ]
    }
  },

  // Q17 - QRT Purpose
  Q17: {
    question_text: {
      en: 'What is the QRT purpose?',
      hi: 'QRT का उद्देश्य क्या है?'
    },
    options: {
      en: [
        { label: 'Incident Response', value: 'incident_response' },
        { label: 'Night Patrol', value: 'night_patrol' },
        { label: 'High-Risk Coverage', value: 'high_risk_coverage' },
        { label: 'Temporary Support', value: 'temporary_support' },
        { label: 'Not Sure', value: 'not_sure' }
      ],
      hi: [
        { label: 'घटना प्रतिक्रिया', value: 'incident_response' },
        { label: 'रात्रि गश्त', value: 'night_patrol' },
        { label: 'उच्च जोखिम कवरेज', value: 'high_risk_coverage' },
        { label: 'अस्थायी सहायता', value: 'temporary_support' },
        { label: 'निश्चित नहीं', value: 'not_sure' }
      ]
    }
  },

  // Q18 - Facility Service
  Q18: {
    question_text: {
      en: 'Which facility service do you need?',
      hi: 'आपको किस सुविधा सेवा की आवश्यकता है?'
    },
    options: {
      en: [
        { label: 'Total Facility Management', value: 'total_facility_management' },
        { label: 'Housekeeping', value: 'housekeeping' },
        { label: 'Horticulture', value: 'horticulture' },
        { label: 'Utility Monitoring', value: 'utility_monitoring' },
        { label: 'Pest Control', value: 'pest_control' },
        { label: 'Other', value: 'other' }
      ],
      hi: [
        { label: 'संपूर्ण सुविधा प्रबंधन', value: 'total_facility_management' },
        { label: 'हाउसकीपिंग', value: 'housekeeping' },
        { label: 'बागवानी', value: 'horticulture' },
        { label: 'उपयोगिता निगरानी', value: 'utility_monitoring' },
        { label: 'कीट नियंत्रण', value: 'pest_control' },
        { label: 'अन्य', value: 'other' }
      ]
    }
  },

  // Q19 - Facility Type
  Q19: {
    question_text: {
      en: 'What type of facility?',
      hi: 'किस प्रकार की सुविधा है?'
    },
    options: {
      en: [
        { label: 'Office', value: 'office' },
        { label: 'Hospital', value: 'hospital' },
        { label: 'Plant', value: 'plant' },
        { label: 'Hotel', value: 'hotel' },
        { label: 'School/College', value: 'school_college' },
        { label: 'Mall/Retail', value: 'mall_retail' },
        { label: 'Residential', value: 'residential' },
        { label: 'Other', value: 'other' }
      ],
      hi: [
        { label: 'कार्यालय', value: 'office' },
        { label: 'अस्पताल', value: 'hospital' },
        { label: 'संयंत्र', value: 'plant' },
        { label: 'होटल', value: 'hotel' },
        { label: 'स्कूल/कॉलेज', value: 'school_college' },
        { label: 'मॉल/रिटेल', value: 'mall_retail' },
        { label: 'आवासीय', value: 'residential' },
        { label: 'अन्य', value: 'other' }
      ]
    }
  },

  // Q20 - Facility Site Size
  Q20: {
    question_text: {
      en: 'What is the site size?',
      hi: 'साइट का आकार क्या है?'
    },
    options: {
      en: [
        { label: 'Small', value: 'small' },
        { label: 'Medium', value: 'medium' },
        { label: 'Large', value: 'large' },
        { label: 'Not Sure', value: 'not_sure' }
      ],
      hi: [
        { label: 'छोटा', value: 'small' },
        { label: 'मध्यम', value: 'medium' },
        { label: 'बड़ा', value: 'large' },
        { label: 'निश्चित नहीं', value: 'not_sure' }
      ]
    }
  },

  // Q21 - Facility Schedule
  Q21: {
    question_text: {
      en: 'What coverage schedule?',
      hi: 'कवरेज शेड्यूल क्या है?'
    },
    options: {
      en: [
        { label: 'Day', value: 'day' },
        { label: 'Night', value: 'night' },
        { label: '24x7', value: '24x7' },
        { label: 'Custom', value: 'custom' },
        { label: 'Not Sure', value: 'not_sure' }
      ],
      hi: [
        { label: 'दिन', value: 'day' },
        { label: 'रात', value: 'night' },
        { label: '24x7', value: '24x7' },
        { label: 'कस्टम', value: 'custom' },
        { label: 'निश्चित नहीं', value: 'not_sure' }
      ]
    }
  },

  // Q22 - Facility Consumables
  Q22: {
    question_text: {
      en: 'Need consumables included?',
      hi: 'क्या उपभोग्य सामग्री शामिल करनी है?'
    },
    options: {
      en: [
        { label: 'Yes', value: 'yes' },
        { label: 'No', value: 'no' },
        { label: 'Not Sure', value: 'not_sure' }
      ],
      hi: [
        { label: 'हां', value: 'yes' },
        { label: 'नहीं', value: 'no' },
        { label: 'निश्चित नहीं', value: 'not_sure' }
      ]
    }
  },

  // Q23 - Facility Location
  Q23: {
    question_text: {
      en: 'Where is your facility located?',
      hi: 'आपकी सुविधा कहाँ स्थित है?'
    }
  },

  // Q24 - Facility Contact Channel
  Q24: {
    question_text: {
      en: 'How should we connect with you?',
      hi: 'हम आपसे कैसे जुड़ें?'
    },
    options: {
      en: [
        { label: 'Request Callback', value: 'request_callback' },
        { label: 'WhatsApp', value: 'whatsapp' },
        { label: 'Email', value: 'email' },
        { label: 'Call Now', value: 'call_now' },
        { label: 'Submit Enquiry', value: 'submit_enquiry' }
      ],
      hi: [
        { label: 'कॉलबैक का अनुरोध करें', value: 'request_callback' },
        { label: 'व्हाट्सएप', value: 'whatsapp' },
        { label: 'ईमेल', value: 'email' },
        { label: 'अभी कॉल करें', value: 'call_now' },
        { label: 'पूछताछ सबमिट करें', value: 'submit_enquiry' }
      ]
    }
  },

  // Q25 - Manpower/Payroll Need
  Q25: {
    question_text: {
      en: 'What do you need?',
      hi: 'आपको क्या चाहिए?'
    },
    options: {
      en: [
        { label: 'Manpower Outsourcing', value: 'manpower_outsourcing' },
        { label: 'Payroll Outsourcing', value: 'payroll_outsourcing' },
        { label: 'Both', value: 'both' }
      ],
      hi: [
        { label: 'मानव शक्ति आउटसोर्सिंग', value: 'manpower_outsourcing' },
        { label: 'पेरोल आउटसोर्सिंग', value: 'payroll_outsourcing' },
        { label: 'दोनों', value: 'both' }
      ]
    }
  },

  // Q26 - Hiring Type
  Q26: {
    question_text: {
      en: 'What hiring type?',
      hi: 'किस प्रकार की भर्ती चाहिए?'
    },
    options: {
      en: [
        { label: 'Temporary', value: 'temporary' },
        { label: 'Contract', value: 'contract' },
        { label: 'Permanent Support', value: 'permanent_support' },
        { label: 'Not Sure', value: 'not_sure' }
      ],
      hi: [
        { label: 'अस्थायी', value: 'temporary' },
        { label: 'अनुबंध', value: 'contract' },
        { label: 'स्थायी सहायता', value: 'permanent_support' },
        { label: 'निश्चित नहीं', value: 'not_sure' }
      ]
    }
  },

  // Q27 - Headcount Needed
  Q27: {
    question_text: {
      en: 'How many people do you need?',
      hi: 'आपको कितने लोगों की आवश्यकता है?'
    },
    options: {
      en: [
        { label: '1–5', value: '1_5' },
        { label: '6–20', value: '6_20' },
        { label: '21–50', value: '21_50' },
        { label: '50+', value: '50_plus' },
        { label: 'Not Sure', value: 'not_sure' }
      ],
      hi: [
        { label: '1–5', value: '1_5' },
        { label: '6–20', value: '6_20' },
        { label: '21–50', value: '21_50' },
        { label: '50+', value: '50_plus' },
        { label: 'निश्चित नहीं', value: 'not_sure' }
      ]
    }
  },

  // Q28 - Role Category
  Q28: {
    question_text: {
      en: 'What role category?',
      hi: 'किस भूमिका की श्रेणी चाहिए?'
    },
    options: {
      en: [
        { label: 'Security Staff', value: 'security_staff' },
        { label: 'Housekeeping', value: 'housekeeping' },
        { label: 'Supervisors', value: 'supervisors' },
        { label: 'Office Support', value: 'office_support' },
        { label: 'Technical', value: 'technical' },
        { label: 'Other', value: 'other' }
      ],
      hi: [
        { label: 'सुरक्षा कर्मचारी', value: 'security_staff' },
        { label: 'हाउसकीपिंग', value: 'housekeeping' },
        { label: 'पर्यवेक्षक', value: 'supervisors' },
        { label: 'कार्यालय सहायता', value: 'office_support' },
        { label: 'तकनीकी', value: 'technical' },
        { label: 'अन्य', value: 'other' }
      ]
    }
  },

  // Q29 - Locations Type
  Q29: {
    question_text: {
      en: 'How many locations?',
      hi: 'कितने स्थान हैं?'
    },
    options: {
      en: [
        { label: 'Single Location', value: 'single_location' },
        { label: 'Multiple Locations', value: 'multiple_locations' },
        { label: 'Not Sure', value: 'not_sure' }
      ],
      hi: [
        { label: 'एक स्थान', value: 'single_location' },
        { label: 'कई स्थान', value: 'multiple_locations' },
        { label: 'निश्चित नहीं', value: 'not_sure' }
      ]
    }
  },

  // Q30 - Manpower Start Timeline
  Q30: {
    question_text: {
      en: 'When do you need to start?',
      hi: 'आपको कब शुरू करना है?'
    },
    options: {
      en: [
        { label: 'Immediately', value: 'immediately' },
        { label: 'Within 1 Week', value: 'within_1_week' },
        { label: 'Within 1 Month', value: 'within_1_month' },
        { label: 'Later', value: 'later' },
        { label: 'Not Sure', value: 'not_sure' }
      ],
      hi: [
        { label: 'तुरंत', value: 'immediately' },
        { label: '1 सप्ताह के भीतर', value: 'within_1_week' },
        { label: '1 महीने के भीतर', value: 'within_1_month' },
        { label: 'बाद में', value: 'later' },
        { label: 'निश्चित नहीं', value: 'not_sure' }
      ]
    }
  },

  // Q31 - Manpower Contact Channel
  Q31: {
    question_text: {
      en: 'How should we connect with you?',
      hi: 'हम आपसे ���ैसे जुड़ें?'
    },
    options: {
      en: [
        { label: 'Request Callback', value: 'request_callback' },
        { label: 'WhatsApp', value: 'whatsapp' },
        { label: 'Email', value: 'email' },
        { label: 'Call Now', value: 'call_now' },
        { label: 'Submit Enquiry', value: 'submit_enquiry' }
      ],
      hi: [
        { label: 'कॉलबैक का अनुरोध करें', value: 'request_callback' },
        { label: 'व्हाट्सएप', value: 'whatsapp' },
        { label: 'ईमेल', value: 'email' },
        { label: 'अभी कॉल करें', value: 'call_now' },
        { label: 'पूछताछ सबमिट करें', value: 'submit_enquiry' }
      ]
    }
  },

  // Q32 - Training Audience
  Q32: {
    question_text: {
      en: 'Who needs training?',
      hi: 'किसे प्रशिक्षण की आवश्यकता है?'
    },
    options: {
      en: [
        { label: 'Client (train staff)', value: 'client_train_staff' },
        { label: 'Candidate (join training)', value: 'candidate_join_training' },
        { label: 'Corporate (bulk training)', value: 'corporate_bulk_training' },
        { label: 'Other', value: 'other' }
      ],
      hi: [
        { label: 'ग्राहक (स्टाफ को प्रशिक्षित करें)', value: 'client_train_staff' },
        { label: 'उम्मीदवार (प्रशिक्षण में शामिल हों)', value: 'candidate_join_training' },
        { label: 'कॉर्पोरेट (थोक प्रशिक्षण)', value: 'corporate_bulk_training' },
        { label: 'अन्य', value: 'other' }
      ]
    }
  },

  // Q33 - Training Type
  Q33: {
    question_text: {
      en: 'What type of training?',
      hi: 'किस प्रकार का प्रशिक्षण चाहिए?'
    },
    options: {
      en: [
        { label: 'Basic', value: 'basic' },
        { label: 'Refresher', value: 'refresher' },
        { label: 'Specialized', value: 'specialized' },
        { label: 'Supervisory', value: 'supervisory' },
        { label: 'First Aid', value: 'first_aid' },
        { label: 'Crisis/Disaster', value: 'crisis_disaster' },
        { label: 'Not Sure', value: 'not_sure' }
      ],
      hi: [
        { label: 'बुनियादी', value: 'basic' },
        { label: 'रिफ्रेशर', value: 'refresher' },
        { label: 'विशेष', value: 'specialized' },
        { label: 'पर्यवेक्षण', value: 'supervisory' },
        { label: 'प्राथमिक चिकित्सा', value: 'first_aid' },
        { label: 'संकट/आपदा', value: 'crisis_disaster' },
        { label: 'निश्चित नहीं', value: 'not_sure' }
      ]
    }
  },

  // Q34 - Training Mode
  Q34: {
    question_text: {
      en: 'What training mode?',
      hi: 'प्रशिक्षण का तरीका क्या है?'
    },
    options: {
      en: [
        { label: 'On-site', value: 'on_site' },
        { label: 'Off-site', value: 'off_site' },
        { label: 'Residential', value: 'residential' },
        { label: 'Not Sure', value: 'not_sure' }
      ],
      hi: [
        { label: 'साइट पर', value: 'on_site' },
        { label: 'साइट के बाहर', value: 'off_site' },
        { label: 'आवासीय', value: 'residential' },
        { label: 'निश्चित नहीं', value: 'not_sure' }
      ]
    }
  },

  // Q35 - Batch Size
  Q35: {
    question_text: {
      en: 'What batch size?',
      hi: 'बैच का आकार क्या है?'
    },
    options: {
      en: [
        { label: '1–10', value: '1_10' },
        { label: '11–25', value: '11_25' },
        { label: '26–50', value: '26_50' },
        { label: '50+', value: '50_plus' },
        { label: 'Not Sure', value: 'not_sure' }
      ],
      hi: [
        { label: '1–10', value: '1_10' },
        { label: '11–25', value: '11_25' },
        { label: '26–50', value: '26_50' },
        { label: '50+', value: '50_plus' },
        { label: 'निश्चित नहीं', value: 'not_sure' }
      ]
    }
  },

  // Q36 - Training Location
  Q36: {
    question_text: {
      en: 'Where do you need training?',
      hi: 'आपको कहाँ प्रशिक्षण चाहिए?'
    }
  },

  // Q37 - Training Contact Channel
  Q37: {
    question_text: {
      en: 'How should we connect with you?',
      hi: 'हम आपसे कैसे जुड़ें?'
    },
    options: {
      en: [
        { label: 'Request Callback', value: 'request_callback' },
        { label: 'WhatsApp', value: 'whatsapp' },
        { label: 'Email', value: 'email' },
        { label: 'Call Now', value: 'call_now' },
        { label: 'Submit Enquiry', value: 'submit_enquiry' }
      ],
      hi: [
        { label: 'कॉलबैक का अनुरोध करें', value: 'request_callback' },
        { label: 'व्हाट्सएप', value: 'whatsapp' },
        { label: 'ईमेल', value: 'email' },
        { label: 'अभी कॉल करें', value: 'call_now' },
        { label: 'पूछताछ सबमिट करें', value: 'submit_enquiry' }
      ]
    }
  },

  // Q38 - Career Role
  Q38: {
    question_text: {
      en: 'What role are you interested in?',
      hi: 'आप किस भूमिका में रुचि रखते हैं?'
    },
    options: {
      en: [
        { label: 'Security Guard', value: 'security_guard' },
        { label: 'Supervisor', value: 'supervisor' },
        { label: 'Office Staff', value: 'office_staff' },
        { label: 'Trainer', value: 'trainer' },
        { label: 'Other', value: 'other' }
      ],
      hi: [
        { label: 'सुरक्षा गार्ड', value: 'security_guard' },
        { label: 'पर्यवेक्षक', value: 'supervisor' },
        { label: 'कार्यालय कर्मचारी', value: 'office_staff' },
        { label: 'प्रशिक्षक', value: 'trainer' },
        { label: 'अन्य', value: 'other' }
      ]
    }
  },

  // Q39 - Experience Level
  Q39: {
    question_text: {
      en: 'What is your experience level?',
      hi: 'आपका अनुभव स्तर क्या है?'
    },
    options: {
      en: [
        { label: 'Fresher', value: 'fresher' },
        { label: '1–3 Years', value: '1_3_years' },
        { label: '3–7 Years', value: '3_7_years' },
        { label: '7+ Years', value: '7_plus_years' }
      ],
      hi: [
        { label: 'नया', value: 'fresher' },
        { label: '1–3 वर्ष', value: '1_3_years' },
        { label: '3–7 वर्ष', value: '3_7_years' },
        { label: '7+ वर्ष', value: '7_plus_years' }
      ]
    }
  },

  // Q40 - Career Location
  Q40: {
    question_text: {
      en: 'Preferred work location?',
      hi: 'पसंदीदा कार्य स्थान?'
    }
  },

  // Q41 - Career Next Step
  Q41: {
    question_text: {
      en: 'What would you like to do next?',
      hi: 'आप आगे क्या करना चाहेंगे?'
    },
    options: {
      en: [
        { label: 'Upload Resume', value: 'upload_resume' },
        { label: 'Get HR Contact', value: 'get_hr_contact' },
        { label: 'View Openings', value: 'view_openings' },
        { label: 'Request Callback', value: 'request_callback' }
      ],
      hi: [
        { label: 'रिज्यूमे अपलोड करें', value: 'upload_resume' },
        { label: 'HR संपर्क प्राप्त करें', value: 'get_hr_contact' },
        { label: 'रिक्तियां देखें', value: 'view_openings' },
        { label: 'कॉलबैक का अनुरोध करें', value: 'request_callback' }
      ]
    }
  },

  // Q42 - About Company Topic
  Q42: {
    question_text: {
      en: 'What would you like to know?',
      hi: 'आप क्या जानना चाहेंगे?'
    },
    options: {
      en: [
        { label: 'Company Overview', value: 'company_overview' },
        { label: 'Service Areas', value: 'service_areas' },
        { label: 'Certifications', value: 'certifications' },
        { label: 'Key Strengths', value: 'key_strengths' },
        { label: 'Client Sectors', value: 'client_sectors' },
        { label: 'Back to Main Menu', value: 'back_to_main_menu' }
      ],
      hi: [
        { label: 'कंपनी का विवरण', value: 'company_overview' },
        { label: 'सेवा क्षेत्र', value: 'service_areas' },
        { label: 'प्रमाणपत्र', value: 'certifications' },
        { label: 'प्रमुख शक्तियां', value: 'key_strengths' },
        { label: 'ग्राहक क्षेत्र', value: 'client_sectors' },
        { label: 'मुख्य मेनू पर वापस जाएं', value: 'back_to_main_menu' }
      ]
    }
  },

  // Q43 - Contact Department
  Q43: {
    question_text: {
      en: 'Who do you want to reach?',
      hi: 'आप किससे संपर्क करना चाहते हैं?'
    },
    options: {
      en: [
        { label: 'Sales', value: 'sales' },
        { label: 'Helpdesk', value: 'helpdesk' },
        { label: 'Command Center', value: 'command_center' },
        { label: 'Corporate Office', value: 'corporate_office' },
        { label: 'Email Directory', value: 'email_directory' }
      ],
      hi: [
        { label: 'बिक्री', value: 'sales' },
        { label: 'हेल्पडेस्क', value: 'helpdesk' },
        { label: 'कमांड सेंटर', value: 'command_center' },
        { label: 'कॉर्पोरेट कार्यालय', value: 'corporate_office' },
        { label: 'ईमेल निर्देशिका', value: 'email_directory' }
      ]
    }
  },

  // Q44 - Contact Method
  Q44: {
    question_text: {
      en: 'How would you like to contact us?',
      hi: 'आप हमसे कैसे संपर्क करना चाहेंगे?'
    },
    options: {
      en: [
        { label: 'Call', value: 'call' },
        { label: 'WhatsApp', value: 'whatsapp' },
        { label: 'Email', value: 'email' }
      ],
      hi: [
        { label: 'कॉल', value: 'call' },
        { label: 'व्हाट्सएप', value: 'whatsapp' },
        { label: 'ईमेल', value: 'email' }
      ]
    }
  },

  // Q45 - Support Need
  Q45: {
    question_text: {
      en: 'What do you need help with?',
      hi: 'आपको किस बात में मदद चाहिए?'
    },
    options: {
      en: [
        { label: 'Raise a Complaint', value: 'raise_complaint' },
        { label: 'Request Extra Staff', value: 'request_extra_staff' },
        { label: 'Replace Staff', value: 'replace_staff' },
        { label: 'Site Supervisor Contact', value: 'site_supervisor_contact' },
        { label: 'Billing/Invoice', value: 'billing_invoice' },
        { label: 'Other', value: 'other' }
      ],
      hi: [
        { label: 'शिकायत दर्ज करें', value: 'raise_complaint' },
        { label: 'अतिरिक्त स्टाफ का अनुरोध करें', value: 'request_extra_staff' },
        { label: 'स्टाफ बदलें', value: 'replace_staff' },
        { label: 'साइट पर्यवेक्षक का संपर्क', value: 'site_supervisor_contact' },
        { label: 'बिलिंग/चालान', value: 'billing_invoice' },
        { label: 'अन्य', value: 'other' }
      ]
    }
  },

  // Q46 - Support Site Type
  Q46: {
    question_text: {
      en: 'What type of site?',
      hi: 'किस प्रकार की साइट है?'
    },
    options: {
      en: [
        { label: 'Security Site', value: 'security_site' },
        { label: 'Facility Site', value: 'facility_site' },
        { label: 'Manpower/Payroll', value: 'manpower_payroll' },
        { label: 'Training', value: 'training' }
      ],
      hi: [
        { label: 'सुरक्षा साइट', value: 'security_site' },
        { label: 'सुविधा साइट', value: 'facility_site' },
        { label: 'मानव शक्ति/पेरोल', value: 'manpower_payroll' },
        { label: 'प्रशिक्षण', value: 'training' }
      ]
    }
  },

  // Q47 - Priority Level
  Q47: {
    question_text: {
      en: 'How urgent is this?',
      hi: 'यह कितना जरूरी है?'
    },
    options: {
      en: [
        { label: 'Urgent', value: 'urgent' },
        { label: 'High', value: 'high' },
        { label: 'Normal', value: 'normal' },
        { label: 'Low', value: 'low' }
      ],
      hi: [
        { label: 'अत्यावश्यक', value: 'urgent' },
        { label: 'उच्च', value: 'high' },
        { label: 'सामान्य', value: 'normal' },
        { label: 'कम', value: 'low' }
      ]
    }
  },

  // Q48 - Support Contact Channel
  Q48: {
    question_text: {
      en: 'How should we contact you?',
      hi: 'हम आपसे कैसे संपर्क करें?'
    },
    options: {
      en: [
        { label: 'Call Back', value: 'call_back' },
        { label: 'WhatsApp', value: 'whatsapp' },
        { label: 'Email', value: 'email' },
        { label: 'Call Now', value: 'call_now' }
      ],
      hi: [
        { label: 'वापस कॉल करें', value: 'call_back' },
        { label: 'व्हाट्सएप', value: 'whatsapp' },
        { label: 'ईमेल', value: 'email' },
        { label: 'अभी कॉल करें', value: 'call_now' }
      ]
    }
  },

  // Q49 - Fallback
  Q49: {
    question_text: {
      en: "I didn't catch that. What would you like to do?",
      hi: 'मैं समझ नहीं पाया। आप क्या करना चाहेंगे?'
    },
    options: {
      en: [
        { label: 'Security Services', value: 'security_services' },
        { label: 'Facility Management', value: 'facility_management' },
        { label: 'Manpower/Payroll', value: 'manpower_payroll' },
        { label: 'Training', value: 'training' },
        { label: 'Careers', value: 'careers' },
        { label: 'Contact & Locations', value: 'contact_locations' },
        { label: 'Existing Client Support', value: 'existing_client_support' },
        { label: 'Main Menu', value: 'main_menu' }
      ],
      hi: [
        { label: 'सुरक्षा सेवाएं', value: 'security_services' },
        { label: 'सुविधा प्रबंधन', value: 'facility_management' },
        { label: 'मानव शक्ति/पेरोल', value: 'manpower_payroll' },
        { label: 'प्रशिक्षण', value: 'training' },
        { label: 'करियर', value: 'careers' },
        { label: 'संपर्क और स्थान', value: 'contact_locations' },
        { label: 'मौजूदा ग्राहक सहायता', value: 'existing_client_support' },
        { label: 'मुख्य मेनू', value: 'main_menu' }
      ]
    }
  },

  // Contact Details Modal
  contactModal: {
    title: {
      en: 'Your Contact Details',
      hi: 'आपके संपर्क विवरण'
    },
    nameLabel: {
      en: 'Full Name',
      hi: 'पूरा नाम'
    },
    namePlaceholder: {
      en: 'Enter your full name',
      hi: 'अपना पूरा नाम दर्ज करें'
    },
    phoneLabel: {
      en: 'Phone Number',
      hi: 'फ़ोन नंबर'
    },
    phonePlaceholder: {
      en: '9876543210 or +919876543210',
      hi: '9876543210 या +919876543210'
    },
    orgLabel: {
      en: 'Organization (Optional)',
      hi: 'संगठन (वैकल्पिक)'
    },
    orgPlaceholder: {
      en: 'Company or Individual',
      hi: 'कंपनी या व्यक्तिगत'
    },
    submitButton: {
      en: 'Submit Enquiry',
      hi: 'पूछताछ सबमिट करें'
    },
    backButton: {
      en: 'Back',
      hi: 'वापस'
    }
  },

  // Review Screen
  reviewScreen: {
    title: {
      en: 'Review Your Answers',
      hi: 'अपने उत्तरों की समीक्षा करें'
    },
    subtitle: {
      en: 'Please verify your information before submitting',
      hi: 'कृपया सबमिट करने से पहले अपनी जानकारी सत्यापित करें'
    },
    changeButton: {
      en: 'Change',
      hi: 'बदलें'
    },
    continueButton: {
      en: 'Continue',
      hi: 'जारी रखें'
    }
  },

  // Success Screen
  successScreen: {
    title: {
      en: 'Enquiry Submitted Successfully!',
      hi: 'पूछताछ सफलतापूर्वक सबमिट हुई!'
    },
    referenceText: {
      en: 'Your Reference ID:',
      hi: 'आपका संदर्भ ID:'
    },
    message: {
      en: 'Thank you for your enquiry. Our team will contact you shortly.',
      hi: 'आपकी पूछताछ के लिए धन्यवाद। हमारी टीम जल्द ही आपसे संपर्क करेगी।'
    },
    closeButton: {
      en: 'Close',
      hi: 'बंद करें'
    }
  },

  // Chat Header
  chatHeader: {
    botName: {
      en: 'Security Assistant',
      hi: 'सुरक्षा सहायक'
    },
    online: {
      en: 'Online',
      hi: 'ऑनलाइन'
    },
    restartConfirm: {
      title: {
        en: 'Restart Conversation?',
        hi: 'वार्तालाप पुनः आरंभ करें?'
      },
      message: {
        en: 'This will clear all your answers and start over. Are you sure?',
        hi: 'यह आपके सभी उत्तरों को हटा देगा और नए सिरे से शुरू करेगा। क्या आप सुनिश्चित हैं?'
      },
      cancel: {
        en: 'Cancel',
        hi: 'रद्द करें'
      },
      confirm: {
        en: 'Restart',
        hi: 'पुनः आरंभ करें'
      }
    }
  }
};

/**
 * Get translated text based on language
 */
export function getTranslation(questionId, field, language = 'en') {
  const translation = translations[questionId];
  if (!translation) return null;

  if (field === 'options') {
    return translation.options?.[language] || translation.options?.en;
  }

  return translation[field]?.[language] || translation[field]?.en;
}

/**
 * Get translated question text
 */
export function getQuestionText(questionId, language = 'en') {
  return getTranslation(questionId, 'question_text', language);
}

/**
 * Get translated options
 */
export function getQuestionOptions(questionId, language = 'en') {
  return getTranslation(questionId, 'options', language);
}
