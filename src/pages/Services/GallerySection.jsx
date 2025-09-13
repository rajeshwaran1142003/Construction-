import React from 'react';

const GallerySection = () => {
  const galleryImages = [
    {
      src: "/images/Gallery/img11.png",
      alt: "Construction project gallery image 1"
    },
    {
      src: "/images/Gallery/img22.png", 
      alt: "Construction project gallery image 2"
    },
    {
      src: "/images/Gallery/img33.png",
      alt: "Construction project gallery image 3"
    },
    {
      src: "/images/Gallery/img44.png",
      alt: "Construction project gallery image 4"
    },
    {
      src: "/images/Gallery/img55.png",
      alt: "Construction project gallery image 5"
    },
    {
      src: "/images/Gallery/img66.png",
      alt: "Construction project gallery image 6"
    },
    {
      src: "/images/Gallery/img77.png",
      alt: "Construction project gallery image 7"
    },
    {
      src: "/images/Gallery/img88.png",
      alt: "Construction project gallery image 8"
    },
    {
      src: "/images/Gallery/img99.png",
      alt: "Construction project gallery image 9"
    }
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[24px]">
        <div className="text-center mb-12">
          <h2 className="text-[#019248] text-3xl font-bold mb-4">
            Gallery
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
