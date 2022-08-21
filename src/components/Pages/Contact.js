import React from "react";
import "../../styles/contact.css";
import {useAppContext} from '../Context'
import SocialIcons from "../social-icons";

export default function Contact() {

  const {navItemsSetting} = useAppContext();
  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <h1>CONATCT ME</h1>

        <div className="gap">
          <h2>Interested in working with me?</h2>

          <p>Contact me on Gmail directly without any hesitation, Thank You!</p>
          <div className="center"
            style={{
              opacity: navItemsSetting.opacity,
              // display: navItemsSetting.display === "flex" ? "none" : "flex",
            }}
          >
            <a href="mailto:salman.chaudry111@gmail.com">
              salman.chaudry111@gmail.com
            </a>
            <SocialIcons />
          </div>
        </div>
      </div>
    </div>
  );
}
