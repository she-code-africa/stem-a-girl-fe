import { GlobalLayout } from "../../components";
import Header from "../../components/header";
import Stats from "../../components/shared-components/stats";
import {
  ProgramMission,
  SuccessStories,
  GetInvolved,
} from "../../components/shared-components";
import FAQ from "../../components/faq";
import { activities } from "../../utils/appData";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

import { useDynamicCourseNav } from "../../utils/helper";

const HomePage = () => {
  const { coursesLinks } = useDynamicCourseNav();

  return (
    <GlobalLayout>
      <Header />
      <Stats />
      <ProgramMission />
      <section
        className="my-3 md:my-10 bg-white pt-5 pb-2"
        id="zero-tech-skills"
      >
        <div className="bg-white my-4 w-[90%] max-w-[1280px] mx-auto px-5">
          <h4 className="font-medium text-2xl md:text-3xl lg:text-5xl xl:text-[64px] leading-normal md:leading-normal lg:leading-normal text-center">
            <span className="text-[#B70569] font-semibold">
              Your STEM Journey Starts Here
            </span>
          </h4>
          <p className="text-black text-base md:text-lg lg:text-xl xl:text-2xl leading-normal md:leading-normal text-center mt-3 max-w-[800px] xl:max-w-[980px] md:mx-auto w-full font-medium">
            At She Code Africa, we believe every girl deserves a chance to
            explore the world of STEM,  no experience needed. Our
            beginner-friendly courses are designed to spark curiosity, build
            confidence, and equip you with the skills to thrive in today’s
            tech-driven world.
          </p>
          <div className="my-10 flex max-lg:flex-col items-stretch gap-7 md:gap-6 lg:gap-8 md:justify-start xl:justify-center md:overflow-x-auto xl:overflow-hidden no-scrollbar">
            {activities.map((activity, i) => {
              const url =
                coursesLinks.find((course) => {
                  const courseWords = course.title.toLowerCase().split(" ");
                  const activityWords = activity.title.toLowerCase().split(" ");
                  return courseWords.some(
                    (word) => activityWords.includes(word) && word.length > 3,
                  );
                })?.url || "/courses";
              return (
                <div
                  className="group flex flex-col border-2 border-[#B70569] p-5 rounded-2xl text-fiord flex-1 min-w-0 hover:bg-[#B70569] transition-colors duration-200"
                  key={i}
                >
                  <div className="w-full aspect-square overflow-hidden rounded-lg">
                    <img
                      src={activity.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-[#B70569] group-hover:text-white text-lg md:text-2xl my-3 font-bold transition-colors duration-200">
                      {activity.title}
                    </p>
                    <p className="text-lg md:text-xl my-3 font-medium group-hover:text-white transition-colors duration-200">
                      {activity.description}
                    </p>
                  </div>
                  <Link
                    to={url}
                    className="flex items-center gap-2 text-[#B70569] group-hover:text-white font-medium transition-colors duration-200"
                  >
                    Learn more <FaArrowRight />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <SuccessStories />
      <GetInvolved />

      <FAQ />
    </GlobalLayout>
  );
};

export default HomePage;
