import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Creating modern, responsive websites using React, HTML5, CSS3, and JavaScript. From landing pages to complex web applications.",
      icon: "🌐",
      technologies: ["React", "JavaScript", "HTML5", "CSS3", "SASS"]
    },
    {
      id: 2,
      title: "Machine Learning",
      description: "Developing intelligent solutions using Python, scikit-learn, and TensorFlow. From data analysis to predictive modeling.",
      icon: "🤖",
      technologies: ["Python", "scikit-learn", "TensorFlow", "Pandas", "NumPy"]
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "Designing intuitive and beautiful user interfaces with focus on user experience and modern design principles.",
      icon: "🎨",
      technologies: ["Figma", "Adobe XD", "Photoshop", "Illustrator"]
    },
    {
      id: 4,
      title: "Backend Development",
      description: "Building robust server-side applications and APIs using Node.js, Express, and database management systems.",
      icon: "⚙️",
      technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"]
    },
    {
      id: 5,
      title: "Mobile Development",
      description: "Creating cross-platform mobile applications using React Native and modern mobile development frameworks.",
      icon: "📱",
      technologies: ["React Native", "Flutter", "iOS", "Android"]
    },
    {
      id: 6,
      title: "Data Analysis",
      description: "Extracting insights from data using statistical analysis, visualization tools, and machine learning techniques.",
      icon: "📊",
      technologies: ["Python", "R", "Tableau", "Power BI", "Excel"]
    }
  ];

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView ? "animate" : "initial"}
    >
      <div className="container">
        <motion.div className="textContainer" variants={variants}>
          <motion.p variants={variants} className="subtitle">
            I focus on helping your brand grow
            <br /> and move forward
          </motion.p>
          <motion.hr variants={variants} />
        </motion.div>
        
        <motion.div className="titleContainer" variants={variants}>
          <div className="title">
            <motion.div 
              className="icon-container"
              variants={variants}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <span className="service-icon">💡</span>
            </motion.div>
            <motion.h1 variants={variants} className="responsive-text section-title">
              <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
            </motion.h1>
          </div>
          <div className="title">
            <motion.h1 variants={variants} className="responsive-text section-title">
              <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
            </motion.h1>
            <motion.button 
              variants={variants}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(255, 165, 0, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              WHAT I DO?
            </motion.button>
          </div>
        </motion.div>
        
        <motion.div className="listContainer" variants={variants}>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="box"
              variants={cardVariants}
              whileHover={{ 
                background: "linear-gradient(135deg, rgba(255, 165, 0, 0.1), rgba(255, 107, 53, 0.1))", 
                color: "white",
                scale: 1.02,
                boxShadow: "0 15px 30px rgba(255, 165, 0, 0.2)"
              }}
              custom={index}
            >
              <motion.div 
                className="service-icon-large"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                {service.icon}
              </motion.div>
              <motion.h2 variants={cardVariants}>{service.title}</motion.h2>
              <motion.p variants={cardVariants} className="service-description">
                {service.description}
              </motion.p>
              <motion.div className="technologies" variants={cardVariants}>
                {service.technologies.map((tech, techIndex) => (
                  <motion.span 
                    key={techIndex} 
                    className="tech-tag"
                    whileHover={{ scale: 1.1, backgroundColor: "orange", color: "#0c0c1d" }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Services;