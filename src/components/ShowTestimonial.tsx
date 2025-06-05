import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import {

  Quote,

  Star,
  ChevronLeft,

  ChevronRight

} from 'lucide-react';
import Image from 'next/image';
const ShowTestimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current.offsetLeft || 0);
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !carouselRef.current) return;
    const x = e.touches[0].pageX - (carouselRef.current.offsetLeft || 0);
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    // Determine if we should change slide based on scroll position
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      const threshold = clientWidth / 4;

      if (scrollLeft < threshold && currentIndex > 0) {
        prevSlide();
      } else if (scrollLeft > scrollWidth - clientWidth - threshold && currentIndex < testimonials.length - 1) {
        nextSlide();
      }
    }
  };
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      text: "Seraxmi transformed our online presence completely. Our sales increased by 300% in just 6 months! Their team's expertise in digital marketing is unmatched in the industry.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Michael Chen",
      company: "Global Retail Co.",
      text: "The AI solutions implemented by Seraxmi helped us automate processes and save $2M annually. Their innovative approach to problem-solving is truly remarkable.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Emily Rodriguez",
      company: "HealthCare Plus",
      text: "Outstanding web development and design. Our user engagement metrics increased by 250% after launching the new platform they built for us.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      name: "David Wilson",
      company: "FinTech Solutions",
      text: "The cybersecurity audit saved us from potential breaches that could have cost millions. Seraxmi's attention to detail is exceptional.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
      name: "Priya Patel",
      company: "EduTech Innovations",
      text: "Their mobile app development team delivered beyond our expectations. The app has a 4.9 rating with thousands of daily active users.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/63.jpg"
    }
  ];

  // Animation variants
  const variants = {
    enter: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    },
    exit: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? -1000 : 1000,
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    })
  };
  const nextSlide = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection('left');
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
  };

  return (
    <section className="px-6 py-24 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden relative">
      {/* Floating decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200 mb-6 shadow-sm"
          >
            <span className="text-blue-700 text-sm font-semibold flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span>TRUSTED BY INDUSTRY LEADERS</span>
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900"
          >
            Voices of <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Success</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Don't just take our word for it. Hear how we've helped businesses achieve remarkable digital transformations.
          </motion.p>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden md:block relative">
          <div className="relative h-[500px] overflow-hidden">
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-4xl mx-auto flex flex-col md:flex-row h-[400px]">
                  <div className="md:w-1/3 bg-gradient-to-br from-blue-600 to-purple-600 p-10 flex flex-col justify-center items-center text-white relative">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10">
                      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                    </div>
                    <div className="relative z-10 text-center">
                      <div className="w-24 h-24 rounded-full border-4 border-white/20 mb-6 mx-auto overflow-hidden">
                        <Image
                          src={testimonials[currentIndex].avatar}
                          alt={testimonials[currentIndex].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-2xl font-bold mb-1">{testimonials[currentIndex].name}</h3>
                      <p className="text-blue-100 font-medium">{testimonials[currentIndex].company}</p>
                      <div className="flex justify-center mt-4">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current mx-0.5" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-10 flex flex-col justify-center relative">
                    <Quote className="absolute top-10 right-10 w-10 h-10 text-gray-200" />
                    <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 italic font-light">
                      "{testimonials[currentIndex].text}"
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                      <span className="text-sm text-gray-500">Client Success Story</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-300 group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-300 group"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-10 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-blue-600 w-6' : 'bg-gray-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth -mx-4 px-4 pb-6 no-scrollbar"
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-full px-2 snap-center"
              >
                <div className="bg-white rounded-2xl shadow-lg p-8 h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-blue-100">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-gray-300 mb-4" />
                  <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dots Navigation for Mobile */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (carouselRef.current) {
                    carouselRef.current.scrollTo({
                      left: index * (carouselRef.current.scrollWidth / testimonials.length),
                      behavior: 'smooth'
                    });
                  }
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-blue-600 w-4' : 'bg-gray-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 pt-10 border-t border-gray-200/50"
        >
          <p className="text-center text-gray-500 mb-8">TRUSTED BY INNOVATIVE COMPANIES WORLDWIDE</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70 hover:opacity-100 transition-opacity duration-300">
            {[
              "TechStart",
              "Global Retail",
              "HealthCare+",
              "FinTech Solutions",
              "EduTech"
            ].map((company, index) => (
              <div key={index} className="text-2xl font-bold text-gray-700/80 hover:text-gray-900 transition-colors duration-300">
                {company}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ShowTestimonial