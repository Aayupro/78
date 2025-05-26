import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'ML Researcher',
      company: 'Aries-AI society of IIT Delhi',
      duration: 'April 2025 - Present',
      description: [
        "Impplementing publication papers"
      ],
    },
    {
      id: 2,
      role: 'Full Stack Development Intern',
      company: 'AskDevi',
      duration: 'May 2025 - Present',
      description: [
        "I design, develop, and optimize scalable web applications to enhance user experience and functionality."
      ],
    },
  
  ];

  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Experience</h2>
      
      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div 
            key={exp.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: 'spring', damping: 10 }}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-icon">
                <FaBriefcase />
              </div>
              <h3>{exp.role}</h3>
              <p className="timeline-company">{exp.company}</p>
              <p className="timeline-duration">{exp.duration}</p>
              <ul className="timeline-description">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;