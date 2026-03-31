import React from "react";

const index = ({ text }) => {
  return (
    <>
      <section className="w-full text-center my-20">
        <h3 className="text-4xl md:text-[64px] text-primaryPink">
          There is currently no {text} available.
        </h3>
      </section>
    </>
  );
};

export default index;
