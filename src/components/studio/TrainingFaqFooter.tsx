import { useState } from "react";
import Icon from "@/components/ui/icon";
import { STEPS, TRUST, FAQ_TABS } from "./data";

const S = { fontFamily: "var(--font-serif)" };

interface Props {
  onShowForm: () => void;
  onShowPrivacy: (type: "privacy" | "consent") => void;
}

export default function TrainingFaqFooter({ onShowForm, onShowPrivacy }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── ОБУЧЕНИЕ ─────────────────────────────────────── */}
      <section id="training" style={{ padding: "100px 24px", background: "var(--pp-cream-2)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
          <div>
            <div className="pp-label" style={{ marginBottom: 16 }}>Для инструкторов</div>
            <h2 style={{ ...S, fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300, lineHeight: 1.1, marginBottom: 16 }}>
              Обучение инструкторов <em style={{ color: "var(--pp-teal)" }}>аэройоги</em>
            </h2>
            <hr className="pp-divider" style={{ margin: "16px 0 20px" }} />
            <p style={{ fontSize: 15, color: "var(--pp-muted)", lineHeight: 1.75, marginBottom: 32 }}>
              Для тренеров, йогов и новичков с нуля — если хочешь превратить любовь к практике в профессию и зарабатывать на любимом деле.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {STEPS.map((step, i) => (
                <div key={i} style={{ display: "flex", gap: 16, padding: "20px 24px", background: "var(--pp-cream)", border: "1px solid var(--pp-border)", borderRadius: 16 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--pp-teal)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, flexShrink: 0 }}>{step.n}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "var(--pp-text)", marginBottom: 4 }}>{step.title}</div>
                    <div style={{ fontSize: 13, color: "var(--pp-muted)", lineHeight: 1.5 }}>{step.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "rgba(58,125,107,0.07)", border: "1px solid rgba(58,125,107,0.18)", borderRadius: 24, padding: 36 }}>
            <h3 style={{ ...S, fontSize: 24, fontStyle: "italic", marginBottom: 24, color: "var(--pp-text)" }}>После курса ты сможешь:</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}>
              {[
                "Вести групповые и индивидуальные занятия аэройогой",
                "Работать в любой студии или открыть свои классы",
                "Получить сертификат о прохождении курса «Фундамент Аэройоги»",
                "Зарабатывать от 50 000 ₽ в месяц на любимом деле",
                "Вести Аэройога — эксклюзивный гибридный формат",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ width: 22, height: 22, borderRadius: "50%", background: "var(--pp-teal-light)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                    <Icon name="Check" size={13} style={{ color: "var(--pp-teal)" }} />
                  </div>
                  <span style={{ fontSize: 14, color: "var(--pp-muted)", lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
            <div style={{ paddingTop: 24, borderTop: "1px solid rgba(58,125,107,0.15)" }}>
              <div style={{ fontSize: 13, color: "var(--pp-muted)", marginBottom: 16 }}>📅 Ближайший поток — уточни дату</div>
              <button className="pp-btn-primary" onClick={onShowForm}>
                <Icon name="GraduationCap" size={16} />
                Записаться на обучение
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── ДОВЕРИЕ ──────────────────────────────────────── */}
      <section style={{ padding: "100px 24px", background: "var(--pp-cream)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="pp-label" style={{ marginBottom: 16 }}>Почему выбирают нас</div>
            <h2 style={{ ...S, fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300, lineHeight: 1.1 }}>
              Безопасно. <em style={{ color: "var(--pp-teal)" }}>Профессионально.</em> Уютно.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
            {TRUST.map((t, i) => (
              <div key={i} className="pp-card" style={{ padding: "28px 20px", textAlign: "center" }}>
                {t.img ? (
                  <div style={{ width: 64, height: 64, borderRadius: "50%", overflow: "hidden", margin: "0 auto 12px", border: "2px solid var(--pp-border)" }}>
                    <img src={t.img} alt={t.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                ) : (
                  <div style={{ fontSize: 36, marginBottom: 12 }}>{t.emoji}</div>
                )}
                <div style={{ fontSize: 14, fontWeight: 600, color: "var(--pp-text)", marginBottom: 6 }}>{t.title}</div>
                <div style={{ fontSize: 12, color: "var(--pp-muted)", lineHeight: 1.5 }}>{t.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section id="faq" style={{ padding: "100px 24px", background: "var(--pp-cream-2)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 64, alignItems: "start" }}>
          <div>
            <div className="pp-label" style={{ marginBottom: 16 }}>Вопросы</div>
            <h2 style={{ ...S, fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300, lineHeight: 1.1, marginBottom: 16 }}>
              Отвечаем <em style={{ color: "var(--pp-teal)" }}>честно</em>
            </h2>
            <hr className="pp-divider" style={{ margin: "16px 0 20px" }} />
            <p style={{ fontSize: 15, color: "var(--pp-muted)", lineHeight: 1.7, marginBottom: 24 }}>
              Если не нашли ответ — напишите нам, ответим в течение 15 минут.
            </p>
            <button className="pp-btn-ghost" onClick={onShowForm}>
              <Icon name="MessageCircle" size={15} />
              Написать нам
            </button>
          </div>

          <div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {FAQ_TABS[0].items.map((f, i) => (
                <div key={i} style={{ background: "var(--pp-cream)", border: `1px solid ${openFaq === i ? "rgba(107,63,160,0.35)" : "var(--pp-border)"}`, borderRadius: 14, overflow: "hidden", transition: "border-color 0.2s" }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: "100%", padding: "18px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <span style={{ fontSize: 15, fontWeight: 600, color: "var(--pp-text)", lineHeight: 1.4 }}>{f.q}</span>
                    <span style={{ color: "var(--pp-teal)", fontSize: 22, flexShrink: 0, transition: "transform 0.2s", transform: openFaq === i ? "rotate(45deg)" : "none" }}>+</span>
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: "0 24px 18px", fontSize: 14, color: "var(--pp-muted)", lineHeight: 1.7 }}>{f.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ФИНАЛЬНЫЙ CTA ────────────────────────────────── */}
      <section id="specials" style={{ padding: "100px 24px", background: "#2c1a0e", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(180,110,60,0.18) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: 56, marginBottom: 24 }} className="pp-float">🪢</div>
          <div className="pp-label" style={{ marginBottom: 16, color: "rgba(255,220,180,0.7)" }}>Начни сегодня</div>
          <h2 style={{ ...S, fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 300, lineHeight: 1.05, marginBottom: 20, color: "#fff" }}>
            Твой первый шаг —<br /><em style={{ color: "#e8b47a" }}>по специальной цене</em>
          </h2>
          <hr className="pp-divider" style={{ margin: "0 auto 24px", borderColor: "rgba(255,255,255,0.15)" }} />
          <p style={{ fontSize: 17, color: "rgba(255,220,180,0.75)", lineHeight: 1.7, marginBottom: 32 }}>
            Запишись на пробное занятие прямо сейчас и почувствуй лёгкость с первого раза.
          </p>

          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 100, padding: "8px 20px", marginBottom: 36, fontSize: 13, color: "rgba(255,220,180,0.7)" }}>
            <div className="pp-blink" style={{ width: 8, height: 8, borderRadius: "50%", background: "#e8b47a", flexShrink: 0 }} />
            Мест в группе не более 8 — обычно заканчиваются за 3–5 дней
          </div>

          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 32 }}>
            <button className="pp-btn-primary pp-btn-pulse-cta" onClick={onShowForm} style={{ padding: "20px 56px", fontSize: 17 }}>
              <Icon name="Sparkles" size={18} />
              Записаться по специальной цене
            </button>
          </div>

          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+79147012883" style={{ padding: "10px 20px", fontSize: 13, border: "1px solid rgba(255,255,255,0.2)", borderRadius: 100, color: "rgba(255,220,180,0.85)", textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>
              <span>📞</span> +7 (914) 701-28-83
            </a>
            <a href="https://wa.me/79147012883" target="_blank" rel="noopener noreferrer" style={{ padding: "10px 20px", fontSize: 13, border: "1px solid rgba(255,255,255,0.2)", borderRadius: 100, color: "rgba(255,220,180,0.85)", textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>
              <span>📱</span> WhatsApp
            </a>
            <a href="https://t.me/+79147012883" target="_blank" rel="noopener noreferrer" style={{ padding: "10px 20px", fontSize: 13, border: "1px solid rgba(255,255,255,0.2)", borderRadius: 100, color: "rgba(255,220,180,0.85)", textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>
              <span>💬</span> Telegram
            </a>
          </div>
        </div>
      </section>

      {/* ── ФУТЕР ────────────────────────────────────────── */}
      <footer style={{ background: "#1F1D18", color: "rgba(255,255,255,0.7)", padding: "60px 24px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
            <div>
              <div style={{ ...S, fontSize: 24, fontStyle: "italic", color: "#fff", marginBottom: 12 }}>Аэройога · Йога · Фитнес</div>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, maxWidth: "32ch" }}>
                Студия аэройоги, гонг-медитаций и обучения инструкторов. Место, где тело парит, а разум молчит.
              </p>
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 16 }}>Услуги</div>
              {["Аэройога в гамаках", "Гонг-медитации", "Аэройога", "Обучение инструкторов"].map(t => (
                <div key={t} style={{ marginBottom: 10 }}>
                  <a href="#services" style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--pp-teal)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}>{t}</a>
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 16 }}>Контакты</div>
              <div style={{ marginBottom: 10 }}>
                <a href="tel:+79147012883" style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", textDecoration: "none" }}>+7 (914) 701-28-83</a>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", marginTop: 2 }}>Студия Аэройоги, Йоги и Фитнеса</div>
              </div>
              <div style={{ marginBottom: 10 }}>
                <a href="tel:+79089803545" style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", textDecoration: "none" }}>+7 (908) 980-35-45</a>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", marginTop: 2 }}>СПА Пространство Пара</div>
              </div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginBottom: 16 }}>г. Артём, мкр. Глобус-2, 1а</div>
              <div style={{ display: "flex", gap: 12 }}>
                {[
                  { href: "https://wa.me/79147012883", label: "WA" },
                  { href: "https://t.me/+79147012883", label: "TG" },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.6)", textDecoration: "none", transition: "all 0.2s" }}
                    onMouseEnter={e => { e.currentTarget.style.background = "var(--pp-teal)"; e.currentTarget.style.color = "#fff"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}
                  >{s.label}</a>
                ))}
              </div>
            </div>
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>© 2019–2026 Студия Аэройоги, Йоги и Спа · г. Артём</span>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap", alignItems: "center" }}>
              <button onClick={() => onShowPrivacy("privacy")}
                style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", background: "none", border: "none", cursor: "pointer", padding: 0, transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}>
                Политика конфиденциальности
              </button>
              <button onClick={() => onShowPrivacy("consent")}
                style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", background: "none", border: "none", cursor: "pointer", padding: 0, transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}>
                Согласие на обработку данных
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}