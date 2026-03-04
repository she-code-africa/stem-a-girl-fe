import React from "react";
import { ApiLoading, EmptyResponse, GlobalLayout } from "../../components";
import Stats from "../../components/shared-components/stats";
import ActivitiesSection from "../../components/shared-components/activities/activities-section";
// import Schools from "../../components/schools";
import { InfoCardHeader, StemClubActivities, ViewStemClubs } from "../../components/shared-components";
import ImpactStoryCard from "../../components/cards/impact-stories-card";
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
      <section
        className="relative py-16 md:py-24 text-white -mt-8"
        style={{ backgroundColor: '#B70569' }}
      >
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative z-10 w-[90%] max-w-[1280px] mx-auto">
          <h1 className="text-center font-bold text-4xl md:text-7xl md:leading-tight">
            Empowering Young Minds: <br /> She Code Africa STEM Club
          </h1>
          <p className="text-center md:w-[54%] mx-auto text-base md:text-xl md:leading-8 text-[#FEFEFE] font-medium">
            She Code Africa's STEM Club tackles the underrepresentation of women
            in STEM fields. By bringing engaging programs directly to schools,
            they spark curiosity and equip girls with the skills and confidence
            to thrive.
          </p>
        </div>
      </section>
      <StemClubActivities />
      <ViewStemClubs />
    </GlobalLayout>
  );
};

export default StemClubs;
