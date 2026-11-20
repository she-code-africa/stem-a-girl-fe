import { useState } from "react";
import HeadingThree from "../../typography/HeadingThree";
import WeekCards from "../cards/roadmap-section/WeekCards";
import { EmptyResponse } from "../../..";
import { Link } from "react-router-dom";
import Exclamation from "../../icons/Exclamation";

const RoadMapSection = ({ courseData, courseName }) => {
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [accountCreated, setAccountCreated] = useState(false);

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

          <section className="py-7 sm:px-8 w-full relative">
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

            <section className="w-[90%] sm:w-full max-w-[430.73px]  rounded-[8.16px] drop-shadow-md shadow-md shadow-black/25 bg-[#FEFEFE] fixed bottom-[15%] right-[4%]">
              <div className="w-full py-[18.83px] px-5 sm:px-[38.83px] flex flex-col gap-[18.83px] sm:items-center sm:flex-row relative">
                <article className="w-full space-y-[6.28px] ">
                  <p className="text-primaryPink font-bold text-base sm:text-lg md:text-xl font-figtree">
                    7 days to deactivation
                  </p>

                  <p className="font-medium text-xs sm:text-[12.55px]">
                    Contact your parent/guardian to give their consent for your
                    account.
                  </p>
                </article>

                <Link
                  to="#"
                  className="w-full h-[34.59px] flex items-center justify-center max-w-[111.17px] rounded-[5.02px] bg-primaryPink hover:bg-primaryBtnHover text-white duration-300 transition-colors font-figtree text-[10.04px]"
                >
                  Send mail again
                </Link>

                <div className="absolute -right-5 -top-5 w-10 flex items-center justify-center h-10 rounded-full shadow-black/25 shadow-md bg-[#FEFEFE]">
                  <Exclamation />
                </div>
              </div>
            </section>
          </section>

          {/* CTA to create account */}

          <section className="w-full mt-[45px]">
            <article className="w-full max-w-[448px] mx-auto">
              <h4
                className={`w-full text-center ${accountCreated && "leading-[100%]"}  text-scaGrape text-[36px] sm:text-[40px] font-semibold`}
              >
                {accountCreated
                  ? "Congratulations on completing Coding from Scratch!"
                  : "Having fun learning already?"}
              </h4>

              {!accountCreated && (
                <p className="text-center text-lg font-figtree sm:text-xl md:text-2xl text-scaGrape font-medium">
                  Create an account to access all content
                </p>
              )}

              {accountCreated ? (
                <Link
                  to="/certificates"
                  state={{ courseName }}
                  onClick={saveCourseName}
                  className="w-full mt-[18px] flex items-center font-figtree text-base justify-center rounded-[30px] h-[55px] bg-primaryPink text-white duration-300 transition-colors hover:bg-primaryBtnHover"
                >
                  View your certificate
                </Link>
              ) : (
                <Link
                  to="/register"
                  state={{ courseName }}
                  onClick={saveCourseName}
                  className="w-full mt-[18px] flex items-center font-figtree text-base justify-center rounded-[30px] h-[55px] bg-primaryPink text-white duration-300 transition-colors hover:bg-primaryBtnHover"
                >
                  Create Account
                </Link>
              )}
            </article>
          </section>
        </div>
      </div>
    </section>
  );
};

export default RoadMapSection;
