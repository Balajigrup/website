import { formatTimestamp } from '../../../utils/helpers';

/**
 * BotMessage - Message from the chatbot
 */
export default function BotMessage({ content, timestamp, subtext }) {
  return (
    <div className="flex items-start gap-3 mb-4 animate-fade-in-up">
      {/* Bot Avatar */}
      <div className="flex-shrink-0">
        <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center">
          <svg
            className="w-5 h-5 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        </div>
      </div>

      {/* Message Content */}
      <div className="flex-1 max-w-[80%]">
        <div className="bg-gray-100 rounded-2xl rounded-bl-sm px-4 py-3">
          <p className="text-gray-900 text-sm leading-relaxed">
            {content}
          </p>
          {subtext && (
            <p className="text-gray-600 text-xs mt-2 leading-relaxed">
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
