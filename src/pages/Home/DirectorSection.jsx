import React from 'react';

const DirectorSection = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-gray-900 text-3xl md:text-4xl font-bold leading-tight mb-4">
            Director note
          </h2>
          <p className="text-gray-600 text-lg">
            A message from our leadership
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Director Image */}
          <div className="w-full lg:w-1/3 flex-shrink-0 slide-in-left">
            <div className="image-hover">
            <img 
              src="/images/img_rectangle_3383.png" 
              alt="Director"
              className="w-full h-auto rounded-2xl object-cover shadow-xl"
            />
            </div>
          </div>

          {/* Director Message */}
          <div className="w-full lg:w-2/3 slide-in-right">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
              I find immense pleasure in inviting you to the Amman Construction family, a thriving company that once started as a mere vision – a dream that turned into a reality after years of hard work.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
              We comprehend that it is only our quality of services that have, over the years, delighted our customers. And that this is why our clients consider Amman Construction their ideal business solutions . We maintain a highly dependable and reliable workforce because we know that there is no substitute for quality Works.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
              Our organization's work culture is built upon commitment to dedication. Our diverse & talented teams are our greatest asset. We hold steadfast to our beliefs, values and code of ethics, and these are highly nurtured inside the company. Our teams of experts share common focuses, i.e., to serve our customers with quality services; to work with utmost efficiency so as not to miss out the client's deadline; and to build solutions while maintaining affordability.
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorSection;