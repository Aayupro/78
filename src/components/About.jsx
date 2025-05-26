import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import '../styles/About.css';
import profilePic from '../assets/images/profile.jpeg';
import cvFile from '../assets/resumes/CV_AAYUSH.pdf'; 
import profilePicWebp from '../assets/images/profile.webp';


const About = () => {
  const skills = [
    { name: 'Frontend', items: ['React', 'JavaScript', 'HTML/CSS'] },
    { name: 'Backend', items: ['Node.js', 'Express', 'Python'] },
    { name: 'Database', items: ['MongoDB', 'Firebase'] },
  ];

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = 'CV_AAYUSH.pdf';
    link.download = 'CV.pdf';
    link.click();
  };

  return (
    <section id="about" className="about-section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="about-container"
      ><div>
        <div className="profile-container">
          <div>
          <picture>
  <source srcSet={profilePicWebp} type="image/webp" />
  <img 
    src={profilePic} 
    alt="Profile" 
    className="about-image"
    loading="lazy"
  />
</picture>
          </div>
        <div> 
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={cvFile}
          download="CV_AAYUSH.pdf"
          className="download-btn"
          viewport={{ once: true }}
        >
  <FaDownload /> Download CV
</motion.a>
</div></div></div>
        

        <div className="about-content">
          <h3 className="about-subtitle">Who am I?</h3>
          <p className="about-text">
          I'm Aayush Mishra, a developer and engineering student at IIT Delhi with a deep interest in Web Development and AI. From cracking JEE Advanced to building projects at hackathons, I thrive on solving problems and creating impactful tech. I love mentoring, learning new tools, and turning ideas into reality.



          </p>
          <p className="about-text">
            My approach combines technical expertise with a strong focus on user
            experience and clean code principles. I enjoy solving complex problems
            and turning ideas into functional, beautiful applications.
          </p>

          <div className="skills-container">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="skill-card"
              >
                <h4>{skill.name}</h4>
                <div className="skill-items">
                  {skill.items.map((item, i) => (
                    <span key={i} className="skill-item">{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;