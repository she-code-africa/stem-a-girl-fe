import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GlobalLayout from "../layouts/GlobalLayout";
import ArrowLeft from "../shared-components/icons/ArrowLeft";
import CustomPasswordInput from "../shared-components/inputs/CustomPassword";

const MIN_PASSWORD_LENGTH = 8;

const ChangePassword = () => {
  const navigate = useNavigate();

  // step 1 = old password, step 2 = new password, step 3 = success
  const [step, setStep] = useState(1);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  // STEP 1 checks
  const isOldDisabled = !oldPassword || isSubmitting;

  // STEP 2 checks
  const passwordTooShort =
    newPassword.length > 0 && newPassword.length < MIN_PASSWORD_LENGTH;
  const sameAsOld = newPassword.length > 0 && newPassword === oldPassword;
  const passwordsDontMatch =
    confirmPassword.length > 0 && newPassword !== confirmPassword;

  const isNewDisabled =
    newPassword.length < MIN_PASSWORD_LENGTH ||
    sameAsOld ||
    newPassword !== confirmPassword ||
    isSubmitting;

  const clearError = () => {
    if (error) setError("");
  };

  // Step 1: check the old password
  const handleVerifyOld = async (e) => {
    e.preventDefault();
    if (isOldDisabled) return;

    setIsSubmitting(true);
    setError("");

    try {
      console.log("Verifying old password");

      setStep(2);
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          "That password is incorrect. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Step 2: save the new password
  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (isNewDisabled) return;

    setIsSubmitting(true);
    setError("");

    try {
      console.log("Changing password");

      setStep(3);
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const backLinkClass =
    "mt-4 w-full font-medium text-lg text-primaryPink mx-auto max-w-[202.46px] flex items-center justify-center gap-1 cursor-pointer";

  const primaryBtnClass =
    "cursor-pointer w-full bg-primaryPink hover:bg-primaryBtnHover duration-300 transition-colors rounded-[30px] h-[55px] disabled:bg-[#FDC0E3] disabled:text-[#434343] disabled:cursor-not-allowed text-base text-white font-figtree flex items-center justify-center";

  return (
    <>
      <GlobalLayout>
        <div className="w-full min-h-screen bg-[#FDF2F8] py-20 flex items-center justify-center">
          <div className="w-[90%] xl:w-full max-w-[650px] mx-auto bg-white rounded-[23.94px] px-6 py-[27px] sm:py-[54px] lg:py-[67.03px] ">
            {/* STEP 1: OLD PASSWORD */}
            {step === 1 && (
              <div className="w-full max-w-[536.2px] mx-auto">
                <h4 className="font-extrabold font-figtree text-2xl sm:text-[32px] md:text-[40px] text-black text-center">
                  Change Your password
                </h4>

                <p className="text-center mt-3 w-full max-w-[385px] mx-auto text-lg sm:text-xl font-medium font-figtree text-[#333333]">
                  Enter your current password to continue
                </p>

                <form
                  className="mt-[38.3px] mx-auto w-full "
                  onSubmit={handleVerifyOld}
                >
                  <CustomPasswordInput
                    name="oldPassword"
                    label="Old Password"
                    placeholder="Enter your password"
                    value={oldPassword}
                    onChange={(e) => {
                      setOldPassword(e.target.value);
                      clearError();
                    }}
                    autoComplete="current-password"
                  />

                  {error && (
                    <p className="mt-4 text-center text-primaryPink text-sm font-figtree">
                      {error}
                    </p>
                  )}

                  <button
                    className={`${primaryBtnClass} mt-10 max-w-[448px] mx-auto`}
                    type="submit"
                    disabled={isOldDisabled}
                  >
                    {isSubmitting ? "Checking..." : "Next"}
                  </button>

                  <button
                    type="button"
                    className={backLinkClass}
                    onClick={() => navigate(-1)}
                  >
                    <ArrowLeft />
                    Back
                  </button>
                </form>
              </div>
            )}

            {/* STEP 2: NEW PASSWORD */}
            {step === 2 && (
              <div className="w-full max-w-[536.2px] mx-auto">
                <h4 className="font-extrabold font-figtree text-2xl sm:text-[32px] md:text-[40px] text-black text-center">
                  Change Your password
                </h4>

                <p className="text-center mt-2 w-full max-w-[385px] mx-auto text-lg sm:text-xl font-medium font-figtree text-[#333333]">
                  Your new password must be different from previous password
                </p>

                <form
                  className="mt-[38.3px] mx-auto w-full "
                  onSubmit={handleChangePassword}
                >
                  <div className="w-full space-y-6">
                    <CustomPasswordInput
                      name="newPassword"
                      label="New Password"
                      placeholder="Enter your password"
                      value={newPassword}
                      onChange={(e) => {
                        setNewPassword(e.target.value);
                        clearError();
                      }}
                      autoComplete="new-password"
                      errors={
                        passwordTooShort
                          ? {
                              message: `Password must be at least ${MIN_PASSWORD_LENGTH} characters.`,
                            }
                          : sameAsOld
                            ? {
                                message:
                                  "New password must be different from your old password.",
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
                        clearError();
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
                    className={`${primaryBtnClass} mt-10 max-w-[448px] mx-auto`}
                    type="submit"
                    disabled={isNewDisabled}
                  >
                    {isSubmitting ? "Changing..." : "Change password"}
                  </button>

                  <button
                    type="button"
                    className={backLinkClass}
                    onClick={() => {
                      setStep(1);
                      setError("");
                    }}
                  >
                    <ArrowLeft />
                    Back
                  </button>
                </form>
              </div>
            )}

            {/* STEP 3: SUCCESS */}
            {step === 3 && (
              <div className="w-full max-w-[536.2px] mx-auto">
                <h4 className="font-extrabold font-figtree text-2xl sm:text-[32px] md:text-[40px] text-black text-center leading-[54px]">
                  Password changed successfully!
                </h4>

                <p className="text-center mt-2 w-full max-w-[385px] mx-auto text-lg sm:text-xl font-medium font-figtree text-[#333333]">
                  You can now log in with your new password
                </p>

                <div className="mt-[38.3px] mx-auto w-full max-w-[448px]">
                  <Link to="/sign-in" className={primaryBtnClass}>
                    Proceed to log in
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </GlobalLayout>
    </>
  );
};

export default ChangePassword;
