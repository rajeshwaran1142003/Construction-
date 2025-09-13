import React from 'react';

const MissionVisionSection = () => {
  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-emerald-50 py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[24px]">
        <div className="text-center mb-16">
          <h2 className="text-gray-800 text-4xl font-bold mb-4">
            Our <span className="text-emerald-600">Mission</span> & <span className="text-emerald-600">Vision</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Driving excellence in construction through innovation, safety, and unwavering commitment to quality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative group">
              <img 
                src="/images/img2.png" 
                alt="Fire protection system" 
                className="w-full h-auto rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
          
          {/* Right Side - Content */}
          <div className="order-1 lg:order-2 space-y-10">
            {/* Our Mission */}
            <div className="group bg-slate-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-emerald-100 rounded-xl group-hover:bg-emerald-200 transition-colors">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-emerald-600 text-2xl font-bold">
                  Our Mission
                </h2>
              </div>
              <p className="text-gray-800 text-base leading-relaxed">
                To be a leading construction firm that delivers excellent value and innovative solutions to our clients. 
                We are committed to providing high-level service, improving team competence, and building a safety culture 
                to achieve zero accidents in all our projects.
              </p>
            </div>
            
            {/* Our Vision */}
            <div className="group bg-slate-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-emerald-100 rounded-xl group-hover:bg-emerald-200 transition-colors">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h2 className="text-emerald-600 text-2xl font-bold">
                  Our Vision
                </h2>
              </div>
              
              <div className="space-y-6">
                {/* Excellence */}
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-emerald-50 rounded-lg">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-emerald-600 text-lg font-semibold mb-2">
                      Excellence
                    </h3>
                    <p className="text-gray-800 text-sm leading-relaxed">
                      We strive for excellence in every project we undertake, ensuring quality workmanship and attention to detail.
                    </p>
                  </div>
                </div>
                
                {/* Innovation */}
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-emerald-50 rounded-lg">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-emerald-600 text-lg font-semibold mb-2">
                      Innovation
                    </h3>
                    <p className="text-gray-800 text-sm leading-relaxed">
                      We embrace innovative construction solutions to meet the evolving needs of our clients and the industry.
                    </p>
                  </div>
                </div>
                
                {/* Safety */}
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-emerald-50 rounded-lg">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-emerald-600 text-lg font-semibold mb-2">
                      Safety
                    </h3>
                    <p className="text-gray-800 text-sm leading-relaxed">
                      We are committed to maintaining the highest safety standards, working towards our goal of zero accidents.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;

