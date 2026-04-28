import { useState, useEffect, useRef } from "react";
import { REVIEWS } from "./data";

const S = { fontFamily: "var(--font-serif)" };

export default function ReviewsCarousel() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const start = () => {
    timerRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % REVIEWS.length);
    }, 5000);
  };

  useEffect(() => {
    start();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const goTo = (i: number) => {
    setCurrent(i);
    if (timerRef.current) clearInterval(timerRef.current);
    start();
  };

  const r = REVIEWS[current];

  return (
    <section id="reviews" style={{ padding: "100px 24px", background: "var(--pp-cream)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ marginBottom: 48, textAlign: "center" }}>
          <div className="pp-label" style={{ marginBottom: 16 }}>Отзывы</div>
          <h2 style={{ ...S, fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300, lineHeight: 1.1 }}>
            Что говорят <em style={{ color: "var(--pp-teal)" }}>после курса</em>
          </h2>
        </div>

        <div className="pp-card" style={{ padding: "40px 44px", minHeight: 260, display: "flex", flexDirection: "column", justifyContent: "space-between", transition: "opacity 0.4s" }}>
          <div style={{ color: "var(--pp-gold)", letterSpacing: 3, marginBottom: 20, fontSize: 18 }}>★★★★★</div>
          <p style={{ ...S, fontSize: "clamp(16px, 2vw, 19px)", fontStyle: "italic", color: "var(--pp-text)", lineHeight: 1.7, marginBottom: 28 }}>{r.text}</p>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--pp-teal-light)", border: "2px solid var(--pp-teal)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>{r.avatar}</div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 600, color: "var(--pp-text)" }}>{r.name}</div>
              <div style={{ fontSize: 13, color: "var(--pp-muted)" }}>{r.meta}</div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 16, marginTop: 28 }}>
          <button
            onClick={() => goTo((current - 1 + REVIEWS.length) % REVIEWS.length)}
            style={{ background: "none", border: "none", cursor: "pointer", fontSize: 28, lineHeight: 1, padding: 4, opacity: 0.7, transition: "opacity 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "0.7")}
          >👈</button>

          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{ width: i === current ? 28 : 10, height: 10, borderRadius: 5, border: "none", cursor: "pointer", background: i === current ? "var(--pp-teal)" : "var(--pp-teal-light)", transition: "all 0.3s", padding: 0 }}
            />
          ))}

          <button
            onClick={() => goTo((current + 1) % REVIEWS.length)}
            style={{ background: "none", border: "none", cursor: "pointer", fontSize: 28, lineHeight: 1, padding: 4, opacity: 0.7, transition: "opacity 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "0.7")}
          >👉</button>
        </div>
      </div>
    </section>
  );
}