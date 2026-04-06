import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/bdb479d2-7064-4ee5-8f50-ce77e207eeb8.jpg";

const DAYS = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
const LEVELS = ["Все", "Начинающий", "Средний", "Продвинутый"];

const SCHEDULE = [
  { id: 1, day: "Пн", time: "07:00", name: "Утренняя йога", trainer: "Анна К.", duration: 60, level: "Начинающий", spots: 8, color: "#FF5C00" },
  { id: 2, day: "Пн", time: "10:00", name: "Силовой тренинг", trainer: "Дмитрий В.", duration: 60, level: "Средний", spots: 6, color: "#00D4FF" },
  { id: 3, day: "Пн", time: "18:00", name: "HIIT-кардио", trainer: "Мария Л.", duration: 45, level: "Продвинутый", spots: 3, color: "#FF2E93" },
  { id: 4, day: "Пн", time: "20:00", name: "Пилатес", trainer: "Ольга Р.", duration: 60, level: "Начинающий", spots: 10, color: "#00FF94" },
  { id: 5, day: "Вт", time: "07:30", name: "TRX-тренировка", trainer: "Дмитрий В.", duration: 45, level: "Средний", spots: 5, color: "#00D4FF" },
  { id: 6, day: "Вт", time: "09:00", name: "Стретчинг", trainer: "Анна К.", duration: 60, level: "Начинающий", spots: 12, color: "#FF5C00" },
  { id: 7, day: "Вт", time: "19:00", name: "Кросс-фит", trainer: "Сергей М.", duration: 60, level: "Продвинутый", spots: 2, color: "#FF2E93" },
  { id: 8, day: "Ср", time: "08:00", name: "Утренняя йога", trainer: "Анна К.", duration: 60, level: "Начинающий", spots: 8, color: "#FF5C00" },
  { id: 9, day: "Ср", time: "12:00", name: "Функциональный тренинг", trainer: "Сергей М.", duration: 45, level: "Средний", spots: 7, color: "#00D4FF" },
  { id: 10, day: "Ср", time: "18:30", name: "Бокс", trainer: "Дмитрий В.", duration: 60, level: "Продвинутый", spots: 4, color: "#FF2E93" },
  { id: 11, day: "Чт", time: "07:00", name: "Пилатес", trainer: "Ольга Р.", duration: 60, level: "Начинающий", spots: 9, color: "#00FF94" },
  { id: 12, day: "Чт", time: "19:00", name: "HIIT-кардио", trainer: "Мария Л.", duration: 45, level: "Продвинутый", spots: 5, color: "#FF2E93" },
  { id: 13, day: "Пт", time: "08:00", name: "Силовой тренинг", trainer: "Дмитрий В.", duration: 60, level: "Средний", spots: 6, color: "#00D4FF" },
  { id: 14, day: "Пт", time: "10:00", name: "Стретчинг", trainer: "Анна К.", duration: 60, level: "Начинающий", spots: 12, color: "#FF5C00" },
  { id: 15, day: "Пт", time: "19:30", name: "TRX-тренировка", trainer: "Сергей М.", duration: 45, level: "Средний", spots: 3, color: "#00D4FF" },
  { id: 16, day: "Сб", time: "10:00", name: "Кросс-фит", trainer: "Сергей М.", duration: 90, level: "Продвинутый", spots: 8, color: "#FF2E93" },
  { id: 17, day: "Сб", time: "12:00", name: "Утренняя йога", trainer: "Ольга Р.", duration: 60, level: "Начинающий", spots: 14, color: "#FF5C00" },
  { id: 18, day: "Вс", time: "11:00", name: "Функциональный тренинг", trainer: "Мария Л.", duration: 60, level: "Средний", spots: 6, color: "#00D4FF" },
  { id: 19, day: "Вс", time: "13:00", name: "Бокс", trainer: "Дмитрий В.", duration: 60, level: "Продвинутый", spots: 5, color: "#FF2E93" },
];

