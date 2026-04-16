const S = { fontFamily: "var(--font-serif)" };

const directions = [
  { label: "ГАМАК",        name: "АЭРОЙОГА",             sub: "Для начинающих и продолжающих" },
  { label: "ГОНГ",         name: "ГОНГ-МЕДИТАЦИИ",        sub: "Тибетские чаши, гонг, монохорд" },
  { label: "ЛОТОС",        name: "ХАТХА ЙОГА",            sub: "Классическая практика · до 15 чел. (большой зал) / до 10 чел. (малый зал)" },
  { label: "БЛОК + РЕМЕНЬ",name: "ЙОГА АЙЕНГАРА",         sub: "Точность и выравнивание тела · до 15 чел. (большой зал) / до 10 чел. (малый зал)" },
  { label: "ЦВЕТОК",       name: "ЙОГА ДЛЯ БЕРЕМЕННЫХ",  sub: "Бережная поддержка на каждом этапе · до 10 чел." },
  { label: "ПОЗВОНОЧНИК",  name: "ЗДОРОВАЯ СПИНА",        sub: "Терапевтическая программа · до 15 чел. (большой зал) / до 10 чел. (малый зал)" },
  { label: "КОВРИК",       name: "ФИТНЕС ТРЕНИРОВКИ",     sub: "Функциональный фитнес · до 15 чел. (большой зал) / до 10 чел. (малый зал)" },
  { label: "КОВРИК",       name: "ЙОГАТЕРАПИЯ",           sub: "Терапевтическая практика · до 15 чел. (большой зал) / до 10 чел. (малый зал)" },
];

export default function DirectionsPoster() {
  return (
    <section style={{ padding: "100px 24px", background: "var(--pp-cream-2)" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>

        {/* Верхняя полоса */}
        <div style={{ height: 5, background: `linear-gradient(90deg, var(--pp-gold), var(--pp-teal))`, borderRadius: 3, marginBottom: 48 }} />

        {/* Заголовок */}
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div className="pp-label" style={{ marginBottom: 14 }}>Что мы предлагаем</div>
          <h2 style={{ ...S, fontSize: "clamp(32px,4vw,54px)", fontWeight: 300, lineHeight: 1.1, marginBottom: 14 }}>
            Почувствуй <em style={{ color: "var(--pp-teal)" }}>лёгкость тела</em><br />и тишину ума
          </h2>
          <div style={{ width: 80, height: 2, background: "var(--pp-gold)", margin: "0 auto", borderRadius: 2 }} />
        </div>

        {/* Строки направлений */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {directions.map((d, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
                padding: "18px 24px",
                borderRadius: 14,
                background: i % 2 === 0 ? "var(--pp-cream-3)" : "var(--pp-cream)",
                border: "1px solid var(--pp-border)",
                transition: "transform 0.18s, box-shadow 0.18s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateX(6px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(124,92,191,0.10)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Пилюля-лейбл */}
              <div style={{
                flexShrink: 0,
                padding: "6px 16px",
                borderRadius: 100,
                background: "var(--pp-teal)",
                color: "#fff",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.08em",
                minWidth: 130,
                textAlign: "center",
              }}>
                {d.label}
              </div>

              {/* Название */}
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 17, fontWeight: 700, color: "var(--pp-text)", letterSpacing: "0.04em" }}>
                  {d.name}
                </div>
                <div style={{ fontSize: 13, color: "var(--pp-muted)", marginTop: 3 }}>
                  {d.sub}
                </div>
              </div>

              {/* Стрелка */}
              <div style={{ color: "var(--pp-gold)", fontSize: 22, flexShrink: 0 }}>▸</div>
            </div>
          ))}
        </div>

        {/* Нижняя полоса */}
        <div style={{ height: 5, background: `linear-gradient(90deg, var(--pp-teal), var(--pp-gold))`, borderRadius: 3, marginTop: 48 }} />
      </div>
    </section>
  );
}