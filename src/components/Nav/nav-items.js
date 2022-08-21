import React from "react";
import "../../styles/nav-items.css";
import { ImCross } from "react-icons/im";
import { IconContext } from "react-icons";
import NavLinks from "./navlinks";


export default function NavItems({ navItemsSetting, setNavItemsSetting }) {

  const { width, display } = navItemsSetting;

  function CrossClick() {
    setNavItemsSetting({ width: 0, display: "none", opacity: 1});
  }

  return (
    <>
      <div
        style={{
          width: `${width}%`,
          //   opacity: opacity
        }}
        className='nav-items-container'
      >
        <div
          style={{
            display: display,
          }}
          className="cross"
          onClick={CrossClick}
        >
          <IconContext.Provider value={{ className: "cross-icon" }}>
            <ImCross />
          </IconContext.Provider>
        </div>

        <NavLinks display={display} />
      </div>
    </>
  );
}
