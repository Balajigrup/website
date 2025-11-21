const WhatSetsUsApart = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 md:mb-16"
              style={{ fontFamily: "'Oswald', sans-serif", color: '#1F2937' }}
            >
              What Set's us Apart?
            </h2>

            {/* Point 1 */}
            <div className="flex gap-4 md:gap-6 mb-8 md:mb-10">
              <div
                className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white text-xl md:text-2xl font-bold"
                style={{ backgroundColor: '#9CCBF5', fontFamily: "'Poppins', sans-serif" }}
              >
                1
              </div>
              <p
                className="text-gray-700 text-base md:text-lg pt-2"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Only Top Candidates Are Admitted, Each Undergoing Background Checks And In-Depth Screening.
              </p>
            </div>

            {/* Point 2 */}
            <div className="flex gap-4 md:gap-6 mb-8 md:mb-10">
              <div
                className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white text-xl md:text-2xl font-bold"
                style={{ backgroundColor: '#9CCBF5', fontFamily: "'Poppins', sans-serif" }}
              >
                2
              </div>
              <p
                className="text-gray-700 text-base md:text-lg pt-2"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Guards Complete A Structured, 30-Day Residential Program Covering Legal Compliance (PASARA, ISO), Customer Service, Emergency Response, And Communication.
              </p>
            </div>

            {/* Point 3 */}
            <div className="flex gap-4 md:gap-6 mb-8 md:mb-10">
              <div
                className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white text-xl md:text-2xl font-bold"
                style={{ backgroundColor: '#9CCBF5', fontFamily: "'Poppins', sans-serif" }}
              >
                3
              </div>
              <p
                className="text-gray-700 text-base md:text-lg pt-2"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Training Includes Scenario Exercises For Fire Safety, Risk Management, Surveillance, And Medical Emergencies—Guaranteeing Skill In All Environments.
              </p>
            </div>

            {/* Point 4 */}
            <div className="flex gap-4 md:gap-6">
              <div
                className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white text-xl md:text-2xl font-bold"
                style={{ backgroundColor: '#9CCBF5', fontFamily: "'Poppins', sans-serif" }}
              >
                4
              </div>
              <p
                className="text-gray-700 text-base md:text-lg pt-2"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Regular Refresher Courses, On-The-Job Mentorship, And Transparent Performance Reviews Ensure Your Security Team Stays Alert, Ethical, And Up-To-Date.
              </p>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/Training/Price.png"
                alt="Award Ceremony"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatSetsUsApart;
