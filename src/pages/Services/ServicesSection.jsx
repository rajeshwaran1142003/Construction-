import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      icon: "⚙️",
      title: "Mechanical Engineering",
      description: "Comprehensive mechanical systems installation and maintenance for commercial and industrial facilities."
    },
    {
      icon: "⚡",
      title: "Electrical Works",
      description: "Full-service electrical installation, maintenance, and troubleshooting for all project types."
    },
    {
      icon: "🏗️",
      title: "Structural Engineering",
      description: "Expert structural design and implementation ensuring safety and compliance with building codes."
    },
    {
      icon: "🔧",
      title: "Plumbing",
      description: "Reliable plumbing solutions including installation and maintenance of water supply, drainage, and sanitary systems for residential, commercial, and industrial projects."
    },
    {
      icon: "🚿",
      title: "Sprinkler Piping",
      description: "Professional design and installation of sprinkler piping systems including wet riser, hydrant, and pro-action systems to ensure effective fire protection."
    },
    {
      icon: "🚨",
      title: "Fire Alarm Systems",
      description: "Advanced fire alarm system installation and maintenance, providing early detection and seamless integration to safeguard people and property."
    }
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[24px]">
        <div className="text-center mb-12">
          <h2 className="text-[#019248] text-3xl font-bold mb-4">
            Our Services
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group rounded-xl bg-slate-800 border border-slate-600 ring-1 ring-slate-500 p-8 text-center shadow-lg shadow-slate-900/50 transition-all duration-500 hover:-translate-y-2 hover:rotate-1 hover:shadow-2xl hover:shadow-slate-700/60 hover:border-slate-500 hover:ring-slate-400 hover:bg-slate-700 hover:scale-105"
            >
              <div className="flex flex-col items-center gap-6">
                <div className="inline-flex items-center justify-center p-3 rounded-xl bg-emerald-600 shadow-md shadow-emerald-900/50 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg group-hover:shadow-emerald-400/60 transition-all duration-500">
                  <span className="text-white text-2xl leading-none group-hover:scale-110">
                    {service.icon}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-white group-hover:text-emerald-200 group-hover:scale-105 text-xl font-bold leading-tight tracking-tight mb-3 transition-all duration-500">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 group-hover:text-white group-hover:translate-y-1 text-sm leading-relaxed transition-all duration-500">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
