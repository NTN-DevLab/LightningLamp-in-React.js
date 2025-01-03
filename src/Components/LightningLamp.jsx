
import React, { useState } from "react";
import "./LightningLamp.css";

export default function FrostedGlassEffect() {
  const [brightness, setBrightness] = useState(50);

  return (
    <div className="lamp-container">
      <div className="lamp-bar">
        <div className="lamp-cord"></div>
        <div className="lamp">
          <div
            className="bulb"
            style={{
              opacity: brightness / 100,
            }}
          ></div>
        </div>
        <div className="lamp-bottom">
          <div className="light"
          style={{
            opacity: brightness / 100,
          }}
          ></div>
        </div>
        <div
          className="light-cone"
          style={{
            opacity: brightness / 100,
          }}
        ></div>
      </div>

      <div className="slider-container">
        <input
          type="range"
          min="0"
          max="100"
          value={brightness}
          onChange={(e) => setBrightness(Number(e.target.value))}
          className="slider"
        />
      </div>
    </div>
  );
}

