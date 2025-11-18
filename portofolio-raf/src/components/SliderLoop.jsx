import React, { useRef, useEffect, useState } from "react";
import "../pages/Capabilities.css";

export default function SliderLoop({ icons = [], duration = 20 }) {
  const trackRef = useRef(null);
  const [trackWidth, setTrackWidth] = useState(0);

  useEffect(() => {
    if (!trackRef.current) return;

    const width = trackRef.current.scrollWidth;
    setTrackWidth(width);
  }, [icons]);

  return (
    <div
      className="slider"
      style={{ "--duration": `${duration}s`, "--track-width": `${trackWidth}px` }}
    >
      <div className="slide-track" ref={trackRef}>
        {icons.map((src, i) => (
          <div className="slide-item" key={i}>
            <img src={src} alt={`tech-${i}`} />
          </div>
        ))}
      </div>

      {/* duplicate */}
      <div className="slide-track clone">
        {icons.map((src, i) => (
          <div className="slide-item" key={`clone-${i}`}>
            <img src={src} alt={`tech-${i}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
