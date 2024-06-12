import React, { useState, useEffect } from "react";
import {
  HeroComponent,
  InfoCardHeader,
  InfoCardSlider,
} from "../../shared-components";
import { gameDevHeroImage } from "../../../assets/images";
// import { coursesSlider } from "../../../utils/appData";
import UpcomingEvents from "../UpcomingEvents";
import { infoComponentsettings } from "../../../utils/sliderSettings";
import { useQuery } from "@tanstack/react-query";
import {
  getActivityCourses,
  getAllActivities,
} from "../../../services/queries";
import { ApiLoading, EmptyResponse } from "../../index";

const GameDevelopmentPage = () => {
  const {
    isLoading,
    isError,
    data: allActivities,
  } = useQuery({
    queryKey: ["activities"],
    queryFn: getAllActivities,
  });

  const [activityId, setActivityId] = useState("");

  useEffect(() => {
    const activityExists =
      !isLoading &&
      allActivities.find(
        (activity) => activity.title.toLowerCase() === "game-development"
      );

    if (activityExists) {
      setActivityId(activityExists._id);
    }
  }, [isLoading, isError, allActivities]);
  const { isLoading: isCoursesLoading, data: activityCourses } = useQuery({
    queryKey: ["gamedevCourses", activityId],
    queryFn: () => getActivityCourses(activityId),
  });
  return (
    <section className=" text-sealBrown font-mulish w-full">
      <div className=" w-[90%] max-w-[1280px] mx-auto">
        <HeroComponent
          heroHeading="The Game Development Hub!"
          heroParagraph="Unleash your creativity and start building your own games. Whether you're a beginner or looking to advance your skills, we have the resources you need to become a game developer."
          heroImage={gameDevHeroImage}
        />
        <div className="my-16 lg:my-20">
          <section className="w-full">
            <InfoCardHeader
              infoCardHeading="start coding today!"
              infoCardParagraph="Our mission is to create more awareness and inspire girls in secondary
        schools aged 10 - 21 to pursue careers in Science, Technology,
        Engineering, and Mathematics (STEM)."
            />
            {isCoursesLoading ? (
              <ApiLoading />
            ) : activityCourses.length > 0 ? (
              <InfoCardSlider
                sliderData={activityCourses}
                settings={infoComponentsettings}
              />
            ) : (
              <>
                <EmptyResponse text="course" />
              </>
            )}
          </section>
        </div>

        <div className="mt-[100px] w-full my-32">
          <UpcomingEvents />
        </div>
      </div>
    </section>
  );
};

export default GameDevelopmentPage;
