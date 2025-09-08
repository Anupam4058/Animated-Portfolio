import { motion } from "framer-motion";
import "./about.scss";

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
};

const imageVariants = {
  initial: {
    x: 500,
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      delay: 0.3,
      type: "spring",
      stiffness: 100,
    },
  },
};
const About = () => {
  return (
    <motion.div className="about" variants={textVariants} initial="initial" animate="animate">
      <motion.div className="textContainer" variants={textVariants}>
        <motion.h1 variants={textVariants}>About Me</motion.h1>
        <motion.p variants={textVariants}>
          Hi, I'm <span>Anupam Kumar Singh</span>, a passionate student and aspiring web developer with a keen interest in creating modern, responsive, and user-friendly websites. I love exploring new technologies and turning ideas into reality through code.
        </motion.p>
        <motion.p variants={textVariants}>
          Currently, I'm pursuing my studies in <span>Computer Science</span>, where I'm learning the fundamentals of programming, web development, and software engineering. My goal is to become a full-stack developer and contribute to innovative projects that make a difference.
        </motion.p>
        <motion.p variants={textVariants}>
          When I'm not coding, you can find me exploring new design trends, working on personal projects, or learning about the latest advancements in tech. I'm always eager to collaborate, learn, and grow as a developer.
        </motion.p>
      </motion.div>
      <motion.div className="imageContainer" variants={imageVariants}>
        <motion.img 
          src="/hero.png" 
          alt="About Me"
          whileHover={{ 
            scale: 1.05,
            rotate: 2,
            transition: { duration: 0.3 }
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default About;