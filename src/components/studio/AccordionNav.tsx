import { useState } from "react";

const ITEMS = [
  { label: "Тренировки", id: "services" },
  { label: "Индивидуальные", id: "services" },
  { label: "Групповые", id: "services" },
  { label: "Обучение", id: "training" },
  { label: "Галерея", id: "gallery" },
  { label: "Отзывы", id: "reviews" },
  { label: "Спец предложения", id: "specials" },
  { label: "Спа услуги", id: "spa" },
  { label: "Контакты", id: "specials" },
  { label: "О нас", id: "about" },
];

interface Props {
  onClose: () => void;
}

export default function AccordionNav({ onClose }: Props) {
  const [active, setActive] = useState<number | null>(null);

  const scrollTo = (id: string, index: number) => {
    setActive(index === active ? null : index);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    onClose();
  };

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 200, display: "flex", flexDirection: "column",
      background: "rgba(12,10,8,0.96)", backdropFilter: "blur(12px)",
    }}>
      <div style={{ display: "flex", justifyContent: "flex-end", padding: "20px 24px" }}>
        <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.6)", fontSize: 28, lineHeight: 1 }}>×</button>
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: "8px 24px 40px" }}>
        {ITEMS.map((item, i) => (
          <button
            key={i}
            onClick={() => scrollTo(item.id, i)}
            style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              width: "100%", padding: "18px 0",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              background: "none", border: "none", borderBottom: "1px solid rgba(255,255,255,0.08)",
              cursor: "pointer", textAlign: "left",
              color: active === i ? "var(--pp-gold)" : "rgba(255,255,255,0.85)",
              fontSize: "clamp(18px, 4vw, 26px)",
              fontFamily: "var(--font-serif)",
              fontWeight: 300,
              letterSpacing: "0.01em",
              transition: "color 0.2s",
            }}
            onMouseEnter={e => { if (active !== i) e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={e => { if (active !== i) e.currentTarget.style.color = "rgba(255,255,255,0.85)"; }}
          >
            <span>{item.label}</span>
            <span style={{ fontSize: 18, color: "var(--pp-gold)", opacity: 0.7 }}>→</span>
          </button>
        ))}
      </div>
    </div>
  );
}