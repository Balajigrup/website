import { useState, useEffect } from 'react';

/**
 * FloatingButton - Entry point for chatbot
 * Circular button with pulse animation
 */
export default function FloatingButton({ onClick, isOpen }) {
  const [shouldPulse, setShouldPulse] = useState(false);

  useEffect(() => {
    // Start pulse animation after 5-8 seconds
    const timer = setTimeout(() => {
      setShouldPulse(true);
    }, 6000); // 6 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isOpen) return null; // Hide when chat is open

  return (
    <button
      onClick={onClick}
      className={`
        fixed bottom-5 right-5 z-50
        w-14 h-14 md:w-16 md:h-16
        bg-blue-600 hover:bg-blue-700
        text-white rounded-full
        shadow-lg hover:shadow-xl
        transition-all duration-300
        flex items-center justify-center
        focus:outline-none focus:ring-4 focus:ring-blue-300
        active:scale-95
        ${shouldPulse ? 'animate-pulse-custom' : ''}
      `}
      aria-label="Open chat assistant"
      role="button"
      tabIndex={0}
    >
      {/* Chat Icon */}
      <svg
        className="w-6 h-6 md:w-7 md:h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
        />
      </svg>

      {/* Tooltip on hover (desktop) */}
      <span className="
        absolute right-full mr-3 px-3 py-1.5
        bg-gray-900 text-white text-sm rounded-lg
        whitespace-nowrap opacity-0 hover:opacity-100
        transition-opacity pointer-events-none
        hidden md:block
      ">
        Quick Questions
      </span>
    </button>
  );
}
