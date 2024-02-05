import LOGO_Light from "../assets/header-logo-light.png";
import LOGO_dark from "../assets/header-logo-dark.png";
import { useState } from "react";
import "../pages/home/css/Style.scss";
import { Link } from "react-router-dom";
import { MdLightMode , MdDarkMode } from "react-icons/md";

function Header() {
  const [mode, setMode] = useState("light");
  const linkstyle = {
    textDecoration: "none",
    color: "#4a4a4a",
  };
  const btnstyle = {
    color: "#2e6f79",
    fontWeight: "bold",
  };
  return (
    <div className="">
      <div className="header-bar">
        <div className="logo">
          <img src={LOGO_Light} alt="" />
        </div>
        <div className="menu-bar">
          <ul>
            <li>
              <Link to={"/tutorial"} style={linkstyle}>
                How it Works
              </Link>
            </li>
            <li>
              <Link to={"/feedback"} style={linkstyle}>
                Feedback
              </Link>
            </li>
            <li className="menu-btn">
              <span>
                <Link to={"/login"} style={{...linkstyle, ...btnstyle}}>
                  Login
                </Link>
              </span>
              /
              <span>
                <Link to={"/signup"} style={{...linkstyle, ...btnstyle}}>
                  Register
                </Link>
              </span>
            </li>
            <li>
              <MdLightMode size={"20"} color="#4a4a4a" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
