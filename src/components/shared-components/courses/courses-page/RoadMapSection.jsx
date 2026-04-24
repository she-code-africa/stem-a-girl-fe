import React, { useState } from "react";
import HeadingThree from "../../typography/HeadingThree";
import WeekCards from "../cards/roadmap-section/WeekCards";
import { EmptyResponse } from "../../..";

const RoadMapSection = ({courseData}) => {

  const [selectedLesson, setSelectedLesson] = useState(null);


  return (
    <section className="w-full bg-[#FEFEFE]">
      <div className="w-full py-[100px]">
        <div className="w-[90%] mx-auto max-w-[896px]">
          <HeadingThree
            title="Learning Roadmap"
            textColor="text-primaryPink text-center"
          />

          <section className="py-7 sm:px-8 w-full">
            {courseData.length > 0
              ? courseData.map((roadmap, idx) => (
                  <WeekCards
                    key={idx}
                    roadmap={roadmap}
                    // markCompleted={markCompleted}
                    selectedLesson={selectedLesson}
                    setSelectedLesson={setSelectedLesson}
                  />
                ))
              : <EmptyResponse text="lesson" />}
            {}
          </section>
        </div>
      </div>
    </section>
  );
};

export default RoadMapSection;
