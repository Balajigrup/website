import { Heart, GraduationCap, Clock, ThumbsUp, ArrowRight } from 'lucide-react';

const BalajiAdvantage = () => {
  const advantages = [
    {
      id: 1,
      title: "Trusted",
      description: "A well-established security leader in Indore and across India, built on decades of unwavering commitment to safety and integrity since 1991.",
      icon: Heart,
      image: "/Balaji Advantage/trusted.png",
      size: "large", // Takes up more space
    },
    {
      id: 2,
      title: "Highly Trained Professionals",
      description: "Our security personnel undergo rigorous, industry-leading training, ensuring they are prepared for any situation.",
      icon: GraduationCap,
      image: "/Balaji Advantage/highly trained professionals.png",
      size: "medium", 
    },
    {
      id: 3,
      title: "24/7 Vigilance",
      description: "We offer round-the-clock professional support and monitoring, providing peace of mind day and night.",
      icon: Clock,
      image: "/Balaji Advantage/Vigilance.png",
      size: "medium",
    },
    {
      id: 4,
      title: "Customized Security Solutions",
      description: "Every security plan is precisely tailored to your unique needs, delivering optimal protection and value.",
      icon: ThumbsUp,
      image: "/Balaji Advantage/customized security solutions.png",
      size: "medium",
    },
  ];

  return (
    <section className="py-8 min-h-screen flex items-center" style={{ backgroundColor: '#2A2B2D' }}>
      <div className="max-w-7xl mx-auto px-8 w-full">
        {/* Masonry Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Large Card - Why Choose Us */}
          <div className="lg:col-span-2 lg:row-span-1 rounded-3xl p-10 relative overflow-hidden min-h-[400px] flex flex-col justify-between" style={{ background: 'linear-gradient(to top, #9CCBF5, #CAE9FF)' }}>
            <div>
              <p className="text-sm text-gray-700 mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>
                Why choose Us?
              </p>
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}>
                BALAJI ADVANTAGE
              </h2>
            </div>
            <button className="flex items-center gap-2 font-semibold text-lg self-start px-6 py-3 rounded-full transition-all hover:scale-105" style={{ fontFamily: "'Oswald', sans-serif", backgroundColor: '#3B82F6', color: 'white' }}>
              More about Us
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>

          {/* Trusted Card */}
          <div className="rounded-3xl p-8 relative overflow-hidden min-h-[400px] flex flex-col justify-between" style={{ background: 'linear-gradient(to top, #D8EDFF, #E3F3FF)' }}>
            {/* Background Image with grayscale */}
            <img
              src={advantages[0].image}
              alt={advantages[0].title}
              className="absolute w-full h-full object-contain grayscale"
              style={{ opacity: 0.9, bottom: '-10%', right: '-10%' }}
            />

            {/* Content */}
            <div className="relative z-10">
              <Heart className="w-12 h-12 mb-6" style={{ color: '#EF4444' }} strokeWidth={1.5} />
              <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600, color: '#1F2937' }}>
                {advantages[0].title}
              </h3>
              <p className="text-gray-700 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}>
                {advantages[0].description}
              </p>
            </div>
          </div>

          {/* Highly Trained Professionals Card */}
          <div className="rounded-3xl p-8 relative overflow-hidden min-h-[350px] flex flex-col justify-between" style={{ background: 'linear-gradient(to top, #D8EDFF, #E3F3FF)' }}>
            {/* Background Image with grayscale */}
            <img
              src={advantages[1].image}
              alt={advantages[1].title}
              className="absolute w-full h-full object-contain grayscale"
              style={{ opacity: 0.9, bottom: '-10%', right: '-10%' }}
            />

            {/* Content */}
            <div className="relative z-10">
              <GraduationCap className="w-12 h-12 mb-6" style={{ color: '#10B981' }} strokeWidth={1.5} />
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600, color: '#1F2937' }}>
                {advantages[1].title}
              </h3>
              <p className="text-gray-700 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}>
                {advantages[1].description}
              </p>
            </div>
          </div>

          {/* 24/7 Vigilance Card */}
          <div className="rounded-3xl p-8 relative overflow-hidden min-h-[350px] flex flex-col justify-between" style={{ background: 'linear-gradient(to top, #D8EDFF, #E3F3FF)' }}>
            {/* Background Image with grayscale */}
            <img
              src={advantages[2].image}
              alt={advantages[2].title}
              className="absolute w-full h-full object-contain grayscale"
              style={{ opacity: 0.9, bottom: '-10%', right: '-10%' }}
            />

            {/* Content */}
            <div className="relative z-10">
              <Clock className="w-12 h-12 mb-6" style={{ color: '#F59E0B' }} strokeWidth={1.5} />
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600, color: '#1F2937' }}>
                {advantages[2].title}
              </h3>
              <p className="text-gray-700 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}>
                {advantages[2].description}
              </p>
            </div>
          </div>

          {/* Customized Security Solutions Card */}
          <div className="rounded-3xl p-8 relative overflow-hidden min-h-[350px] flex flex-col justify-between" style={{ background: 'linear-gradient(to top, #D8EDFF, #E3F3FF)' }}>
            {/* Background Image with grayscale */}
            <img
              src={advantages[3].image}
              alt={advantages[3].title}
              className="absolute w-full h-full object-contain grayscale"
              style={{ opacity: 0.9, bottom: '-10%', right: '-10%' }}
            />

            {/* Content */}
            <div className="relative z-10">
              <ThumbsUp className="w-12 h-12 mb-6" style={{ color: '#8B5CF6' }} strokeWidth={1.5} />
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600, color: '#1F2937' }}>
                {advantages[3].title}
              </h3>
              <p className="text-gray-700 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}>
                {advantages[3].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BalajiAdvantage;
