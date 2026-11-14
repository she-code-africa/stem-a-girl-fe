import React from "react";

const AngleDown = ({ className = "text-[#211F1F]" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      className={className}
    >
      <g clipPath="url(#clip0_14743_29393)">
        <path
          d="M10.7902 11.9155C11.1807 12.3061 11.8139 12.3061 12.2044 11.9155L15.5635 8.55645C15.9377 8.18225 16.5444 8.18225 16.9186 8.55645C17.2928 8.93064 17.2928 9.53733 16.9186 9.91153L12.2044 14.6257C11.8139 15.0162 11.1807 15.0162 10.7902 14.6257L6.07598 9.91153C5.70178 9.53733 5.70178 8.93064 6.07598 8.55645C6.45018 8.18225 7.05687 8.18225 7.43106 8.55645L10.7902 11.9155Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_14743_29393">
          <rect width="23" height="23" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default AngleDown;
