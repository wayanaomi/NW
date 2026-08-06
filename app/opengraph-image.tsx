import { ImageResponse } from "next/og";
import { siteConfig } from "@/constants/site";

export const alt = `${siteConfig.name} - ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #FFFFFF 0%, #FFF7ED 55%, #FFEDD5 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 88,
            height: 88,
            borderRadius: 24,
            background: "#F97316",
            color: "#FFFFFF",
            fontSize: 36,
            fontWeight: 700,
            marginBottom: 40,
          }}
        >
          NW
        </div>
        <div
          style={{
            fontSize: 68,
            fontWeight: 700,
            color: "#111827",
            display: "flex",
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            fontSize: 36,
            fontWeight: 600,
            color: "#EA580C",
            marginTop: 16,
            display: "flex",
          }}
        >
          {siteConfig.role}
        </div>
        <div
          style={{
            fontSize: 26,
            color: "#6B7280",
            marginTop: 28,
            maxWidth: 900,
            display: "flex",
          }}
        >
          Building scalable web applications, business platforms &amp;
          digital products.
        </div>
      </div>
    ),
    { ...size }
  );
}
