import LOGO_Light from "../assets/header-logo-light.png";
import LOGO_dark from "../assets/header-logo-dark.png";
import { useState } from "react";
import "../pages/home/css/Style.scss";
import { Link } from "react-router-dom";

function Header() {
    const linkstyle={
        textDecoration: "none",
        color: "#4a4a4a"
    }
  return (
    <div className="container">
      <div className="header-bar">
        <div className="logo">
          <img src={LOGO_Light} alt="" />
        </div>
        <div className="menu-bar">
          <ul>
            <li>
              <Link to={'/tutorial'} style={linkstyle} >How it Works</Link>
            </li>
            <li>
              <Link to={'/feedback'} style={linkstyle}>Feedback</Link>
            </li>
            <li>
              <span>
                <Link to={'/login'} style={linkstyle}>Login</Link>
              </span>
              /
              <span>
                <Link to={'/signup'} style={linkstyle}>Register</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
