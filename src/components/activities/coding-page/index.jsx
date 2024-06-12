import React, { useEffect, useState } from "react";
import {
  HeroComponent,
  InfoCardHeader,
  InfoCardSlider,
} from "../../shared-components";
import { codingHeroImage } from "../../../assets/images";
// import { coursesSlider } from "../../../utils/appData";
import UpcomingEvents from "../UpcomingEvents";
import { infoComponentsettings } from "../../../utils/sliderSettings";
import { useQuery } from "@tanstack/react-query";
import {
  getActivityCourses,
  getAllActivities,
} from "../../../services/queries";
import { ApiLoading, EmptyResponse } from "../../index";

const CodingPageComponent = () => {
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
        (activity) => activity.title.toLowerCase() === "coding"
      );

    if (activityExists) {
      setActivityId(activityExists._id);
    }
  }, [isLoading, isError, allActivities]);

  const { isLoading: isCoursesLoading, data: activityCourses } = useQuery({
    queryKey: ["codingCourses", activityId],
    queryFn: () => getActivityCourses(activityId),
  });

  return (
    <>
      <section className=" text-sealBrown font-mulish w-full">
        <div className=" w-[90%] max-w-[1280px] mx-auto">
          <HeroComponent
            heroHeading="Unlock Your Coding Potential"
            heroParagraph="Are you ready to dive into the world of coding? Whether you're a
          complete beginner or looking to sharpen your skills, our workshops
          offer something for everyone."
            heroImage={codingHeroImage}
          />
          <div className="my-16 lg:my-20 ">
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
            <UpcomingEvents activity="coding" />
          </div>
        </div>
      </section>
    </>
  );
};

export default CodingPageComponent;
