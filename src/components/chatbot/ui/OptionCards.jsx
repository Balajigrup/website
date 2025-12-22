/**
 * OptionCards - Card grid with icon + description
 * Used for main categories
 */
export default function OptionCards({ options, onSelect, disabled }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 gap-3">
      {options.map((option, index) => (
        <button
          key={option.value}
          onClick={() => onSelect(option)}
          disabled={disabled}
          className={`
            p-4 min-h-[100px]
            border border-gray-200 rounded-2xl
            bg-white
            text-left
            transition-all duration-200
            hover:border-blue-600 hover:bg-blue-50 hover:shadow-lg hover:scale-105
            focus:outline-none focus:ring-4 focus:ring-blue-200
            active:scale-95
            disabled:opacity-40 disabled:cursor-not-allowed
            flex flex-col gap-2
          `}
          aria-label={option.label}
          tabIndex={disabled ? -1 : index}
        >
          {/* Icon */}
          {option.icon && (
            <div className="text-3xl mb-1">
              {option.icon}
            </div>
          )}

          {/* Title */}
          <div className="text-sm md:text-[15px] font-semibold text-gray-900">
            {option.label}
          </div>

          {/* Description */}
          {option.description && (
            <div className="text-xs text-gray-500 line-clamp-2">
              {option.description}
            </div>
          )}
        </button>
      ))}
    </div>
  );
}
