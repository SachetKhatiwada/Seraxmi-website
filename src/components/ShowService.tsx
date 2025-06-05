""
import React from 'react'
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
  interface Service {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    desc: string;
  }
  

  const services: Service[] = [
    { icon: TrendingUp, title: 'Digital Marketing', desc: 'SEO, PPC, Social Media & Content Marketing strategies that drive real results' },
    { icon: Code, title: 'Web Development', desc: 'Custom websites built with cutting-edge technology and stunning design' },
    { icon: Smartphone, title: 'App Development', desc: 'Native iOS & Android apps that engage users and grow your business' },
    { icon: Brain, title: 'AI & ML Solutions', desc: 'Intelligent automation and machine learning to optimize your operations' },
    { icon: Shield, title: 'Cyber Security', desc: 'Enterprise-grade security solutions to protect your digital assets' },
    { icon: Zap, title: 'Cloud Solutions', desc: 'Scalable cloud infrastructure and migration services for modern businesses' }
  ];
  return (
     <section className="px-6 py-24 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-in fade-in duration-1000">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full border border-blue-200 mb-6 ">
              <span className="text-blue-700 text-sm font-semibold md:text-xl">Our Expertise</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-8 text-gray-900 tracking-tight">
              Expert <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Digital Services</span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              From strategic planning to flawless execution, we deliver comprehensive digital solutions
              that transform businesses and drive unprecedented growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 bg-white rounded-3xl border border-gray-200/50 hover:border-blue-300/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-in slide-in-from-bottom backdrop-blur-sm hover:bg-gradient-to-br hover:from-white hover:to-blue-50/30"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-8 shadow-xl group-hover:shadow-2xl">
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                    {service.desc}
                  </p>
                </div>
                <button className="flex items-center space-x-2 text-blue-600 hover:text-purple-600 font-semibold group-hover:translate-x-2 transition-all duration-300 text-lg">
                  <span>Explore Service</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default ShowService