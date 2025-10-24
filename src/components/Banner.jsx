const Banner = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative cursor-pointer group">
          <img
            src="/Banner.png"
            alt="Banner"
            className="w-full h-auto rounded-3xl object-cover"
          />
          {/* Request Quote Button */}
          <button
            className="absolute top-1/2 -translate-y-1/2 right-16 px-8 py-4 rounded-full font-semibold text-lg transition-all group-hover:scale-110 border-2 border-white"
            style={{
              fontFamily: "'Poppins', sans-serif",
              backgroundColor: '#9BB6DA',
              color: 'white',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
          >
            Request Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
