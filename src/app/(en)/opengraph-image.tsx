import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export const alt =
  "Pure Black Wallpaper #000000 — free HD download for iPhone & AMOLED";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
          color: "#ffffff",
          border: "1px solid #27272a",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "#a1a1aa",
            marginBottom: 24,
            border: "1px solid #3f3f46",
            borderRadius: 999,
            padding: "8px 20px",
          }}
        >
          True black · #000000 · Free PNG
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            textAlign: "center",
            lineHeight: 1.1,
            padding: "0 80px",
          }}
        >
          Pure Black Wallpaper
        </div>
        <div style={{ fontSize: 34, color: "#a1a1aa", marginTop: 20 }}>
          iPhone · Android AMOLED · Desktop — exact resolution
        </div>
      </div>
    ),
    size
  );
}
