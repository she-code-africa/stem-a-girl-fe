import React from "react";
import { GlobalLayout } from "../../components";
import Header from "../../components/header";
import Stats from "../../components/shared-components/stats";
import { ProgramMission } from "../../components/shared-components";
import { girlChild } from "../../assets/images";
import FAQ from "../../components/faq";
import { activities } from "../../utils/appData";
import TestimonialsSlider from "../../components/activities/coding-page/TestimonialsSlider";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const HomePage = () => {
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
          <h4 className="font-medium text-2xl md:text-3xl lg:text-6xl leading-normal md:leading-normal lg:leading-normal text-center">
            <span className="text-[#B70569] font-semibold">
              Your STEM Journey Starts Here
            </span>
          </h4>
          <p className="text-black text-base md:text-lg leading-normal md:leading-normal text-center mt-3 max-w-[800px] md:mx-auto w-full font-medium">
            At She Code Africa, we believe every girl deserves a chance to
            explore the world of STEM,  no experience needed. Our
            beginner-friendly courses are designed to spark curiosity, build
            confidence, and equip you with the skills to thrive in today’s
            tech-driven world.
          </p>
          <div className="my-10 flex max-lg:flex-col items-stretch gap-7 md:gap-6 lg:gap-8 md:justify-start xl:justify-center md:overflow-x-auto xl:overflow-hidden no-scrollbar">
            {activities.map((activity, i) => (
              <div
                className="flex flex-col border-2 border-[#B70569] p-5 rounded-2xl text-fiord"
                key={i}
              >
                <div className="h-48 md:h-52 overflow-hidden rounded-lg">
                  <img
                    src={activity.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-[#B70569] text-lg md:text-2xl my-3 font-bold">
                    {activity.title}
                  </p>
                  <p className="text-lg md:text-xl my-3 font-medium">
                    {activity.description}
                  </p>
                </div>
                <Link to={activity.link} className="flex items-center gap-2 text-[#B70569] font-medium">
                  Learn more <FaArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full bg-primaryPink pt-20 pb-24 mt-32 text-white">
        <div className=" w-[90%] max-w-[1280px] mx-auto md:flex md:flex-row md:items-center lg:justify-between md:gap-10">
          <article className="w-full lg:max-w-[600px]">
            <h3 className="font-semibold text-2xl md:text-3xl lg:text-4xl leading-normal md:leading-normal lg:leading-normal  w-full md:max-w-[450px]">
              What other STEM enthusiasts are saying
            </h3>

            {/* <TestimonialsSlider /> */}
          </article>
          <div className="w-full flex justify-end">
            <div className="m-0 p-0 w-full max-w-[536px] hidden lg:block ">
              <img src={girlChild} alt="girl-child-pic" className="w-full " />
            </div>
          </div>
        </div>
      </section>

      <FAQ />
    </GlobalLayout>
  );
};

export default HomePage;
