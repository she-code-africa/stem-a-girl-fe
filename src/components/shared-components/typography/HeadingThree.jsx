import React from "react";

const HeadingThree = ({ title, textColor = "text-primaryPink" }) => {
  return <h3 className={`text-5xl md:text-[64px] ${textColor}`}>{title}</h3>;
};

export default HeadingThree;
