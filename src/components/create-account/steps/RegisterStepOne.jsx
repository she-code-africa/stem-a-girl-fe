import React from "react";
import registerImg from "../../../assets/images/registerBg.png";
import ArrowLeft from "../../shared-components/icons/ArrowLeft";

const RegisterStepOne = ({ setContinueToSignUp }) => {
  return (
    <>
      <section className="w-full border border-red-500 bg-[#FDF2F8]">
        <div className="min-h-screen w-full flex">
          <section className="w-full bg-white min-h-screen flex items-center justify-center ">
            <div className="w-[90%] sm:w-full max-w-[448px] mx-auto">
              <button
                className="flex font-medium font-figtree text-primaryPink w-full max-w-[86px] gap-1 items-center justify-center cursor-pointer"
                onClick={() => setContinueToSignUp(false)}
              >
                <ArrowLeft />
                Go back
              </button>

              <h3 className="mt-[30px] font-figtree text-black font-extrabold text-2xl sm:text-[32px] md:text-[36px]">
                Ready to learn?
              </h3>

              <form className="mt-12 w-full">
                <button
                  className="cursor-pointer w-full bg-primaryPink hover:bg-primaryBtnHover duration-300 transition-colors rounded-[30px] h-[55px] text-base text-white font-figtree flex items-center justify-center"
                  type="button"
                >
                  Next
                </button>
              </form>

              <p className="mt-4 w-full text-center font-semibold text-base font-figtree text-[#333333]">
                Already have an account?{" "}
                <a href="/" className="text-primaryPink">
                  Sign in
                </a>
              </p>
            </div>
          </section>
          <section className="w-full h-full border border-blue-500">
            <img
              src={registerImg}
              className="w-full h-full object-cover"
              alt="Register"
            />
          </section>
        </div>
      </section>
    </>
  );
};

export default RegisterStepOne;
