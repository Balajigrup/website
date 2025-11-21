import { Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header className="bg-white px-4 md:px-6 py-4 flex items-center justify-between flex-shrink-0 animate-fade-in-down">
      <div className="flex items-center">
        <Link to="/">
          <img src="/logo.png" alt="Balaji Group Logo" className="h-10 md:h-14 w-auto object-contain" />
        </Link>
      </div>

      <nav className="hidden md:flex items-center gap-8 lg:gap-12 absolute left-1/2 transform -translate-x-1/2" style={{ fontFamily: 'Poppins, sans-serif' }}>
        <Link to="/services" className="text-gray-700 hover:text-gray-900 font-semibold text-sm lg:text-base relative pb-1 group">
          SERVICES
          <span className={`absolute bottom-0 left-0 h-0.5 bg-red-500 transition-all duration-300 ${location.pathname === '/services' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
        </Link>
        <Link to="/training" className="text-gray-700 hover:text-gray-900 font-semibold text-sm lg:text-base relative pb-1 group">
          TRAINING
          <span className={`absolute bottom-0 left-0 h-0.5 bg-red-500 transition-all duration-300 ${location.pathname === '/training' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
        </Link>
        <Link to="/about" className="text-gray-700 hover:text-gray-900 font-semibold text-sm lg:text-base relative pb-1 group">
          ABOUT US
          <span className={`absolute bottom-0 left-0 h-0.5 bg-red-500 transition-all duration-300 ${location.pathname === '/about' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
        </Link>
        <Link to="/contact" className="text-gray-700 hover:text-gray-900 font-semibold text-sm lg:text-base relative pb-1 group">
          CONTACT US
          <span className={`absolute bottom-0 left-0 h-0.5 bg-red-500 transition-all duration-300 ${location.pathname === '/contact' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
        </Link>
      </nav>

      {/* Mobile menu button */}
      <button className="md:hidden p-2">
        <Menu className="w-6 h-6 text-gray-700" />
      </button>

      {/* Desktop Request Quote button */}
      <button className="hidden md:flex bg-red-500 hover:bg-red-600 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full font-semibold items-center gap-2 transition-colors text-sm lg:text-base" style={{ fontFamily: 'Poppins, sans-serif' }}>
        <span className="hidden lg:inline">Request Quote</span>
        <span className="lg:hidden">Quote</span>
        <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </header>
  );
};

export default Header;
