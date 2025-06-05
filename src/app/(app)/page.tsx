"use client";
import React from 'react';


import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ShowService from '@/components/ShowService';
import ShowProjects from '@/components/ShowProjects';
import ShowBlogs from '@/components/ShowBlogs';
import ShowTestimonial from '@/components/ShowTestimonial';
import Footer from '@/components/Footer';




const SeraxmiLanding: React.FC = () => {






  // Blog posts data


  // Projects showcase data


  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
<Header />
<Hero />
<ShowService />
<ShowProjects />
<ShowBlogs />
<ShowTestimonial />
<Footer />
</div>
  );
};

export default SeraxmiLanding;