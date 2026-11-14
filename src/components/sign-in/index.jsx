import React, { useState } from "react";
import GlobalLayout from "../layouts/GlobalLayout";
import { Link, useNavigate } from "react-router-dom";
import singinImg from "../../assets/images/signInBg.png";
import ArrowLeft from "../shared-components/icons/ArrowLeft";
import CustomInput from "../shared-components/inputs/CustomInput";
import CustomPasswordInput from "../shared-components/inputs/CustomPassword";

const SignIn = () => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (field) => (e) => {
    const value = e.target.value;
    setFormValues((prev) => ({ ...prev, [field]: value }));
    if (error) setError(""); // clear the error as soon as they start fixing it
  };

  const isDisabled =
    !formValues.username.trim() || !formValues.password || isSubmitting;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isDisabled) return;

    setIsSubmitting(true);
    setError("");

    try {
      // TODO: replace this with your real login request, for example:
      // const data = await loginUser({
      //   username: formValues.username.trim(),
      //   password: formValues.password,
      // });
      // localStorage.setItem("token", data.token);
      console.log("Logging in with:", {
        username: formValues.username.trim(),
      });

      navigate("/dashboard"); // change to wherever users should land after login
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          "Invalid username or password. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <GlobalLayout>
        <section className="w-full bg-[#FDF2F8]">
          <div className="min-h-screen w-full flex">
            <section className="w-full bg-white min-h-screen flex items-center justify-center ">
              <div className="w-[90%] sm:w-full max-w-[448px] mx-auto">
                <button
                  type="button"
                  className="flex font-medium font-figtree text-primaryPink w-full max-w-[86px] gap-1 items-center justify-center cursor-pointer"
                  onClick={() => navigate(-1)}
                >
                  <ArrowLeft />
                  Go back
                </button>

                <h3 className="mt-[30px] font-figtree text-black font-extrabold text-2xl sm:text-[32px] md:text-[36px]">
                  Welcome back 😉
                </h3>

                <p className="text-[#333333] mt-[10px] text-lg font-medium font-figtree">
                  Log in to continue learning
                </p>

                <form className="mt-12 w-full" onSubmit={handleSubmit}>
                  <div className="w-full space-y-3">
                    <CustomInput
                      name="username"
                      label="Username"
                      type="text"
                      placeholder="Enter your username"
                      value={formValues.username}
                      onChange={handleChange("username")}
                      autoComplete="username"
                    />

                    <div className="w-full">
                      <CustomPasswordInput
                        name="password"
                        label="Password"
                        placeholder="Enter your password"
                        value={formValues.password}
                        onChange={handleChange("password")}
                        autoComplete="current-password"
                      />

                      <div className="mt-2 w-full flex justify-end">
                        <Link
                          to="/forgot-password"
                          className="font-figtree text-base font-medium text-primaryPink"
                        >
                          Forgot password?
                        </Link>
                      </div>
                    </div>
                  </div>

                  {error && (
                    <p className="mt-4 text-center text-primaryPink text-sm font-figtree">
                      {error}
                    </p>
                  )}

                  <button
                    className="cursor-pointer mt-10 w-full bg-primaryPink hover:bg-primaryBtnHover duration-300 transition-colors rounded-[30px] h-[55px] disabled:bg-[#FDC0E3] disabled:text-[#434343] disabled:cursor-not-allowed text-base text-white font-figtree flex items-center justify-center"
                    type="submit"
                    disabled={isDisabled}
                  >
                    {isSubmitting ? "Logging in..." : "Log in"}
                  </button>
                </form>

                <p className="mt-4 w-full text-center font-semibold text-base font-figtree text-[#333333]">
                  Age <span className="text-primaryPink">10-21</span> and you
                  don’t have an account?{" "}
                  <a href="/register" className="text-primaryPink">
                    Create an account
                  </a>
                </p>
              </div>
            </section>
            <section className="w-full h-full hidden xl:block">
              <img
                src={singinImg}
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

export default SignIn;
