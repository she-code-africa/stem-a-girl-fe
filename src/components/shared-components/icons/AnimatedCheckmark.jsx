import React from "react";

const AnimatedCheck = ({ size = 107, className = "" }) => {
  return (
    <>
      <style>{`
        @keyframes check-draw {
          0%   { stroke-dashoffset: 1; opacity: 0; }
          1%   { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 1; }
        }
        @keyframes check-pop {
          0%   { transform: scale(1); }
          50%  { transform: scale(1.12); }
          100% { transform: scale(1); }
        }
        .check-wrapper {
          animation: check-pop 0.4s ease-out 1.1s both;
        }
        .check-circle {
          stroke-dasharray: 1 1;
          stroke-dashoffset: 1;
          animation: check-draw 0.7s ease-in-out 0.1s forwards;
        }
        .check-tick {
          stroke-dasharray: 1 1;
          stroke-dashoffset: 1;
          animation: check-draw 0.4s ease-out 0.7s forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .check-wrapper, .check-circle, .check-tick {
            animation: none;
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }
      `}</style>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 107 107"
        fill="none"
        className={`check-wrapper ${className}`}
        aria-hidden="true"
      >
        <path
          className="check-circle"
          pathLength="1"
          d="M13.2578 53.0215C13.2578 31.0609 31.0649 13.2539 53.0254 13.2539C74.9859 13.2539 92.793 31.0609 92.793 53.0215C92.793 74.982 74.9859 92.7891 53.0254 92.7891C31.0649 92.7891 13.2578 74.982 13.2578 53.0215Z"
          strokeWidth="8.83724"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#B70569"
        />
        <path
          className="check-tick"
          pathLength="1"
          d="M35.3516 53.0208L48.6074 66.2767L70.7005 44.1836"
          strokeWidth="8.83724"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#B70569"
        />
      </svg>
    </>
  );
};

export default AnimatedCheck;
