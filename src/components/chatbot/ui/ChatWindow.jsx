import ChatHeader from './ChatHeader';
import ChatTranscript from './ChatTranscript';

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
  isProcessing,
  language
}) {
  return (
    <>
      {/* Backdrop (mobile/tablet) */}
      <div
        className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
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
          h-[100vh]

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

        {/* Transcript with inline options */}
        <ChatTranscript
          messages={messages}
          isTyping={isTyping}
          currentQuestion={currentQuestion}
          onSelectOption={onSelectOption}
          isProcessing={isProcessing}
          language={language}
        />
      </div>
    </>
  );
}
