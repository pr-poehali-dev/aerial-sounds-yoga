const S = { fontFamily: "var(--font-serif)" };

export default function SpaSection() {
  return (
    <section id="spa" style={{ position: "relative", overflow: "hidden" }}>
      {/* Фото на весь блок */}
      <div style={{ position: "relative", minHeight: 560, display: "flex", alignItems: "center" }}>
        <img
          src="https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/bucket/cc500b87-ed2c-4e0d-b55c-e27ebd74969d.jpg"
          alt="Пространство пара"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(12,8,4,0.82) 0%, rgba(12,8,4,0.5) 55%, rgba(12,8,4,0.15) 100%)" }} />

        <div style={{ position: "relative", zIndex: 1, padding: "80px 6vw", maxWidth: 600 }}>
          <div className="pp-label" style={{ marginBottom: 16, color: "rgba(255,220,180,0.7)" }}>Спа услуги</div>
          <h2 style={{ ...S, fontSize: "clamp(32px, 4.5vw, 58px)", fontWeight: 300, lineHeight: 1.1, color: "#8B4513", marginBottom: 16 }}>
            Пространство <em style={{ color: "#6B2E0A" }}>пара</em>
          </h2>
          <hr style={{ border: "none", borderTop: "1px solid rgba(255,255,255,0.15)", margin: "16px 0 24px", width: 60 }} />
          <p style={{ fontSize: 16, color: "rgba(255,220,180,0.8)", lineHeight: 1.75, marginBottom: 32, maxWidth: 420 }}>
            Термальная зона для глубокого расслабления тела и ума. Жар, пар и покой — всё под одной крышей.
          </p>

          <a
            href="tel:+79089803545"
            style={{
              display: "inline-flex", alignItems: "center", gap: 12,
              padding: "16px 36px", borderRadius: 14,
              background: "#8B4513", color: "#fff",
              fontSize: 16, fontWeight: 700, textDecoration: "none",
              letterSpacing: "0.01em", transition: "opacity 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            <span>📞</span>
            Записаться — +7 (908) 980-35-45
          </a>
        </div>
      </div>
    </section>
  );
}