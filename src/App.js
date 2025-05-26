import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <Navbar 
        activeSection={activeSection} 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} 
      />
      
      <main>
        <Hero />
        
        <SectionWrapper id="about" setActiveSection={setActiveSection}>
          <About />
        </SectionWrapper>
        
        <SectionWrapper id="education" setActiveSection={setActiveSection}>
          <Education />
        </SectionWrapper>
        
        <SectionWrapper id="experience" setActiveSection={setActiveSection}>
          <Experience />
        </SectionWrapper>
        
        <SectionWrapper id="projects" setActiveSection={setActiveSection}>
          <Projects />
        </SectionWrapper>
        
        <SectionWrapper id="publications" setActiveSection={setActiveSection}>
          <Publications />
        </SectionWrapper>
        
        <SectionWrapper id="achievements" setActiveSection={setActiveSection}>
          <Achievements />
        </SectionWrapper>
        
        <SectionWrapper id="contact" setActiveSection={setActiveSection}>
          <Contact />
        </SectionWrapper>
      </main>
      
      <Footer />
    </div>
  );
}

const SectionWrapper = ({ children, id, setActiveSection }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      setActiveSection(id);
    }
  }, [inView, id, setActiveSection]);

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, type: 'spring' }}
    >
      {children}
    </motion.section>
  );
};

export default App;