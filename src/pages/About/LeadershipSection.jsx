import React from 'react';

const LeadershipSection = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[24px]">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-emerald-100 rounded-2xl mb-6">
            <img 
              src="/images/logo.png" 
              alt="Company Logo" 
              className="h-16 w-auto"
            />
          </div>
          <h2 className="text-gray-800 text-4xl font-bold mb-4">
            Our <span className="text-emerald-600">Leadership</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Experienced leaders driving innovation and excellence in construction and engineering.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mr. Sundaram Muthu */}
          <div className="group bg-gradient-to-br from-emerald-50 to-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-emerald-100">
            <div className="flex items-center gap-6 mb-6">
              <div className="p-4 bg-emerald-500 rounded-2xl group-hover:bg-emerald-600 transition-colors">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-emerald-600 text-2xl font-bold mb-1">
                  Mr. Sundaram Muthu
                </h3>
                <p className="text-emerald-500 text-lg font-semibold">
                  Director
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-gray-700 font-medium">25+ Years Experience</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-gray-700 font-medium">Mechanical Industry Expert</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-gray-700 font-medium">Strategic Leadership</span>
              </div>
            </div>
            <p className="text-gray-700 text-base leading-relaxed mt-6">
              Over 25 years of experience in the mechanical industry with vast knowledge and ability to manage teams, 
              drive strategic initiatives, and deliver projects on time and within budget.
            </p>
          </div>
          
          {/* Mr. Chinnathambi Muniyandi */}
          <div className="group bg-gradient-to-br from-emerald-50 to-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-emerald-100">
            <div className="flex items-center gap-6 mb-6">
              <div className="p-4 bg-emerald-500 rounded-2xl group-hover:bg-emerald-600 transition-colors">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-emerald-600 text-2xl font-bold mb-1">
                  Mr. Chinnathambi Muniyandi
                </h3>
                <p className="text-emerald-500 text-lg font-semibold">
                  Director
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-gray-700 font-medium">22+ Years Experience</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-gray-700 font-medium">Electrical Industry Specialist</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-gray-700 font-medium">Productivity Enhancement</span>
              </div>
            </div>
            <p className="text-gray-700 text-base leading-relaxed mt-6">
              More than 22 years of experience in the electrical industry with numerous successful projects completed 
              throughout his career, helping to improve our productivity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;

