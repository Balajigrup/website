const Leadership = () => {
  const leaders = [
    {
      id: 1,
      name: "John Doe",
      position: "Co-Founder",
      quote: '"quis Lorem officia sint magna qui veniam in nostrud sit proident labore eu laboris aute cupidatat"',
      image: "/guard_hero.png",
    },
    {
      id: 2,
      name: "John Doe",
      position: "Co-Founder",
      quote: '"quis Lorem officia sint magna qui veniam in nostrud sit proident labore eu laboris aute cupidatat"',
      image: "/guard_hero.png",
    },
    {
      id: 3,
      name: "John Doe",
      position: "Co-Founder",
      quote: '"quis Lorem officia sint magna qui veniam in nostrud sit proident labore eu laboris aute cupidatat"',
      image: "/guard_hero.png",
    },
  ];

  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-8 md:mb-16" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, color: '#1F2937' }}>
          Our Leadership
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {leaders.map((leader) => (
            <div key={leader.id} className="flex flex-col items-center text-center">
              <div className="mb-4 md:mb-6">
                <img
                  src="/OurLeadership.png"
                  alt={leader.name}
                  className="w-full h-auto object-contain"
                  style={{ maxWidth: '220px' }}
                />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600, color: '#1F2937' }}>
                {leader.name}
              </h3>

              <p className="text-base md:text-lg mb-3 md:mb-4" style={{ fontFamily: "'Poppins', sans-serif", color: '#9CA3AF' }}>
                {leader.position}
              </p>

              <p className="text-gray-700 leading-relaxed max-w-xs text-sm md:text-base" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}>
                {leader.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
