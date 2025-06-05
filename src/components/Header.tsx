import React, { useState,useEffect ,useRef} from 'react'
import { TrendingUp, Code, Smartphone, Brain, Shield, Zap, ChevronDown, Menu, X } from 'lucide-react';

const Header = () => {
   const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isServicesOpen, setIsServicesOpen] = useState<boolean>(false);
    const [hasScrolled, setHasScrolled] = useState<boolean>(false);
      const servicesRef = useRef<HTMLDivElement>(null);
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
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 10) {
          setHasScrolled(true);
        } else {
          setHasScrolled(false);
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    // Close services dropdown when clicking outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
          setIsServicesOpen(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

  return (
         <nav className={`fixed w-full z-50 px-6 py-4 transition-all duration-500 ${hasScrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg  border-gray-100/50' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center transform hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-2xl">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Seraxmi
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium transform hover:scale-105 relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium transform hover:scale-105 relative group"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </button>

              {/* Enhanced Services Dropdown */}
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-3 w-96 bg-white/95 backdrop-blur-xl rounded-3xl border border-gray-200/50 shadow-2xl transform animate-in slide-in-from-top-2 duration-300">
                  <div className="p-2">
                    {services.slice(0, 4).map((service, index) => (
                      <div key={index} className="p-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 rounded-2xl group cursor-pointer">
                        <div className="flex items-start space-x-4">
                          <div className="p-3 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                            <service.icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-1">{service.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{service.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium transform hover:scale-105 relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium transform hover:scale-105 relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-xl transition-colors duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-xl transform animate-in slide-in-from-top-2 duration-300">
            <div className="px-6 py-6 space-y-4">
              <a href="#home" className="block text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium py-2">Home</a>
              <a href="#services" className="block text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium py-2">Services</a>
              <a href="#about" className="block text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium py-2">About</a>
              <a href="#contact" className="block text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium py-2">Contact</a>
            </div>
          </div>
        )}
      </nav>

  )
}

export default Header