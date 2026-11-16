import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import GlobalLayout from "../layouts/GlobalLayout";
import ArrowLeft from "../shared-components/icons/ArrowLeft";
import CustomPasswordInput from "../shared-components/inputs/CustomPassword";

const MIN_PASSWORD_LENGTH = 8;

const CreateNewPassword = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token"); // reads ?token=... from the email link

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const passwordTooShort =
    password.length > 0 && password.length < MIN_PASSWORD_LENGTH;
  const passwordsDontMatch =
    confirmPassword.length > 0 && password !== confirmPassword;

  const isDisabled =
    password.length < MIN_PASSWORD_LENGTH ||
    password !== confirmPassword ||
    isSubmitting;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isDisabled) return;

    setIsSubmitting(true);
    setError("");

    try {
      console.log("Resetting password with token:", token);

      setIsSuccess(true);
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <GlobalLayout>
        <div className="w-full min-h-screen bg-[#FDF2F8] py-20 flex items-center justify-center">
          <div className="w-[90%] xl:w-full max-w-[650px] mx-auto bg-white rounded-[23.94px] px-6 py-[27px] sm:py-[54px] lg:py-[67.03px]">
            {isSuccess ? (
              <div className="w-full max-w-[536.2px] mx-auto">
                <h4 className="font-extrabold font-figtree text-2xl sm:text-[32px] md:text-[40px] text-black text-center">
                  Password reset successful!
                </h4>

                <p className="text-center mt-2 w-full max-w-[385px] mx-auto text-lg sm:text-xl font-medium font-figtree text-[#333333]">
                  You can now log in with your new password
                </p>

                <div className="mt-[38.3px] mx-auto w-full max-w-[448px]">
                  <Link
                    to="/sign-in"
                    className="cursor-pointer w-full bg-primaryPink hover:bg-primaryBtnHover duration-300 transition-colors rounded-[30px] h-[55px] text-base text-white font-figtree flex items-center justify-center"
                  >
                    Proceed to log in
                  </Link>
                </div>
              </div>
            ) : (
              <div className="w-full max-w-[536.2px] mx-auto ">
                <h4 className="font-extrabold font-figtree text-2xl sm:text-[32px] md:text-[40px] text-black text-center">
                  Create new password
                </h4>

                <p className="text-center mt-2 w-full max-w-[385px] mx-auto text-lg sm:text-xl font-medium font-figtree text-[#333333]">
                  Your new password must be different from previous password
                </p>

                <form
                  className="mt-[38.3px] mx-auto w-full "
                  onSubmit={handleSubmit}
                >
                  <div className="w-full space-y-6">
                    <CustomPasswordInput
                      name="password"
                      label="New Password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        if (error) setError("");
                      }}
                      autoComplete="new-password"
                      errors={
                        passwordTooShort
                          ? {
                              message: `Password must be at least ${MIN_PASSWORD_LENGTH} characters.`,
                            }
                          : undefined
                      }
                    />

                    <CustomPasswordInput
                      name="confirmPassword"
                      label="Confirm Password"
                      placeholder="Enter your password"
                      value={confirmPassword}
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                        if (error) setError("");
                      }}
                      autoComplete="new-password"
                      errors={
                        passwordsDontMatch
                          ? { message: "Passwords do not match." }
                          : undefined
                      }
                    />
                  </div>

                  {error && (
                    <p className="mt-4 text-center text-primaryPink text-sm font-figtree">
                      {error}
                    </p>
                  )}

                  <button
                    className="cursor-pointer mt-10 w-full mx-auto max-w-[448px] bg-primaryPink hover:bg-primaryBtnHover duration-300 transition-colors rounded-[30px] h-[55px] disabled:bg-[#FDC0E3] disabled:text-[#434343] disabled:cursor-not-allowed text-base text-white font-figtree flex items-center justify-center"
                    type="submit"
                    disabled={isDisabled}
                  >
                    {isSubmitting ? "Resetting..." : "Reset password"}
                  </button>

                  <Link
                    to="/sign-in"
                    className="mt-4 w-full font-medium text-lg text-primaryPink mx-auto max-w-[202.46px] flex items-center justify-center gap-1"
                  >
                    <ArrowLeft />
                    Back to log in
                  </Link>
                </form>
              </div>
            )}
          </div>
        </div>
      </GlobalLayout>
    </>
  );
};

export default CreateNewPassword;
