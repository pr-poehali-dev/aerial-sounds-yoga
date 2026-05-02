import { useState } from "react";
import { fontSerif as S } from "./shared";
import AccordionNav from "./AccordionNav";

interface Props {
  onShowForm: () => void;
}

export default function NavBar({ onShowForm }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="pp-nav">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
          <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <img src="https://cdn.poehali.dev/files/afae13c0-0bc1-415f-a03b-03cd7f0778d7.png" alt="Логотип" style={{ width: 64, height: 64, objectFit: "contain" }} />
            <div style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--pp-muted)" }}>Аэройога · Йога · Фитнес</div>
          </a>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <a href="tel:+79147012883" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none", color: "var(--pp-text)", fontSize: 14, fontWeight: 600, whiteSpace: "nowrap" }}>
              <span className="pp-blink" style={{ fontSize: 16 }}>📞</span>
              +7 (914) 701-28-83
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              style={{ display: "flex", flexDirection: "column", gap: 5, padding: "8px", background: "none", border: "1px solid var(--pp-border)", borderRadius: 10, cursor: "pointer" }}
              aria-label="Меню"
            >
              <span style={{ display: "block", width: 22, height: 2, background: "var(--pp-text)", borderRadius: 2 }} />
              <span style={{ display: "block", width: 22, height: 2, background: "var(--pp-text)", borderRadius: 2 }} />
              <span style={{ display: "block", width: 14, height: 2, background: "var(--pp-text)", borderRadius: 2 }} />
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && <AccordionNav onClose={() => setMenuOpen(false)} />}
    </>
  );
}
