const WhyChooseBalaji = () => {
  const reasons = [
    {
      number: 1,
      text: "Guards Trained At Central India's Only Residential Security Academy."
    },
    {
      number: 2,
      text: "Zero Compromise On Background Checks And Certification."
    },
    {
      number: 3,
      text: "Dedicated Client Relationship Manager For Every Contract."
    },
    {
      number: 4,
      text: "24/7 Support And 5-Minute Rapid Response Guarantee."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-12" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, color: '#1F2937' }}>
              Why Choose Balaji Security Agency?
            </h2>

            {/* Reasons List */}
            <div className="space-y-8">
              {reasons.map((reason) => (
                <div key={reason.number} className="flex items-start gap-6">
                  {/* Number Circle */}
                  <div
                    className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: '#93C5FD' }}
                  >
                    <span className="text-2xl font-bold text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {reason.number}
                    </span>
                  </div>

                  {/* Text */}
                  <p className="text-xl text-gray-600 pt-3" style={{ fontFamily: "'Poppins', sans-serif", lineHeight: '1.6' }}>
                    {reason.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="rounded-3xl overflow-hidden shadow-lg w-full max-w-xl">
              <img
                src="/why choose balaji.png"
                alt="Security guards training"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseBalaji;
