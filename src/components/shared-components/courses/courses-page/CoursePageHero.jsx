import React from "react";
import { IoCode } from "react-icons/io5";
import { FaRegClock, FaRegCircleCheck } from "react-icons/fa6";
import Ribbon from "../../icons/Ribbon";
import CourseProgress from "./CourseProgress";

const CoursePageHero = ({ title,paragraph,duration,weeks, totalCompleted,progress }) => {
  return (
    <section className="w-full bg-primaryPink  font-figtree">
      {/* min-h-[535px]  */}
      <div className="flex max-w-[1040px] mx-auto w-[90%] justify-center items-center py-[89.5px]">
        <article className="w-full">
          <h1 className="text-white flex w-full sm:flex-row flex-col  sm:items-center gap-1 sm:gap-5 lg:gap-10">
            <span className="flex justify-center  items-center w-full max-w-12 h-12 sm:max-w-14 sm:h-14 lg:max-w-20 lg:h-20 overflow-hidden rounded-xl lg:rounded-2xl bg-white/20 text-3xl sm:text-4xl lg:text-5xl">
              <IoCode />
            </span>

            <span className="text-[64px] lg:text-9xl lg:leading-[130px] md:text-8xl font-semibold inline-flex items-center ">
              {title}
            </span>
          </h1>

          <p className="mt-6 sm:mt-10 lg:mt-[50px] font-figtree text-white font-medium lg:text-2xl text-lg md:text-xl">
            {paragraph}
          </p>

          <ul className="w-full flex gap-6 flex-wrap items-center mt-6">
            <li className="flex w-auto gap-2 items-center text-white text-sm">
              <FaRegClock />
              <span className="font-inter inline-block text-sm">
                {duration}
              </span>
            </li>

            <li className="flex w-auto gap-2 items-center text-white text-sm">
              <Ribbon stroke="#ffffff" />
              <span className="font-inter inline-block text-sm">
                {weeks}
              </span>
            </li>

            <li className="flex w-auto gap-2 items-center text-white text-sm">
              <FaRegCircleCheck />
              <span className="font-inter inline-block text-sm">
               {totalCompleted} completed
              </span>
            </li>
          </ul>

          <div className="mt-6 w-full">
            <CourseProgress progress={progress} />
          </div>
        </article>
      </div>
    </section>
  );
};

export default CoursePageHero;
