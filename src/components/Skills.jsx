import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import {
    FaAws,
    FaCss3Alt,
    FaDatabase,
    FaDocker,
    FaGitAlt,
    FaHtml5,
    FaJs,
    FaMobile,
    FaNodeJs,
    FaPaintBrush,
    FaPython,
    FaReact
} from 'react-icons/fa';
import './Skills.css';

const Skills = ({ setActiveSection }) => {
  useEffect(() => {
    setActiveSection('skills');
  }, [setActiveSection]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', icon: <FaReact />, level: 90 },
        { name: 'JavaScript', icon: <FaJs />, level: 95 },
        { name: 'HTML5', icon: <FaHtml5 />, level: 90 },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 85 },
        { name: 'UI/UX Design', icon: <FaPaintBrush />, level: 80 }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, level: 85 },
        { name: 'Python', icon: <FaPython />, level: 80 },
        { name: 'Database', icon: <FaDatabase />, level: 75 },
        { name: 'REST APIs', icon: <FaGitAlt />, level: 85 }
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, level: 90 },
        { name: 'Docker', icon: <FaDocker />, level: 70 },
        { name: 'AWS', icon: <FaAws />, level: 75 },
        { name: 'Mobile Dev', icon: <FaMobile />, level: 80 }
      ]
    }
  ];

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <motion.div
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="skills-header" variants={itemVariants}>
            <h2 className="section-title">Skills & Expertise</h2>
            <p className="skills-description">
              Here are the technologies and tools I work with to bring ideas to life.
              I'm always learning and expanding my skill set to stay current with 
              the latest industry trends.
            </p>
          </motion.div>

          <div className="skills-grid">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div 
                key={categoryIndex} 
                className="skill-category"
                variants={itemVariants}
              >
                <h3 className="category-title">{category.title}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skillIndex} 
                      className="skill-item"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="skill-header">
                        <div className="skill-icon">
                          {skill.icon}
                        </div>
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div 
                          className="skill-progress"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 + (skillIndex * 0.1) }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="skills-summary"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="summary-card">
              <h3>Why Choose Me?</h3>
              <div className="summary-points">
                <div className="summary-point">
                  <div className="point-icon">🚀</div>
                  <div className="point-text">
                    <h4>Fast Development</h4>
                    <p>Efficient coding practices and modern tools for quick delivery</p>
                  </div>
                </div>
                <div className="summary-point">
                  <div className="point-icon">🎯</div>
                  <div className="point-text">
                    <h4>Problem Solving</h4>
                    <p>Analytical approach to complex technical challenges</p>
                  </div>
                </div>
                <div className="summary-point">
                  <div className="point-icon">💡</div>
                  <div className="point-text">
                    <h4>Innovation</h4>
                    <p>Always exploring new technologies and best practices</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
