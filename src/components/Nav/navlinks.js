import React from "react";
import { Link } from "react-router-dom";

import "../../styles/navlinks.css";
import { useAppContext } from '../Context';
import SocialIcons from "../social-icons";

export default function NavLinks({ display }) {

  const {setNavItemsSetting} = useAppContext();

  function clickHandler(){
    setNavItemsSetting({width: 0, display: "none", opacity: 1})
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
        <p>
          <a href="mailto:salman.chaudry111@gmail.com">
            salman.chaudry111@gmail.com
          </a>
        </p>
      <SocialIcons />
      </div>
    </div>
  );
}
