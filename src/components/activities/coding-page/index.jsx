import React, { useEffect, useState } from "react";
import {
  HeroComponent,
  InfoCardHeader,
  InfoCard,
} from "../../shared-components";
import { codingHeroImage } from "../../../assets/images";
// import { coursesSlider } from "../../../utils/appData";
import UpcomingEvents from "../UpcomingEvents";

import { useQuery } from "@tanstack/react-query";
import {
  getActivityCourses,
  getAllActivities,
} from "../../../services/queries";
import { ApiLoading, EmptyResponse } from "../../index";
import { codingHeroSubContent } from "../../../utils/appData";
// import useInfiniteScroll from "react-easy-infinite-scroll-hook";
import InfiniteScroll from "react-infinite-scroll-component";
// import InfoCard from "../../shared-components/activities/info-card/InfoCard";

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
    enabled: !!activityId && !isLoading,
  });

  // inifinite scrolling
  const filteredCourses =
    activityCourses &&
    activityCourses.length > 0 &&
    activityCourses.filter((courses) => courses.state === "published");
  const [currentIndex, setCurrentIndex] = useState(1);
  const [items, setItems] = useState(
    filteredCourses ? filteredCourses.slice(0, 12) : []
  );
  const [hasMore, setHasMore] = useState(true);

  const fetchMore = () => {
    const nextIndex = currentIndex + 1;
    const nextLastIndex = nextIndex * 12;
    const nextFirstIndex = nextLastIndex - 12;

    if (nextFirstIndex > filteredCourses.length) {
      setHasMore(false);
    } else {
      setTimeout(() => {
        setItems((prev) => [
          ...prev,
          ...filteredCourses.slice(nextFirstIndex, nextLastIndex),
        ]);
        setCurrentIndex(nextIndex);
      }, 500);
    }
  };

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
            subContent={codingHeroSubContent}
          />
          <div className="mt-[100px] w-full mb-32">
            <UpcomingEvents activityTitle="coding" />
          </div>

          <div className="my-16 lg:my-20 ">
            <section className="w-full">
              <InfoCardHeader
                infoCardHeading="Resources"
                infoCardParagraph=""
              />

              {isCoursesLoading ? (
                <ApiLoading />
              ) : filteredCourses && filteredCourses.length > 0 ? (
                <InfiniteScroll
                  dataLength={items.length}
                  next={fetchMore}
                  loader={<ApiLoading />}
                  hasMore={hasMore}
                >
                  <section className="w-full grid grid-cols-3 gap-5 ">
                    {filteredCourses.map((item, i) => (
                      <InfoCard
                        key={i}
                        title={item.title}
                        cardImage={item.image}
                        paragraph={item.description}
                        index={item.index}
                        // imageH={imageH}
                        link={item.link}
                      />
                    ))}
                  </section>
                </InfiniteScroll>
              ) : (
                <>
                  <EmptyResponse text="course" />
                </>
              )}
            </section>
          </div>

          {/* <div className="mt-[100px] w-full mb-32">
            <UpcomingEvents activityTitle="coding" />
          </div> */}
        </div>
      </section>
    </>
  );
};

export default CodingPageComponent;
