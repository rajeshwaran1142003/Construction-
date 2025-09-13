import React from 'react';
import Button from '../../components/ui/Button';

const HeroSection = () => {
  return (
    <section 
      className="w-full relative bg-fixed min-h-screen flex items-center"
      style={{
        backgroundImage: "url('/images/img_rectangle_3381.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/80"></div>
      
      {/* Content */}
      <div className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-12 py-20">
        <div className="flex flex-col items-center justify-center gap-8 sm:gap-12 w-full max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <div className="flex flex-col items-center gap-4 sm:gap-6 w-full animate-fade-in-up">
            <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              Building Trust. Delivering Excellence.
            </h1>
            <p className="text-gray-200 text-lg sm:text-xl md:text-2xl font-medium leading-relaxed max-w-3xl">
              Shaping communities with innovation, safety, and sustainable construction.
            </p>
          </div>
          
          {/* Description */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-4xl">
            With decades of expertise in mechanical, electrical, and civil works, Amman Construction and Engineering Pte Ltd delivers projects that stand strong on precision, integrity, and innovation. From fire protection to complex renovations, we build with a vision for tomorrow.
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button
              text="View Projects"
              variant="primary"
              size="large"
              className="px-8 py-4 text-lg font-semibold shadow-xl"
              onClick={() => { window.location.href = '/services'; }}
            />
            <Button
              text="Contact us"
              variant="outline"
              size="large"
              className="px-8 py-4 text-lg font-semibold"
              onClick={() => { window.location.href = '/contact'; }}
            />
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;