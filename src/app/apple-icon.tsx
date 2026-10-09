import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#16131f",
          borderRadius: "38px",
          border: "4px solid rgba(245, 216, 113, 0.35)",
        }}
      >
        <svg width="112" height="112" viewBox="0 0 64 64" fill="none">
          <path
            d="M17 18L32 9.5L47 18V24H27V29.5H38.5V34.5H27V40H47V46L32 54.5L17 46V18Z"
            fill="#F5D871"
            stroke="#F5D871"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
          <circle cx="44" cy="32" r="3.2" fill="#8B7CF7" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
