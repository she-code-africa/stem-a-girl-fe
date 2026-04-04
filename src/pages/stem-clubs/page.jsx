import React from "react";
import { GlobalLayout } from "../../components";
// import Schools from "../../components/schools";
import {
  StemClubActivities,
  ViewStemClubs,
  StemClubCTA,
} from "../../components/shared-components";
const StemClubs = () => {
  return (
    <GlobalLayout>
      <section className="relative py-16 md:py-24 text-white -mt-8 bg-primaryPink min-h-[562px] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/35" />
        <article className="relative z-10 w-[90%] max-w-[1040px] mx-auto">
          <h1 className="text-center font-semibold text-4xl md:text-7xl lg:text-8xl xl:text-[128px] md:leading-tight">
            Empowering Young Minds: <br /> She Code Africa STEM Club
          </h1>
          <p className="text-center md:w-[70%] mx-auto text-base md:text-xl lg:text-2xl md:leading-8 text-[#FEFEFE] font-medium">
            She Code Africa's STEM Club tackles the underrepresentation of women
            in STEM fields. By bringing engaging programs directly to schools,
            they spark curiosity and equip girls with the skills and confidence
            to thrive.
          </p>
        </article>
      </section>
      <StemClubActivities />
      <ViewStemClubs />
      <StemClubCTA />
    </GlobalLayout>
  );
};

export default StemClubs;
