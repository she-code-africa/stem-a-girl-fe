import React from "react";

const InfoCardHeader = ({ infoCardHeading, infoCardParagraph }) => {
  return (
    <article className="w-full text-sealBrown">
      <h3 className="text-2xl md:text-3xl lg:text-4xl leading-normal md:leading-normal lg:leading-normal text-center font-semibold capitalize">
        {infoCardHeading}
      </h3>

      <p className="text-fiord text-base md:text-lg leading-normal md:leading-normal text-center mt-3 max-w-[800px] md:mx-auto w-full">
        {infoCardParagraph}
      </p>
    </article>
  );
};

export default InfoCardHeader;
