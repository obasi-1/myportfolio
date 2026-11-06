import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MyWork = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Full Stack', 'APIs (Backend)', 'Side Projects'];

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
        {filteredProjects.map((project) => {
          // Removes 'https://' from the link so it looks clean like 'build-or-a.tech'
          const displayUrl = project.link.replace(/^https?:\/\//, '');

          return (
            <div key={project.id} className="bg-[#111] border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600 transition-all flex flex-col">
              
              {/* Image Section - Links to Case Study */}
              <Link 
                to={`/my-work/${project.slug}`} 
                onClick={() => window.scrollTo(0, 0)}
                className="block h-48 w-full bg-gray-900 border-b border-gray-800 overflow-hidden group cursor-pointer"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/600x400?text=Preview+Coming+Soon' }} 
                />
              </Link>
              
              {/* Content Section */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-block px-3 py-1 bg-gray-900 text-gray-300 text-xs rounded-full">
                    {project.category}
                  </span>
                  
                  {/* Top Right Arrow linking to case study */}
                  <Link to={`/my-work/${project.slug}`} onClick={() => window.scrollTo(0, 0)} className="text-gray-500 hover:text-white transition-colors">
                    &#x2197;
                  </Link>
                </div>
                
                {/* Title - Links to Case Study */}
                <Link to={`/my-work/${project.slug}`} onClick={() => window.scrollTo(0, 0)} className="text-2xl font-bold text-white mb-3 hover:text-blue-500 transition-colors">
                  {project.title}
                </Link>
                
                <p className="text-gray-400 mb-6 flex-grow">{project.description}</p>
                
                {/* External Live Link */}
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 font-medium transition-colors w-fit"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  {displayUrl}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyWork;