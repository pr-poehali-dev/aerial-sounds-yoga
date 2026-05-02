import { useState, useEffect, useRef } from "react";
import { REVIEWS } from "./data";

const S = { fontFamily: "var(--font-serif)" };
const VISIBLE = 3;

export default function ReviewsCarousel() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = REVIEWS.length;

  const start = () => {
    timerRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % total);
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

  const visible = Array.from({ length: VISIBLE }, (_, k) => REVIEWS[(current + k) % total]);

  return (
    <section id="reviews" style={{ padding: "100px 24px", background: "var(--pp-cream)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ marginBottom: 48, textAlign: "center" }}>
          <div className="pp-label" style={{ marginBottom: 16 }}>Отзывы</div>
          <h2 style={{ ...S, fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300, lineHeight: 1.1 }}>
            Отзывы наших <em style={{ color: "var(--pp-teal)" }}>клиентов</em>
          </h2>
        </div>

        {/* 3 карточки в строку */}
        <div className="pp-reviews-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 32 }}>
          {visible.map((r, k) => (
            <div key={k} className="pp-card" style={{ padding: "32px 28px", display: "flex", flexDirection: "column", justifyContent: "space-between", opacity: k === 0 ? 1 : k === 1 ? 1 : 0.75, transition: "opacity 0.4s" }}>
              <div>
                <div style={{ color: "var(--pp-gold)", letterSpacing: 3, marginBottom: 16, fontSize: 16 }}>★★★★★</div>
                <p style={{ ...S, fontSize: 14, fontStyle: "italic", color: "var(--pp-text)", lineHeight: 1.7, marginBottom: 24 }}>{r.text}</p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--pp-teal-light)", border: "2px solid var(--pp-teal)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{r.avatar}</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "var(--pp-text)" }}>{r.name}</div>
                  <div style={{ fontSize: 12, color: "var(--pp-muted)" }}>{r.meta}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Навигация */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 12 }}>
          <button onClick={() => goTo((current - 1 + total) % total)}
            style={{ width: 40, height: 40, borderRadius: "50%", border: "1px solid var(--pp-border)", background: "transparent", cursor: "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--pp-muted)", transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.background = "var(--pp-teal)"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "var(--pp-teal)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--pp-muted)"; e.currentTarget.style.borderColor = "var(--pp-border)"; }}>
            ‹
          </button>
          {REVIEWS.map((_, i) => (
            <button key={i} onClick={() => goTo(i)}
              style={{ width: i === current ? 24 : 8, height: 8, borderRadius: 4, border: "none", cursor: "pointer", background: i === current ? "var(--pp-teal)" : "var(--pp-border)", transition: "all 0.3s", padding: 0 }} />
          ))}
          <button onClick={() => goTo((current + 1) % total)}
            style={{ width: 40, height: 40, borderRadius: "50%", border: "1px solid var(--pp-border)", background: "transparent", cursor: "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--pp-muted)", transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.background = "var(--pp-teal)"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "var(--pp-teal)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--pp-muted)"; e.currentTarget.style.borderColor = "var(--pp-border)"; }}>
            ›
          </button>
        </div>
      </div>
    </section>
  );
}