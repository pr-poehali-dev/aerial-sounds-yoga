import { useState, useEffect, useCallback } from "react";
import Icon from "@/components/ui/icon";
import { GALLERY } from "./data";

const S = { fontFamily: "var(--font-serif)" };
const CATS = ["Все", "Аэройога", "Гонг", "Йога", "Студия"];

export default function GallerySection() {
  const [active, setActive] = useState("Все");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [loaded, setLoaded] = useState<Record<number, boolean>>({});

  const filtered = active === "Все" ? GALLERY : GALLERY.filter(g => g.cat === active);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const prev = useCallback(() => {
    if (lightbox === null) return;
    setLightbox(lightbox === 0 ? filtered.length - 1 : lightbox - 1);
  }, [lightbox, filtered.length]);

  const next = useCallback(() => {
    if (lightbox === null) return;
    setLightbox(lightbox === filtered.length - 1 ? 0 : lightbox + 1);
  }, [lightbox, filtered.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [closeLightbox, prev, next]);

  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  return (
    <section style={{ padding: "100px 24px", background: "var(--pp-cream-2)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Заголовок */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div className="pp-label" style={{ marginBottom: 14 }}>Наша студия</div>
          <h2 style={{ ...S, fontSize: "clamp(32px,4vw,52px)", fontWeight: 300, lineHeight: 1.1, marginBottom: 16 }}>
            Загляни <em style={{ color: "var(--pp-teal)" }}>внутрь</em>
          </h2>
          <div style={{ width: 80, height: 2, background: "var(--pp-gold)", margin: "0 auto 36px", borderRadius: 2 }} />

          {/* Фильтры */}
          <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
            {CATS.map(cat => (
              <button
                key={cat}
                onClick={() => { setActive(cat); setLightbox(null); }}
                style={{
                  padding: "9px 22px",
                  borderRadius: 100,
                  fontSize: 13,
                  fontWeight: 600,
                  fontFamily: "'Inter', sans-serif",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  border: active === cat ? "1.5px solid var(--pp-teal)" : "1.5px solid var(--pp-border)",
                  background: active === cat ? "var(--pp-teal)" : "transparent",
                  color: active === cat ? "#fff" : "var(--pp-muted)",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Сетка */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 16,
        }}>
          {filtered.map((item, i) => (
            <div
              key={item.img + i}
              onClick={() => setLightbox(i)}
              style={{
                position: "relative",
                borderRadius: 16,
                overflow: "hidden",
                cursor: "zoom-in",
                aspectRatio: "4/3",
                background: "var(--pp-cream-3)",
                border: "1px solid var(--pp-border)",
              }}
              onMouseEnter={e => {
                const overlay = e.currentTarget.querySelector(".gal-overlay") as HTMLElement;
                if (overlay) overlay.style.opacity = "1";
              }}
              onMouseLeave={e => {
                const overlay = e.currentTarget.querySelector(".gal-overlay") as HTMLElement;
                if (overlay) overlay.style.opacity = "0";
              }}
            >
              {!loaded[i] && (
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: 32, height: 32, borderRadius: "50%", border: "3px solid var(--pp-border)", borderTopColor: "var(--pp-teal)", animation: "spin 0.8s linear infinite" }} />
                </div>
              )}
              <img
                src={item.img}
                alt={item.title}
                onLoad={() => setLoaded(p => ({ ...p, [i]: true }))}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
                  opacity: loaded[i] ? 1 : 0,
                }}
              />
              <div
                className="gal-overlay"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(61,18,96,0.75) 0%, transparent 55%)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "20px 18px",
                  opacity: 0,
                  transition: "opacity 0.25s",
                }}
              >
                <span style={{ fontSize: 14, fontWeight: 600, color: "#fff", lineHeight: 1.3 }}>{item.title}</span>
                <span style={{ fontSize: 11, color: "rgba(255,255,255,0.65)", marginTop: 4, display: "flex", alignItems: "center", gap: 4 }}>
                  <Icon name="ZoomIn" size={12} /> Открыть
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Лайтбокс */}
      {lightbox !== null && (
        <div
          style={{
            position: "fixed", inset: 0, zIndex: 2000,
            background: "rgba(15,10,25,0.95)",
            backdropFilter: "blur(20px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            animation: "fadeIn 0.2s ease",
          }}
          onClick={closeLightbox}
        >
          {/* Закрыть */}
          <button
            onClick={closeLightbox}
            style={{
              position: "absolute", top: 20, right: 20,
              width: 44, height: 44, borderRadius: "50%",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#fff", fontSize: 22, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "background 0.2s",
            }}
          >×</button>

          {/* Счётчик */}
          <div style={{ position: "absolute", top: 26, left: "50%", transform: "translateX(-50%)", fontSize: 13, color: "rgba(255,255,255,0.5)", fontFamily: "'Inter', sans-serif" }}>
            {lightbox + 1} / {filtered.length}
          </div>

          {/* Кнопка назад */}
          <button
            onClick={e => { e.stopPropagation(); prev(); }}
            style={{
              position: "absolute", left: 20, top: "50%", transform: "translateY(-50%)",
              width: 48, height: 48, borderRadius: "50%",
              background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
              color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
              transition: "background 0.2s",
            }}
          >
            <Icon name="ChevronLeft" size={22} />
          </button>

          {/* Изображение */}
          <div
            onClick={e => e.stopPropagation()}
            style={{ maxWidth: "85vw", maxHeight: "85vh", position: "relative" }}
          >
            <img
              key={lightbox}
              src={filtered[lightbox].img}
              alt={filtered[lightbox].title}
              style={{
                maxWidth: "85vw",
                maxHeight: "80vh",
                borderRadius: 16,
                objectFit: "contain",
                display: "block",
                animation: "fadeIn 0.2s ease",
                boxShadow: "0 40px 100px rgba(0,0,0,0.6)",
              }}
            />
            <div style={{
              textAlign: "center", marginTop: 16,
              fontSize: 15, color: "rgba(255,255,255,0.8)",
              fontFamily: "'Inter', sans-serif",
            }}>
              {filtered[lightbox].title}
            </div>
          </div>

          {/* Кнопка вперёд */}
          <button
            onClick={e => { e.stopPropagation(); next(); }}
            style={{
              position: "absolute", right: 20, top: "50%", transform: "translateY(-50%)",
              width: 48, height: 48, borderRadius: "50%",
              background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
              color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
              transition: "background 0.2s",
            }}
          >
            <Icon name="ChevronRight" size={22} />
          </button>

          {/* Превью внизу */}
          <div style={{
            position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)",
            display: "flex", gap: 8, maxWidth: "90vw", overflowX: "auto", padding: "4px 8px",
          }}>
            {filtered.map((item, i) => (
              <div
                key={i}
                onClick={e => { e.stopPropagation(); setLightbox(i); }}
                style={{
                  width: 56, height: 40, flexShrink: 0, borderRadius: 8,
                  overflow: "hidden", cursor: "pointer",
                  border: i === lightbox ? "2px solid var(--pp-teal)" : "2px solid transparent",
                  transition: "border-color 0.2s",
                  opacity: i === lightbox ? 1 : 0.5,
                }}
              >
                <img src={item.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
