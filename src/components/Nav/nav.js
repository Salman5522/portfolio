import React, { useState } from "react";
import { useEffect } from "react";
import "../../styles/nav.css";
import NavItems from "./nav-items";
import { useAppContext } from "../Context";

export default function Nav() {
  const DOCUMENT_HEIGHT = document.documentElement.offsetHeight;
  const ADJUSTMENT_VALUE = 800;
  const [progressBar, setProgressBar] = useState(0);
  const [height, setHeight] = useState(
    ((progressBar + ADJUSTMENT_VALUE) / DOCUMENT_HEIGHT) * 250
  );
  
  const {navItemsSetting, setNavItemsSetting} = useAppContext();

  useEffect(() => {
    const onScroll = () => {
      setProgressBar(window.pageYOffset);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setHeight(((progressBar + ADJUSTMENT_VALUE) / DOCUMENT_HEIGHT) * 250);
  }, [progressBar, DOCUMENT_HEIGHT]);

  function NavClick() {
    setNavItemsSetting({ width: 70, display: "flex" });
  }

  return (
    <div className="nav-container">
      <div className="logo">
        <img src={require("../../images/logo.jpg")} alt="Logo" />
      </div>
      <div className="nav-items">
        <NavItems
          navItemsSetting={navItemsSetting}
          setNavItemsSetting={setNavItemsSetting}
        />
      </div>

      <div onClick={NavClick} className="bars">
        <hr className="line line-one" />
        <hr className="line line-two" />
      </div>

      <div className="progress-line"></div>
      <div
        style={{
          height: height < 270 ? `${height}px` : `${50}px`,
        }}
        className="progress-line line-active"
      ></div>

    </div>
  );
}
