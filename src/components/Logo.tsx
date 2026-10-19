import artwork from "@/lib/relay-logo.json";

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  withBadge?: boolean;
  withWordmark?: boolean;
  className?: string;
}

/** Relay: two matched routes around the central i and plus. */
export const Logo = ({
  size = 32,
  withBadge = false,
  withWordmark = false,
  className = "",
  ...props
}: LogoProps) => {
  return (
    <svg
      width={withWordmark ? (typeof size === "number" ? size * 800 / 172 : `calc(${size} * 800 / 172)`) : size}
      height={size}
      viewBox={withWordmark ? "0 42 800 172" : "0 0 256 256"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="iSyncPlus Logo"
      role="img"
      {...props}
    >
      {withBadge && !withWordmark && <rect width="256" height="256" rx="56" fill="var(--card)" />}
      <g transform={withWordmark ? "translate(20 38) scale(.66)" : undefined}>
        <path
          d={artwork.route}
          fill="#194F48"
        />
        <path
          d={artwork.route}
          transform="rotate(180 128 128)"
          fill="#C75A40"
        />
        <path d={artwork.plus} fill="#C75A40" />
        <path d={artwork.stem} fill="#194F48" />
      </g>
      {withWordmark && artwork.wordmark.map((d, index) => <path key={index} d={d} fill="currentColor" />)}
    </svg>
  );
};

export default Logo;
