import Icon from "@/components/ui/icon";
import ReviewsCarousel from "./ReviewsCarousel";
import { SERVICES } from "./data";

const S = { fontFamily: "var(--font-serif)" };

interface Props {
  onShowForm: () => void;
}

export default function ServicesSection({ onShowForm }: Props) {
  return (
    <>
      {/* ── УСЛУГИ ───────────────────────────────────────── */}
      <section id="services" style={{ padding: "100px 24px", background: "var(--pp-cream-2)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <div className="pp-label" style={{ marginBottom: 16 }}>Форматы</div>
            <h2 style={{ ...S, fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 300, lineHeight: 1.1 }}>
              Выбери свой <em style={{ color: "var(--pp-teal)" }}>формат</em>
            </h2>
          </div>

          {/* Аэройога — главная карточка */}
          <div style={{ background: "linear-gradient(135deg, #3d2472 0%, #6b3fa0 60%, #8B5CC8 100%)", borderRadius: 24, padding: "40px 48px", marginBottom: 20, display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", right: 120, top: "50%", transform: "translateY(-50%)" }}>
              {[0, 1, 2].map(i => (
                <div key={i} className="gong-ripple" style={{ width: 160, height: 160, top: -80, left: -80, animationDelay: `${i * 1}s` }} />
              ))}
            </div>

            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ display: "inline-block", background: "rgba(200,169,106,0.25)", border: "1px solid rgba(200,169,106,0.5)", borderRadius: 100, padding: "4px 16px", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--pp-gold)", marginBottom: 16 }}>
                ★ Только у нас в городе
              </div>
              <h3 style={{ ...S, fontSize: "clamp(28px, 3vw, 44px)", fontWeight: 300, color: "#E8F4F0", lineHeight: 1.1, marginBottom: 12 }}>
                Аэройога —<br /><em style={{ color: "var(--pp-gold)" }}>только у нас</em>
              </h3>
              <p style={{ fontSize: 15, color: "rgba(232,244,240,0.8)", lineHeight: 1.7, marginBottom: 20, maxWidth: 500 }}>
                2 вида гамаков на выбор: шелковые гамаки и гамаки с ручками. Подбираем формат под твои цели и уровень подготовки.
              </p>
              <div style={{ display: "flex", gap: 12, marginBottom: 24 }}>
                <div style={{ background: "rgba(255,255,255,0.12)", borderRadius: 12, padding: "10px 18px", fontSize: 13, color: "#E8F4F0" }}>🪢 Шелковые гамаки</div>
                <div style={{ background: "rgba(255,255,255,0.12)", borderRadius: 12, padding: "10px 18px", fontSize: 13, color: "#E8F4F0" }}>🤸 Гамаки с ручками</div>
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 28 }}>
                {["Групповой", "VIP мини-группа", "Индивидуальный"].map(t => (
                  <span key={t} style={{ fontSize: 12, color: "rgba(232,244,240,0.7)", background: "rgba(255,255,255,0.1)", borderRadius: 100, padding: "4px 14px" }}>{t}</span>
                ))}
              </div>
              <button className="pp-btn-gold" onClick={onShowForm}>
                <Icon name="Sparkles" size={15} />
                Записаться
              </button>
            </div>

            <div style={{ position: "relative", zIndex: 1, width: 260, flexShrink: 0 }} className="pp-float">
              <img src="https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/bucket/5abbbc41-bea7-433c-9e72-bfdbc0275298.jpg" alt="Аэройога" style={{ width: "100%", height: 320, objectFit: "cover", objectPosition: "center top", borderRadius: 20, display: "block" }} />
            </div>
          </div>

          {/* Остальные услуги */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {SERVICES.filter(s => s.title !== "Аэройога в гамаках" && !("exclusive" in s)).map((s, i) => (
              <div key={i} className="pp-card" style={{ padding: 32, display: "flex", flexDirection: "column" }}>
                <div style={{ width: 72, height: 72, borderRadius: "50%", overflow: "hidden", marginBottom: 20, border: "2px solid var(--pp-border)" }}>
                  <img src={s.img} alt={s.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <h3 style={{ ...S, fontSize: 26, fontWeight: 400, marginBottom: 12, lineHeight: 1.2 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: "var(--pp-muted)", lineHeight: 1.7, flex: 1, marginBottom: 20 }}>{s.desc}</p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
                  {s.tags.map(t => (
                    <span key={t} style={{ fontSize: 11, color: "var(--pp-muted)", background: "var(--pp-cream-3)", borderRadius: 100, padding: "3px 12px" }}>{t}</span>
                  ))}
                </div>

                {s.title === "Фитнес Микс" && (
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }}>
                    <div style={{ background: "var(--pp-cream-2)", border: "1px solid var(--pp-border)", borderRadius: 12, padding: "12px 16px", display: "flex", alignItems: "center", gap: 10 }}>
                      <Icon name="Moon" size={16} style={{ color: "#e07b54", flexShrink: 0 }} />
                      <div>
                        <div style={{ fontSize: 11, fontWeight: 700, color: "var(--pp-text)" }}>Пн / Ср / Пт</div>
                        <div style={{ fontSize: 16, fontWeight: 300, color: "#e07b54", fontFamily: "var(--font-serif)" }}>18:30</div>
                      </div>
                    </div>
                    <div style={{ background: "var(--pp-cream-2)", border: "1px solid var(--pp-border)", borderRadius: 12, padding: "12px 16px", display: "flex", alignItems: "center", gap: 10 }}>
                      <Icon name="Sun" size={16} style={{ color: "var(--pp-teal)", flexShrink: 0 }} />
                      <div>
                        <div style={{ fontSize: 11, fontWeight: 700, color: "var(--pp-text)" }}>Вт / Чт / Сб / Вс</div>
                        <div style={{ fontSize: 16, fontWeight: 300, color: "var(--pp-teal)", fontFamily: "var(--font-serif)" }}>09:00</div>
                      </div>
                    </div>
                  </div>
                )}

                <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 20 }}>
                  <span style={{ ...S, fontSize: 28, fontWeight: 400, color: "var(--pp-teal)" }}>{s.price}</span>
                  <span style={{ fontSize: 13, color: "var(--pp-muted)" }}>/ {s.per}</span>
                </div>
                <button className="pp-btn-ghost" onClick={onShowForm} style={{ justifyContent: "center" }}>
                  Записаться
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ОТЗЫВЫ ───────────────────────────────────────── */}
      <ReviewsCarousel />
    </>
  );
}