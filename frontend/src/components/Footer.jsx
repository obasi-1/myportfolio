import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#050505] border-t border-gray-200 dark:border-gray-800 pt-16 pb-8 px-6 md:px-8 mt-auto">
      <div className="max-w-7xl mx-auto">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          
          {/* Column 1: Brand & Socials */}
          <div className="md:col-span-12 lg:col-span-5">
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="inline-block mb-4">
              <span className="text-xl font-black text-gray-900 dark:text-white tracking-tight">Obasi-sam Otei</span>
              <span className="block text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-0.5">A Quiet Mind</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 max-w-sm">
              Backend Software Engineer. Python · Django · PostgreSQL · React. Systems Thinking · Exploring AI Engineering . Building systems that scale and bridging quantitative logic with modern web infrastructure.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 hover:border-blue-500/30 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
              </a>
              <a href="https://linkedin.com/in/obasisamotei" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 hover:border-blue-500/30 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="mailto:your.email@example.com" className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 hover:border-blue-500/30 transition-all">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="md:col-span-6 lg:col-span-3">
            <h3 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-5">Navigation</h3>
            <ul className="space-y-3">
              <li><Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">Home</Link></li>
              <li><Link to="/about" onClick={() => window.scrollTo(0, 0)} className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">About</Link></li>
              <li><Link to="/resume" onClick={() => window.scrollTo(0, 0)} className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">Resume</Link></li>
              <li><Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="md:col-span-6 lg:col-span-4">
            <h3 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-5">Resources</h3>
            <ul className="space-y-3">
              <li><a href="https://portfolio-backend-dvyu.onrender.com/api/docs/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors flex items-center gap-1.5">Interactive API Docs <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a></li>
              <li><a href="https://trimly-ui.vercel.app" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors flex items-center gap-1.5">Trimly Application <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a></li>
              <li><a href="https://build-or-a.tech" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors flex items-center gap-1.5">Buildora Platform <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a></li>
            </ul>
          </div>
        </div>

        {/* Highlight Call-to-Action Banner */}
        <a href="https://portfolio-backend-dvyu.onrender.com/api/docs/" target="_blank" rel="noopener noreferrer" className="block w-full md:w-4/5 lg:w-2/3 mx-auto bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-2xl p-5 md:p-6 mb-12 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all group shadow-sm">
          <div className="flex items-center gap-4 md:gap-5">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M4 15a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2H6a2 2 0 00-2 2v6z" /></svg>
            </div>
            <div className="flex-grow">
              <h4 className="text-gray-900 dark:text-white font-bold text-sm md:text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Explore my API Architecture</h4>
              <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm mt-0.5">Test the live Swagger endpoints powering this portfolio.</p>
            </div>
            <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-transform transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </div>
        </a>

        {/* Bottom Copyright Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-gray-200 dark:border-gray-800 gap-4">
          <p className="text-gray-500 text-xs font-medium">© {new Date().getFullYear()} Obasi-sam Otei. All rights reserved.</p>
          <p className="text-gray-500 text-xs font-medium flex items-center gap-1.5">
            Crafted in Calabar, Nigeria <span className="text-green-600 font-bold ml-0.5">NG</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;