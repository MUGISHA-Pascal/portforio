import React from "react";

const Spinner: React.FC = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      width="200"
      height="200"
      style={{
        shapeRendering: "auto",
        display: "block",
        background: "transparent",
      }}
    >
      <g>
        <circle
          strokeLinecap="round"
          fill="none"
          strokeDasharray="25.132741228718345 25.132741228718345"
          stroke="#290b68"
          strokeWidth="2"
          r="16"
          cy="50"
          cx="50"
        >
          <animateTransform
            values="0 50 50;360 50 50"
            keyTimes="0;1"
            dur="1s"
            repeatCount="indefinite"
            type="rotate"
            attributeName="transform"
          />
        </circle>
      </g>
    </svg>
  </div>
);

export default Spinner;
