import React from "react";
import { quotes } from "../../../assets/images";
import Slider from "react-slick";
// import { testimonialSliderContent } from "../../../utils/appData";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import { getAllTestimonials } from "../../../services/queries";

const CustomNextArrows = ({ onClick }) => {
  return (
    <>
      <div
        className={`w-[41px] h-[41px] lg:w-[50px] lg:h-[50px] rounded-md bg-white text-primaryPink flex items-center justify-center absolute -bottom-32 left-16 cursor-pointer lg:text-xl`}
        onClick={onClick}
      >
        <FaArrowRightLong />
      </div>
    </>
  );
};

const CustomPrevArrows = ({ onClick }) => {
  return (
    <>
      <div
        className={`w-[41px] h-[41px] lg:w-[50px] lg:h-[50px] rounded-md bg-white text-primaryPink flex items-center justify-center -bottom-32 absolute left-0  cursor-pointer lg:text-xl`}
        onClick={onClick}
      >
        <FaArrowLeftLong />
      </div>
    </>
  );
};

const TestimonialsSlider = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["testimonials"],
    queryFn: getAllTestimonials,
  });
  const settings = {
    arrows: true,
    dots: false,
    infinite: !isLoading && data.length > 1 ? true : false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrows />,
    prevArrow: <CustomPrevArrows />,
  };

  return (
    <section className="mt-6 md:mt-10 border-l-2 border-l-white pl-5">
      <div className="w-full">
        <div className="w-[90%]">
          {isLoading ? (
            <div className="w-full h-[50px] rounded-md custom-skeleton bg-[#aaa8a8] relative"></div>
          ) : data.length > 0 ? (
            <Slider {...settings}>
              {data.map((item, i) => (
                <div className=" w-full" key={i}>
                  <p className="leading-normal text-base sm:text-lg sm:leading-normal md:text-xl md:leading-normal font-light text-[rgba(255,247,252,1)]">
                    {item.testimony}
                  </p>

                  <p className="text-right w-full my-1 text-sm italic capitalize">
                    ~ {item.name} ~
                  </p>
                </div>
              ))}
            </Slider>
          ) : (
            <p className="leading-normal text-base sm:text-lg sm:leading-normal md:text-xl md:leading-normal font-light text-[rgba(255,247,252,1)]">
              No testimonial available
            </p>
          )}
        </div>

        <figure className="m-0 p-0 w-[48px] mt-3">
          <img
            src={quotes}
            alt="quotes-pic"
            className="w-full object-contain"
          />
        </figure>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
