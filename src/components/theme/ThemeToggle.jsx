import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import './theme.scss';

const ThemeToggle = ({ className = '' }) => {
  const { toggleTheme, isDark, isTransitioning } = useTheme();

  return (
    <motion.button
      className={`theme-toggle ${className}`}
      onClick={toggleTheme}
      disabled={isTransitioning}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      <motion.div
        className="theme-toggle-track"
        animate={{
          backgroundColor: isDark ? '#374151' : '#fbbf24'
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="theme-toggle-thumb"
          animate={{
            x: isDark ? 0 : 24,
            rotate: isDark ? 0 : 180
          }}
          transition={{ 
            type: "spring", 
            stiffness: 500, 
            damping: 30 
          }}
        >
          {isDark ? (
            <motion.svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              <path
                d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          ) : (
            <motion.svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              <circle
                cx="12"
                cy="12"
                r="5"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </motion.svg>
          )}
        </motion.div>
      </motion.div>
      
      {/* Theme Labels */}
      <div className="theme-labels">
        <span className={`theme-label ${isDark ? 'active' : ''}`}>
          Dark
        </span>
        <span className={`theme-label ${!isDark ? 'active' : ''}`}>
          Light
        </span>
      </div>
    </motion.button>
  );
};

export default ThemeToggle;
