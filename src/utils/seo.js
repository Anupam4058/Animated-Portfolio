// Advanced SEO optimization utilities

class SEOOptimizer {
  constructor() {
    this.metaTags = new Map();
    this.structuredData = [];
    this.sitemap = [];
    this.robots = [];
    
    this.init();
  }

  init() {
    this.setupMetaTags();
    this.setupStructuredData();
    this.setupSitemap();
    this.setupRobots();
    this.optimizeImages();
    this.setupCanonicalURLs();
    this.setupOpenGraph();
    this.setupTwitterCards();
  }

  setupMetaTags() {
    // Setup comprehensive meta tags
    const metaTags = [
      { name: 'description', content: 'Experienced Frontend Developer specializing in React, JavaScript, and modern web technologies. Creating beautiful, responsive, and user-friendly web applications.' },
      { name: 'keywords', content: 'frontend developer, react developer, javascript, web development, UI/UX designer, portfolio, web applications, responsive design' },
      { name: 'author', content: 'Anupam Kumar Singh' },
      { name: 'robots', content: 'index, follow' },
      { name: 'language', content: 'English' },
      { name: 'revisit-after', content: '7 days' },
      { name: 'rating', content: 'general' },
      { name: 'distribution', content: 'global' },
      { name: 'copyright', content: 'Anupam Kumar Singh' },
      { name: 'geo.region', content: 'IN' },
      { name: 'geo.country', content: 'India' },
      { name: 'geo.placename', content: 'India' },
      { name: 'DC.title', content: 'Anupam Kumar Singh - Frontend Developer & UI/UX Designer' },
      { name: 'DC.creator', content: 'Anupam Kumar Singh' },
      { name: 'DC.subject', content: 'Web Development, Frontend Development, UI/UX Design' },
      { name: 'DC.description', content: 'Professional portfolio showcasing frontend development skills and projects' },
      { name: 'DC.publisher', content: 'Anupam Kumar Singh' },
      { name: 'DC.contributor', content: 'Anupam Kumar Singh' },
      { name: 'DC.date', content: new Date().toISOString() },
      { name: 'DC.type', content: 'Text' },
      { name: 'DC.format', content: 'text/html' },
      { name: 'DC.identifier', content: window.location.href },
      { name: 'DC.language', content: 'en' },
      { name: 'DC.rights', content: 'Copyright Anupam Kumar Singh' }
    ];

    metaTags.forEach(tag => {
      this.addMetaTag(tag.name, tag.content);
    });
  }

