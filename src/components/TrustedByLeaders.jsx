const TrustedByLeaders = () => {
  const clients = [
    { name: "Vadodara Municipal Corporation", logo: "/client logos/vadodara municipal corporation.png" },
    { name: "Jaipur Metro", logo: "/client logos/jaipur metro.png" },
    { name: "American Tower", logo: "/client logos/American_Tower_Corporation_logo.svg.png" },
    { name: "DH Secheron", logo: "/client logos/dh secheron.png" },
    { name: "HDFC Bank", logo: "/client logos/HDFC-Bank-logo.png" },
    { name: "Axis Bank", logo: "/client logos/AXISBank_Logo.svg.png" },
  ];

  // Duplicate the array for seamless loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="bg-white py-10 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <h2
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-8 md:mb-16"
          style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600 }}
        >
          Trusted by Leaders
        </h2>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling logos */}
          <div
            className="flex"
            style={{
              animation: 'marquee 20s linear infinite',
              width: 'fit-content'
            }}
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-4 md:mx-8 lg:mx-12 flex items-center justify-center"
                style={{
                  width: 'clamp(100px, 15vw, 180px)',
                  height: 'clamp(50px, 8vw, 90px)'
                }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default TrustedByLeaders;
