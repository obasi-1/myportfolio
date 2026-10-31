import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#050505] text-gray-900 dark:text-gray-100 font-sans selection:bg-blue-500/30 selection:text-white">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer className="max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-12 border-t border-gray-200 dark:border-gray-800 text-center">
        <p className="text-gray-500 text-xs md:text-sm font-medium">
          © {new Date().getFullYear()} Obasi-sam Otei (A Quiet Mind). All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;