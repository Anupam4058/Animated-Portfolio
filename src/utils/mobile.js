// Mobile utility functions for touch interactions and optimizations

class MobileUtils {
  constructor() {
    this.isMobile = this.detectMobile();
    this.isTouch = this.detectTouch();
    this.touchStartY = 0;
    this.touchStartX = 0;
    
    this.init();
  }

  detectMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
           window.innerWidth <= 768 ||
           ('ontouchstart' in window);
  }

  detectTouch() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }

  init() {
    if (this.isMobile) {
      this.setupMobileOptimizations();
      this.setupTouchInteractions();
      this.setupViewportOptimizations();
    }
  }

  setupMobileOptimizations() {
    // Use passive listeners for smooth scrolling
    // Removed scroll-blocking event handlers that caused laggy scrolling
    
    // Add GPU acceleration hints
    document.body.style.webkitOverflowScrolling = 'touch';
    
    // Optimize scroll performance
    this.optimizeScrollPerformance();
  }

  setupTouchInteractions() {
    // Add touch feedback to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, input, textarea, select');
    
    interactiveElements.forEach(element => {
      element.addEventListener('touchstart', this.handleTouchStart.bind(this));
      element.addEventListener('touchend', this.handleTouchEnd.bind(this));
      element.addEventListener('touchcancel', this.handleTouchEnd.bind(this));
    });
  }

  handleTouchStart(event) {
    const element = event.target;
    element.style.transform = 'scale(0.95)';
    element.style.transition = 'transform 0.1s ease';
  }

  handleTouchEnd(event) {
    const element = event.target;
    element.style.transform = 'scale(1)';
    element.style.transition = 'transform 0.1s ease';
  }

  setupViewportOptimizations() {
    // Set viewport meta tag dynamically
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      viewport.setAttribute('content', 
        'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover'
      );
    }

    // Handle safe area insets for notched devices
    this.handleSafeAreaInsets();
  }

  handleSafeAreaInsets() {
    const style = document.createElement('style');
    style.textContent = `
      :root {
        --safe-area-inset-top: env(safe-area-inset-top);
        --safe-area-inset-right: env(safe-area-inset-right);
        --safe-area-inset-bottom: env(safe-area-inset-bottom);
        --safe-area-inset-left: env(safe-area-inset-left);
      }
      
      .safe-area-top {
        padding-top: var(--safe-area-inset-top);
      }
      
      .safe-area-bottom {
        padding-bottom: var(--safe-area-inset-bottom);
      }
      
      .safe-area-left {
        padding-left: var(--safe-area-inset-left);
      }
      
      .safe-area-right {
        padding-right: var(--safe-area-inset-right);
      }
    `;
    document.head.appendChild(style);
  }

  optimizeScrollPerformance() {
    // Use passive event listeners for better scroll performance
    const scrollElements = document.querySelectorAll('.scrollable, .parallax, .hero');
    
    scrollElements.forEach(element => {
      element.addEventListener('scroll', this.handleScroll.bind(this), { passive: true });
      element.addEventListener('touchmove', this.handleTouchMove.bind(this), { passive: true });
    });
  }

  handleScroll(event) {
    // Throttle scroll events for better performance
    if (!this.scrollTimeout) {
      this.scrollTimeout = setTimeout(() => {
        this.processScrollEvent(event);
        this.scrollTimeout = null;
      }, 16); // ~60fps
    }
  }

  handleTouchMove() {
    // Handle touch move events
    if (this.isMobile) {
      // Add any touch-specific scroll handling here
    }
  }

  processScrollEvent(event) {
    // Process scroll events for performance optimization
    const element = event.target;
    
    // Add scroll-based optimizations
    if (element.classList.contains('parallax')) {
      this.optimizeParallaxScroll(element);
    }
  }

  optimizeParallaxScroll(element) {
    // Optimize parallax scrolling for mobile
    if (this.isMobile) {
      // Reduce parallax intensity on mobile for better performance
      const parallaxElements = element.querySelectorAll('[data-parallax]');
      parallaxElements.forEach(el => {
        el.style.transform = 'translateZ(0)';
        el.style.willChange = 'transform';
      });
    }
  }

  // Public methods
  isMobileDevice() {
    return this.isMobile;
  }

  isTouchDevice() {
    return this.isTouch;
  }

  getDeviceInfo() {
    return {
      isMobile: this.isMobile,
      isTouch: this.isTouch,
      userAgent: navigator.userAgent,
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      devicePixelRatio: window.devicePixelRatio
    };
  }

  // Optimize images for mobile
  optimizeImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (this.isMobile) {
        // Add loading="lazy" for better performance
        img.setAttribute('loading', 'lazy');
        
        // Optimize image rendering
        img.style.imageRendering = '-webkit-optimize-contrast';
      }
    });
  }

  // Handle orientation changes
  handleOrientationChange() {
    window.addEventListener('orientationchange', () => {
      setTimeout(() => {
        // Recalculate layouts after orientation change
        this.recalculateLayouts();
      }, 100);
    });
  }

  recalculateLayouts() {
    // Recalculate any layout-dependent elements
    const parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach(element => {
      // Trigger layout recalculation
      element.style.transform = 'translateZ(0)';
    });
  }
}

// Create global mobile utils instance
const mobileUtils = new MobileUtils();

// Export for use in components
export default mobileUtils;

// Export individual methods for convenience
export const {
  isMobileDevice,
  isTouchDevice,
  getDeviceInfo,
  optimizeImages,
  handleOrientationChange
} = mobileUtils;
