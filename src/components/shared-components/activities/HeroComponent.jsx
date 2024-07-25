import React from "react";
import { cpu, flower } from "../../../assets/images";

const HeroComponent = ({
  heroHeading,
  heroParagraph,
  heroImage,
  subContent,
}) => {
  return (
    <div className="w-full flex flex-col md:flex-row mt-12 gap-10 lg:gap-20 md:items-center md:justify-between">
      <article className="w-full md:max-w-[619px]">
        <h3 className="text-center md:text-left font-semibold text-3xl sm:text-4xl lg:text-[48px] leading-normal md:leading-normal mb-3 w-full md:max-w-[536px]">
          {heroHeading}
        </h3>
        <p className="text-astronaut text-base lg:text-xl lg:w-[85%] text-center md:text-left">
          {heroParagraph}
        </p>

        <div className="flex w-full max-w-[536px] mx-auto md:mx-0 bg-lavender p-4 lg:p-6 gap-5 rounded-lg md:rounded-2xl mt-7 lg:mt-14">
          <figure className="h-[25px] w-[25px] md:h-[40px] md:w-[40px]">
            <img src={cpu} alt="cpu-logo" className="w-full h-full" />
          </figure>

          <article className="w-fit">
            <h4 className="text-base md:text-lg font-semibold capitalize">
              Get Started Today!
            </h4>

            <ul className="mt-1 text-astronaut text-sm mx-6">
              {subContent.map((item, i) => (
                <li className="list-disc leading-normal" key={i}>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </article>

      <div className="lg:max-w-[530px] w-full z-0 ">
        <figure className="m-0 p-0 max-w-[514px] w-full rounded-3xl mx-auto lg:mx-0 relative z-[1]">
          <img
            src={heroImage}
            alt="coding-hero"
            className="w-full object-contain"
          />
          <div className="absolute w-[30px] h-[25px] lg:w-[53px] lg:h-[46px] -left-3 top-10 lg:-left-5">
            <img
              src={flower}
              alt="coding-hero"
              className="w-full object-contain"
            />
          </div>
        </figure>
      </div>
    </div>
  );
};

export default HeroComponent;
