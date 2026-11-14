import { useState } from "react";
import ArrowLeft from "../../../shared-components/icons/ArrowLeft";
import CustomInput from "../../../shared-components/inputs/CustomInput";
import CustomPasswordInput from "../../../shared-components/inputs/CustomPassword";

const MIN_PASSWORD_LENGTH = 8;

const AdultOnboarding = ({ formValues, setFormValues, goBack, onNext }) => {
  const [userPassword, setUserPassword] = useState(false);

  const handleChange = (field) => (e) => {
    const value = e.target.value;
    setFormValues((prev) => ({ ...prev, [field]: value }));
  };

  // STEP A: details
  const isValidEmail = /^\S+@\S+\.\S+$/.test(formValues.email || "");

  const isDetailsDisabled =
    !formValues.fullName?.trim() ||
    !formValues.username?.trim() ||
    !isValidEmail;

  // STEP B: password
  const password = formValues.password || "";
  const confirmPassword = formValues.confirmPassword || "";

  const passwordTooShort =
    password.length > 0 && password.length < MIN_PASSWORD_LENGTH;
  const passwordsDontMatch =
    confirmPassword.length > 0 && password !== confirmPassword;

  const isPasswordDisabled =
    password.length < MIN_PASSWORD_LENGTH || password !== confirmPassword;

  // The top "Go back" goes to the previous screen depending on where we are
  const handleTopBack = () => {
    if (userPassword) setUserPassword(false);
    else goBack();
  };

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={handleTopBack}
        className="flex font-medium font-figtree text-primaryPink w-full max-w-[86px] gap-1 items-center justify-center cursor-pointer"
      >
        <ArrowLeft />
        Go back
      </button>

      <h3 className="mt-[30px] font-figtree text-black font-extrabold text-2xl sm:text-[32px] md:text-[36px]">
        {userPassword ? "Create your password" : "Create an account"}
      </h3>

      <p className="text-[#333333] mt-[10px] text-lg font-medium font-figtree">
        {userPassword
          ? "Create a password you’ll use to sign in to your account."
          : "Sign up to begin your journey."}
      </p>

      <form className="mt-12 w-full" onSubmit={(e) => e.preventDefault()}>
        {userPassword ? (
          <>
            <div className="w-full space-y-3">
              <CustomPasswordInput
                name="password"
                label="Password"
                placeholder="Enter your password"
                value={password}
                onChange={handleChange("password")}
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
                label="Confirm password"
                placeholder="Re-enter your password"
                value={confirmPassword}
                onChange={handleChange("confirmPassword")}
                errors={
                  passwordsDontMatch
                    ? { message: "Passwords do not match." }
                    : undefined
                }
              />
            </div>

            <div className="mt-10 w-full space-y-4">
              <button
                className="cursor-pointer w-full bg-primaryPink hover:bg-primaryBtnHover duration-300 transition-colors rounded-[30px] h-[55px] disabled:opacity-50 disabled:cursor-not-allowed text-base text-white font-figtree flex items-center justify-center"
                type="button"
                disabled={isPasswordDisabled}
                onClick={onNext}
              >
                Create account
              </button>

              <button
                className="cursor-pointer w-full border border-primaryPink hover:bg-primaryBtnHover duration-300 transition-colors rounded-[30px] h-[55px] text-base text-primaryPink hover:text-white font-figtree flex items-center justify-center"
                type="button"
                onClick={() => setUserPassword(false)}
              >
                Back
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="w-full space-y-3">
              <CustomInput
                name="fullName"
                label="Full name"
                type="text"
                placeholder="Enter your full name"
                value={formValues.fullName || ""}
                onChange={handleChange("fullName")}
              />

              <CustomInput
                name="username"
                label="Username"
                type="text"
                placeholder="Choose a username"
                value={formValues.username || ""}
                onChange={handleChange("username")}
              />

              <CustomInput
                name="email"
                label="Email"
                type="email"
                placeholder="Enter your email address"
                value={formValues.email || ""}
                onChange={handleChange("email")}
              />
            </div>

            <button
              className="cursor-pointer mt-10 w-full bg-primaryPink hover:bg-primaryBtnHover duration-300 transition-colors rounded-[30px] h-[55px] disabled:opacity-50 disabled:cursor-not-allowed text-base text-white font-figtree flex items-center justify-center"
              type="button"
              disabled={isDetailsDisabled}
              onClick={() => setUserPassword(true)}
            >
              Next
            </button>
          </>
        )}
      </form>

      <p className="mt-4 w-full text-center font-semibold text-base font-figtree text-[#333333]">
        Already have an account?{" "}
        <a href="/" className="text-primaryPink">
          Sign in
        </a>
      </p>
    </div>
  );
};

export default AdultOnboarding;
