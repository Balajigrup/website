import { Camera, Users, Shield, Home, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Corporate Security",
      description: "Protecting your business, assets, and employees with customized security plans.",
      image: "/what we offer/Corporate Security.png",
    },
    {
      id: 2,
      title: "Event Security",
      description: "Protecting your business, assets, and employees with customized security plans.",
      image: "/what we offer/Event Security.png",
    },
    {
      id: 3,
      title: "Personal Security",
      description: "Protecting your business, assets, and employees with customized security plans.",
      image: "/what we offer/Personal Security.png",
    },
    {
      id: 4,
      title: "Residential Security",
      description: "Protecting your business, assets, and employees with customized security plans.",
      image: "/what we offer/Residential Security.png",
    },
  ];

  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="max-w-[85rem] mx-auto px-4 md:px-8">
        <div className="rounded-2xl md:rounded-3xl py-2 px-4 md:px-8" style={{ backgroundColor: '#F2F2F2' }}>
          {/* Header */}
          <div className="text-center mb-8 md:mb-12 pt-6 md:pt-8">
            <p className="text-gray-600 mb-2 text-sm md:text-base" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Explore Our Services
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, color: '#1F2937' }}>
              What We Offer
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-sm md:text-lg" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Protecting your business, assets, and employees<br className="hidden md:block" />with customized security plans.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
            {services.map((service) => {
              return (
                <div
                  key={service.id}
                  className="rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                  style={{ background: 'linear-gradient(to top, #9CCBF5, #CAE9FF)' }}
                >
                  {/* Image */}
                  <div className="mb-4 md:mb-6">
                    <img src={service.image} alt={service.title} className="w-20 h-20 md:w-28 md:h-28 object-contain" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600, color: '#1F2937' }}>
                    {service.title}
                  </h3>

                  {/* Divider */}
                  <div className="w-12 md:w-16 h-px mb-3 md:mb-4" style={{ backgroundColor: '#1E3A8A' }}></div>

                  {/* Description */}
                  <p className="leading-relaxed text-sm md:text-base" style={{ fontFamily: "'Poppins', sans-serif", color: '#000000' }}>
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* View More Button */}
          <div className="flex justify-center pb-6 md:pb-8">
            <button className="flex items-center gap-2 px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold transition-all hover:scale-105 text-sm md:text-base" style={{ fontFamily: "'Poppins', sans-serif", backgroundColor: '#93C5FD', color: '#1F2937' }}>
              View More
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
