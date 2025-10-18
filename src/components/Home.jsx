import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { FaDownload, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Home.css';

const Home = ({ setActiveSection }) => {
  useEffect(() => {
    setActiveSection('home');
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

  return (
    <section className="home" id="home">
      <div className="container">
        <motion.div
          className="home-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="home-text" variants={itemVariants}>
            <motion.h1 className="home-title" variants={itemVariants}>
              Hi, I'm <span className="highlight">Your Name</span>
            </motion.h1>
            <motion.h2 className="home-subtitle" variants={itemVariants}>
              Full Stack Developer
            </motion.h2>
            <motion.p className="home-description" variants={itemVariants}>
              I create beautiful, responsive websites and applications that provide 
              exceptional user experiences. Passionate about clean code, modern 
              technologies, and continuous learning.
            </motion.p>
            <motion.div className="home-buttons" variants={itemVariants}>
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-outline">
                Get In Touch
              </a>
            </motion.div>
            <motion.div className="home-social" variants={itemVariants}>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaTwitter />
              </a>
              <a href="/resume.pdf" download className="social-link download">
                <FaDownload />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div className="home-image" variants={itemVariants}>
            <div className="image-container">
              <div className="profile-image">
                <div className="image-placeholder">
                  <span>Your Photo</span>
                </div>
              </div>
              <div className="floating-elements">
                <div className="floating-element element-1"></div>
                <div className="floating-element element-2"></div>
                <div className="floating-element element-3"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
