const S = { fontFamily: "var(--font-serif)" };

const directions = [
  { img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/bucket/86541cdf-3434-4d4e-96a0-fc38c959e03a.jpg", name: "АЭРОЙОГА",             sub: "Для начинающих и продолжающих" },
  { img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/115d7733-a92c-4161-a02f-cdeb9acfa68e.jpg", name: "ГОНГ-МЕДИТАЦИИ",        sub: "Тибетские чаши, гонг, монохорд" },
  { img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/a47e99de-d7cf-44f5-9e68-b09207da3d80.jpg", name: "ХАТХА ЙОГА",            sub: "Классическая практика · до 15 чел. (большой зал) / до 10 чел. (малый зал)" },
  { img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/2d040737-9bf6-4224-8ce0-0914acd4ea5b.jpg", name: "ЙОГА АЙЕНГАРА",         sub: "Точность и выравнивание тела · до 15 чел. (большой зал) / до 10 чел. (малый зал)" },
  { img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/bucket/70246e78-d5a5-4b2a-9070-6d144045008f.png", name: "ЙОГА ДЛЯ БЕРЕМЕННЫХ",  sub: "Бережная поддержка на каждом этапе · до 10 чел." },
  { img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/6134b8b0-9a43-4064-af59-a11dd5689212.jpg", name: "ЗДОРОВАЯ СПИНА",        sub: "Терапевтическая программа · до 15 чел. (большой зал) / до 10 чел. (малый зал)" },
  { img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/bdd63353-93d4-48b2-bb7e-49b5e68a7757.jpg", name: "ФИТНЕС МИКС",           sub: "Силовые + кардио · подходит женщинам и мужчинам · до 15 чел. (большой зал) / до 10 чел. (малый зал)" },
  { img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/25d0d360-9113-4b2e-91e2-b25e8fd6e309.jpg", name: "ЙОГАТЕРАПИЯ",           sub: "Терапевтическая практика · до 15 чел. (большой зал) / до 10 чел. (малый зал)" },
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