import React from "react";
import CourseLevel from "../../icons/CourseLevel";
import Clock from "../../icons/Clock";
import Ribbon from "../../icons/Ribbon";
import PrimaryButton from "../../buttons/PrimaryButton";
import { FaArrowRight } from "react-icons/fa6";

const CourseCard = ({
  icon,
  customClass,
  title,
  description,
  level,
  duration,
  proficiency,
  url,
}) => {
  return (
    <div className="w-full border-[#E5E7EB] border-[0.8px] rounded-2xl overflow-hidden min-h-[474.59px] font-figtree">
      <div
        className={`w-full h-[128px] ${customClass} flex items-center justify-center`}
      >
        {icon}
      </div>

      <article className="w-full py-6 px-5">
        <h4 className="w-full text-primaryPink font-bold text-xl md:text-2xl font-figtree">
          {title}
        </h4>

        <p className="mt-5 w-full text-sm leading-[22px] text-customGrey">
          {description}
        </p>

        <ul className="mt-5 w-full space-y-3">
          <li className="flex items-center gap-3">
            <CourseLevel />

            <span className="inline-block text-customGrey text-sm">
              {level} level{level > 1 && "s"}
            </span>
          </li>
          <li className="flex items-center gap-3">
            <Clock />

            <span className="inline-block text-customGrey text-sm">
              {duration}
            </span>
          </li>

          <li className="flex items-center gap-3">
            <Ribbon />

            <span className="inline-block text-customGrey text-sm">
              {proficiency}
            </span>
          </li>
        </ul>

        <div className="mt-5 w-full">
          <PrimaryButton
            isLink={true}
            icon={<FaArrowRight />}
            title="Start Learning"
            className="rounded-lg py-[18px] px-8 max-w-[187px]"
            url={url}
          />
        </div>
      </article>
    </div>
  );
};

export default CourseCard;
