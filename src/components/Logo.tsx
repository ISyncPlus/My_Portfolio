import React from "react";

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  withBadge?: boolean;
  className?: string;
}

/**
 * Minimalist Kinetic Sync S+ Logo Mark for iSyncPlus.
 * Embodies seamless synchronization (two balanced orbital wings forming an 'S')
 * united with a central precision '+' spark.
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
        aria-label="iSyncPlus Logo"
        role="img"
        {...props}
      >
        <defs>
          <linearGradient
            id="logoVioletBadge"
            x1="14"
            y1="12"
            x2="50"
            y2="52"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F2EEFF" />
            <stop offset="0.45" stopColor="#C5BAFF" />
            <stop offset="1" stopColor="#9B8EFF" />
          </linearGradient>
          <linearGradient
            id="logoBgBadge"
            x1="0"
            y1="0"
            x2="64"
            y2="64"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#241E38" />
            <stop offset="1" stopColor="#120F1D" />
          </linearGradient>
        </defs>
        <rect
          width="64"
          height="64"
          rx="16"
          fill="url(#logoBgBadge)"
          stroke="#C5BAFF"
          strokeOpacity="0.32"
          strokeWidth="1.5"
        />
        {/* Top Wing of S (Sync) */}
        <path
          d="M 14 30 C 14 17.5 24.5 12 37 12 C 45 12 49 15 50 18.5 C 47.5 18.5 42.5 17.5 37 17.5 C 26 17.5 20.5 23 20.5 30 Z"
          fill="url(#logoVioletBadge)"
        />
        {/* Bottom Wing of S (Sync) */}
        <path
          d="M 50 34 C 50 46.5 39.5 52 27 52 C 19 52 15 49 14 45.5 C 16.5 45.5 21.5 46.5 27 46.5 C 38 46.5 43.5 41 43.5 34 Z"
          fill="url(#logoVioletBadge)"
        />
        {/* Central Kinetic Plus */}
        <path
          d="M 32 23 L 32 41 M 23 32 L 41 32"
          stroke="#8B7CF7"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // Standalone minimalist vector mark
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="iSyncPlus Logo"
      role="img"
      {...props}
    >
      {/* Top Wing of S */}
      <path
        d="M 14 30 C 14 17.5 24.5 12 37 12 C 45 12 49 15 50 18.5 C 47.5 18.5 42.5 17.5 37 17.5 C 26 17.5 20.5 23 20.5 30 Z"
        fill="currentColor"
      />
      {/* Bottom Wing of S */}
      <path
        d="M 50 34 C 50 46.5 39.5 52 27 52 C 19 52 15 49 14 45.5 C 16.5 45.5 21.5 46.5 27 46.5 C 38 46.5 43.5 41 43.5 34 Z"
        fill="currentColor"
      />
      {/* Central Plus Symbol */}
      <path
        d="M 32 23 L 32 41 M 23 32 L 41 32"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Logo;
