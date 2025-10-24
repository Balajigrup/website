import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side - Contact Info */}
          <div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, color: '#1F2937' }}>
              Get In Touch with Balaji Security Agency
            </h2>

            <p className="text-gray-500 mb-12 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '18px' }}>
              Ready to secure your premises with trusted professionals? Whether you require immediatesecurity solutions, wish to make an inquiry, or want to discuss a partnership, our team is here to assist—swiftly and confidentially.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#EF4444' }} />
                <p className="text-gray-600" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '16px' }}>
                  412 Navneet Plaza, 5/2 Old Palasia, Indore MP 452010, India
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#EF4444' }} />
                <p className="text-gray-600" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '16px' }}>
                  Phone: 0731 4237767, 4274005, 4067087, 2563564
                </p>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#EF4444' }} />
                <p className="text-gray-600" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '16px' }}>
                  info@balajigrup.com
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="rounded-3xl p-8 bg-white" style={{ boxShadow: '0 0 30px rgba(0, 0, 0, 0.1)' }}>
            <form className="space-y-6">
              {/* Full Name */}
              <input
                type="text"
                placeholder="Enter Full Name*"
                className="w-full px-6 py-4 rounded-xl border-2 border-gray-300 focus:outline-none focus:border-blue-400"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px' }}
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Enter Email Address*"
                className="w-full px-6 py-4 rounded-xl border-2 border-gray-300 focus:outline-none focus:border-blue-400"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px' }}
              />

              {/* Phone */}
              <input
                type="tel"
                placeholder="Enter Phone Number"
                className="w-full px-6 py-4 rounded-xl border-2 border-gray-300 focus:outline-none focus:border-blue-400"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px' }}
              />

              {/* Inquiry Type */}
              <select
                className="w-full px-6 py-4 pr-12 rounded-xl border-2 border-gray-300 focus:outline-none focus:border-blue-400 text-gray-400 appearance-none bg-white"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%239CA3AF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1.5rem center', backgroundSize: '1.25rem' }}
              >
                <option>Choose Inquiry type*</option>
                <option>Security Services</option>
                <option>Training Programs</option>
                <option>Partnership</option>
                <option>Other</option>
              </select>

              {/* Message */}
              <textarea
                placeholder="How can we help you today?"
                rows="5"
                className="w-full px-6 py-4 rounded-xl border-2 border-gray-300 focus:outline-none focus:border-blue-400 resize-none"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px' }}
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105"
                style={{ fontFamily: "'Poppins', sans-serif", backgroundColor: '#93C5FD', color: '#1F2937' }}
              >
                Send Message
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Privacy Note */}
              <p className="text-gray-500 text-sm text-center" style={{ fontFamily: "'Poppins', sans-serif" }}>
                We value your privacy, your inquiry is directly handled by our management team
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
