import React from 'react'
import {



  Mail,
  Phone,
  MapPin,



} from 'lucide-react';

const Footer = () => {

  interface Service {

    title: string;
    desc: string;
  }

  const services: Service[] = [
    { title: 'Digital Marketing', desc: 'SEO, PPC, Social Media & Content Marketing strategies that drive real results' },
    { title: 'Web Development', desc: 'Custom websites built with cutting-edge technology and stunning design' },
    { title: 'App Development', desc: 'Native iOS & Android apps that engage users and grow your business' },
    { title: 'AI & ML Solutions', desc: 'Intelligent automation and machine learning to optimize your operations' },
    { title: 'Cyber Security', desc: 'Enterprise-grade security solutions to protect your digital assets' },
    { title: 'Cloud Solutions', desc: 'Scalable cloud infrastructure and migration services for modern businesses' }
  ];
  return (
    <footer className="px-6 py-16 md:w-[80%] md:mx-auto rounded-2xl md:mt-16 md:mb-14 shadow-lg bg-gradient-to-br from-blue-50 to-purple-50 border border-gray-200/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-white font-bold text-2xl">S</span>
              </div>
              <span className="text-3xl font-bold ">
                Seraxmi
              </span>
            </div>
            <p className="mb-8 max-w-md leading-relaxed text-lg">
              Empowering businesses across America with innovative digital solutions that transform
              challenges into opportunities and dreams into profitable realities.
            </p>
            <div className="flex items-center space-x-3 ">
              <MapPin className="w-6 h-6 text-blue-400" />
              <span className="text-lg">Serving businesses nationwide across the United States</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6  text-xl">Our Services</h4>
            <div className="space-y-4">
              {services.slice(0, 5).map((service, index) => (
                <a key={index} href="#" className="block  hover:text-blue-400 transition-colors duration-300 text-lg">
                  {service.title}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6  text-xl">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 ">
                <Mail className="w-6 h-6 text-blue-400" />
                <span className="text-lg">hello@seraxmi.com</span>
              </div>
              <div className="flex items-center space-x-3 ">
                <Phone className="w-6 h-6 text-blue-400" />
                <span className="text-lg">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center ">
          <p className="text-lg">&copy; 2024 Seraxmi LLC. All rights reserved. Building digital success stories across America.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer