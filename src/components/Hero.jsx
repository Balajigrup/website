import { PhoneCall } from 'lucide-react';

const Hero = () => {
  return (
    <div className="h-screen bg-white flex flex-col">
      {/* Header Navigation */}
      <header className="bg-white px-6 py-4 flex items-center justify-between flex-shrink-0 animate-fade-in-down">
        <div className="flex items-center">
          <img src="/logo.png" alt="Balaji Group Logo" className="h-14 w-auto object-contain" />
        </div>

        <nav className="hidden md:flex items-center gap-12 absolute left-1/2 transform -translate-x-1/2" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <a href="#services" className="text-gray-700 hover:text-gray-900 font-semibold">SERVICES</a>
          <a href="#training" className="text-gray-700 hover:text-gray-900 font-semibold">TRAINING</a>
          <a href="#about" className="text-gray-700 hover:text-gray-900 font-semibold">ABOUT US</a>
        </nav>

        <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Request Quote
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </header>

      {/* Hero Section */}
      <div className="flex-1 flex items-center w-full overflow-hidden px-8 pt-3 pb-8">
        <div className="rounded-3xl overflow-hidden w-full h-full" style={{ backgroundColor: '#2A2B2D' }}>
          <div className="grid lg:grid-cols-2 gap-6 p-16 lg:p-20 h-full">
            {/* Left Content */}
            <div className="text-white flex flex-col justify-between h-full py-4">
              <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-6xl lg:text-7xl leading-tight tracking-tight whitespace-nowrap mb-4" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600 }}>
                  <span className="block">PROTECTING PEOPLE</span>
                  <span className="block">AND PLACES WITH</span>
                  <span className="block">EXCELLENCE</span>
                </h2>
                <p className="text-xl text-gray-300">
                  Your Security is Our Priority, Since 1991
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <button
                  className="px-8 py-3 rounded-full font-medium transition-opacity hover:opacity-90"
                  style={{ background: 'linear-gradient(to right, #9CCBF5, #DBEEFF)', color: '#000000' }}
                >
                  Explore Services
                </button>
                <button className="bg-transparent hover:bg-white hover:text-gray-800 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors">
                  <PhoneCall className="w-6 h-6" style={{ color: '#C5F547', strokeWidth: 2 }} />
                  Call Us Now!
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <div className="flex items-center gap-3">
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '35.71px', lineHeight: '100%', minWidth: '80px' }}>
                    15<sup style={{ color: '#9CCBF5', fontSize: '0.6em' }}>+</sup>
                  </div>
                  <div className="text-sm text-gray-400">
                    Satisfied Indian<br />Clients
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '35.71px', lineHeight: '100%', minWidth: '80px' }}>
                    170<sup style={{ color: '#9CCBF5', fontSize: '0.6em' }}>+</sup>
                  </div>
                  <div className="text-sm text-gray-400">
                    Completed<br />Projects
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '35.71px', lineHeight: '100%', minWidth: '80px' }}>
                    110<sup style={{ color: '#9CCBF5', fontSize: '0.6em' }}>+</sup>
                  </div>
                  <div className="text-sm text-gray-400">
                    Expert<br />Personnelle
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '35.71px', lineHeight: '100%', minWidth: '80px' }}>
                    210<sup style={{ color: '#9CCBF5', fontSize: '0.6em' }}>+</sup>
                  </div>
                  <div className="text-sm text-gray-400">
                    Positive<br />Reviews
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Image & Badges */}
            <div className="relative flex items-end pt-4" style={{ height: 'calc(100% + 5rem)', marginBottom: '-5rem', marginLeft: '-2rem' }}>
              {/* Light blue rectangle */}
              <div className="rounded-t-3xl h-full relative animate-fade-in-up" style={{ width: '70%', background: 'linear-gradient(to right, #9CCBF5, #DBEEFF)', animationDelay: '0.3s' }}>
              </div>
              {/* Guard image - positioned to overflow */}
              <img src="/guard_hero.png" alt="Security Guard" className="absolute transform -translate-x-1/2 w-auto object-contain animate-fade-in-up" style={{ left: '33%', bottom: '-0.75rem', height: 'calc(100% + 3rem)', animationDelay: '0.5s' }} />

              {/* Badge containers stacked on the right */}
              <div className="absolute flex flex-col gap-5 z-20 animate-fade-in-right" style={{ right: '-0.5rem', top: '4rem', fontFamily: "'Oswald', sans-serif", animationDelay: '0.7s' }}>
                {/* Badge 1 - Training Facility */}
                <div className="bg-white rounded-2xl p-5 shadow-lg w-56">
                  <p className="text-sm font-semibold text-center mb-3 text-gray-800">We have an In-House<br/>Training Facility</p>
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
                    <p className="text-sm text-gray-600">Complaint</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
