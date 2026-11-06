import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import MyWork from './pages/MyWork';
import ProjectDetail from './pages/ProjectDetail';

// This wrapper handles the smooth fade up/down for every page
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -15 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

function App() {
  // We need useLocation so framer-motion knows when the URL actually changes
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#050505] text-gray-900 dark:text-gray-100 font-sans selection:bg-blue-500/30 selection:text-white flex flex-col">
      <Navbar />
      
      {/* The main content area that expands to push the footer down */}
      <div className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/resume" element={<PageWrapper><Resume /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
            <Route path="/my-work" element={<MyWork />} />
            <Route path="/my-work/:slug" element={<ProjectDetail />} />
          </Routes>
        </AnimatePresence>
      </div>

     <Footer />
    </div>
  );
}

export default App;