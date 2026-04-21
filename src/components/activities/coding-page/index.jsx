import React from "react";

import { ApiLoading, EmptyResponse } from "../../index";

// import InfiniteScroll from "react-infinite-scroll-component";
import CoursePageHero from "../../shared-components/courses/courses-page/CoursePageHero";
import RoadMapSection from "../../shared-components/courses/courses-page/RoadMapSection";

const CodingPageComponent = ({ isLoadingCourse, courseData }) => {
  return (
    <>
      <CoursePageHero
        title={isLoadingCourse ? "Loading..." : courseData.title}
        paragraph={
          isLoadingCourse ? "Loading course details..." : courseData.description
        }
        duration={isLoadingCourse ? "Loading..." : courseData.estimatedHours}
        weeks={
          isLoadingCourse
            ? "Loading..."
            : courseData.title.toLowerCase().includes("robotics")
              ? courseData.totalWeeks + 2
              : courseData.totalWeeks
        }
        totalCompleted={
          isLoadingCourse ? "Loading..." : courseData.totalLessons
        }
        progress={0}
      />

      {isLoadingCourse ? (
        <ApiLoading />
      ) : Object.keys(courseData).length > 0 ? (
        <RoadMapSection courseData={courseData.modules} />
      ) : (
        <EmptyResponse text="lesson" />
      )}
    </>
  );
};

export default CodingPageComponent;
