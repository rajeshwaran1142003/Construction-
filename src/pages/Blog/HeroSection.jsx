import React from 'react';

const HeroSection = () => {
  return (
    <section className="w-full relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/images/img_rectangle_3381.png" 
          alt="Construction background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight">
            Blogs
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
