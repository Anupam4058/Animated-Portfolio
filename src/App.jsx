import { useState, useEffect } from "react";
import "./app.scss";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import About from "./components/about/About";
import LoadingScreen from "./components/loading/LoadingScreen";
import ErrorBoundary from "./components/error/ErrorBoundary";
 
import mobileUtils from "./utils/mobile";
import accessibilityManager from "./utils/accessibility";
import seoOptimizer from "./utils/seo";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      // Loading complete
    }, 2000);


    // Initialize mobile optimizations
    if (mobileUtils.isMobileDevice()) {
      mobileUtils.optimizeImages();
      mobileUtils.handleOrientationChange();
    }


    // Initialize accessibility features
    accessibilityManager.init();

    // Initialize SEO optimization
    seoOptimizer.init();

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <ErrorBoundary>
      <div className="app">
          {/* Skip Navigation Link */}
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          
          {/* Fixed Navbar - Always visible at top */}
          <ErrorBoundary>
            <Navbar />
          </ErrorBoundary>
          
          {/* Hero Section */}
          <section id="Homepage" className="section hero-section">
            <ErrorBoundary>
              <Hero />
            </ErrorBoundary>
          </section>
          
          {/* Main Content */}
          <main id="main-content">
            {/* About Section */}
            <section id="About" className="section content-section" aria-labelledby="about-heading">
              <ErrorBoundary>
                <About />
              </ErrorBoundary>
            </section>
            
            {/* Services Section */}
            <section id="Services" className="section content-section" aria-labelledby="services-heading">
              <ErrorBoundary>
                <Services />
              </ErrorBoundary>
            </section>
            
            {/* Portfolio Section */}
            <section id="Portfolio" className="section content-section" aria-labelledby="portfolio-heading">
              <ErrorBoundary>
                <Portfolio />
              </ErrorBoundary>
            </section>
            
            {/* Contact Section */}
            <section id="Contact" className="section content-section" aria-labelledby="contact-heading">
              <ErrorBoundary>
                <Contact />
              </ErrorBoundary>
            </section>
          </main>
        </div>
      </ErrorBoundary>
  );
};

export default App;