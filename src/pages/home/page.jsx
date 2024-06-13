import React from "react";
import { GlobalLayout } from "../../components";
import Header from "../../components/header";
import Stats from "../../components/shared-components/stats";
import { InfoCardHeader } from "../../components/shared-components";
import { skillsVector, girlChild } from "../../assets/images";
import FAQ from "../../components/faq";
import { activities } from "../../utils/appData";
import TestimonialsSlider from "../../components/activities/coding-page/TestimonialsSlider";

const HomePage = () => {
  return (
    <GlobalLayout>
      <Header />
      <Stats />
      <section className="w-[90%] max-w-[1280px] mx-auto">
        <InfoCardHeader
          infoCardHeading="Program Mission"
          infoCardParagraph="Our mission is to create more awareness and inspire girls in secondary
          schools aged 10 - 21 to pursue careers in Science, Technology,
          Engineering, and Mathematics (STEM)."
        />
      </section>
      <section className="my-3 md:my-20 bg-[#F8F8F8] pt-5 pb-2">
        <div className="bg-white my-5 pt-5 md:pt-10 lg:pt-14 rounded-[32px] w-[90%] max-w-[1280px] mx-auto px-5">
          <h4 className="font-medium text-2xl md:text-3xl lg:text-4xl leading-normal md:leading-normal lg:leading-normal text-center">
            <span className="text-primaryPink font-bold ">
              {" "}
              Zero tech skills?{" "}
            </span>
            <br />
            don’t worry, we’ve got you.
          </h4>
          <p className="text-fiord text-base md:text-lg leading-normal md:leading-normal text-center mt-3 max-w-[800px] md:mx-auto w-full">
            These track hubs are linked to the She Code Africa STEM Club program
            and have been developed in partnership with club facilitators,
            schools and partner organizations.
          </p>
          <div className="my-6 flex max-md:flex-col gap-7 md:gap-6 lg:gap-10 justify-center md:justify-start lg:justify-center  md:overflow-x-auto xl:overflow-hidden no-scrollbar">
            {activities.map((activity, i) => (
              <div className="text-fiord" key={i}>
                <img
                  src={activity.image}
                  alt=""
                  className="w-fit md:max-w-xs"
                />
                <div>
                  <p className="text-lg md:text-2xl my-3 font-semibold">
                    {activity.title}
                  </p>
                  <p>{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
          <img src={skillsVector} alt="" />
        </div>
      </section>
      <section className="w-full bg-primaryPink pt-20 pb-24 mt-32 text-white">
        <div className=" w-[90%] max-w-[1280px] mx-auto md:flex md:flex-row md:items-center lg:justify-between md:gap-10">
          <article className="w-full lg:max-w-[600px]">
            <h3 className="font-semibold text-2xl md:text-3xl lg:text-4xl leading-normal md:leading-normal lg:leading-normal  w-full md:max-w-[450px]">
              What other STEM enthusiasts are saying
            </h3>

            <TestimonialsSlider />
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
