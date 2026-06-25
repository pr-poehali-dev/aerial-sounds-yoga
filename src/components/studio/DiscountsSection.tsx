export default function DiscountsSection() {
  return (
    <section id="discounts" style={{ padding: "72px 24px", background: "#fff" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>

        {/* Заголовок */}
        <div style={{ marginBottom: 36 }}>
          <div style={{
            display: "inline-block",
            background: "rgba(156,111,214,0.1)",
            border: "1px solid rgba(156,111,214,0.3)",
            borderRadius: 100,
            padding: "5px 16px",
            fontSize: 11,
            color: "#9c6fd6",
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            marginBottom: 16,
          }}>Выгода</div>
          <h2 style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(26px, 3vw, 38px)",
            fontWeight: 700,
            color: "var(--pp-text)",
            lineHeight: 1.2,
            margin: 0,
          }}>Наши скидки</h2>
        </div>

        {/* Карточка скидки */}
        <div style={{
          background: "linear-gradient(135deg, rgba(156,111,214,0.08) 0%, rgba(156,111,214,0.03) 100%)",
          border: "1px solid rgba(156,111,214,0.25)",
          borderRadius: 20,
          padding: "32px 28px",
          display: "flex",
          gap: 24,
          alignItems: "flex-start",
        }}>
          {/* Бейдж */}
          <div style={{
            flexShrink: 0,
            width: 72,
            height: 72,
            borderRadius: "50%",
            background: "#9c6fd6",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
          }}>
            <span style={{ fontSize: 22, fontWeight: 900, lineHeight: 1, fontFamily: "var(--font-serif)" }}>7%</span>
            <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.04em", opacity: 0.85 }}>СКИДКА</span>
          </div>

          {/* Текст */}
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 17, fontWeight: 700, color: "var(--pp-text)", marginBottom: 8, lineHeight: 1.3 }}>
              Скидка на абонемент при продлении
            </div>
            <div style={{ fontSize: 14, color: "var(--pp-muted)", lineHeight: 1.7 }}>
              При покупке нового абонемента на <strong style={{ color: "var(--pp-text)" }}>8 занятий · 60 мин</strong> или <strong style={{ color: "var(--pp-text)" }}>8 занятий · 90 мин</strong> при остатке <strong style={{ color: "var(--pp-text)" }}>2 тренировок</strong> действующего абонемента.
            </div>
            <div style={{
              marginTop: 14,
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "rgba(156,111,214,0.12)",
              borderRadius: 8,
              padding: "6px 14px",
              fontSize: 12,
              color: "#9c6fd6",
              fontWeight: 600,
            }}>
              ✓ Скажите администратору при оплате
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
