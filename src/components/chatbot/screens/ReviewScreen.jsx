import { conversationFlow } from '../../../data/conversationFlow';
import { formatLocation, parseLocationValue } from '../../../data/locationData';
import { getQuestionText, getQuestionOptions } from '../../../data/translations';

/**
 * ReviewScreen - Shows all answers with ability to edit
 */
export default function ReviewScreen({ answers, onEdit, onContinue, language = 'en' }) {
  // UI translations
  const labels = {
    en: {
      title: 'Review Your Answers',
      subtitle: 'Check your selections before submitting',
      noAnswers: 'No answers to review yet',
      change: 'Change',
      looksGood: 'Looks Good'
    },
    hi: {
      title: 'अपने उत्तरों की समीक्षा करें',
      subtitle: 'सबमिट करने से पहले अपने चयन की जांच करें',
      noAnswers: 'समीक्षा करने के लिए कोई उत्तर नहीं',
      change: 'बदलें',
      looksGood: 'सही है'
    }
  };

  const t = labels[language] || labels.en;

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
      return formatLocation(city, state, language);
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
          {t.title}
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          {t.subtitle}
        </p>
      </div>

      {/* Answers List */}
      <div className="flex-1 overflow-y-auto px-6 py-4">
        {answeredQuestions.length === 0 ? (
          <div className="text-center text-gray-400 py-8">
            {t.noAnswers}
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
          {t.looksGood}
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
