import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../../assets/InternValley.png";
// import Logo from "../../../assets/logo3.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="logo-link">
          <img src={Logo} alt="logo" className="logo" />
          <span className="brand-name">InternValley</span>
        </a>

        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`menu-line ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`menu-line ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`menu-line ${isMenuOpen ? "open" : ""}`}></div>
        </div>
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/about">ABOUT</a>
          </li>
          <li>
            <a href="/service">SERVICES</a>
          </li>
          <li>
            <a href="/verify">VERIFY</a>
          </li>
          {/* <li><a href="/internships">INTERNSHIPS</a></li> */}
          <li>
            <a href="/contact">CONTACT</a>
          </li>
          <li>
            <a
              href="https://forms.gle/oCzJJa4dAwScZ8vs8"
              target="_blank"
              rel="noreferrer"
              class="btn-contact"
            >
              Apply
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
