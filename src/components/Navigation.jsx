import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header id="header" className="testing">
      <button className="menu-toggle" type="button" aria-expanded={isOpen} aria-controls="primary-navigation" onClick={() => setIsOpen(!isOpen)}>
        <span aria-hidden="true">{isOpen ? "×" : "☰"}</span> Menu
      </button>
      <nav id="primary-navigation" className={`links${isOpen ? " links--open" : ""}`} style={{ "--items": 5 }} onClick={(event) => {
        if (event.target.closest("a")) setIsOpen(false);
      }}>
        <a href="#container">Home</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#services">Past-Projects</a>
        <a href="#contact">Contact</a>
        <span className="line" />
      </nav>
    </header>
  );
}
