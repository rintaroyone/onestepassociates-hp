import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "OneStep Associates — ERP / IT implementation consulting";

// Static OG image. Latin-only text keeps it crisp without bundling a JP font.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "linear-gradient(135deg, #155f8c 0%, #23272b 100%)",
          color: "#fff",
          fontFamily: "sans-serif",
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
    ),
    size,
  );
}
