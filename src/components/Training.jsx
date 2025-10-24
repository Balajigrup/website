import { useState } from 'react';
import { Building, Clock, Scale, Siren, ChevronLeft, ChevronRight } from 'lucide-react';

const Training = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    {
      id: 1,
      icon: Building,
      title: "Indore's Fully Residential Training Plant",
    },
    {
      id: 2,
      icon: Clock,
      title: "30-day Induction",
    },
    {
      id: 3,
      icon: Scale,
      title: "Comprehensive Legal and Field Training",
    },
    {
      id: 4,
      icon: Siren,
      title: "Regular assessments",
    },
  ];

  const images = [
    "/Training/1.png",
    "/Training/2.png",
    "/Training/3.png",
    "/Training/4.png",
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-6" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, color: '#1F2937' }}>
          Central India's Most Advanced<br />Security Training
        </h2>

        <p className="text-center text-gray-700 mb-12 max-w-4xl mx-auto" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '18px' }}>
          What sets Balaji Security Agency apart is our industry-leading, certified training academy—ensuring every guard is ready for any situation.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div key={feature.id} className="flex flex-col items-center text-center">
                <IconComponent className="w-12 h-12 mb-4" style={{ color: '#1F2937', strokeWidth: 1.5 }} />
                <p className="text-gray-900 font-semibold" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '16px' }}>
                  {feature.title}
                </p>
              </div>
            );
          })}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-300 mb-12"></div>

        {/* Image Carousel */}
        <div className="relative">
          <div className="flex gap-6 overflow-hidden">
            {images.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 rounded-3xl overflow-hidden transition-all duration-500"
                style={{
                  width: '23%',
                  transform: `translateX(-${currentSlide * 104}%)`,
                }}
              >
                <img
                  src={image}
                  alt={`Training ${index + 1}`}
                  className="w-full h-96 object-cover"
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
          >
            <ChevronLeft className="w-6 h-6" style={{ color: '#1F2937' }} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
          >
            <ChevronRight className="w-6 h-6" style={{ color: '#1F2937' }} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-gray-900 w-8' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <button className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105" style={{ fontFamily: "'Poppins', sans-serif", backgroundColor: '#93C5FD', color: '#1F2937' }}>
            See full training curriculum
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Training;
