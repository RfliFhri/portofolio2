import { useEffect } from "react";

/**
 * Adds simple hover transform to cards using inline style.
 * Selector defaults to your classes: .project-card, .c1, .service-card
 */
export default function useHoverCard(selector = ".project-card, .c1, .service-card") {
  useEffect(() => {
    const cards = document.querySelectorAll(selector);
    if (!cards.length) return;

    function onEnter(e) {
      e.currentTarget.style.transform = "translateY(-8px) scale(1.05)";
      e.currentTarget.style.transition = "transform 0.25s ease";
    }
    function onLeave(e) {
      e.currentTarget.style.transform = "translateY(0) scale(1)";
    }

    cards.forEach(card => {
      card.addEventListener("mouseenter", onEnter);
      card.addEventListener("mouseleave", onLeave);
    });

    return () => {
      cards.forEach(card => {
        card.removeEventListener("mouseenter", onEnter);
        card.removeEventListener("mouseleave", onLeave);
      });
    };
  }, [selector]);
}
