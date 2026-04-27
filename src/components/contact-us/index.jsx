import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import { makeEnquiry } from "../../services/mutations";
import { useMutation } from "@tanstack/react-query";
import { PrimaryInput } from "../index";
import contactImage from "../../assets/images/v2/contact-us.jpg";
import "react-toastify/dist/ReactToastify.css";

import Recaptcha from "../Recaptcha";
import PrimaryButton from "../shared-components/buttons/PrimaryButton";
import HeadingThree from "../shared-components/typography/HeadingThree";

const ContactUsComponent = () => {
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const schema = yup
    .object({
      fullName: yup.string().required("Please enter your name"),
      email: yup
        .string()
        .email("Please enter a valid email address.")
        .required("Please enter your email address."),
      description: yup.string().required("Please enter your message."),
      subject: yup.string().required("Please enter your subject."),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const { mutate: handleContactUs, isPending } = useMutation({
    mutationFn: makeEnquiry,
    onSuccess: () => {
      toast.success("Message sent Successfully!", {
        position: "top-right",
      });
      reset();
      setRecaptchaToken("");
    },
    onError: (error, variables) => {
      toast.error("An error occurred.", {
        position: "top-right",
      });
    },
  });

  const onSubmit = (data) => {
    const payload = {
      description: data.description,
      email: data.email,
      fullName: data.fullName,
      message: data.description,
      subject: data.subject,
    };
    if (!recaptchaToken) {
      toast.error("Please complete the reCAPTCHA.", {
        position: "top-right",
      });
      return;
    }
    handleContactUs(payload);
  };

  const textareaRef = useRef();

  const handleTextAreaFocus = () => {
    textareaRef.current.classList.add("border-[rgb(233,152,203)]");
  };

  const handleTextAreaBlur = () => {
    textareaRef.current.classList.remove("border-[rgb(233,152,203)]");
  };

  return (
    <>
      <ToastContainer />
      <section className=" text-sealBrown font-mulish w-full -mt-8 bg-whiteSmoke ">
        <div className="relative bg-[#B70569]  ">
          <div className="bg-[rgba(0,0,0,0.35)] pt-22 pb-14 md:pt-[132px] md:pb-[100px] w-full flex items-center justify-center">
            <article className="w-[90%] max-w-[1040px] mx-auto text-center text-white">
              <h2 className=" text-[64px] lg:text-9xl lg:leading-[130px] md:text-8xl leading-normal  ">
                Contact Us
              </h2>

              <p className="font-figtree font-medium lg:text-2xl text-lg md:text-xl">
                Thank you for your interest in STEM A Girl with She Code
                Africa!. Whether you have questions, feedback, or want to get
                involved, we’d love to hear from you. Send an email to
                info@shecodeafrica.org or fill the form below and send.
              </p>
            </article>
          </div>
        </div>

        <section className="w-full bg-white py-14 md:py-[100px]">
          <div className="w-[90%]  max-w-[1256px] mx-auto xl:flex  xl:gap-[30px]">
            <figure className="min-h-[713px] w-full hidden xl:block max-w-[613px] rounded-[30px] overflow-hidden">
              <img
                src={contactImage}
                alt="Contact Us"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </figure>
            <div className="w-full max-w-[613px] mx-auto xl:mx-0 xl:pt-5">
              <HeadingThree title="Leave us a message" />
              <form
                className="w-full mt-4 md:mt-8"
                onSubmit={handleSubmit(onSubmit)}
              >
                <PrimaryInput
                  register={register}
                  label="name"
                  name="fullName"
                  placeholder="Enter your name"
                  type="text"
                  errors={errors.fullName}
                />
                <PrimaryInput
                  register={register}
                  label="email address"
                  name="email"
                  placeholder="Enter your email address"
                  type="email"
                  errors={errors.email}
                />
                <PrimaryInput
                  label="enter subject"
                  name="subject"
                  placeholder="What is the subject of this message"
                  type="text"
                  errors={errors.subject}
                  register={register}
                />

                <div className="w-full">
                  <label
                    htmlFor="description"
                    className="text-base capitalize font-roboto font-medium text-[rgba(46,52,79,1)]"
                  >
                    enter message
                  </label>
                  <div
                    className={`w-full h-[180px] mt-2 rounded-lg border border-black overflow-hidden ${
                      errors.description?.message && "border-primaryPink"
                    }`}
                    ref={textareaRef}
                  >
                    <textarea
                      {...register("description")}
                      id="description"
                      name="description"
                      placeholder="Write your message"
                      className="text-base w-full h-full border-0 outline-none p-3 bg-transparent placeholder:text-[rgba(130,130,130,1)] resize-none"
                      onFocus={handleTextAreaFocus}
                      onBlur={handleTextAreaBlur}
                    ></textarea>
                  </div>
                  <p className="text-primaryPink text-sm">
                    {errors.description?.message}
                  </p>
                </div>

                <div className="flex w-full">
                  <PrimaryButton
                    isLink={false}
                    className="mt-5 font-figtree md:mt-8 w-full max-w-[116px] rounded-lg h-[55px] overflow-hidden "
                    title={isPending ? "Submitting" : "Submit"}
                  />
                </div>
              </form>
              <Recaptcha onToken={(token) => setRecaptchaToken(token)} />
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default ContactUsComponent;
