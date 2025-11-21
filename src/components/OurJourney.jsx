const OurJourney = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, color: '#1F2937' }}>
            Our Journey
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="flex justify-center">
            <div className="rounded-3xl overflow-hidden shadow-lg w-full">
              <img
                src="/our journey.png"
                alt="Security team standing in formation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-8">
            {/* First Paragraph */}
            <p className="text-xl leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif", color: '#1F2937' }}>
              "Balaji Security Group began in 1991 with a vision: to redefine what it means to be secure in Central India. Our founders, driven by witnessing gaps in safety standards and a genuine concern for people and businesses, set out to create not just a service, but a culture of discipline, respect, and unwavering vigilance."
            </p>

            {/* Second Paragraph */}
            <p className="text-xl leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif", color: '#9CA3AF' }}>
              "Our mission was always clear—protecting life and property with integrity, training guards not just in protocols but in the values of accountability and loyalty. Over the years, we have grown from a handful of dedicated professionals to an award-winning force trusted by leading corporations and communities alike."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
