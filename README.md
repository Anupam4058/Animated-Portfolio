# 🚀 Anupam Kumar Singh - Portfolio

A modern, responsive, and feature-rich portfolio website built with React, Framer Motion, and advanced web technologies. This portfolio showcases my skills as a Frontend Developer and UI/UX Designer with a focus on performance, accessibility, and user experience.

## ✨ Features

### 🎨 **Modern Design System**
- **Dark/Light Theme Toggle** - Seamless theme switching with persistence
- **Glassmorphism Effects** - Modern glass-like UI components
- **Responsive Design** - Optimized for all devices and screen sizes
- **Custom Animations** - Smooth, performant animations with Framer Motion

### 🚀 **Performance Optimized**
- **Loading States** - Professional loading screens and skeleton loaders
- **Lazy Loading** - Optimized image and component loading
- **Performance Monitoring** - Real-time performance metrics
- **GPU Acceleration** - Hardware-accelerated animations

### ♿ **Accessibility First**
- **ARIA Labels** - Comprehensive screen reader support
- **Keyboard Navigation** - Full keyboard accessibility
- **Skip Links** - Quick navigation for assistive technologies
- **Reduced Motion** - Respects user motion preferences

### 📱 **Progressive Web App**
- **Offline Support** - Works without internet connection
- **Install Prompt** - Native app-like installation
- **Service Worker** - Background sync and caching
- **Push Notifications** - Real-time updates

### 🔍 **SEO Optimized**
- **Meta Tags** - Comprehensive SEO meta tags
- **Structured Data** - Rich snippets for search engines
- **Sitemap** - XML sitemap for better indexing
- **Performance** - Core Web Vitals optimized

### 📊 **Analytics & Monitoring**
- **User Tracking** - Comprehensive user interaction analytics
- **Performance Metrics** - Real-time performance monitoring
- **Error Tracking** - Graceful error handling and reporting
- **Custom Events** - Detailed user behavior tracking

## 🛠️ Tech Stack

### **Frontend**
- **React 18** - Modern React with hooks and concurrent features
- **Vite** - Fast build tool and development server
- **Framer Motion** - Advanced animations and gestures
- **Sass/SCSS** - Advanced CSS preprocessing

### **Styling & Design**
- **Custom Design System** - Comprehensive design tokens
- **Responsive Breakpoints** - Mobile-first responsive design
- **CSS Grid & Flexbox** - Modern layout techniques
- **CSS Custom Properties** - Dynamic theming support

### **Performance & Optimization**
- **Service Worker** - Offline functionality and caching
- **Web Workers** - Background processing
- **Code Splitting** - Optimized bundle loading
- **Image Optimization** - WebP and responsive images

### **Development Tools**
- **ESLint** - Code quality and consistency
- **Prettier** - Code formatting
- **Git Hooks** - Automated quality checks
- **Hot Reload** - Fast development experience

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Anupam4058/Animated-Portfolio.git
   cd Animated-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── about/           # About section
│   ├── analytics/       # Analytics components
│   ├── contact/         # Contact form
│   ├── cursor/          # Custom cursor
│   ├── error/           # Error handling
│   ├── hero/            # Hero section
│   ├── loading/         # Loading states
│   ├── navbar/          # Navigation
│   ├── parallax/        # Parallax effects
│   ├── portfolio/       # Portfolio showcase
│   ├── pwa/             # PWA components
│   ├── services/        # Services section
│   └── theme/           # Theme components
├── contexts/            # React contexts
│   └── ThemeContext.jsx # Theme management
├── utils/               # Utility functions
│   ├── analytics.js     # Analytics tracking
│   └── pwa.js          # PWA utilities
├── App.jsx              # Main app component
├── main.jsx             # App entry point
└── app.scss             # Global styles
```

## 🎨 Design System

### **Colors**
- **Primary**: Dark theme with blue accents
- **Secondary**: Light theme with professional colors
- **Accent Colors**: Blue, Orange, Purple gradients
- **Semantic Colors**: Success, Warning, Error states

### **Typography**
- **Primary Font**: Inter (Modern, clean)
- **Monospace**: JetBrains Mono (Code snippets)
- **Responsive**: Fluid typography with clamp()

### **Spacing**
- **Base Unit**: 8px grid system
- **Scale**: 0.5x, 1x, 1.5x, 2x, 3x, 4x, 6x, 8x
- **Responsive**: Adaptive spacing across breakpoints

### **Breakpoints**
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Laptop**: 1024px - 1440px
- **Desktop**: 1440px+

## 🔧 Configuration

### **Environment Variables**
```env
VITE_ANALYTICS_ID=your_analytics_id
VITE_CONTACT_EMAIL=your_email@domain.com
VITE_SOCIAL_GITHUB=your_github_username
VITE_SOCIAL_LINKEDIN=your_linkedin_username
```

### **PWA Configuration**
- **Manifest**: `public/site.webmanifest`
- **Service Worker**: `public/sw.js`
- **Icons**: Multiple sizes for different devices

## 📊 Performance Metrics

### **Core Web Vitals**
- **LCP**: < 2.5s (Largest Contentful Paint)
- **FID**: < 100ms (First Input Delay)
- **CLS**: < 0.1 (Cumulative Layout Shift)

### **Lighthouse Scores**
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

## 🚀 Deployment

### **Vercel (Recommended)**
```bash
npm run build
vercel --prod
```

### **Netlify**
```bash
npm run build
netlify deploy --prod --dir=dist
```

### **GitHub Pages**
```bash
npm run build
npm run deploy
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Anupam Kumar Singh**
- **Email**: anupamkumarsingh4058@gmail.com
- **GitHub**: [@Anupam4058](https://github.com/Anupam4058)
- **LinkedIn**: [Anupam Kumar Singh](https://www.linkedin.com/in/anupam-kumar-singh-0b647224a/)
- **Twitter**: [@Anupam4058](https://x.com/Anupam4058)

## 🙏 Acknowledgments

- **Framer Motion** - For amazing animation capabilities
- **React Team** - For the incredible framework
- **Vite Team** - For the blazing fast build tool
- **Design Inspiration** - Modern portfolio designs and best practices

---

⭐ **Star this repository if you found it helpful!**

🔗 **Live Demo**: [https://anupam-portfolio.vercel.app](https://anupam-portfolio.vercel.app)