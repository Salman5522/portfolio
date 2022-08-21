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
        <a href="https://www.facebook.com/profile.php?id=100083154233339">
          <IoLogoFacebook />
        </a>
      </IconContext.Provider>
      <IconContext.Provider value={{ className: "social-icon" }}>
        <a href="https://www.instagram.com/p/ChF_UhpsmnD/?igshid=YmMyMTA2M2Y=">
          <TbBrandInstagram />
        </a>
      </IconContext.Provider>
    </div>
  );
}
