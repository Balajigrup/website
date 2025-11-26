import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Balaji's team is meticulous, deeply courteous, and their presence truly makes our staff and families feel safe.",
      author: "Ritu K",
      position: "Coorporate HR Manager"
    },
    {
      id: 2,
      text: "Professional, punctual, and always alert. Our go-to partners for all high-profile events.",
      author: "Rajesh S",
      position: "Event Manager"
    },
    {
      id: 3,
      text: "Their guards are well-trained and professional. We've had zero security incidents since partnering with Balaji.",
      author: "Priya M",
      position: "Residential Society President"
    },
    {
      id: 4,
      text: "Outstanding service and rapid response times. They truly understand corporate security needs.",
      author: "Amit P",
      position: "Facility Manager"
    },
    {
      id: 5,
      text: "The dedication and professionalism of Balaji's security personnel is unmatched. Highly recommended!",
      author: "Neha S",
      position: "Hotel Operations Manager"
    },
    {
      id: 6,
      text: "From background checks to deployment, everything was seamless. Their client service is exceptional.",
      author: "Vikram R",
      position: "Security Consultant"
    }
  ];

  // Group testimonials into pairs for the carousel
  const testimonialPairs = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    testimonialPairs.push(testimonials.slice(i, i + 2));
  }

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialPairs.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialPairs.length - 1 ? 0 : prevIndex + 1
    );
  };

  const TestimonialCard = ({ testimonial }) => (
    <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-lg">
      {/* Quote Icon */}
      <div className="w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center mb-4 md:mb-6" style={{ background: 'linear-gradient(to right, #9CCBF5, #DBEEFF)' }}>
        <Quote size={20} className="text-white md:hidden" fill="white" />
        <Quote size={28} className="text-white hidden md:block" fill="white" />
      </div>

      {/* Testimonial Text */}
      <p className="text-base md:text-xl text-gray-800 mb-6 md:mb-8 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
        {testimonial.text}
      </p>

      {/* Author Info */}
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#6B7280' }}></div>
        <p className="text-gray-500 text-sm md:text-base" style={{ fontFamily: "'Poppins', sans-serif" }}>
          <span className="font-semibold">{testimonial.author}</span>, {testimonial.position}
        </p>
      </div>
    </div>
  );

  return (
    <section className="py-12 md:py-20" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header with Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8 md:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold max-w-4xl" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, color: '#1F2937' }}>
            What Our Customers Are Saying About Our Services?
          </h2>

          {/* Navigation Buttons */}
          <div className="flex gap-3 md:gap-4 flex-shrink-0">
            <button
              onClick={handlePrevious}
              className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all group relative"
              style={{
                background: 'white',
                padding: '2px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.querySelector('.button-inner').style.background = 'linear-gradient(to right, #9CCBF5, #DBEEFF)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.querySelector('.button-inner').style.background = 'white';
              }}
            >
              <div
                className="button-inner w-full h-full rounded-full flex items-center justify-center"
                style={{
                  background: 'white',
                  transition: 'background 0.3s'
                }}
              >
                <ChevronLeft size={20} className="group-hover:text-black transition-colors md:hidden" style={{ color: '#93C5FD' }} />
                <ChevronLeft size={28} className="group-hover:text-black transition-colors hidden md:block" style={{ color: '#93C5FD' }} />
              </div>
              <div
                className="absolute inset-0 rounded-full -z-10"
                style={{
                  background: 'linear-gradient(to right, #9CCBF5, #DBEEFF)',
                  padding: '2px'
                }}
              />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all group relative"
              style={{
                background: 'white',
                padding: '2px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.querySelector('.button-inner').style.background = 'linear-gradient(to right, #9CCBF5, #DBEEFF)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.querySelector('.button-inner').style.background = 'white';
              }}
            >
              <div
                className="button-inner w-full h-full rounded-full flex items-center justify-center"
                style={{
                  background: 'white',
                  transition: 'background 0.3s'
                }}
              >
                <ChevronRight size={20} className="group-hover:text-black transition-colors md:hidden" style={{ color: '#93C5FD' }} />
                <ChevronRight size={28} className="group-hover:text-black transition-colors hidden md:block" style={{ color: '#93C5FD' }} />
              </div>
              <div
                className="absolute inset-0 rounded-full -z-10"
                style={{
                  background: 'linear-gradient(to right, #9CCBF5, #DBEEFF)',
                  padding: '2px'
                }}
              />
            </button>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative overflow-x-hidden py-4">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonialPairs.map((pair, pairIndex) => (
              <div
                key={pairIndex}
                className="min-w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8"
              >
                {pair.map((testimonial) => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
