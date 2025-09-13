import React from 'react';
import { Link } from 'react-router-dom';

const NewsSection = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-gray-900 text-3xl md:text-4xl font-bold leading-tight mb-4">
            News & Blogs
          </h2>
          <p className="text-gray-600 text-lg">
            Stay updated with our latest insights and industry news
          </p>
        </div>

        {/* News Article */}
        <div className="w-full max-w-4xl mx-auto fade-in">
          <div className="card p-8 flex flex-col lg:flex-row gap-8 items-start">
            {/* Article Image */}
            <div className="w-full lg:w-1/3 flex-shrink-0">
              <div className="image-hover">
              <img 
                src="/images/img_image.png" 
                alt="Green Construction"
                className="w-full h-48 lg:h-auto rounded-xl object-cover"
              />
              </div>
            </div>

            {/* Article Content */}
            <div className="w-full lg:flex-1 flex flex-col gap-6">
              <h3 className="text-gray-900 text-xl lg:text-2xl font-bold leading-tight">
                Green Construction: Building a Sustainable Tomorrow
              </h3>
              
              <div className="flex flex-col gap-4">
                <p className="text-gray-600 text-base leading-relaxed">
                  In today's world, construction is no longer just about speed and scale — it's about responsibility. At Amman Construction and Engineering Pte Ltd, we believe the future of our industry lies in green construction practices that protect the environment while delivering long-lasting value to clients...
                </p>
                
                <Link 
                  to="/blog" 
                  className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors group"
                >
                  Read More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;