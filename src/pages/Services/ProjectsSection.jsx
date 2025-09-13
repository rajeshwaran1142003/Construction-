import React from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      project: "Proposed sprinkler system and fire alarm system addition works at National Skin Center",
      contractor: "Deluge Fire Protection (S.E.A) Pte Ltd",
      type: "Fire Protection",
      icon: "🚨"
    },
    {
      project: "Installation of Sprinkler System includes Proaction System, Wet Riser System, Hydrant System and Fire alarm system",
      contractor: "Chubb Singapore Pte Ltd",
      type: "Fire Safety",
      icon: "🚿"
    },
    {
      project: "Proposed Renovation Work includes electrical works, plumbing, and Interior Design",
      contractor: "Stylise On",
      type: "Renovation",
      icon: "🔧"
    },
    {
      project: "Proposed Footpath Connecting Parc Rivera to new park Connector Network Near Ayer Rajah Expressway",
      contractor: "TKB C-E Contractor Pte Ltd",
      type: "Infrastructure",
      icon: "🛤️"
    },
    {
      project: "Proposed renovation work in HDB BLK 664D includes Interior Design Work, Flooring works, Electrical and Plumbing Works",
      contractor: "HDB BLK 664D",
      type: "Residential",
      icon: "🏠"
    }
  ];

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-emerald-50 py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[24px]">
        <div className="text-center mb-16">
          <h2 className="text-gray-800 text-4xl font-bold mb-4">
            Major Projects <span className="text-emerald-600">Track Record</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Showcasing our successful project portfolio across various sectors and industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-slate-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="p-4 bg-emerald-100 rounded-2xl group-hover:bg-emerald-200 transition-colors">
                    <span className="text-3xl">{project.icon}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-semibold rounded-full">
                      {project.type}
                    </span>
                  </div>
                  <h3 className="text-gray-900 text-lg font-bold mb-4 leading-relaxed">
                    {project.project}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-700">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="text-sm font-medium">{project.contractor}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center bg-slate-50 rounded-2xl p-8 shadow-lg border border-slate-200">
            <div className="text-4xl font-bold text-emerald-600 mb-2">25+</div>
            <div className="text-gray-800 font-semibold">Years Experience</div>
          </div>
          <div className="text-center bg-slate-50 rounded-2xl p-8 shadow-lg border border-slate-200">
            <div className="text-4xl font-bold text-emerald-600 mb-2">100+</div>
            <div className="text-gray-800 font-semibold">Projects Completed</div>
          </div>
          <div className="text-center bg-slate-50 rounded-2xl p-8 shadow-lg border border-slate-200">
            <div className="text-4xl font-bold text-emerald-600 mb-2">100%</div>
            <div className="text-gray-800 font-semibold">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
