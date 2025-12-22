import { formatTimestamp } from '../../../utils/helpers';

/**
 * UserMessage - Message from the user (selected option)
 */
export default function UserMessage({ content, timestamp }) {
  return (
    <div className="flex items-start justify-end gap-3 mb-4 animate-fade-in-right">
      {/* Message Content */}
      <div className="flex-1 max-w-[70%] flex flex-col items-end">
        <div className="bg-blue-600 text-white rounded-2xl rounded-br-sm px-4 py-3">
          <p className="text-sm leading-relaxed">
            {content}
          </p>
        </div>
        {timestamp && (
          <div className="text-xs text-gray-400 mt-1 mr-2">
            {formatTimestamp(timestamp)}
          </div>
        )}
      </div>
    </div>
  );
}
