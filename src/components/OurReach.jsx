import { MapPin, Shield, Handshake, Phone } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const OurReach = () => {
  const [citiesCount, setCitiesCount] = useState(0);
  const [guardsCount, setGuardsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate cities count to 25
          let citiesTimer = setInterval(() => {
            setCitiesCount((prev) => {
              if (prev >= 25) {
                clearInterval(citiesTimer);
                return 25;
              }
              return prev + 1;
            });
          }, 80);

          // Animate guards count to 1500
          let guardsTimer = setInterval(() => {
            setGuardsCount((prev) => {
              if (prev >= 1500) {
                clearInterval(guardsTimer);
                return 1500;
              }
              return prev + 30;
            });
          }, 40);

          // Animate clients count to 120
          let clientsTimer = setInterval(() => {
            setClientsCount((prev) => {
              if (prev >= 120) {
                clearInterval(clientsTimer);
                return 120;
              }
              return prev + 2;
            });
          }, 60);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section className="bg-white py-10 md:py-16" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left - Map */}
          <div className="flex items-center justify-center order-2 lg:order-1">
            <img
              src="/map.png"
              alt="India Map showing our reach"
              className="w-full max-w-sm md:max-w-full h-auto object-contain"
            />
          </div>

          {/* Right - Content */}
          <div className="space-y-8 md:space-y-16 order-1 lg:order-2">
            {/* Heading */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2 md:mb-4" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600 }}>
                OUR REACH
              </h2>
              <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600 }}>
                Extensive Coverage,<br />
                Local Expertise
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 md:gap-8 lg:gap-12">
              <div className="flex items-center gap-2 md:gap-3">
                <MapPin className="w-6 h-6 md:w-8 md:h-8" />
                <div>
                  <div className="text-2xl md:text-3xl font-bold" style={{ fontFamily: "'Oswald', sans-serif" }}>{citiesCount}+</div>
                  <div className="text-xs md:text-sm text-gray-600" style={{ fontFamily: "'Oswald', sans-serif" }}>Cities covered</div>
                </div>
              </div>

              <div className="flex items-center gap-2 md:gap-3">
                <Shield className="w-6 h-6 md:w-8 md:h-8" />
                <div>
                  <div className="text-2xl md:text-3xl font-bold" style={{ fontFamily: "'Oswald', sans-serif" }}>{guardsCount}+</div>
                  <div className="text-xs md:text-sm text-gray-600" style={{ fontFamily: "'Oswald', sans-serif" }}>Guards Deployed</div>
                </div>
              </div>

              <div className="flex items-center gap-2 md:gap-3">
                <Handshake className="w-6 h-6 md:w-8 md:h-8" />
                <div>
                  <div className="text-2xl md:text-3xl font-bold" style={{ fontFamily: "'Oswald', sans-serif" }}>{clientsCount}+</div>
                  <div className="text-xs md:text-sm text-gray-600" style={{ fontFamily: "'Oswald', sans-serif" }}>Valued Clients</div>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-gray-100 rounded-2xl p-4 md:p-6 relative overflow-hidden max-w-md mx-auto lg:mx-0">
              {/* Red accent bar */}
              <div className="absolute top-0 right-0 w-28 md:w-40 h-2 bg-red-500 rounded-bl-lg"></div>

              <div className="flex items-start gap-3 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>INDORE</h3>
                  <p className="text-gray-700 text-sm md:text-base" style={{ fontFamily: "'Oswald', sans-serif" }}>
                    412 Navneet Plaza, 5/2 Old Palasia,<br />
                    Indore MP, 452010
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-gray-900 text-sm md:text-base">
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                <span style={{ fontFamily: "'Oswald', sans-serif" }}>
                  HelpDesk: <span className="font-semibold">+91 8889044419</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurReach;
