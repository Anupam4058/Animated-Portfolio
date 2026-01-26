import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

// Modern animation variants
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
  }
};

const Services = () => {
  const ref = useRef();
  useInView(ref, { margin: "-100px" });

  const scrollToContact = () => {
    const target = document.querySelector('#Contact');
    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar ? navbar.offsetHeight : 0;
    if (target) {
      const y = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 8;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const services = [
    {
      id: 1,
      title: "Full-Stack Development",
      description: "Building end-to-end web applications with modern architectures. From responsive React frontends to scalable Node.js backends with robust database integrations.",
      icon: "💻",
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "MongoDB"]
    },
    {
      id: 2,
      title: "Gen AI Engineering",
      description: "Developing intelligent AI-powered applications using LLMs, RAG systems, and AI agents. Transforming business processes with cutting-edge generative AI solutions.",
      icon: "🤖",
      technologies: ["LangChain", "OpenAI", "Python", "Vector DBs", "RAG", "AI Agents"]
    },
    {
      id: 3,
      title: "AI Application Development",
      description: "Creating production-ready AI applications including chatbots, content generators, document processors, and automated workflows powered by modern AI technologies.",
      icon: "🚀",
      technologies: ["FastAPI", "LLMs", "Prompt Engineering", "Embeddings", "Supabase", "APIs"]
    },
    // {
    //   id: 6,
    //   title: "Mobile Development",
    //   description: "Creating cross-platform mobile applications using React Native and modern mobile development frameworks.",
    //   icon: "📱",
    //   technologies: ["React Native", "Flutter", "iOS", "Android"]
    // },
    // {
    //   id: 7,
    //   title: "Data Analysis",
    //   description: "Extracting insights from data using statistical analysis, visualization tools, and machine learning techniques.",
    //   icon: "📊",
    //   technologies: ["Python", "R", "Tableau", "Power BI", "Excel"]
    // }
  ];

  return (
    <motion.section
      className="services"
      ref={ref}
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container">
        {/* Header */}
        <motion.div className="services-header" variants={itemVariants}>
          <h2 className="section-title">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="subtitle">
            End-to-end software development & AI engineering solutions
          </p>
        </motion.div>
        
        {/* Services Grid */}
        <motion.div className="services-grid" variants={itemVariants}>
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="service-card"
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="card-header">
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
              </div>
              
              <p className="service-description">
                {service.description}
              </p>
              
              <div className="technologies">
                <span className="tech-label">Technologies:</span>
                <div className="tech-tags">
                  {service.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="tech-tag"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <motion.button 
                className="service-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Learn More</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Call to Action */}
        <motion.div className="services-cta" variants={itemVariants}>
          <div className="cta-content">
            <h3>Ready to start your project?</h3>
            <p>Let&apos;s discuss how I can help bring your ideas to life</p>
            <motion.button 
              type="button"
              className="btn btn-primary btn-large"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
            >
              <span>Get In Touch</span>
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

export default Services;