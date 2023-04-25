import React from "react";
import { Title } from "../Components/Title";
import "../styles/Contact.css";
import { motion } from "framer-motion";

function Contact() {
  return (
    <>
      <div className="container-contact">
        <Title title="Contact" />
        <motion.div
          className="content-contact"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 100,
            transition: { duration: 1.2, ease: "easeInOut" },
          }}
          transition={{ delay: 2 }}
        >
          <div className="left">
            <h1>Hello.</h1>
            <p>
              {" "}
              I am confident that I can bring a unique and valuable perspective
              to your team. Please do not hesitate to contact me for more
              information on my qualifications and availability. I look forward
              to hearing from you soon.
            </p>
          </div>
          <div className="right">
            <h3>Mail</h3>
            <a
              href="mailto:albacecilia10@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              albacecilia10@gmail.com
            </a>
            <h3>Social Media</h3>
            <a
              href="https://www.instagram.com/albscr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/albaarenasnavarro/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
            <a
              href="https://github.com/albscr"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export { Contact };
