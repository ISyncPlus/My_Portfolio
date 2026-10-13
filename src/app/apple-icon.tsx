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
          border: "4px solid rgba(197, 186, 255, 0.35)",
        }}
      >
        <svg width="116" height="116" viewBox="0 0 64 64" fill="none">
          {/* Top Wing of S */}
          <path
            d="M 14 30 C 14 17.5 24.5 12 37 12 C 45 12 49 15 50 18.5 C 47.5 18.5 42.5 17.5 37 17.5 C 26 17.5 20.5 23 20.5 30 Z"
            fill="#C5BAFF"
          />
          {/* Bottom Wing of S */}
          <path
            d="M 50 34 C 50 46.5 39.5 52 27 52 C 19 52 15 49 14 45.5 C 16.5 45.5 21.5 46.5 27 46.5 C 38 46.5 43.5 41 43.5 34 Z"
            fill="#C5BAFF"
          />
          {/* Central Plus Symbol */}
          <path
            d="M 32 23 L 32 41 M 23 32 L 41 32"
            stroke="#8B7CF7"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
