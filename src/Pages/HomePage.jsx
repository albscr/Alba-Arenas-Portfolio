import React from "react";
import { motion } from "framer-motion";
import "../styles/HomePage.css";

function HomePage() {
  return (
    <>
      <div className="header"              >
        <motion.div className="header-container"
        initial={{ x: "700px" }}
        animate={{ x: "10px", transition: { duration: 1.2, ease: "easeInOut" } }}
        >
          <h1>Alba</h1>
          <h1>Arenas</h1>
          <p className="typewriter-text">Frontend Developer</p>          
        </motion.div>
        <span>01</span>
      </div>
    </>
  );
}

export { HomePage };
