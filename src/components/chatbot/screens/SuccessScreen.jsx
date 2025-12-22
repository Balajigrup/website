import { useEffect, useState } from 'react';
import { formatPhoneDisplay } from '../../../utils/validation';
import { generateReferenceId } from '../../../utils/helpers';

/**
 * SuccessScreen - Shows after successful submission
 */
export default function SuccessScreen({ conversationId, contactDetails, onClose, onStartNew }) {
  const [showConfetti, setShowConfetti] = useState(false);
  const referenceId = generateReferenceId(conversationId);

  useEffect(() => {
    // Trigger confetti animation
    setShowConfetti(true);

    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Success Animation */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
        {/* Checkmark */}
        <div className="relative mb-6">
          <div className={`
            w-24 h-24 rounded-full bg-green-100
            flex items-center justify-center
            ${showConfetti ? 'animate-scale-bounce' : ''}
          `}>
            <svg
              className="w-12 h-12 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          {/* Confetti effect (optional CSS animation) */}
          {showConfetti && (
            <div className="absolute inset-0 pointer-events-none">
              {/* Add confetti particles here if desired */}
            </div>
          )}
        </div>

        {/* Success Message */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
          Thank you{contactDetails?.name ? `, ${contactDetails.name.split(' ')[0]}` : ''}!
        </h2>

        <p className="text-gray-600 text-center mb-4 max-w-sm">
          We've received your enquiry. Our team will contact you shortly
          {contactDetails?.phone && (
            <> at <span className="font-medium">{formatPhoneDisplay(contactDetails.phone)}</span></>
          )}
        </p>

        {/* Reference ID */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 mb-6">
          <div className="text-xs text-gray-500 mb-1">Reference ID</div>
          <div className="font-mono text-sm font-semibold text-gray-900">
            {referenceId}
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-sm">
          <div className="flex gap-3">
            <svg
              className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            <div className="text-sm text-blue-800">
              <p className="font-medium mb-1">What's next?</p>
              <ul className="text-xs space-y-1 list-disc list-inside">
                <li>Our team will review your requirements</li>
                <li>We'll contact you within 24 hours</li>
                <li>Keep your reference ID for tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="px-6 py-4 border-t border-gray-200 space-y-3">
        <button
          onClick={onStartNew}
          className="
            w-full px-6 py-3.5
            bg-blue-600 text-white
            rounded-xl font-semibold
            hover:bg-blue-700 transition-colors
            focus:outline-none focus:ring-4 focus:ring-blue-200
            active:scale-[0.98]
          "
        >
          Start New Enquiry
        </button>

        <button
          onClick={onClose}
          className="
            w-full px-6 py-2
            text-gray-600 text-sm font-medium
            hover:text-gray-800 transition-colors
            focus:outline-none
          "
        >
          Close
        </button>
      </div>
    </div>
  );
}
