import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'backdrop-blur-md bg-white/95 shadow-lg' 
        : 'backdrop-blur-sm bg-white/90'
    }`}>
      {/* Top Header Bar */}
      <div className={`hidden lg:block w-full transition-all duration-300 ${
        isScrolled ? 'bg-gradient-to-r from-red-500 to-red-600' : 'bg-[#fb0100]'
      }`}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[24px]">
          <div className={`flex flex-col sm:flex-row justify-center items-center transition-all duration-300 ${
            isScrolled ? 'py-2' : 'py-[10px]'
          } gap-2 sm:gap-4 lg:gap-0`}>
            {/* Contact Info Row */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 lg:gap-[20px] text-xs animate-fade-in-up">
              {/* Location */}
              <div className="flex items-center gap-[6px] hover:scale-105 transition-transform duration-200">
                <img src="/images/img_location_marker.svg" alt="location" className="w-4 h-4 filter brightness-0 invert" />
                <span className="text-white text-xs font-medium leading-[15px]">
                  1 Soon Lee Street, #02-29 Pioneer Centre, Singapore 627605
                </span>
              </div>
              
              {/* Email */}
              <div className="flex items-center gap-[6px] hover:scale-105 transition-transform duration-200">
                <img src="/images/img_mail.svg" alt="email" className="w-4 h-4 filter brightness-0 invert" />
                <span className="text-white text-xs font-medium leading-[15px]">
                  sales.ammanconstruction@gmail.com
                </span>
              </div>
              
              {/* Phone */}
              <div className="flex items-center gap-[4px] hover:scale-105 transition-transform duration-200">
                <img src="/images/img_phone.svg" alt="phone" className="w-4 h-4 filter brightness-0 invert" />
                <span className="text-white text-xs font-medium leading-[15px]">
                  +65 81195016
                </span>
              </div>
              
              {/* UEN */}
              <div className="hidden lg:block">
                <span className="text-white text-xs font-medium leading-[15px]">
                  UEN NO:202410926D
                </span>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="flex items-center gap-[4px] lg:ml-[44px] animate-fade-in-up">
              <span className="text-white text-xs font-medium leading-[15px]">Follow us on</span>
              <a href="#" className="ml-2 hover:scale-110 transition-transform duration-200">
                <img src="/images/img_facebook.svg" alt="facebook" className="w-4 h-4 filter brightness-0 invert" />
              </a>
              <a href="#" className="hover:scale-110 transition-transform duration-200">
                <img src="/images/img_instagram.svg" alt="instagram" className="w-4 h-4 filter brightness-0 invert" />
              </a>
              <a href="#" className="hover:scale-110 transition-transform duration-200">
                <img src="/images/img_linkedin_original.svg" alt="linkedin" className="w-4 h-4 filter brightness-0 invert" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="w-full bg-white/95 backdrop-blur-md border-b border-gray-200/50">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[24px]">
          <div className={`flex justify-between items-center transition-all duration-300 ${
            isScrolled ? 'py-4' : 'py-[20px]'
          }`}>
            {/* Logo */}
            <div className="flex items-center gap-[10px] animate-fade-in-left">
              <Link to="/">
                <img src="/images/img_group_221.png" alt="logo" className="w-7 h-7 hover:scale-110 transition-transform duration-200" />
              </Link>
              <span className="text-gray-800 text-base font-bold leading-5 hidden sm:block">
                Amman Construction and Engineering PTE Ltd
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-[20px] animate-fade-in-right">
              <nav className="flex flex-col items-start gap-1">
                <div className="flex items-center gap-[32px]">
                  <Link to="/" className="nav-link text-gray-700 text-sm font-semibold leading-[17px] hover:text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded transition-all duration-200">
                    Home
                  </Link>
                  <Link to="/about" className="nav-link text-gray-700 text-sm font-medium leading-[17px] hover:text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded transition-all duration-200">
                    About us
                  </Link>
                  <Link to="/services" className="nav-link text-gray-700 text-sm font-medium leading-[17px] hover:text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded transition-all duration-200">
                    Services & Projects
                  </Link>
                  <Link to="/contact" className="nav-link text-gray-700 text-sm font-medium leading-[17px] hover:text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded transition-all duration-200">
                    Contact us
                  </Link>
                  
                </div>
              </nav>
              
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-200 hover:scale-105" aria-label="Search">
                <img src="/images/img_search.svg" alt="search" className="w-6 h-6 opacity-70 hover:opacity-100 transition-opacity" />
              </button>
              
              <Button
                text="Get a Quote"
                className="btn btn-primary px-6 py-3 text-sm font-semibold"
                onClick={() => { window.location.href = '/blog'; }}
              />
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="block lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-all duration-200 hover:scale-105"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center gap-1">
                <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`${menuOpen ? 'block animate-fade-in-up' : 'hidden'} lg:hidden pb-4 border-t border-gray-200/50`}>
            <nav className="flex flex-col gap-4 pt-4">
              <Link to="/" className="text-gray-700 text-sm font-bold leading-[17px] text-left hover:text-emerald-600 transition-colors py-2 px-2 rounded-lg hover:bg-gray-50">
                Home
              </Link>
              <Link to="/about" className="text-gray-700 text-sm font-medium leading-[17px] text-left hover:text-emerald-600 transition-colors py-2 px-2 rounded-lg hover:bg-gray-50">
                About us
              </Link>
              <Link to="/services" className="text-gray-700 text-sm font-medium leading-[17px] text-left hover:text-emerald-600 transition-colors py-2 px-2 rounded-lg hover:bg-gray-50">
                Services & Projects
              </Link>
              <Link to="/contact" className="text-gray-700 text-sm font-medium leading-[17px] text-left hover:text-emerald-600 transition-colors py-2 px-2 rounded-lg hover:bg-gray-50">
                Contact us
              </Link>
              
              <div className="flex items-center gap-4 pt-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-200 hover:scale-105" aria-label="Search">
                  <img src="/images/img_search.svg" alt="search" className="w-6 h-6" />
                </button>
                <Button
                  text="Get a Quote"
                  className="btn btn-primary px-4 py-2 text-sm font-semibold"
                  onClick={() => { window.location.href = '/blog'; }}
                />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;