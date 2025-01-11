import React from "react";

interface Gear2Props {
  title?: string;
}

function Gear2({ title = "gear 2" }: Gear2Props) {
  const color = "hsl(var(--foreground))";

  return (
    <svg
      height="18"
      width="18"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={color}>
        <line
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          x1="6.25"
          x2="9"
          y1="4.237"
          y2="9"
        />
        <line
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          x1="6.25"
          x2="9"
          y1="13.764"
          y2="9"
        />
        <line
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          x1="14.5"
          x2="9"
          y1="9"
          y2="9"
        />
        <line
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          x1="9"
          x2="9"
          y1="1.75"
          y2="3.5"
        />
        <line
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          x1="2.721"
          x2="4.237"
          y1="5.375"
          y2="6.25"
        />
        <line
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          x1="1.75"
          x2="3.5"
          y1="9"
          y2="9"
        />
        <line
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          x1="16.25"
          x2="14.5"
          y1="9"
          y2="9"
        />
        <line
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          x1="2.721"
          x2="4.237"
          y1="12.625"
          y2="11.75"
        />
        <line
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          x1="9"
          x2="9"
          y1="16.25"
          y2="14.5"
        />
        <line
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          x1="12.625"
          x2="11.75"
          y1="15.279"
          y2="13.763"
        />
        <line
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          x1="5.375"
          x2="6.25"
          y1="15.279"
          y2="13.763"
        />
        <line
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          x1="15.279"
          x2="13.763"
          y1="12.625"
          y2="11.75"
        />
        <line
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          x1="15.279"
          x2="13.763"
          y1="5.375"
          y2="6.25"
        />
        <line
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          x1="12.625"
          x2="11.75"
          y1="2.721"
          y2="4.237"
        />
        <line
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          x1="5.375"
          x2="6.25"
          y1="2.721"
          y2="4.237"
        />
        <circle
          cx="9"
          cy="9"
          fill="none"
          r="5.5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        />
      </g>
    </svg>
  );
}

export default Gear2;
