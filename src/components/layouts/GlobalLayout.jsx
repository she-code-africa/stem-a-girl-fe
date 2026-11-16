import React, { useEffect, useState } from "react";
import NavigationBar from "../navbar";
import Footer from "../footer";
import { FaArrowUp } from "react-icons/fa6";

const GlobalLayout = ({ children }) => {
  const [showGoTop, setShowGoTop] = useState(false);

  const handleScrollUp = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleVisibleButton = () => {
      setShowGoTop(window.scrollY > 100);
    };

    handleVisibleButton();
    window.addEventListener("scroll", handleVisibleButton);

    return () => {
      window.removeEventListener("scroll", handleVisibleButton);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <NavigationBar />

      <main className="flex-1  w-full text-sealBrown">{children}</main>

      <div
        className={`w-full max-w-[50px] h-[50px] fixed bottom-[6%] z-[3] shadow-[6px_6px_6px_rgba(0,0,0,0.5)] overflow-hidden bg-primaryPink rounded-[50%] right-[1.5%] ${
          showGoTop ? "block" : "hidden"
        }`}
      >
        <button
          className="text-white w-full h-full flex items-center justify-center text-xl"
          onClick={handleScrollUp}
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default GlobalLayout;
