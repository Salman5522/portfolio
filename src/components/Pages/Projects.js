import React from "react";
import "../../styles/mood-board.css";
import { CgMathPlus } from "react-icons/cg";

export default function Projects() {
  return (
    <>
      <section className="mood-board-container">
        <div className="mood-board-container-top">
          <div className="logo-designing">
            <h1 className="numbering">01</h1>

            <div className="logo-designing-title">Logo Designing</div>

            <div className="logo-designing-body">
              <h1 className="logo-designing-heading">
                Here is the process of my logo creation.
              </h1>

              <p>
                <span>Firstly,</span> I create a mood board on pinterest for
                clients so they can understand what we are making through.
              </p>
              <p>
                <span>Secondly,</span> I draw some sort of sketches and find
                which will be the best suitable according to market and clients
                industry to gain more target audience.
              </p>
            </div>
          </div>

          <div className="mood-board">
            <h1 class="mood-board-title">MOOD BOARD</h1>

            <div className="basic-info-container">
              <div className="basic-info-title">
                <CgMathPlus />
                <span>Some Basic Info</span>
                <CgMathPlus />
              </div>

              <div className="basic-info-body">
                <p>
                  This is basically created to visualize the client how their
                  product will interact with the audience and their respective
                  competitors. Mood board includes color pallete, typography,
                  mockups and so on
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="catalogue">
          <div className="image-top">
            <img
              src={require("../../images/projects-pics/Evolve - Logo Template landscape.jpg")}
              alt="evolve pic"
            />
          </div>

          <div className="image-bottom">
            <img
              src={require("../../images/projects-pics/Sonic Arrow Logo.png")}
              alt="evolve pic"
            />
          </div>

          <div className="image-triangle-top-left">
            <img
              src={require("../../images/projects-pics/10 Dynamic Palettes for Tech Branding and Logos.png")}
              alt="Tech Branding"
            />
          </div>

          <div className="image-triangle-bottom-left">
            <img
              src={require("../../images/projects-pics/Letter S - Network Technology Logo design.png")}
              alt="Network Technology"
            />
          </div>
        </div>
      </section>
    </>
  );
}
