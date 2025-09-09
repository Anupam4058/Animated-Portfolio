import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./loading.scss";

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing...");

  const loadingSteps = [
    { text: "Loading assets...", duration: 1000 },
    { text: "Setting up components...", duration: 800 },
    { text: "Optimizing performance...", duration: 600 },
    { text: "Almost ready...", duration: 400 },
    { text: "Welcome!", duration: 200 }
  ];

  useEffect(() => {
    let currentStep = 0; // eslint-disable-line no-unused-vars
    let totalDuration = loadingSteps.reduce((sum, step) => sum + step.duration, 0);
    let elapsed = 0;

    const interval = setInterval(() => {
      elapsed += 50;
      const newProgress = Math.min((elapsed / totalDuration) * 100, 100);
      setProgress(newProgress);

      // Update loading text
      const stepIndex = Math.floor((elapsed / totalDuration) * loadingSteps.length);
      if (stepIndex < loadingSteps.length) {
        setLoadingText(loadingSteps[stepIndex].text);
      }

      if (newProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 500);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="loading-screen"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="loading-container">
          {/* Logo/Name */}
          <motion.div
            className="loading-logo"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1>AKS</h1>
            <p>Portfolio</p>
          </motion.div>

          {/* Loading Animation */}
          <motion.div
            className="loading-animation"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="loading-spinner">
              <motion.div
                className="spinner-ring"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="spinner-ring"
                animate={{ rotate: -360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            className="loading-progress"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="progress-bar">
              <motion.div
                className="progress-fill"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>
            <div className="progress-text">
              <span>{loadingText}</span>
              <span>{Math.round(progress)}%</span>
            </div>
          </motion.div>

          {/* Floating Particles */}
          <div className="loading-particles">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
