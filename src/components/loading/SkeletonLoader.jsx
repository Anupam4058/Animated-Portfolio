import { motion } from "framer-motion";
import "./skeleton.scss";

// Skeleton Card Component
export const SkeletonCard = ({ width = "100%", height = "200px" }) => {
  return (
    <motion.div
      className="skeleton-card"
      style={{ width, height }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="skeleton-shimmer" />
    </motion.div>
  );
};

// Skeleton Text Component
export const SkeletonText = ({ lines = 3, width = "100%" }) => {
  return (
    <div className="skeleton-text" style={{ width }}>
      {[...Array(lines)].map((_, index) => (
        <motion.div
          key={index}
          className="skeleton-line"
          style={{
            width: index === lines - 1 ? "60%" : "100%",
            height: "16px",
            marginBottom: index < lines - 1 ? "8px" : "0"
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <div className="skeleton-shimmer" />
        </motion.div>
      ))}
    </div>
  );
};

// Skeleton Avatar Component
export const SkeletonAvatar = ({ size = "40px" }) => {
  return (
    <motion.div
      className="skeleton-avatar"
      style={{ width: size, height: size }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="skeleton-shimmer" />
    </motion.div>
  );
};

// Skeleton Button Component
export const SkeletonButton = ({ width = "120px", height = "40px" }) => {
  return (
    <motion.div
      className="skeleton-button"
      style={{ width, height }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="skeleton-shimmer" />
    </motion.div>
  );
};

// Skeleton Project Grid Component
export const SkeletonProjectGrid = ({ count = 6 }) => {
  return (
    <div className="skeleton-project-grid">
      {[...Array(count)].map((_, index) => (
        <motion.div
          key={index}
          className="skeleton-project-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <div className="skeleton-image" />
          <div className="skeleton-content">
            <div className="skeleton-title" />
            <div className="skeleton-description" />
            <div className="skeleton-tags" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Skeleton Service Grid Component
export const SkeletonServiceGrid = ({ count = 3 }) => {
  return (
    <div className="skeleton-service-grid">
      {[...Array(count)].map((_, index) => (
        <motion.div
          key={index}
          className="skeleton-service-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <div className="skeleton-icon" />
          <div className="skeleton-title" />
          <div className="skeleton-description" />
          <div className="skeleton-tags" />
          <div className="skeleton-button" />
        </motion.div>
      ))}
    </div>
  );
};

// Main Skeleton Loader Component
const SkeletonLoader = ({ type = "card", ...props }) => {
  switch (type) {
    case "card":
      return <SkeletonCard {...props} />;
    case "text":
      return <SkeletonText {...props} />;
    case "avatar":
      return <SkeletonAvatar {...props} />;
    case "button":
      return <SkeletonButton {...props} />;
    case "project-grid":
      return <SkeletonProjectGrid {...props} />;
    case "service-grid":
      return <SkeletonServiceGrid {...props} />;
    default:
      return <SkeletonCard {...props} />;
  }
};

export default SkeletonLoader;
