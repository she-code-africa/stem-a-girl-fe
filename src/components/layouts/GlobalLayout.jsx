import React, { useEffect, useState } from "react";
import NavigationBar from "../navbar";
import Footer from "../footer";
import { FaArrowUp } from "react-icons/fa6";

const GlobalLayout = ({ children }) => {
  const [scrollPosition, setSrollPosition] = useState(0);
  const [showGoTop, setshowGoTop] = useState(false);

  const handleScrollUp = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleVisibleButton = () => {
      const position = window.scrollY;
      setSrollPosition(position);

      if (scrollPosition > 100) {
        return setshowGoTop(true);
      } else if (scrollPosition < 100) {
        return setshowGoTop(false);
      }
    };
    window.addEventListener("scroll", handleVisibleButton);
  }, [scrollPosition]);
  return (
    <>
      <NavigationBar />
      <section className="text-sealBrown overflow-hidden pt-24 pb-11 min-h-[90vh]">
        {children}
      </section>

      <div
        className={` w-full max-w-[50px] h-[50px] fixed bottom-[6%] z-[3] shadow-[6px_6px_6px_rgba(0,0,0,0.5)] overflow-hidden bg-primaryPink rounded-[50%] right-[1.5%] ${
          showGoTop ? "block" : "hidden"
        }`}
      >
        <button
          className="text-white w-full h-full flex items-center justify-center text-xl"
          onClick={handleScrollUp}
        >
          <FaArrowUp />
        </button>
      </div>
      <Footer />
    </>
  );
};

export default GlobalLayout;
