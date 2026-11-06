import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProjectDetail = () => {
  const { slug } = useParams(); // Grabs 'buildora' or 'trimly' from the URL

  // In a real app, you might fetch this from an API or a separate data file.
  // For now, we define the deep-dive data here.
  const projectDatabase = {
    "buildora": {
      title: "Buildora",
      role: "Full Stack Engineer",
      status: "Live",
      year: "2026",
      heroImage: "/buildora-preview.png",
      liveLink: "https://build-or-a.tech",
      overview: "Buildora is a comprehensive learning platform designed to guide students through coding lessons and project submissions.",
      problem: "Traditional learning platforms lack structured, hands-on environments for evaluating complex coding projects and maintaining student accountability.",
      solution: "Architected a Django REST Framework backend with a Neon PostgreSQL database to handle user sessions and project data. Built a responsive React frontend hosted on Vercel to ensure seamless user experience.",
      stack: ["Django", "Django REST Framework", "React", "PostgreSQL", "Tailwind CSS"]
    },
    "trimly": {
      title: "Trimly",
      role: "Backend Software Engineer",
      status: "Live",
      year: "2026",
      heroImage: "/trimly-preview.png",
      liveLink: "https://trimly-ui.vercel.app",
      overview: "A custom URL shortener and analytics application featuring QR code generation.",
      problem: "Users needed a lightweight, fast, and trackable way to share links locally without relying on heavy enterprise tools.",
      solution: "Engineered a rapid URL shortening algorithm using Django, storing metrics in PostgreSQL, and serving analytics to a clean React dashboard.",
      stack: ["Django", "React", "REST APIs", "Vercel", "Render"]
    }
  };

  const project = projectDatabase[slug];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <p>Project not found. <Link to="/my-work" className="text-blue-500">Go back</Link></p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 md:px-12 max-w-6xl mx-auto animate-[fadeIn_0.5s_ease-in-out] text-gray-300">
      
      {/* Back Button */}
      <Link to="/my-work" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-10 transition-colors">
        &larr; Back to My Work
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column: Content */}
        <div className="lg:col-span-2">
          <div className="flex gap-2 mb-4">
            <span className="px-3 py-1 bg-blue-900/30 text-blue-400 border border-blue-800 rounded-full text-xs font-medium">{project.status}</span>
            <span className="px-3 py-1 bg-gray-900 border border-gray-800 rounded-full text-xs font-medium">{project.year}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">{project.title}</h1>
          <p className="text-blue-500 font-medium mb-8">{project.role}</p>
          <p className="text-lg text-gray-400 mb-12 leading-relaxed">{project.overview}</p>

          <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-blue-500">◎</span> The problem
          </h3>
          <p className="mb-10 leading-relaxed text-gray-400">{project.problem}</p>

          <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-blue-500">⚒</span> How I built it
          </h3>
          <p className="mb-10 leading-relaxed text-gray-400">{project.solution}</p>
        </div>

        {/* Right Column: Sidebar */}
        <div className="space-y-8">
          <div className="bg-[#111] border border-gray-800 p-2 rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden">
               <img 
                 src={project.heroImage} 
                 alt={`${project.title} preview`} 
                 className="w-full h-full object-cover"
                 onError={(e) => { e.target.src = 'https://via.placeholder.com/600x400?text=Preview' }}
               />
            </div>
          </div>

          <a 
            href={project.liveLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-colors"
          >
            Visit Live Site &#x2197;
          </a>

          <div className="bg-[#111] border border-gray-800 p-6 rounded-2xl">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Built With</h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map(tech => (
                <span key={tech} className="bg-gray-900 border border-gray-800 text-gray-300 px-3 py-1 rounded-md text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;