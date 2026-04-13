import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";
import ReviewsCarousel from "@/components/studio/ReviewsCarousel";
import BackHealthSection from "@/components/studio/BackHealthSection";
import ContactForm from "@/components/studio/ContactForm";
import PrivacyModal from "@/components/studio/PrivacyModal";
import {
  IMG_AERIAL, IMG_GONG,
  SERVICES, PAINS, BENEFITS, STEPS, TRUST, FAQ_TABS,
} from "@/components/studio/data";

const S = { fontFamily: "var(--font-serif)" };

function useCountUp(target: number, duration = 2000, start = 10) {
  const [count, setCount] = useState(start);
  const ref = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const startTime = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(start + (target - start) * ease));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, start]);
  return { count, ref };
}

function AboutCounter() {
  const { count, ref } = useCountUp(500, 2200, 10);
  return (
    <div ref={ref} style={{ flex: 1, background: "var(--pp-cream)", border: "1px solid var(--pp-border)", borderRadius: 16, padding: "20px 16px", textAlign: "center" }}>
      <div style={{ ...S, fontSize: 28, fontWeight: 400, color: "var(--pp-teal)", lineHeight: 1 }}>{count}+</div>
      <div style={{ fontSize: 12, color: "var(--pp-muted)", marginTop: 6, lineHeight: 1.3 }}>учеников</div>
    </div>
  );
}

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [faqTab, setFaqTab] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [privacyModal, setPrivacyModal] = useState<"privacy" | "consent" | null>(null);

  return (
    <div style={{ background: "var(--pp-cream)", minHeight: "100vh", color: "var(--pp-text)" }}>

      {/* ── НАВИГАЦИЯ ─────────────────────────────────────── */}
      <nav className="pp-nav">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
          <a href="#" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
            <div style={{ width: 40, height: 40, borderRadius: "50%", border: "1.5px solid var(--pp-teal)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>🪢</div>
            <div>
              <div style={{ ...S, fontSize: 18, fontWeight: 500, color: "var(--pp-text)", lineHeight: 1.1 }}>Студия Аэройоги, Йоги и Спа</div>
              <div style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--pp-muted)" }}>Аэройога · Йога · Фитнес</div>
            </div>
          </a>
          <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
            {["О нас", "Услуги", "Обучение", "Отзывы", "FAQ"].map((t, i) => (
              <a key={t} href={`#${["about","services","training","reviews","faq"][i]}`}
                style={{ fontSize: 14, color: "var(--pp-muted)", textDecoration: "none", transition: "color 0.2s", fontWeight: 500 }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--pp-teal)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--pp-muted)")}
                className="hidden md:block">{t}</a>
            ))}
            <button className="pp-btn-primary" onClick={() => setShowForm(true)} style={{ padding: "10px 24px", fontSize: 13 }}>
              Записаться
            </button>
          </div>
        </div>
      </nav>

      {/* ── HERO ──────────────────────────────────────────── */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", paddingTop: 68 }}>
        <div style={{ position: "absolute", top: "10%", right: "5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(58,125,107,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "5%", left: "-5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(200,169,106,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 24px 80px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center", width: "100%" }}>
          <div>
            <div className="pp-fade-up pp-label" style={{ marginBottom: 20 }}>
              Студия аэройоги и звуковых практик
            </div>

            <h1 className="pp-fade-up d1" style={{ ...S, fontSize: "clamp(48px, 6vw, 80px)", fontWeight: 300, lineHeight: 1.05, letterSpacing: "-0.01em", marginBottom: 24, color: "var(--pp-text)" }}>
              Почувствуй<br /><em style={{ color: "var(--pp-teal)" }}>лёгкость</em><br />тела и тишину ума
            </h1>

            <p className="pp-fade-up d2" style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--pp-teal)", marginBottom: 12 }}>
              Направления студии
            </p>
            <div className="pp-fade-up d2" style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
              {["🪢 Аэройога", "🔔 Гонг-медитации", "🧘 Хатха йога", "🤸 Йога Айенгара", "🌸 Йога для беременных", "🦴 Здоровая спина"].map(t => (
                <span key={t} style={{ fontSize: 13, color: "var(--pp-muted)", background: "var(--pp-cream-3)", borderRadius: 100, padding: "6px 14px", border: "1px solid var(--pp-border)" }}>{t}</span>
              ))}
            </div>

            <div className="pp-fade-up d3" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button className="pp-btn-primary" onClick={() => setShowForm(true)} style={{ padding: "16px 32px", fontSize: 15 }}>
                <Icon name="Sparkles" size={17} />
                Записаться на пробное
              </button>
              <a href="tel:+79147012883" className="pp-btn-ghost" style={{ padding: "16px 24px", fontSize: 15 }}>
                <Icon name="Phone" size={16} />
                Позвонить
              </a>
            </div>

            <div className="pp-fade-up d3" style={{ marginTop: 32, display: "flex", gap: 20 }}>
              {[["7+", "лет в городе"], ["500+", "учеников"], ["10+", "инструкторов"]].map(([n, l]) => (
                <div key={l} style={{ textAlign: "center" }}>
                  <div style={{ ...S, fontSize: 22, fontWeight: 400, color: "var(--pp-teal)" }}>{n}</div>
                  <div style={{ fontSize: 11, color: "var(--pp-muted)", marginTop: 2 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="pp-fade-up d2 pp-float" style={{ position: "relative" }}>
            <div style={{ borderRadius: 24, overflow: "hidden", aspectRatio: "3/4", boxShadow: "0 40px 100px rgba(31,29,24,0.15)" }}>
              <img src={IMG_AERIAL} alt="Аэройога в гамаках" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>

            <div style={{ position: "absolute", top: 24, right: -16, background: "var(--pp-teal)", borderRadius: 12, padding: "10px 16px", boxShadow: "0 8px 24px rgba(58,125,107,0.3)" }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: "#fff", letterSpacing: "0.04em" }}>✨ Аэройога</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.8)" }}>Только у нас</div>
            </div>

            <a href="tel:+79147012883" style={{ position: "absolute", bottom: 24, right: -16, background: "#c8b8e8", borderRadius: 50, padding: "10px 20px 10px 14px", display: "flex", alignItems: "center", gap: 10, boxShadow: "0 4px 20px rgba(139,93,200,0.4)", textDecoration: "none", animation: "phonePulse 1.8s ease-in-out infinite" }}>
              <Icon name="Phone" size={20} style={{ color: "#fff", flexShrink: 0 }} />
              <span style={{ fontSize: 13, fontWeight: 600, color: "#fff", whiteSpace: "nowrap" }}>Начни прямо сейчас</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── О НАС ────────────────────────────────────────── */}
      <section id="about" style={{ padding: "100px 24px", background: "var(--pp-cream-2)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
          <div>
            <div className="pp-label" style={{ marginBottom: 16 }}>О студии</div>
            <h2 style={{ ...S, fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300, lineHeight: 1.1, marginBottom: 16 }}>
              Мы объединили <em style={{ color: "var(--pp-teal)" }}>йогу, фитнес и спа</em> под одной крышей
            </h2>
            <hr className="pp-divider" style={{ margin: "16px 0 20px" }} />
            <p style={{ fontSize: 15, color: "var(--pp-muted)", lineHeight: 1.75, marginBottom: 16 }}>
              Чтобы каждый нашёл свой путь к здоровью.
            </p>
            <p style={{ fontSize: 15, color: "var(--pp-muted)", lineHeight: 1.75, marginBottom: 16 }}>
              Центр Фитнслим & Пространство Пара работает в Артёме с 2019 года. За это время мы стали местом, куда приходят не просто за тренировкой — а за ощущением себя живым, лёгким и счастливым.
            </p>
            <p style={{ fontSize: 15, color: "var(--pp-muted)", lineHeight: 1.75 }}>
              Наши инструкторы — сертифицированные специалисты с опытом от 5 лет. Работаем по авторским программам, адаптированным для любого уровня: от новичков до продвинутых практиков.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: "var(--pp-cream)", border: "1px solid var(--pp-border)", borderRadius: 20, padding: "28px 32px" }}>
              <div className="pp-label" style={{ marginBottom: 16 }}>Контакты</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <a href="tel:+79147012883" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", color: "var(--pp-text)", fontSize: 15, fontWeight: 500 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--pp-teal-light)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon name="Phone" size={16} style={{ color: "var(--pp-teal)" }} />
                  </div>
                  <div>
                    <div>+7 (914) 701-28-83</div>
                    <div style={{ fontSize: 12, color: "var(--pp-muted)", marginTop: 2 }}>Фитнслим</div>
                  </div>
                </a>
                <a href="tel:+79089803545" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", color: "var(--pp-text)", fontSize: 15, fontWeight: 500 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--pp-teal-light)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon name="Phone" size={16} style={{ color: "var(--pp-teal)" }} />
                  </div>
                  <div>
                    <div>+7 (908) 980-35-45</div>
                    <div style={{ fontSize: 12, color: "var(--pp-muted)", marginTop: 2 }}>СПА Пространство Пара</div>
                  </div>
                </a>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 15, color: "var(--pp-text)" }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--pp-teal-light)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon name="MapPin" size={16} style={{ color: "var(--pp-teal)" }} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 500 }}>г. Артём, мкр. Глобус-2, 1а</div>
                    <div style={{ fontSize: 13, color: "var(--pp-muted)", marginTop: 2 }}>Приморский край</div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              {[["7+", "лет в Артёме"], ["10+", "инструкторов"]].map(([n, l]) => (
                <div key={l} style={{ flex: 1, background: "var(--pp-cream)", border: "1px solid var(--pp-border)", borderRadius: 16, padding: "20px 16px", textAlign: "center" }}>
                  <div style={{ ...S, fontSize: 28, fontWeight: 400, color: "var(--pp-teal)", lineHeight: 1 }}>{n}</div>
                  <div style={{ fontSize: 12, color: "var(--pp-muted)", marginTop: 6, lineHeight: 1.3 }}>{l}</div>
                </div>
              ))}
              <AboutCounter />
            </div>
          </div>
        </div>
      </section>

      {/* ── БОЛЬ ─────────────────────────────────────────── */}
      <section style={{ padding: "100px 24px", background: "var(--pp-cream-2)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <div className="pp-label" style={{ marginBottom: 16 }}>Узнай себя</div>
            <h2 style={{ ...S, fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 300, marginBottom: 16, lineHeight: 1.1 }}>
              Вы узнаёте себя в <em style={{ color: "var(--pp-teal)" }}>одной из этих историй</em>?
            </h2>
            <p style={{ fontSize: 16, color: "var(--pp-muted)", lineHeight: 1.7, maxWidth: 620, margin: 0 }}>
              Каждая программа в ФИТНСЛИМ создана под конкретный запрос — чтобы вы получили результат, а не просто «занятие».
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 32 }}>
            {PAINS.map((p, i) => (
              <div key={i} className="pp-card" style={{ padding: "24px 28px", display: "flex", gap: 16, alignItems: "center" }}>
                <img src={p.img} alt="" style={{ width: 64, height: 64, borderRadius: "50%", objectFit: "cover", flexShrink: 0, border: "2px solid var(--pp-teal)" }} />
                <p style={{ fontSize: 15, color: "var(--pp-muted)", lineHeight: 1.65, margin: 0 }}>{p.text}</p>
              </div>
            ))}
          </div>

          <div style={{ background: "rgba(58,125,107,0.07)", border: "1px solid rgba(58,125,107,0.18)", borderRadius: 20, padding: "28px 36px", textAlign: "center" }}>
            <p style={{ ...S, fontSize: 22, fontStyle: "italic", color: "var(--pp-text)", margin: 0 }}>
              Если хотя бы один пункт — про тебя, ты попала туда, куда нужно.
            </p>
          </div>
        </div>
      </section>

      {/* ── ЗДОРОВАЯ СПИНА ────────────────────────────────── */}
      <BackHealthSection onShowForm={() => setShowForm(true)} />

      {/* ── РЕШЕНИЕ ───────────────────────────────────────── */}
      <section style={{ padding: "100px 24px", background: "var(--pp-cream)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <div className="pp-label" style={{ marginBottom: 16 }}>Наш подход</div>
            <h2 style={{ ...S, fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300, lineHeight: 1.1, marginBottom: 16 }}>
              Пространство, где тело <em style={{ color: "var(--pp-teal)" }}>парит</em>, а разум молчит
            </h2>
            <hr className="pp-divider" style={{ margin: "20px 0 24px" }} />
            <p style={{ fontSize: 16, color: "var(--pp-muted)", lineHeight: 1.75, marginBottom: 32 }}>
              Мы создали место, где аэройога встречается со звуковой терапией — уникальное сочетание, работающее одновременно на физическом и эмоциональном уровне.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {BENEFITS.map((b, i) => (
                <div key={i} className="pp-card" style={{ padding: "16px 20px", display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: "var(--pp-teal-light)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon name={b.icon} fallback="Leaf" size={18} style={{ color: "var(--pp-teal)" }} />
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "var(--pp-text)", marginBottom: 2 }}>{b.title}</div>
                    <div style={{ fontSize: 13, color: "var(--pp-muted)", lineHeight: 1.5 }}>{b.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ position: "relative" }}>
            <div style={{ borderRadius: 24, overflow: "hidden", aspectRatio: "4/5", boxShadow: "0 30px 80px rgba(31,29,24,0.12)" }}>
              <img src={IMG_GONG} alt="Гонг-медитация" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ position: "absolute", top: 32, left: -28, background: "var(--pp-cream-2)", borderRadius: 16, padding: "20px 24px", boxShadow: "0 12px 40px rgba(31,29,24,0.1)", border: "1px solid var(--pp-border)" }}>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <div style={{ fontSize: 28 }}>🔔</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "var(--pp-text)" }}>Гонг-медитация</div>
                  <div style={{ fontSize: 11, color: "var(--pp-muted)" }}>Тибетские чаши · Гонг · Монохорд</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              <button className="pp-btn-gold" onClick={() => setShowForm(true)}>
                <Icon name="Sparkles" size={15} />
                Записаться
              </button>
            </div>

            <div style={{ fontSize: 80, textAlign: "center", position: "relative", zIndex: 1 }} className="pp-float">🔔</div>
          </div>

          {/* Остальные услуги */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {SERVICES.slice(0, 2).map((s, i) => (
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
                <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 20 }}>
                  <span style={{ ...S, fontSize: 28, fontWeight: 400, color: "var(--pp-teal)" }}>{s.price}</span>
                  <span style={{ fontSize: 13, color: "var(--pp-muted)" }}>/ {s.per}</span>
                </div>
                <button className="pp-btn-ghost" onClick={() => setShowForm(true)} style={{ justifyContent: "center" }}>
                  Записаться
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ОТЗЫВЫ ───────────────────────────────────────── */}
      <ReviewsCarousel />

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
              <button className="pp-btn-primary" onClick={() => setShowForm(true)}>
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
                <div style={{ fontSize: 36, marginBottom: 12 }}>{t.emoji}</div>
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
            <button className="pp-btn-ghost" onClick={() => setShowForm(true)}>
              <Icon name="MessageCircle" size={15} />
              Написать нам
            </button>
          </div>

          <div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {FAQ_TABS.map((tab, ti) => (
                <button key={ti} onClick={() => { setFaqTab(ti); setOpenFaq(null); }}
                  style={{ padding: "8px 18px", borderRadius: 100, border: `1px solid ${faqTab === ti ? "var(--pp-teal)" : "var(--pp-border)"}`, background: faqTab === ti ? "var(--pp-teal)" : "transparent", color: faqTab === ti ? "#fff" : "var(--pp-muted)", fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "all 0.2s" }}>
                  {tab.label}
                </button>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {FAQ_TABS[faqTab].items.map((f, i) => (
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
      <section style={{ padding: "100px 24px", background: "var(--pp-cream)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(58,125,107,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: 56, marginBottom: 24 }} className="pp-float">🪢</div>
          <div className="pp-label" style={{ marginBottom: 16 }}>Начни сегодня</div>
          <h2 style={{ ...S, fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 300, lineHeight: 1.05, marginBottom: 20 }}>
            Твой первый шаг —<br /><em style={{ color: "var(--pp-teal)" }}>по спец цене</em>
          </h2>
          <hr className="pp-divider" style={{ margin: "0 auto 24px" }} />
          <p style={{ fontSize: 17, color: "var(--pp-muted)", lineHeight: 1.7, marginBottom: 32 }}>
            Запишись на пробное занятие аэройогой или гонг-медитацию прямо сейчас.
          </p>

          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(58,125,107,0.08)", border: "1px solid rgba(58,125,107,0.2)", borderRadius: 100, padding: "8px 20px", marginBottom: 36, fontSize: 13, color: "var(--pp-muted)" }}>
            <div className="pp-blink" style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--pp-teal)", flexShrink: 0 }} />
            Мест в группе не более 8 — обычно заканчиваются за 3–5 дней
          </div>

          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 32 }}>
            <button className="pp-btn-primary" onClick={() => setShowForm(true)} style={{ padding: "18px 48px", fontSize: 16 }}>
              <Icon name="Sparkles" size={18} />
              Записаться по спец цене
            </button>
          </div>

          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+79147012883" className="pp-btn-ghost" style={{ padding: "10px 20px", fontSize: 13 }}>
              <span>📞</span> +7 (914) 701-28-83
            </a>
            <a href="https://wa.me/79147012883" target="_blank" rel="noopener noreferrer" className="pp-btn-ghost" style={{ padding: "10px 20px", fontSize: 13 }}>
              <span>📱</span> WhatsApp
            </a>
            <a href="https://t.me/+79147012883" target="_blank" rel="noopener noreferrer" className="pp-btn-ghost" style={{ padding: "10px 20px", fontSize: 13 }}>
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
              <div style={{ ...S, fontSize: 24, fontStyle: "italic", color: "#fff", marginBottom: 12 }}>Фитнслим</div>
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
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", marginTop: 2 }}>Фитнслим</div>
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
              <button onClick={() => setPrivacyModal("privacy")}
                style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", background: "none", border: "none", cursor: "pointer", padding: 0, transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}>
                Политика конфиденциальности
              </button>
              <button onClick={() => setPrivacyModal("consent")}
                style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", background: "none", border: "none", cursor: "pointer", padding: 0, transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}>
                Согласие на обработку данных
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* ── МОДАЛЬНАЯ ФОРМА ──────────────────────────────── */}
      {showForm && (
        <ContactForm onClose={() => setShowForm(false)} />
      )}

      {/* ── МОДАЛКИ ПОЛИТИКИ ─────────────────────────────── */}
      {privacyModal && (
        <PrivacyModal type={privacyModal} onClose={() => setPrivacyModal(null)} />
      )}

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}