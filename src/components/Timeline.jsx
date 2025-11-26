import { Handshake, GraduationCap, FileCheck, Building2, Award } from 'lucide-react';

const Timeline = () => {
  const milestones = [
    {
      id: 1,
      year: '1990',
      title: 'OUR FOUNDATION',
      description: 'cillum et consectetur irure eu ea minim labore aliqua laborum deserunt commodo pariatur magna ad anim esse dolore velit cillum laborum qui id ex minim sit dolore ex veniam commodo',
      icon: Handshake,
      position: 'top'
    },
    {
      id: 2,
      year: '2000',
      title: 'TRAINING ACADEMY ESTABLISHMENT',
      description: 'cillum et consectetur irure eu ea minim labore aliqua laborum deserunt commodo pariatur magna ad anim esse dolore velit cillum laborum qui id ex minim sit dolore ex veniam commodo',
      icon: GraduationCap,
      position: 'bottom'
    },
    {
      id: 3,
      year: '2010',
      title: 'PASARA LICENSE',
      description: 'cillum et consectetur irure eu ea minim labore aliqua laborum deserunt commodo pariatur magna ad anim esse dolore velit cillum laborum qui id ex minim sit dolore ex veniam commodo',
      icon: FileCheck,
      position: 'top'
    },
    {
      id: 4,
      year: '2020',
      title: 'THE EXPANSION',
      description: 'cillum et consectetur irure eu ea minim labore aliqua laborum deserunt commodo pariatur magna ad anim esse dolore velit cillum laborum qui id ex minim sit dolore ex veniam commodo',
      icon: Building2,
      position: 'bottom'
    },
    {
      id: 5,
      year: '2025',
      title: 'MULTIPLE AWARDS',
      description: 'cillum et consectetur irure eu ea minim labore aliqua laborum deserunt commodo pariatur magna ad anim esse dolore velit cillum laborum qui id ex minim sit dolore ex veniam commodo',
      icon: Award,
      position: 'top'
    }
  ];

  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, color: '#1F2937' }}>
            Our Legacy Time Line
          </h2>
        </div>

        {/* Mobile Timeline - Vertical */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>

            {/* Timeline Items */}
            <div className="space-y-8">
              {milestones.map((milestone) => (
                <div key={milestone.id} className="relative flex items-start gap-4 md:gap-6">
                  {/* Icon Circle */}
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center flex-shrink-0 z-10" style={{ backgroundColor: '#415A7E' }}>
                    <milestone.icon size={24} className="text-white md:w-8 md:h-8" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-4">
                    <p className="text-2xl md:text-3xl font-bold mb-1" style={{ fontFamily: "'Oswald', sans-serif", color: '#1F2937' }}>
                      {milestone.year}<span style={{ fontSize: '0.6em' }}>+</span>
                    </p>
                    <h3 className="text-sm md:text-base font-bold mb-2" style={{ fontFamily: "'Oswald', sans-serif", color: '#1F2937', letterSpacing: '0.05em' }}>
                      {milestone.title}
                    </h3>
                    <p className="text-xs md:text-sm leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif", color: '#4B5563' }}>
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Timeline - Horizontal */}
        <div className="hidden lg:block relative">
          {/* Horizontal Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 transform -translate-y-1/2" style={{ zIndex: 0 }}></div>

          {/* Timeline Items */}
          <div className="relative flex justify-between items-center" style={{ zIndex: 1 }}>
            {milestones.map((milestone) => (
              <div key={milestone.id} className="flex flex-col items-center relative" style={{ flex: 1 }}>
                {/* Content Above/Below */}
                {milestone.position === 'top' ? (
                  <>
                    {/* Top Content */}
                    <div className="mb-12 text-left max-w-xs">
                      <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "'Oswald', sans-serif", color: '#1F2937', letterSpacing: '0.05em' }}>
                        {milestone.title}
                      </h3>
                      <p className="text-5xl font-bold mb-3" style={{ fontFamily: "'Oswald', sans-serif", color: '#1F2937' }}>
                        {milestone.year}<span style={{ fontSize: '0.6em' }}>+</span>
                      </p>
                      <p className="text-xs leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif", color: '#4B5563' }}>
                        {milestone.description}
                      </p>
                    </div>

                    {/* Vertical Line */}
                    <div className="w-0.5 h-40 bg-gray-400"></div>

                    {/* Icon Circle */}
                    <div className="w-28 h-28 rounded-full flex items-center justify-center" style={{ backgroundColor: '#415A7E' }}>
                      <milestone.icon size={48} className="text-white" strokeWidth={1.5} />
                    </div>
                  </>
                ) : (
                  <>
                    {/* Icon Circle */}
                    <div className="w-28 h-28 rounded-full flex items-center justify-center" style={{ backgroundColor: '#415A7E' }}>
                      <milestone.icon size={48} className="text-white" strokeWidth={1.5} />
                    </div>

                    {/* Vertical Line */}
                    <div className="w-0.5 h-40 bg-gray-400"></div>

                    {/* Bottom Content */}
                    <div className="mt-12 text-left max-w-xs">
                      <p className="text-5xl font-bold mb-1" style={{ fontFamily: "'Oswald', sans-serif", color: '#1F2937' }}>
                        {milestone.year}<span style={{ fontSize: '0.6em' }}>+</span>
                      </p>
                      <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Oswald', sans-serif", color: '#1F2937', letterSpacing: '0.05em' }}>
                        {milestone.title}
                      </h3>
                      <p className="text-xs leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif", color: '#4B5563' }}>
                        {milestone.description}
                      </p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
