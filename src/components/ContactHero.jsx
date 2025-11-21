import Header from './Header';

const ContactHero = () => {
  return (
    <div className="min-h-screen md:h-screen bg-white flex flex-col">
      <Header />

      {/* Hero Section */}
      <div className="flex-1 flex items-center w-full overflow-hidden px-4 md:px-8 pt-3 pb-6 md:pb-8">
        <div className="rounded-2xl md:rounded-3xl overflow-hidden w-full h-full" style={{ backgroundColor: 'rgba(42, 43, 45, 1)' }}>
          <div className="grid lg:grid-cols-2 gap-6 p-6 md:p-12 lg:p-20 h-full">
            {/* Left Side - Content */}
            <div className="text-white flex flex-col justify-between h-full py-2 md:py-4">
              <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                {/* Main Heading */}
                <h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-tight mb-3 md:mb-4"
                  style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600 }}
                >
                  <span className="block">CONTACT BALAJI</span>
                  <span className="block">SECURITY GROUP</span>
                </h1>

                {/* Tagline */}
                <p
                  className="text-base md:text-lg lg:text-xl text-gray-300 max-w-xl"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Trusted Leadership, Proven Legacy,<br />Awarded Excellence
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-1 md:gap-2 animate-fade-in-up my-6 md:my-0" style={{ animationDelay: '0.4s' }}>
                <button
                  className="py-2.5 md:py-3 rounded-full font-medium transition-opacity hover:opacity-90 text-sm md:text-base"
                  style={{ background: 'linear-gradient(to right, #9CCBF5, #DBEEFF)', color: '#000000', height: '50px', width: '182px' }}
                >
                  Explore Services
                </button>

                <button className="bg-transparent hover:bg-white hover:text-gray-800 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors text-sm md:text-base" style={{ marginTop: '-0.5rem' }}>
                  <img src="/contactcall.png" alt="Call" style={{ height: '47px', width: 'auto' }} />
                  Call Us Now!
                </button>
              </div>

              {/* Statistics Grid */}
              <div className="grid grid-cols-2 gap-x-0 md:gap-x-0 gap-y-4 md:gap-y-6 animate-fade-in-up" style={{ marginLeft: '-12px', marginRight: '358px', animationDelay: '0.6s' }}>
                <div className="flex items-center" style={{ gap: '-8px', position: 'relative' }}>
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: 'clamp(24px, 4vw, 35.71px)', lineHeight: '100%', minWidth: 'clamp(50px, 10vw, 80px)' }}>
                    15<sup style={{ color: 'rgba(0, 113, 255, 1)', fontSize: '0.4em', verticalAlign: 'super', position: 'relative', top: '-0.3em' }}>+</sup>
                  </div>
                  <div className="text-xs md:text-sm text-gray-400" style={{ marginLeft: '-8px' }}>
                    Satisfied Indian<br />Clients
                  </div>
                  {/* Vertical divider */}
                  <div style={{ position: 'absolute', left: '100%', top: '0', bottom: '0', width: '1px', backgroundColor: 'white', transform: 'translateX(-35px)' }}></div>
                </div>

                <div className="flex items-center gap-0.5" style={{ position: 'relative' }}>
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: 'clamp(24px, 4vw, 35.71px)', lineHeight: '100%', minWidth: 'clamp(50px, 10vw, 80px)' }}>
                    170<sup style={{ color: 'rgba(0, 113, 255, 1)', fontSize: '0.4em', verticalAlign: 'super', position: 'relative', top: '-0.3em' }}>+</sup>
                  </div>
                  <div className="text-xs md:text-sm text-gray-400">
                    Completed<br />Projects
                  </div>
                </div>

                <div className="flex items-center" style={{ gap: '-8px', position: 'relative' }}>
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: 'clamp(24px, 4vw, 35.71px)', lineHeight: '100%', minWidth: 'clamp(50px, 10vw, 80px)' }}>
                    110<sup style={{ color: 'rgba(0, 113, 255, 1)', fontSize: '0.4em', verticalAlign: 'super', position: 'relative', top: '-0.3em' }}>+</sup>
                  </div>
                  <div className="text-xs md:text-sm text-gray-400" style={{ marginLeft: '-8px' }}>
                    Expert<br />Personnels
                  </div>
                  {/* Vertical divider */}
                  <div style={{ position: 'absolute', left: '100%', top: '0', bottom: '0', width: '1px', backgroundColor: 'white', transform: 'translateX(-35px)' }}></div>
                </div>

                <div className="flex items-center gap-0.5" style={{ position: 'relative' }}>
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: 'clamp(24px, 4vw, 35.71px)', lineHeight: '100%', minWidth: 'clamp(50px, 10vw, 80px)' }}>
                    210<sup style={{ color: 'rgba(0, 113, 255, 1)', fontSize: '0.4em', verticalAlign: 'super', position: 'relative', top: '-0.3em' }}>+</sup>
                  </div>
                  <div className="text-xs md:text-sm text-gray-400">
                    Positive<br />Reviews
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Image and Badges */}
            <div className="hidden lg:flex relative items-end pt-4" style={{ height: 'calc(100% + 5rem)', marginBottom: '-5rem', marginLeft: '-2rem' }}>
              {/* Light blue rectangle */}
              <div className="rounded-t-3xl h-full relative" style={{ width: '70%', background: 'linear-gradient(to right, #9CCBF5, #DBEEFF)' }}>
              </div>

              {/* Guard image - positioned to overflow */}
              <img
                src="/guard_hero.png"
                alt="Security Guard"
                className="absolute transform -translate-x-1/2 w-auto object-contain"
                style={{ left: '33%', bottom: '-0.75rem', height: 'calc(100% + 6rem)' }}
              />

              {/* Badge containers stacked on the right */}
              <div className="absolute flex flex-col gap-5 z-20" style={{ right: '-0.5rem', top: '4rem', fontFamily: "'Oswald', sans-serif" }}>
                {/* Badge 1 - Training Facility */}
                <div className="bg-white rounded-2xl p-5 shadow-lg w-56">
                  <p className="text-sm font-semibold text-center mb-3 text-gray-800">We have an In-House<br />Training Facility</p>
                  <div className="flex items-center justify-center">
                    <img src="/inhouse_training.png" alt="In-House Training Academy" className="w-full h-auto object-contain" />
                  </div>
                </div>

                {/* Badge 2 - ISO Certified */}
                <div className="bg-white rounded-2xl p-5 shadow-lg w-56 flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <img src="/ISO.png" alt="ISO Certified" className="w-14 h-14 object-contain" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-gray-800">ISO - 9001:2015</p>
                    <p className="text-sm text-gray-600">Certified</p>
                  </div>
                </div>

                {/* Badge 3 - PASARA */}
                <div className="bg-white rounded-2xl p-5 shadow-lg w-56 flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <img src="/Pasara.png" alt="PASARA Compliant" className="w-14 h-14 object-contain" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-gray-800">PASARA</p>
                    <p className="text-sm text-gray-600">Compliant</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile/Tablet Badges - Below content on smaller screens */}
            <div className="lg:hidden flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start">
              {/* Badge - ISO Certified */}
              <div className="bg-white rounded-xl p-3 md:p-4 shadow-lg flex items-center gap-3 flex-1 min-w-[140px]">
                <div className="flex-shrink-0">
                  <img src="/ISO.png" alt="ISO Certified" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
                </div>
                <div className="text-left">
                  <p className="text-xs md:text-sm font-bold text-gray-800">ISO - 9001:2015</p>
                  <p className="text-xs text-gray-600">Certified</p>
                </div>
              </div>

              {/* Badge - PASARA */}
              <div className="bg-white rounded-xl p-3 md:p-4 shadow-lg flex items-center gap-3 flex-1 min-w-[140px]">
                <div className="flex-shrink-0">
                  <img src="/Pasara.png" alt="PASARA Compliant" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
                </div>
                <div className="text-left">
                  <p className="text-xs md:text-sm font-bold text-gray-800">PASARA</p>
                  <p className="text-xs text-gray-600">Compliant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
