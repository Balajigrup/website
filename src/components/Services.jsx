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
    <section className="py-16 bg-white">
      <div className="max-w-[85rem] mx-auto px-8">
        <div className="rounded-3xl py-2 px-8" style={{ backgroundColor: '#F2F2F2' }}>
          {/* Header */}
          <div className="text-center mb-12 pt-8">
            <p className="text-gray-600 mb-2" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '16px' }}>
              Explore Our Services
            </p>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, color: '#1F2937' }}>
              What We Offer
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '18px' }}>
              Protecting your business, assets, and employees<br />with customized security plans.
            </p>
          </div>

          {/* Service Cards */}
          <div className="flex justify-center mb-12">
            <div className="flex gap-10">
            {services.map((service) => {
              return (
                <div
                  key={service.id}
                  className="rounded-3xl p-12 flex flex-col items-center text-center flex-shrink-0 transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                  style={{ background: 'linear-gradient(to top, #9CCBF5, #CAE9FF)', width: '320px', minHeight: '420px' }}
                >
                  {/* Image */}
                  <div className="mb-6">
                    <img src={service.image} alt={service.title} className="w-28 h-28 object-contain" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 whitespace-nowrap" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600, color: '#1F2937' }}>
                    {service.title}
                  </h3>

                  {/* Divider */}
                  <div className="w-16 h-px mb-4" style={{ backgroundColor: '#1E3A8A' }}></div>

                  {/* Description */}
                  <p className="leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '16px', color: '#000000' }}>
                    {service.description}
                  </p>
                </div>
              );
            })}
            </div>
          </div>

          {/* View More Button */}
          <div className="flex justify-center pb-8">
            <button className="flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all hover:scale-105" style={{ fontFamily: "'Poppins', sans-serif", backgroundColor: '#93C5FD', color: '#1F2937' }}>
              View More
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
