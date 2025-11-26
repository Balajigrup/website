const Banner = () => {
  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="relative cursor-pointer group">
          <img
            src="/Banner.png"
            alt="Banner"
            className="w-full h-auto rounded-2xl md:rounded-3xl object-cover"
          />
          {/* Request Quote Button */}
          <button
            className="absolute top-1/2 -translate-y-1/2 right-4 md:right-8 lg:right-16 px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 rounded-full font-semibold text-xs md:text-sm lg:text-lg transition-all group-hover:scale-110 border md:border-2 border-white"
            style={{
              fontFamily: "'Poppins', sans-serif",
              backgroundColor: '#9BB6DA',
              color: 'white',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
          >
            <span className="hidden sm:inline">Request Quote</span>
            <span className="sm:hidden">Quote</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
