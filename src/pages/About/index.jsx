import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from './HeroSection';
import MissionVisionSection from './MissionVisionSection';
import LeadershipSection from './LeadershipSection';
import ProjectManagementSection from './ProjectManagementSection';
import TeamSection from './TeamSection';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Amman Construction and Engineering PTE Ltd</title>
        <meta 
          name="description" 
          content="Learn about Amman Construction and Engineering PTE Ltd - our mission, vision, leadership team, and commitment to delivering excellence in construction and engineering services across Singapore." 
        />
        <meta property="og:title" content="About Us | Amman Construction and Engineering PTE Ltd" />
        <meta property="og:description" content="Learn about Amman Construction and Engineering PTE Ltd - our mission, vision, leadership team, and commitment to delivering excellence in construction and engineering services across Singapore." />
      </Helmet>

      <div className="w-full bg-[#f9fafb]">
        <Header />
        
        <main className="flex flex-col">
          <HeroSection />
          <MissionVisionSection />
          <LeadershipSection />
          <ProjectManagementSection />
          <TeamSection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default About;

