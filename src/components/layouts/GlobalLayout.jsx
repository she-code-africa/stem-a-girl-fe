import React from "react";
import NavigationBar from "../navbar";
import Footer from "../footer";

const GlobalLayout = ({ children }) => {
  return (
    <>
      <NavigationBar />
      <section className="w-[90%] max-w-[1280px] mx-auto text-sealBrown overflow-hidden py-24 min-h-[90vh]">
        {children}
      </section>
      <Footer />
    </>
  );
};

export default GlobalLayout;
