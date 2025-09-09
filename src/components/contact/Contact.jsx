import { useRef, useState } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

// Modern animation variants
const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.1,
      ease: "easeOut"
    }
  }
};

const itemVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const formVariants = {
  initial: { x: 50, opacity: 0 },
  animate: { 
    x: 0, 
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        "service_94y20xo",
        "template_v10u2oh",
        formRef.current,
        "pX_2hasGmGcuvjXIW"
      )
      .then(
        () => {
          setSuccess(true);
          setIsSubmitting(false);
          formRef.current.reset();
        },
        () => {
          setError(true);
          setIsSubmitting(false);
        }
      );
  };

  const contactInfo = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Email",
      value: "anupamkumar46511@gmail.com",
      link: "mailto:anupamkumar46511@gmail.com"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.59531 1.99522 8.06679 2.16708 8.43376 2.48353C8.80073 2.79999 9.03996 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.89391 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5865 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Phone",
      value: "+91 7464078721",
      link: "tel:+917464078721"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.3639 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Location",
      value: "Pune, Maharashtra, India",
      link: "https://maps.google.com/?q=Pune,Maharashtra,India"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 19C4 20.5 4 16.5 2 16M22 16V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H18.9C18.63 21 18.36 20.99 18.1 20.97C17.84 20.95 17.58 20.92 17.33 20.88C17.08 20.84 16.83 20.79 16.59 20.73C16.35 20.67 16.12 20.61 15.89 20.54C15.66 20.47 15.44 20.39 15.23 20.31C15.02 20.23 14.82 20.14 14.63 20.05C14.44 19.96 14.26 19.86 14.09 19.76C13.92 19.66 13.76 19.55 13.61 19.44C13.46 19.33 13.32 19.21 13.19 19.09C13.06 18.97 12.94 18.84 12.83 18.71C12.72 18.58 12.62 18.44 12.53 18.3C12.44 18.16 12.36 18.01 12.29 17.86C12.22 17.71 12.16 17.55 12.11 17.39C12.06 17.23 12.02 17.06 11.99 16.89C11.96 16.72 11.94 16.54 11.93 16.36C11.92 16.18 11.92 16 11.93 15.82C11.94 15.64 11.96 15.46 11.99 15.29C12.02 15.12 12.06 14.95 12.11 14.79C12.16 14.63 12.22 14.47 12.29 14.32C12.36 14.17 12.44 14.02 12.53 13.88C12.62 13.74 12.72 13.6 12.83 13.47C12.94 13.34 13.06 13.21 13.19 13.09C13.32 12.97 13.46 12.85 13.61 12.74C13.76 12.63 13.92 12.52 14.09 12.42C14.26 12.32 14.44 12.22 14.63 12.13C14.82 12.04 15.02 11.95 15.23 11.87C15.44 11.79 15.66 11.71 15.89 11.64C16.12 11.57 16.35 11.51 16.59 11.45C16.83 11.39 17.08 11.34 17.33 11.3C17.58 11.26 17.84 11.23 18.1 11.21C18.36 11.19 18.63 11.18 18.9 11.18H20C20.5304 11.18 21.0391 11.3907 21.4142 11.7658C21.7893 12.1409 22 12.6496 22 13.18V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      link: "https://github.com/Anupam4058"
    },
    {
      name: "LinkedIn",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M16 8C18.2091 8 20 9.79086 20 12V21H16V12C16 11.4696 15.7893 10.9609 15.4142 10.5858C15.0391 10.2107 14.5304 10 14 10C13.4696 10 12.9609 10.2107 12.5858 10.5858C12.2107 10.9609 12 11.4696 12 12V21H8V8H12V9.5C12.5 8.5 13.5 8 14.5 8H16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      link: "https://linkedin.com/in/anupam-kumar-singh"
    },
    {
      name: "Twitter",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.95718 14.8821 3.28445C14.0247 3.61172 13.2884 4.19439 12.773 4.95372C12.2575 5.71305 11.9877 6.61232 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39525C5.36074 6.60469 4.01032 5.43866 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      link: "https://twitter.com/anupamkumar"
    }
  ];

  return (
    <motion.section 
      className="contact"
      ref={ref}
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container">
        {/* Header */}
        <motion.div className="contact-header" variants={itemVariants}>
          <h2 className="section-title">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="subtitle">
            Ready to start your next project? Let&apos;s discuss how I can help bring your ideas to life.
          </p>
        </motion.div>

        <div className="contact-content">
          {/* Contact Info */}
          <motion.div className="contact-info" variants={itemVariants}>
            <div className="info-header">
              <h3>Let&apos;s Connect</h3>
              <p>I&apos;m always excited to work on new projects and collaborate with amazing people.</p>
            </div>

            <div className="contact-methods">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  className="contact-method"
                  whileHover={{ scale: 1.05, x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="method-icon">
                    {info.icon}
                  </div>
                  <div className="method-content">
                    <h4>{info.title}</h4>
                    <span>{info.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="social-section">
              <h4>Follow Me</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                    <span>{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div className="contact-form" variants={formVariants}>
            <div className="form-header">
              <h3>Send a Message</h3>
              <p>Fill out the form below and I'll get back to you as soon as possible.</p>
            </div>

            <motion.form
              ref={formRef}
              onSubmit={sendEmail}
              className="form"
              role="form"
              aria-label="Contact form"
            >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <motion.input 
                  type="text" 
                  id="name"
                  name="name"
                  required 
                  placeholder="Your full name"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <motion.input 
                  type="email" 
                  id="email"
                  name="email"
                  required 
                  placeholder="your.email@example.com"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <motion.input 
                  type="text" 
                  id="subject"
                  name="subject"
                  required 
                  placeholder="What's this about?"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <motion.textarea 
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="Tell me about your project..."
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <motion.button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={isSubmitting ? "Sending message..." : "Send message"}
                aria-describedby="form-status"
              >
                {isSubmitting ? (
                  <>
                    <svg className="spinner" width="20" height="20" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.3"/>
                      <path d="M12 2C13.3132 2 14.6136 2.25866 15.8268 2.7612C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7362 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              <div id="form-status" role="status" aria-live="polite">
                {error && (
                  <motion.div 
                    className="status-message error"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    role="alert"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <line x1="15" y1="9" x2="9" y2="15" stroke="currentColor" strokeWidth="2"/>
                      <line x1="9" y1="9" x2="15" y2="15" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span>Failed to send message. Please try again.</span>
                  </motion.div>
                )}

                {success && (
                  <motion.div 
                    className="status-message success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    role="alert"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.7088 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2401 3.61096 17.4381C2.43727 15.636 1.87979 13.508 2.02168 11.3603C2.16356 9.21267 2.99721 7.16915 4.39828 5.49706C5.79935 3.82496 7.69279 2.61013 9.79619 2.01811C11.8996 1.42609 14.1003 1.48699 16.17 2.193" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="22,4 12,14.01 9,11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}
              </div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
