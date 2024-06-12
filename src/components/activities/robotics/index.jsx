import React, { useState, useEffect } from "react";
import {
  HeroComponent,
  InfoCardSlider,
  InfoCardHeader,
} from "../../shared-components";
import { roboticsHeroImage } from "../../../assets/images";
import { coursesSlider } from "../../../utils/appData";
import UpcomingEvents from "../UpcomingEvents";
import {
  infoComponentSettings,
  infoComponentsettings,
} from "../../../utils/sliderSettings";
import { useQuery } from "@tanstack/react-query";
import {
  getActivityCourses,
  getAllActivities,
} from "../../../services/queries";
import { ApiLoading, EmptyResponse } from "../../index";

const RoboticsPageComponent = () => {
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
        (activity) => activity.title.toLowerCase() === "robotics"
      );

    if (activityExists) {
      setActivityId(activityExists._id);
    }
  }, [isLoading, isError, allActivities]);
  const { isLoading: isCoursesLoading, data: activityCourses } = useQuery({
    queryKey: ["roboticsCourses", activityId],
    queryFn: () => getActivityCourses(activityId),
  });

  return (
    <section className=" text-sealBrown font-mulish w-full">
      <div className=" w-[90%] max-w-[1280px] mx-auto">
        <HeroComponent
          heroHeading="Unlock Your Robotics Potential"
          heroParagraph="Dive into the fascinating world of robotics. Whether you're a novice or looking to advance your knowledge, we provide the resources you need to start building and programming robots."
          heroImage={roboticsHeroImage}
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
                settings={
                  activityCourses.length < 3
                    ? infoComponentSettings
                    : infoComponentsettings
                }
              />
            ) : (
              <>
                <EmptyResponse text="course" />
              </>
            )}
          </section>
        </div>

        <div className="mt-[100px] w-full mb-32">
          <UpcomingEvents />
        </div>
      </div>
    </section>
  );
};

export default RoboticsPageComponent;
