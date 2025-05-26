import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll';
import TypeWriter from './TypeWriter';
import '../styles/Hero.css';

const Hero = () => {
  const roles = [
    "Full Stack Developer",
    "Web Designer",
    "AI-ML Enthusiast",
    "Problem Solver"
  ];

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-content"
        >
          <h1 className="hero-greeting">Hi, I'm <span className="hero-name">Aayush Mishra</span></h1>
          
          <h2 className="hero-role">
            <TypeWriter texts={roles} speed={100} delay={1500} />
            <span className="cursor">|</span>
          </h2>
          
          <p className="hero-description">
            I build exceptional digital experiences with modern web technologies.
          </p>
          
          <div className="hero-buttons">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="hero-button primary"
            >
              Contact Me
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="hero-button secondary"
            >
              View Work
            </Link>
          </div>
        </motion.div>
        
        <div className="hero-social">
          <a href="https://github.com/Aayupro" className="social-icon">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/aayush-mishra24/" className="social-icon">
            <FaLinkedin />
          </a>
          <a href="mailto:aayushspotlight@gmail.com" className="social-icon">
            <FaEnvelope />
          </a>
        </div>
        
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="hero-scroll-down"
        >
          <span>Scroll Down</span>
          <div className="arrow-down"></div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;