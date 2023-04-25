import React from "react";
import { motion } from "framer-motion";
import "../styles/Title.css";

function Title(props) {
  return (
    <>
      <motion.h1
        className="title"
        initial={{ x: "700px" }}
        animate={{
          x: "10px",
          transition: { duration: 1.2, ease: "easeInOut" },
        }}
      >
        {props.title}
      </motion.h1>
    </>
  );
}

export { Title };
