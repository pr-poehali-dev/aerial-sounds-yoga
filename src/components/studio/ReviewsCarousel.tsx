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
    <section id="reviews" style={{ padding: "100px 24px", background: "#2c1a0e" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ marginBottom: 48, textAlign: "center" }}>
          <div className="pp-label" style={{ marginBottom: 16, color: "rgba(232,220,200,0.55)" }}>Отзывы</div>
          <h2 style={{ ...S, fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300, lineHeight: 1.1, color: "#e8dcc8" }}>
            Что говорят <em style={{ color: "#d4b896" }}>наши гости</em>
          </h2>
        </div>

        <div style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(232,220,200,0.15)",
          borderRadius: 24,
          padding: "clamp(32px, 5vw, 56px)",
          opacity: fade ? 1 : 0,
          transition: "opacity 0.25s ease",
          marginBottom: 32,
        }}>
          <div style={{ color: "#d4b896", letterSpacing: 4, marginBottom: 24, fontSize: 20, textAlign: "center" }}>★★★★★</div>
          <p style={{ ...S, fontSize: "clamp(15px, 2vw, 18px)", fontStyle: "italic", color: "#e8dcc8", lineHeight: 1.8, marginBottom: 32, textAlign: "center" }}>{r.text}</p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
            <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(212,184,150,0.15)", border: "2px solid rgba(212,184,150,0.4)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0, fontFamily: "var(--font-serif)", color: "#d4b896" }}>{r.avatar}</div>
            <div style={{ fontSize: 15, fontWeight: 600, color: "#e8dcc8" }}>{r.name}</div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 12 }}>
          <button
            onClick={() => goTo((current - 1 + total) % total)}
            style={{ width: 40, height: 40, borderRadius: "50%", border: "1px solid rgba(232,220,200,0.2)", background: "transparent", cursor: "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(232,220,200,0.5)", transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(212,184,150,0.2)"; e.currentTarget.style.color = "#e8dcc8"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(232,220,200,0.5)"; }}
          >‹</button>
          {REVIEWS.map((_, i) => (
            <button key={i} onClick={() => goTo(i)}
              style={{ width: i === current ? 24 : 8, height: 8, borderRadius: 4, border: "none", cursor: "pointer", background: i === current ? "#d4b896" : "rgba(232,220,200,0.2)", transition: "all 0.3s", padding: 0 }} />
          ))}
          <button
            onClick={() => goTo((current + 1) % total)}
            style={{ width: 40, height: 40, borderRadius: "50%", border: "1px solid rgba(232,220,200,0.2)", background: "transparent", cursor: "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(232,220,200,0.5)", transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(212,184,150,0.2)"; e.currentTarget.style.color = "#e8dcc8"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(232,220,200,0.5)"; }}
          >›</button>
        </div>
      </div>
    </section>
  );
}