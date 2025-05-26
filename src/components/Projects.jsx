import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/Projects.css';

// ✅ Import all images explicitly
import project1 from '../assets/images/project1.png';
import project2 from '../assets/images/project2.jpg';
import project3 from '../assets/images/project3.png';
import project4 from '../assets/images/project4.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Point of Scale system',
      description: 'Built a frontend interface for a POS system with distinct portals for admin and cashier users.',
      technologies: ['HTML', 'CSS', 'JS', 'Bootstrap', 'Three.js'],
      status: '',
      github: 'https://github.com/Aayupro/winter_DSOC/tree/main/frontend/week-2',
     
      image: project1, // ✅ Use the imported image
    },
    {
      id: 2,
      title: 'Astronomy Photo of the day Chrome Extension',
      description: 'Developed a Chrome extension that displays NASA Photo of the Day, along with its description and details, directly in the browser.',
      technologies: ['HTML', 'CSS', 'JS', 'Chrome Extensions'],
      status: '',
      github: 'https://github.com/Aayupro/ASTRONOMY_POD_CHROME_EXTENSION',
      demo: 'https://trovatoe.blogspot.com/2025/05/how-to-use-astronomy-photo-of-day.html',
      image: project2,
    },
    {
      id: 3,
      title: 'AI Based JD-CV Matcher',
      description: 'Developed a WebApp which can rank candidates for a Job Description based on their skill set, education and experience.',
      technologies: ['HTML', 'CSS', 'Python', 'Cosine Similarity', 'TF-IDF'],
      status: 'Live',
      github: 'https://github.com/Aayupro/Synth',
      
      image: project3,
    },
    {
      id: 4,
      title: 'Synth-AI Voice Agent',
      description: 'Developed a voice-enabled AI assistant that processes PDFs and answers queries in real-time.',
      technologies: ['Python', 'WebSockets', 'AsyncIO', 'Gemini API', 'LlamaIndex'],
      status: 'Live',
      github: 'https://github.com/Aayupro/Synth',
     
      image: project4,
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -10 }}
            className="project-card"
          >
            <div className="project-image-container">
              <img
                className="project-image"
                src={project.image}
                alt={project.title}
                style={{ width: '300px' }}
              />
              {project.status && (
                <span className={`project-status ${project.status.toLowerCase()}`}>
                  {project.status}
                </span>
              )}
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tags">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tag">{tech}</span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaGithub /> Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
