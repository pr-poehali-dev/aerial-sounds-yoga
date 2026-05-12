import { useState } from "react";

interface Props {
  onShowForm: () => void;
}

const plans = [
  {
    title: "Абонемент",
    items: [
      { label: "4 занятия · 50 мин", price: "3 640 ₽", note: "срок действия 1 месяц" },
      { label: "4 занятия · 90 мин", price: "5 100 ₽", note: "срок действия 1 месяц" },
      { label: "8 занятий · 50 мин", price: "5 800 ₽", note: "срок действия 1 месяц" },
      { label: "8 занятий · 90 мин", price: "8 120 ₽", note: "срок действия 1 месяц" },
    ],
    footer: "На все абонементы действует платная заморозка",
  },
  {
    title: "Разовая тренировка",
    items: [
      { label: "Занятие 50 мин", price: "1 200 ₽", note: "" },
      { label: "Занятие 90 мин", price: "1 500 ₽", note: "" },
    ],
    footer: "",
  },
  {
    title: "Индивидуальные тренировки",
    sub: "персональный подход с тренером",
    items: [
      { label: "Индивидуальное занятие", price: "по запросу", note: "уточните у администратора" },
    ],
    footer: "",
  },
];

export default function PricingSection({ onShowForm }: Props) {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => setOpen(prev => prev === i ? null : i);

  return (
    <section style={{ padding: "80px 24px", background: "var(--pp-cream)" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>

        {/* Заголовок */}
        <div style={{ marginBottom: 40 }}>
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
          }}>
            Цены
          </div>
          <h2 style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(26px, 3vw, 38px)",
            fontWeight: 700,
            color: "var(--pp-text)",
            lineHeight: 1.2,
            margin: 0,
          }}>
            Стоимость тренировок
          </h2>
        </div>

        {/* Аккордеон */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {plans.map((plan, i) => (
            <div key={i} style={{
              background: "#fff",
              borderRadius: 18,
              border: "1px solid rgba(156,111,214,0.18)",
              overflow: "hidden",
              boxShadow: open === i ? "0 4px 24px rgba(156,111,214,0.12)" : "none",
              transition: "box-shadow 0.3s",
            }}>
              {/* Шапка */}
              <button
                onClick={() => toggle(i)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "20px 24px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  gap: 16,
                }}
              >
                <div>
                  <div style={{
                    fontSize: 17,
                    fontWeight: 600,
                    color: "var(--pp-text)",
                    fontFamily: "'Inter', sans-serif",
                  }}>{plan.title}</div>
                  {plan.sub && (
                    <div style={{ fontSize: 12, color: "var(--pp-muted)", marginTop: 2 }}>{plan.sub}</div>
                  )}
                </div>
                <div style={{
                  width: 40, height: 40,
                  borderRadius: "50%",
                  background: "#9c6fd6",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                  transition: "transform 0.3s",
                  transform: open === i ? "rotate(90deg)" : "rotate(0deg)",
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </div>
              </button>

              {/* Раскрывающееся содержимое */}
              <div style={{
                maxHeight: open === i ? 600 : 0,
                overflow: "hidden",
                transition: "max-height 0.4s cubic-bezier(.4,0,.2,1)",
              }}>
                <div style={{ padding: "0 24px 24px" }}>
                  <div style={{
                    height: 1,
                    background: "rgba(156,111,214,0.15)",
                    marginBottom: 20,
                  }} />
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {plan.items.map((item, j) => (
                      <div key={j} style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        background: "linear-gradient(135deg, rgba(156,111,214,0.06) 0%, rgba(156,111,214,0.02) 100%)",
                        borderRadius: 12,
                        padding: "14px 18px",
                        gap: 16,
                      }}>
                        <div>
                          <div style={{ fontSize: 15, fontWeight: 500, color: "var(--pp-text)" }}>{item.label}</div>
                          {item.note && (
                            <div style={{ fontSize: 12, color: "var(--pp-muted)", marginTop: 2 }}>{item.note}</div>
                          )}
                        </div>
                        <div style={{
                          fontSize: 18,
                          fontWeight: 700,
                          color: "#9c6fd6",
                          fontFamily: "var(--font-serif)",
                          whiteSpace: "nowrap",
                        }}>{item.price}</div>
                      </div>
                    ))}
                  </div>
                  {plan.footer && (
                    <div style={{
                      marginTop: 16,
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "10px 14px",
                      background: "rgba(156,111,214,0.08)",
                      borderRadius: 10,
                      fontSize: 13,
                      color: "var(--pp-muted)",
                    }}>
                      <span style={{ fontSize: 16 }}>❄️</span>
                      {plan.footer}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Кнопка записи */}
        <div style={{ marginTop: 32, display: "flex", justifyContent: "center" }}>
          <button
            onClick={onShowForm}
            style={{
              padding: "16px 48px",
              background: "#9c6fd6",
              color: "#fff",
              border: "none",
              borderRadius: 100,
              fontSize: 16,
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "'Inter', sans-serif",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            Записаться на занятие
          </button>
        </div>

      </div>
    </section>
  );
}
