import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from './HeroSection';
import ContractorsSection from './ContractorsSection';
import DirectorSection from './DirectorSection';
import ProjectsSection from './ProjectsSection';
import NewsSection from './NewsSection';
import ServicesSection from './ServicesSection';
import GallerySection from './GallerySection';
import { initScrollAnimations } from '../../hooks/useScrollAnimation';

const Home = () => {
  React.useEffect(() => {
    const cleanup = initScrollAnimations();
    return cleanup;
  }, []);

  return (
    <>
      <Helmet>
        <title>Amman Construction and Engineering PTE Ltd | Building Trust, Delivering Excellence</title>
        <meta 
          name="description" 
          content="Leading construction company in Singapore specializing in mechanical engineering, electrical works, and structural engineering. Delivering innovative, safe, and sustainable construction solutions with decades of expertise." 
        />
        <meta property="og:title" content="Amman Construction and Engineering PTE Ltd | Building Trust, Delivering Excellence" />
        <meta property="og:description" content="Leading construction company in Singapore specializing in mechanical engineering, electrical works, and structural engineering. Delivering innovative, safe, and sustainable construction solutions with decades of expertise." />
      </Helmet>

      <div className="w-full bg-gray-50">
        <Header />
        
        <main className="flex flex-col">
          <HeroSection />
          <ContractorsSection />
          <DirectorSection />
          <ProjectsSection />
          <NewsSection />
          <ServicesSection />
          <GallerySection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Home;