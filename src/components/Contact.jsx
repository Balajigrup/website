const Contact = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Contact Us Heading */}
        <h2
          className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-16"
          style={{ fontFamily: "'Oswald', sans-serif", color: '#1F2937' }}
        >
          Contact Us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          {/* Left Side - Team Image */}
          <div className="rounded-2xl overflow-hidden order-2 lg:order-1">
            <img
              src="/Contact/guards.png"
              alt="Balaji Security Team"
              className="w-full h-64 md:h-full object-cover"
            />
          </div>

          {/* Right Side - Contact Info and Form */}
          <div className="order-1 lg:order-2">
            {/* Office Address */}
            <div className="mb-6 md:mb-8">
              <h3
                className="text-lg md:text-xl font-bold mb-2"
                style={{ fontFamily: "'Poppins', sans-serif", color: '#1F2937' }}
              >
                Office
              </h3>
              <p
                className="text-gray-600 text-sm md:text-base"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                412 Navneet Plaza, 5/2 Old<br />
                Palasia, Indore MP, 452010, India
              </p>
            </div>

            {/* Email */}
            <div className="mb-6 md:mb-8">
              <h3
                className="text-lg md:text-xl font-bold mb-2"
                style={{ fontFamily: "'Poppins', sans-serif", color: '#1F2937' }}
              >
                E-mail
              </h3>
              <p
                className="text-gray-600 text-sm md:text-base"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                adm@balajigroup.com<br />
                info@balajigroup.com
              </p>
            </div>

            {/* Call */}
            <div className="mb-8 md:mb-12">
              <h3
                className="text-lg md:text-xl font-bold mb-2"
                style={{ fontFamily: "'Poppins', sans-serif", color: '#1F2937' }}
              >
                Call
              </h3>
              <p
                className="text-gray-600 text-sm md:text-base"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                HelpDesk: +91 8889044419<br />
                <span className="hidden md:inline">Phone: 0731 4237767, 4274005, 4067087, 2563564</span>
                <span className="md:hidden">Phone: 0731 4237767</span><br />
                Sales: +91 8120001410
              </p>
            </div>

            {/* Contact Form */}
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Full Name */}
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 border-b-2 border-gray-300 focus:outline-none focus:border-blue-400 text-sm md:text-base"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                />

                {/* Subject/Inquiry Type */}
                <input
                  type="text"
                  placeholder="Subject/Inquiry Type"
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 border-b-2 border-gray-300 focus:outline-none focus:border-blue-400 text-sm md:text-base"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Phone */}
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 border-b-2 border-gray-300 focus:outline-none focus:border-blue-400 text-sm md:text-base"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                />

                {/* Email */}
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 border-b-2 border-gray-300 focus:outline-none focus:border-blue-400 text-sm md:text-base"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                />
              </div>

              {/* Message */}
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full px-3 md:px-4 py-2.5 md:py-3 border-b-2 border-gray-300 focus:outline-none focus:border-blue-400 resize-none text-sm md:text-base"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className="px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold transition-all hover:scale-105 text-sm md:text-base"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  backgroundColor: '#93C5FD',
                  color: '#1F2937'
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
