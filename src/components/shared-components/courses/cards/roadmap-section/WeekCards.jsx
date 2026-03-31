import React, {  useState } from "react";

import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import LessonCard from "./LessonCard";

const WeekCards = ({
  roadmap,
  markCompleted,
  selectedLesson,
  setSelectedLesson,
}) => {
  const [showLessons, setShowLessons] = useState(false);

  return (
    <div className="w-full pb-6 pl-0 sm:pl-[52px] border-0 relative last:border-0 sm:border-l border-l-[#FFB8E0]">
      <span className="hidden sm:inline-block h-7 w-7 rounded-full bg-white border-4 border-[#C1106A] absolute top-0 -left-[14px]"></span>
      {/* {roadmap.completed || roadmap.status !== "locked" ? (
        <span className="hidden sm:inline-block h-7 w-7 rounded-full bg-white border-4 border-[#C1106A] absolute top-0 -left-[14px]"></span>
      ) : (
        <span className="hidden sm:inline-block bg-white  absolute top-0 -left-[14px]">
          <LockIcon />
        </span>
      )} */}

      <section
        className={`w-full border border-[#E5E7EB] shadow-[0_1px_2px_-1px_rgba(0,0,0,0.1),0_1px_3px_0px_rgba(0,0,0,0.1)] p-5 sm:p-[26px] rounded-[14px] `}
      >
        <div className={` opacity-100 grayscale-0`}>
          {/* text and button component */}
          <div className="w-full flex justify-between sm:gap-6 md:gap-12 items-start">
            <article className="w-full ">
              <h4
                className={`font-figtree hidden sm:block text-lg sm:text-xl font-bold text-darkBlue capitalize`}
              >
                {roadmap.weekLabel}: {roadmap.title}
              </h4>

              {/* just mobile */}
              <div className="sm:hidden flex items-center justify-between gap-4">
                <h4
                  title={` ${roadmap.weekLabel}: ${roadmap.title}`}
                  className={`font-figtree  text-lg sm:text-xl font-bold text-darkBlue `}
                >
                  {roadmap.weekLabel}: {roadmap.title}
                </h4>

                <button
                  className={`flex items-center justify-center w-auto text-2xl text-primaryPink`}
                  disabled={roadmap.status === "locked"}
                  onClick={() => setShowLessons(!showLessons)}
                >
                  {showLessons ? <FaAngleUp /> : <FaAngleDown />}
                </button>
              </div>

              {/*  */}
              <p className="mt-2.5 font-inter text-sm text-customGrey">
                {roadmap.description}
              </p>

              <ul className="mt-2.5 flex items-center gap-5 flex-wrap">
                <li className="w-auto">
                  <span className="text-[#6A7282] inline-block text-sm">
                    ⏱️ {roadmap.estimatedMinutes}{" minutes"}
                  </span>
                </li>

                <li className="w-auto flex items-center gap-5">
                  <span className="text-[#6A7282] inline-block text-sm">
                    {roadmap.lessons.length} video(s)
                  </span>
                </li>
              </ul>
            </article>
            <button
              className={`hidden sm:flex items-center justify-center w-auto text-2xl text-primaryPink disabled:cursor-not-allowed`}
              onClick={() => setShowLessons(!showLessons)}
            >
              {showLessons ? <FaAngleUp /> : <FaAngleDown />}
            </button>
          </div>

          {/* lessons */}

          {showLessons && (
            <>
              {roadmap.lessons.map((lesson, i) => (
                <LessonCard
                  key={`${i}lesson${lesson.type}`}
                  lesson={lesson}
                  // markCompleted={markCompleted}
                  selectedLesson={selectedLesson}
                  setSelectedLesson={setSelectedLesson}
                />
              ))}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default WeekCards;
