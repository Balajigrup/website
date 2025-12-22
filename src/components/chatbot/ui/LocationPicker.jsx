import { useState } from 'react';
import {
  states,
  getCitiesForState,
  getPopularStates,
  getAllStates,
  formatLocation,
  createLocationValue
} from '../../../data/locationData';

/**
 * LocationPicker - 2-step options-only location selector
 * Step 1: Select State
 * Step 2: Select City
 */
export default function LocationPicker({ onSelect, disabled }) {
  const [step, setStep] = useState('state'); // 'state' | 'city'
  const [selectedState, setSelectedState] = useState(null);

  const popularStates = getPopularStates();
  const allStates = getAllStates();

  // Handle state selection
  const handleStateSelect = (state) => {
    if (state.value === 'not_sure') {
      // If "Not Sure", skip to final selection
      onSelect({
        label: 'Not Sure',
        value: 'not_sure'
      });
    } else {
      setSelectedState(state);
      setStep('city');
    }
  };

  // Handle city selection
  const handleCitySelect = (city) => {
    const locationValue = createLocationValue(city.value, selectedState.value);
    const locationLabel = formatLocation(city.value, selectedState.value);

    onSelect({
      label: locationLabel,
      value: locationValue
    });
  };

  // Go back to state selection
  const handleBack = () => {
    setStep('state');
    setSelectedState(null);
  };

  if (step === 'state') {
    return (
      <div className="space-y-4">
        {/* Popular States */}
        <div>
          <div className="text-xs font-semibold text-gray-500 uppercase mb-2 px-1">
            Popular
          </div>
          <div className="grid grid-cols-2 gap-2">
            {popularStates.map((state) => (
              <button
                key={state.value}
                onClick={() => handleStateSelect(state)}
                disabled={disabled}
                className="
                  px-4 py-3 min-h-[44px]
                  border border-gray-200 rounded-xl
                  bg-white text-gray-700
                  text-sm font-medium text-left
                  transition-all duration-200
                  hover:border-blue-600 hover:bg-blue-50 hover:shadow-md
                  focus:outline-none focus:ring-4 focus:ring-blue-200
                  active:scale-[0.98]
                  disabled:opacity-40 disabled:cursor-not-allowed
                "
              >
                {state.label}
              </button>
            ))}
          </div>
        </div>

        {/* All States */}
        <div>
          <div className="text-xs font-semibold text-gray-500 uppercase mb-2 px-1">
            All States
          </div>
          <div className="grid grid-cols-1 gap-2 max-h-[250px] overflow-y-auto">
            {allStates.map((state) => (
              <button
                key={state.value}
                onClick={() => handleStateSelect(state)}
                disabled={disabled}
                className="
                  px-4 py-3 min-h-[44px]
                  border border-gray-200 rounded-xl
                  bg-white text-gray-700
                  text-sm font-medium text-left
                  transition-all duration-200
                  hover:border-blue-600 hover:bg-blue-50 hover:shadow-md
                  focus:outline-none focus:ring-4 focus:ring-blue-200
                  active:scale-[0.98]
                  disabled:opacity-40 disabled:cursor-not-allowed
                "
              >
                {state.label}
              </button>
            ))}
          </div>
        </div>

        {/* Not Sure */}
        <div>
          <button
            onClick={() => handleStateSelect({ label: 'Not Sure', value: 'not_sure' })}
            disabled={disabled}
            className="
              w-full px-4 py-3 min-h-[44px]
              border-2 border-gray-300 rounded-xl
              bg-gray-50 text-gray-600
              text-sm font-medium
              transition-all duration-200
              hover:border-blue-600 hover:bg-blue-50 hover:shadow-md
              focus:outline-none focus:ring-4 focus:ring-blue-200
              active:scale-[0.98]
              disabled:opacity-40 disabled:cursor-not-allowed
            "
          >
            Not Sure
          </button>
        </div>
      </div>
    );
  }

  // Step 2: City Selection
  const cities = getCitiesForState(selectedState.value);
  const topCities = cities.filter(c => c.category === 'top');
  const moreCities = cities.filter(c => c.category === 'more');
  const otherCity = cities.find(c => c.category === 'other');

  return (
    <div className="space-y-4">
      {/* Header with Back Button */}
      <div className="flex items-center gap-3 pb-2 border-b border-gray-200">
        <button
          onClick={handleBack}
          className="p-1 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
          aria-label="Go back to state selection"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div>
          <div className="text-sm font-semibold text-gray-900">Select your city</div>
          <div className="text-xs text-gray-500">({selectedState.label})</div>
        </div>
      </div>

      {/* Top Cities */}
      {topCities.length > 0 && (
        <div>
          <div className="text-xs font-semibold text-gray-500 uppercase mb-2 px-1">
            Top Cities
          </div>
          <div className="grid grid-cols-2 gap-2">
            {topCities.map((city) => (
              <button
                key={city.value}
                onClick={() => handleCitySelect(city)}
                disabled={disabled}
                className="
                  px-4 py-3 min-h-[44px]
                  border border-gray-200 rounded-xl
                  bg-white text-gray-700
                  text-sm font-medium text-left
                  transition-all duration-200
                  hover:border-blue-600 hover:bg-blue-50 hover:shadow-md
                  focus:outline-none focus:ring-4 focus:ring-blue-200
                  active:scale-[0.98]
                  disabled:opacity-40 disabled:cursor-not-allowed
                "
              >
                {city.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* More Cities */}
      {moreCities.length > 0 && (
        <div>
          <div className="text-xs font-semibold text-gray-500 uppercase mb-2 px-1">
            More Cities
          </div>
          <div className="grid grid-cols-1 gap-2 max-h-[200px] overflow-y-auto">
            {moreCities.map((city) => (
              <button
                key={city.value}
                onClick={() => handleCitySelect(city)}
                disabled={disabled}
                className="
                  px-4 py-3 min-h-[44px]
                  border border-gray-200 rounded-xl
                  bg-white text-gray-700
                  text-sm font-medium text-left
                  transition-all duration-200
                  hover:border-blue-600 hover:bg-blue-50 hover:shadow-md
                  focus:outline-none focus:ring-4 focus:ring-blue-200
                  active:scale-[0.98]
                  disabled:opacity-40 disabled:cursor-not-allowed
                "
              >
                {city.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Other City */}
      {otherCity && (
        <div>
          <button
            onClick={() => handleCitySelect(otherCity)}
            disabled={disabled}
            className="
              w-full px-4 py-3 min-h-[44px]
              border-2 border-gray-300 rounded-xl
              bg-gray-50 text-gray-600
              text-sm font-medium
              transition-all duration-200
              hover:border-blue-600 hover:bg-blue-50 hover:shadow-md
              focus:outline-none focus:ring-4 focus:ring-blue-200
              active:scale-[0.98]
              disabled:opacity-40 disabled:cursor-not-allowed
            "
          >
            {otherCity.label}
          </button>
        </div>
      )}
    </div>
  );
}
