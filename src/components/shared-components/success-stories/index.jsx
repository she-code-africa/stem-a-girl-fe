import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { successStoriesSlides as slides } from "../../../utils/appData";

const SuccessStories = () => {
  const [current, setCurrent] = useState(0);

  const isFirst = current === 0;
  const isLast = current === slides.length - 1;

  const prev = () => {
    if (!isFirst) setCurrent((c) => c - 1);
  };
  const next = () => {
    if (!isLast) setCurrent((c) => c + 1);
  };

  const slide = slides[current];

  return (
    <section className="bg-[#FEFEFE] mt-16 pt-16 w-full text-white overflow-hidden">
      <div className="w-[90%] max-w-[1280px] mx-auto flex flex-col lg:flex-row lg:items-stretch lg:gap-12">
        <div className="w-full lg:w-[45%] lg:h-[460px] flex-shrink-0 rounded-2xl overflow-hidden mb-8 lg:mb-0">
          <img
            src={slide.image}
            alt="Success stories"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Content lg:h-[460px] */}
        <div className="xl:mt-0 w-full lg:w-[55%]  flex flex-col gap-4 lg:justify-between">
          <span className="inline-block self-start bg-[#5C0335] text-white rounded-full font-bold text-sm md:text-base px-5 py-2.5">
            Success Stories
          </span>

          <div className="flex flex-col gap-4">
            {slide.testimonials.map((t, i) => (
              <div
                key={i}
                className={`flex flex-col gap-1 border-l-4 pl-4 ${i === 0 ? "border-[#FF8A3F]" : "border-[#B70569]"}`}
              >
                <p className="text-black text-base md:text-lg xl:text-xl leading-relaxed font-light italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-black text-sm md:text-lg xl:text-xl mt-1 xl:mt-3 font-medium">
                  {t.name}
                </p>
                <p className="text-[#B70569] text-base font-medium">
                  {t.location}
                </p>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center gap-3 self-end">
            <button
              onClick={prev}
              aria-label="Previous slide"
              disabled={isFirst}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors border-2 ${
                isFirst
                  ? "text-[#FFB8E0] border-[#FFB8E0] cursor-not-allowed"
                  : "text-[#B70569] border-[#B70569]"
              }`}
            >
              <FaArrowLeft className="text-sm md:text-base" />
            </button>
            <button
              onClick={next}
              aria-label="Next slide"
              disabled={isLast}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors border-2 ${
                isLast
                  ? "text-[#FFB8E0] border-[#FFB8E0] cursor-not-allowed"
                  : "text-[#B70569] border-[#B70569]"
              }`}
            >
              <FaArrowRight className="text-sm md:text-base" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
