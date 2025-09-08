import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "CareerHub",
    img: "/CareerHub.png", // Replace with actual image
    desc: "CareerHub is a job portal built with React, Supabase, and Clerk to connect job seekers with employers. It features job listings, application tracking, and role-based access control for a seamless experience. Recruiters can post jobs and track applications, while job seekers can search and save jobs. Clerk ensures secure authentication, while Supabase handles backend operations, including job data storage and file uploads. The UI, designed with Tailwind CSS and Radix UI, delivers a smooth and responsive experience.",
    demoLink: "https://github.com/Anupam4058/CareerHub", // Add demo link
  },
  {
    id: 2,
    title: "Sumz",
    img: "/Sumz.png", // Replace with actual image
    desc: "Sumz is an AI-driven web app that provides quick and precise article summaries, enhancing content digestibility. Built with React.js and Redux Toolkit, it integrates the Article Extractor and Summarizer API via RapidAPI for efficient results. A lazy query approach optimizes API response times, and persistent local storage enhances user experience. Sumz offers a seamless interface for fast and accurate content consumption.",
    demoLink: "https://article-summerizer-3c887d.netlify.app/", // Add demo link
  },
  {
    id: 3,
    title: "House Price Predictor",
    img: "/HousePricePredictor.jpeg", // Replace with actual image
    desc: "House Price Predictor is a machine learning model built with Python and scikit-learn to predict house prices. It includes data preprocessing for handling missing values and feature scaling. A RandomForestRegressor model was trained and optimized using cross-validation, achieving low RMSE. The model was serialized with joblib for efficient storage, and the project was managed using Git and GitHub.",
    demoLink: "https://github.com/Anupam4058/House-Price-Pridictor", // Add demo link
  },
  {
    id: 4,
    title: "Student Marks Predictor",
    img: "/StudentMarksPredictor.png", // Replace with actual image
    desc: "Student Marks Predictor a supervised machine learning model using Simple Regression to predict student marks based on study hours. Built with NumPy, Pandas, Matplotlib, Seaborn, and scikit-learn, it achieved high accuracy in training and testing. Data analysis and feature engineering improved performance, while Git and GitHub were used for version control.",
    demoLink: "https://student-marks-predictor.streamlit.app/", // Add demo link
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <motion.div 
            className="imageContainer" 
            ref={ref}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
          >
            <motion.img 
              src={item.img} 
              alt={item.title}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
          <motion.div className="textContainer" style={{ y }}>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {item.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {item.desc}
            </motion.p>
            <motion.button 
              onClick={() => window.open(item.demoLink, "_blank")}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              See Demo
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
