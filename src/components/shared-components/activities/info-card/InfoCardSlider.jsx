import React from "react";
import Slider from "react-slick";
import InfoCard from "./InfoCard";

const InfoCardSlider = ({ sliderData, imageH, settings }) => {
  return (
    <section className="mt-10 md:mt-16">
      <Slider {...settings}>
        {sliderData.map((item, i) => (
          <div className="p-4" key={i}>
            <InfoCard
              title={item.cardHeading}
              cardImage={item.picture}
              paragraph={item.cardParagraph}
              index={item.index}
              imageH={imageH}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default InfoCardSlider;
