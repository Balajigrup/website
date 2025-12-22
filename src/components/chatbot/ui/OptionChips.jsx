/**
 * OptionChips - Chip-style buttons for 2-4 short options
 */
export default function OptionChips({ options, onSelect, disabled }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {options.map((option, index) => (
        <button
          key={option.value}
          onClick={() => onSelect(option)}
          disabled={disabled}
          className={`
            px-5 py-2.5 min-h-[44px]
            border-2 border-gray-300 rounded-full
            bg-white text-gray-700
            text-sm font-medium
            transition-all duration-200
            hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600
            focus:outline-none focus:ring-4 focus:ring-blue-200
            active:scale-95
            disabled:opacity-40 disabled:cursor-not-allowed
            ${disabled ? '' : 'hover:shadow-md'}
          `}
          aria-label={option.label}
          tabIndex={disabled ? -1 : 0}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
