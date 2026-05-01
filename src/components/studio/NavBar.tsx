import { fontSerif as S } from "./shared";

interface Props {
  onShowForm: () => void;
}

export default function NavBar({ onShowForm }: Props) {
  return (
    <nav className="pp-nav">
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <img src="https://cdn.poehali.dev/files/afae13c0-0bc1-415f-a03b-03cd7f0778d7.png" alt="Логотип" style={{ width: 64, height: 64, objectFit: "contain" }} />
          <div style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--pp-muted)" }}>Аэройога · Йога · Фитнес</div>
        </a>
        <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {["Услуги", "О нас", "Спец предложения", "Обучение", "Отзывы"].map((t, i) => (
            <a key={t} href={`#${["services","about","specials","training","reviews"][i]}`}
              style={{ fontSize: 14, color: "var(--pp-muted)", textDecoration: "none", transition: "color 0.2s", fontWeight: 500 }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--pp-teal)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--pp-muted)")}
              className="hidden md:block">{t}</a>
          ))}
          <a href="tel:+79147012883" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none", color: "var(--pp-text)", fontSize: 14, fontWeight: 600, whiteSpace: "nowrap" }}>
            <span className="pp-blink" style={{ fontSize: 16 }}>📞</span>
            +7 (914) 701-28-83
          </a>
        </div>
      </div>
    </nav>
  );
}