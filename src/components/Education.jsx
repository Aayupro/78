import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import '../styles/Education.css';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: 'Bachelor of Technology in Chemical Engineering',
      institution: 'Indian Institute of Technology, Delhi',
      year: '2024 - 2028',
      
    },
    {
        id: 2,
        degree: 'Higher Secondary',
        institution: 'Naveen Public School',
        year: '2022-2024',
        
      },
      {
        id: 3,
        degree: 'Seconday',
        institution: 'Kendriya Vidyalaya Janakpuri',
        year: '2018-2022',
        
      }
  
  ];

  return (
    <section id="education" className="education-section">
      <h2 className="section-title">Education</h2>
      
      <div className="timeline">
        {educationData.map((edu, index) => (
          <motion.div 
            key={edu.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: 'spring', damping: 10 }}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-icon">
                <FaGraduationCap />
              </div>
              <h3>{edu.degree}</h3>
              <p className="timeline-company">{edu.institution}</p>
              <p className="timeline-duration">{edu.year}</p>
              <p className="timeline-description">{edu.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;