import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
      return savedTheme;
    }
    
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    // Default to dark theme
    return 'dark';
  });

  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Save theme to localStorage
    localStorage.setItem('portfolio-theme', theme);
    
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', theme);
    
    // Update meta theme-color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === 'dark' ? '#0a0a0a' : '#ffffff');
    }
  }, [theme]);

  const toggleTheme = () => {
    setIsTransitioning(true);
    
    // Add transition class for smooth theme change
    document.documentElement.classList.add('theme-transitioning');
    
    setTimeout(() => {
      setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
      
      setTimeout(() => {
        document.documentElement.classList.remove('theme-transitioning');
        setIsTransitioning(false);
      }, 150);
    }, 50);
  };

  const setLightTheme = () => {
    if (theme !== 'light') {
      setIsTransitioning(true);
      document.documentElement.classList.add('theme-transitioning');
      
      setTimeout(() => {
        setTheme('light');
        setTimeout(() => {
          document.documentElement.classList.remove('theme-transitioning');
          setIsTransitioning(false);
        }, 150);
      }, 50);
    }
  };

  const setDarkTheme = () => {
    if (theme !== 'dark') {
      setIsTransitioning(true);
      document.documentElement.classList.add('theme-transitioning');
      
      setTimeout(() => {
        setTheme('dark');
        setTimeout(() => {
          document.documentElement.classList.remove('theme-transitioning');
          setIsTransitioning(false);
        }, 150);
      }, 50);
    }
  };

  const value = {
    theme,
    isTransitioning,
    toggleTheme,
    setLightTheme,
    setDarkTheme,
    isDark: theme === 'dark',
    isLight: theme === 'light'
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
