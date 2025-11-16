import React from "react";
import useBackToTop from "../hooks/navigation/useBackToTop";

export default function BackToTop() {
  const show = useBackToTop(500);

  const style = {
    position: "fixed",
    bottom: 40,
    right: 40,
    background: "#474af0",
    color: "white",
    width: 50,
    height: 50,
    borderRadius: "50%",
    display: show ? "flex" : "none",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    zIndex: 1000,
    transition: "transform 0.3s ease",
  };

  return (
    <div
      id="back-to-top"
      style={style}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      onMouseOver={e => (e.currentTarget.style.transform = "scale(1.2)")}
      onMouseOut={e => (e.currentTarget.style.transform = "scale(1)")}
      aria-hidden={!show}
    >
      <i className="fa-solid fa-chevron-up" />
    </div>
  );
}
