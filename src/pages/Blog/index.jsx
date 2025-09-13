import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from './HeroSection';
import BlogContent from './BlogContent';

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog | Amman Construction and Engineering PTE Ltd</title>
        <meta 
          name="description" 
          content="Read our latest blog posts about construction, engineering, sustainability, and industry insights from Amman Construction and Engineering PTE Ltd." 
        />
        <meta property="og:title" content="Blog | Amman Construction and Engineering PTE Ltd" />
        <meta property="og:description" content="Read our latest blog posts about construction, engineering, sustainability, and industry insights from Amman Construction and Engineering PTE Ltd." />
      </Helmet>

      <div className="w-full bg-[#f9fafb]">
        <Header />
        
        <main className="flex flex-col">
          <HeroSection />
          <BlogContent />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
