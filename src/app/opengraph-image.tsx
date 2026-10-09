import { ImageResponse } from "next/og";

export const alt =
  "Ebube Ezedimbu — Creative Developer & UI Engineer Portfolio";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: "#13101C",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(245, 216, 113, 0.16) 0%, transparent 45%), radial-gradient(circle at 15% 85%, rgba(139, 124, 247, 0.18) 0%, transparent 50%)",
          color: "#F8F6F0",
          fontFamily:
            'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          padding: "56px 64px",
          boxSizing: "border-box",
          flexDirection: "column",
          justifyContent: "space-between",
          border: "2px solid rgba(245, 216, 113, 0.22)",
        }}
      >
        {/* Top Header Row: Category Badge & Site URL */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              backgroundColor: "rgba(245, 216, 113, 0.12)",
              border: "1.5px solid rgba(245, 216, 113, 0.35)",
              padding: "10px 22px",
              borderRadius: "999px",
            }}
          >
            {/* Hex bullet */}
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="#8B7CF7"
            >
              <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z" />
            </svg>
            <span
              style={{
                fontSize: "14px",
                fontWeight: 800,
                letterSpacing: "0.18em",
                color: "#F5D871",
                textTransform: "uppercase",
              }}
            >
              Creative Developer &amp; UI Engineer
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "16px",
              color: "#A49DC0",
              fontWeight: 600,
            }}
          >
            <span>📍 Nigeria</span>
            <span style={{ color: "rgba(245, 216, 113, 0.4)" }}>•</span>
            <span style={{ color: "#F5D871" }}>Available for Work</span>
          </div>
        </div>

        {/* Center Main Content: Name, Bio, and Big Logo Emblem */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            marginTop: "16px",
            marginBottom: "16px",
          }}
        >
          {/* Left Text Block */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              maxWidth: "740px",
            }}
          >
            <h1
              style={{
                fontSize: "74px",
                fontWeight: 900,
                lineHeight: "1.05",
                margin: 0,
                letterSpacing: "-0.03em",
                color: "#FFFFFF",
              }}
            >
              Ebube Ezedimbu
            </h1>
            <p
              style={{
                fontSize: "25px",
                fontWeight: 500,
                lineHeight: "1.45",
                margin: 0,
                color: "#C2BCD6",
                maxWidth: "700px",
              }}
            >
              Turning complex ideas into clear, thoughtful web experiences and
              scalable interactive systems.
            </p>
          </div>

          {/* Right Brand Badge with Sculpted Hex-E Logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "196px",
              height: "196px",
              borderRadius: "44px",
              backgroundColor: "#1A1627",
              border: "2px solid rgba(245, 216, 113, 0.35)",
              boxShadow:
                "0 20px 50px rgba(0, 0, 0, 0.6), 0 0 40px rgba(245, 216, 113, 0.15)",
            }}
          >
            <svg width="128" height="128" viewBox="0 0 64 64" fill="none">
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
        </div>

        {/* Bottom Feature Tags & Handle */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(245, 216, 113, 0.16)",
            paddingTop: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            {["Next.js 16", "React 19", "Full-Stack", "Creative UI"].map(
              (tech) => (
                <div
                  key={tech}
                  style={{
                    backgroundColor: "rgba(34, 30, 53, 0.8)",
                    border: "1px solid rgba(245, 216, 113, 0.2)",
                    borderRadius: "10px",
                    padding: "7px 16px",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#E6DFD1",
                  }}
                >
                  {tech}
                </div>
              )
            )}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "15px",
              fontWeight: 700,
              color: "#F5D871",
              backgroundColor: "rgba(245, 216, 113, 0.08)",
              border: "1px solid rgba(245, 216, 113, 0.25)",
              borderRadius: "10px",
              padding: "7px 18px",
            }}
          >
            <span>github.com/ISyncPlus</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
