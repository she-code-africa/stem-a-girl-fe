import React, { useState } from "react";
import GlobalLayout from "../layouts/GlobalLayout";
import OTPInput from "../shared-components/inputs/OTPInput";

const CODE_LENGTH = 6;

const VerifyEmailPage = () => {
  const [code, setCode] = useState("");

  const isComplete = code.length === CODE_LENGTH;

  const handleVerify = () => {
    // send `code` to your API here
    console.log("Verification code:", code);
  };

  return (
    <>
      <GlobalLayout>
        <div className="w-full min-h-screen bg-[#FDF2F8] py-20 flex items-center justify-center">
          <div className="w-[90%] xl:w-full max-w-[650px] mx-auto bg-white rounded-[23.94px] px-6 py-[27px] sm:py-[54px] lg:py-[67.03px] sm:px-[57.45px] ">
            <h4 className="font-extrabold font-figtree text-2xl sm:text-[32px] md:text-[36px] text-black text-center">
              Verify your email address
            </h4>

            <p className="font-medium font-figtree text-center mt-2 text-lg sm:text-xl sm:px-[75.6px]">
              Enter the 6 digit verification code sent to
              junior@shecodeafrica.org
            </p>

            <section className="mt-[38.3px] mx-auto w-full max-w-[448px]">
              <OTPInput length={CODE_LENGTH} onChange={setCode} />

              <button
                className="cursor-pointer mt-10 mx-auto w-full bg-primaryPink hover:bg-primaryBtnHover duration-300 transition-colors rounded-[30px] h-[55px] disabled:bg-[#FDC0E3] disabled:text-[#434343] disabled:cursor-not-allowed text-base text-white font-figtree flex items-center justify-center"
                type="button"
                disabled={!isComplete}
                onClick={handleVerify}
              >
                Continue
              </button>

              <p className="mt-4 w-full text-center font-semibold text-base font-figtree text-[#333333]">
                Didn’t get a code?{" "}
                <button type="button" className="text-primaryPink">
                  Resend code
                </button>
              </p>
            </section>
          </div>
        </div>
      </GlobalLayout>
    </>
  );
};

export default VerifyEmailPage;
