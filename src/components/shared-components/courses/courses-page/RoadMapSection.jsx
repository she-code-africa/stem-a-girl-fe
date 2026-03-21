import React from "react";
import HeadingThree from "../../typography/HeadingThree";
import { roadmapData } from "../../../../utils/staticData";
import WeekCards from "../cards/roadmap-section/WeekCards";

const RoadMapSection = () => {
  return (
    <section className="w-full bg-[#FEFEFE]">
      <div className="w-full py-[100px]">
        <div className="w-[90%] mx-auto max-w-[896px]">
          <HeadingThree
            title="Learning Roadmap"
            textColor="text-primaryPink text-center"
          />

          <section className="py-7 sm:px-8 w-full">
            {roadmapData.map((roadmap, idx) => (
              <WeekCards key={idx} roadmap={roadmap} />
            ))}
          </section>
        </div>
      </div>
    </section>
  );
};

export default RoadMapSection;
