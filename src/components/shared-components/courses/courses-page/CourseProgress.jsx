import React from "react";

const CourseProgress = ({ progress }) => {
  return (
    <>
      <div className="max-w-[448px] h-3 rounded-full bg-white/20 overflow-hidden">
        <div
          className={`bg-white h-full rounded-full`}
          style={{
            width: `${progress}%`,
          }}
        ></div>
      </div>

      <p className="font-inter mt-2 text-sm text-white font-normal">
        {progress}% Complete
      </p>
    </>
  );
};

export default CourseProgress;
