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
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    "Full Stack Developer",
    "AI & ML enthusiast",
  ];

  // Function to determine if we should use "a" or "an"
  const getArticle = (role) => {
    const firstWord = role.split(' ')[0].toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    // Check if the first letter is a vowel or if it's "AI" (sounds like "ay-eye")
    if (vowels.includes(firstWord[0]) || firstWord === 'ai') {
      return 'an';
    }
    return 'a';
  };

  // Typing and erasing animation
  useEffect(() => {
    const currentText = roles[currentRole];
    const typingSpeed = 100; // milliseconds per character
    const erasingSpeed = 50;
    const pauseTime = 2000; // pause before erasing

    const handleTyping = () => {
      if (!isDeleting && displayText.length < currentText.length) {
        // Typing
        setDisplayText(currentText.substring(0, displayText.length + 1));
      } else if (!isDeleting && displayText.length === currentText.length) {
        // Pause before erasing
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && displayText.length > 0) {
        // Erasing
        setDisplayText(currentText.substring(0, displayText.length - 1));
      } else if (isDeleting && displayText.length === 0) {
        // Move to next role
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    };

    const timeout = setTimeout(
      handleTyping,
      isDeleting ? erasingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole, roles]);

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
            <motion.div 
              className="greeting"
              variants={textVariants}
            >
              <span className="wave">👋</span> Hi, I&apos;m
            </motion.div>
            
            <motion.h2 
              className="hero-name"
              variants={textVariants}
            >
              <span className="text-gradient">Anupam</span>
            </motion.h2>
            
            <motion.div 
              className="role-container"
              variants={textVariants}
            >
              <span className="role-prefix">I&apos;m {getArticle(roles[currentRole])} </span>
              <span className="role-text text-gradient">
                {displayText}
                <span className="typing-cursor">|</span>
              </span>
            </motion.div>
            
            <motion.p 
              className="hero-description"
              variants={textVariants}
            >
              Crafting digital experiences with modern technologies. Let&apos;s build something amazing together.
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
            
            {/* Social Links removed as requested */}
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