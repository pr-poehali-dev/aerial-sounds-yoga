const S = { fontFamily: "var(--font-serif)" };

interface Props {
  onShowForm: () => void;
}

const directions = [
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/bucket/86541cdf-3434-4d4e-96a0-fc38c959e03a.jpg",
    name: "Аэройога",
    sub: "Для начинающих и продолжающих",
    price: "от 500 ₽",
    per: "занятие",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/115d7733-a92c-4161-a02f-cdeb9acfa68e.jpg",
    name: "Гонг-медитации",
    sub: "Тибетские чаши, гонг, монохорд",
    price: "от 1500 ₽",
    per: "сеанс",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/a47e99de-d7cf-44f5-9e68-b09207da3d80.jpg",
    name: "Хатха йога",
    sub: "Классическая практика",
    price: "от 800 ₽",
    per: "90 мин",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/2d040737-9bf6-4224-8ce0-0914acd4ea5b.jpg",
    name: "Йога Айенгара",
    sub: "Точность и выравнивание тела",
    price: "от 800 ₽",
    per: "занятие",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/bucket/70246e78-d5a5-4b2a-9070-6d144045008f.png",
    name: "Йога для беременных",
    sub: "Бережная поддержка на каждом этапе",
    price: "от 800 ₽",
    per: "занятие",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/6134b8b0-9a43-4064-af59-a11dd5689212.jpg",
    name: "Здоровая спина",
    sub: "Терапевтическая программа",
    price: "от 800 ₽",
    per: "90 мин",
  },
  {
    img: "https://cdn.poehali.dev/files/e332e9bb-a6e5-4967-9dec-7382c12ad3fd.png",
    name: "Фитнес Микс",
    sub: "Силовые + кардио · для всех",
    price: "от 500 ₽",
    per: "занятие",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/25d0d360-9113-4b2e-91e2-b25e8fd6e309.jpg",
    name: "Йогатерапия",
    sub: "Восстановление после травм",
    price: "от 800 ₽",
    per: "90 мин",
  },
];

export default function DirectionsPoster({ onShowForm }: Props) {
  return (
    <section style={{ padding: "100px 24px", background: "var(--pp-cream-2)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Заголовок */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="pp-label" style={{ marginBottom: 14 }}>Что мы предлагаем</div>
          <h2 style={{ ...S, fontSize: "clamp(32px,4vw,54px)", fontWeight: 300, lineHeight: 1.1, marginBottom: 14 }}>
            Почувствуй <em style={{ color: "var(--pp-teal)" }}>лёгкость тела</em><br />и тишину ума
          </h2>
          <div style={{ width: 80, height: 2, background: "var(--pp-gold)", margin: "0 auto", borderRadius: 2 }} />
        </div>

        {/* Сетка карточек */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 24 }}>
          {directions.map((d, i) => (
            <div
              key={i}
              style={{
                borderRadius: 16,
                overflow: "hidden",
                background: "var(--pp-cream)",
                border: "1px solid var(--pp-border)",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(124,92,191,0.13)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Фото */}
              <div style={{ aspectRatio: "4/3", overflow: "hidden" }}>
                <img
                  src={d.img}
                  alt={d.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.3s" }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>

              {/* Контент */}
              <div style={{ padding: "20px 20px 24px", display: "flex", flexDirection: "column", flex: 1 }}>
                <div style={{ fontSize: 17, fontWeight: 700, color: "var(--pp-text)", marginBottom: 4 }}>{d.name}</div>
                <div style={{ fontSize: 13, color: "var(--pp-muted)", marginBottom: 16, lineHeight: 1.5 }}>{d.sub}</div>

                {/* Цена */}
                <div style={{ marginBottom: 16, marginTop: "auto" }}>
                  <span style={{ ...S, fontSize: 22, fontWeight: 400, color: "var(--pp-teal)" }}>{d.price}</span>
                  <span style={{ fontSize: 12, color: "var(--pp-muted)", marginLeft: 6 }}>/ {d.per}</span>
                </div>

                {/* Кнопка */}
                <button
                  onClick={onShowForm}
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: 10,
                    border: "none",
                    background: "var(--pp-teal)",
                    color: "#fff",
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "opacity 0.2s",
                    fontFamily: "'Inter', sans-serif",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                >
                  Записаться
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
