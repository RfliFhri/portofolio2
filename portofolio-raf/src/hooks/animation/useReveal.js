import { useEffect } from "react";

/**
 * Adds 'active-reveal' to elements when they enter viewport.
 * Selector is customizable; default matches your original elements.
 */
export default function useReveal(selector = ".about-container, .projects-container, .services-container, .contact-content", revealPoint = 150) {
  useEffect(() => {
    const els = () => document.querySelectorAll(selector);

    function revealOnScroll() {
      els().forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - revealPoint) {
          el.classList.add("active-reveal");
        }
      });
    }

    window.addEventListener("scroll", revealOnScroll);
    // run once to reveal items already in view
    revealOnScroll();

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, [selector, revealPoint]);
}
