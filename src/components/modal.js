import React from "react";
import "../styles/modal.css";

export default function Modal({ height, opacity, display }) {
  return (
    <div
      style={{
        height: `${height}%`,
      }}
      className="container"
    >
      <div
        className="intro"
        style={{
          opacity: opacity,
          display: display,
        }}
      >
        <h1 className="name">Salman Creations</h1>
        <div className="fadingEffect"></div>
      </div>
    </div>
  );
}
