import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from './HeroSection';
import ContactFormSection from './ContactFormSection';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Amman Construction and Engineering PTE Ltd</title>
        <meta 
          name="description" 
          content="Get in touch with Amman Construction and Engineering PTE Ltd. Contact us for construction and engineering services, project inquiries, and professional consultation." 
        />
        <meta property="og:title" content="Contact Us | Amman Construction and Engineering PTE Ltd" />
        <meta property="og:description" content="Get in touch with Amman Construction and Engineering PTE Ltd. Contact us for construction and engineering services, project inquiries, and professional consultation." />
      </Helmet>

      <div className="w-full bg-[#f9fafb]">
        <Header />
        
        <main className="flex flex-col">
          <HeroSection />
          <ContactFormSection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
