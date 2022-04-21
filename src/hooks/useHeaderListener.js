import { useEffect, useRef, useState } from "react";

export const useHeaderListener = () => {
  const [isHeaderFixed, setFixedHeader] = useState(false);
  const introRef = useRef(null);
  useEffect(() => {
    function checkScroll() {
      if (window.scrollY > introRef.current.offsetHeight) {
        setFixedHeader(true);
      } else {
        setFixedHeader(false);
      }
    }
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, [introRef]);
  return [isHeaderFixed, introRef];
};
