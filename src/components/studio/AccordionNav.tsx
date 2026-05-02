import { useState } from "react";

const TRAININGS = [
  "Аэройога",
  "Аэрокидс",
  "Растяжка + Пилатес в гамаках",
  "Фитнес в гамаках",
  "Фитнес на коврике",
  "МФР + Аэройога",
  "Красивая осанка",
  "Растяжка",
  "Гонг-медитации",
  "Хатха йога",
  "Йога Айенгара",
  "Йога для беременных",
  "Здоровая спина",
  "Фитнес Микс",
  "Йогатерапия",
  "Функциональная йога",
  "Двигательная терапия",
  "Спина без боли",
];

const ITEMS = [
  { label: "Тренировки", id: "services", children: TRAININGS },
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
  const [open, setOpen] = useState<number | null>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    onClose();
  };

  const toggle = (i: number, id: string, hasChildren: boolean) => {
    if (hasChildren) {
      setOpen(open === i ? null : i);
    } else {
      scrollTo(id);
    }
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
        {ITEMS.map((item, i) => {
          const hasChildren = !!item.children?.length;
          const isOpen = open === i;
          return (
            <div key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <button
                onClick={() => toggle(i, item.id, hasChildren)}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  width: "100%", padding: "18px 0",
                  background: "none", border: "none",
                  cursor: "pointer", textAlign: "left",
                  color: isOpen ? "var(--pp-gold)" : "rgba(255,255,255,0.85)",
                  fontSize: "clamp(18px, 4vw, 26px)",
                  fontFamily: "var(--font-serif)",
                  fontWeight: 300,
                  letterSpacing: "0.01em",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => { if (!isOpen) e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={e => { if (!isOpen) e.currentTarget.style.color = "rgba(255,255,255,0.85)"; }}
              >
                <span>{item.label}</span>
                <span style={{
                  fontSize: 20, color: "var(--pp-gold)", opacity: 0.7,
                  transition: "transform 0.25s",
                  display: "inline-block",
                  transform: hasChildren ? (isOpen ? "rotate(45deg)" : "rotate(0deg)") : "none",
                }}>
                  {hasChildren ? "+" : "→"}
                </span>
              </button>

              {/* Подсписок тренировок */}
              {hasChildren && isOpen && (
                <div style={{ paddingBottom: 12 }}>
                  {item.children!.map(name => (
                    <button
                      key={name}
                      onClick={() => scrollTo(item.id)}
                      style={{
                        display: "block", width: "100%", textAlign: "left",
                        padding: "9px 0 9px 16px",
                        background: "none", border: "none", borderLeft: "2px solid rgba(210,105,30,0.4)",
                        cursor: "pointer",
                        fontSize: "clamp(13px, 2.5vw, 16px)",
                        color: "rgba(255,220,180,0.75)",
                        fontFamily: "Inter, sans-serif",
                        transition: "color 0.2s",
                        marginBottom: 2,
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,220,180,0.75)")}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
