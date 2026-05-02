import { useState, useEffect, useRef } from "react";
import { REVIEWS } from "./data";

const S = { fontFamily: "var(--font-serif)" };

export default function ReviewsCarousel() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = REVIEWS.length;

  const goTo = (i: number) => {
    setFade(false);
    setTimeout(() => {
      setCurrent(i);
      setFade(true);
    }, 250);
    if (timerRef.current) clearInterval(timerRef.current);
    startTimer();
  };

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent(c => {
          setFade(true);
          return (c + 1) % total;
        });
      }, 250);
    }, 6000);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const r = REVIEWS[current];

  return (
    <section id="reviews" style={{ padding: "100px 24px", background: "var(--pp-cream)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ marginBottom: 48, textAlign: "center" }}>
          <div className="pp-label" style={{ marginBottom: 16 }}>Отзывы</div>
          <h2 style={{ ...S, fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300, lineHeight: 1.1 }}>
            Что говорят <em style={{ color: "var(--pp-teal)" }}>наши гости</em>
          </h2>
        </div>

        <div
          className="pp-card"
          style={{
            padding: "48px 48px",
            opacity: fade ? 1 : 0,
            transition: "opacity 0.25s ease",
            marginBottom: 32,
          }}
        >
          <div style={{ color: "var(--pp-gold)", letterSpacing: 4, marginBottom: 24, fontSize: 20, textAlign: "center" }}>★★★★★</div>
          <p style={{ ...S, fontSize: "clamp(15px, 2vw, 18px)", fontStyle: "italic", color: "var(--pp-text)", lineHeight: 1.8, marginBottom: 32, textAlign: "center" }}>{r.text}</p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
            <div style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--pp-teal-light)", border: "2px solid var(--pp-teal)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0, fontFamily: "var(--font-serif)" }}>{r.avatar}</div>
            <div style={{ fontSize: 15, fontWeight: 600, color: "var(--pp-text)" }}>{r.name}</div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 12 }}>
          <button
            onClick={() => goTo((current - 1 + total) % total)}
            style={{ width: 40, height: 40, borderRadius: "50%", border: "1px solid var(--pp-border)", background: "transparent", cursor: "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--pp-muted)", transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.background = "var(--pp-teal)"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "var(--pp-teal)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--pp-muted)"; e.currentTarget.style.borderColor = "var(--pp-border)"; }}
          >‹</button>
          {REVIEWS.map((_, i) => (
            <button key={i} onClick={() => goTo(i)}
              style={{ width: i === current ? 24 : 8, height: 8, borderRadius: 4, border: "none", cursor: "pointer", background: i === current ? "var(--pp-teal)" : "var(--pp-border)", transition: "all 0.3s", padding: 0 }} />
          ))}
          <button
            onClick={() => goTo((current + 1) % total)}
            style={{ width: 40, height: 40, borderRadius: "50%", border: "1px solid var(--pp-border)", background: "transparent", cursor: "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--pp-muted)", transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.background = "var(--pp-teal)"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "var(--pp-teal)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--pp-muted)"; e.currentTarget.style.borderColor = "var(--pp-border)"; }}
          >›</button>
        </div>
      </div>
    </section>
  );
}
