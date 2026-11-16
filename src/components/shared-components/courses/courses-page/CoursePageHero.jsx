import React, { useState } from "react";
import { IoCode } from "react-icons/io5";
import { FaRegClock, FaRegCircleCheck } from "react-icons/fa6";
import Ribbon from "../../icons/Ribbon";
import ProfileDropdown from "./ProfileDropdown";
// import CourseProgress from "./CourseProgress";

// avatars
import defaultAvatar from "../../../../assets/images/v2/profile-avatars/defaultAvatar.png";
import avatar1 from "../../../../assets/images/v2/profile-avatars/Avatar1.png";
import avatar2 from "../../../../assets/images/v2/profile-avatars/Avatar2.png";
import avatar3 from "../../../../assets/images/v2/profile-avatars/Avatar3.png";
import avatar4 from "../../../../assets/images/v2/profile-avatars/Avatar5.png";
import avatar5 from "../../../../assets/images/v2/profile-avatars/Avatar4.png";
import avatar6 from "../../../../assets/images/v2/profile-avatars/Avatar6.png";
import avatar7 from "../../../../assets/images/v2/profile-avatars/Avatar7.png";
import avatar8 from "../../../../assets/images/v2/profile-avatars/Avatar8.png";
import avatar9 from "../../../../assets/images/v2/profile-avatars/Avatar9.png";
import avatar10 from "../../../../assets/images/v2/profile-avatars/Avatar10.png";
import avatar11 from "../../../../assets/images/v2/profile-avatars/Avatar11.png";
import avatar12 from "../../../../assets/images/v2/profile-avatars/Avatar12.png";
import avatar13 from "../../../../assets/images/v2/profile-avatars/Avatar13.png";
import avatar14 from "../../../../assets/images/v2/profile-avatars/Avatar14.png";
import avatar15 from "../../../../assets/images/v2/profile-avatars/Avatar15.png";

const avatars = [
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar8,
  avatar9,
  avatar10,
  avatar11,
  avatar12,
  avatar13,
  avatar14,
  avatar15,
];

const heroBackground = [
  {
    cardGradient: "bg-pinkGradient",
    slug: "game",
  },
  {
    cardGradient: "bg-blueGradient",
    slug: "coding",
  },
  {
    cardGradient: "bg-orangeGradient",
    slug: "robotics",
  },
];

const CoursePageHero = ({
  title,
  paragraph,
  duration,
  weeks,
  totalCompleted,
  progress,
}) => {
  const [avatar, setAvatar] = useState(defaultAvatar);
  return (
    <section
      className={`w-full  font-figtree ${heroBackground.find((bg) => title.toLowerCase().includes(bg.slug))?.cardGradient || "bg-primaryPink"}`}
    >
      {/* min-h-[535px]  */}
      <div className="flex max-w-[1040px] mx-auto w-[90%] flex-col justify-center items-center py-[50px]">
        {/* the profile dropdown */}
        <ProfileDropdown
          avatar={avatar}
          avatars={avatars}
          setAvatar={setAvatar}
        />

        <article className="w-full mt-10 sm:mt-[50px]">
          <h1 className="text-[#FEFEFE] flex w-full sm:flex-row flex-col  sm:items-center gap-1 sm:gap-5 lg:gap-10">
            <span className="flex justify-center  items-center w-full max-w-12 h-12 sm:max-w-14 sm:h-14 lg:max-w-20 lg:h-20 overflow-hidden rounded-xl lg:rounded-2xl bg-white/20 text-3xl sm:text-4xl lg:text-5xl">
              <IoCode />
            </span>

            <span className="text-[64px] lg:text-9xl lg:leading-[130px] md:text-8xl font-semibold inline-flex items-center ">
              {title}
            </span>
          </h1>

          <p className="mt-6 sm:mt-10 lg:mt-[50px] font-figtree text-[#FEFEFE] font-medium lg:text-2xl text-lg md:text-xl">
            {paragraph}
          </p>

          <ul className="w-full flex gap-6 flex-wrap items-center mt-6">
            <li className="flex w-auto gap-2 items-center text-[#FEFEFE] text-sm">
              <FaRegClock />
              <span className="font-inter inline-block text-sm">
                {duration}
              </span>
            </li>

            <li className="flex w-auto gap-2 items-center text-[#FEFEFE] text-sm">
              <Ribbon stroke="#ffffff" />
              <span className="font-inter inline-block text-sm">
                {weeks} week(s)
              </span>
            </li>

            <li className="flex w-auto gap-2 items-center text-[#FEFEFE] text-sm">
              <FaRegCircleCheck />
              <span className="font-inter inline-block text-sm">
                {totalCompleted} lessons
              </span>
            </li>
          </ul>

          <div className="mt-6 w-full">
            {/* <CourseProgress progress={progress} /> */}
          </div>
        </article>
      </div>
    </section>
  );
};

export default CoursePageHero;
