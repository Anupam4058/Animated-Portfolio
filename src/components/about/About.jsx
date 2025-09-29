import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import "./about.scss";

// Animation variants
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


const About = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  const [activeTab, setActiveTab] = useState('story');

  const timeline = [
    {
      year: "2024",
      title: "Full-Stack Development",
      description: "Building complete web applications with modern technologies and best practices."
    },
    {
      year: "2023",
      title: "Machine Learning Journey",
      description: "Started exploring AI/ML with Python, building predictive models and data analysis projects."
    },
    {
      year: "2022",
      title: "Frontend Mastery",
      description: "Mastered React ecosystem, modern CSS techniques, and responsive design principles."
    },
    {
      year: "2021",
      title: "Programming Foundation",
      description: "Began my coding journey with HTML, CSS, and JavaScript fundamentals."
    }
  ];

  const values = [
    {
      icon: "🚀",
      title: "Innovation",
      description: "Always exploring new technologies and creative solutions"
    },
    {
      icon: "🎯",
      title: "Quality",
      description: "Committed to writing clean, maintainable, and efficient code"
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description: "Believe in the power of teamwork and knowledge sharing"
    },
    {
      icon: "📚",
      title: "Learning",
      description: "Continuously growing and adapting to new challenges"
    }
  ];

  return (
    <motion.section 
      className="about"
      ref={ref}
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container">
        {/* Header */}
        <motion.div className="about-header" variants={itemVariants}>
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="subtitle">
            Passionate developer crafting digital experiences with modern technologies
          </p>
        </motion.div>

        <div className="about-content">
          {/* Story & Timeline */}
          <motion.div className="about-main" variants={itemVariants}>
            {/* Tab Navigation */}
            <div className="tab-navigation">
              <button 
                className={`tab-btn ${activeTab === 'story' ? 'active' : ''}`}
                onClick={() => setActiveTab('story')}
              >
                My Story
              </button>
              <button 
                className={`tab-btn ${activeTab === 'timeline' ? 'active' : ''}`}
                onClick={() => setActiveTab('timeline')}
              >
                Journey
              </button>
            </div>

            {/* Tab Content */}
            <div className="tab-content">
              {activeTab === 'story' && (
                <motion.div 
                  className="story-content"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="story-text">
                    <p>
                      Hi, I&apos;m <span className="highlight">Anupam Kumar Singh</span>, a passionate 
                      Computer Science student and aspiring full-stack developer. I love creating 
                      digital experiences that are not just functional, but also beautiful and 
                      user-centered.
                    </p>
                    <p>
                      My journey in tech started with curiosity about how websites work, and it 
                      quickly evolved into a deep passion for <span className="highlight">web development</span> 
                      and <span className="highlight">machine learning</span>. I believe in the power 
                      of technology to solve real-world problems and make a positive impact.
                    </p>
                    <p>
                      When I&apos;m not coding, you&apos;ll find me exploring new design trends, contributing 
                      to open-source projects, or learning about the latest advancements in AI and 
                      web technologies. I&apos;m always excited to collaborate and learn from others in 
                      the tech community.
                    </p>
                  </div>
                </motion.div>
              )}

              {activeTab === 'timeline' && (
                <motion.div 
                  className="timeline-content"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="timeline">
                    {timeline.map((item, index) => (
                      <motion.div 
                        key={index}
                        className="timeline-item"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                          <div className="timeline-year">{item.year}</div>
                          <h4 className="timeline-title">{item.title}</h4>
                          <p className="timeline-description">{item.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Values */}
            <motion.div className="values" variants={itemVariants}>
              <h3>My Values</h3>
              <div className="values-grid">
                {values.map((value, index) => (
                  <motion.div 
                    key={index}
                    className="value-card"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="value-icon">{value.icon}</div>
                    <h4>{value.title}</h4>
                    <p>{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default About;