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
      year: "2025",
      title: "AI-Powered Software Development",
      description: "Building generative AI and AI-powered software solutions by combining full-stack development expertise with modern LLM technologies and various language models."
    },
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
            Software Developer & Gen AI Engineer crafting intelligent digital solutions
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
                      Hi, I&apos;m <span className="highlight">Anupam</span>, a Software Developer 
                      and Gen AI Engineer passionate about building intelligent, scalable applications 
                      that solve real-world problems.
                    </p>
                    <p>
                      With a strong foundation in <span className="highlight">full-stack development</span> using 
                      <span className="highlight"> React.js, Next.js, Node.js</span>, and <span className="highlight">Python</span>, 
                      I&apos;ve evolved into building <span className="highlight">AI-powered solutions</span> that leverage 
                      the latest in LLMs, LangChain, and generative AI technologies. I specialize in creating 
                      end-to-end applications from robust backends to intuitive user interfaces.
                    </p>
                    <p>
                      Currently, I&apos;m deeply immersed in the <span className="highlight">Gen AI engineering</span> space, 
                      building intelligent applications with <span className="highlight">LLMs, RAG systems, and AI agents</span>. 
                      I&apos;m passionate about bridging the gap between cutting-edge AI research and practical software solutions 
                      that deliver real business value.
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