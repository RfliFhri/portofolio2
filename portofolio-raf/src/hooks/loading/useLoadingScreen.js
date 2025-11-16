import { useEffect } from "react";

export default function useLoadingScreen() {

  useEffect(() => {
    const loadingText = document.getElementById("loading-text");
    const mainIcon = document.querySelector(".main-icon");
    const subIcons = document.querySelectorAll(".sub-icons i");
    const designerText = document.getElementById("designer-text");
    const mainPage = document.getElementById("main-page");
    const loadingScreen = document.getElementById("loading-screen");

    function showElement(element, delay = 0) {
      setTimeout(() => {
        if (!element) return;
        element.classList.remove("hidden");
        element.classList.add("fall");
      }, delay);
    }

    showElement(loadingText, 0);
    showElement(mainIcon, 800);

    subIcons.forEach((icon, idx) => {
      showElement(icon, 1600 + idx * 400);
    });

    showElement(designerText, 2800);

    // Hide loading screen
    const hide = setTimeout(() => {
      if (loadingScreen) {
        loadingScreen.style.opacity = "0";

        setTimeout(() => {
          loadingScreen.style.display = "none";
        }, 500);
      }

      mainPage?.classList.add("visible");
    }, 4000);

    return () => clearTimeout(hide);
  }, []);
}
