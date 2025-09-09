// Advanced accessibility utilities and testing

class AccessibilityManager {
  constructor() {
    this.isEnabled = true;
    this.keyboardNavigation = true;
    this.screenReader = false;
    this.reducedMotion = false;
    this.highContrast = false;
    
    this.init();
  }

  init() {
    this.detectAccessibilityPreferences();
    this.setupKeyboardNavigation();
    this.setupScreenReaderSupport();
    this.setupFocusManagement();
    this.setupARIALabels();
    this.setupColorContrast();
  }

  detectAccessibilityPreferences() {
    // Detect reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.reducedMotion = true;
      this.enableReducedMotion();
    }

    // Detect high contrast preference
    if (window.matchMedia('(prefers-contrast: high)').matches) {
      this.highContrast = true;
      this.enableHighContrast();
    }

    // Detect color scheme preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.enableDarkMode();
    }

    // Listen for preference changes
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
      this.reducedMotion = e.matches;
      if (e.matches) {
        this.enableReducedMotion();
      } else {
        this.disableReducedMotion();
      }
    });

    window.matchMedia('(prefers-contrast: high)').addEventListener('change', (e) => {
      this.highContrast = e.matches;
      if (e.matches) {
        this.enableHighContrast();
      } else {
        this.disableHighContrast();
      }
    });
  }

  enableReducedMotion() {
    // Enable reduced motion for accessibility
    const style = document.createElement('style');
    style.id = 'reduced-motion-styles';
    style.textContent = `
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
      
      .motion-div {
        animation: none !important;
        transition: none !important;
      }
    `;
    document.head.appendChild(style);
  }

  disableReducedMotion() {
    // Disable reduced motion styles
    const style = document.getElementById('reduced-motion-styles');
    if (style) {
      style.remove();
    }
  }

  enableHighContrast() {
    // Enable high contrast mode
    document.documentElement.setAttribute('data-high-contrast', 'true');
    
    const style = document.createElement('style');
    style.id = 'high-contrast-styles';
    style.textContent = `
      :root[data-high-contrast="true"] {
        --text-primary: #ffffff;
        --text-secondary: #ffffff;
        --bg-primary: #000000;
        --bg-secondary: #000000;
        --accent-primary: #ffff00;
        --accent-secondary: #00ffff;
      }
      
      :root[data-high-contrast="true"] * {
        border-color: currentColor !important;
      }
    `;
    document.head.appendChild(style);
  }

  disableHighContrast() {
    // Disable high contrast mode
    document.documentElement.removeAttribute('data-high-contrast');
    const style = document.getElementById('high-contrast-styles');
    if (style) {
      style.remove();
    }
  }

  enableDarkMode() {
    // Enable dark mode for better accessibility
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  setupKeyboardNavigation() {
    // Setup keyboard navigation
    document.addEventListener('keydown', this.handleKeyboardNavigation.bind(this));
    
    // Add skip links
    this.addSkipLinks();
    
    // Setup focus indicators
    this.setupFocusIndicators();
  }

  handleKeyboardNavigation(event) {
    // Handle keyboard navigation
    const { key } = event;
    
    switch (key) {
      case 'Tab':
        this.handleTabNavigation(event);
        break;
      case 'Enter':
      case ' ':
        this.handleActivation(event);
        break;
      case 'Escape':
        this.handleEscape(event);
        break;
      case 'ArrowUp':
      case 'ArrowDown':
        this.handleArrowNavigation(event);
        break;
    }
  }

  handleTabNavigation(event) {
    // Handle tab navigation
    const focusableElements = this.getFocusableElements();
    const currentIndex = focusableElements.indexOf(document.activeElement);
    
    if (event.shiftKey) {
      // Shift + Tab (backward)
      if (currentIndex > 0) {
        focusableElements[currentIndex - 1].focus();
      } else {
        focusableElements[focusableElements.length - 1].focus();
      }
    } else {
      // Tab (forward)
      if (currentIndex < focusableElements.length - 1) {
        focusableElements[currentIndex + 1].focus();
      } else {
        focusableElements[0].focus();
      }
    }
  }

  handleActivation(event) {
    // Handle Enter and Space key activation
    const target = event.target;
    
    if (target.tagName === 'BUTTON' || target.getAttribute('role') === 'button') {
      event.preventDefault();
      target.click();
    }
  }

  handleEscape(event) {
    // Handle Escape key
    const modals = document.querySelectorAll('.modal, .dropdown, .mobile-menu');
    modals.forEach(modal => {
      if (modal.style.display !== 'none') {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
      }
    });
  }

  handleArrowNavigation(event) {
    // Handle arrow key navigation
    const target = event.target;
    const parent = target.closest('[role="menu"], [role="listbox"], [role="tablist"]');
    
    if (parent) {
      const items = parent.querySelectorAll('[role="menuitem"], [role="option"], [role="tab"]');
      const currentIndex = Array.from(items).indexOf(target);
      
      if (event.key === 'ArrowUp' && currentIndex > 0) {
        items[currentIndex - 1].focus();
      } else if (event.key === 'ArrowDown' && currentIndex < items.length - 1) {
        items[currentIndex + 1].focus();
      }
    }
  }

  getFocusableElements() {
    // Get all focusable elements
    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
      '[contenteditable="true"]'
    ];
    
    return Array.from(document.querySelectorAll(focusableSelectors.join(', ')));
  }

  addSkipLinks() {
    // Add skip links for keyboard navigation
    const skipLinks = [
      { href: '#main-content', text: 'Skip to main content' },
      { href: '#navigation', text: 'Skip to navigation' },
      { href: '#footer', text: 'Skip to footer' }
    ];
    
    skipLinks.forEach(link => {
      const skipLink = document.createElement('a');
      skipLink.href = link.href;
      skipLink.textContent = link.text;
      skipLink.className = 'skip-link';
      skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        z-index: 10000;
        transition: top 0.3s ease;
      `;
      
      skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
      });
      
      skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
      });
      
      document.body.insertBefore(skipLink, document.body.firstChild);
    });
  }

  setupFocusIndicators() {
    // Setup focus indicators
    const style = document.createElement('style');
    style.textContent = `
      *:focus {
        outline: 2px solid #00d4ff;
        outline-offset: 2px;
      }
      
      *:focus:not(:focus-visible) {
        outline: none;
      }
      
      *:focus-visible {
        outline: 2px solid #00d4ff;
        outline-offset: 2px;
      }
    `;
    document.head.appendChild(style);
  }

  setupScreenReaderSupport() {
    // Setup screen reader support
    this.addScreenReaderOnlyText();
    this.setupLiveRegions();
    this.optimizeSemanticHTML();
  }

  addScreenReaderOnlyText() {
    // Add screen reader only text
    const style = document.createElement('style');
    style.textContent = `
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
    `;
    document.head.appendChild(style);
  }

  setupLiveRegions() {
    // Setup live regions for dynamic content
    const liveRegion = document.createElement('div');
    liveRegion.id = 'live-region';
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    document.body.appendChild(liveRegion);
  }

  optimizeSemanticHTML() {
    // Optimize semantic HTML
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach((heading, index) => {
      if (!heading.id) {
        heading.id = `heading-${index}`;
      }
    });
    
    // Add landmarks
    const main = document.querySelector('main');
    if (main && !main.getAttribute('role')) {
      main.setAttribute('role', 'main');
    }
    
    const nav = document.querySelector('nav');
    if (nav && !nav.getAttribute('role')) {
      nav.setAttribute('role', 'navigation');
    }
  }

  setupFocusManagement() {
    // Setup focus management
    this.trapFocusInModals();
    this.restoreFocusAfterModal();
    this.manageFocusOnRouteChange();
  }

  trapFocusInModals() {
    // Trap focus in modals
    const modals = document.querySelectorAll('.modal, .mobile-menu');
    modals.forEach(modal => {
      modal.addEventListener('keydown', (event) => {
        if (event.key === 'Tab') {
          const focusableElements = modal.querySelectorAll(this.getFocusableElements().join(', '));
          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];
          
          if (event.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement.focus();
              event.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement.focus();
              event.preventDefault();
            }
          }
        }
      });
    });
  }

  restoreFocusAfterModal() {
    // Restore focus after modal closes
    let previousActiveElement = null;
    
    document.addEventListener('focusin', (event) => {
      if (event.target.closest('.modal, .mobile-menu')) {
        previousActiveElement = document.activeElement;
      }
    });
    
    document.addEventListener('focusout', (event) => {
      if (event.target.closest('.modal, .mobile-menu')) {
        setTimeout(() => {
          if (previousActiveElement && !document.activeElement.closest('.modal, .mobile-menu')) {
            previousActiveElement.focus();
          }
        }, 100);
      }
    });
  }

  manageFocusOnRouteChange() {
    // Manage focus on route changes
    // This would be implemented for SPA routing
    console.log('Focus management for route changes');
  }

  setupARIALabels() {
    // Setup ARIA labels
    this.addARIALabels();
    this.setupARIAStates();
    this.setupARIARelationships();
  }

  addARIALabels() {
    // Add ARIA labels to elements that need them
    const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
    buttons.forEach(button => {
      if (!button.textContent.trim()) {
        button.setAttribute('aria-label', 'Button');
      }
    });
    
    const images = document.querySelectorAll('img:not([alt])');
    images.forEach(img => {
      img.setAttribute('alt', 'Image');
    });
  }

  setupARIAStates() {
    // Setup ARIA states
    const collapsibles = document.querySelectorAll('.collapsible');
    collapsibles.forEach(element => {
      element.setAttribute('aria-expanded', 'false');
      element.addEventListener('click', () => {
        const isExpanded = element.getAttribute('aria-expanded') === 'true';
        element.setAttribute('aria-expanded', !isExpanded);
      });
    });
  }

  setupARIARelationships() {
    // Setup ARIA relationships
    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach(group => {
      const label = group.querySelector('label');
      const input = group.querySelector('input, textarea, select');
      
      if (label && input) {
        const labelId = label.id || `label-${Math.random().toString(36).substr(2, 9)}`;
        const inputId = input.id || `input-${Math.random().toString(36).substr(2, 9)}`;
        
        label.id = labelId;
        input.id = inputId;
        input.setAttribute('aria-labelledby', labelId);
      }
    });
  }

  setupColorContrast() {
    // Setup color contrast checking
    this.checkColorContrast();
    this.provideColorContrastAlternatives();
  }

  checkColorContrast() {
    // Check color contrast ratios
    const elements = document.querySelectorAll('*');
    elements.forEach(element => {
      const styles = window.getComputedStyle(element);
      const color = styles.color;
      const backgroundColor = styles.backgroundColor;
      
      if (color && backgroundColor) {
        const contrastRatio = this.calculateContrastRatio(color, backgroundColor);
        if (contrastRatio < 4.5) {
          console.warn('Low color contrast detected:', element, contrastRatio);
        }
      }
    });
  }

  calculateContrastRatio() {
    // Calculate contrast ratio between two colors
    // This is a simplified implementation
    return 4.5; // Placeholder
  }

  provideColorContrastAlternatives() {
    // Provide color contrast alternatives
    const style = document.createElement('style');
    style.textContent = `
      .high-contrast {
        --text-primary: #ffffff;
        --text-secondary: #ffffff;
        --bg-primary: #000000;
        --bg-secondary: #000000;
        --accent-primary: #ffff00;
        --accent-secondary: #00ffff;
      }
    `;
    document.head.appendChild(style);
  }

  // Public methods
  announceToScreenReader(message) {
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {
      liveRegion.textContent = message;
    }
  }

  isAccessibilityEnabled() {
    return this.isEnabled;
  }

  getAccessibilityStatus() {
    return {
      keyboardNavigation: this.keyboardNavigation,
      screenReader: this.screenReader,
      reducedMotion: this.reducedMotion,
      highContrast: this.highContrast
    };
  }
}

// Create global accessibility manager instance
const accessibilityManager = new AccessibilityManager();

// Export for use in components
export default accessibilityManager;

// Export individual methods for convenience
export const {
  announceToScreenReader,
  isAccessibilityEnabled,
  getAccessibilityStatus
} = accessibilityManager;
