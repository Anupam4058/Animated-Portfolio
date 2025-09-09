import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
// import "./cursor.scss"; // Disabled custom cursor

const Cursor = () => {
  const [, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(true); // Start as visible
  
  const cursorRef = useRef(null);
  const cursorFollowerRef = useRef(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const updateCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    // Initialize cursor as visible
    setIsVisible(true);
    
    // Debug: Log cursor initialization
    console.log('Custom cursor initialized');
    
    // Test cursor visibility
    setTimeout(() => {
      console.log('Cursor position:', mouseX.get(), mouseY.get());
      console.log('Cursor visible:', isVisible);
    }, 1000);
    
    // Force cursor to be visible on mouse move
    const forceVisibleOnMove = () => {
      setIsVisible(true);
    };
    
    window.addEventListener("mousemove", forceVisibleOnMove);
    
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Add event listeners for interactive elements
    const handleElementHover = (e) => {
      const element = e.target;
      const tagName = element.tagName.toLowerCase();
      const className = element.className;
      
      // Check for interactive elements
      if (tagName === 'button' || tagName === 'a' || className.includes('btn') || className.includes('card')) {
        setIsHovering(true);
        
        // Set cursor text based on element
        if (tagName === 'button') {
          setCursorText('Click');
        } else if (tagName === 'a') {
          setCursorText('Link');
        } else if (className.includes('card')) {
          setCursorText('View');
        }
      } else {
        setIsHovering(false);
        setCursorText("");
      }
    };

    // Add event listeners
    window.addEventListener("mousemove", updateCursor);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleElementHover);

    // Force cursor to be visible
    const forceVisible = () => {
      setIsVisible(true);
    };
    
    // Call forceVisible every 100ms to ensure cursor stays visible
    const interval = setInterval(forceVisible, 100);
    
    // Also force visible on any mouse event
    const forceVisibleOnAnyEvent = () => {
      setIsVisible(true);
    };
    
    window.addEventListener("mousedown", forceVisibleOnAnyEvent);
    window.addEventListener("mouseup", forceVisibleOnAnyEvent);
    window.addEventListener("click", forceVisibleOnAnyEvent);

    return () => {
      window.removeEventListener("mousemove", updateCursor);
      window.removeEventListener("mousemove", forceVisibleOnMove);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleElementHover);
      clearInterval(interval);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        ref={cursorRef}
        className={`cursor ${isHovering ? 'cursor-hover' : ''} ${isClicking ? 'cursor-click' : ''}`}
        style={{
          x: x - 10,
          y: y - 10,
          opacity: 1, // Always visible
        }}
        animate={{
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      >
        {cursorText && (
          <motion.span
            className="cursor-text"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* Cursor Follower */}
      <motion.div
        ref={cursorFollowerRef}
        className={`cursor-follower ${isHovering ? 'cursor-follower-hover' : ''}`}
        style={{
          x: x - 25,
          y: y - 25,
          opacity: 0.5, // Always visible
        }}
        animate={{
          scale: isClicking ? 0.5 : isHovering ? 2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
        }}
      />

      {/* Cursor Trail */}
      <div className="cursor-trail">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="trail-dot"
            style={{
              x: x - 3,
              y: y - 3,
              opacity: 0.3 - (i * 0.05), // Always visible
            }}
            animate={{
              scale: isClicking ? 0.5 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: i * 0.05,
            }}
          />
        ))}
      </div>

      {/* Cursor Ripple Effect */}
      {isClicking && (
        <motion.div
          className="cursor-ripple"
          style={{
            x: x - 30,
            y: y - 30,
          }}
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      )}
    </>
  );
};

export default Cursor;
