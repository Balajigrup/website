/**
 * Location Data - Indian States and Cities
 * Organized for 2-step selection (State → City)
 */

export const states = [
  // Popular states (shown first)
  { label: 'Maharashtra', value: 'MH', category: 'popular' },
  { label: 'Delhi NCR', value: 'DL', category: 'popular' },
  { label: 'Karnataka', value: 'KA', category: 'popular' },
  { label: 'Tamil Nadu', value: 'TN', category: 'popular' },
  { label: 'Gujarat', value: 'GJ', category: 'popular' },
  { label: 'Uttar Pradesh', value: 'UP', category: 'popular' },

  // All states alphabetically
  { label: 'Andhra Pradesh', value: 'AP', category: 'all' },
  { label: 'Arunachal Pradesh', value: 'AR', category: 'all' },
  { label: 'Assam', value: 'AS', category: 'all' },
  { label: 'Bihar', value: 'BR', category: 'all' },
  { label: 'Chhattisgarh', value: 'CG', category: 'all' },
  { label: 'Goa', value: 'GA', category: 'all' },
  { label: 'Haryana', value: 'HR', category: 'all' },
  { label: 'Himachal Pradesh', value: 'HP', category: 'all' },
  { label: 'Jharkhand', value: 'JH', category: 'all' },
  { label: 'Kerala', value: 'KL', category: 'all' },
  { label: 'Madhya Pradesh', value: 'MP', category: 'all' },
  { label: 'Manipur', value: 'MN', category: 'all' },
  { label: 'Meghalaya', value: 'ML', category: 'all' },
  { label: 'Mizoram', value: 'MZ', category: 'all' },
  { label: 'Nagaland', value: 'NL', category: 'all' },
  { label: 'Odisha', value: 'OR', category: 'all' },
  { label: 'Punjab', value: 'PB', category: 'all' },
  { label: 'Rajasthan', value: 'RJ', category: 'all' },
  { label: 'Sikkim', value: 'SK', category: 'all' },
  { label: 'Telangana', value: 'TS', category: 'all' },
  { label: 'Tripura', value: 'TR', category: 'all' },
  { label: 'Uttarakhand', value: 'UK', category: 'all' },
  { label: 'West Bengal', value: 'WB', category: 'all' },

  // Union Territories
  { label: 'Andaman and Nicobar Islands', value: 'AN', category: 'all' },
  { label: 'Chandigarh', value: 'CH', category: 'all' },
  { label: 'Dadra and Nagar Haveli and Daman and Diu', value: 'DD', category: 'all' },
  { label: 'Jammu and Kashmir', value: 'JK', category: 'all' },
  { label: 'Ladakh', value: 'LA', category: 'all' },
  { label: 'Lakshadweep', value: 'LD', category: 'all' },
  { label: 'Puducherry', value: 'PY', category: 'all' },

  // Not Sure option
  { label: 'Not Sure', value: 'not_sure', category: 'other' }
];

