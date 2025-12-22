import { useEffect } from 'react';
import { useChatbot } from '../../hooks/useChatbot';
import FloatingButton from './ui/FloatingButton';
import ChatWindow from './ui/ChatWindow';
import ReviewScreen from './screens/ReviewScreen';
import ContactDetailsModal from './screens/ContactDetailsModal';
import SuccessScreen from './screens/SuccessScreen';
import { initAnalytics } from '../../utils/analytics';

/**
 * Main Chatbot Component
 * Orchestrates all chatbot functionality
 */
export default function Chatbot() {
  const {
    isOpen,
    currentScreen,
    conversationState,
    isTyping,
    isProcessing,
    openChat,
    closeChat,
    minimizeChat,
    restartConversation,
    handleSelectOption,
    handleEditAnswer,
    handleContinueFromReview,
    handleSubmitContact,
    getCurrentQuestion,
    messages,
    progress
  } = useChatbot();

  // Initialize analytics on mount
  useEffect(() => {
    initAnalytics();
  }, []);

  // Lock/unlock body scroll when chat opens/closes
  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when chat is open
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      // Restore body scroll when chat is closed
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }

    // Cleanup on unmount
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Floating Button */}
      <FloatingButton
        onClick={openChat}
        isOpen={isOpen}
      />

      {/* Chat Interface */}
      {isOpen && (
        <>
          {currentScreen === 'chat' && (
            <ChatWindow
              messages={messages}
              currentQuestion={getCurrentQuestion}
              isTyping={isTyping}
              onSelectOption={handleSelectOption}
              progress={progress.percent}
              currentStep={progress.currentStep}
              totalSteps={progress.totalSteps}
              onRestart={restartConversation}
              onMinimize={minimizeChat}
              onClose={closeChat}
              isProcessing={isProcessing}
              language={conversationState?.answers?.language || 'en'}
            />
          )}

          {currentScreen === 'review' && (
            <div className="fixed inset-0 z-50 md:flex md:items-center md:justify-center">
              {/* Backdrop with Blur */}
              <div
                className="fixed inset-0 backdrop-blur-sm bg-white/30 md:hidden"
                onClick={closeChat}
              />

              {/* Review Screen Container */}
              <div className={`
                fixed z-50
                bg-white rounded-t-2xl md:rounded-2xl
                shadow-2xl

                /* Mobile: Full screen */
                bottom-0 left-0 right-0
                h-[100vh]

                /* Desktop: Modal */
                md:relative md:w-[420px] md:h-[680px] md:max-h-[90vh]

                animate-slide-up md:animate-fade-in
              `}>
                <ReviewScreen
                  answers={conversationState?.answers || {}}
                  onEdit={handleEditAnswer}
                  onContinue={handleContinueFromReview}
                  language={conversationState?.answers?.language || 'en'}
                />
              </div>
            </div>
          )}

          {currentScreen === 'contact' && (
            <ContactDetailsModal
              onSubmit={handleSubmitContact}
              onBack={handleEditAnswer}
              isSubmitting={isProcessing}
            />
          )}

          {currentScreen === 'success' && (
            <div className="fixed inset-0 z-50 md:flex md:items-center md:justify-center">
              {/* Backdrop with Blur */}
              <div
                className="fixed inset-0 backdrop-blur-sm bg-white/30 md:hidden"
                onClick={closeChat}
              />

              {/* Success Screen Container */}
              <div className={`
                fixed z-50
                bg-white rounded-t-2xl md:rounded-2xl
                shadow-2xl

                /* Mobile: Full screen */
                bottom-0 left-0 right-0
                h-[100vh]

                /* Desktop: Modal */
                md:relative md:w-[420px] md:h-[680px] md:max-h-[90vh]

                animate-slide-up md:animate-fade-in
              `}>
                <SuccessScreen
                  conversationId={conversationState?.conversation_id}
                  contactDetails={conversationState?.contact_details}
                  onClose={closeChat}
                  onStartNew={restartConversation}
                />
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
