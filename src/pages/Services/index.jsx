import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import ProjectsSection from './ProjectsSection';
import GallerySection from './GallerySection';

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services & Projects | Amman Construction and Engineering PTE Ltd</title>
        <meta 
          name="description" 
          content="Explore our comprehensive construction and engineering services including mechanical engineering, electrical works, structural engineering, plumbing, sprinkler piping, and fire alarm systems. View our major project track record." 
        />
        <meta property="og:title" content="Services & Projects | Amman Construction and Engineering PTE Ltd" />
        <meta property="og:description" content="Explore our comprehensive construction and engineering services including mechanical engineering, electrical works, structural engineering, plumbing, sprinkler piping, and fire alarm systems. View our major project track record." />
      </Helmet>

      <div className="w-full bg-[#f9fafb]">
        <Header />
        
        <main className="flex flex-col">
          <HeroSection />
          <ServicesSection />
          <ProjectsSection />
          <GallerySection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Services;
