import React from "react";
import { FaTimesCircle } from "react-icons/fa";
import { PrimaryInput } from "../index";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const NewsLetter = ({ setShowNewsLetterModal }) => {
  const schema = yup
    .object({
      fullName: yup.string().required("Please enter your name"),
      email: yup
        .string()
        .email("Please enter a valid email address.")
        .required("Please enter your email address."),
      description: yup.string().required("Please enter your message."),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onsubmit = (data) => console.log("submitted form");
  return (
    <section className="fixed bg-[rgba(0,0,0,0.5)] top-0 bottom-0 left-0 right-0 z-[3] flex items-center justify-center py-5">
      <div className="bg-white max-w-[500px] w-[90%] mx-auto py-4 px-4">
        <article className="border-2 border-primaryPink p-5">
          <div className="flex justify-end">
            <button
              className="text-2xl text-[rgba(156,163,175,1)]"
              onClick={() => setShowNewsLetterModal(false)}
            >
              <FaTimesCircle />
            </button>
          </div>

          <h3 className="leading-normal text-xl md:text-2xl md:leading-normal mt-5 text-primaryPink font-semibold capitalize">
            subscribe to our newsletter
          </h3>

          <p className="my-4 text-base leading-normal font-medium">
            Sign up to get the latest news and updates.
          </p>

          <form className="my-4 w-full" onSubmit={handleSubmit(onsubmit)}>
            <PrimaryInput
              register={register}
              label="name"
              name="fullName"
              placeholder="Enter your full name"
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

            <div className="my-5 mx-auto w-full max-w-[177px] rounded-[30px] h-[56px] overflow-hidden bg-primaryPink">
              <button className="w-full h-full text-white capitalize">
                sign up
              </button>
            </div>
          </form>
        </article>
      </div>
    </section>
  );
};

export default NewsLetter;
