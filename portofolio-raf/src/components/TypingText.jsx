import React from "react";
import useTypingEffect from "../hooks/animation/useTypingEffect";

export default function TypingText({ words = ["Frontend Developer", "Backend Developer", "Web Developer"], className = "" }) {
  const text = useTypingEffect(words, 100);

  return (
    <h3 className={className}>
      {text}
      <span className="cursor">|</span>
    </h3>
  );
}
