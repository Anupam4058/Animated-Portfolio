import { motion } from 'framer-motion';
import './fallback.scss';

const FallbackComponent = ({ 
  componentName = "Component", 
  onRetry, 
  error = null 
}) => {
  return (
    <motion.div 
      className="fallback-component"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="fallback-content">
        <motion.div
          className="fallback-icon"
          animate={{ 
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>

        <h3 className="fallback-title">
          {componentName} is temporarily unavailable
        </h3>
        
        <p className="fallback-description">
          We&apos;re experiencing some technical difficulties. Please try again in a moment.
        </p>

        {error && process.env.NODE_ENV === 'development' && ( // eslint-disable-line no-undef
          <details className="fallback-error">
            <summary>Error Details</summary>
            <pre>{error.toString()}</pre>
          </details>
        )}

        {onRetry && (
          <motion.button
            className="fallback-retry-btn"
            onClick={onRetry}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M1 4v6h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M23 20v-6h-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Try Again
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default FallbackComponent;
