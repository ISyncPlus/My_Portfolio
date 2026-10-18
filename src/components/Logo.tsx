import artwork from "@/lib/relay-logo.json";

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  withBadge?: boolean;
  accentColor?: string;
  primaryColor?: string;
  withWordmark?: boolean;
  className?: string;
}

/** Relay: two matched routes around the central i and plus. */
export const Logo = ({
  size = 32,
  withBadge = false,
  accentColor,
  primaryColor,
  withWordmark = false,
  className = "",
  ...props
}: LogoProps) => {
  const primary = primaryColor ?? "var(--brand-primary, #194F48)";
  const secondary = accentColor ?? "var(--brand-secondary, #C75A40)";

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
          fill={primary}
          style={{ fill: primary }}
        />
        <path
          d={artwork.route}
          transform="rotate(180 128 128)"
          fill={secondary}
          style={{ fill: secondary }}
        />
        <path d={artwork.plus} fill={secondary} style={{ fill: secondary }} />
        <path d={artwork.stem} fill={primary} style={{ fill: primary }} />
      </g>
      {withWordmark && artwork.wordmark.map((d, index) => <path key={index} d={d} fill="currentColor" />)}
    </svg>
  );
};

export default Logo;
