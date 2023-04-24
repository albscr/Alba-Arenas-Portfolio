import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./Components/Menu";
import { AboutMe } from "./Pages/AboutMe";
import { Contact } from "./Pages/Contact";
import { HomePage } from "./Pages/HomePage";
import { NotFound } from "./Pages/NotFound";
import { Projects } from "./Pages/Projects";


function App() {
  return (
    <>
      <HashRouter>
        <Menu />

        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about-me" element={<AboutMe/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </HashRouter>
    </>

  );
}

export default App;
