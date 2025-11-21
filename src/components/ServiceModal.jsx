import { X, Building2, Calendar, ShieldCheck, Handshake, Clock } from 'lucide-react';

const ServiceModal = ({ service, isOpen, onClose }) => {
  if (!isOpen || !service) return null;

  const highlights = [
    {
      icon: Building2,
      text: "Central India's only residential training academy"
    },
    {
      icon: Calendar,
      text: "Leading this Since 1992"
    },
    {
      icon: ShieldCheck,
      text: "PASARA and ISO-certified security protocols"
    },
    {
      icon: Handshake,
      text: "Dedicated client relationship manager for every contract"
    },
    {
      icon: Clock,
      text: "5-minute rapid response guarantee"
    }
  ];

  const inclusions = [
    "Something",
    "Our Main Service Second",
    "Our Main Inclusion Third",
    "Our main Inclusion Fourth",
    "Our main Inclusion Fourth",
    "Our main Inclusion Fourth"
  ];

  const relatedServices = [
    {
      title: "CUSTOMIZED\nSECURITY",
      icon: "/services-icon/customized security.png"
    },
    {
      title: "SURVEILLANCE AND\nMONITORING",
      icon: "/services-icon/surveillance and monitoring.png"
    },
    {
      title: "EVENT\nSECURITY",
      icon: "/services-icon/Event security.png"
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white rounded-3xl w-full max-w-6xl h-[90vh] overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>
        {/* Header Section with Image */}
        <div className="relative h-64 bg-gradient-to-r from-blue-900 to-blue-700">
          <img src="/modal.jpg" alt={service.title} className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent flex items-end p-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>
                {service.title}
              </h2>
              <p className="text-white text-lg" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {service.description}
              </p>
            </div>
          </div>
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
          >
            <X size={24} className="text-gray-800" />
          </button>
        </div>

        {/* Content Section - Non-scrollable */}
        <div className="flex-1 p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="flex flex-col">
            {/* What's Included */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Oswald', sans-serif", color: '#1F2937' }}>
                What's Included
              </h3>
              <ul className="space-y-2">
                {inclusions.map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    <span className="w-2 h-2 bg-gray-800 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col">
            {/* Highlights Box */}
            <div className="rounded-3xl p-6 mb-6" style={{ backgroundColor: '#DBEEFF' }}>
              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <highlight.icon size={24} className="text-blue-900 flex-shrink-0 mt-1" />
                    <p className="text-gray-800" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px' }}>
                      {highlight.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Services Section */}
        <div className="px-8 pb-8">
          <div className="grid grid-cols-3 gap-4">
            {relatedServices.map((relService, index) => (
              <div
                key={index}
                className="rounded-2xl p-6 flex flex-col items-center justify-center text-center"
                style={{ backgroundColor: '#1E3A8A' }}
              >
                <img src={relService.icon} alt={relService.title} className="w-16 h-16 object-contain mb-3 brightness-0 invert" />
                <h4 className="text-white font-semibold text-sm whitespace-pre-line" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  {relService.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
