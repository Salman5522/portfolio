import React from "react";
import { Routes, Route } from "react-router-dom";
import Projects from "./components/Pages/Projects";
import Experience from "./components/Pages/Experience";
import Skills from "./components/Pages/Skills";
import Contact from "./components/Pages/Contact";
import Error from "./components/Pages/Error";
import Home from "./components/Pages/Home";
import Nav from "./components/Nav/nav";
import Footer from "./components/footer";

export default function App() {
  
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/experience" element={<Experience />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer/>
    </>
  );
}
