import React from "react";
import Slider from "react-slick";
import InfoCard from "./InfoCard";

const InfoCardSlider = ({ sliderData, imageH, settings }) => {
  return (
    <section className="mt-10 md:mt-16">
      <Slider {...settings}>
        {sliderData.map((item, i) => {
          return (
            item.state === "published" && (
              <div className="p-4" key={i}>
                <InfoCard
                  title={item.title}
                  cardImage={item.image}
                  paragraph={item.description}
                  index={item.index}
                  imageH={imageH}
                  link={item.link}
                />
              </div>
            )
          );
        })}
      </Slider>
    </section>
  );
};

export default InfoCardSlider;
