import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";
import { IMG_AERIAL, IMG_GONG, PAINS, BENEFITS } from "./data";

const HERO_SLIDES = [
  { src: IMG_AERIAL, label: "✨ Аэройога", sub: "Только у нас" },
  { src: IMG_GONG,   label: "🔔 Гонг-медитация", sub: "Звуковые практики" },
  { src: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/dc4642ee-fbed-41ee-b6e8-fc2931af9b60.jpg", label: "🦴 Здоровая спина", sub: "Без боли и таблеток" },
];
import BackHealthSection from "./BackHealthSection";
import DirectionsPoster from "./DirectionsPoster";

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

interface Props {
  onShowForm: () => void;
}

export default function HeroSection({ onShowForm }: Props) {
  const [slide, setSlide] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setSlide(s => (s + 1) % HERO_SLIDES.length);
        setFading(false);
      }, 400);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (i: number) => {
    if (i === slide) return;
    setFading(true);
    setTimeout(() => { setSlide(i); setFading(false); }, 400);
  };

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", paddingTop: 68 }}>
        <div style={{ position: "absolute", top: "10%", right: "5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(58,125,107,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "5%", left: "-5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(200,169,106,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 24px 80px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center", width: "100%" }}>
          <div>
            <div className="pp-fade-up pp-label" style={{ marginBottom: 20 }}>
              Центр ФИТНСЛИМ
            </div>

            <h1 className="pp-fade-up d1" style={{ ...S, fontSize: "clamp(48px, 6vw, 80px)", fontWeight: 300, lineHeight: 1.05, letterSpacing: "-0.01em", marginBottom: 24, color: "var(--pp-text)" }}>
              Почувствуй<br /><em style={{ color: "var(--pp-teal)" }}>лёгкость</em><br />тела и тишину ума
            </h1>

            <div className="pp-fade-up d3" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button className="pp-btn-primary" onClick={onShowForm} style={{ padding: "16px 32px", fontSize: 15 }}>
                <Icon name="Sparkles" size={17} />
                Записаться на пробное
              </button>
              <a href="tel:+79147012883" className="pp-btn-ghost" style={{ padding: "16px 24px", fontSize: 15 }}>
                <Icon name="Phone" size={16} />
                Позвонить
              </a>
            </div>

            <div className="pp-fade-up d3" style={{ marginTop: 32, display: "flex", gap: 20 }}>
              {[["7+", "лет в городе"], ["500+", "учеников"]].map(([n, l]) => (
                <div key={l} style={{ textAlign: "center" }}>
                  <div style={{ ...S, fontSize: 22, fontWeight: 400, color: "var(--pp-teal)" }}>{n}</div>
                  <div style={{ fontSize: 11, color: "var(--pp-muted)", marginTop: 2 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="pp-fade-up d2" style={{ position: "relative" }}>
            <div style={{ borderRadius: 24, overflow: "hidden", aspectRatio: "3/4", boxShadow: "0 40px 100px rgba(31,29,24,0.15)" }}>
              <img
                src={HERO_SLIDES[slide].src}
                alt={HERO_SLIDES[slide].label}
                style={{ width: "100%", height: "100%", objectFit: "cover", transition: "opacity 0.4s ease", opacity: fading ? 0 : 1 }}
              />
            </div>

            <div style={{ position: "absolute", top: 24, right: -16, background: "var(--pp-teal)", borderRadius: 12, padding: "10px 16px", boxShadow: "0 8px 24px rgba(58,125,107,0.3)", transition: "opacity 0.4s ease", opacity: fading ? 0 : 1 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: "#fff", letterSpacing: "0.04em" }}>{HERO_SLIDES[slide].label}</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.8)" }}>{HERO_SLIDES[slide].sub}</div>
            </div>

            {/* Точки-переключатели */}
            <div style={{ position: "absolute", bottom: 80, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 8 }}>
              {HERO_SLIDES.map((_, i) => (
                <button key={i} onClick={() => goTo(i)} style={{ width: i === slide ? 24 : 8, height: 8, borderRadius: 4, border: "none", cursor: "pointer", background: i === slide ? "#fff" : "rgba(255,255,255,0.5)", transition: "all 0.3s ease", padding: 0 }} />
              ))}
            </div>

            <a href="tel:+79147012883" style={{ position: "absolute", bottom: 24, right: -16, background: "#c8b8e8", borderRadius: 50, padding: "10px 20px 10px 14px", display: "flex", alignItems: "center", gap: 10, boxShadow: "0 4px 20px rgba(139,93,200,0.4)", textDecoration: "none", animation: "phonePulse 1.8s ease-in-out infinite" }}>
              <Icon name="Phone" size={20} style={{ color: "#fff", flexShrink: 0 }} />
              <span style={{ fontSize: 13, fontWeight: 600, color: "#fff", whiteSpace: "nowrap" }}>Начни прямо сейчас</span>
            </a>
          </div>
        </div>
      </section>

      <DirectionsPoster />

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
                    <div style={{ fontSize: 12, color: "var(--pp-muted)", marginTop: 2 }}>Центр ФИТНСЛИМ</div>
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
              {[["7+", "лет в Артёме"]].map(([n, l]) => (
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
      <BackHealthSection onShowForm={onShowForm} />

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
    </>
  );
}