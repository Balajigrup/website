import { useState } from 'react';
import {
  validateName,
  validatePhone,
  validateOrganization,
  formatPhoneDisplay
} from '../../../utils/validation';

/**
 * ContactDetailsModal - Collect name, phone, organization
 */
export default function ContactDetailsModal({ onSubmit, onBack, isSubmitting }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    organization: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // Validate field on blur
  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true });

    let validation;
    if (field === 'name') {
      validation = validateName(formData.name);
    } else if (field === 'phone') {
      validation = validatePhone(formData.phone);
    } else if (field === 'organization') {
      validation = validateOrganization(formData.organization);
    }

    if (!validation.valid) {
      setErrors({ ...errors, [field]: validation.error });
    } else {
      const newErrors = { ...errors };
      delete newErrors[field];
      setErrors(newErrors);
    }
  };

  // Handle input change
  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });

    // Clear error when user starts typing
    if (errors[field]) {
      const newErrors = { ...errors };
      delete newErrors[field];
      setErrors(newErrors);
    }
  };

  // Validate all fields
  const validateAll = () => {
    const nameValidation = validateName(formData.name);
    const phoneValidation = validatePhone(formData.phone);
    const orgValidation = validateOrganization(formData.organization);

    const newErrors = {};

    if (!nameValidation.valid) {
      newErrors.name = nameValidation.error;
    }

    if (!phoneValidation.valid) {
      newErrors.phone = phoneValidation.error;
    }

    if (!orgValidation.valid) {
      newErrors.organization = orgValidation.error;
    }

    setErrors(newErrors);
    setTouched({ name: true, phone: true, organization: true });

    return Object.keys(newErrors).length === 0;
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateAll()) {
      const phoneValidation = validatePhone(formData.phone);
      const orgValidation = validateOrganization(formData.organization);

      onSubmit({
        name: formData.name.trim(),
        phone: phoneValidation.normalized,
        organization: orgValidation.value
      });
    }
  };

  // Check if form is valid
  const isValid = () => {
    return (
      formData.name.trim().length >= 2 &&
      formData.phone.trim().length >= 10 &&
      Object.keys(errors).length === 0
    );
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-white/30 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-xl">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            Almost Done!
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Just need your contact details
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 py-4 space-y-5">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              onBlur={() => handleBlur('name')}
              placeholder="Your full name"
              className={`
                w-full px-4 py-3
                border ${errors.name && touched.name ? 'border-red-500' : 'border-gray-300'}
                rounded-lg
                text-gray-900
                placeholder-gray-400
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                transition-all
              `}
              autoComplete="name"
              disabled={isSubmitting}
            />
            {errors.name && touched.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              onBlur={() => handleBlur('phone')}
              placeholder="+91 98765 43210"
              className={`
                w-full px-4 py-3
                border ${errors.phone && touched.phone ? 'border-red-500' : 'border-gray-300'}
                rounded-lg
                text-gray-900
                placeholder-gray-400
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                transition-all
              `}
              autoComplete="tel"
              disabled={isSubmitting}
            />
            {errors.phone && touched.phone ? (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            ) : (
              <p className="text-gray-500 text-xs mt-1">
                Example: +91 98765 43210
              </p>
            )}
            {!errors.phone && touched.phone && formData.phone.length >= 10 && (
              <p className="text-green-600 text-sm mt-1 flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Valid number
              </p>
            )}
          </div>

          {/* Organization Field */}
          <div>
            <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1.5">
              Organization
            </label>
            <input
              type="text"
              id="organization"
              value={formData.organization}
              onChange={(e) => handleChange('organization', e.target.value)}
              onBlur={() => handleBlur('organization')}
              placeholder="Company or 'Individual'"
              className={`
                w-full px-4 py-3
                border ${errors.organization && touched.organization ? 'border-red-500' : 'border-gray-300'}
                rounded-lg
                text-gray-900
                placeholder-gray-400
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                transition-all
              `}
              autoComplete="organization"
              disabled={isSubmitting}
            />
            {errors.organization && touched.organization ? (
              <p className="text-red-500 text-sm mt-1">{errors.organization}</p>
            ) : (
              <p className="text-gray-500 text-xs mt-1">
                Individual (if not applicable)
              </p>
            )}
          </div>

          {/* Privacy Notice */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <div className="flex gap-2">
              <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <p className="text-xs text-blue-800">
                We'll only use your contact information to respond to your enquiry.
              </p>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex gap-3 pt-2">
            {onBack && (
              <button
                type="button"
                onClick={onBack}
                disabled={isSubmitting}
                className="
                  flex-1 px-4 py-3
                  bg-gray-100 text-gray-700
                  rounded-lg font-medium
                  hover:bg-gray-200 transition-colors
                  focus:outline-none focus:ring-2 focus:ring-gray-300
                  disabled:opacity-50 disabled:cursor-not-allowed
                "
              >
                Back
              </button>
            )}

            <button
              type="submit"
              disabled={!isValid() || isSubmitting}
              className="
                flex-1 px-6 py-3
                bg-blue-600 text-white
                rounded-lg font-semibold
                hover:bg-blue-700 transition-colors
                focus:outline-none focus:ring-4 focus:ring-blue-200
                active:scale-[0.98]
                disabled:opacity-50 disabled:cursor-not-allowed
                flex items-center justify-center gap-2
              "
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Submitting...</span>
                </>
              ) : (
                'Submit Enquiry'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
