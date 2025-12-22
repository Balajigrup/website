import { formatTimestamp } from '../../../utils/helpers';

/**
 * BotMessage - Message from the chatbot
 */
export default function BotMessage({ content, timestamp, subtext }) {
  return (
    <div className="flex items-start gap-3 mb-4 animate-fade-in-up">
      {/* Bot Avatar */}
      <div className="flex-shrink-0">
        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
          <svg
            className="w-6 h-6 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
      </div>

      {/* Message Content */}
      <div className="flex-1 max-w-[80%]">
        <div className="bg-gray-100 rounded-2xl rounded-bl-sm px-4 py-3">
          <p className="text-gray-900 text-[15px] leading-relaxed">
            {content}
          </p>
          {subtext && (
            <p className="text-gray-500 text-sm mt-1">
              {subtext}
            </p>
          )}
        </div>
        {timestamp && (
          <div className="text-xs text-gray-400 mt-1 ml-2">
            {formatTimestamp(timestamp)}
          </div>
        )}
      </div>
    </div>
  );
}
