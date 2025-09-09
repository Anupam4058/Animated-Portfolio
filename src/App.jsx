import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import About from "./components/about/About";

const App = () => {
  return (
    <div className="app">
      <Cursor />
      
      {/* Hero Section */}
      <section id="Homepage" className="section">
        <Navbar />
        <Hero />
      </section>
      
      {/* About Section */}
      <section id="About" className="section">
        <Parallax type="about" />
      </section>
      <section className="section">
        <About />
      </section>
      
      {/* Services Section */}
      <section id="Services" className="section">
        <Parallax type="services" />
      </section>
      <section className="section">
        <Services />
      </section>
      
      {/* Portfolio Section */}
      <section id="Portfolio" className="section">
        <Parallax type="portfolio" />
      </section>
      <section className="section">
        <Portfolio />
      </section>
      
      {/* Contact Section */}
      <section id="Contact" className="section">
        <Contact />
      </section>
    </div>
  );
};

export default App;