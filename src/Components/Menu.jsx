import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Menu.css";

function Menu(props) {
  const [clicked, setClicked] = useState(false);
  const [visible, setVisible] = useState(true);
  const handleClick = () => {
    setClicked(!clicked);
    setVisible(!visible)
  };

  return (
    <div className="menu-container">
      <div
        className={`icon nav-icon-1 ${clicked ? "open" : ""}`}
        onClick={handleClick}
        
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
      </div>

      <ul
        className={`main-nav ${clicked ? "active" : ""}`}
      >
        <li>
          01<Link to="/"
          onClick={handleClick}> Home</Link>
        </li>
        <li>
          02<Link to="/about-me"
          onClick={handleClick}> About</Link>
        </li>
        <li>
          03<Link to="/projects"
          onClick={handleClick}> Projects</Link>
        </li>
        <li>
          04<Link to="/contact"
          onClick={handleClick}> Contact</Link>
        </li>
      <p>2023©</p>
      </ul>
    </div>
  ); 
}

export { Menu };
