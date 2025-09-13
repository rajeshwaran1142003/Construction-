import React from 'react';

const ProjectManagementSection = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[24px]">
        <div className="text-center mb-12">
          <h2 className="text-[#019248] text-3xl font-bold mb-4">
            Project Management Team
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mr. Sankar */}
          <div className="bg-[#f9fafb] p-8 rounded-lg shadow-lg">
            <h3 className="text-[#019248] text-xl font-bold mb-2">
              Mr. Sankar
            </h3>
            <p className="text-[#fb0100] text-lg font-semibold mb-4">
              Co-Ordinator
            </p>
            <p className="text-[#374151] text-base leading-relaxed">
              Holds a bachelor's degree in technology field from reputed Madras university, Chennai. He has over more than 
              18 years of experience in Singapore. His technical knowledge and business knowledge helps our company in 
              various ways to plan and execute the project.
            </p>
          </div>
          
          {/* Mr. Raja */}
          <div className="bg-[#f9fafb] p-8 rounded-lg shadow-lg">
            <h3 className="text-[#019248] text-xl font-bold mb-2">
              Mr. Raja
            </h3>
            <p className="text-[#fb0100] text-lg font-semibold mb-4">
              Project Manager
            </p>
            <p className="text-[#374151] text-base leading-relaxed">
              Over 20 years of industrial experience in Singapore. He has overseen various types of structural, electrical 
              & termination works, renovation & maintenance projects, M&E, plumbing and fire protection systems. Under his 
              leadership, the company will continue to design and install best-in-class systems with a focus on safety and 
              field operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectManagementSection;

