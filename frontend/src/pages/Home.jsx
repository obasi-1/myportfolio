import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TypewriterText = ({ text, delay = 0, speed = 50 }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayText(text.slice(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(interval);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay, speed]);

  return <>{displayText}</>;
};

const Home = () => {
  // Hardcoded featured projects for instant zero-latency loading
  const projects = [
    {
      id: 1,
      title: "Buildora",
      slug: "buildora",
      tagline: "React, Django REST Framework, PostgreSQL",
      description: "A full-stack learning platform built with React, Django REST Framework, and PostgreSQL. Features JWT authentication, structured modules, and guided coding lessons.",
      image: "/Buildora.png",
      live_demo_url: "https://build-or-a.tech",
    },
    {
      id: 2,
      title: "Trimly",
      slug: "trimly",
      tagline: "React, Django, REST APIs",
      description: "A custom URL shortener and analytics application built with Django REST Framework and React, featuring fast redirection and QR code generation.",
      image: "/Trimly.jpg",
      live_demo_url: "https://trimly-ui.vercel.app",
    }
  ];

  const renderTechStack = (techStack) => {
    if (!techStack) return null;
    let stackArray = typeof techStack === 'string' ? techStack.split(',') : techStack;
    return stackArray.map((tech, i) => (
      <span key={i} className="text-[10px] font-bold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-[#1a1a1a] px-2 py-1 rounded-md whitespace-nowrap border border-gray-200 dark:border-gray-800">
        {tech.trim()}
      </span>
    ));
  };

  return (
    <div className="animate-[fadeIn_0.5s_ease-in-out]">
      <main className="max-w-7xl mx-auto px-6 md:px-8 pt-12 md:pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">
          
          <div className="lg:col-span-7 text-left">
            <div className="flex flex-wrap items-center gap-2 text-blue-600 dark:text-blue-500 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-6">
              <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
              <span>Backend Software Engineer • Chem Eng Alumni</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 leading-[1.1] min-h-[90px] md:min-h-[160px]">
              <TypewriterText text="Backend Software Engineer." delay={100} speed={50} /> <br/>
              <span className="text-blue-600 dark:text-blue-500 border-b-4 border-blue-600 dark:border-blue-500">
                <TypewriterText text="I engineer reliable systems." delay={1400} speed={50} />
              </span>
            </h1>

            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-xl">
              I build reliable backend systems, robust APIs, and scalable software solutions. Leveraging my background in Chemical Engineering, I apply analytical, first-principles thinking to software architecture—designing data models and server-side infrastructure that stay up under pressure.
            </p>

            <div className="flex items-center gap-3 text-xs md:text-sm font-medium text-gray-500 dark:text-gray-300 mb-8 md:mb-10">
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              Open to remote roles • UTC+1 (Calabar) 
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-10">
              <Link 
                to="/my-work" 
                onClick={() => window.scrollTo(0, 0)}
                className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-xl font-bold shadow-lg shadow-blue-900/20 hover:bg-blue-700 transition-all w-full sm:w-auto"
              >
                View my work
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
              
              <a href="https://portfolio-backend-dvyu.onrender.com/api/docs/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-3.5 rounded-xl font-bold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all w-full sm:w-auto shadow-md">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                API Docs
              </a>

              <Link to="/resume" onClick={() => window.scrollTo(0, 0)} className="flex items-center justify-center gap-2 bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 px-8 py-3.5 rounded-xl font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all w-full sm:w-auto">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                Resume
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative mt-12 lg:mt-0 flex justify-center items-center w-full">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] animate-[floating_4s_ease-in-out_infinite] group">
              <style>{`
                @keyframes floating {
                  0%, 100% { transform: translateY(0); }
                  50% { transform: translateY(-15px); }
                }
              `}</style>
              
              <div className="absolute -top-8 md:-top-10 right-0 text-[10px] md:text-xs text-gray-500 dark:text-gray-300 tracking-[0.25em] uppercase font-mono text-right font-semibold z-10">
               Obasi-sam Otei  <br/> A Quiet Mind
              </div>
              
              <div className="relative rounded-[2rem] overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111] aspect-[4/5] shadow-2xl transition-all duration-500 group-hover:border-blue-500/50 group-hover:shadow-blue-900/20">
                <img 
                  src="/profile.jpg" 
                  alt="Obasi-sam" 
                  className="w-full h-full object-cover opacity-90 transition-transform duration-700 ease-in-out group-hover:scale-105" 
                  onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80'} 
                />
                <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 flex flex-col gap-2">
                  <span className="bg-white/80 dark:bg-black/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 text-blue-600 dark:text-blue-400 text-[9px] md:text-[10px] font-black px-3 py-1.5 rounded-lg w-max uppercase tracking-widest shadow-lg">Systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="max-w-7xl mx-auto px-6 md:px-8 mt-20 md:mt-24 pt-16 md:pt-20 border-t border-gray-200 dark:border-gray-800">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-blue-600 dark:text-blue-500 font-bold tracking-widest uppercase text-xs flex items-center justify-center gap-2 mb-4">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
            EXPERTISE
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tight mb-4">What I Do</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
            I engineer the server-side logic that powers modern applications. From complex relational databases to seamless API integrations, I build the invisible infrastructure that makes software reliable.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 p-8 rounded-3xl">
            <div className="w-10 h-10 border border-gray-300 dark:border-gray-700 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Backend Architecture</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Designing scalable backend systems using Python and Django. Handling complex data relationships, user authentication, and core application logic.</p>
          </div>
          
          <div className="bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 p-8 rounded-3xl">
            <div className="w-10 h-10 border border-gray-300 dark:border-gray-700 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">API Engineering</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Building robust RESTful APIs using Django REST Framework. Ensuring secure, seamless data flow between databases, frontends, and third-party services.</p>
          </div>

          <div className="bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 p-8 rounded-3xl">
            <div className="w-10 h-10 border border-gray-300 dark:border-gray-700 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" /></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Database Design</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Structuring normalized relational schemas in PostgreSQL and SQLite. Optimizing queries and ensuring long-term data integrity for production applications.</p>
          </div>

          <div className="bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 p-8 rounded-3xl">
            <div className="w-10 h-10 border border-gray-300 dark:border-gray-700 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Process Modeling</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Applying chemical engineering principles to digital systems. Utilizing UniSim for process modeling, bridging quantitative analysis with software architecture.</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-8 mt-20 pt-16 border-t border-gray-800">
        <div className="text-center mb-12">
          <span className="text-blue-600 dark:text-blue-500 font-bold tracking-widest uppercase text-xs flex items-center justify-center gap-2 mb-4">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
            TOOLKIT
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tight mb-12">Technologies I Work With</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 p-8 rounded-3xl">
            <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-6 flex items-center gap-3">
              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4" /></svg>
              Backend Core
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#111] text-gray-700 dark:text-gray-300 text-xs font-medium px-3 py-1.5 rounded-lg shadow-sm dark:shadow-none">Python</span>
              <span className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#111] text-gray-700 dark:text-gray-300 text-xs font-medium px-3 py-1.5 rounded-lg shadow-sm dark:shadow-none">Django</span>
              <span className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#111] text-gray-700 dark:text-gray-300 text-xs font-medium px-3 py-1.5 rounded-lg shadow-sm dark:shadow-none">Django REST Framework</span>
              <span className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#111] text-gray-700 dark:text-gray-300 text-xs font-medium px-3 py-1.5 rounded-lg shadow-sm dark:shadow-none">REST APIs</span>
              <span className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#111] text-gray-700 dark:text-gray-300 text-xs font-medium px-3 py-1.5 rounded-lg shadow-sm dark:shadow-none">LLM Integration</span>
              <span className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#111] text-gray-700 dark:text-gray-300 text-xs font-medium px-3 py-1.5 rounded-lg shadow-sm dark:shadow-none">WebSockets</span>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 p-8 rounded-3xl">
            <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-6 flex items-center gap-3">
              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" /></svg>
              Data & Systems
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#111] text-gray-700 dark:text-gray-300 text-xs font-medium px-3 py-1.5 rounded-lg shadow-sm dark:shadow-none">PostgreSQL</span>
              <span className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#111] text-gray-700 dark:text-gray-300 text-xs font-medium px-3 py-1.5 rounded-lg shadow-sm dark:shadow-none">SQLite</span>
              <span className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#111] text-gray-700 dark:text-gray-300 text-xs font-medium px-3 py-1.5 rounded-lg shadow-sm dark:shadow-none">Relational Schemas</span>
              <span className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#111] text-gray-700 dark:text-gray-300 text-xs font-medium px-3 py-1.5 rounded-lg shadow-sm dark:shadow-none">UniSim</span>
              <span className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#111] text-gray-700 dark:text-gray-300 text-xs font-medium px-3 py-1.5 rounded-lg shadow-sm dark:shadow-none">Process Simulation</span>
              <span className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#111] text-gray-700 dark:text-gray-300 text-xs font-medium px-3 py-1.5 rounded-lg shadow-sm dark:shadow-none">Quantitative Analysis</span>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 p-8 rounded-3xl">
            <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-6 flex items-center gap-3">
              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
              DevOps & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#111] text-gray-700 dark:text-gray-300 text-xs font-medium px-3 py-1.5 rounded-lg shadow-sm dark:shadow-none">Docker</span>
              <span className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#111] text-gray-700 dark:text-gray-300 text-xs font-medium px-3 py-1.5 rounded-lg shadow-sm dark:shadow-none">Git & GitHub</span>
              <span className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#111] text-gray-700 dark:text-gray-300 text-xs font-medium px-3 py-1.5 rounded-lg shadow-sm dark:shadow-none">Render</span>
              <span className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#111] text-gray-700 dark:text-gray-300 text-xs font-medium px-3 py-1.5 rounded-lg shadow-sm dark:shadow-none">Vercel</span>
              <span className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#111] text-gray-700 dark:text-gray-300 text-xs font-medium px-3 py-1.5 rounded-lg shadow-sm dark:shadow-none">Postman</span>
              <span className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#111] text-gray-700 dark:text-gray-300 text-xs font-medium px-3 py-1.5 rounded-lg shadow-sm dark:shadow-none">Linux / Bash</span>
              <span className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#111] text-gray-700 dark:text-gray-300 text-xs font-medium px-3 py-1.5 rounded-lg shadow-sm dark:shadow-none">React (Frontend)</span>
            </div>
          </div>
        </div>
      </section>

      {/* PHASE 3: Featured Projects Section (Cleanly routes to Case Studies) */}
      <section id="projects-grid" className="max-w-7xl mx-auto px-6 md:px-8 mt-20 md:mt-24 border-t border-gray-200 dark:border-gray-800 pt-16 md:pt-20 pb-20">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tight">Featured Work</h2>
            <p className="text-gray-500 mt-2 text-sm md:text-base">Architecture built to stay up, not just to demo.</p>
          </div>
          <Link to="/my-work" onClick={() => window.scrollTo(0, 0)} className="text-blue-600 hover:text-blue-700 font-bold flex items-center gap-2 group transition-colors">
            View all projects
            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            // Make Buildora span the full width to act as a massive Flagship project
            const isFlagship = index === 0;
            
            return (
              <Link 
                key={project.id} 
                to={`/my-work/${project.slug}`}
                onClick={() => window.scrollTo(0, 0)}
                className={`group bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 flex flex-col shadow-sm ${isFlagship ? 'md:col-span-2 md:flex-row' : ''}`}
              >
                <div className={`bg-gray-100 dark:bg-[#1a1a1a] relative overflow-hidden border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-800 ${isFlagship ? 'md:w-1/2 min-h-[300px]' : 'h-56'}`}>
                  <div className="absolute top-6 left-6 z-10">
                    <span className="bg-gray-900 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg">
                      {project.live_demo_url ? 'Live Application' : 'Backend Repo'}
                    </span>
                  </div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-in-out" 
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/600x400?text=Preview+Coming+Soon' }}
                  />
                </div>
                
                <div className={`p-8 md:p-10 flex flex-col flex-grow ${isFlagship ? 'md:w-1/2 justify-center' : ''}`}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className={`font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors ${isFlagship ? 'text-3xl' : 'text-2xl'}`}>
                      {project.title}
                    </h3>
                    <span className="text-gray-400 group-hover:text-blue-500 transition-colors text-xl">&#x2197;</span>
                  </div>
                  
                  <p className="text-[11px] text-gray-500 font-bold uppercase tracking-widest mb-4">
                    Backend Software Engineer
                  </p>
                  
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {renderTechStack(project.tagline)}
                  </div>

                  <span className="text-blue-600 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read Case Study &rarr;
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;