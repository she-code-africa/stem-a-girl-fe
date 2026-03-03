import React from "react";
import { Link } from "react-router-dom";

const SecondaryButton = ({
  isLink,
  title,
  url,
  className,
  icon,
  iconLeft = false,
  handleClick,
}) => {
  return (
    <>
      {isLink ? (
        <Link
          to={url}
          className={`bg-transparent text-primaryPink border border-primaryPink hover:border-scaBloom duration-300 transition-colors ease-linear ${className} flex items-center justify-center ${iconLeft ? "flex-row-reverse" : "flex-row"}`}
        >
          {title} {icon}
        </Link>
      ) : (
        <button
          className={` flex items-center justify-center ${iconLeft ? "flex-row-reverse" : "flex-row"} overflow-hidden bg-transparent border border-primaryPink text-primaryPink hover:border-scaBloom duration-300 transition-colors ease-linear ${className}`}
          onClick={handleClick}
        >
          {title} {icon}
        </button>
      )}
    </>
  );
};

export default SecondaryButton;
