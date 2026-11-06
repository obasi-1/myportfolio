import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MyWork = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Full Stack', 'APIs (Backend)', 'Side Projects'];

  // 1. Add 'slug' and 'image' to your projects
  const projects = [
    {
      id: 1,
      title: "Buildora",
      slug: "buildora",
      category: "Full Stack",
      description: "A full-stack learning platform built with React, Django REST Framework, and PostgreSQL.",
      image: "/Buildora.png",
      link: "https://build-or-a.tech"
    },
    {
      id: 2,
      title: "Trimly",
      slug: "trimly",
      category: "Side Projects",
      description: "A custom URL shortener and analytics application built with Django REST Framework and React.",
      image: "/Trimly.jpg",
      link: "https://trimly-ui.vercel.app"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 md:px-12 max-w-6xl mx-auto animate-[fadeIn_0.5s_ease-in-out]">
      <div className="mb-12">
        <h3 className="text-blue-500 font-bold tracking-widest text-sm uppercase mb-3">My Work</h3>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Everything I have built.</h1>
        <p className="text-gray-400 text-lg max-w-2xl">
          Systems and applications I designed to stay up: from backend API architecture to full-stack platforms serving real users.
        </p>
      </div>

      <div className="flex flex-wrap gap-3 mb-12">
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === filter 
                ? 'bg-blue-600 text-white' 
                : 'bg-[#111] text-gray-400 hover:bg-gray-800'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          // 2. Make the entire card a clickable Link routing to the slug
          <Link 
            to={`/my-work/${project.slug}`}
            key={project.id} 
            onClick={() => window.scrollTo(0, 0)}
            className="group block bg-[#111] border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600 transition-all cursor-pointer"
          >
            {/* Image Section */}
            <div className="h-48 w-full bg-gray-900 border-b border-gray-800 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/600x400?text=Preview+Coming+Soon' }} // Fallback if image is missing
              />
            </div>
            
            {/* Content Section */}
            <div className="p-8">
              <span className="inline-block px-3 py-1 bg-gray-900 text-gray-300 text-xs rounded-full mb-4">
                {project.category}
              </span>
              <h2 className="text-2xl font-bold text-white mb-3">{project.title}</h2>
              <p className="text-gray-400 mb-6">{project.description}</p>
              <span className="text-blue-500 font-medium group-hover:text-blue-400">
                View Case Study &rarr;
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MyWork;