import React from "react";
import { ApiLoading, EmptyResponse, GlobalLayout } from "../../components";
import Stats from "../../components/shared-components/stats";
import ActivitiesSection from "../../components/shared-components/activities/activities-section";
import Schools from "../../components/schools";
import { InfoCardHeader } from "../../components/shared-components";
import ImpactStoryCard from "../../components/cards/impact-stories-card";
// import { impactStories } from "../../utils/appData";
import { clubStudentsImage, floralWhiteImage } from "../../assets/images";
import { useQuery } from "@tanstack/react-query";
import { getAllImpactStories } from "../../services/queries";

const StemClubs = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["impactstories"],
    queryFn: getAllImpactStories,
  });

  return (
    <GlobalLayout>
      <section className="stem-club-header pt-14 text-white relative -mt-8">
        <h1 className="text-center font-bold text-4xl md:text-5xl md:leading-[68px]">
          Empowering Young Minds: <br /> She Code Africa STEM Club
        </h1>
        <p className="text-center md:w-[54%] mx-auto md:text-xl md:leading-8 text-[#FEFEFE] md:tracking-tight mt-4 mb-10">
          She Code Africa's STEM Club initiative tackles the underrepresentation
          of women in STEM fields. By bringing engaging programs directly to
          schools, they spark curiosity and equip girls with the skills and
          confidence to thrive.
        </p>
        <img
          src={floralWhiteImage}
          alt=""
          className="absolute max-md:hidden top-1/3 left-4 md:left-10 lg:left-28"
        />
        <img
          src={floralWhiteImage}
          alt=""
          className="absolute max-md:hidden top-1/2 right-16 md:right-24 lg:right-44 w-16"
        />
        <img
          src={clubStudentsImage}
          className="mx-auto max-h-[519px]"
          alt="students"
        />
      </section>
      <Stats />
      <ActivitiesSection />
      {/* <Schools /> */}
      <section className="w-full mt-24 mb-5">
        <InfoCardHeader
          infoCardHeading="Impact Stories"
          infoCardParagraph="Read about the inspiring journeys of some of our STEM Club members:"
        />
        <div className="flex gap-6 items-center overflow-x-auto no-scrollbar w-full mt-10 md:mt-16">
          {isLoading ? (
            <ApiLoading />
          ) : data.length > 0 ? (
            <>
              {data.map((story, index) => (
                <ImpactStoryCard key={index} stories={story} />
              ))}
            </>
          ) : (
            <EmptyResponse text="story" />
          )}
        </div>
      </section>
    </GlobalLayout>
  );
};

export default StemClubs;
