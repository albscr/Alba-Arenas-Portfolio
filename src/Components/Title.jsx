import React from "react";
import { motion } from "framer-motion";
import "../styles/Title.css";

function Title(props) {
  return (
    <>
      <motion.h1
        className="title"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 1.2, ease: "easeInOut", delay: 1 },
        }}
      >
        {props.title}
      </motion.h1>
    </>
  );
}

export { Title };
