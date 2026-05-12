import { useState } from "react";

interface Props {
  onShowForm: () => void;
}

interface PlanItem {
  label: string;
  price: string;
  note: string;
}

interface PlanGroup {
  groupTitle?: string;
  items: PlanItem[];
}

interface Plan {
  title: string;
  sub?: string;
  groups?: PlanGroup[];
  items?: PlanItem[];
  footer?: string;
  maxH?: number;
}

const plans: Plan[] = [
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
  },
  {
    title: "Свободный абонемент",
    items: [
      { label: "8 занятий · 50 мин", price: "10 000 ₽", note: "" },
      { label: "8 занятий · 90 мин", price: "10 990 ₽", note: "" },
    ],
    footer: "Заморозка 2 недели",
  },
  {
    title: "Индивидуальные тренировки",
    sub: "персональный подход с тренером",
    maxH: 900,
    groups: [
      {
        groupTitle: "Инструктор 2 категории",
        items: [
          { label: "1 занятие · 60 мин", price: "2 800 ₽", note: "" },
          { label: "Абонемент 5 занятий · 60 мин", price: "12 000 ₽", note: "срок действия 4 недели" },
        ],
      },
      {
        groupTitle: "Инструктор 1 категории · опыт более 5 лет",
        items: [
          { label: "1 занятие · 60 мин", price: "3 500 ₽", note: "срок действия 4 недели" },
          { label: "Абонемент 5 занятий · 60 мин", price: "15 000 ₽", note: "срок действия 4 недели" },
          { label: "1 занятие · 90 мин", price: "5 000 ₽", note: "срок действия 4 недели" },
          { label: "Абонемент 5 занятий · 90 мин", price: "22 500 ₽", note: "срок действия 4 недели" },
        ],
      },
      {
        groupTitle: "Руководитель центра · 1 категория",
        items: [
          { label: "1 занятие · 60 мин", price: "5 000 ₽", note: "" },
          { label: "1 занятие · 90 мин", price: "8 999 ₽", note: "" },
        ],
      },
    ],
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
                maxHeight: open === i ? (plan.maxH ?? 600) : 0,
                overflow: "hidden",
                transition: "max-height 0.4s cubic-bezier(.4,0,.2,1)",
              }}>
                <div style={{ padding: "0 24px 24px" }}>
                  <div style={{ height: 1, background: "rgba(156,111,214,0.15)", marginBottom: 20 }} />

                  {/* Обычные items */}
                  {plan.items && (
                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                      {plan.items.map((item, j) => (
                        <div key={j} style={{
                          display: "flex", alignItems: "center", justifyContent: "space-between",
                          background: "linear-gradient(135deg, rgba(156,111,214,0.06) 0%, rgba(156,111,214,0.02) 100%)",
                          borderRadius: 12, padding: "14px 18px", gap: 16,
                        }}>
                          <div>
                            <div style={{ fontSize: 15, fontWeight: 500, color: "var(--pp-text)" }}>{item.label}</div>
                            {item.note && <div style={{ fontSize: 12, color: "var(--pp-muted)", marginTop: 2 }}>{item.note}</div>}
                          </div>
                          <div style={{ fontSize: 18, fontWeight: 700, color: "#9c6fd6", fontFamily: "var(--font-serif)", whiteSpace: "nowrap" }}>{item.price}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Сгруппированные items */}
                  {plan.groups && (
                    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                      {plan.groups.map((group, g) => (
                        <div key={g}>
                          {group.groupTitle && (
                            <div style={{
                              fontSize: 13, fontWeight: 700, color: "#9c6fd6",
                              textTransform: "uppercase", letterSpacing: "0.05em",
                              marginBottom: 10, paddingLeft: 4,
                            }}>{group.groupTitle}</div>
                          )}
                          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                            {group.items.map((item, j) => (
                              <div key={j} style={{
                                display: "flex", alignItems: "center", justifyContent: "space-between",
                                background: "linear-gradient(135deg, rgba(156,111,214,0.06) 0%, rgba(156,111,214,0.02) 100%)",
                                borderRadius: 12, padding: "12px 18px", gap: 16,
                              }}>
                                <div>
                                  <div style={{ fontSize: 14, fontWeight: 500, color: "var(--pp-text)" }}>{item.label}</div>
                                  {item.note && <div style={{ fontSize: 12, color: "var(--pp-muted)", marginTop: 2 }}>{item.note}</div>}
                                </div>
                                <div style={{ fontSize: 17, fontWeight: 700, color: "#9c6fd6", fontFamily: "var(--font-serif)", whiteSpace: "nowrap" }}>{item.price}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {plan.footer && (
                    <div style={{
                      marginTop: 16, display: "flex", alignItems: "center", gap: 8,
                      padding: "10px 14px", background: "rgba(156,111,214,0.08)",
                      borderRadius: 10, fontSize: 13, color: "var(--pp-muted)",
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

        {/* Предложения для новых клиентов */}
        <div style={{ marginTop: 64 }}>
          <div style={{ marginBottom: 32 }}>
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
              marginBottom: 12,
            }}>Новым клиентам</div>
            <h3 style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(20px, 2.4vw, 30px)",
              fontWeight: 700,
              color: "var(--pp-text)",
              lineHeight: 1.2,
              margin: 0,
            }}>Предложения для новых клиентов</h3>
          </div>

          {/* Карточки одиночных пробных */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16, marginBottom: 16 }}>
            {[
              { name: "Первый шаг", desc: "Пробная тренировка · 60 мин", price: "500 ₽" },
              { name: "Первый опыт", desc: "Пробная тренировка · 60 мин", price: "800 ₽" },
            ].map((offer, i) => (
              <div key={i} style={{
                borderRadius: 18,
                overflow: "hidden",
                position: "relative",
                minHeight: 280,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}>
                <img
                  src="https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/bucket/04e8f2cc-2a02-4b15-892e-947fd5abd3de.jpg"
                  alt="Пробная тренировка"
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(20,10,35,0.88) 0%, rgba(20,10,35,0.35) 55%, transparent 100%)" }} />
                <div style={{ position: "relative", padding: "24px 22px", display: "flex", flexDirection: "column", gap: 12 }}>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#c4a0f0", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>Новым клиентам</div>
                    <div style={{ fontSize: 20, fontWeight: 900, color: "#fff", textTransform: "uppercase", letterSpacing: "0.02em", marginBottom: 4 }}>«{offer.name}»</div>
                    <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)" }}>{offer.desc}</div>
                  </div>
                  <div style={{ background: "#c4a0f0", borderRadius: 8, padding: "8px 18px", alignSelf: "flex-start" }}>
                    <div style={{ fontSize: 22, fontWeight: 800, color: "#fff", fontFamily: "var(--font-serif)" }}>{offer.price}</div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.85)" }}>60 мин</div>
                  </div>
                  <button
                    onClick={onShowForm}
                    style={{
                      padding: "12px", background: "#9c6fd6", color: "#fff", border: "none",
                      borderRadius: 12, fontSize: 14, fontWeight: 600,
                      cursor: "pointer", fontFamily: "'Inter', sans-serif", transition: "opacity 0.2s",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
                    onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                  >Записаться</button>
                </div>
              </div>
            ))}
          </div>

          {/* Карточка парных тренировок — широкая с фото */}
          <div style={{
            borderRadius: 20,
            overflow: "hidden",
            position: "relative",
            minHeight: 380,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}>
            <img
              src="https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/bucket/69abef0c-9aca-4001-8c1a-a90930d0ea5a.jpg"
              alt="Парная тренировка"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(20,10,35,0.85) 0%, rgba(20,10,35,0.3) 50%, transparent 100%)" }} />
            <div style={{ position: "relative", padding: "32px 28px 28px" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#c4a0f0", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
                Парная тренировка
              </div>
              <div style={{ fontSize: "clamp(22px,3vw,32px)", fontWeight: 900, color: "#fff", textTransform: "uppercase", letterSpacing: "0.03em", lineHeight: 1.1, marginBottom: 8 }}>
                Приведи подругу
              </div>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,0.75)", marginBottom: 24, maxWidth: 420, lineHeight: 1.5 }}>
                Тренировка с подругой — идеально, если хочешь поддержку, мотивацию и результат быстрее
              </div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 20 }}>
                {[{ price: "900 ₽", dur: "60 мин" }, { price: "1 500 ₽", dur: "90 мин" }].map((p, i) => (
                  <div key={i} style={{ background: "#c4a0f0", borderRadius: 8, padding: "10px 20px" }}>
                    <div style={{ fontSize: 24, fontWeight: 900, color: "#fff", fontFamily: "var(--font-serif)" }}>{p.price}</div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.85)" }}>{p.dur}</div>
                  </div>
                ))}
              </div>
              <button
                onClick={onShowForm}
                style={{
                  padding: "13px 36px", background: "#9c6fd6", color: "#fff",
                  border: "none", borderRadius: 12, fontSize: 15, fontWeight: 700,
                  cursor: "pointer", fontFamily: "'Inter', sans-serif", transition: "opacity 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >Записаться</button>
            </div>
          </div>
        </div>

        {/* Индивидуальные тренировки — карточка с фото */}
        <div style={{
          marginTop: 16,
          borderRadius: 20,
          overflow: "hidden",
          position: "relative",
          minHeight: 420,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}>
          <img
            src="https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/bucket/49629e92-6181-4e8f-83e1-6e930e09742a.jpg"
            alt="Индивидуальные тренировки"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(20,10,35,0.92) 0%, rgba(20,10,35,0.5) 50%, rgba(20,10,35,0.15) 100%)" }} />
          <div style={{ position: "relative", padding: "32px 28px 32px" }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#c4a0f0", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>
              Персональный подход
            </div>
            <div style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 900, color: "#fff", textTransform: "uppercase", letterSpacing: "0.03em", lineHeight: 1.1, marginBottom: 14 }}>
              Индивидуальные<br />тренировки
            </div>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.8)", lineHeight: 1.65, marginBottom: 10, maxWidth: 480 }}>
              Это всегда персональный подход под ваши цели, особенности и уровень подготовки. Именно это позволяет достигать результатов быстрее и оправдывать ожидания.
            </p>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.65)", lineHeight: 1.65, marginBottom: 28, maxWidth: 480 }}>
              Ваш личный тренер мотивирует вас, помогает сохранять интерес к занятиям и уверенно двигаться к желаемому результату.
            </p>
            <button
              onClick={onShowForm}
              style={{
                padding: "13px 36px", background: "#9c6fd6", color: "#fff",
                border: "none", borderRadius: 12, fontSize: 15, fontWeight: 700,
                cursor: "pointer", fontFamily: "'Inter', sans-serif", transition: "opacity 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >Записаться</button>
          </div>
        </div>

      </div>
    </section>
  );
}