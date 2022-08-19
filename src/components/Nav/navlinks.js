import React from "react";
import { Link } from "react-router-dom";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaBehance } from "react-icons/fa";
import { TbBrandInstagram } from "react-icons/tb";
import { IconContext } from "react-icons";
import "../../styles/navlinks.css";
import { useAppContext } from '../Context';

export default function NavLinks({ display }) {

  const {navItemsSetting, setNavItemsSetting} = useAppContext();

  function clickHandler(){
    setNavItemsSetting({width: 0, display: "none"})
  }
  return (
    <div
      style={{
        display: display,
      }}
      className="navlinks"
    >
      <ul>
        <li>
          <Link to="/" onClick={clickHandler}>
            <div>01.</div> <div className="page">Home</div>
          </Link>
        </li>
        <li>
          <Link to="/projects" onClick={clickHandler}>
            <div>02.</div> <div className="page">Projects</div>
          </Link>
        </li>
        <li>
          <Link to="/skills" onClick={clickHandler}>
            <div>03.</div> <div className="page">Skills</div>
          </Link>
        </li>
        <li>
          <Link to="/experience" onClick={clickHandler}>
            <div>04.</div> <div className="page">Experience</div>
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={clickHandler}>
            <div>05.</div> <div className="page">Contact</div>
          </Link>
        </li>
      </ul>

      <div className="vertical-line"></div>

      <div className="contact-info">
        <p>salman.chaudry111@gmail.com</p>
        <div className="social-icons">
          <IconContext.Provider value={{ className: "social-icon" }}>
            <TiSocialLinkedin />
          </IconContext.Provider>
          <IconContext.Provider value={{ className: "social-icon" }}>
            <FaBehance />
          </IconContext.Provider>
          <IconContext.Provider value={{ className: "social-icon" }}>
            <TbBrandInstagram />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}
