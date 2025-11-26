import { useState, useEffect } from 'react';

const TrainingCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const carouselData = [
    {
      id: 1,
      image: "/Training/1.png",
      title: "Professional Training Facility"
    },
    {
      id: 2,
      image: "/Training/2.png",
      title: "Expert Instructors"
    },
    {
      id: 3,
      image: "/Training/3.png",
      title: "Modern Equipment"
    },
    {
      id: 4,
      image: "/Training/4.png",
      title: "Hands-on Practice"
    },
    {
      id: 5,
      image: "/Training/1.png",
      title: "Certification Programs"
    },
    {
      id: 6,
      image: "/Training/2.png",
      title: "Safety Protocols"
    }
  ];

  // Auto-rotate every 2 seconds
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % carouselData.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isPaused, carouselData.length]);

  // Get visible cards (previous, current, next)
  const getVisibleCards = () => {
    const total = carouselData.length;
    const prevIndex = (currentIndex - 1 + total) % total;
    const nextIndex = (currentIndex + 1) % total;

    return [
      { ...carouselData[prevIndex], position: 'left' },
      { ...carouselData[currentIndex], position: 'center' },
      { ...carouselData[nextIndex], position: 'right' }
    ];
  };

  const visibleCards = getVisibleCards();

  return (
    <section className="w-full bg-white py-10 md:py-16 overflow-hidden">
      <div className="w-full px-4 md:px-8">
        {/* Carousel Container */}
        <div
          className="relative w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Mobile: Show single card */}
          <div className="md:hidden flex justify-center">
            <div className="w-full max-w-sm">
              <div
                className="w-full bg-gray-900 rounded-lg overflow-hidden"
                style={{
                  padding: '8px',
                  boxShadow: '0 15px 40px rgba(0, 0, 0, 0.35), inset 0 0 0 2px rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="w-full bg-black rounded overflow-hidden relative" style={{ aspectRatio: '16/10' }}>
                  <img
                    src={carouselData[currentIndex].image}
                    alt={carouselData[currentIndex].title}
                    className="w-full h-full"
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center',
                      display: 'block'
                    }}
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(to bottom, rgba(255,255,255,0.05) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Desktop: Show 3D carousel */}
          <div className="hidden md:flex gap-4 lg:gap-6 justify-center items-center max-w-7xl mx-auto" style={{ perspective: '1500px' }}>
            {visibleCards.map((card, idx) => {
              let transform = 'rotateY(0deg)';
              let width = '300px';

              if (card.position === 'left') {
                transform = 'rotateY(25deg)';
              } else if (card.position === 'center') {
                transform = 'rotateY(0deg) scale(0.95)';
                width = '290px';
              } else if (card.position === 'right') {
                transform = 'rotateY(-25deg)';
              }

              return (
                <div
                  key={`${card.id}-${idx}`}
                  className="flex-shrink-0 transition-all duration-700 ease-in-out"
                  style={{
                    width: width,
                    transform: transform,
                    transformStyle: 'preserve-3d'
                  }}
                >
                {/* Monitor Frame */}
                <div
                  className="w-full bg-gray-900 rounded-lg overflow-hidden"
                  style={{
                    padding: '12px',
                    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.35), inset 0 0 0 2px rgba(255, 255, 255, 0.1)'
                  }}
                >
                  {/* Screen */}
                  <div className="w-full bg-black rounded overflow-hidden relative" style={{ aspectRatio: '16/10' }}>
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full"
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                        display: 'block'
                      }}
                    />
                    {/* Screen reflection effect */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: 'linear-gradient(to bottom, rgba(255,255,255,0.05) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)'
                      }}
                    />
                  </div>
                </div>
              </div>
              );
            })}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6 md:mt-8">
          {carouselData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'bg-gray-900 w-6 md:w-8 h-2 md:h-3'
                  : 'bg-gray-400 w-2 md:w-3 h-2 md:h-3 hover:bg-gray-600'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingCarousel;
