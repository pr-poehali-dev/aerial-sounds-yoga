import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const S = { fontFamily: "var(--font-serif)" };

const PHOTOS = [
  "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/bucket/cc500b87-ed2c-4e0d-b55c-e27ebd74969d.jpg",
  "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/bucket/b6bfaeb1-ba92-4ba1-9f86-8a46d733fe45.jpg",
  "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/bucket/59c0d533-8d59-4b40-b01e-934852adc266.jpg",
  "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/bucket/4b394e6e-e62d-4c47-a522-5c593ad423e8.jpg",
  "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/bucket/a383abff-051b-4de1-88ac-318781dfbcd9.jpg",
  "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/bucket/3d4e51b1-179b-4fe6-a238-d2d109eaa969.jpg",
];

const FEATURES = [
  { icon: "Flame", label: "Авторские программы" },
  { icon: "Leaf", label: "Пар мастера" },
  { icon: "Snowflake", label: "Термальная зона" },
];

export default function SpaSection() {
  const [slide, setSlide] = useState(0);
  const [fading, setFading] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (i: number) => {
    if (i === slide) return;
    setFading(true);
    setTimeout(() => { setSlide(i); setFading(false); }, 400);
  };

  useEffect(() => {
    timer.current = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setSlide(s => (s + 1) % PHOTOS.length);
        setFading(false);
      }, 400);
    }, 4000);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, []);

  return (
    <section id="spa" style={{ position: "relative", overflow: "hidden" }}>
      <div style={{ position: "relative", minHeight: 600, display: "flex", alignItems: "center" }}>

        <img
          src={PHOTOS[slide]}
          alt="Спа"
          style={{
            position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "cover", objectPosition: "center",
            transition: "opacity 0.6s ease", opacity: fading ? 0 : 1,
          }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(12,8,4,0.88) 0%, rgba(12,8,4,0.55) 55%, rgba(12,8,4,0.15) 100%)" }} />

        {/* Точки */}
        <div style={{ position: "absolute", bottom: 24, left: "6vw", display: "flex", gap: 8, zIndex: 2 }}>
          {PHOTOS.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} style={{
              width: i === slide ? 28 : 8, height: 8, borderRadius: 4,
              border: "none", cursor: "pointer", padding: 0,
              background: i === slide ? "#D2691E" : "rgba(255,255,255,0.35)",
              transition: "all 0.3s ease",
            }} />
          ))}
        </div>

        <div style={{ position: "relative", zIndex: 1, padding: "80px 6vw", maxWidth: 580 }}>
          <div className="pp-label" style={{ marginBottom: 16, color: "rgba(255,220,180,0.7)" }}>Спа услуги</div>
          <h2 style={{ ...S, fontSize: "clamp(32px, 4.5vw, 58px)", fontWeight: 300, lineHeight: 1.1, color: "#fff", marginBottom: 16 }}>
            Пространство <em style={{ color: "#D2691E" }}>пара</em>
          </h2>
          <hr style={{ border: "none", borderTop: "1px solid rgba(255,255,255,0.15)", margin: "16px 0 24px", width: 60 }} />
          <p style={{ fontSize: 16, color: "rgba(255,220,180,0.8)", lineHeight: 1.75, marginBottom: 28, maxWidth: 420 }}>
            Термальная зона для глубокого расслабления тела и ума. Жар, пар и покой — всё под одной крышей.
          </p>

          {/* Плашки */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 32 }}>
            {FEATURES.map(f => (
              <div key={f.label} style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "8px 16px", borderRadius: 100,
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(210,105,30,0.4)",
                fontSize: 13, color: "rgba(255,220,180,0.9)",
              }}>
                <Icon name={f.icon} size={13} />
                {f.label}
              </div>
            ))}
          </div>

          <a
            href="tel:+79089803545"
            style={{
              display: "inline-flex", alignItems: "center", gap: 12,
              padding: "16px 36px", borderRadius: 14,
              background: "#3b1f0e", color: "#fff",
              fontSize: 16, fontWeight: 700, textDecoration: "none",
              letterSpacing: "0.01em", transition: "opacity 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            <Icon name="Phone" size={16} />
            Записаться — +7 (908) 980-35-45
          </a>
        </div>
      </div>
    </section>
  );
}