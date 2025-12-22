import OptionChips from './OptionChips';
import OptionButtons from './OptionButtons';
import OptionCards from './OptionCards';

/**
 * OptionsArea - Sticky bottom area that renders appropriate option type
 */
export default function OptionsArea({
  optionType,
  options,
  onSelect,
  disabled
}) {
  if (!options || options.length === 0) {
    return null;
  }

  return (
    <div className="bg-white border-t border-gray-200 p-4 max-h-[40vh] overflow-y-auto">
      {/* Render based on option type */}
      {optionType === 'chips' && (
        <OptionChips
          options={options}
          onSelect={onSelect}
          disabled={disabled}
        />
      )}

      {optionType === 'buttons' && (
        <OptionButtons
          options={options}
          onSelect={onSelect}
          disabled={disabled}
        />
      )}

      {optionType === 'cards' && (
        <OptionCards
          options={options}
          onSelect={onSelect}
          disabled={disabled}
        />
      )}

      {/* Location picker is handled separately in LocationPicker component */}
      {optionType === 'location-picker' && (
        <div className="text-center text-gray-500 text-sm">
          Loading location picker...
        </div>
      )}

      {/* Scroll indicator for overflow */}
      {options.length > 6 && (
        <div className="mt-2 text-center">
          <div className="inline-block w-12 h-1 bg-gray-200 rounded-full"></div>
        </div>
      )}
    </div>
  );
}
