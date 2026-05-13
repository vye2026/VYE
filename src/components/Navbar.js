"use client";
import { useState } from "react";

const LOGO = "/assets/Logo.svg"

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={LOGO} alt="VYE Comms" />
        </div>
        <div className="navbar-links">
          <a href="#about">About VYE</a>
          <a href="#services">Our Services</a>
          <a href="#contact">Contact Us</a>
        </div>
        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <a href="#about" onClick={() => setOpen(false)}>About VYE</a>
        <a href="#services" onClick={() => setOpen(false)}>Our Services</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact Us</a>
      </div>
    </>
  );
}
