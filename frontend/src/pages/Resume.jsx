import React from 'react';

const Resume = () => {
  const coreSkills = ['Python', 'Django', 'PostgreSQL', 'REST APIs', 'System Architecture', 'Process Modeling', 'Docker'];

  return (
    <div className="animate-[fadeIn_0.5s_ease-in-out]">
      <main className="max-w-6xl mx-auto px-6 md:px-8 pt-12 md:pt-20 pb-20">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 gap-8">
          
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-500 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-4">
              <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              <span>Professional Record</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
              Backend Software Engineer
            </h1>
            
            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed">
              Bridging analytical, first-principles logic with robust server-side architecture. Building APIs and data models designed for scale and reliability.
            </p>
            
            <div className="flex flex-wrap gap-2 mt-6">
              {coreSkills.map(tech => (
                <span key={tech} className="bg-gray-100 dark:bg-[#111] border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex w-full sm:w-auto gap-4 lg:shrink-0">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all text-sm shadow-sm">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg> 
              Open in new tab
            </a>
            <a href="/resume.pdf" download="Obasi-sam_Otei_Resume.pdf" className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all text-sm shadow-lg shadow-blue-900/20">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg> 
              Download PDF
            </a>
          </div>
        </div>

        {/* Premium PDF Viewer Container */}
        <div className="w-full bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden h-[80vh] shadow-2xl relative group p-2 md:p-4">
           {/* Decorative subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none"></div>
          
          {/* Inner wrapper for the PDF */}
          <div className="w-full h-full rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111] transition-colors duration-500 group-hover:border-blue-500/30 shadow-inner relative z-10">
            <iframe 
              src="/resume.pdf" 
              className="w-full h-full" 
              title="Obasi-sam Otei Resume" 
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Resume;