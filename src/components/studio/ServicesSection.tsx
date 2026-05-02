import { useState } from "react";
import Icon from "@/components/ui/icon";
import ReviewsCarousel from "./ReviewsCarousel";
import { SERVICES } from "./data";

const S = { fontFamily: "var(--font-serif)" };

const HAMMOCK_DIRS = [
  {
    title: "Аэройога · Растяжка в гамаках",
    sub: "Растяжка, сила, баланс в воздухе",
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/bucket/5abbbc41-bea7-433c-9e72-bfdbc0275298.jpg",
    price: "от 500 ₽",
  },
  {
    title: "Фитнес в гамаках",
    sub: "Кардио + силовые в подвесе",
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/4ea1ec4c-3f2c-45d3-a415-de9c5ec75e4a.jpg",
    price: "от 500 ₽",
  },
  {
    title: "Дети в гамаках",
    sub: "Игровой формат, с 5 лет",
    img: "https://cdn.poehali.dev/files/c98ec227-3e9d-4cf0-9e7a-a50ea0ed46f7.png",
    price: "от 600 ₽",
  },
];

interface Props {
  onShowForm: () => void;
}

export default function ServicesSection({ onShowForm }: Props) {
  const [open, setOpen] = useState(false);

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

          {/* Аэройога в гамаках — раскрывающаяся карточка */}
          <div style={{ background: "#2c1a0e", borderRadius: 24, marginBottom: 20, overflow: "hidden" }}>
            <button
              onClick={() => setOpen(o => !o)}
              style={{ width: "100%", padding: "36px 48px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
                <img
                  src="https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/bucket/5abbbc41-bea7-433c-9e72-bfdbc0275298.jpg"
                  alt="Аэройога"
                  style={{ width: 72, height: 72, borderRadius: 16, objectFit: "cover", objectPosition: "center top", flexShrink: 0 }}
                />
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(232,220,200,0.55)", marginBottom: 6 }}>★ Только у нас в городе</div>
                  <div style={{ ...S, fontSize: "clamp(22px, 2.5vw, 32px)", fontWeight: 300, color: "#e8dcc8", lineHeight: 1.1 }}>
                    Аэройога в гамаках — <em style={{ color: "#d4b896" }}>4 направления</em>
                  </div>
                  <div style={{ fontSize: 14, color: "rgba(232,220,200,0.6)", marginTop: 6 }}>Шелковые гамаки и гамаки с ручками · Групповые, мини-группы, индивидуально</div>
                </div>
              </div>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(232,220,200,0.1)", border: "1px solid rgba(232,220,200,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "transform 0.3s ease", transform: open ? "rotate(45deg)" : "none" }}>
                <Icon name="Plus" size={20} style={{ color: "#e8dcc8" }} />
              </div>
            </button>

            {/* Раскрывающиеся направления */}
            <div style={{ maxHeight: open ? 800 : 0, overflow: "hidden", transition: "max-height 0.4s cubic-bezier(0.16,1,0.3,1)" }}>
              <div style={{ padding: "0 48px 40px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(440px, 1fr))", gap: 14 }}>
                {HAMMOCK_DIRS.map((d, i) => (
                  <div key={i} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(232,220,200,0.12)", borderRadius: 18, overflow: "hidden", display: "flex", alignItems: "stretch" }}>
                    <img src={d.img} alt={d.title} style={{ width: 140, flexShrink: 0, objectFit: "cover", objectPosition: "center", display: "block" }} />
                    <div style={{ padding: "20px 22px", display: "flex", flexDirection: "column", justifyContent: "center", flex: 1 }}>
                      <div style={{ fontSize: 15, fontWeight: 600, color: "#e8dcc8", marginBottom: 5 }}>{d.title}</div>
                      <div style={{ fontSize: 13, color: "rgba(232,220,200,0.55)", lineHeight: 1.5, marginBottom: 16 }}>{d.sub}</div>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <span style={{ ...S, fontSize: 16, color: "#d4b896" }}>{d.price}</span>
                        <button onClick={onShowForm} style={{ fontSize: 12, fontWeight: 600, color: "#2c1a0e", background: "#e8dcc8", border: "none", borderRadius: 8, padding: "7px 16px", cursor: "pointer" }}>
                          Записаться
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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