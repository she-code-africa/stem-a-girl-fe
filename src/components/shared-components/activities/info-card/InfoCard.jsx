import React from "react";

import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";

const InfoCard = ({
  index,
  title,
  paragraph,
  cardImage,
  imageH = "h-[298px]",
  link,
}) => {
  return (
    <div
      className={`border border-[rgba(230,232,236,1)] rounded-2xl overflow-hidden h-full`}
    >
      <figure className={`m-0 p-0 w-full ${imageH}`}>
        <img
          src={cardImage}
          alt="card-pic"
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="p-4 md:p-7">
        <h4 className="text-base md:text-lg lg:text-xl font-bold leading-normal md:leading-normal lg:leading-normal">
          {title}
        </h4>
        <p className="text-sm  leading-normal  mt-2">{paragraph}</p>

        <div className="flex py-5">
          <Link
            to={link || "#"}
            className="flex items-center gap-1 text-primaryPink capitalize text-base font-medium"
          >
            learn more <FaAngleRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
