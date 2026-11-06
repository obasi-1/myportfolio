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
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Bring over the refresh-proof project state
  const [selectedProject, setSelectedProject] = useState(() => {
    const saved = sessionStorage.getItem('portfolioProject');
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (selectedProject) sessionStorage.setItem('portfolioProject', JSON.stringify(selectedProject));
    else sessionStorage.removeItem('portfolioProject');
  }, [selectedProject]);

  // Fetch projects
  useEffect(() => {
    fetch('https://portfolio-backend-dvyu.onrender.com/api/projects/')
      .then(response => response.json())
      .then(data => {
        setProjects(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  const renderTechStack = (techStack) => {
    if (!techStack) return null;
    let stackArray = Array.isArray(techStack) ? techStack : typeof techStack === 'string' ? techStack.split(',') : [];
    return stackArray.slice(0, 4).map((tech, i) => (
      <span key={i} className="text-[10px] font-bold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-[#1a1a1a] px-2 py-1 rounded-md whitespace-nowrap">
        {typeof tech === 'object' ? tech.name || tech.title : tech.trim()}
      </span>
    ));
  };

  return (
    <>
      {!selectedProject ? (
        <div className="animate-[fadeIn_0.5s_ease-in-out]">
          <main className="max-w-7xl mx-auto px-6 md:px-8 pt-12 md:pt-20 pb-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">
              <div className="lg:col-span-7 text-left">
                <div className="flex flex-wrap items-center gap-2 text-blue-600 dark:text-blue-500 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-6">
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                  <span>ALX Backend Spec • Chem Eng Alumni</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 leading-[1.1] min-h-[90px] md:min-h-[160px]">
                  <TypewriterText text="Backend Developer." delay={100} speed={50} /> <br/>
                  <span className="text-blue-600 dark:text-blue-500 border-b-4 border-blue-600 dark:border-blue-500">
                    <TypewriterText text="I build systems that scale." delay={1200} speed={50} />
                  </span>
                </h1>

                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-xl">
                  I build robust backend systems and APIs for modern applications, from healthcare platforms and AI assistants to data-driven services. I work primarily with Python, Django, PostgreSQL, and modern web infrastructure.
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
  
  {/* The new Backend Flex button */}
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

              <div className="lg:col-span-5 relative mt-8 lg:mt-0 block w-full max-w-[320px] sm:max-w-md mx-auto lg:max-w-none">
                <div className="absolute -top-8 md:-top-10 right-0 text-[10px] md:text-xs text-gray-500 dark:text-gray-300 tracking-[0.25em] uppercase font-mono text-right font-semibold">
                 Obasi-sam Otei  <br/> A Quiet Mind
                </div>
                <div className="relative rounded-[2rem] overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111] aspect-[4/5] shadow-2xl">
                  <img src="/profile.jpg" alt="Obasi-sam" className="w-full h-full object-cover opacity-90" onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80'} />
                  <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 flex flex-col gap-2">
                    <span className="bg-white/80 dark:bg-black/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 text-blue-600 dark:text-blue-400 text-[9px] md:text-[10px] font-black px-3 py-1.5 rounded-lg w-max uppercase tracking-widest shadow-lg">Systems</span>
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
              <div className="bg-[#0a0a0a] border border-gray-800 p-8 rounded-3xl">
                <div className="w-10 h-10 border border-gray-700 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Backend Architecture</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Designing scalable backend systems using Python and Django. Handling complex data relationships, user authentication, and core application logic.</p>
              </div>
              
              <div className="bg-[#0a0a0a] border border-gray-800 p-8 rounded-3xl">
                <div className="w-10 h-10 border border-gray-700 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">API Engineering</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Building robust RESTful APIs using Django REST Framework. Ensuring secure, seamless data flow between databases, frontends, and third-party services.</p>
              </div>

              <div className="bg-[#0a0a0a] border border-gray-800 p-8 rounded-3xl">
                <div className="w-10 h-10 border border-gray-700 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" /></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Database Design</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Structuring normalized relational schemas in PostgreSQL and SQLite. Optimizing queries and ensuring long-term data integrity for production applications.</p>
              </div>

              <div className="bg-[#0a0a0a] border border-gray-800 p-8 rounded-3xl">
                <div className="w-10 h-10 border border-gray-700 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Process Modeling</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Applying chemical engineering principles to digital systems. Utilizing UniSim for process modeling, bridging quantitative analysis with software architecture.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-gray-800">
              <div>
                <p className="text-blue-600 font-black text-xs uppercase tracking-widest mb-2">STEP_01</p>
                <h4 className="text-white font-bold text-lg mb-1">Architecture</h4>
                <p className="text-gray-500 text-[10px] uppercase tracking-widest">SYSTEM PLANNING</p>
              </div>
              <div>
                <p className="text-blue-600 font-black text-xs uppercase tracking-widest mb-2">STEP_02</p>
                <h4 className="text-white font-bold text-lg mb-1">Data Modeling</h4>
                <p className="text-gray-500 text-[10px] uppercase tracking-widest">SCHEMA DESIGN</p>
              </div>
              <div>
                <p className="text-blue-600 font-black text-xs uppercase tracking-widest mb-2">STEP_03</p>
                <h4 className="text-white font-bold text-lg mb-1">Engineering</h4>
                <p className="text-gray-500 text-[10px] uppercase tracking-widest">API IMPLEMENTATION</p>
              </div>
              <div>
                <p className="text-blue-600 font-black text-xs uppercase tracking-widest mb-2">STEP_04</p>
                <h4 className="text-white font-bold text-lg mb-1">Deployment</h4>
                <p className="text-gray-500 text-[10px] uppercase tracking-widest">CONTAINER & SHIP</p>
              </div>
            </div>
          </section>

          <section className="max-w-7xl mx-auto px-6 md:px-8 mt-20 pt-16 border-t border-gray-800">
            <div className="text-center mb-12">
              <span className="text-blue-600 dark:text-blue-500 font-bold tracking-widest uppercase text-xs flex items-center justify-center gap-2 mb-4">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                TOOLKIT
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-12">Technologies I Work With</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#0a0a0a] border border-gray-800 p-8 rounded-3xl">
                <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-3">
                  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4" /></svg>
                  Backend Core
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="border border-gray-700 bg-[#111] text-gray-300 text-xs font-medium px-3 py-1.5 rounded-lg">Python</span>
                  <span className="border border-gray-700 bg-[#111] text-gray-300 text-xs font-medium px-3 py-1.5 rounded-lg">Django</span>
                  <span className="border border-gray-700 bg-[#111] text-gray-300 text-xs font-medium px-3 py-1.5 rounded-lg">Django REST Framework</span>
                  <span className="border border-gray-700 bg-[#111] text-gray-300 text-xs font-medium px-3 py-1.5 rounded-lg">REST APIs</span>
                  <span className="border border-gray-700 bg-[#111] text-gray-300 text-xs font-medium px-3 py-1.5 rounded-lg">LLM Integration</span>
                  <span className="border border-gray-700 bg-[#111] text-gray-300 text-xs font-medium px-3 py-1.5 rounded-lg">WebSockets</span>
                </div>
              </div>

              <div className="bg-[#0a0a0a] border border-gray-800 p-8 rounded-3xl">
                <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-3">
                  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" /></svg>
                  Data & Systems
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="border border-gray-700 bg-[#111] text-gray-300 text-xs font-medium px-3 py-1.5 rounded-lg">PostgreSQL</span>
                  <span className="border border-gray-700 bg-[#111] text-gray-300 text-xs font-medium px-3 py-1.5 rounded-lg">SQLite</span>
                  <span className="border border-gray-700 bg-[#111] text-gray-300 text-xs font-medium px-3 py-1.5 rounded-lg">Relational Schemas</span>
                  <span className="border border-gray-700 bg-[#111] text-gray-300 text-xs font-medium px-3 py-1.5 rounded-lg">UniSim</span>
                  <span className="border border-gray-700 bg-[#111] text-gray-300 text-xs font-medium px-3 py-1.5 rounded-lg">Process Simulation</span>
                  <span className="border border-gray-700 bg-[#111] text-gray-300 text-xs font-medium px-3 py-1.5 rounded-lg">Quantitative Analysis</span>
                </div>
              </div>

              <div className="bg-[#0a0a0a] border border-gray-800 p-8 rounded-3xl">
                <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-3">
                  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
                  DevOps & Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="border border-gray-700 bg-[#111] text-gray-300 text-xs font-medium px-3 py-1.5 rounded-lg">Docker</span>
                  <span className="border border-gray-700 bg-[#111] text-gray-300 text-xs font-medium px-3 py-1.5 rounded-lg">Git & GitHub</span>
                  <span className="border border-gray-700 bg-[#111] text-gray-300 text-xs font-medium px-3 py-1.5 rounded-lg">Render</span>
                  <span className="border border-gray-700 bg-[#111] text-gray-300 text-xs font-medium px-3 py-1.5 rounded-lg">Vercel</span>
                  <span className="border border-gray-700 bg-[#111] text-gray-300 text-xs font-medium px-3 py-1.5 rounded-lg">Postman</span>
                  <span className="border border-gray-700 bg-[#111] text-gray-300 text-xs font-medium px-3 py-1.5 rounded-lg">Linux / Bash</span>
                  <span className="border border-gray-700 bg-[#111] text-gray-300 text-xs font-medium px-3 py-1.5 rounded-lg">React (Frontend)</span>
                </div>
              </div>
            </div>
          </section>

          <section id="projects-grid" className="max-w-7xl mx-auto px-6 md:px-8 mt-20 md:mt-24 border-t border-gray-200 dark:border-gray-800 pt-16 md:pt-20 pb-20">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tight">My Work</h2>
              <p className="text-gray-500 mt-2 text-sm md:text-base">Architecture built to stay up, not just to demo.</p>
            </div>
            
            {isLoading ? (
              <div className="bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-3xl p-16 flex flex-col items-center justify-center text-center shadow-sm dark:shadow-none min-h-[300px]">
                <div className="w-10 h-10 border-4 border-gray-200 dark:border-gray-800 border-t-blue-600 dark:border-t-blue-500 rounded-full animate-spin mb-4"></div>
                <p className="text-gray-900 dark:text-white font-bold mb-2">Connecting to Backend Servers...</p>
                <p className="text-gray-500 text-sm">Waking up the Render database instance.</p>
              </div>
            ) : projects.length === 0 ? (
              <div className="bg-white dark:bg-[#111] border border-dashed border-gray-300 dark:border-gray-800 rounded-2xl p-12 text-center">
                <p className="text-gray-500">Live database is currently empty.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <div 
                    key={project.id} 
                    onClick={() => { setSelectedProject(project); window.scrollTo(0, 0); }}
                    className="bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 group cursor-pointer flex flex-col shadow-sm dark:shadow-none"
                  >
                    <div className="h-48 bg-gray-100 dark:bg-[#1a1a1a] p-6 relative flex flex-col justify-between overflow-hidden border-b border-gray-200 dark:border-gray-800">
                      <div className="flex justify-between items-start z-10 relative">
                        <span className="bg-gray-900 text-white text-[10px] font-bold px-3 py-1 rounded-full">{project.live_demo_url ? 'Live' : 'Backend Repo'}</span>
                      </div>
                      {project.image ? (
                        <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:scale-110 transition-transform duration-500">
                          <svg className="w-24 h-24 text-gray-500" fill="currentColor" viewBox="0 0 24 24"><path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm3 3h6v2H9V9zm0 4h6v2H9v-2z"/></svg>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors">{project.title}</h3>
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      </div>
                      
                      <p className="text-[11px] text-gray-500 font-medium mb-4">Backend Software Engineer • {new Date().getFullYear()}</p>
                      
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6 line-clamp-3 flex-grow">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {renderTechStack(project.tech_stack || project.tagline)}
                      </div>

                      {project.live_demo_url ? (
                        <a href={project.live_demo_url} target="_blank" rel="noopener noreferrer" className="mt-auto text-xs font-medium text-blue-600 dark:text-blue-500 hover:underline flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                          {project.live_demo_url.replace('https://', '').replace(/\/$/, '')}
                        </a>
                      ) : project.github_url ? (
                        <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="mt-auto text-xs font-medium text-blue-600 dark:text-blue-500 hover:underline flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                          View Repository
                        </a>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      ) : (
        <div className="animate-[fadeIn_0.3s_ease-in-out]">
          <main className="max-w-7xl mx-auto px-6 md:px-8 pt-8 pb-20">
            <button onClick={() => setSelectedProject(null)} className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors mb-10 group">
              <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              Back to Products
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-7">
                <div className="flex gap-2 mb-6">
                  <span className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full">Products</span>
                  <span className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-[10px] font-bold px-3 py-1 rounded-full">{selectedProject.live_demo_url ? 'Live' : 'Backend'}</span>
                  <span className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-[10px] font-bold px-3 py-1 rounded-full">{new Date().getFullYear()}</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">{selectedProject.title}</h1>
                <p className="text-blue-600 dark:text-blue-500 text-sm font-bold mb-8">Backend Software Engineer</p>

                <div className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-12 whitespace-pre-line">
                  {selectedProject.description}
                </div>

                <div className="space-y-12">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      The Focus
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                      {selectedProject.tagline || "Architecting resilient data models and secure API endpoints to ensure system stability under load, prioritizing data integrity and seamless frontend communication."}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                      How I built it
                    </h3>
                    <ul className="space-y-4 text-gray-600 dark:text-gray-400 text-sm md:text-base pl-4 border-l-2 border-gray-200 dark:border-gray-800">
                      <li><strong>Architecture:</strong> Designed utilizing a decoupled architecture separating the client interface from the backend processing engine.</li>
                      <li><strong>Database:</strong> Normalized relational data schemas ensuring fast query performance and strict data validation constraints.</li>
                      <li><strong>Deployment:</strong> Containerized and securely hosted with automated environment variable management for production pipelines.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-8">
                <div className="w-full aspect-[4/3] md:aspect-video lg:aspect-square bg-gray-100 dark:bg-[#111] rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 relative flex items-center justify-center p-8">
                  {selectedProject.image ? (
                    <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover rounded-xl shadow-lg" />
                  ) : (
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white dark:bg-[#1a1a1a] rounded-2xl border border-gray-200 dark:border-gray-700 mx-auto flex items-center justify-center mb-4 shadow-xl">
                        <svg className="w-10 h-10 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm3 3h6v2H9V9zm0 4h6v2H9v-2z"/></svg>
                      </div>
                      <p className="text-gray-400 text-sm font-medium">System Architecture View</p>
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-4">
                  {selectedProject.live_demo_url && (
                    <a href={selectedProject.live_demo_url} target="_blank" rel="noopener noreferrer" className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl text-center hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      {selectedProject.live_demo_url.replace('https://', '').replace(/\/$/, '')}
                    </a>
                  )}
                  {selectedProject.github_url && (
                    <a href={selectedProject.github_url} target="_blank" rel="noopener noreferrer" className="w-full bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 font-bold py-4 rounded-xl text-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                      View Source Code
                    </a>
                  )}
                </div>

                <div className="bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-3xl p-8">
                  <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-4">At a glance</p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Live Production API
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Secure Authentication
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Relational Database
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Backend Ownership
                    </li>
                  </ul>

                  <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mt-8 mb-4">Built With</p>
                  <div className="flex flex-wrap gap-2">
                    {renderTechStack(selectedProject.tech_stack || selectedProject.tagline)}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      )}
    </>
  );
};

export default Home;