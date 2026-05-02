import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";
import { IMG_AERIAL, IMG_GONG, PAINS, BENEFITS, FAQ_TABS } from "./data";

const HERO_SLIDES = [
  { src: IMG_AERIAL, label: "Аэройога", sub: "Обучение на инструктора аэройоги" },
  { src: IMG_GONG,   label: "Гонг-медитация", sub: "Звуковые практики" },
  { src: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/08443f09-a33a-4642-bc38-f9008b4f7b8d.jpg", label: "Здоровая спина", sub: "Без боли и таблеток" },
  { src: "https://cdn.poehali.dev/files/e332e9bb-a6e5-4967-9dec-7382c12ad3fd.png", label: "Фитнес Микс", sub: "Силовые + кардио · для всех" },
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

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ background: "var(--pp-cream)", border: `1px solid ${open ? "rgba(196,122,170,0.35)" : "var(--pp-border)"}`, borderRadius: 14, overflow: "hidden", transition: "border-color 0.2s" }}>
      <button onClick={() => setOpen(o => !o)} style={{ width: "100%", padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}>
        <span style={{ fontSize: 14, fontWeight: 600, color: "var(--pp-text)", lineHeight: 1.4 }}>{q}</span>
        <span style={{ color: "var(--pp-teal)", fontSize: 20, flexShrink: 0, transition: "transform 0.2s", transform: open ? "rotate(45deg)" : "none" }}>+</span>
      </button>
      {open && <div style={{ padding: "0 20px 14px", fontSize: 13, color: "var(--pp-muted)", lineHeight: 1.7 }}>{a}</div>}
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
      <section id="hero" style={{ height: "100vh", position: "relative", overflow: "hidden" }}>

        {/* Фон — карусель */}
        <img
          src={HERO_SLIDES[slide].src}
          alt={HERO_SLIDES[slide].label}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", transition: "opacity 0.6s ease", opacity: fading ? 0 : 1 }}
        />

        {/* Затемнение */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(10,10,10,0.35) 0%, rgba(10,10,10,0.55) 60%, rgba(10,10,10,0.75) 100%)" }} />

        {/* Кнопка — правый верхний угол */}
        <div className="pp-hero-store-btns" style={{ position: "absolute", top: 82, right: "6vw", zIndex: 10, display: "flex", gap: 10, alignItems: "center" }}>
          <a href="https://apps.apple.com/ru/app/mobifitness/id986278836" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 6, padding: "10px 16px", fontSize: 13, fontWeight: 600, background: "#000", color: "#fff", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 12, cursor: "pointer", textDecoration: "none", fontFamily: "Inter, sans-serif", whiteSpace: "nowrap" }}>
            App Store
          </a>
          <a href="https://www.rustore.ru/catalog/app/com.itrack.fitnslim122797" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 6, padding: "10px 16px", fontSize: 13, fontWeight: 600, background: "#4a90e2", color: "#fff", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 12, cursor: "pointer", textDecoration: "none", fontFamily: "Inter, sans-serif", whiteSpace: "nowrap" }}>
            RuStore
          </a>
          <button onClick={onShowForm} className="pp-btn-pulse-cta" style={{ padding: "13px 32px", fontSize: 14, fontWeight: 600, background: "#2c1a0e", color: "#e8dcc8", border: "1px solid rgba(232,220,200,0.2)", borderRadius: 12, cursor: "pointer", letterSpacing: "0.02em", fontFamily: "Inter, sans-serif" }}>
            Записаться
          </button>
        </div>

        {/* Контент поверх */}
        <div style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", padding: "0 6vw", paddingTop: 68 }}>

          <div className="pp-fade-up pp-label" style={{ marginBottom: 14, color: "rgba(255,255,255,0.7)", borderColor: "rgba(255,255,255,0.25)" }}>
            Приморский край, г. Артём
          </div>

          <h1 style={{ ...S, fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 300, lineHeight: 1.1, letterSpacing: "-0.01em", marginBottom: 20, color: "#fff", maxWidth: 640 }}>
            Почувствуй <em style={{ color: "var(--pp-gold)" }}>лёгкость</em><br />тела и тишину ума
          </h1>

          <p style={{ fontSize: "clamp(13px, 1.4vw, 16px)", color: "rgba(255,255,255,0.75)", marginBottom: 28, maxWidth: 420, lineHeight: 1.6 }}>
            {HERO_SLIDES[slide].label} · {HERO_SLIDES[slide].sub}
          </p>



          <div style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
            {[["7 лет", "опыта"], ["300+", "клиентов"], ["98%", "довольных"]].map(([n, l]) => (
              <div key={l}>
                <div style={{ ...S, fontSize: 20, fontWeight: 400, color: "var(--pp-gold)" }}>{n}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", marginTop: 2 }}>{l}</div>
              </div>
            ))}
            <a
              href="https://yandex.ru/maps/org/193809257456"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", gap: 6,
                padding: "6px 14px", borderRadius: 100,
                background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
                textDecoration: "none", transition: "background 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.18)")}
              onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
            >
              <span style={{ fontSize: 15, letterSpacing: 1 }}>★★★★★</span>
              <span style={{ fontSize: 12, color: "#fff", fontWeight: 600 }}>5.0</span>
              <span style={{ fontSize: 11, color: "rgba(255,255,255,0.6)" }}>Яндекс</span>
            </a>
            <a
              href="https://go.2gis.com/GBjxz"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", gap: 6,
                padding: "6px 14px", borderRadius: 100,
                background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
                textDecoration: "none", transition: "background 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.18)")}
              onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
            >
              <span style={{ fontSize: 13 }}>⭐⭐⭐⭐⭐</span>
              <span style={{ fontSize: 12, color: "#fff", fontWeight: 600 }}>4.9</span>
              <span style={{ fontSize: 11, color: "rgba(255,255,255,0.6)" }}>2ГИС</span>
            </a>
          </div>
        </div>

        {/* Точки-переключатели */}
        <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 8, zIndex: 2 }}>
          {HERO_SLIDES.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} style={{ width: i === slide ? 28 : 8, height: 8, borderRadius: 4, border: "none", cursor: "pointer", background: i === slide ? "#fff" : "rgba(255,255,255,0.4)", transition: "all 0.3s ease", padding: 0 }} />
          ))}
        </div>



      </section>

      <DirectionsPoster onShowForm={onShowForm} />

      {/* ── О НАС ────────────────────────────────────────── */}
      <section id="about" style={{ padding: "100px 24px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/bucket/55c9c9fe-fe69-487c-ba0d-74df88f6e4b5.jpg)", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(248,245,240,0.78)" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start", position: "relative", zIndex: 1 }}>
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
              Наш центр работает в Артёме с 2019 года. За это время мы стали местом, куда приходят не просто за тренировкой — а за ощущением себя живым, лёгким и счастливым.
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
                    <div style={{ fontSize: 12, color: "var(--pp-muted)", marginTop: 2 }}>Йога, фитнес и спа</div>
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

        {/* Частые вопросы */}
        <div style={{ maxWidth: 1200, margin: "48px auto 0", position: "relative", zIndex: 1 }}>
          <div className="pp-label" style={{ marginBottom: 16 }}>Частые вопросы</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 10 }}>
            {FAQ_TABS[0].items.map((f, i) => (
              <FaqItem key={i} q={f.q} a={f.a} />
            ))}
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
            <div className="pp-gong-badge" style={{ position: "absolute", top: 32, left: -28, background: "var(--pp-cream-2)", borderRadius: 16, padding: "20px 24px", boxShadow: "0 12px 40px rgba(31,29,24,0.1)", border: "1px solid var(--pp-border)" }}>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <Icon name="Bell" size={24} style={{ color: "var(--pp-teal)" }} />
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