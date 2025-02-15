import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Lama Dev */}
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/anupam-kumar-singh-0b647224a/">
            <img src="/Linkedin.png" alt="" />
          </a>
          <a href="https://github.com/Anupam4058">
            <img src="/Github.webp" alt="" />
          </a>

          <a href="https://x.com/Anupam4058?t=A3v-Adh4cp1egzRle_9ZFA&s=09">
            <img src="/X.avif" alt="" />
          </a>
          <a href="#">
            <img src="/instagram.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
