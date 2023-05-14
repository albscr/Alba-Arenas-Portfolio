import React from "react";
import { motion } from "framer-motion";
import "../styles/HomePage.css";

function HomePage() {
  return (
    <>
      <div className="header">
        <motion.div
          className="header-container"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 1.2, ease: "easeInOut", delay: .5 },
          }}
        >
          <h1>Alba</h1>
          <h1>Arenas</h1>
          <p className="typewriter-text">Frontend Developer</p>
        </motion.div>
        <motion.span
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 1.2, ease: "easeInOut"},
        }}
        >01</motion.span>
      </div>
    </>
  );
}

export { HomePage };