const SERVICES = [
  {
    icon: "Zap",
    title: "Групповые занятия",
    desc: "Более 15 форматов тренировок для любого уровня подготовки. Йога, HIIT, пилатес, бокс и многое другое.",
    tag: "от 800 ₽/занятие",
    accent: "#FF5C00",
  },
  {
    icon: "User",
    title: "Персональный тренер",
    desc: "Индивидуальная программа, контроль техники и питания. Достигайте результатов в 3 раза быстрее.",
    tag: "от 3 500 ₽/час",
    accent: "#00D4FF",
  },
  {
    icon: "Heart",
    title: "Велнес & Восстановление",
    desc: "Стретчинг, йога-нидра, медитация и работа с телом. Гармония как основа физической силы.",
    tag: "от 700 ₽/занятие",
    accent: "#FF2E93",
  },
  {
    icon: "TrendingUp",
    title: "Онлайн-трансляции",
    desc: "Занимайтесь с нами из любой точки мира. Полная библиотека записанных тренировок доступна 24/7.",
    tag: "от 1 200 ₽/месяц",
    accent: "#00FF94",
  },
];

const STATS = [
  { value: "1500+", label: "Клиентов" },
  { value: "15", label: "Тренеров" },
  { value: "7", label: "Лет работы" },
  { value: "98%", label: "Довольны результатом" },
];

const DIFFICULTY_COLORS: Record<string, string> = {
  "Начинающий": "#00FF94",
  "Средний": "#FFB800",
  "Продвинутый": "#FF2E93",
};

