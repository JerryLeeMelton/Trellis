import { ImageResponse } from "next/og"

// Replaces the hardcoded "/og-image.png" the metadata used to point at, which
// was never added to public/ — every social preview 404'd. Generated at build
// time by next/og, so there is no runtime cost and no extra dependency.

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"
export const alt = "Jerry Lee Melton — Full Stack Web Developer"

const BACKGROUND = "#2c3340"
const TEXT_MAIN = "#d0c5eb"
const ACCENT = "#81c7ad"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: BACKGROUND,
          color: TEXT_MAIN,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, color: ACCENT }}>
          ~ /jerry/
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 84,
            fontWeight: 700,
            marginTop: 24,
            letterSpacing: "-0.02em",
          }}
        >
          Jerry Lee Melton
        </div>
        <div style={{ display: "flex", fontSize: 40, marginTop: 16 }}>
          Full-Stack Developer
        </div>
        <div
          style={{
            display: "flex",
            width: 160,
            height: 6,
            marginTop: 40,
            background: ACCENT,
            borderRadius: 3,
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 28,
            marginTop: 40,
            opacity: 0.7,
          }}
        >
          Portland, Oregon &nbsp;&bull;&nbsp; jerryleemelton.com
        </div>
      </div>
    ),
    size,
  )
}
