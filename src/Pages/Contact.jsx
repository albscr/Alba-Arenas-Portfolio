import React from "react";
import { Title } from "../Components/Title";
import "../styles/Contact.css"

function Contact() {
  return (
    <>
      <div className="container-contact">
        <Title title="Contact" />
        <div className="content-contact">
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
            <a href="mailto:albacecilia10@gmail.com" target="_blank" rel="noopener noreferrer">albacecilia10@gmail.com</a>
            <h3>Social Media</h3>
            <a href="https://www.instagram.com/albscr/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.linkedin.com/in/albaarenasnavarro/" target="_blank" rel="noopener noreferrer">Linkedin</a>
            <a href="https://github.com/albscr" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </>
  );
}

export { Contact };
