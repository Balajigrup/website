import { User, Target, Phone } from 'lucide-react';

const Commitment = () => {
  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          {/* Left Side - Image with Helpdesk Card */}
          <div className="relative">
            <img
              src="/info.png"
              alt="Security Team"
              className="w-full h-[300px] md:h-[450px] lg:h-[600px] object-cover rounded-2xl md:rounded-3xl"
            />
            {/* Helpdesk Card Overlay */}
            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-xl max-w-[calc(100%-2rem)] md:max-w-sm">
              <p className="text-gray-900 font-semibold mb-2 md:mb-3 text-sm md:text-base" style={{ fontFamily: "'Poppins', sans-serif" }}>
                If you need help, Call Helpdesk
              </p>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-red-500" />
                <p className="text-gray-700 text-sm md:text-base" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  <span className="font-semibold">HelpDesk:</span> +91 8889044419
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 md:mb-6 uppercase" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}>
              DISCOVER OUR COMMITMENT TO YOUR SAFETY
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6 md:mb-12 text-sm md:text-base" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Since 1991, Balaji Security Services Pvt. Ltd. has been dedicated to providing exceptional security solutions for residential and commercial clients across India. Our team of trained professionals, supported by a state-of-the-art training academy and rigorous supervision.
            </p>

            {/* Vision and Mission */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
              {/* Vision */}
              <div className="flex-1">
                <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-red-500 flex items-center justify-center">
                      <User className="w-6 h-6 md:w-8 md:h-8 text-white" strokeWidth={2} />
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 pt-2 md:pt-3" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600 }}>
                    Vision
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  To be the most trusted security partner, delivering innovative and reliable protection that ensures safety and peace of mind for our clients.
                </p>
              </div>

              {/* Divider - Horizontal on mobile, Vertical on desktop */}
              <div className="w-full h-px md:w-px md:h-48 lg:h-64 bg-red-500 flex-shrink-0"></div>

              {/* Mission */}
              <div className="flex-1">
                <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-red-500 flex items-center justify-center">
                      <Target className="w-6 h-6 md:w-8 md:h-8 text-white" strokeWidth={2} />
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 pt-2 md:pt-3" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600 }}>
                    Mission
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  To provide comprehensive, professional security solutions through skilled personnel, rigorous training, and dedicated supervision, safeguarding with integrity and excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commitment;
