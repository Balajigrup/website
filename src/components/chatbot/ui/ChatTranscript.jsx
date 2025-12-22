import { useEffect, useRef, useState } from 'react';
import BotMessage from './BotMessage';
import UserMessage from './UserMessage';
import TypingIndicator from './TypingIndicator';
import OptionButtons from './OptionButtons';
import OptionChips from './OptionChips';
import OptionCards from './OptionCards';
import LocationPicker from './LocationPicker';
import { scrollToBottom } from '../../../utils/helpers';

/**
 * ChatTranscript - Scrollable message list with inline options
 */
export default function ChatTranscript({
  messages,
  isTyping,
  currentQuestion,
  onSelectOption,
  isProcessing
}) {
  const transcriptRef = useRef(null);
  const [showJumpToLatest, setShowJumpToLatest] = useState(false);
  const [userScrolled, setUserScrolled] = useState(false);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (transcriptRef.current && !userScrolled) {
      scrollToBottom(transcriptRef.current, true);
    }
  }, [messages, isTyping, userScrolled, currentQuestion]);

  // Detect manual scroll
  const handleScroll = () => {
    if (!transcriptRef.current) return;

    const { scrollTop, scrollHeight, clientHeight } = transcriptRef.current;
    const isAtBottom = scrollHeight - scrollTop - clientHeight < 100;

    if (!isAtBottom) {
      setUserScrolled(true);
      setShowJumpToLatest(true);
    } else {
      setUserScrolled(false);
      setShowJumpToLatest(false);
    }
  };

  // Jump to latest message
  const jumpToLatest = () => {
    if (transcriptRef.current) {
      scrollToBottom(transcriptRef.current, true);
      setUserScrolled(false);
      setShowJumpToLatest(false);
    }
  };

  return (
    <div className="relative flex-1 overflow-hidden bg-white">
      {/* Scrollable Container */}
      <div
        ref={transcriptRef}
        onScroll={handleScroll}
        className="h-full overflow-y-auto px-4 py-4"
        style={{
          scrollBehavior: 'smooth',
          overscrollBehavior: 'contain'
        }}
        role="log"
        aria-live="polite"
        aria-label="Conversation transcript"
      >
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center py-12">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <p className="text-gray-900 text-sm font-semibold mb-1">
              Welcome to Security Assistant
            </p>
            <p className="text-gray-500 text-xs">
              Choose an option below to get started
            </p>
          </div>
        )}

        {messages.map((message) => {
          if (message.type === 'bot') {
            return (
              <BotMessage
                key={message.id}
                content={message.content}
                timestamp={message.timestamp}
                subtext={message.subtext}
              />
            );
          } else {
            return (
              <UserMessage
                key={message.id}
                content={message.content}
                timestamp={message.timestamp}
              />
            );
          }
        })}

        {isTyping && <TypingIndicator />}

        {/* Show options inline after the last message */}
        {!isTyping && currentQuestion && (
          <div className="mt-4 mb-6 animate-fade-in-up">
            {/* Location Picker */}
            {currentQuestion.optionType === 'location-picker' && (
              <LocationPicker
                onSelect={onSelectOption}
                disabled={isProcessing}
              />
            )}

            {/* Other option types that have options array */}
            {currentQuestion.options && currentQuestion.options.length > 0 && (
              <>
                {currentQuestion.optionType === 'chips' && (
                  <OptionChips
                    options={currentQuestion.options}
                    onSelect={onSelectOption}
                    disabled={isProcessing}
                  />
                )}

                {currentQuestion.optionType === 'buttons' && (
                  <OptionButtons
                    options={currentQuestion.options}
                    onSelect={onSelectOption}
                    disabled={isProcessing}
                  />
                )}

                {currentQuestion.optionType === 'cards' && (
                  <OptionCards
                    options={currentQuestion.options}
                    onSelect={onSelectOption}
                    disabled={isProcessing}
                  />
                )}
              </>
            )}
          </div>
        )}
      </div>

      {/* Jump to Latest Button */}
      {showJumpToLatest && (
        <button
          onClick={jumpToLatest}
          className="
            absolute bottom-4 right-4
            px-4 py-2
            bg-blue-600 text-white
            rounded-full shadow-lg
            text-xs font-medium
            flex items-center gap-2
            hover:bg-blue-700 transition-colors
            animate-fade-in-up
          "
          aria-label="Jump to latest message"
        >
          <span>New messages</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      )}
    </div>
  );
}
