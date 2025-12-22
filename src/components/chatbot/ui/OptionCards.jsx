/**
 * OptionCards - Card grid with icon + description
 * Used for main categories
 */
export default function OptionCards({ options, onSelect, disabled }) {
  return (
    <div className="grid grid-cols-1 gap-3">
      {options.map((option, index) => (
        <button
          key={option.value}
          onClick={() => onSelect(option)}
          disabled={disabled}
          className={`
            group
            p-5 min-h-[110px]
            border-2 border-gray-200 rounded-2xl
            bg-white
            text-left
            transition-all duration-300
            hover:border-blue-500 hover:bg-gradient-to-br hover:from-blue-50 hover:to-white
            hover:shadow-lg hover:-translate-y-0.5
            focus:outline-none focus:ring-4 focus:ring-blue-200
            active:scale-[0.98]
            disabled:opacity-40 disabled:cursor-not-allowed
            flex items-start gap-4
          `}
          aria-label={option.label}
          tabIndex={disabled ? -1 : index}
        >
          {/* Icon */}
          {option.icon && (
            <div className="
              flex items-center justify-center
              w-12 h-12 flex-shrink-0
              bg-blue-500
              rounded-lg
              transition-all duration-300
              group-hover:scale-110
              group-hover:bg-blue-600
              shadow-sm
              overflow-hidden
            ">
              {option.iconType === 'image' ? (
                <img
                  src={option.icon}
                  alt={option.label}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-2xl filter brightness-0 invert">{option.icon}</span>
              )}
            </div>
          )}

          <div className="flex flex-col gap-1.5 flex-1 min-w-0">
            {/* Title */}
            <div className="text-base font-semibold text-gray-900 leading-snug">
              {option.label}
            </div>

            {/* Description */}
            {option.description && (
              <div className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                {option.description}
              </div>
            )}
          </div>
        </button>
      ))}
    </div>
  );
}
