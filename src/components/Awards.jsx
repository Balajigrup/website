const Awards = () => {
  const awards = [
    {
      id: 1,
      year: "2012",
      title: "Security Leadership Award",
      organization: "Security Leadership Summit 2012",
    },
    {
      id: 2,
      year: "2018",
      title: "Security Leadership Award",
      organization: "Central Association of Private Security Industry (CAPSI)",
    },
    {
      id: 3,
      year: "2018",
      title: "1st State Level Security Conference",
      organization: "Central Association of Private Security Industry (CAPSI)",
    },
    {
      id: 4,
      year: "2019",
      title: "Security Excellent Leadership Award",
      organization: "Central Association of Private Security Industry (CAPSI)",
    },
    {
      id: 5,
      year: "2021",
      title: "Security Leadership Award",
      organization: "Central Association of Private Security Industry (CAPSI)",
    },
    {
      id: 6,
      year: "2021",
      title: "Best Leadership Award",
      organization: "Central Association of Private Security Industry (CAPSI)",
    },
  ];

  const topRowAwards = awards.slice(0, 3);
  const bottomRowAwards = awards.slice(3, 6);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-8 mb-16">
        {/* Header */}
        <h2 className="text-5xl lg:text-6xl font-bold text-center" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, color: '#1F2937' }}>
          Awards and Recognition
        </h2>
      </div>

      {/* Top Marquee - Left to Right */}
      <div className="relative mb-8 overflow-hidden w-full">
          <div className="flex gap-8 animate-marquee-right">
            {[...topRowAwards, ...topRowAwards].map((award, index) => (
              <div
                key={`top-${index}`}
                className="flex-shrink-0 bg-white rounded-2xl p-6 border-4 border-gray-300"
                style={{ width: '350px', minHeight: '180px' }}
              >
                <div className="flex items-start gap-4">
                  {/* Award Image with Year */}
                  <div className="relative flex-shrink-0" style={{ width: '80px', height: '80px' }}>
                    <img
                      src="/Award.png"
                      alt="Award"
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xl font-bold" style={{ fontFamily: "'Oswald', sans-serif", color: '#B8860B' }}>
                        {award.year}
                      </span>
                    </div>
                  </div>

                  {/* Award Details */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, color: '#1F2937' }}>
                      {award.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px' }}>
                      {award.organization}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      {/* Bottom Marquee - Right to Left */}
      <div className="relative overflow-hidden w-full">
          <div className="flex gap-8 animate-marquee-left">
            {[...bottomRowAwards, ...bottomRowAwards].map((award, index) => (
              <div
                key={`bottom-${index}`}
                className="flex-shrink-0 bg-white rounded-2xl p-6 border-4 border-gray-300"
                style={{ width: '350px', minHeight: '180px' }}
              >
                <div className="flex items-start gap-4">
                  {/* Award Image with Year */}
                  <div className="relative flex-shrink-0" style={{ width: '80px', height: '80px' }}>
                    <img
                      src="/Award.png"
                      alt="Award"
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xl font-bold" style={{ fontFamily: "'Oswald', sans-serif", color: '#B8860B' }}>
                        {award.year}
                      </span>
                    </div>
                  </div>

                  {/* Award Details */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, color: '#1F2937' }}>
                      {award.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px' }}>
                      {award.organization}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      <style jsx>{`
        @keyframes marquee-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-left {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-marquee-right {
          animation: marquee-right 30s linear infinite;
        }

        .animate-marquee-left {
          animation: marquee-left 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Awards;