  addMetaTag(name, content) {
    let meta = document.querySelector(`meta[name="${name}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', name);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
    this.metaTags.set(name, content);
  }

  setupStructuredData() {
    // Setup comprehensive structured data
    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Anupam Kumar Singh",
      "jobTitle": "Frontend Developer",
      "description": "Experienced Frontend Developer specializing in React, JavaScript, and modern web technologies",
      "url": window.location.origin,
      "image": `${window.location.origin}/hero.png`,
      "sameAs": [
        "https://github.com/Anupam4058",
        "https://www.linkedin.com/in/anupam-kumar-singh-0b647224a/",
        "https://x.com/Anupam4058"
      ],
      "knowsAbout": [
        "React",
        "JavaScript",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Sass",
        "Framer Motion",
        "Web Development",
        "UI/UX Design",
        "Responsive Design"
      ],
      "alumniOf": "Computer Science Engineering",
      "worksFor": {
        "@type": "Organization",
        "name": "Freelance"
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      },
      "email": "anupamkumarsingh4058@gmail.com",
      "telephone": "+91-XXXXXXXXXX"
    };

    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Anupam Kumar Singh - Portfolio",
      "url": window.location.origin,
      "description": "Professional portfolio showcasing frontend development skills and projects",
      "author": {
        "@type": "Person",
        "name": "Anupam Kumar Singh"
      },
      "publisher": {
        "@type": "Person",
        "name": "Anupam Kumar Singh"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${window.location.origin}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    };

    const portfolioSchema = {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": "Portfolio Projects",
      "description": "Collection of web development projects and applications",
      "creator": {
        "@type": "Person",
        "name": "Anupam Kumar Singh"
      },
      "dateCreated": new Date().toISOString(),
      "dateModified": new Date().toISOString(),
      "inLanguage": "en",
      "isAccessibleForFree": true,
      "license": "https://creativecommons.org/licenses/by/4.0/"
    };

    this.addStructuredData(personSchema);
    this.addStructuredData(websiteSchema);
    this.addStructuredData(portfolioSchema);
  }

  addStructuredData(data) {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
    this.structuredData.push(data);
  }

  setupSitemap() {
    // Setup sitemap data
    const pages = [
      { url: '/', priority: 1.0, changefreq: 'weekly' },
      { url: '/#About', priority: 0.8, changefreq: 'monthly' },
      { url: '/#Services', priority: 0.8, changefreq: 'monthly' },
      { url: '/#Portfolio', priority: 0.9, changefreq: 'weekly' },
      { url: '/#Contact', priority: 0.7, changefreq: 'monthly' }
    ];

    this.sitemap = pages;
  }

  setupRobots() {
    // Setup robots.txt data
    const robots = [
      'User-agent: *',
      'Allow: /',
      'Sitemap: ' + window.location.origin + '/sitemap.xml',
      'Crawl-delay: 1'
    ];

    this.robots = robots;
  }

  optimizeImages() {
    // Optimize images for SEO
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      // Add alt text if missing
      if (!img.alt) {
        img.alt = 'Image';
      }
      
      // Add loading="lazy" for non-critical images
      if (!img.closest('.hero, .parallax')) {
        img.setAttribute('loading', 'lazy');
      }
      
      // Add decoding="async" for better performance
      img.setAttribute('decoding', 'async');
    });
  }

  setupCanonicalURLs() {
    // Setup canonical URLs
    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = window.location.href;
    document.head.appendChild(canonical);
  }

  setupOpenGraph() {
    // Setup Open Graph meta tags
    const ogTags = [
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href },
      { property: 'og:title', content: 'Anupam Kumar Singh - Frontend Developer & UI/UX Designer' },
      { property: 'og:description', content: 'Experienced Frontend Developer specializing in React, JavaScript, and modern web technologies. Creating beautiful, responsive, and user-friendly web applications.' },
      { property: 'og:image', content: `${window.location.origin}/hero.png` },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: 'Anupam Kumar Singh - Frontend Developer' },
      { property: 'og:site_name', content: "Anupam's Portfolio" },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:updated_time', content: new Date().toISOString() }
    ];

    ogTags.forEach(tag => {
      this.addOGTag(tag.property, tag.content);
    });
  }

  addOGTag(property, content) {
    let meta = document.querySelector(`meta[property="${property}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('property', property);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  }

  setupTwitterCards() {
    // Setup Twitter Card meta tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: window.location.href },
      { name: 'twitter:title', content: 'Anupam Kumar Singh - Frontend Developer & UI/UX Designer' },
      { name: 'twitter:description', content: 'Experienced Frontend Developer specializing in React, JavaScript, and modern web technologies. Creating beautiful, responsive, and user-friendly web applications.' },
      { name: 'twitter:image', content: `${window.location.origin}/hero.png` },
      { name: 'twitter:image:alt', content: 'Anupam Kumar Singh - Frontend Developer' },
      { name: 'twitter:creator', content: '@Anupam4058' },
      { name: 'twitter:site', content: '@Anupam4058' }
    ];

    twitterTags.forEach(tag => {
      this.addTwitterTag(tag.name, tag.content);
    });
  }

  addTwitterTag(name, content) {
    let meta = document.querySelector(`meta[name="${name}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', name);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  }

  // Public methods
  updatePageTitle(title) {
    document.title = title;
    this.addMetaTag('title', title);
    this.addOGTag('og:title', title);
    this.addTwitterTag('twitter:title', title);
  }

  updatePageDescription(description) {
    this.addMetaTag('description', description);
    this.addOGTag('og:description', description);
    this.addTwitterTag('twitter:description', description);
  }

  updatePageImage(imageUrl) {
    this.addOGTag('og:image', imageUrl);
    this.addTwitterTag('twitter:image', imageUrl);
  }

  generateSitemap() {
    // Generate sitemap XML
    const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${this.sitemap.map(page => `
  <url>
    <loc>${window.location.origin}${page.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')}
</urlset>`;
    
    return sitemapXML;
  }

  generateRobotsTxt() {
    // Generate robots.txt
    return this.robots.join('\n');
  }

  getSEOData() {
    return {
      metaTags: Object.fromEntries(this.metaTags),
      structuredData: this.structuredData,
      sitemap: this.sitemap,
      robots: this.robots
    };
  }
}

// Create global SEO optimizer instance
const seoOptimizer = new SEOOptimizer();

// Export for use in components
export default seoOptimizer;

// Export individual methods for convenience
export const {
  updatePageTitle,
  updatePageDescription,
  updatePageImage,
  generateSitemap,
  generateRobotsTxt,
  getSEOData
} = seoOptimizer;
