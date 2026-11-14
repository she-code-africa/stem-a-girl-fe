import GlobalLayout from "../layouts/GlobalLayout";
import ArrowLeft from "../shared-components/icons/ArrowLeft";
import { Link } from "react-router-dom";
import CustomInput from "../shared-components/inputs/CustomInput";
import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [linkSent, setLinkSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const isValidEmail = /^\S+@\S+\.\S+$/.test(email.trim());
  const isDisabled = !isValidEmail || isSubmitting;

  const sendResetLink = async () => {
    setIsSubmitting(true);
    setError("");

    try {
      // TODO: replace with your real request, for example:
      // await requestPasswordReset({ email: email.trim() });
      console.log("Sending reset link to:", email.trim());

      setLinkSent(true);
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isDisabled) return;
    sendResetLink();
  };

  return (
    <>
      <GlobalLayout>
        <div className="w-full min-h-screen bg-[#FDF2F8] py-20 flex items-center justify-center">
          <div className="w-[90%] xl:w-full max-w-[650px] mx-auto bg-white rounded-[23.94px]">
            <div className="w-full mx-auto max-w-[536.2px] py-6 sm:py-9 md:py-[67.02px]">
              <h4 className="font-extrabold font-figtree text-2xl sm:text-[32px] md:text-[40px] text-black text-center">
                {linkSent ? "Check your email" : "Forgot Password?"}
              </h4>

              <p
                className={`text-center mt-1 w-full ${!linkSent ? "max-w-[385px]" : "mt-3"} mx-auto text-lg sm:text-xl font-medium font-figtree`}
              >
                {linkSent
                  ? `We sent a reset link to ${email.trim()}`
                  : "No worries! Enter your email and we’ll send you a link to reset your password."}
              </p>

              <div className="w-full mt-[38.3px]">
                {linkSent ? (
                  <p className="mt-4 w-full text-center font-semibold text-base font-figtree text-[#333333]">
                    Didn’t receive the link?{" "}
                    <button
                      type="button"
                      className="text-primaryPink disabled:opacity-50 disabled:cursor-not-allowed"
                      onClick={sendResetLink}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Resend link"}
                    </button>
                  </p>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <CustomInput
                      name="email"
                      label="Email"
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError("");
                      }}
                      autoComplete="email"
                    />

                    {error && (
                      <p className="mt-3 text-center text-primaryPink text-sm font-figtree">
                        {error}
                      </p>
                    )}

                    <button
                      className="cursor-pointer mt-10 w-full bg-primaryPink hover:bg-primaryBtnHover duration-300 transition-colors rounded-[30px] h-[55px] disabled:bg-[#FDC0E3] disabled:text-[#434343] disabled:cursor-not-allowed text-base text-white font-figtree flex items-center justify-center"
                      type="submit"
                      disabled={isDisabled}
                    >
                      {isSubmitting ? "Sending..." : "Send reset link"}
                    </button>
                  </form>
                )}

                <Link
                  to="/sign-in"
                  className={`mt-6 w-full font-medium text-lg ${
                    linkSent ? "text-[#81717A]" : "text-primaryPink"
                  } mx-auto max-w-[202.46px] flex items-center justify-center gap-1`}
                >
                  <ArrowLeft
                    className={linkSent ? "text-[#81717A]" : "text-primaryPink"}
                  />
                  Back to log in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </GlobalLayout>
    </>
  );
};

export default ForgotPassword;
