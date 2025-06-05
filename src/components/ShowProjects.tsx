import React from 'react'
import { ArrowRight } from 'lucide-react';
const ShowProjects = () => {
    const projects = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      description: "Built a high-performance e-commerce platform with AI-powered recommendations",
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&auto=format&fit=crop&q=60",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Mobile Banking App",
      category: "App Development",
      description: "Secure mobile banking application with biometric authentication",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop&q=60",
      tags: ["Flutter", "Firebase", "Blockchain"]
    },
    {
      title: "E-commerce Platform",
      category: "Web Development",
      description: "Built a high-performance e-commerce platform with AI-powered recommendations",
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&auto=format&fit=crop&q=60",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Mobile Banking App",
      category: "App Development",
      description: "Secure mobile banking application with biometric authentication",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop&q=60",
      tags: ["Flutter", "Firebase", "Blockchain"]
    },

  ];

  return (
 <section id="projects" className="px-6 py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in duration-1000">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full border border-blue-200 mb-6">
              <span className="text-blue-700 text-sm font-semibold">Our Portfolio</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-8 text-gray-900 tracking-tight">
              Featured <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Explore our recent work that has helped clients achieve remarkable business outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-in slide-in-from-bottom"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div className="text-white">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <span className="text-blue-600 font-medium">{project.category}</span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-2">{project.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                  <button className="mt-6 flex items-center space-x-2 text-blue-600 hover:text-purple-600 font-semibold group">
                    <span>View Case Study</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 animate-in fade-in duration-1000">
            <button className="px-10 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl font-semibold hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center">
              <span>View All Projects</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>
  )
}

export default ShowProjects