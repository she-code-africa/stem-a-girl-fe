import React from "react";
import { scaLogo } from "../../assets/images";

const PageLoader = () => {
  return (
    <section className="w-full">
      <div className="w-full h-screen bg-white flex items-center justify-center py-5">
        <div className="w-[90%] mx-auto">
          <figure className="w-[150px] h-[150px] overflow-hidden mx-auto">
            <img
              src={scaLogo}
              alt="sca-logo"
              loading="eager"
              fetchPriority="high"
              className="w-full h-full object-contain"
            />
          </figure>

          <div className="flex gap-3 mt-4 items-center justify-center">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`w-2.5 h-2.5 rounded-full animate-pulse ${
                  i % 2 === 0 ? "bg-scaBloom" : "bg-primaryPink"
                }`}
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageLoader;
