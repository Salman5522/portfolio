import React from 'react'
import '../styles/navlinks.css'
// import { TiSocialLinkedin } from "react-icons/ti";
import { IoLogoFacebook } from "react-icons/io";
import { TbBrandInstagram } from "react-icons/tb";
import { IconContext } from "react-icons";

export default function SocialIcons() {
  return (
    <div className="social-icons">
      {/* <IconContext.Provider value={{ className: "social-icon" }}>
            <TiSocialLinkedin />
          </IconContext.Provider> */}
      <IconContext.Provider value={{ className: "social-icon" }}>
        <IoLogoFacebook />
      </IconContext.Provider>
      <IconContext.Provider value={{ className: "social-icon" }}>
        <TbBrandInstagram />
      </IconContext.Provider>
    </div>
  );
}
