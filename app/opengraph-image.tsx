import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "OneStep Associates — ERP / IT implementation consulting";

// Static OG image. Latin-only text keeps it crisp without bundling a JP font.
// A generated step/network motif sits behind the copy, dimmed by a scrim so the
// title and logo stay legible. The image is inlined at build time (static export).
export default async function OpengraphImage() {
  const bg = await readFile(
    join(process.cwd(), "public/images/generated/ogp-onestep.png"),
  );
  const bgSrc = `data:image/png;base64,${bg.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#23272b",
          fontFamily: "sans-serif",
        }}
      >
        <img
          src={bgSrc}
          alt=""
          width={1200}
          height={630}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        {/* Scrim for legibility */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "linear-gradient(120deg, rgba(21,95,140,0.86) 0%, rgba(35,39,43,0.80) 55%, rgba(35,39,43,0.62) 100%)",
          }}
        />

        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: 80,
            color: "#fff",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-end", gap: 8 }}>
            <div style={{ width: 14, height: 28, borderRadius: 4, background: "rgba(53,148,197,0.6)" }} />
            <div style={{ width: 14, height: 44, borderRadius: 4, background: "rgba(53,148,197,0.8)" }} />
            <div style={{ width: 14, height: 60, borderRadius: 4, background: "#3594c5" }} />
            <div style={{ marginLeft: 18, fontSize: 34, fontWeight: 700, letterSpacing: 2 }}>
              OneStep Associates
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 64, fontWeight: 700, lineHeight: 1.2 }}>
              ERP & IT implementation,
            </div>
            <div style={{ display: "flex", fontSize: 64, fontWeight: 700, lineHeight: 1.2 }}>
              executed on the ground.
            </div>
            <div style={{ display: "flex", marginTop: 28, fontSize: 28, color: "rgba(255,255,255,0.72)", lineHeight: 1.5 }}>
              From strategy to adoption — a hands-on consulting partner.
            </div>
          </div>

          <div style={{ display: "flex", gap: 16 }}>
            {["SAP", "Oracle", "intra-mart", "PMO", "Transformation"].map((t) => (
              <div
                key={t}
                style={{
                  fontSize: 22,
                  padding: "10px 22px",
                  borderRadius: 999,
                  border: "1px solid rgba(169,211,236,0.45)",
                  color: "#a9d3ec",
                }}
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
