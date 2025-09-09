import { useRef, useState } from "react";
import "./portfolio.scss";
import { motion, useInView, AnimatePresence } from "framer-motion";

// Enhanced project data with categories and technologies
const projects = [
  {
    id: 1,
    title: "CareerHub",
    img: "/CareerHub.png",
    desc: "A comprehensive job portal connecting job seekers with employers. Features include job listings, application tracking, and role-based access control for seamless user experience.",
    longDesc: "CareerHub is a full-stack job portal built with React, Supabase, and Clerk authentication. It provides a complete ecosystem for job seekers and employers with features like job search, application tracking, resume uploads, and real-time notifications. The platform uses modern web technologies to deliver a smooth, responsive experience across all devices.",
    category: "web",
    technologies: ["React", "Supabase", "Clerk", "Tailwind CSS", "Radix UI"],
    demoLink: "https://github.com/Anupam4058/CareerHub",
    githubLink: "https://github.com/Anupam4058/CareerHub",
    featured: true,
    year: "2024"
  },
  {
    id: 2,
    title: "Sumz",
    img: "/Sumz.png",
    desc: "AI-powered article summarization tool that provides quick and precise content summaries, enhancing content digestibility for busy readers.",
    longDesc: "Sumz leverages AI technology to transform lengthy articles into concise, meaningful summaries. Built with React.js and Redux Toolkit, it integrates advanced NLP APIs to deliver accurate results. The app features persistent local storage, optimized API responses, and a clean, intuitive interface for seamless content consumption.",
    category: "ai",
    technologies: ["React", "Redux Toolkit", "RapidAPI", "AI/ML", "JavaScript"],
    demoLink: "https://article-summerizer-3c887d.netlify.app/",
    githubLink: "https://github.com/Anupam4058/Sumz",
    featured: true,
    year: "2024"
  },
  {
    id: 3,
    title: "House Price Predictor",
    img: "/HousePricePredictor.jpeg",
    desc: "Machine learning model that predicts house prices using advanced regression techniques and comprehensive data analysis.",
    longDesc: "A sophisticated machine learning project that predicts house prices based on various features like location, size, amenities, and market trends. Built with Python and scikit-learn, it includes data preprocessing, feature engineering, and model optimization using cross-validation techniques. The model achieves high accuracy and provides valuable insights for real estate decisions.",
    category: "ml",
    technologies: ["Python", "scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    demoLink: "https://github.com/Anupam4058/House-Price-Pridictor",
    githubLink: "https://github.com/Anupam4058/House-Price-Pridictor",
    featured: false,
    year: "2023"
  },
  {
    id: 4,
    title: "Student Marks Predictor",
    img: "/StudentMarksPredictor.png",
    desc: "Supervised learning model that predicts student performance based on study hours using linear regression algorithms.",
    longDesc: "An educational machine learning project that demonstrates the power of predictive analytics in education. Using simple linear regression, it predicts student marks based on study hours with high accuracy. The project includes comprehensive data analysis, visualization, and model evaluation techniques, making it an excellent example of applied machine learning in education.",
    category: "ml",
    technologies: ["Python", "scikit-learn", "NumPy", "Pandas", "Streamlit"],
    demoLink: "https://student-marks-predictor.streamlit.app/",
    githubLink: "https://github.com/Anupam4058/Student-Marks-Predictor",
    featured: false,
    year: "2023"
  }
];

// Filter categories
const categories = [
  { id: "all", name: "All Projects", icon: "🚀" },
  { id: "web", name: "Web Development", icon: "🌐" },
  { id: "ai", name: "AI/ML", icon: "🤖" },
  { id: "ml", name: "Machine Learning", icon: "📊" }
];

// Animation variants
const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.1,
      ease: "easeOut"
    }
  }
};

const itemVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const cardVariants = {
  initial: { y: 30, opacity: 0, scale: 0.95 },
  animate: { 
    y: 0, 
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  exit: {
    y: -30,
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  }
};

// Project Card Component
const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="project-card"
      variants={cardVariants}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="card-image">
        <motion.img 
          src={project.img} 
          alt={project.title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        {project.featured && (
          <div className="featured-badge">
            <span>⭐ Featured</span>
          </div>
        )}
        <div className="card-overlay">
          <div className="overlay-content">
            <motion.button 
              className="demo-btn"
              onClick={() => window.open(project.demoLink, "_blank")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14M14 4H20M20 4V10M20 4L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Live Demo</span>
            </motion.button>
            <motion.button 
              className="github-btn"
              onClick={() => window.open(project.githubLink, "_blank")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M9 19C4 20.5 4 16.5 2 16M22 16V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H18.9C18.63 21 18.36 20.99 18.1 20.97C17.84 20.95 17.58 20.92 17.33 20.88C17.08 20.84 16.83 20.79 16.59 20.73C16.35 20.67 16.12 20.61 15.89 20.54C15.66 20.47 15.44 20.39 15.23 20.31C15.02 20.23 14.82 20.14 14.63 20.05C14.44 19.96 14.26 19.86 14.09 19.76C13.92 19.66 13.76 19.55 13.61 19.44C13.46 19.33 13.32 19.21 13.19 19.09C13.06 18.97 12.94 18.84 12.83 18.71C12.72 18.58 12.62 18.44 12.53 18.3C12.44 18.16 12.36 18.01 12.29 17.86C12.22 17.71 12.16 17.55 12.11 17.39C12.06 17.23 12.02 17.06 11.99 16.89C11.96 16.72 11.94 16.54 11.93 16.36C11.92 16.18 11.92 16 11.93 15.82C11.94 15.64 11.96 15.46 11.99 15.29C12.02 15.12 12.06 14.95 12.11 14.79C12.16 14.63 12.22 14.47 12.29 14.32C12.36 14.17 12.44 14.02 12.53 13.88C12.62 13.74 12.72 13.6 12.83 13.47C12.94 13.34 13.06 13.21 13.19 13.09C13.32 12.97 13.46 12.85 13.61 12.74C13.76 12.63 13.92 12.52 14.09 12.42C14.26 12.32 14.44 12.22 14.63 12.13C14.82 12.04 15.02 11.95 15.23 11.87C15.44 11.79 15.66 11.71 15.89 11.64C16.12 11.57 16.35 11.51 16.59 11.45C16.83 11.39 17.08 11.34 17.33 11.3C17.58 11.26 17.84 11.23 18.1 11.21C18.36 11.19 18.63 11.18 18.9 11.18H20C20.5304 11.18 21.0391 11.3907 21.4142 11.7658C21.7893 12.1409 22 12.6496 22 13.18V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Code</span>
            </motion.button>
          </div>
        </div>
      </div>
      
      <div className="card-content">
        <div className="card-header">
          <h3 className="project-title">{project.title}</h3>
          <span className="project-year">{project.year}</span>
        </div>
        
        <p className="project-description">{project.desc}</p>
        
        <div className="technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Main Portfolio Component
const Portfolio = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("all");

  // Filter projects based on active category
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <motion.section 
      className="portfolio"
      ref={ref}
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container">
        {/* Header */}
        <motion.div className="portfolio-header" variants={itemVariants}>
          <h2 className="section-title">
            My <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="subtitle">
            A showcase of my recent projects and technical achievements
          </p>
        </motion.div>

        {/* Filter Navigation */}
        <motion.div className="filter-navigation" variants={itemVariants}>
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="filter-icon">{category.icon}</span>
              <span className="filter-name">{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div className="projects-grid" variants={itemVariants}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className="grid-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div className="portfolio-cta" variants={itemVariants}>
          <div className="cta-content">
            <h3>Interested in working together?</h3>
            <p>Let's discuss your next project and bring your ideas to life</p>
            <motion.button 
              className="btn btn-primary btn-large"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start a Project</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
