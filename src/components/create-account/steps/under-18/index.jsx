import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowLeft from "../../../shared-components/icons/ArrowLeft";
import CustomInput from "../../../shared-components/inputs/CustomInput";
import CustomPasswordInput from "../../../shared-components/inputs/CustomPassword";

const MIN_PASSWORD_LENGTH = 8;

const UnderAgeOnboarding = ({ formValues, setFormValues, goBack }) => {
  const navigate = useNavigate();
  const [userPassword, setUserPassword] = useState(false);

  const handleChange = (field) => (e) => {
    const value = e.target.value;
    setFormValues((prev) => ({ ...prev, [field]: value }));
  };

  // STEP A: parent/guardian details
  const isValidParentEmail = /^\S+@\S+\.\S+$/.test(
    formValues.parentEmail || "",
  );

  const isDetailsDisabled =
    !isValidParentEmail ||
    !formValues.fullName?.trim() ||
    !formValues.username?.trim();

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

  // Runs for both "Next" and "Create account" (and the Enter key)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userPassword) {
      if (!isDetailsDisabled) setUserPassword(true);
      return;
    }

    if (isPasswordDisabled) return;
    navigate("/verify-email");
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
        {userPassword
          ? "Create your password"
          : "Get parental/guardian consent"}
      </h3>

      <p className="text-[#333333] mt-[10px] text-lg font-medium font-figtree">
        {userPassword
          ? "Create a password you’ll use to sign in to your account."
          : "Enter your Parent/Guardian’s email and ask them to give their consent."}
      </p>

      <form className="mt-12 w-full" onSubmit={handleSubmit}>
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
                className="cursor-pointer w-full bg-primaryPink hover:bg-primaryBtnHover duration-300 transition-colors rounded-[30px] h-[55px] disabled:bg-[#FDC0E3] disabled:text-[#434343] disabled:cursor-not-allowed text-base text-white font-figtree flex items-center justify-center"
                type="submit"
                disabled={isPasswordDisabled}
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
                name="parentEmail"
                label="Parent/Guardian Email"
                type="email"
                placeholder="Enter your parent/guardian’s email address"
                value={formValues.parentEmail || ""}
                onChange={handleChange("parentEmail")}
              />

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
            </div>

            <button
              className="cursor-pointer mt-10 w-full bg-primaryPink hover:bg-primaryBtnHover duration-300 transition-colors rounded-[30px] h-[55px] disabled:bg-[#FDC0E3] disabled:text-[#434343] disabled:cursor-not-allowed text-base text-white font-figtree flex items-center justify-center"
              type="submit"
              disabled={isDetailsDisabled}
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

export default UnderAgeOnboarding;
