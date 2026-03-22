import React, { useState } from "react";
import HeadingThree from "../../typography/HeadingThree";
import { roadmapData } from "../../../../utils/staticData";
import WeekCards from "../cards/roadmap-section/WeekCards";

const RoadMapSection = () => {
  const [data, setData] = useState(roadmapData);
  const [selectedLesson, setSelectedLesson] = useState(null);

  const markCompleted = (lesson) => {
    setData((prev) =>
      prev.map((week) => ({
        ...week,
        lessons: week.lessons.map((l) =>
          l === lesson ? { ...l, completed: true, status: "completed" } : l,
        ),
      })),
    );
  };
  return (
    <section className="w-full bg-[#FEFEFE]">
      <div className="w-full py-[100px]">
        <div className="w-[90%] mx-auto max-w-[896px]">
          <HeadingThree
            title="Learning Roadmap"
            textColor="text-primaryPink text-center"
          />

          <section className="py-7 sm:px-8 w-full">
            {data.map((roadmap, idx) => (
              <WeekCards
                key={idx}
                roadmap={roadmap}
                markCompleted={markCompleted}
                selectedLesson={selectedLesson}
                setSelectedLesson={setSelectedLesson}
              />
            ))}
          </section>
        </div>
      </div>
    </section>
  );
};

export default RoadMapSection;
