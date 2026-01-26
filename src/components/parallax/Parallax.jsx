import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-50%" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Optimized parallax transforms - reduced complexity for smoother scrolling
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.9, 0]);

  // Section-specific content
  const getSectionContent = (type) => {
    switch (type) {
      case "about":
        return {
          title: "About Me",
          subtitle: "Discover my journey",
          icon: "👨‍💻",
          gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        };
      case "services":
        return {
          title: "My Services",
          subtitle: "What I can do for you",
          icon: "🚀",
          gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
        };
      case "portfolio":
        return {
          title: "My Portfolio",
          subtitle: "Explore my work",
          icon: "💼",
          gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
        };
      default:
        return {
          title: "Welcome",
          subtitle: "Let's create something amazing",
          icon: "✨",
          gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
        };
    }
  };

  const content = getSectionContent(type);

  return (
    <motion.div
      className="parallax"
      ref={ref}
      style={{
        background: content.gradient,
        opacity
      }}
    >
      {/* Simplified Background Elements for better performance */}
      <div className="parallax-bg">
        <div className="mountains" />
        <motion.div
          className="planets"
          style={{
            y: yBg,
            backgroundImage: `url(${
              type === "about" ? "/planets.png" : 
              type === "services" ? "/planets.png" : 
              type === "portfolio" ? "/sun.png" : "/stars.png"
            })`,
          }}
        />
        <div className="stars" />
        
        {/* Reduced particles for better scroll performance */}
        <div className="particles">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + i * 12}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="parallax-content">
        <motion.div 
          className="content-wrapper"
          style={{ y: yText }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="section-icon"
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            {content.icon}
          </motion.div>
          
          <motion.h1 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {content.title}
          </motion.h1>
          
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {content.subtitle}
          </motion.p>

          {/* Animated Line */}
          <motion.div 
            className="animated-line"
            initial={{ width: 0 }}
            animate={{ width: isInView ? "100px" : 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <motion.div 
          className="scroll-arrow"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M7 13L12 18L17 13M7 6L12 11L17 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
        <span>Scroll to explore</span>
      </motion.div>
    </motion.div>
  );
};

export default Parallax;