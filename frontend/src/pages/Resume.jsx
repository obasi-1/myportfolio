import React from 'react';

const Resume = () => {
  return (
    <div className="animate-[fadeIn_0.5s_ease-in-out]">
      <main className="max-w-5xl mx-auto px-6 md:px-8 pt-12 md:pt-20 pb-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-6">
          <div>
            <p className="text-blue-500 text-xs font-bold tracking-widest uppercase mb-2">My Resume</p>
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tight mb-2">Backend Software Engineer</h1>
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base max-w-xl leading-relaxed">
              APIs, data models, and systems architecture built to scale. Python • Django • PostgreSQL.
            </p>
          </div>
          
          <div className="flex w-full md:w-auto gap-4">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-gray-100 dark:bg-[#1a1a1a] text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 px-5 py-2.5 rounded-lg font-bold hover:bg-gray-200 dark:hover:bg-gray-800 transition-all text-sm">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg> Open in new tab
            </a>
            <a href="/resume.pdf" download="Obasi-sam_Otei_Resume.pdf" className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg font-bold hover:bg-blue-700 transition-all text-sm shadow-lg shadow-blue-900/20">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg> Download
            </a>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {['Python', 'Django', 'PostgreSQL', 'Docker', 'REST APIs', 'Process Simulation'].map(tech => (
            <span key={tech} className="bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 text-xs font-bold px-3 py-1.5 rounded-md">{tech}</span>
          ))}
        </div>

        <div className="w-full bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden h-[75vh] shadow-2xl">
          <iframe src="/resume.pdf" className="w-full h-full" title="Obasi-sam Otei Resume" />
        </div>
      </main>
    </div>
  );
};

export default Resume;