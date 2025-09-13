import React from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Proposed sprinkler system and fire alarm system addition works at National Skin Center",
      contractor: "Deluge Fire Protection (S.E.A) Pte Ltd"
    },
    {
      title: "Installation of Sprinkler System includes Proaction System, Wet Riser System, Hydrant System and Fire alarm system",
      contractor: "Chubb Singapore Pte Ltd"
    },
    {
      title: "Proposed Renovation Work includes electrical works, plumbing, and Interior Design",
      contractor: "Stylise On"
    },
    {
      title: "Proposed Footpath Connecting Parc Rivera to new park Connector Network Near Ayer Rajah Expressway",
      contractor: "TKB C-E Contractor Pte Ltd"
    },
    {
      title: "Proposed renovation work in HDB BLK 664D includes Interior Design Work, Flooring works, Electrical and Plumbing Works",
      contractor: "HDB BLK 664D"
    }
  ];

  const years = [2023, 2024, 2025];
  const types = ['Renovation', 'Electrical', 'Fire Protection', 'Civil'];

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-gray-900 text-3xl md:text-4xl font-bold leading-tight mb-4">
            Major Projects Track Record
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Showcasing our successful project completions and trusted partnerships
          </p>
        </div>

        {/* Simple Filters (UI only for now) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 fade-in">
          <select className="form-input max-w-xs" aria-label="Filter by year">
            <option value="">All Years</option>
            {years.map(y => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
          <select className="form-input max-w-xs" aria-label="Filter by type">
            <option value="">All Types</option>
            {types.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        {/* Projects Table */}
        <div className="w-full max-w-6xl mx-auto fade-in">
          <div className="overflow-x-auto">
            <table className="modern-table">
              <thead>
                <tr>
                  <th className="text-left">Project Description</th>
                  <th className="text-left">Main Contractor</th>
                </tr>
              </thead>
              <tbody>
                {projects?.map((project, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="text-gray-700 leading-relaxed">
                      {project?.title}
                    </td>
                    <td className="text-gray-700 font-medium">
                      {project?.contractor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;