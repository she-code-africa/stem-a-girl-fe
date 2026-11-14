import React, { useState } from "react";
import GlobalLayout from "../layouts/GlobalLayout";
import AnimatedCheck from "../shared-components/icons/AnimatedCheckmark";

const ConsentPage = () => {
  const [success, setSuccess] = useState(false);
  return (
    <>
      <GlobalLayout>
        <div className="w-full min-h-screen bg-[#FDF2F8] py-20 flex items-center justify-center">
          <div
            className={`w-[90%] mx-auto xl:w-full max-w-[650px] rounded-[23.94px] bg-white   ${success ? "sm:py-9 md:py-[68.98px] px-[23px] py-6" : "px-[23px] sm:px-[35px] py-6 sm:py-9 md:py-[68.98px] lg:py-[138px]"}`}
          >
            {success ? (
              <div className="w-full flex justify-center items-center">
                <AnimatedCheck />
              </div>
            ) : (
              <>
                <h4 className="font-figtree font-extrabold text-2xl sm:text-[32px] text-black">
                  Sorry, this consent link has expired!
                </h4>
              </>
            )}

            <p
              className={`w-full  mt-[15px] text-center  font-figtree text-black ${success ? "text-2xl sm:text-[32px] sm:leading-[40px] px-12" : "text-lg sm:text-xl font-medium"}`}
            >
              {success
                ? "Thank you for giving consent, your ward’s account has been activated."
                : "Consent links are valid for seven days, and no consent decision can be submitted through this link. To request a new consent link, please ask your ward to create another account and provide your details again."}
            </p>

            {success ? (
              <button className="cursor-pointer mt-12 w-full bg-primaryPink hover:bg-primaryBtnHover duration-300 transition-colors rounded-[30px] max-w-[510px] mx-auto h-[55px] text-base text-white font-figtree flex items-center justify-center">
                Okay
              </button>
            ) : (
              <button className="cursor-pointer mt-[25px] w-full bg-primaryPink hover:bg-primaryBtnHover duration-300 transition-colors rounded-[30px] max-w-[510px] mx-auto h-[55px] text-base text-white font-figtree flex items-center justify-center">
                View Courses
              </button>
            )}
          </div>
        </div>
      </GlobalLayout>
    </>
  );
};

export default ConsentPage;
