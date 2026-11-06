import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Initialize dark mode from localStorage or system preference
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Apply the dark class to the HTML document and save preference
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' },
    { name: 'My Work', path: '/my-work' }
  ];

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-gray-50/80 dark:bg-[#050505]/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" onClick={closeMenu} className="group flex flex-col">
              <span className="text-xl font-black text-gray-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors">A Quiet Mind</span>
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Obasi-sam Otei</span>
            </Link>

            <div className="flex items-center">
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-1 bg-white dark:bg-[#111] p-1.5 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
                {navLinks.map((link) => (
                  <NavLink 
                    key={link.name} 
                    to={link.path}
                    className={({ isActive }) => 
                      `px-5 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${
                        isActive 
                          ? 'bg-blue-600 text-white shadow-md' 
                          : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>

              {/* Theme Toggle Button */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="w-10 h-10 ml-4 bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors shadow-sm"
                aria-label="Toggle Dark Mode"
              >
                {isDarkMode ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                className="md:hidden w-10 h-10 ml-2 bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-400 shadow-sm"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-gray-50 dark:bg-[#050505] pt-24 px-6 animate-[fadeIn_0.2s_ease-in-out]">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) => 
                  `px-6 py-4 rounded-2xl text-lg font-bold transition-all ${
                    isActive 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white dark:bg-[#111] text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;