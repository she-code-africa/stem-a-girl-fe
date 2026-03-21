import React from "react";
import LockIcon from "../../../icons/LockIcon";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const WeekCards = ({ roadmap }) => {
  return (
    <div className="w-full pb-6 pl-[52px] relative last:border-0 border-l border-l-[#FFB8E0]">
      {roadmap.completed || roadmap.status !== "locked" ? (
        <span className="inline-block h-7 w-7 rounded-full bg-white border-4 border-[#C1106A] absolute top-0 -left-[14px]"></span>
      ) : (
        <span className="inline-block bg-white  absolute top-0 -left-[14px]">
          <LockIcon />
        </span>
      )}

      <section
        className={`w-full border border-[#E5E7EB] shadow-[0_1px_2px_-1px_rgba(0,0,0,0.1),0_1px_3px_0px_rgba(0,0,0,0.1)] p-[26px] rounded-[14px] `}
      >
        <div
          className={`${roadmap.completed || roadmap.status !== "locked" ? "opacity-100" : "opacity-60"}`}
        >
          <div className="w-full flex justify-between gap-12 items-start">
            <article className="w-full ">
              <h4
                className={`font-figtree  text-lg sm:text-xl font-bold ${roadmap.completed || roadmap.status !== "locked" ? "text-darkBlue" : "text-customGrey"}`}
              >
                Week {roadmap.week}: {roadmap.title}
              </h4>

              <p className="mt-2.5 font-inter text-sm text-customGrey">
                Lorem ipsum dolor sit amet consectetur. Sollicitudin accumsan
                sem fusce dui porttitor enim volutpat etiam proin. Nunc
                fermentum dolor nunc euismod sollicitudin dolor et ipsum varius.
              </p>
            </article>
            <button
              className={`w-auto text-2xl ${roadmap.completed || roadmap.status !== "locked" ? "text-primaryPink" : "text-customGrey"}`}
            >
              <FaAngleDown />
              {/* <FaAngleUp /> */}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeekCards;
