import React from "react";

const index = ({ text }) => {
  return (
    <>
      <section className="w-full text-center my-10">
        <h3 className="text-xl md:text-2xl text-primaryPink">
          There is currently no {text} available.
        </h3>
      </section>
    </>
  );
};

export default index;
