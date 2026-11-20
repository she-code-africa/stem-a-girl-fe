import React from "react";
import GlobalLayout from "../layouts/GlobalLayout";
import accountDeactivated from "../../assets/images/deactivatedBg.png";
import { Link } from "react-router-dom";

const AccountDeactivated = () => {
  return (
    <>
      <GlobalLayout>
        <section className="w-full bg-[#FDF2F8]">
          <div className="min-h-screen w-full flex">
            <section className="w-full bg-white min-h-screen flex items-center justify-center ">
              <div className="w-[90%] sm:w-full max-w-[528px] mx-auto">
                <h3 className="mt-[30px] font-figtree leading-[40px] text-black font-extrabold text-2xl sm:text-[32px] md:text-[36px]">
                  Oops! Your account has been deactivated.
                </h3>

                <p className="text-[#333333] mt-[10px] text-lg font-medium font-figtree">
                  Your parent/guardian did not give the required approval. To
                  reactivate your account, create a new account and ask your
                  parent/guardian to provide their approval within the next 7
                  days
                </p>

                <Link
                  to="/register"
                  className="cursor-pointer mt-10 w-full max-w-[448px] bg-primaryPink hover:bg-primaryBtnHover duration-300 transition-colors rounded-[30px] h-[55px] text-base text-white font-figtree flex items-center justify-center"
                  type="submit"
                >
                  Create Account
                </Link>
              </div>
            </section>

            <section className="w-full h-full hidden xl:block">
              <img
                src={accountDeactivated}
                className="w-full h-full object-cover"
                alt="Login"
              />
            </section>
          </div>
        </section>
      </GlobalLayout>
    </>
  );
};

export default AccountDeactivated;
