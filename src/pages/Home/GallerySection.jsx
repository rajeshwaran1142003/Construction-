import React from 'react';

const GallerySection = () => {
  const images = [
    {
      id: 1,
      src: "/images/img_rectangle_3390.png",
      alt: "Construction project 1"
    },
    {
      id: 2,
      src: "/images/img_rectangle_3389_304x480.png",
      alt: "Construction project 2"
    },
    {
      id: 3,
      src: "/images/img_rectangle_3391.png",
      alt: "Construction project 3"
    }
  ];

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-gray-900 text-3xl md:text-4xl font-bold leading-tight mb-4">
            Project Gallery
          </h2>
          <p className="text-gray-600 text-lg">
            Showcasing our completed projects and construction excellence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images?.map((image) => (
            <div key={image?.id} className="image-hover fade-in" style={{ animationDelay: `${image.id * 0.1}s` }}>
              <img 
                src={image?.src} 
                alt={image?.alt}
                className="w-full h-64 lg:h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;