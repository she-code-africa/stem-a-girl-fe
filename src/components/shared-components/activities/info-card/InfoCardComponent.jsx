import React from "react";
import InfoCardHeader from "./InfoCardHeader";
import InfoCardSlider from "./InfoCardSlider";

const InfoCardComponent = ({
  infoCardHeading,
  infoCardParagraph,
  sliderData,
  imageH,
  settings,
}) => {
  return (
    <section className="w-full">
      <InfoCardHeader
        infoCardHeading={infoCardHeading}
        infoCardParagraph={infoCardParagraph}
      />
      <InfoCardSlider
        sliderData={sliderData}
        imageH={imageH}
        settings={settings}
      />
    </section>
  );
};

export default InfoCardComponent;
