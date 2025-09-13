import React from 'react';
import { Helmet } from 'react-helmet';

const Explore = () => {
  return (
    <>
      <Helmet>
        <title>Explore All Services & Projects | Amman Construction and Engineering PTE Ltd</title>
        <meta name="description" content="Discover comprehensive construction and engineering solutions including mechanical engineering, electrical works, and structural engineering services by Amman Construction." />
        <meta property="og:title" content="Explore All Services & Projects | Amman Construction and Engineering PTE Ltd" />
        <meta property="og:description" content="Discover comprehensive construction and engineering solutions including mechanical engineering, electrical works, and structural engineering services by Amman Construction." />
      </Helmet>
      
      <main className="w-full min-h-screen bg-explore-background flex justify-start items-center">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center">
            <button 
              className="text-base font-medium leading-md text-center text-light bg-background-overlay-dark px-[17px] sm:px-[25px] md:px-[30px] lg:px-[34px] py-[17px] sm:py-[25px] md:py-[30px] lg:py-[34px] rounded-sm hover:bg-opacity-90 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-text-light focus:ring-opacity-50"
              aria-label="Explore all services and projects"
            >
              Explore All
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Explore;