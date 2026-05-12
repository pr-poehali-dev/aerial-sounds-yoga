import { useState } from "react";
import Icon from "@/components/ui/icon";
import ReviewsCarousel from "./ReviewsCarousel";

const S = { fontFamily: "var(--font-serif)" };

const HAMMOCK_DIRS = [
  {
    title: "Аэройога · Растяжка",
    sub: "Гибкость, сила, баланс в воздухе",
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/bucket/5abbbc41-bea7-433c-9e72-bfdbc0275298.jpg",
    price: "от 600 ₽",
  },
  {
    title: "Фитнес в гамаках",
    sub: "Кардио + силовые в подвесе",
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/4ea1ec4c-3f2c-45d3-a415-de9c5ec75e4a.jpg",
    price: "от 600 ₽",
  },
  {
    title: "Дети в гамаках",
    sub: "Игровой формат, с 5 лет",
    img: "https://cdn.poehali.dev/files/c98ec227-3e9d-4cf0-9e7a-a50ea0ed46f7.png",
    price: "от 600 ₽",
  },
];

const GONG_DIRS = [
  {
    title: "Групповая медитация",
    sub: "Тибетские чаши, гонг, монохорд. Просто лечь и слушать",
    price: "от 1500 ₽",
    icon: "Users",
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/05f45da9-193d-4a42-b936-30172ed9b568.jpg",
  },
  {
    title: "VIP мини-группа",
    sub: "До 5 человек — более глубокое погружение",
    price: "от 1500 ₽",
    icon: "Star",
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/0c9c4157-3312-44ff-bb40-6e49e113cab2.jpg",
  },
  {
    title: "Аэройога + Гонг",
    sub: "Ты лежишь в коконе гамака, вибрации гонга окутывают тело. Только у нас",
    price: "уточните цену",
    icon: "Sparkles",
    exclusive: true,
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/c48350e9-a068-4b3a-99db-2724c3f139f5.jpg",
  },
  {
    title: "Корпоративные сеансы",
    sub: "Для команд и мероприятий — выезд или в студии",
    price: "индивидуально",
    icon: "Building2",
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/1b4d24cf-24bb-434a-9db9-633edc94e35a.jpg",
  },
];

interface Props {
  onShowForm: () => void;
}

