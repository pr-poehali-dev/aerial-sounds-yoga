export default function AppDownloadSection() {
  return (
    <section style={{
      background: "#1a1520",
      padding: "80px 24px",
      overflow: "hidden",
    }}>
      <div style={{
        maxWidth: 1100,
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        gap: 64,
        flexWrap: "wrap",
      }}>

        {/* Левая часть — текст */}
        <div style={{ flex: "1 1 340px", minWidth: 280 }}>
          <div style={{
            display: "inline-block",
            background: "rgba(156,111,214,0.18)",
            border: "1px solid rgba(156,111,214,0.4)",
            borderRadius: 100,
            padding: "6px 18px",
            fontSize: 12,
            color: "#9c6fd6",
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            marginBottom: 24,
          }}>
            Мобильное приложение
          </div>

          <h2 style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(26px, 3.2vw, 42px)",
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.2,
            marginBottom: 20,
          }}>
            Записывайся на тренировки<br />
            <span style={{ color: "#9c6fd6" }}>через приложение</span>
          </h2>

          <p style={{
            fontSize: 16,
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.7,
            marginBottom: 40,
            maxWidth: 420,
          }}>
            Скачай в App Store или RuStore — запись буквально в два клика. Расписание, свободные места и уведомления прямо в телефоне.
          </p>

          {/* Кнопки */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 320 }}>
            {/* App Store */}
            <a
              href="#"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                background: "#9c6fd6",
                color: "#fff",
                borderRadius: 16,
                padding: "14px 24px",
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div>
                <div style={{ fontSize: 11, opacity: 0.8, marginBottom: 1 }}>Скачать в</div>
                <div style={{ fontSize: 16, fontWeight: 700 }}>App Store</div>
              </div>
            </a>

            {/* RuStore */}
            <a
              href="#"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "#fff",
                borderRadius: 16,
                padding: "14px 24px",
                textDecoration: "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
              onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.07)")}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <rect width="24" height="24" rx="6" fill="#9c6fd6"/>
                <text x="12" y="16.5" textAnchor="middle" fontSize="11" fontWeight="800" fill="white" fontFamily="Arial">RU</text>
              </svg>
              <div>
                <div style={{ fontSize: 11, opacity: 0.6, marginBottom: 1 }}>Скачать в</div>
                <div style={{ fontSize: 16, fontWeight: 700 }}>RuStore</div>
              </div>
            </a>
          </div>
        </div>

        {/* Правая часть — phone mockup */}
        <div style={{
          flex: "0 0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          position: "relative",
        }}>
          {/* Свечение за телефоном */}
          <div style={{
            position: "absolute",
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(156,111,214,0.3) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }} />

          {/* Phone frame */}
          <div style={{
            position: "relative",
            width: 260,
            background: "#0d0d0d",
            borderRadius: 44,
            padding: 8,
            boxShadow: "0 0 0 1px #333, 0 0 0 3px #1a1a1a, 0 32px 80px rgba(0,0,0,0.6), 0 0 60px rgba(156,111,214,0.2)",
          }}>
            {/* Notch */}
            <div style={{
              position: "absolute",
              top: 18,
              left: "50%",
              transform: "translateX(-50%)",
              width: 100,
              height: 26,
              background: "#0d0d0d",
              borderRadius: 20,
              zIndex: 10,
            }} />
            {/* Screen */}
            <div style={{
              borderRadius: 38,
              overflow: "hidden",
              background: "#fff",
            }}>
              <img
                src="https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/bucket/d350ff49-c532-4799-98f0-35ed2d5ebda9.jpg"
                alt="Расписание в приложении"
                style={{
                  width: "100%",
                  display: "block",
                  borderRadius: 38,
                }}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
