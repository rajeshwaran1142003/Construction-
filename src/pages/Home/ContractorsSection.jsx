import React from 'react';

const ContractorsSection = () => {
  const contractors = [
    {
      id: 1,
      image: "/images/img_image_14.png",
      description: "Specialized in fire protection systems and safety solutions for commercial and industrial properties."
    },
    {
      id: 2,
      image: "/images/img_image_13.png",
      description: "Leading provider of security and fire-safety solutions with a global reputation for excellence."
    },
    {
      id: 3,
      image: "/images/img_image_15.png",
      description: "Specialized in civil engineering works including infrastructure development and public facilities."
    },
    {
      id: 4,
      title: "Stylise On",
      description: "Expert in interior design and renovation works for residential and commercial spaces."
    }
  ];

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-gray-900 text-3xl md:text-4xl font-bold leading-tight mb-4">
            Our Most Reputed Main Contractor's
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Trusted partnerships with industry-leading contractors
          </p>
        </div>

        {/* Contractors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {contractors?.map((contractor, index) => (
            <div key={contractor?.id} className="card p-6 text-center fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              {contractor?.image ? (
                <div className="bg-gray-100 p-4 rounded-xl mb-6 mx-auto w-20 h-20 flex items-center justify-center hover:bg-emerald-50 transition-colors">
                  <img 
                    src={contractor?.image} 
                    alt={`contractor ${contractor?.id}`}
                    className="w-12 h-12 object-contain"
                  />
                </div>
              ) : (
                <div className="mb-6">
                  <div className="bg-emerald-100 p-4 rounded-xl mb-4 mx-auto w-20 h-20 flex items-center justify-center">
                    <span className="text-emerald-600 text-2xl font-bold">S</span>
                  </div>
                  <h3 className="text-gray-900 text-lg font-bold mb-2">
                    {contractor?.title}
                  </h3>
                </div>
              )}
              <p className="text-gray-600 text-sm leading-relaxed">
                {contractor?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContractorsSection;