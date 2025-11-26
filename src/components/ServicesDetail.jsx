import { useState } from 'react';
import ServiceModal from './ServiceModal';

const ServicesDetail = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const services = [
    {
      id: 1,
      icon: "/services-icon/Onsite security.png",
      title: "ON-SITE SECURITY",
      description: "Trained guards deliver visible, round-the-clock protection for your premises."
    },
    {
      id: 2,
      icon: "/services-icon/surveillance and monitoring.png",
      title: "SURVEILLANCE & MONITORING",
      description: "Active security personnel ensure real-time vigilance through continuous camera monitoring."
    },
    {
      id: 3,
      icon: "/services-icon/customized security.png",
      title: "CUSTOMIZED SECURITY",
      description: "Tailored guard deployments and protocols designed for your unique needs."
    },
    {
      id: 4,
      icon: "/services-icon/Event security.png",
      title: "EVENT SECURITY",
      description: "Specialized teams maintain safety and order at every gathering, big or small."
    },
    {
      id: 5,
      icon: "/services-icon/Access control and patrol.png",
      title: "ACCESS CONTROL & PATROL",
      description: "Disciplined guards manage entry points and regular patrols for total facility security."
    },
    {
      id: 6,
      icon: "/services-icon/rapid response team.png",
      title: "RAPID RESPONSE TEAM",
      description: "Fast-acting units available 24/7 for immediate incidents."
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, color: '#1F2937' }}>
            THE SERVICES WE DELIVER WITH<br className="hidden sm:block" /> DISTINCTION
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto text-sm md:text-lg" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Dependable, Highly-Trained Personnel For Every Challenge, From Event Coverage To Executive Protection.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => handleServiceClick(service)}
              className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 transition-shadow duration-300 cursor-pointer"
              style={{ border: '1px solid #E5E7EB', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)' }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 6px 25px rgba(0, 0, 0, 0.4)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)'}
            >
              {/* Icon */}
              <div className="mb-4 md:mb-6 flex justify-center">
                <div className="w-16 h-16 md:w-24 md:h-24 flex items-center justify-center">
                  <img src={service.icon} alt={service.title} className="w-14 h-14 md:w-20 md:h-20 object-contain" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-center" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600, color: '#1F2937' }}>
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-center text-gray-700 leading-relaxed text-sm md:text-base" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Service Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default ServicesDetail;
