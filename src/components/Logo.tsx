interface LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  withBadge?: boolean;
  accentColor?: string;
  className?: string;
}

/** Interlocking forms with a small, independent plus at the upper edge. */
export const Logo = ({
  size = 32,
  withBadge = false,
  accentColor,
  className = "",
  ...props
}: LogoProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 -2 68 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="iSyncPlus Logo"
      role="img"
      {...props}
    >
      {withBadge && <rect y="-2" width="68" height="68" rx="18" fill="var(--card)" />}
      <g>
        <path
          d="M23 2H44L58 16H25V30H15C12 30 10 29 8 27L6 25C3 22 3 18 6 15L17 4C19 2 21 2 23 2Z"
          fill="currentColor"
        />
        <path
          d="M5 30L23 48H34V39H25V30H34V20H39L56 37C61 42 61 47 56 52L48 60C46 62 44 62 41 62H22C20 62 18 61 17 60L6 49C5 48 5 47 5 45V30Z"
          fill={accentColor ?? "var(--accent)"}
        />
        <path d="M60 3H64V5H66V9H64V11H60V9H58V5H60V3Z" fill={accentColor ?? "var(--accent)"} />
      </g>
    </svg>
  );
};

export default Logo;
