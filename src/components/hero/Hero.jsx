import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  // Function to handle smooth scrolling to a section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>ANUPAM KUMAR SINGH</motion.h2>
          <motion.h1 variants={textVariants}>
            Web developer and Machine Learning Enthusiast
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            {/* Button to scroll to the Portfolio section */}
            <motion.button
              variants={textVariants}
              onClick={() => scrollToSection("Portfolio")}
            >
              See the Latest Works
            </motion.button>
            {/* Button to scroll to the Contact section */}
            <motion.button
              variants={textVariants}
              onClick={() => scrollToSection("Contact")}
            >
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        {/* Writer Content Creator Influencer */}
      </motion.div>
      <div className="imageContainer">
        {/* <img src="/hero.png" alt="" /> */}
      </div>
    </div>
  );
};

export default Hero;