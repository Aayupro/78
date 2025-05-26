import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/Aayupro', name: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/aayush-mishra24/', name: 'LinkedIn' },
    { icon: <FaTwitter />, url: 'https://x.com/AlmightyAayush', name: 'Twitter' },
    { icon: <FaEnvelope />, url: 'mailto:aayushspotlight@gmail.com', name: 'Email' },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="footer"
    >
      <div className="container">
        <div className="footer-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="footer-logo"
          >
            <span className="logo-text">Aayush Mishra</span>
            <span className="logo-subtext">Full Stack Developer</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="footer-links"
          >
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="footer-social"
          >
            <h3>Connect With Me</h3>
            <div className="social-icons">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="footer-bottom"
        >
          <p>&copy; {new Date().getFullYear()} Aayush Mishra. All rights reserved.</p>
          <p>Built with React and Framer Motion</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;