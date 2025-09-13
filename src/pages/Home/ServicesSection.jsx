import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: "/images/img_frame_215.svg",
      title: "Mechanical Engineering",
      description: "Comprehensive mechanical systems installation and maintenance for commercial and industrial facilities."
    },
    {
      id: 2,
      icon: "/images/img_frame_214.svg",
      title: "Electrical Works",
      description: "Full-service electrical installation, maintenance, and troubleshooting for all project types."
    },
    {
      id: 3,
      icon: "/images/img_frame_213.svg",
      title: "Structural Engineering",
      description: "Expert structural design and implementation ensuring safety and compliance with building codes."
    }
  ];

  return (
    <section 
      id="services"
      className="w-full relative py-20"
      style={{
        backgroundImage: "url('/images/img_rectangle_3389.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90"></div>
      {/* Content */}
      <div className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-12">
        <div className="flex flex-col items-center gap-16 w-full">
          {/* Section Title */}
          <div className="text-center fade-in">
            <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-4">
            Our Services
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
              Delivering comprehensive construction solutions with expertise and precision
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
            {services?.map((service) => (
              <a
                key={service?.id}
                href="/services"
                className="group card rounded-xl bg-slate-800 border border-slate-600 ring-1 ring-slate-500 p-8 text-center shadow-lg shadow-slate-900/50 transition-all duration-500 fade-in hover:-translate-y-2 hover:rotate-1 hover:shadow-2xl hover:shadow-slate-700/60 hover:border-slate-500 hover:ring-slate-400 hover:bg-slate-700 hover:scale-105"
                style={{ animationDelay: `${service.id * 0.1}s` }}
              >
                {/* Service Icon */}
                <div className="service-icon mx-auto mb-6">
                  <div className="inline-flex items-center justify-center p-3 rounded-xl bg-emerald-600 shadow-md shadow-emerald-900/50 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg group-hover:shadow-emerald-400/60 transition-all duration-500">
                    <img 
                      src={service?.icon} 
                      alt={service?.title}
                      className="w-10 h-10 filter brightness-0 invert group-hover:brightness-110"
                    />
                  </div>
                </div>

                {/* Service Content */}
                <div className="flex flex-col items-center gap-4 w-full">
                  <h3
                    className={`text-xl font-bold leading-tight tracking-tight drop-shadow-lg text-white group-hover:text-emerald-200 group-hover:scale-105 transition-all duration-500`}
                  >
                    {service?.title}
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed drop-shadow-md group-hover:text-white group-hover:translate-y-1 transition-all duration-500">
                    {service?.description}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Explore All Button */}
          <div className="w-full flex justify-center mt-12 fade-in" style={{ animationDelay: '0.6s' }}>
            <a
              href="/services"
              className="btn btn-primary px-8 py-4 text-lg font-semibold shadow-xl"
              aria-label="Explore all services and projects"
            >
              Explore All
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;