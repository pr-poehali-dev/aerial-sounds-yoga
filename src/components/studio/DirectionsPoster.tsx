const S = { fontFamily: "var(--font-serif)" };

const directions = [
  { img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/a3bbe7c3-7485-4953-a299-1eebeeb9bb57.jpg", name: "АЭРОЙОГА",             sub: "Для начинающих и продолжающих" },
  { img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/51e3df72-7fb7-4a8b-8c41-f363d4d6d985.jpg", name: "ГОНГ-МЕДИТАЦИИ",        sub: "Тибетские чаши, гонг, монохорд" },
  { img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/28a8b889-7bc4-4101-9f6f-52069389bfbb.jpg", name: "ХАТХА ЙОГА",            sub: "Классическая практика · до 15 чел. (большой зал) / до 10 чел. (малый зал)" },
  { img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/12ebbf73-0f57-49b0-9543-23dbd20d4db7.jpg", name: "ЙОГА АЙЕНГАРА",         sub: "Точность и выравнивание тела · до 15 чел. (большой зал) / до 10 чел. (малый зал)" },
  { img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/a23bb4f4-20a0-4dfc-ab5c-382de2889670.jpg", name: "ЙОГА ДЛЯ БЕРЕМЕННЫХ",  sub: "Бережная поддержка на каждом этапе · до 10 чел." },
  { img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/dc4642ee-fbed-41ee-b6e8-fc2931af9b60.jpg", name: "ЗДОРОВАЯ СПИНА",        sub: "Терапевтическая программа · до 15 чел. (большой зал) / до 10 чел. (малый зал)" },
  { img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/bdd63353-93d4-48b2-bb7e-49b5e68a7757.jpg", name: "ФИТНЕС ТРЕНИРОВКИ",     sub: "Функциональный фитнес · до 15 чел. (большой зал) / до 10 чел. (малый зал)" },
  { img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/849dc0ee-9fe5-44f1-999e-aa39e475ec40.jpg", name: "ЙОГАТЕРАПИЯ",           sub: "Терапевтическая практика · до 15 чел. (большой зал) / до 10 чел. (малый зал)" },
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
              {/* Иконка-картинка */}
              <div style={{
                flexShrink: 0,
                width: 56,
                height: 56,
                borderRadius: 12,
                overflow: "hidden",
                background: "var(--pp-cream-3)",
                border: "1px solid var(--pp-border)",
              }}>
                <img src={d.img} alt={d.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
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