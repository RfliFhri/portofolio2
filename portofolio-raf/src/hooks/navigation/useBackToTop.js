import { useEffect, useState } from "react";

/**
 * Simple hook returns boolean whether to show back-to-top
 */
export default function useBackToTop(threshold = 500) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > threshold);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return show;
}
