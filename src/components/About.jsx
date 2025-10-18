import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { FaCode, FaGraduationCap, FaHeart, FaRocket } from 'react-icons/fa';
import './About.css';

const About = ({ setActiveSection }) => {
  useEffect(() => {
    setActiveSection('about');
  }, [setActiveSection]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '100+', label: 'Happy Clients' },
    { number: '24/7', label: 'Support Available' }
  ];

  const interests = [
    { icon: <FaCode />, title: 'Web Development', description: 'Building modern, responsive websites and web applications' },
    { icon: <FaRocket />, title: 'Mobile Apps', description: 'Creating cross-platform mobile applications' },
    { icon: <FaHeart />, title: 'UI/UX Design', description: 'Designing beautiful and intuitive user interfaces' },
    { icon: <FaGraduationCap />, title: 'Learning', description: 'Always exploring new technologies and frameworks' }
  ];

  return (
    <section className="about section" id="about">
      <div className="container">
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="about-text" variants={itemVariants}>
            <h2 className="section-title">About Me</h2>
            <div className="about-description">
              <p>
                I'm a passionate full-stack developer with over 3 years of experience 
                creating digital solutions that make a difference. I specialize in 
                modern web technologies and love turning complex problems into simple, 
                beautiful designs.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the 
                developer community. I believe in continuous learning and staying 
                up-to-date with the latest industry trends.
              </p>
            </div>
            
            <motion.div className="stats-grid" variants={itemVariants}>
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div className="about-image" variants={itemVariants}>
            <div className="image-container">
              <div className="about-photo">
                <div className="photo-placeholder">
                  <span>About Photo</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="interests-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="interests-title">What I Do</h3>
          <div className="interests-grid">
            {interests.map((interest, index) => (
              <motion.div 
                key={index} 
                className="interest-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="interest-icon">
                  {interest.icon}
                </div>
                <h4 className="interest-title">{interest.title}</h4>
                <p className="interest-description">{interest.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
