import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { FaCode, FaDesktop, FaExternalLinkAlt, FaGithub, FaMobile } from 'react-icons/fa';
import './Projects.css';

const Projects = ({ setActiveSection }) => {
  useEffect(() => {
    setActiveSection('projects');
  }, [setActiveSection]);

  const [filter, setFilter] = useState('all');

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

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'web',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      category: 'web',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    },
    {
      id: 3,
      title: 'Mobile Weather App',
      description: 'A cross-platform mobile weather application with location-based forecasts, beautiful UI, and offline capabilities.',
      image: '/api/placeholder/400/300',
      technologies: ['React Native', 'Redux', 'Weather API'],
      category: 'mobile',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with modern web technologies, featuring smooth animations and clean design.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Framer Motion', 'CSS3'],
      category: 'web',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    },
    {
      id: 5,
      title: 'Data Visualization Dashboard',
      description: 'An interactive dashboard for data visualization with charts, graphs, and real-time data updates.',
      image: '/api/placeholder/400/300',
      technologies: ['D3.js', 'React', 'Python', 'Flask'],
      category: 'web',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    },
    {
      id: 6,
      title: 'Fitness Tracking App',
      description: 'A mobile fitness tracking application with workout plans, progress tracking, and social features.',
      image: '/api/placeholder/400/300',
      technologies: ['React Native', 'Firebase', 'Redux'],
      category: 'mobile',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: <FaCode /> },
    { id: 'web', name: 'Web Apps', icon: <FaDesktop /> },
    { id: 'mobile', name: 'Mobile Apps', icon: <FaMobile /> }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <motion.div
          className="projects-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="projects-header" variants={itemVariants}>
            <h2 className="section-title">My Projects</h2>
            <p className="projects-description">
              Here are some of my recent projects that showcase my skills and experience. 
              Each project represents a unique challenge and learning opportunity.
            </p>
          </motion.div>

          <motion.div className="project-filters" variants={itemVariants}>
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${filter === category.id ? 'active' : ''}`}
                onClick={() => setFilter(category.id)}
              >
                <span className="filter-icon">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </motion.div>

          <motion.div 
            className="projects-grid"
            variants={containerVariants}
            key={filter}
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className={`project-card ${project.featured ? 'featured' : ''}`}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="project-image">
                  <div className="image-placeholder">
                    <span>{project.title}</span>
                  </div>
                  <div className="project-overlay">
                    <div className="project-links">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        title="View Code"
                      >
                        <FaGithub />
                      </a>
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        title="Live Demo"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="projects-cta"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="cta-content">
              <h3>Interested in working together?</h3>
              <p>Let's discuss your next project and bring your ideas to life.</p>
              <a href="#contact" className="btn btn-primary">
                Get In Touch
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
