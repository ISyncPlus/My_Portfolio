import React from "react";

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  withBadge?: boolean;
  className?: string;
}

/**
 * Minimalist Hex-E Logo Mark for Ebube Ezedimbu.
 * Combines the portfolio's signature hexagonal geometry with the letter 'E',
 * accented by an electric indigo kinetic spark.
 */
export const Logo = ({
  size = 32,
  withBadge = false,
  className = "",
  ...props
}: LogoProps) => {
  if (withBadge) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Ebube Ezedimbu Logo"
        role="img"
        {...props}
      >
        <defs>
          <linearGradient
            id="logoGoldBadge"
            x1="16"
            y1="8"
            x2="48"
            y2="56"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFF0A0" />
            <stop offset="0.45" stopColor="#F5D871" />
            <stop offset="1" stopColor="#D4A728" />
          </linearGradient>
          <linearGradient
            id="logoBgBadge"
            x1="0"
            y1="0"
            x2="64"
            y2="64"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#221D35" />
            <stop offset="1" stopColor="#120F1D" />
          </linearGradient>
        </defs>
        <rect
          width="64"
          height="64"
          rx="16"
          fill="url(#logoBgBadge)"
          stroke="rgba(245,216,113,0.25)"
          strokeWidth="1.5"
        />
        {/* Sculpted Hex-E */}
        <path
          d="M17 18L32 9.5L47 18V24H27V29.5H38.5V34.5H27V40H47V46L32 54.5L17 46V18Z"
          fill="url(#logoGoldBadge)"
          stroke="url(#logoGoldBadge)"
          strokeWidth="1.2"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {/* Indigo Spark */}
        <circle cx="44" cy="32" r="2.8" fill="#8B7CF7" />
      </svg>
    );
  }

  // Standalone vector mark without container
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Ebube Ezedimbu Logo"
      role="img"
      {...props}
    >
      <defs>
        <linearGradient
          id="logoGoldStandalone"
          x1="0"
          y1="0"
          x2="40"
          y2="46"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFF0A0" />
          <stop offset="0.45" stopColor="#F5D871" />
          <stop offset="1" stopColor="#D4A728" />
        </linearGradient>
      </defs>
      {/* Normalized path centered in 40x46 viewbox */}
      <path
        d="M2 9L17 0.5L32 9V15H12V20.5H23.5V25.5H12V31H32V37L17 45.5L2 37V9Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <circle cx="29" cy="23" r="2.8" fill="#8B7CF7" />
    </svg>
  );
};

export default Logo;
