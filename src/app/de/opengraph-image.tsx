import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export const alt =
  "Schwarzer Bildschirm und Weißes Bild – Vollbild kostenlos online";

export default function DeOpengraphImage() {
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
            fontSize: 30,
            color: "#a1a1aa",
            marginBottom: 24,
            border: "1px solid #3f3f46",
            borderRadius: 999,
            padding: "8px 20px",
          }}
        >
          Schwarz #000000 · Weiß #FFFFFF · Kostenlos
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            textAlign: "center",
            lineHeight: 1.15,
            padding: "0 80px",
          }}
        >
          Schwarzer Bildschirm &amp; Weißes Bild
        </div>
        <div style={{ fontSize: 32, color: "#a1a1aa", marginTop: 20 }}>
          Vollbild online – Pixeltest, OLED-Sparen, Reinigung
        </div>
      </div>
    ),
    size
  );
}
