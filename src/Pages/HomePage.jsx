import React from "react";
import { motion } from "framer-motion";
import "../styles/HomePage.css";

function HomePage() {
  return (
    <>
      <div className="header">
        <div className="header-container">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 1, ease: "easeIn", delay: 0.1 },
            }}
          >
            Alba Arenas
          </motion.h1>

          <motion.p
            className="position"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 1, ease: "easeIn", delay: 0.5 },
            }}
          >
            Frontend Developer
          </motion.p>
        </div>
      </div>
    </>
  );
}

export { HomePage };
