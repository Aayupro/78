import { motion } from 'framer-motion';
import { FaFileAlt, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/Publications.css';

const Publications = () => {
  const publications = [
    {
      id: 1,
      title: 'Astronomical Reasearch on multi-dimensional world',
      year: '2020',
      link: 'https://notionpress.com/in/read/the-multi-dimensional-theory/the-multi-dimensional-theory/',
    }
    
  ];

  return (
    <section id="publications" className="publications-section">
      <h2 className="section-title">Publications</h2>
      
      <div className="publications-list">
        {publications.map((pub) => (
          <motion.div
            key={pub.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="publication-card"
          >
            <div className="publication-icon">
              <FaFileAlt />
            </div>
            <div className="publication-content">
              <h3>{pub.title}</h3>
              <p className="publication-meta">
                {pub.journal || pub.conference}{pub.year}
              </p>
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="publication-link"
              >
                <FaExternalLinkAlt /> Read Publication
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Publications;