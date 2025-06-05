import React, { useState } from 'react'
import {
  ArrowRight,
  Code,
  Smartphone,
  Brain,
  Shield,
  TrendingUp,
  Zap,
} from 'lucide-react';

const ShowService = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      desc: 'SEO, PPC, Social Media & Content Marketing strategies that drive real results',
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-50'
    },
    {
      icon: Code,
      title: 'Web Development',
      desc: 'Custom websites built with cutting-edge technology and stunning design',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Smartphone,
      title: 'App Development',
      desc: 'Native iOS & Android apps that engage users and grow your business',
      color: 'from-purple-500 to-violet-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Brain,
      title: 'AI & ML Solutions',
      desc: 'Intelligent automation and machine learning to optimize your operations',
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Shield,
      title: 'Cyber Security',
      desc: 'Enterprise-grade security solutions to protect your digital assets',
      color: 'from-gray-600 to-slate-700',
      bgColor: 'bg-gray-50'
    },
    {
      icon: Zap,
      title: 'Cloud Solutions',
      desc: 'Scalable cloud infrastructure and migration services for modern businesses',
      color: 'from-yellow-500 to-amber-600',
      bgColor: 'bg-yellow-50'
    }
  ];

  return (
    <section className="px-6 py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-200/30 mb-8 backdrop-blur-sm">
            <span className="text-blue-700 text-lg font-semibold">Our Expertise</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-black mb-8 text-gray-900 tracking-tight">
            Expert <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Digital Services</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            From strategic planning to flawless execution, we deliver comprehensive digital solutions
          </p>
        </div>

        {/* Creative Layout */}
        <div className="relative space-y-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex items-center gap-8 lg:gap-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } group cursor-pointer`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Icon Section */}
              <div className="flex-shrink-0 relative">
                <div
                  className={`w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br ${service.color} 
                    flex items-center justify-center transform transition-all duration-700 
                    ${hoveredIndex === index ? 'scale-110 shadow-2xl' : 'scale-100 shadow-lg'}
                    relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-white/20 rounded-full"></div>
                  <service.icon className={`w-16 h-16 lg:w-20 lg:h-20 text-white z-10 transform transition-transform duration-500 ${hoveredIndex === index ? 'rotate-12' : 'rotate-0'
                    }`} />
                </div>

                {/* Floating elements */}
                <div className={`absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br ${service.color} rounded-full opacity-60 
                  transform transition-all duration-700 ${hoveredIndex === index ? 'scale-150 opacity-100' : 'scale-100'}`}></div>
                <div className={`absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-to-br ${service.color} rounded-full opacity-40
                  transform transition-all duration-700 ${hoveredIndex === index ? 'scale-200 opacity-80' : 'scale-100'}`}></div>
              </div>

              {/* Content Section */}
              <div className={`flex-1 space-y-6 transform transition-all duration-500 ${hoveredIndex === index ? 'translate-x-4' : 'translate-x-0'
                }`}>
                <div className="space-y-4">
                  <h3 className={`text-4xl lg:text-5xl font-black text-gray-900 transition-colors duration-300 ${hoveredIndex === index ? 'text-transparent bg-gradient-to-r bg-clip-text ' + service.color : ''
                    }`}>
                    {service.title}
                  </h3>
                  <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                    {service.desc}
                  </p>
                </div>

                <button className={`group/btn flex items-center space-x-3 text-xl font-bold transition-all duration-300 ${hoveredIndex === index
                  ? `text-transparent bg-gradient-to-r bg-clip-text ${service.color}`
                  : 'text-gray-700 hover:text-gray-900'
                  }`}>
                  <span>Explore Service</span>
                  <ArrowRight className={`w-6 h-6 transition-all duration-300 ${hoveredIndex === index ? 'translate-x-2 scale-110' : 'translate-x-0'
                    }`} />
                </button>
              </div>

              {/* Background decoration */}
              <div className={`absolute inset-0 -z-10 rounded-3xl transition-all duration-700 ${hoveredIndex === index ? `${service.bgColor} opacity-30` : 'opacity-0'
                } transform ${index % 2 === 0 ? 'translate-x-8' : '-translate-x-8'}`}></div>
            </div>
          ))}
        </div>

        {/* Floating background elements */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-to-br from-pink-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 left-1/3 w-48 h-48 bg-gradient-to-br from-green-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  )
}

export default ShowService