import React from "react";
import NavigationBar from "../navbar";
import Footer from "../footer";

const GlobalLayout = ({ children }) => {
  return (
    <>
      <NavigationBar />
      <section className="text-sealBrown overflow-hidden pt-24 pb-11 min-h-[90vh]">
        {children}
      </section>
      <Footer />
    </>
  );
};

export default GlobalLayout;
