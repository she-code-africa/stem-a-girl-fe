import { Country } from "country-state-city";
import registerImg from "../../../assets/images/registerBg.png";
import ArrowLeft from "../../shared-components/icons/ArrowLeft";
import CustomSelect from "../../shared-components/inputs/CustomSelect";
import { useEffect, useState } from "react";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const START_YEAR = 1950;
const currentYear = new Date().getFullYear();
const years = Array.from({ length: currentYear - START_YEAR + 1 }, (_, i) =>
  String(currentYear - i),
);

const RegisterStepOne = ({ setContinueToSignUp }) => {
  const countries = Country.getAllCountries();

  return (
    <>
      <section className="w-full bg-[#FDF2F8]">
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
                <div className="w-full space-y-3">
                  <CustomSelect
                    name="country"
                    label="Country"
                    placeholder="Select Country"
                    options={countries.map((country) => country.name)}
                    isSearch={true}
                    searchPlaceholder="Search for country"
                  />

                  <section className="w-full">
                    <label
                      htmlFor="age"
                      className="capitalize text-[#211F1F] text-base font-figtree"
                    >
                      age
                    </label>
                    <div className="w-full grid sm:grid-cols-2 gap-3 ">
                      <CustomSelect
                        name="Month"
                        label=""
                        placeholder="Month"
                        options={months}
                      />
                      <CustomSelect
                        name="Year"
                        label=""
                        placeholder="Year"
                        options={years}
                      />
                    </div>
                  </section>
                </div>
                <button
                  className="cursor-pointer mt-10 w-full bg-primaryPink hover:bg-primaryBtnHover duration-300 transition-colors rounded-[30px] h-[55px] text-base text-white font-figtree flex items-center justify-center"
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
          <section className="w-full h-full hidden xl:block">
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
