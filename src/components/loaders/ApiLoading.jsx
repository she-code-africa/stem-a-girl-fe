import React from "react";

const ApiLoading = () => {
  return (
    <section className="w-full my-10">
      <div className="w-[90%] mx-auto flex gap-5 justify-center">
        {[...Array(3)].map((item, i) => {
          return (
            <div
              className={`h-[500px] w-full bg-[#eee] rounded-xl relative custom-skeleton ${
                i === 1 && "hidden sm:flex"
              } ${i === 2 && "hidden lg:flex"}`}
              key={i}
            ></div>
          );
        })}
      </div>
    </section>
  );
};

export default ApiLoading;
