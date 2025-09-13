import React from 'react';

const TeamSection = () => {
  return (
    <section className="w-full bg-[#f9fafb] py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[24px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-[#019248] text-3xl font-bold mb-6">
              Our Team
            </h2>
            <p className="text-[#374151] text-base leading-relaxed mb-6">
              Our success is built on the expertise and dedication of our professional team. Each member brings knowledge, 
              skill, and commitment to every project we undertake. With directors having over 25 years of industry experience, 
              we ensure that every team member plays a vital role in delivering quality results.
            </p>
            <p className="text-[#374151] text-base leading-relaxed">
              From project planning to execution, our team works collaboratively to ensure that every construction project 
              meets the highest standards of quality, safety, and efficiency. We believe that our people are our greatest 
              asset, and their expertise drives our continued success in the construction industry.
            </p>
          </div>
          
          {/* Right Side - Image */}
          <div className="order-1 lg:order-2">
            <img 
              src="/images/img3.png" 
              alt="Construction team at work" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

