import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="
            fixed
            bottom-8
            right-8
            z-50
            bg-cyan-400
            text-slate-900
            p-4
            rounded-full
            shadow-lg
            hover:scale-110
            hover:bg-cyan-300
            transition-all
            duration-300
          "
        >
          <FaArrowUp size={18} />
        </button>
      )}
    </>
  );
};

export default BackToTop;