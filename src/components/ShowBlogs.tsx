import React from 'react'
import {

  ArrowRight,
  Calendar, Clock
} from 'lucide-react';
const ShowBlogs = () => {
  const blogPosts = [
    {
      title: "The Future of AI in Digital Marketing",
      excerpt: "How artificial intelligence is revolutionizing customer engagement strategies",
      date: "May 15, 2024",
      readTime: "5 min read",
      category: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Web Security Best Practices for 2024",
      excerpt: "Essential security measures every business website should implement",
      date: "April 28, 2024",
      readTime: "7 min read",
      category: "Cyber Security",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "Cloud Migration: A Step-by-Step Guide",
      excerpt: "How to successfully transition your business infrastructure to the cloud",
      date: "April 10, 2024",
      readTime: "8 min read",
      category: "Cloud Solutions",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60"
    }
  ];

  return (
    <section id="blog" className="px-6 py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-in fade-in duration-1000">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full border border-blue-200 mb-6">
            <span className="text-blue-700 text-sm font-semibold">Latest Insights</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 text-gray-900 tracking-tight">
            Our <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Blog</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Discover industry trends, best practices, and expert insights to stay ahead in the digital landscape
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-in slide-in-from-bottom"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{post.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">{post.category}</span>
                  <button className="flex items-center space-x-2 text-blue-600 hover:text-purple-600 font-semibold group">
                    <span>Read More</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-in fade-in duration-1000">
          <button className="px-10 py-4 border-2 border-gray-300 text-gray-700 rounded-2xl font-semibold hover:border-blue-600 hover:text-blue-600 transform hover:scale-105 transition-all duration-300 bg-white hover:bg-white/90 inline-flex items-center">
            <span>View All Articles</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default ShowBlogs