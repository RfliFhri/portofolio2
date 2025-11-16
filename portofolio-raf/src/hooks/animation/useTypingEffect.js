import { useEffect, useState, useRef } from "react";

/**
 * Hook returns the text to render (partial) for typing effect.
 * Usage: const text = useTypingEffect(['A','B'], 100);
 */
export default function useTypingEffect(words = ["Frontend Developer", "Backend Developer", "Web Developer"], typingSpeed = 100) {
  const [text, setText] = useState("");
  const wordIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const deletingRef = useRef(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    function tick() {
      const currentWord = words[wordIndexRef.current];
      if (!deletingRef.current && charIndexRef.current < currentWord.length) {
        charIndexRef.current += 1;
        setText(currentWord.substring(0, charIndexRef.current));
        timeoutRef.current = setTimeout(tick, typingSpeed);
      } else if (deletingRef.current && charIndexRef.current > 0) {
        charIndexRef.current -= 1;
        setText(currentWord.substring(0, charIndexRef.current));
        timeoutRef.current = setTimeout(tick, typingSpeed / 2);
      } else {
        // switch mode
        if (!deletingRef.current) {
          deletingRef.current = true;
          timeoutRef.current = setTimeout(tick, 1000);
        } else {
          deletingRef.current = false;
          wordIndexRef.current = (wordIndexRef.current + 1) % words.length;
          timeoutRef.current = setTimeout(tick, 500);
        }
      }
    }

    timeoutRef.current = setTimeout(tick, 70);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [words, typingSpeed]);

  return text;
}
