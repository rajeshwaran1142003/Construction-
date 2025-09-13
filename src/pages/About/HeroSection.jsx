import React from 'react';

const HeroSection = () => {
  return (
    <section className="w-full relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/images/img_rectangle_3381.png" 
          alt="Construction background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/80"></div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-emerald-400/30 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-emerald-600/25 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-emerald-300/40 rounded-full animate-pulse"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[500px]">
        <div className="text-center max-w-4xl mx-auto px-6">
          <div className="animate-fade-in-up">
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              About <span className="text-emerald-400">Us</span>
            </h1>
            <p className="text-gray-200 text-lg sm:text-xl md:text-2xl font-medium leading-relaxed mb-8 max-w-3xl mx-auto">
              Building excellence through decades of expertise, innovation, and unwavering commitment to quality construction and engineering solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-3 text-emerald-300">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-lg font-semibold">25+ Years Experience</span>
              </div>
              <div className="flex items-center gap-3 text-emerald-300">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-lg font-semibold">Expert Team</span>
              </div>
              <div className="flex items-center gap-3 text-emerald-300">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-lg font-semibold">Quality Assurance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

