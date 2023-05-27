import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Menu.css";

function Menu() {
  const [clicked, setClicked] = useState(false);
  const [visible, setVisible] = useState(true);

  const [currentPath, setCurrentPath] = useState("/");
  const location = useLocation();

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  const handleClick = () => {
    setClicked(!clicked);
    setVisible(!visible)
  };

  return (
    <div className="menu-container">
      <div className="menu-mobile">
        <motion.div
          className={`icon nav-icon-1 ${clicked ? "open" : ""}`}
          onClick={handleClick}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 1, ease: "easeIn" },
          }}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </motion.div>

        <ul className={`main-nav ${clicked ? "active" : ""}`}>
          <li>
            01
            <Link to="/" onClick={handleClick}>
              {" "}
              Home
            </Link>
          </li>
          <li>
            02
            <Link to="/about-me" onClick={handleClick}>
              {" "}
              About
            </Link>
          </li>
          <li>
            03
            <Link to="/projects" onClick={handleClick}>
              {" "}
              Projects
            </Link>
          </li>
          <li>
            04
            <Link to="/contact" onClick={handleClick}>
              {" "}
              Contact
            </Link>
          </li>
          <p>2023©</p>
        </ul>
      </div>

      <motion.ul
        className="nav-desktop"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 1, ease: "easeIn", delay: 1 },
        }}
      >
        <li>
          {currentPath === "/" ? (
            <span className="circle"></span>
          ) : (
            <Link to="/" onClick={handleClick}>
              {" "}
              Home
            </Link>
          )}
        </li>
        <li>
          {currentPath === "/about-me" ? (
            <span className="circle"></span>
          ) : (
            <Link to="/about-me" onClick={handleClick}>
              {" "}
              About
            </Link>
          )}
        </li>
        <li>
          {currentPath === "/projects" ? (
            <span className="circle"></span>
          ) : (
            <Link to="/projects" onClick={handleClick}>
              {" "}
              Projects
            </Link>
          )}
        </li>
        <li>
          {currentPath === "/contact" ? (
            <span className="circle"></span>
          ) : (
            <Link to="/contact" onClick={handleClick}>
              {" "}
              Contact
            </Link>
          )}
        </li>
      </motion.ul>
    </div>
  );
}

export { Menu };
