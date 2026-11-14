import React, { useState } from "react";
import GlobalLayout from "../layouts/GlobalLayout";
import { Link, useLocation } from "react-router-dom";
import ArrowLeft from "../shared-components/icons/ArrowLeft";
import RegisterStepOne from "./steps/RegisterStepOne";

const CreateAccountPage = () => {
  const location = useLocation();
  const [continueToSignUp, setContinueToSignUp] = useState(false);

  const courseName =
    location.state?.courseName ||
    (() => {
      try {
        return sessionStorage.getItem("selectedCourseName");
      } catch (e) {
        return null;
      }
    })();
  return (
    <>
      <GlobalLayout>
        {continueToSignUp ? (
          <RegisterStepOne setContinueToSignUp={setContinueToSignUp} />
        ) : (
          <div className="w-full min-h-screen bg-[#FDF2F8] py-20 flex items-center justify-center">
            <div className="w-[90%] xl:w-full max-w-[650px] mx-auto bg-white rounded-[23.94px] px-6 py-[27px] sm:py-[54px] lg:py-[108px] sm:px-[35px] ">
              <h4 className="font-semibold font-figtree text-2xl sm:text-[32px] text-black text-center">
                You're about to enroll in
              </h4>

              <h3 className="my-2 font-figtree uppercase text-[28px] sm:text-[32px] text-center font-semibold text-primaryPink">
                {courseName}
              </h3>

              <p className="font-medium font-figtree text-center text-lg sm:text-xl sm:px-[37px]">
                Once you create your account, you’ll be enrolled in this course
                and won’t be able to enroll in another course while your
                enrollment is active.
              </p>

              <div className="mt-[25px] w-full max-w-[448px] mx-auto space-y-4">
                <button
                  className="cursor-pointer w-full bg-primaryPink hover:bg-primaryBtnHover duration-300 transition-colors rounded-[30px] h-[55px] text-base text-white font-figtree flex items-center justify-center"
                  onClick={() => setContinueToSignUp(true)}
                >
                  Continue
                </button>

                <Link
                  to="/courses"
                  className="w-full font-medium text-lg text-primaryPink mx-auto max-w-[202.46px] flex items-center justify-center gap-1"
                >
                  <ArrowLeft />
                  Select Another Course
                </Link>
              </div>
            </div>
          </div>
        )}
      </GlobalLayout>
    </>
  );
};

export default CreateAccountPage;