export const cities = {
  MH: [
    // Maharashtra - Top cities first
    { label: 'Mumbai', value: 'mumbai', category: 'top' },
    { label: 'Pune', value: 'pune', category: 'top' },
    { label: 'Nagpur', value: 'nagpur', category: 'top' },
    { label: 'Nashik', value: 'nashik', category: 'top' },
    { label: 'Thane', value: 'thane', category: 'top' },
    { label: 'Aurangabad', value: 'aurangabad', category: 'top' },

    // More cities
    { label: 'Ahmednagar', value: 'ahmednagar', category: 'more' },
    { label: 'Akola', value: 'akola', category: 'more' },
    { label: 'Amravati', value: 'amravati', category: 'more' },
    { label: 'Beed', value: 'beed', category: 'more' },
    { label: 'Chandrapur', value: 'chandrapur', category: 'more' },
    { label: 'Dhule', value: 'dhule', category: 'more' },
    { label: 'Jalgaon', value: 'jalgaon', category: 'more' },
    { label: 'Kolhapur', value: 'kolhapur', category: 'more' },
    { label: 'Latur', value: 'latur', category: 'more' },
    { label: 'Nanded', value: 'nanded', category: 'more' },
    { label: 'Parbhani', value: 'parbhani', category: 'more' },
    { label: 'Ratnagiri', value: 'ratnagiri', category: 'more' },
    { label: 'Sangli', value: 'sangli', category: 'more' },
    { label: 'Satara', value: 'satara', category: 'more' },
    { label: 'Solapur', value: 'solapur', category: 'more' },
    { label: 'Wardha', value: 'wardha', category: 'more' },
    { label: 'Yavatmal', value: 'yavatmal', category: 'more' },
    { label: 'Other city', value: 'other', category: 'other' }
  ],

  DL: [
    { label: 'New Delhi', value: 'new_delhi', category: 'top' },
    { label: 'Noida', value: 'noida', category: 'top' },
    { label: 'Gurgaon', value: 'gurgaon', category: 'top' },
    { label: 'Faridabad', value: 'faridabad', category: 'top' },
    { label: 'Ghaziabad', value: 'ghaziabad', category: 'top' },
    { label: 'Greater Noida', value: 'greater_noida', category: 'more' },
    { label: 'Other city', value: 'other', category: 'other' }
  ],

  KA: [
    { label: 'Bengaluru', value: 'bengaluru', category: 'top' },
    { label: 'Mysuru', value: 'mysuru', category: 'top' },
    { label: 'Mangaluru', value: 'mangaluru', category: 'top' },
    { label: 'Hubballi', value: 'hubballi', category: 'top' },
    { label: 'Belagavi', value: 'belagavi', category: 'top' },
    { label: 'Ballari', value: 'ballari', category: 'more' },
    { label: 'Davanagere', value: 'davanagere', category: 'more' },
    { label: 'Shivamogga', value: 'shivamogga', category: 'more' },
    { label: 'Tumakuru', value: 'tumakuru', category: 'more' },
    { label: 'Vijayapura', value: 'vijayapura', category: 'more' },
    { label: 'Other city', value: 'other', category: 'other' }
  ],

  TN: [
    { label: 'Chennai', value: 'chennai', category: 'top' },
    { label: 'Coimbatore', value: 'coimbatore', category: 'top' },
    { label: 'Madurai', value: 'madurai', category: 'top' },
    { label: 'Tiruchirappalli', value: 'tiruchirappalli', category: 'top' },
    { label: 'Salem', value: 'salem', category: 'top' },
    { label: 'Tirunelveli', value: 'tirunelveli', category: 'top' },
    { label: 'Erode', value: 'erode', category: 'more' },
    { label: 'Vellore', value: 'vellore', category: 'more' },
    { label: 'Thoothukudi', value: 'thoothukudi', category: 'more' },
    { label: 'Thanjavur', value: 'thanjavur', category: 'more' },
    { label: 'Dindigul', value: 'dindigul', category: 'more' },
    { label: 'Other city', value: 'other', category: 'other' }
  ],

  GJ: [
    { label: 'Ahmedabad', value: 'ahmedabad', category: 'top' },
    { label: 'Surat', value: 'surat', category: 'top' },
    { label: 'Vadodara', value: 'vadodara', category: 'top' },
    { label: 'Rajkot', value: 'rajkot', category: 'top' },
    { label: 'Bhavnagar', value: 'bhavnagar', category: 'top' },
    { label: 'Jamnagar', value: 'jamnagar', category: 'top' },
    { label: 'Junagadh', value: 'junagadh', category: 'more' },
    { label: 'Gandhinagar', value: 'gandhinagar', category: 'more' },
    { label: 'Anand', value: 'anand', category: 'more' },
    { label: 'Bharuch', value: 'bharuch', category: 'more' },
    { label: 'Morbi', value: 'morbi', category: 'more' },
    { label: 'Other city', value: 'other', category: 'other' }
  ],

  UP: [
    { label: 'Lucknow', value: 'lucknow', category: 'top' },
    { label: 'Kanpur', value: 'kanpur', category: 'top' },
    { label: 'Varanasi', value: 'varanasi', category: 'top' },
    { label: 'Agra', value: 'agra', category: 'top' },
    { label: 'Meerut', value: 'meerut', category: 'top' },
    { label: 'Prayagraj', value: 'prayagraj', category: 'top' },
    { label: 'Bareilly', value: 'bareilly', category: 'more' },
    { label: 'Aligarh', value: 'aligarh', category: 'more' },
    { label: 'Moradabad', value: 'moradabad', category: 'more' },
    { label: 'Saharanpur', value: 'saharanpur', category: 'more' },
    { label: 'Gorakhpur', value: 'gorakhpur', category: 'more' },
    { label: 'Noida', value: 'noida', category: 'more' },
    { label: 'Other city', value: 'other', category: 'other' }
  ],

  AP: [
    { label: 'Visakhapatnam', value: 'visakhapatnam', category: 'top' },
    { label: 'Vijayawada', value: 'vijayawada', category: 'top' },
    { label: 'Guntur', value: 'guntur', category: 'top' },
    { label: 'Nellore', value: 'nellore', category: 'top' },
    { label: 'Kurnool', value: 'kurnool', category: 'more' },
    { label: 'Rajahmundry', value: 'rajahmundry', category: 'more' },
    { label: 'Tirupati', value: 'tirupati', category: 'more' },
    { label: 'Other city', value: 'other', category: 'other' }
  ],

  TS: [
    { label: 'Hyderabad', value: 'hyderabad', category: 'top' },
    { label: 'Warangal', value: 'warangal', category: 'top' },
    { label: 'Nizamabad', value: 'nizamabad', category: 'top' },
    { label: 'Khammam', value: 'khammam', category: 'more' },
    { label: 'Karimnagar', value: 'karimnagar', category: 'more' },
    { label: 'Other city', value: 'other', category: 'other' }
  ],

  WB: [
    { label: 'Kolkata', value: 'kolkata', category: 'top' },
    { label: 'Howrah', value: 'howrah', category: 'top' },
    { label: 'Durgapur', value: 'durgapur', category: 'top' },
    { label: 'Asansol', value: 'asansol', category: 'top' },
    { label: 'Siliguri', value: 'siliguri', category: 'top' },
    { label: 'Bardhaman', value: 'bardhaman', category: 'more' },
    { label: 'Malda', value: 'malda', category: 'more' },
    { label: 'Other city', value: 'other', category: 'other' }
  ],

  RJ: [
    { label: 'Jaipur', value: 'jaipur', category: 'top' },
    { label: 'Jodhpur', value: 'jodhpur', category: 'top' },
    { label: 'Kota', value: 'kota', category: 'top' },
    { label: 'Udaipur', value: 'udaipur', category: 'top' },
    { label: 'Ajmer', value: 'ajmer', category: 'top' },
    { label: 'Bikaner', value: 'bikaner', category: 'more' },
    { label: 'Alwar', value: 'alwar', category: 'more' },
    { label: 'Bhilwara', value: 'bhilwara', category: 'more' },
    { label: 'Other city', value: 'other', category: 'other' }
  ],

  MP: [
    { label: 'Indore', value: 'indore', category: 'top' },
    { label: 'Bhopal', value: 'bhopal', category: 'top' },
    { label: 'Jabalpur', value: 'jabalpur', category: 'top' },
    { label: 'Gwalior', value: 'gwalior', category: 'top' },
    { label: 'Ujjain', value: 'ujjain', category: 'top' },
    { label: 'Sagar', value: 'sagar', category: 'more' },
    { label: 'Dewas', value: 'dewas', category: 'more' },
    { label: 'Other city', value: 'other', category: 'other' }
  ],

  HR: [
    { label: 'Faridabad', value: 'faridabad', category: 'top' },
    { label: 'Gurgaon', value: 'gurgaon', category: 'top' },
    { label: 'Hisar', value: 'hisar', category: 'top' },
    { label: 'Rohtak', value: 'rohtak', category: 'top' },
    { label: 'Panipat', value: 'panipat', category: 'top' },
    { label: 'Karnal', value: 'karnal', category: 'more' },
    { label: 'Ambala', value: 'ambala', category: 'more' },
    { label: 'Other city', value: 'other', category: 'other' }
  ],

  PB: [
    { label: 'Ludhiana', value: 'ludhiana', category: 'top' },
    { label: 'Amritsar', value: 'amritsar', category: 'top' },
    { label: 'Jalandhar', value: 'jalandhar', category: 'top' },
    { label: 'Patiala', value: 'patiala', category: 'top' },
    { label: 'Bathinda', value: 'bathinda', category: 'more' },
    { label: 'Mohali', value: 'mohali', category: 'more' },
    { label: 'Other city', value: 'other', category: 'other' }
  ],

  KL: [
    { label: 'Thiruvananthapuram', value: 'thiruvananthapuram', category: 'top' },
    { label: 'Kochi', value: 'kochi', category: 'top' },
    { label: 'Kozhikode', value: 'kozhikode', category: 'top' },
    { label: 'Thrissur', value: 'thrissur', category: 'top' },
    { label: 'Kollam', value: 'kollam', category: 'more' },
    { label: 'Palakkad', value: 'palakkad', category: 'more' },
    { label: 'Kannur', value: 'kannur', category: 'more' },
    { label: 'Other city', value: 'other', category: 'other' }
  ],

  // Add minimal cities for other states
  BR: [
    { label: 'Patna', value: 'patna', category: 'top' },
    { label: 'Gaya', value: 'gaya', category: 'top' },
    { label: 'Bhagalpur', value: 'bhagalpur', category: 'top' },
    { label: 'Muzaffarpur', value: 'muzaffarpur', category: 'more' },
    { label: 'Other city', value: 'other', category: 'other' }
  ],

  JH: [
    { label: 'Ranchi', value: 'ranchi', category: 'top' },
    { label: 'Jamshedpur', value: 'jamshedpur', category: 'top' },
    { label: 'Dhanbad', value: 'dhanbad', category: 'top' },
    { label: 'Other city', value: 'other', category: 'other' }
  ],

  OR: [
    { label: 'Bhubaneswar', value: 'bhubaneswar', category: 'top' },
    { label: 'Cuttack', value: 'cuttack', category: 'top' },
    { label: 'Rourkela', value: 'rourkela', category: 'top' },
    { label: 'Other city', value: 'other', category: 'other' }
  ],

  CG: [
    { label: 'Raipur', value: 'raipur', category: 'top' },
    { label: 'Bhilai', value: 'bhilai', category: 'top' },
    { label: 'Bilaspur', value: 'bilaspur', category: 'top' },
    { label: 'Other city', value: 'other', category: 'other' }
  ],

  AS: [
    { label: 'Guwahati', value: 'guwahati', category: 'top' },
    { label: 'Dibrugarh', value: 'dibrugarh', category: 'top' },
    { label: 'Silchar', value: 'silchar', category: 'top' },
    { label: 'Other city', value: 'other', category: 'other' }
  ],

  UK: [
    { label: 'Dehradun', value: 'dehradun', category: 'top' },
    { label: 'Haridwar', value: 'haridwar', category: 'top' },
    { label: 'Roorkee', value: 'roorkee', category: 'top' },
    { label: 'Other city', value: 'other', category: 'other' }
  ],

  HP: [
    { label: 'Shimla', value: 'shimla', category: 'top' },
    { label: 'Dharamshala', value: 'dharamshala', category: 'top' },
    { label: 'Mandi', value: 'mandi', category: 'top' },
    { label: 'Other city', value: 'other', category: 'other' }
  ],

  GA: [
    { label: 'Panaji', value: 'panaji', category: 'top' },
    { label: 'Margao', value: 'margao', category: 'top' },
    { label: 'Vasco da Gama', value: 'vasco_da_gama', category: 'top' },
    { label: 'Other city', value: 'other', category: 'other' }
  ],

  CH: [
    { label: 'Chandigarh', value: 'chandigarh', category: 'top' }
  ],

  JK: [
    { label: 'Srinagar', value: 'srinagar', category: 'top' },
    { label: 'Jammu', value: 'jammu', category: 'top' },
    { label: 'Other city', value: 'other', category: 'other' }
  ],

  PY: [
    { label: 'Puducherry', value: 'puducherry', category: 'top' },
    { label: 'Karaikal', value: 'karaikal', category: 'top' },
    { label: 'Other city', value: 'other', category: 'other' }
  ],

  // Default for states without specific cities
  default: [
    { label: 'Other city', value: 'other', category: 'other' }
  ]
};

