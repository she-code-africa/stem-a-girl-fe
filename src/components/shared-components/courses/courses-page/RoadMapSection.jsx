import { useState } from "react";
import HeadingThree from "../../typography/HeadingThree";
import WeekCards from "../cards/roadmap-section/WeekCards";
import { EmptyResponse } from "../../..";
import { Link } from "react-router-dom";

const RoadMapSection = ({ courseData, courseName }) => {
  const [selectedLesson, setSelectedLesson] = useState(null);

  const saveCourseName = () => {
    try {
      sessionStorage.setItem("selectedCourseName", courseName || "");
    } catch (e) {
      // storage can be blocked in some browsers; router state still works
    }
  };

  return (
    <section className="w-full bg-[#FEFEFE]">
      <div className="w-full py-[100px]">
        <div className="w-[90%] mx-auto max-w-[832px]">
          <HeadingThree
            title="Learning Roadmap"
            textColor="text-primaryPink text-center"
          />

          <section className="py-7 sm:px-8 w-full">
            {courseData.length > 0 ? (
              courseData.map((roadmap, idx) => (
                <WeekCards
                  key={idx}
                  roadmap={roadmap}
                  // markCompleted={markCompleted}
                  selectedLesson={selectedLesson}
                  setSelectedLesson={setSelectedLesson}
                />
              ))
            ) : (
              <EmptyResponse text="lesson" />
            )}
            {}
          </section>

          {/* CTA to create account */}
          <section className="w-full mt-[45px]">
            <article className="w-full max-w-[450px] mx-auto">
              <h4 className="w-full text-center text-scaGrape text-[36px] sm:text-[40px] font-semibold">
                Having fun learning already?
              </h4>

              <p className="text-center text-lg font-figtree sm:text-xl md:text-2xl text-scaGrape font-medium">
                Create an account to access all content
              </p>

              <Link
                to="/register"
                state={{ courseName }}
                onClick={saveCourseName}
                className="w-full mt-[18px] flex items-center font-figtree text-base justify-center rounded-[30px] h-[55px] bg-primaryPink text-white duration-300 transition-colors hover:bg-primaryBtnHover"
              >
                Create Account
              </Link>
            </article>
          </section>
        </div>
      </div>
    </section>
  );
};

export default RoadMapSection;
