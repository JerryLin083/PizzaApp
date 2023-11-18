import { useEffect, useState } from "react";

const useToTop = () => {
  const [scroll, setScroll] = useState(0);
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(false);
    window.scrollTo({ behavior: "smooth", top: 0 });
  };

  useEffect(() => {
    const checkSize = () => {
      setScroll(window.scrollY);

      if (scroll > 500) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    document.addEventListener("scroll", checkSize);

    return () => document.removeEventListener("scroll", checkSize);
  }, [scroll]);

  return { show, handleClick };
};

export default useToTop;
