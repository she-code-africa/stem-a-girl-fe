import React, { useEffect, useState } from "react";
import HeadingThree from "../shared-components/typography/HeadingThree";
import CourseCard from "../shared-components/courses/cards/CourseCard";
import { coursesData, howItWorks } from "../../utils/staticData";
import { useQuery } from "@tanstack/react-query";
import { getAllCourses } from "../../services/queries";
import ApiLoading from "../loaders/ApiLoading";

const CoursesPage = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["courses"],
    queryFn: getAllCourses,
  });

  const [courseInfo, setCourseInfo] = useState([]);

  useEffect(() => {
    if (!isLoading) {
      const coursesInfo = data.map((course) => ({
        title: course.title,
        description: course.description,
        id: course._id,
        estimatedHours: course.estimatedHours,
        levels: course.modules.length,
        difficulty: course.difficulty,
      }));
      setCourseInfo(coursesInfo);
    }
  }, [isLoading, data]);

  const findMatchingCourse = (course, staticData) => {
    return course.find((c) =>
      c.title.toLowerCase().includes(staticData.title.toLowerCase()),
    );
  };

  return (
    <>
      <section className="w-full bg-primaryPink  font-figtree">
        <div className="flex max-w-[1040px] mx-auto w-[90%] min-h-[398px] justify-center items-center">
          <article className="w-full text-center">
            <h1 className="text-white text-[64px] lg:text-9xl lg:leading-[130px] md:text-8xl leading-normal  font-semibold text-center">
              Online Courses
            </h1>

            <p className="font-figtree text-center text-white font-medium lg:text-2xl text-lg md:text-xl">
              Choose your learning journey. Each course is a complete,
              structured path with video lessons, hands-on projects, and
              assessments to track your progress.
            </p>
          </article>
        </div>
      </section>

      <section className="w-full py-[100px]">
        <div className="w-[90%] mx-auto max-w-[1256px]">
          <HeadingThree
            title="Choose Your Course"
            textColor="text-primaryPink text-center"
          />

          <section className="mt-[50px] gap-8 flex flex-col items-center md:flex-row md:items-start md:justify-center w-full ">
            {isLoading ? (
              <ApiLoading />
            ) : (
              coursesData.map((course, i) => {
                const levels =
                  findMatchingCourse(courseInfo, course)?.levels ||
                  course.levels;
                const id = findMatchingCourse(courseInfo, course)?.id || "#";

                const duration =
                  findMatchingCourse(courseInfo, course)?.estimatedHours ||
                  course.duration;

                const difficulty =
                  findMatchingCourse(courseInfo, course)?.difficulty ||
                  course.proficiency;
                return (
                  <CourseCard
                    key={i}
                    icon={course.icon}
                    customClass={course.cardGradient}
                    title={course.title}
                    description={course.description}
                    level={levels}
                    duration={duration}
                    proficiency={difficulty}
                    url={`/course/${id}`}
                  />
                );
              })
            )}
          </section>
        </div>
      </section>

      <section className="bg-[#F9FAFB] w-full py-[100px]">
        <div className="w-[90%] mx-auto max-w-[1256px]">
          <HeadingThree
            title="How It Works"
            textColor="text-primaryPink text-center"
          />

          <section className="mt-[50px] gap-10 md:gap-[50px] flex flex-col items-center md:flex-row md:items-start md:justify-center w-full max-w-[763px] mx-auto">
            {howItWorks.map(({ id, title, description }) => (
              <div
                className="w-full flex flex-col justify-center items-center"
                key={id}
              >
                <div className="bg-[#FCE7F3] w-16 h-16 rounded-full overflow-hidden text-primaryPink flex items-center justify-center mx-auto">
                  <h5 className="font-bold text-2xl font-inter">{id}</h5>
                </div>

                <article className="w-full text-center mt-3">
                  <h5 className="text-[#101828] font-figtree text-lg font-bold">
                    {title}
                  </h5>

                  <p className="mt-3 font-roboto text-base text-[rgba(0,0,0,0.6)]">
                    {description}
                  </p>
                </article>
              </div>
            ))}
          </section>
        </div>
      </section>
    </>
  );
};

export default CoursesPage;