/**
 * Get cities for a specific state
 */
export function getCitiesForState(stateValue) {
  return cities[stateValue] || cities.default;
}

/**
 * Get popular states (for quick access)
 */
export function getPopularStates() {
  return states.filter(state => state.category === 'popular');
}

/**
 * Get all states (excluding popular, for "All States" section)
 */
export function getAllStates() {
  return states.filter(state => state.category === 'all');
}

/**
 * Format location for display
 */
export function formatLocation(cityValue, stateValue) {
  const state = states.find(s => s.value === stateValue);
  const citiesList = getCitiesForState(stateValue);
  const city = citiesList.find(c => c.value === cityValue);

  if (!city || !state) return 'Not specified';

  if (cityValue === 'not_sure' || stateValue === 'not_sure') {
    return 'Not Sure';
  }

  if (cityValue === 'other') {
    return `${state.label} (Other city)`;
  }

  return `${city.label}, ${state.label}`;
}

/**
 * Create combined value for storage
 */
export function createLocationValue(cityValue, stateValue) {
  return `${cityValue}_${stateValue}`;
}

/**
 * Parse combined location value
 */
export function parseLocationValue(locationValue) {
  if (!locationValue || locationValue === 'not_sure') {
    return { city: 'not_sure', state: 'not_sure' };
  }

  const parts = locationValue.split('_');
  if (parts.length < 2) {
    return { city: 'other', state: 'other' };
  }

  // Last part is state, everything before is city
  const state = parts[parts.length - 1];
  const city = parts.slice(0, -1).join('_');

  return { city, state };
}