export default function Index() {
  const [activeDay, setActiveDay] = useState("Пн");
  const [activeLevel, setActiveLevel] = useState("Все");
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const filtered = SCHEDULE.filter(
    (s) => s.day === activeDay && (activeLevel === "Все" || s.level === activeLevel)
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ background: "var(--dark-bg)", minHeight: "100vh", color: "#fff" }}>
      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, borderBottom: "1px solid var(--dark-border)", backdropFilter: "blur(20px)", background: "rgba(10,10,10,0.8)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <div style={{ fontFamily: "Oswald, sans-serif", fontSize: 28, fontWeight: 700, letterSpacing: "0.05em" }}>
            <span className="neon-text">PULSE</span>
          </div>
          <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
            <a href="#services" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontFamily: "Oswald, sans-serif", letterSpacing: "0.05em", fontSize: 14, textTransform: "uppercase", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--neon)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}>Услуги</a>
            <a href="#schedule" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontFamily: "Oswald, sans-serif", letterSpacing: "0.05em", fontSize: 14, textTransform: "uppercase", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--neon)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}>Расписание</a>
            <button className="neon-btn" onClick={() => setShowForm(true)}
              style={{ padding: "10px 24px", borderRadius: 4, fontSize: 13, border: "none", cursor: "pointer" }}>
              Записаться
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }} className="hero-grid noise-overlay">
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img src={HERO_IMG} alt="Студия" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.25 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.7) 50%, rgba(10,10,10,0.9) 100%)" }} />
        </div>
        <div style={{ position: "absolute", top: "20%", right: "5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,92,0,0.12) 0%, transparent 70%)", zIndex: 1 }} />
        <div style={{ position: "absolute", bottom: "10%", left: "10%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)", zIndex: 1 }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "120px 24px 80px", position: "relative", zIndex: 2 }}>
          <div className="animate-fade-in-up" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,92,0,0.15)", border: "1px solid rgba(255,92,0,0.3)", borderRadius: 4, padding: "6px 16px", marginBottom: 32 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--neon)" }} />
            <span style={{ fontFamily: "Oswald, sans-serif", fontSize: 13, letterSpacing: "0.1em", color: "var(--neon)", textTransform: "uppercase" }}>Первое занятие бесплатно</span>
          </div>

          <h1 className="animate-fade-in-up delay-100" style={{ fontFamily: "Oswald, sans-serif", fontSize: "clamp(52px, 9vw, 110px)", fontWeight: 700, lineHeight: 0.95, letterSpacing: "-0.02em", margin: "0 0 32px", textTransform: "uppercase" }}>
            <span style={{ display: "block" }}>НАЙДИ</span>
            <span className="gradient-text" style={{ display: "block" }}>СВОЙ</span>
            <span style={{ display: "block" }}>ПРЕДЕЛ</span>
          </h1>

          <p className="animate-fade-in-up delay-200" style={{ fontSize: 20, color: "rgba(255,255,255,0.65)", maxWidth: 520, lineHeight: 1.6, marginBottom: 48 }}>
            Профессиональные тренеры, современное оборудование и атмосфера, которая заряжает энергией. Результат с первой тренировки.
          </p>

          <div className="animate-fade-in-up delay-300" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <button className="neon-btn animate-pulse-glow" onClick={() => setShowForm(true)}
              style={{ padding: "18px 48px", borderRadius: 4, fontSize: 18, border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
              <Icon name="Flame" size={20} />
              Записаться бесплатно
            </button>
            <a href="#schedule"
              style={{ display: "flex", alignItems: "center", gap: 10, padding: "18px 32px", borderRadius: 4, border: "1px solid rgba(255,255,255,0.2)", color: "#fff", textDecoration: "none", fontFamily: "Oswald, sans-serif", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", fontSize: 16, transition: "all 0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,92,0,0.5)"; e.currentTarget.style.color = "var(--neon)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "#fff"; }}>
              <Icon name="Calendar" size={18} />
              Расписание
            </a>
          </div>

          <div className="animate-fade-in-up delay-400" style={{ display: "flex", gap: 48, marginTop: 80, paddingTop: 48, borderTop: "1px solid var(--dark-border)", flexWrap: "wrap" }}>
            {STATS.map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: "Oswald, sans-serif", fontSize: 40, fontWeight: 700, color: "var(--neon)", lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", marginTop: 4, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "100px 24px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ marginBottom: 64 }}>
          <div style={{ fontFamily: "Oswald, sans-serif", fontSize: 13, letterSpacing: "0.15em", color: "var(--neon)", textTransform: "uppercase", marginBottom: 12 }}>— Что мы предлагаем</div>
          <h2 style={{ fontFamily: "Oswald, sans-serif", fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "-0.01em", margin: 0 }}>
            Наши <span className="gradient-text">Услуги</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {SERVICES.map((s, i) => (
            <div key={i} className="dark-card" style={{ borderRadius: 12, padding: 32, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, ${s.accent}12 0%, transparent 60%)`, pointerEvents: "none" }} />
              <div style={{ width: 56, height: 56, borderRadius: 12, background: `${s.accent}20`, border: `1px solid ${s.accent}30`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                <Icon name={s.icon} fallback="Zap" size={26} style={{ color: s.accent }} />
              </div>
              <h3 style={{ fontFamily: "Oswald, sans-serif", fontSize: 22, fontWeight: 600, marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.02em" }}>{s.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7, fontSize: 15, marginBottom: 24 }}>{s.desc}</p>
              <div style={{ display: "inline-block", background: `${s.accent}20`, border: `1px solid ${s.accent}30`, borderRadius: 4, padding: "4px 14px", fontFamily: "Oswald, sans-serif", fontSize: 14, color: s.accent, letterSpacing: "0.05em" }}>
                {s.tag}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SCHEDULE */}
      <section id="schedule" style={{ padding: "100px 0", background: "rgba(255,255,255,0.02)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ marginBottom: 48 }}>
            <div style={{ fontFamily: "Oswald, sans-serif", fontSize: 13, letterSpacing: "0.15em", color: "var(--neon)", textTransform: "uppercase", marginBottom: 12 }}>— Ваш график</div>
            <h2 style={{ fontFamily: "Oswald, sans-serif", fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "-0.01em", margin: 0 }}>
              Интерактивное <span className="gradient-text">Расписание</span>
            </h2>
          </div>

          <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
            {DAYS.map((d) => (
              <button key={d} className={`schedule-tab ${activeDay === d ? "active" : ""}`} onClick={() => setActiveDay(d)}
                style={{ color: activeDay === d ? "#000" : "rgba(255,255,255,0.6)" }}>
                {d}
              </button>
            ))}
          </div>

          <div style={{ display: "flex", gap: 8, marginBottom: 40, flexWrap: "wrap" }}>
            {LEVELS.map((l) => (
              <button key={l} onClick={() => setActiveLevel(l)}
                style={{
                  padding: "6px 16px", borderRadius: 4, fontSize: 12, cursor: "pointer",
                  fontFamily: "Golos Text, sans-serif", letterSpacing: "0.03em",
                  background: activeLevel === l ? "rgba(255,255,255,0.1)" : "transparent",
                  border: `1px solid ${activeLevel === l ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.1)"}`,
                  color: activeLevel === l ? "#fff" : "rgba(255,255,255,0.5)",
                  transition: "all 0.2s",
                }}>
                {l}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div style={{ padding: 60, textAlign: "center", color: "rgba(255,255,255,0.3)", fontFamily: "Oswald, sans-serif", fontSize: 18, letterSpacing: "0.05em" }}>
              Нет занятий в этот день
            </div>
          ) : (
            <div style={{ display: "grid", gap: 12 }}>
              {filtered.map((cls, i) => (
                <div key={cls.id} className="dark-card animate-slide-in" style={{ borderRadius: 10, padding: "20px 28px", display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap", animationDelay: `${i * 0.08}s` }}>
                  <div style={{ minWidth: 70 }}>
                    <div style={{ fontFamily: "Oswald, sans-serif", fontSize: 28, fontWeight: 700, color: cls.color, lineHeight: 1 }}>{cls.time}</div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>{cls.duration} мин</div>
                  </div>
                  <div style={{ width: 1, height: 50, background: "var(--dark-border)", flexShrink: 0 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6, flexWrap: "wrap" }}>
                      <span style={{ fontFamily: "Oswald, sans-serif", fontSize: 20, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.02em" }}>{cls.name}</span>
                      <span className="difficulty-badge" style={{ background: `${DIFFICULTY_COLORS[cls.level]}20`, color: DIFFICULTY_COLORS[cls.level], border: `1px solid ${DIFFICULTY_COLORS[cls.level]}40` }}>
                        {cls.level}
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, color: "rgba(255,255,255,0.5)", fontSize: 14 }}>
                      <Icon name="User" size={14} />
                      {cls.trainer}
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontFamily: "Oswald, sans-serif", fontSize: 22, fontWeight: 700, color: cls.spots <= 3 ? "#FF2E93" : "rgba(255,255,255,0.8)" }}>{cls.spots}</div>
                      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.05em" }}>мест</div>
                    </div>
                    <button className="neon-btn" onClick={() => setShowForm(true)}
                      style={{ padding: "10px 24px", borderRadius: 4, fontSize: 13, border: "none", cursor: "pointer", whiteSpace: "nowrap" }}>
                      Записаться
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "100px 24px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(255,92,0,0.08) 0%, transparent 70%)" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <div style={{ width: 80, height: 80, borderRadius: "50%", background: "rgba(255,92,0,0.15)", border: "1px solid rgba(255,92,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 32px" }} className="animate-float">
            <Icon name="Flame" size={36} style={{ color: "var(--neon)" }} />
          </div>
          <h2 style={{ fontFamily: "Oswald, sans-serif", fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 700, textTransform: "uppercase", lineHeight: 1, marginBottom: 24 }}>
            Первое занятие —<br /><span className="neon-text">бесплатно</span>
          </h2>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 48 }}>
            Приходи на любую групповую тренировку без обязательств. Познакомься с командой и почувствуй атмосферу PULSE лично.
          </p>
          <button className="neon-btn animate-pulse-glow" onClick={() => setShowForm(true)}
            style={{ padding: "20px 60px", borderRadius: 4, fontSize: 20, border: "none", cursor: "pointer" }}>
            Получить бесплатное занятие
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid var(--dark-border)", padding: "40px 24px", textAlign: "center" }}>
        <div style={{ fontFamily: "Oswald, sans-serif", fontSize: 24, fontWeight: 700, marginBottom: 12 }}>
          <span className="neon-text">PULSE</span>
        </div>
        <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 14 }}>
          © 2026 PULSE Fitness Studio. Все права защищены.
        </p>
      </footer>

      {/* MODAL */}
      {showForm && (
        <div style={{ position: "fixed", inset: 0, zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}
          onClick={(e) => { if (e.target === e.currentTarget) { setShowForm(false); setSubmitted(false); } }}>
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.85)", backdropFilter: "blur(10px)" }} />
          <div className="dark-card animate-fade-in" style={{ borderRadius: 16, padding: 48, maxWidth: 480, width: "100%", position: "relative", zIndex: 1 }}>
            <button onClick={() => { setShowForm(false); setSubmitted(false); }}
              style={{ position: "absolute", top: 20, right: 20, background: "transparent", border: "none", color: "rgba(255,255,255,0.4)", cursor: "pointer", fontSize: 24, lineHeight: 1 }}>×</button>

            {!submitted ? (
              <>
                <div style={{ marginBottom: 32 }}>
                  <h3 style={{ fontFamily: "Oswald, sans-serif", fontSize: 32, fontWeight: 700, textTransform: "uppercase", marginBottom: 8 }}>
                    Записаться на<br /><span className="neon-text">занятие</span>
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 15 }}>Первая тренировка — бесплатно. Мы перезвоним в течение часа.</p>
                </div>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div>
                    <label style={{ display: "block", fontSize: 12, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8, fontFamily: "Oswald, sans-serif" }}>Имя</label>
                    <input value={name} onChange={e => setName(e.target.value)} required placeholder="Введите ваше имя"
                      style={{ width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, padding: "14px 16px", color: "#fff", fontSize: 16, outline: "none", boxSizing: "border-box", fontFamily: "Golos Text, sans-serif" }}
                      onFocus={e => (e.target.style.borderColor = "rgba(255,92,0,0.5)")}
                      onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 12, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8, fontFamily: "Oswald, sans-serif" }}>Телефон</label>
                    <input value={phone} onChange={e => setPhone(e.target.value)} required placeholder="+7 (999) 000-00-00" type="tel"
                      style={{ width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, padding: "14px 16px", color: "#fff", fontSize: 16, outline: "none", boxSizing: "border-box", fontFamily: "Golos Text, sans-serif" }}
                      onFocus={e => (e.target.style.borderColor = "rgba(255,92,0,0.5)")}
                      onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")} />
                  </div>
                  <button type="submit" className="neon-btn" style={{ padding: "16px", borderRadius: 8, fontSize: 16, border: "none", cursor: "pointer", marginTop: 8 }}>
                    Отправить заявку
                  </button>
                </form>
              </>
            ) : (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <div style={{ width: 72, height: 72, borderRadius: "50%", background: "rgba(0,255,148,0.15)", border: "1px solid rgba(0,255,148,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                  <Icon name="Check" size={36} style={{ color: "#00FF94" }} />
                </div>
                <h3 style={{ fontFamily: "Oswald, sans-serif", fontSize: 28, marginBottom: 12, textTransform: "uppercase" }}>Заявка принята!</h3>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 16, lineHeight: 1.6 }}>Мы свяжемся с вами в течение часа и запишем на ближайшее удобное занятие.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}