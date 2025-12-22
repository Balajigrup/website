/**
 * OptionButtons - Full-width stacked buttons for 3-8 options
 */
export default function OptionButtons({ options, onSelect, disabled }) {
  return (
    <div className="flex flex-col gap-2">
      {options.map((option, index) => (
        <button
          key={option.value}
          onClick={() => onSelect(option)}
          disabled={disabled}
          className={`
            w-full px-4 py-3.5 min-h-[44px]
            border border-gray-200 rounded-xl
            bg-white text-gray-700
            text-[15px] font-medium text-left
            transition-all duration-200
            hover:border-blue-600 hover:bg-blue-50 hover:shadow-md
            focus:outline-none focus:ring-4 focus:ring-blue-200
            active:scale-[0.98]
            disabled:opacity-40 disabled:cursor-not-allowed
            flex items-center justify-between
          `}
          aria-label={option.label}
          tabIndex={disabled ? -1 : index}
        >
          <span>{option.label}</span>
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      ))}
    </div>
  );
}
