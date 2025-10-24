import { User, Target, Phone } from 'lucide-react';

const Commitment = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Side - Image with Helpdesk Card */}
          <div className="relative">
            <img
              src="/info.png"
              alt="Security Team"
              className="w-full h-[600px] object-cover rounded-3xl"
            />
            {/* Helpdesk Card Overlay */}
            <div className="absolute bottom-8 left-8 bg-white rounded-2xl p-6 shadow-xl max-w-sm">
              <p className="text-gray-900 font-semibold mb-3" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '18px' }}>
                If you need help, Call Helpdesk
              </p>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-red-500" />
                <p className="text-gray-700" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  <span className="font-semibold">HelpDesk:</span> +91 8889044419
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 uppercase" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}>
              DISCOVER OUR COMMITMENT TO YOUR SAFETY
            </h2>

            <p className="text-gray-700 leading-relaxed mb-12" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '16px' }}>
              Since 1991, Balaji Security Services Pvt. Ltd. has been dedicated to providing exceptional security solutions for residential and commercial clients across India. Our team of trained professionals, supported by a state-of-the-art training academy and rigorous supervision.
            </p>

            {/* Vision and Mission */}
            <div className="flex gap-8 items-start">
              {/* Vision */}
              <div className="flex-1">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center">
                      <User className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 pt-3" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600 }}>
                    Vision
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  To be the most trusted security partner, delivering innovative and reliable protection that ensures safety and peace of mind for our clients.
                </p>
              </div>

              {/* Vertical Divider */}
              <div className="w-px bg-red-500 h-64 flex-shrink-0"></div>

              {/* Mission */}
              <div className="flex-1">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center">
                      <Target className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 pt-3" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600 }}>
                    Mission
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
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
