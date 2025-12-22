import { conversationFlow } from '../../../data/conversationFlow';
import { formatLocation, parseLocationValue } from '../../../data/locationData';
import { getQuestionText, getQuestionOptions } from '../../../data/translations';

/**
 * ReviewScreen - Shows all answers with ability to edit
 */
export default function ReviewScreen({ answers, onEdit, onContinue, language = 'en' }) {
  // Get answered questions in order
  const answeredQuestions = Object.keys(answers)
    .map(key => {
      // Find the question ID that has this key
      const questionId = Object.keys(conversationFlow).find(
        qId => conversationFlow[qId].key === key
      );
      return { questionId, key, value: answers[key] };
    })
    .filter(item => item.questionId && conversationFlow[item.questionId]);

  // Format answer for display
  const formatAnswer = (questionId, value) => {
    const question = conversationFlow[questionId];

    // Handle location picker
    if (question.optionType === 'location-picker') {
      const { city, state } = parseLocationValue(value);
      return formatLocation(city, state);
    }

    // Get translated options
    const translatedOptions = getQuestionOptions(questionId, language);
    const optionsToUse = translatedOptions || question.options;

    // Find option label
    const option = optionsToUse?.find(opt => opt.value === value);
    return option?.label || value;
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900">
          Review Your Answers
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Check your selections before submitting
        </p>
      </div>

      {/* Answers List */}
      <div className="flex-1 overflow-y-auto px-6 py-4">
        {answeredQuestions.length === 0 ? (
          <div className="text-center text-gray-400 py-8">
            No answers to review yet
          </div>
        ) : (
          <div className="space-y-4">
            {answeredQuestions.map(({ questionId, key, value }) => {
              const question = conversationFlow[questionId];
              const translatedQuestionText = getQuestionText(questionId, language);
              const questionTextToDisplay = translatedQuestionText || question.question_text;

              return (
                <div
                  key={questionId}
                  className="pb-4 border-b border-gray-100 last:border-0"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      {/* Question */}
                      <div className="text-sm font-semibold text-gray-600 mb-1">
                        {questionTextToDisplay}
                      </div>

                      {/* Answer */}
                      <div className="text-base text-gray-900">
                        {formatAnswer(questionId, value)}
                      </div>
                    </div>

                    {/* Change Button */}
                    <button
                      onClick={() => onEdit(questionId)}
                      className="
                        flex-shrink-0 px-3 py-1.5
                        text-sm font-medium text-blue-600
                        hover:bg-blue-50 rounded-lg
                        transition-colors
                        focus:outline-none focus:ring-2 focus:ring-blue-200
                      "
                    >
                      Change
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Footer Actions */}
      <div className="px-6 py-4 border-t border-gray-200 space-y-3">
        <button
          onClick={onContinue}
          disabled={answeredQuestions.length === 0}
          className="
            w-full px-6 py-3.5
            bg-blue-600 text-white
            rounded-xl font-semibold
            hover:bg-blue-700 transition-colors
            focus:outline-none focus:ring-4 focus:ring-blue-200
            active:scale-[0.98]
            disabled:opacity-50 disabled:cursor-not-allowed
          "
        >
          Looks Good
        </button>

        <button
          onClick={() => window.history.back()}
          className="
            w-full px-6 py-2
            text-gray-600 text-sm font-medium
            hover:text-gray-800 transition-colors
            focus:outline-none
          "
        >
          Edit More
        </button>
      </div>
    </div>
  );
}
