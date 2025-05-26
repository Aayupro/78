import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaAward, FaCertificate, FaGraduationCap, FaCode } from 'react-icons/fa';
import '../styles/Achievements.css';

const Achievements = () => {
  const [achievementType, setAchievementType] = useState('scholastic'); // 'scholastic' or 'technical'

  const scholasticAchievements = [
    {
      id: 1,
      title: 'AIR 2182',
      issuer: 'JEE Advanced',
      year: '2024',
      icon: <FaGraduationCap className="achievement-icon" />,
      color: 'text-purple-500'
    },
    {
      id: 2,
      title: '99.59 Percentile',
      issuer: 'JEE MAINS-NTA',
      year: '2024',
      icon: <FaAward className="achievement-icon" />,
      color: 'text-purple-500'
    },
    {
        id: 3,
        title: 'NSEP Delhi State Topper',
        issuer: 'IAPT',
        year: '2024',
        icon: <FaAward className="achievement-icon" />,
        color: 'text-purple-500'
      },
      {
        id: 4,
        title: 'IOQM Merit Certificate Holder',
        issuer: 'MTA',
        year: '2023',
        icon: <FaAward className="achievement-icon" />,
        color: 'text-purple-500'
      },
      {
        id: 5,
        title: 'JSTSE Scholar',
        issuer: 'Delhi Government',
        year: '2021',
        icon: <FaAward className="achievement-icon" />,
        color: 'text-purple-500'
      },
  ];

  const technicalAchievements = [
    {
      id: 1,
      title: 'Ranked 1 in Frontend in Winter DSOC',
      issuer: 'Devclub-IITD',
      year: '2024',
      icon: <FaCode className="achievement-icon" />,
      color: 'text-green-500'
    },
    {
      id: 2,
      title: '2nd Place in AI Hackathon',
      issuer: 'Devdock',
      year: '2025',
      icon: <FaCertificate className="achievement-icon" />,
      color: 'text-orange-500'
    },
  ];

  const currentAchievements = achievementType === 'scholastic' 
    ? scholasticAchievements 
    : technicalAchievements;

  return (
    <section id="achievements" className="achievements-section">
      <h2 className="section-title">Achievements</h2>
      
      {/* Toggle Switch */}
      <div className="achievement-toggle-container">
        <button
          className={`achievement-toggle ${achievementType === 'scholastic' ? 'active' : ''}`}
          onClick={() => setAchievementType('scholastic')}
        >
          <FaGraduationCap className="mr-2" />
          Scholastic
        </button>
        <button
          className={`achievement-toggle ${achievementType === 'technical' ? 'active' : ''}`}
          onClick={() => setAchievementType('technical')}
        >
          <FaCode className="mr-2" />
          Technical
        </button>
      </div>
      
      {/* Achievements Grid */}
      <div className="achievements-grid">
        {currentAchievements.map((achievement) => (
          <motion.div
            key={achievement.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -10 }}
            className="achievement-card"
          >
            <div className={`achievement-icon-container ${achievement.color}`}>
              {achievement.icon}
            </div>
            <h3>{achievement.title}</h3>
            <p className="achievement-issuer">{achievement.issuer}</p>
            <p className="achievement-year">{achievement.year}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;