export default function ServicesSection({ onShowForm }: Props) {
  const [openAero, setOpenAero] = useState(false);
  const [openGong, setOpenGong] = useState(false);

  return (
    <>
      <section id="services" style={{ padding: "100px 24px", background: "var(--pp-cream-2)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <div className="pp-label" style={{ marginBottom: 16 }}>Форматы</div>
            <h2 style={{ ...S, fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 300, lineHeight: 1.1 }}>
              Выбери свой <em style={{ color: "var(--pp-teal)" }}>формат</em>
            </h2>
          </div>

          {/* ── Аэройога в гамаках ── */}
          <div style={{ background: "#ede5ff", borderRadius: 24, marginBottom: 16, overflow: "hidden" }}>
            <button
              onClick={() => setOpenAero(o => !o)}
              style={{ width: "100%", padding: "clamp(20px, 4vw, 36px) clamp(16px, 4vw, 48px)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}
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
                    Аэройога в гамаках — <em style={{ color: "#d4b896" }}>3 направления</em>
                  </div>
                  <div style={{ fontSize: 14, color: "rgba(232,220,200,0.6)", marginTop: 6 }}>Шелковые гамаки · Групповые, мини-группы, индивидуально · от 600 ₽</div>
                </div>
              </div>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(232,220,200,0.1)", border: "1px solid rgba(232,220,200,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "transform 0.3s ease", transform: openAero ? "rotate(45deg)" : "none" }}>
                <Icon name="Plus" size={20} style={{ color: "#e8dcc8" }} />
              </div>
            </button>

            <div style={{ maxHeight: openAero ? 800 : 0, overflow: "hidden", transition: "max-height 0.4s cubic-bezier(0.16,1,0.3,1)" }}>
              <div style={{ padding: "0 clamp(16px, 4vw, 48px) 40px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 14 }}>
                {HAMMOCK_DIRS.map((d, i) => (
                  <div key={i} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(232,220,200,0.12)", borderRadius: 18, overflow: "hidden", display: "flex", alignItems: "stretch" }}>
                    <img src={d.img} alt={d.title} style={{ width: 120, flexShrink: 0, objectFit: "cover", objectPosition: "center" }} />
                    <div style={{ padding: "20px 22px", display: "flex", flexDirection: "column", justifyContent: "center", flex: 1 }}>
                      <div style={{ fontSize: 15, fontWeight: 600, color: "#e8dcc8", marginBottom: 5 }}>{d.title}</div>
                      <div style={{ fontSize: 13, color: "rgba(232,220,200,0.55)", lineHeight: 1.5, marginBottom: 16 }}>{d.sub}</div>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <span style={{ ...S, fontSize: 16, color: "#d4b896" }}>{d.price}</span>
                        <button onClick={onShowForm} style={{ fontSize: 12, fontWeight: 600, color: "#fff", background: "#6a42a8", border: "none", borderRadius: 8, padding: "7px 16px", cursor: "pointer" }}>Записаться</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Гонг-медитации ── */}
          <div style={{ background: "#ede5ff", borderRadius: 24, marginBottom: 16, overflow: "hidden" }}>
            <button
              onClick={() => setOpenGong(o => !o)}
              style={{ width: "100%", padding: "clamp(20px, 4vw, 36px) clamp(16px, 4vw, 48px)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
                <img
                  src="https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/70fc32d6-2106-42f0-8af9-fa47c0451d05.jpg"
                  alt="Гонг"
                  style={{ width: 72, height: 72, borderRadius: 16, objectFit: "cover", objectPosition: "center", flexShrink: 0 }}
                />
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(232,220,200,0.55)", marginBottom: 6 }}>Звуковая терапия</div>
                  <div style={{ ...S, fontSize: "clamp(22px, 2.5vw, 32px)", fontWeight: 300, color: "#e8dcc8", lineHeight: 1.1 }}>
                    Гонг-медитации — <em style={{ color: "#d4b896" }}>4 формата</em>
                  </div>
                  <div style={{ fontSize: 14, color: "rgba(232,220,200,0.6)", marginTop: 6 }}>Тибетские чаши · Гонг · Монохорд · Просто лечь и слушать · от 1500 ₽</div>
                </div>
              </div>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(232,220,200,0.1)", border: "1px solid rgba(232,220,200,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "transform 0.3s ease", transform: openGong ? "rotate(45deg)" : "none" }}>
                <Icon name="Plus" size={20} style={{ color: "#e8dcc8" }} />
              </div>
            </button>

            <div style={{ maxHeight: openGong ? 800 : 0, overflow: "hidden", transition: "max-height 0.4s cubic-bezier(0.16,1,0.3,1)" }}>
              <div style={{ padding: "0 clamp(16px, 4vw, 48px) 40px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: 14 }}>
                {GONG_DIRS.map((d, i) => (
                  <div key={i} style={{ background: d.exclusive ? "rgba(212,184,150,0.08)" : "rgba(255,255,255,0.05)", border: d.exclusive ? "1px solid rgba(212,184,150,0.3)" : "1px solid rgba(232,220,200,0.12)", borderRadius: 18, overflow: "hidden", display: "flex", alignItems: "stretch" }}>
                    <img src={d.img} alt={d.title} style={{ width: 120, flexShrink: 0, objectFit: "cover", objectPosition: "center" }} />
                    <div style={{ padding: "20px 22px", display: "flex", flexDirection: "column", justifyContent: "center", flex: 1, gap: 6 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                        <div style={{ fontSize: 15, fontWeight: 600, color: "#e8dcc8" }}>{d.title}</div>
                        {d.exclusive && <span style={{ fontSize: 10, fontWeight: 700, color: "#d4b896", background: "rgba(212,184,150,0.15)", border: "1px solid rgba(212,184,150,0.3)", borderRadius: 100, padding: "2px 8px", letterSpacing: "0.1em" }}>ЭКСКЛЮЗИВ</span>}
                      </div>
                      <div style={{ fontSize: 13, color: "rgba(232,220,200,0.6)", lineHeight: 1.5 }}>{d.sub}</div>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 6 }}>
                        <span style={{ ...S, fontSize: 16, color: "#d4b896" }}>{d.price}</span>
                        <button onClick={onShowForm} style={{ fontSize: 12, fontWeight: 600, color: "#fff", background: "#6a42a8", border: "none", borderRadius: 8, padding: "7px 16px", cursor: "pointer" }}>Записаться</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      <ReviewsCarousel />
    </>
  );
}