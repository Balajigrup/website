import Header from './Header';

const ContactHero = () => {
  return (
    <div className="min-h-[65vh] md:h-[100vh] bg-white flex flex-col">
      <Header />

      {/* Hero Section */}
      <div className="flex-1 flex items-center w-full overflow-hidden px-4 md:px-8 pt-3 pb-6 md:pb-8">
        <div className="rounded-2xl md:rounded-3xl overflow-hidden w-full h-full" style={{ backgroundColor: 'rgba(42, 43, 45, 1)' }}>
          <div className="grid lg:grid-cols-2 gap-2 md:gap-6 p-6 md:p-12 lg:p-20 h-186">
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
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-4 animate-fade-in-up my-6 md:my-0" style={{ animationDelay: '0.4s' }}>
                <button
                  className="px-6 md:px-8 py-2.5 md:py-3 rounded-full font-medium transition-opacity hover:opacity-90 text-sm md:text-base"
                  style={{ background: 'linear-gradient(to right, #9CCBF5, #DBEEFF)', color: '#000000' }}
                >
                  Explore Services
                </button>

                <button className="bg-transparent hover:bg-white hover:text-gray-800 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors text-sm md:text-base">
                  <img src="/contactcall.png" alt="Call" style={{ height: '47px', width: 'auto' }} />
                  Call Us Now!
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 md:gap-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <div className="flex items-center gap-2 md:gap-3">
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: 'clamp(24px, 4vw, 35.71px)', lineHeight: '100%', minWidth: 'clamp(50px, 10vw, 80px)' }}>
                    15<sup style={{ color: '#9CCBF5', fontSize: '0.6em' }}>+</sup>
                  </div>
                  <div className="text-xs md:text-sm text-gray-400">
                    Satisfied Indian<br />Clients
                  </div>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: 'clamp(24px, 4vw, 35.71px)', lineHeight: '100%', minWidth: 'clamp(50px, 10vw, 80px)' }}>
                    170<sup style={{ color: '#9CCBF5', fontSize: '0.6em' }}>+</sup>
                  </div>
                  <div className="text-xs md:text-sm text-gray-400">
                    Completed<br />Projects
                  </div>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: 'clamp(24px, 4vw, 35.71px)', lineHeight: '100%', minWidth: 'clamp(50px, 10vw, 80px)' }}>
                    110<sup style={{ color: '#9CCBF5', fontSize: '0.6em' }}>+</sup>
                  </div>
                  <div className="text-xs md:text-sm text-gray-400">
                    Expert<br />Personnels
                  </div>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: 'clamp(24px, 4vw, 35.71px)', lineHeight: '100%', minWidth: 'clamp(50px, 10vw, 80px)' }}>
                    210<sup style={{ color: '#9CCBF5', fontSize: '0.6em' }}>+</sup>
                  </div>
                  <div className="text-xs md:text-sm text-gray-400">
                    Positive<br />Reviews
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Image and Badges */}
            <div className="hidden lg:flex relative items-end pt-4" style={{ height: 'calc(100% + 5rem)', marginBottom: '-5rem', marginLeft: '-2rem', marginTop: '3rem' }}>
              {/* Light blue rectangle */}
              <div className="rounded-t-3xl h-full relative" style={{ width: '70%', background: 'linear-gradient(to right, #9CCBF5, #DBEEFF)' }}>
              </div>

              {/* Guard image - positioned to overflow */}
              <img
                src="/guard_hero.png"
                alt="Security Guard"
                className="absolute transform -translate-x-1/2 w-auto object-contain"
                style={{ left: '33%', bottom: '-2rem', height: 'calc(100% + 6rem)' }}
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

            {/* Mobile/Tablet - Guard Image & Badges */}
            <div className="lg:hidden flex flex-row items-center justify-center gap-4">
              {/* Mobile Guard Image */}
              <div className="relative" style={{ width: '180px', height: '330px' }}>
                {/* Blue background */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-t-2xl"
                  style={{
                    width: '160px',
                    height: '275px',
                    background: 'linear-gradient(to right, #9CCBF5, #DBEEFF)'
                  }}
                />
                {/* Guard image */}
                <img
                  src="/guard_hero.png"
                  alt="Security Guard"
                  className="absolute -bottom-[172px] left-1/2 -translate-x-1/2 h-[600px] w-auto object-contain"
                />
              </div>

              {/* Mobile Badges - Stacked vertically on right */}
              <div className="flex flex-col gap-2.5 w-[110px] mt-9">
                {/* Badge - Training Facility */}
                <div className="bg-white rounded-xl p-2.5 shadow-md text-center">
                  <p className="text-[10px] font-semibold text-gray-800 mb-1">In-House Training</p>
                  <img src="/inhouse_training.png" alt="Training" className="w-full h-8 object-contain" />
                </div>

                {/* Badge - ISO Certified */}
                <div className="bg-white rounded-xl p-2.5 shadow-md text-center">
                  <img src="/ISO.png" alt="ISO" className="w-9 h-9 object-contain mx-auto mb-1" />
                  <p className="text-[10px] font-bold text-gray-800">ISO 9001:2015</p>
                </div>

                {/* Badge - PASARA */}
                <div className="bg-white rounded-xl p-2.5 shadow-md text-center">
                  <img src="/Pasara.png" alt="PASARA" className="w-9 h-9 object-contain mx-auto mb-1" />
                  <p className="text-[10px] font-bold text-gray-800">PASARA</p>
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
