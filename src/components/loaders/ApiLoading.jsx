import React from "react";

const ApiLoading = ({ variant = "three-column" }) => {
  if (variant === "two-column") {
    return (
      <section className="w-full my-10">
        <div className="w-[90%] max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white border border-[#E1E6ED] rounded-2xl shadow-sm p-4 flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden custom-skeleton h-[280px] w-full bg-[#eee]" />
              <div className="flex flex-col gap-2 px-1">
                <div className="h-4 w-1/3 bg-[#eee] rounded custom-skeleton" />
                <div className="h-3 w-2/3 bg-[#eee] rounded custom-skeleton" />
                <div className="flex items-center justify-between mt-2">
                  <div className="h-3 w-1/4 bg-[#eee] rounded custom-skeleton" />
                  <div className="h-8 w-28 bg-[#eee] rounded-lg custom-skeleton" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

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
