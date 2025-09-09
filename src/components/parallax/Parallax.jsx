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

  // Enhanced parallax transforms
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const yMountains = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yStars = useTransform(scrollYProgress, [0, 1], ["0%", "120%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

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
        opacity,
        scale
      }}
    >
      {/* Animated Background Elements */}
      <div className="parallax-bg">
        <motion.div 
          className="mountains"
          style={{ y: yMountains }}
        />
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
        <motion.div 
          className="stars"
          style={{ y: yStars }}
        />
        
        {/* Floating Particles */}
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut"
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