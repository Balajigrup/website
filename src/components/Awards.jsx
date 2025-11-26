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

  // Award card component for reusability
  const AwardCard = ({ award, keyPrefix, index }) => (
    <div
      key={`${keyPrefix}-${index}`}
      className="flex-shrink-0 bg-white rounded-lg md:rounded-2xl p-2 md:p-6 border md:border-4 border-gray-300"
      style={{ width: 'clamp(160px, 40vw, 350px)', minHeight: 'clamp(90px, 15vw, 180px)' }}
    >
      <div className="flex items-start gap-1.5 md:gap-4">
        {/* Award Image with Year */}
        <div className="relative flex-shrink-0 w-9 h-9 md:w-20 md:h-20">
          <img
            src="/Award.png"
            alt="Award"
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs md:text-xl font-bold" style={{ fontFamily: "'Oswald', sans-serif", color: '#B8860B' }}>
              {award.year}
            </span>
          </div>
        </div>

        {/* Award Details */}
        <div className="flex-1 min-w-0">
          <h3 className="text-xs md:text-lg font-bold mb-0.5 md:mb-2 line-clamp-2" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, color: '#1F2937' }}>
            {award.title}
          </h3>
          <p className="text-gray-600 leading-tight md:leading-relaxed text-[10px] md:text-sm line-clamp-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
            {award.organization}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8 md:mb-16">
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-center" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, color: '#1F2937' }}>
          Awards and Recognition
        </h2>
      </div>

      {/* Top Marquee - Left to Right */}
      <div className="relative mb-4 md:mb-8 overflow-hidden w-full">
          <div className="flex gap-3 md:gap-8 animate-marquee-right">
            {[...topRowAwards, ...topRowAwards].map((award, index) => (
              <AwardCard award={award} keyPrefix="top" index={index} key={`top-${index}`} />
            ))}
          </div>
        </div>

      {/* Bottom Marquee - Right to Left */}
      <div className="relative overflow-hidden w-full">
          <div className="flex gap-3 md:gap-8 animate-marquee-left">
            {[...bottomRowAwards, ...bottomRowAwards].map((award, index) => (
              <AwardCard award={award} keyPrefix="bottom" index={index} key={`bottom-${index}`} />
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
