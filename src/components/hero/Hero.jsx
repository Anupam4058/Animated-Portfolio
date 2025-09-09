import "./hero.scss";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Modern animation variants
const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
      ease: "easeOut"
    }
  }
};

const textVariants = {
  initial: { 
    y: 50, 
    opacity: 0 
  },
  animate: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const imageVariants = {
  initial: { 
    scale: 0.8, 
    opacity: 0,
    rotateY: -15
  },
  animate: { 
    scale: 1, 
    opacity: 1,
    rotateY: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut",
      delay: 0.3
    }
  }
};

const buttonVariants = {
  initial: { 
    scale: 0.8, 
    opacity: 0,
    y: 20
  },
  animate: { 
    scale: 1, 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.8
    }
  },
  hover: {
    scale: 1.05,
    y: -2,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  },
  tap: {
    scale: 0.95
  }
};

const floatingVariants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};
const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "Frontend Developer",
    "Machine Learning Enthusiast", 
    "UI/UX Designer",
    "Full Stack Developer"
  ];

  // Auto-rotate roles
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div 
      className="hero"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {/* Background Elements */}
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          {/* Left Content */}
          <motion.div 
            className="hero-text"
            variants={textVariants}
          >
            {/* <motion.div 
              className="greeting"
              variants={textVariants}
            >
              <span className="wave">👋</span> Hello, I&apos;m
            </motion.div> */}
            
            <motion.h1 
              className="hero-name"
              variants={textVariants}
            >
              <span className="text-gradient">Anupam Kumar Singh</span>
            </motion.h1>
            
            <motion.div 
              className="role-container"
              variants={textVariants}
            >
              <span className="role-prefix">I&apos;m a </span>
              <motion.span 
                className="role-text text-gradient"
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {roles[currentRole]}
              </motion.span>
            </motion.div>
            
            <motion.p 
              className="hero-description"
              variants={textVariants}
            >
              Crafting digital experiences with modern technologies. 
              Passionate about creating beautiful, functional, and user-centered applications.
            </motion.p>
            
            <motion.div 
              className="hero-buttons"
              variants={textVariants}
            >
              <motion.button
                className="btn btn-primary"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={() => scrollToSection("Portfolio")}
              >
                <span>View My Work</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
              
              <motion.button
                className="btn btn-secondary"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={() => scrollToSection("Contact")}
              >
                <span>Get In Touch</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
            </motion.div>
            
            {/* Social Links */}
            <motion.div 
              className="hero-social"
              variants={textVariants}
            >
              <span className="social-label">Follow me</span>
              <div className="social-links">
                <a href="https://github.com/Anupam4058" target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/anupam-kumar-singh-0b647224a/" target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://x.com/Anupam4058" target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right Content - Image */}
          <motion.div 
            className="hero-image"
            variants={imageVariants}
          >
            <div className="image-wrapper">
              <motion.img 
                src="/hero.png" 
                alt="Anupam Kumar Singh"
                variants={floatingVariants}
                animate="animate"
              />
              <div className="image-glow"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="scroll-text">Scroll to explore</div>
        <motion.div 
          className="scroll-arrow"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M7 13L12 18L17 13M7 6L12 11L17 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;