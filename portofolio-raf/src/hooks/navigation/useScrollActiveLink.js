import { useEffect } from "react";

/**
 * Tracks scroll and toggles 'active' class on corresponding nav link parent <li>.
 * Expects anchors like <li><a href="#section-id">...</a></li> inside .ul-list
 */
export default function useScrollActiveLink(offset = 100) {
  useEffect(() => {
    const navLinks = () => document.querySelectorAll(".ul-list li a");
    const sections = () => document.querySelectorAll("section");

    function removeActive() {
      navLinks().forEach(link => link.parentElement?.classList.remove("active"));
    }

    function onScroll() {
      const scrollPos = window.scrollY + offset;
      sections().forEach(section => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        if (scrollPos >= top && scrollPos < bottom) {
          removeActive();
          const activeLink = document.querySelector(`.ul-list li a[href="#${section.id}"]`);
          if (activeLink) activeLink.parentElement?.classList.add("active");
        }
      });
    }

    // attach click handlers for smooth scroll
    function attachClickHandlers() {
      navLinks().forEach(link => {
        // remove any existing to avoid double-binding
        link.removeEventListener("click", link._smoothHandler);
        const handler = e => {
          e.preventDefault();
          const targetId = link.getAttribute("href").substring(1);
          const target = document.getElementById(targetId);
          if (!target) return;
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: "smooth",
          });
          removeActive();
          link.parentElement?.classList.add("active");
        };
        link._smoothHandler = handler;
        link.addEventListener("click", handler);
      });
    }

    attachClickHandlers();
    window.addEventListener("scroll", onScroll);
    // initial trigger
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      navLinks().forEach(link => {
        if (link._smoothHandler) {
          link.removeEventListener("click", link._smoothHandler);
          delete link._smoothHandler;
        }
      });
    };
  }, [offset]);
}
