import React from 'react';

const BlogContent = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[24px]">
        <div className="max-w-4xl mx-auto">
          {/* Article Title */}
          <h1 className="text-[#374151] text-4xl md:text-5xl font-bold leading-tight mb-8">
            Green Construction: Building a Sustainable Tomorrow
          </h1>

          {/* Main Article Image */}
          <div className="mb-8">
            <img 
              src="/images/green.png" 
              alt="Green construction and sustainability concept" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Introduction */}
          <div className="mb-12">
            <p className="text-[#374151] text-lg leading-relaxed">
              In today's world, construction is no longer just about speed and scale — it's about responsibility. 
              At Amman Construction and Engineering Pte Ltd, we believe the future of our industry lies in green 
              construction practices that protect the environment while delivering long-lasting value to clients.
            </p>
          </div>

          {/* Green Design Principles Diagram */}
          <div className="mb-12 text-center">
            <div className="bg-[#f9fafb] p-8 rounded-lg">
              <div className="relative w-80 h-80 mx-auto mb-6">
                {/* Central Circle */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-20 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold text-center px-2">Top Green Design Principles</span>
                </div>
                
                {/* Principle Arrows */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">Design</span>
                </div>
                <div className="absolute top-16 right-8 w-16 h-16 bg-green-300 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">Land use</span>
                </div>
                <div className="absolute bottom-16 right-8 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">Materials</span>
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">Energy performance</span>
                </div>
                <div className="absolute bottom-16 left-8 w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">Water conservation</span>
                </div>
                <div className="absolute top-16 left-8 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">Waste reduction</span>
                </div>
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">Indoor environmental quality</span>
                </div>
              </div>
              <h3 className="text-[#019248] text-xl font-bold">Green Design Principles</h3>
            </div>
          </div>

          {/* Why Green Construction Matters */}
          <div className="mb-12">
            <h2 className="text-[#374151] text-2xl font-bold mb-6">Why Green Construction Matters?</h2>
            <p className="text-[#374151] text-lg leading-relaxed">
              Buildings account for nearly 40% of global carbon emissions, making sustainable construction not just 
              a choice, but a necessity. Green construction practices reduce energy use, lower operational costs, 
              and ensure healthier environments for occupants while contributing to a more sustainable future.
            </p>
          </div>

          {/* Our Approach to Sustainability */}
          <div className="mb-12">
            <h2 className="text-[#374151] text-2xl font-bold mb-6">Our Approach to Sustainability</h2>
            <p className="text-[#374151] text-lg leading-relaxed mb-6">
              At Amman Construction, sustainability is built into every stage of our projects:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#019248] rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-[#374151] text-lg leading-relaxed">
                  <strong>Energy-Efficient Systems:</strong> Implementing smart HVAC systems, LED lighting, and renewable energy solutions.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#019248] rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-[#374151] text-lg leading-relaxed">
                  <strong>Water Conservation:</strong> Installing low-flow fixtures, rainwater harvesting systems, and efficient irrigation.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#019248] rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-[#374151] text-lg leading-relaxed">
                  <strong>Responsible Materials:</strong> Sourcing eco-friendly, recycled, and locally available materials.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#019248] rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-[#374151] text-lg leading-relaxed">
                  <strong>Waste Management:</strong> Implementing comprehensive waste reduction and recycling programs.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#019248] rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-[#374151] text-lg leading-relaxed">
                  <strong>Safety & Longevity:</strong> Building structures that are safe, durable, and designed for long-term performance.
                </span>
              </li>
            </ul>
          </div>

          {/* Partnering for a Greener Future */}
          <div className="mb-12">
            <h2 className="text-[#374151] text-2xl font-bold mb-6">Partnering for a Greener Future</h2>
            <p className="text-[#374151] text-lg leading-relaxed">
              We collaborate closely with contractors, suppliers, and clients to integrate global best practices 
              and innovative technologies. Our partnerships help us contribute to Singapore's vision of a greener, 
              more sustainable city while delivering exceptional value to our clients.
            </p>
          </div>

          {/* The Road Ahead */}
          <div className="mb-12">
            <h2 className="text-[#374151] text-2xl font-bold mb-6">The Road Ahead</h2>
            <p className="text-[#374151] text-lg leading-relaxed">
              Sustainability is the future of construction, and Amman Construction is committed to leading the way. 
              We continue to adopt new technologies, improve our processes, and reduce our environmental impact 
              while maintaining the highest standards of quality and safety in every project we undertake.
            </p>
          </div>

          {/* Healthy Material Selection Diagram */}
          <div className="mb-12 text-center">
            <div className="bg-[#f9fafb] p-8 rounded-lg">
              <div className="relative w-96 h-96 mx-auto mb-6">
                {/* Central Circle */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gray-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold text-center px-4">HEALTHY MATERIAL SELECTION</span>
                </div>
                
                {/* Outer Labels */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-[#374151] font-bold">AIR QUALITY</div>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#374151] font-bold">HEALTH & WELLBEING</div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-[#374151] font-bold">PRODUCTIVITY</div>
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#374151] font-bold">HAPPINESS</div>
                
                {/* Inner Segments */}
                <div className="absolute top-16 left-16 w-20 h-8 bg-green-200 rounded flex items-center justify-center">
                  <span className="text-[#374151] text-xs font-bold text-center">EDUCATION AND SAVINGS</span>
                </div>
                <div className="absolute top-16 right-16 w-20 h-8 bg-green-200 rounded flex items-center justify-center">
                  <span className="text-[#374151] text-xs font-bold text-center">EFFICIENT OPERATION</span>
                </div>
                <div className="absolute bottom-16 right-16 w-20 h-8 bg-green-200 rounded flex items-center justify-center">
                  <span className="text-[#374151] text-xs font-bold text-center">DESIGN FOR ROBUSTNESS</span>
                </div>
                <div className="absolute bottom-16 left-16 w-20 h-8 bg-green-200 rounded flex items-center justify-center">
                  <span className="text-[#374151] text-xs font-bold text-center">REDUCE AND REUSE</span>
                </div>
                <div className="absolute top-1/2 left-8 transform -translate-y-1/2 w-20 h-8 bg-green-200 rounded flex items-center justify-center">
                  <span className="text-[#374151] text-xs font-bold text-center">GREEN MATERIALS</span>
                </div>
                <div className="absolute top-1/2 right-8 transform -translate-y-1/2 w-20 h-8 bg-green-200 rounded flex items-center justify-center">
                  <span className="text-[#374151] text-xs font-bold text-center">CLOSING THE LOOP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogContent;
