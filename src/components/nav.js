import React from "react";
import "./style.css";
import logo from "../images/logo.png";
import { useState } from "react";

export default function Nav() {
  const [close, setClose] = useState(true);

  const onClose = () => {
    setClose(true)
  }

  const onOpen = () => {
    setClose(false)
  }

  return (
    <nav className="navbar flex">
      {/* Navigation bar logo div */}
      <div className="logo">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      {/* Navigation bar component list  */}
      <div className={`nav-components ${close ? "d-none" : "d-flex"}`}>
        <div className="close-btn" onClick={onClose}>
          <img
            src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-512.png"
            alt="close icon"
          />
        </div>
        <ul className="flex">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/course">Labs</a>
          </li>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
      </div>
      {/* Menu bar for mobile devices */}
    <div className="menu-bar" onClick={onOpen}>
        <img
          src="https://img.icons8.com/carbon-copy/2x/menu.png"
          alt="menu-bar"
        />
      </div>
    </nav>
  );
}
