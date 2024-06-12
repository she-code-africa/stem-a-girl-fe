import React from "react";
import InfoCard from "../info-card/InfoCard";
import Slider from "react-slick";

const index = ({ sliderData, imageH, settings }) => {
  return (
    <section className="mt-10 md:mt-16">
      <Slider {...settings}>
        {sliderData.map((item, i) => (
          <div
            className="p-4"
            key={i}
            onClick={() => console.log("clicked", i)}
          >
            <InfoCard
              title={item.title}
              cardImage={item.image}
              paragraph={item.description}
              imageH={imageH}
              link={item.link}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default index;
