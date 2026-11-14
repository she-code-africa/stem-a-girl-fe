import React from "react";

const ArrowLeft = ({ className = "text-primaryPink" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="19"
      viewBox="0 0 14 19"
      fill="none"
      className={className}
    >
      <g clipPath="url(#clip0_14732_14358)">
        <path
          d="M3.96094 9.5L8.71094 14.25"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="currentColor"
        />
        <path
          d="M3.96094 9.5L8.71094 4.75"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_14732_14358">
          <rect width="13.4583" height="19" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ArrowLeft;
