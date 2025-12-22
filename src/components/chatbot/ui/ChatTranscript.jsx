import { useEffect, useRef, useState } from 'react';
import BotMessage from './BotMessage';
import UserMessage from './UserMessage';
import TypingIndicator from './TypingIndicator';
import { scrollToBottom, isInViewport } from '../../../utils/helpers';

/**
 * ChatTranscript - Scrollable message list
 */
export default function ChatTranscript({ messages, isTyping }) {
  const transcriptRef = useRef(null);
  const [showJumpToLatest, setShowJumpToLatest] = useState(false);
  const [userScrolled, setUserScrolled] = useState(false);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (transcriptRef.current && !userScrolled) {
      scrollToBottom(transcriptRef.current, true);
    }
  }, [messages, isTyping, userScrolled]);

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
    <div className="relative flex-1 overflow-hidden">
      {/* Scrollable Container */}
      <div
        ref={transcriptRef}
        onScroll={handleScroll}
        className="h-full overflow-y-auto px-4 py-4 scroll-smooth"
        role="log"
        aria-live="polite"
        aria-label="Conversation transcript"
      >
        {messages.length === 0 && (
          <div className="flex items-center justify-center h-full text-gray-400 text-sm">
            Start your conversation...
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
            text-sm font-medium
            flex items-center gap-2
            hover:bg-blue-700 transition-colors
            animate-fade-in-up
          "
          aria-label="Jump to latest message"
        >
          <span>Jump to latest</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      )}
    </div>
  );
}
