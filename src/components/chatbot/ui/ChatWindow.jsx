import { useEffect } from 'react';
import ChatHeader from './ChatHeader';
import ChatTranscript from './ChatTranscript';
import OptionsArea from './OptionsArea';
import LocationPicker from './LocationPicker';

/**
 * ChatWindow - Main chat container
 * Responsive: full-screen on mobile, fixed size on desktop
 */
export default function ChatWindow({
  messages,
  currentQuestion,
  isTyping,
  onSelectOption,
  progress,
  currentStep,
  totalSteps,
  onRestart,
  onMinimize,
  onClose,
  isProcessing
}) {
  // Prevent body scroll when chat is open on mobile
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      {/* Backdrop (mobile/tablet) */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Chat Window */}
      <div
        className={`
          fixed z-50
          flex flex-col
          bg-white rounded-t-2xl md:rounded-2xl
          shadow-2xl

          /* Mobile: Full screen */
          bottom-0 left-0 right-0
          h-[100vh] md:h-auto

          /* Desktop: Fixed bottom-right */
          md:bottom-5 md:right-5 md:left-auto
          md:w-[420px] md:h-[680px]
          md:max-h-[90vh]

          /* Animation */
          animate-slide-up md:animate-fade-in
        `}
        role="dialog"
        aria-label="Chat assistant"
        aria-modal="true"
      >
        {/* Header */}
        <ChatHeader
          progress={progress}
          currentStep={currentStep}
          totalSteps={totalSteps}
          onRestart={onRestart}
          onMinimize={onMinimize}
          onClose={onClose}
        />

        {/* Transcript */}
        <ChatTranscript
          messages={messages}
          isTyping={isTyping}
        />

        {/* Options Area */}
        {currentQuestion && currentQuestion.optionType === 'location-picker' ? (
          <div className="bg-white border-t border-gray-200 p-4 max-h-[40vh] overflow-y-auto">
            <LocationPicker
              onSelect={onSelectOption}
              disabled={isProcessing}
            />
          </div>
        ) : (
          <OptionsArea
            optionType={currentQuestion?.optionType}
            options={currentQuestion?.options || []}
            onSelect={onSelectOption}
            disabled={isProcessing}
          />
        )}
      </div>
    </>
  );
}
