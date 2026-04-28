const S = { fontFamily: "var(--font-serif)" };

interface Props {
  onShowForm: () => void;
}

const directions = [
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/77b141e6-7eec-4f02-b57d-47a17c04a291.jpg",
    name: "Аэройога",
    sub: "Для начинающих и продолжающих",
    price: "5 800 ₽",
    per: "абонемент 8 занятий · 60 мин",
    pos: "center center",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/e58e708e-c112-48a3-b768-bb0f001b57f1.jpg",
    name: "Аэрокидс",
    sub: "Аэройога для детей · 50 мин",
    price: "1 200 ₽",
    per: "разовое",
    price2: "5 800 ₽",
    per2: "абонемент 8 занятий",
    pos: "center center",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/a10f3179-fd2c-4aee-9ab3-056426708de2.jpg",
    name: "Растяжка + Пилатес в гамаках",
    sub: "Гибкость и пластика тела",
    price: "5 800 ₽",
    per: "абонемент 8 занятий · 60 мин",
    pos: "center center",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/4f890d93-3096-4f59-a9d5-f8e8b72cb233.jpg",
    name: "Фитнес в гамаках",
    sub: "Силовые тренировки в подвесной системе",
    price: "5 800 ₽",
    per: "абонемент 8 занятий · 60 мин",
    pos: "center center",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/4767ed85-7b4a-478b-ae62-af08c4ef5b44.jpg",
    name: "Фитнес на коврике",
    sub: "Функциональные тренировки",
    price: "5 800 ₽",
    per: "абонемент 8 занятий · 55 мин",
    pos: "center center",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/714cab2e-d0b0-40c5-9b7b-5dfefb37020c.jpg",
    name: "МФР + Аэройога",
    sub: "Миофасциальный релиз и воздушная йога",
    price: "5 800 ₽",
    per: "абонемент 8 занятий · 60 мин",
    pos: "center center",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/6e5d8c66-245a-445b-917e-e9083416ebb0.jpg",
    name: "Красивая осанка",
    sub: "Коррекция и выравнивание позвоночника",
    price: "1 200 ₽",
    per: "разовое · 55 мин",
    price2: "5 800 ₽",
    per2: "абонемент 8 занятий",
    pos: "center center",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/4aabafc2-467a-47e7-b5b5-255f60ac1a30.jpg",
    name: "Растяжка",
    sub: "Стретчинг для всех уровней",
    price: "5 800 ₽",
    per: "абонемент 8 занятий · 55 мин",
    pos: "center center",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/3e231d9b-ba97-4d02-be53-7a30d34ee9f1.jpg",
    name: "Гонг-медитации",
    sub: "Тибетские чаши, гонг, монохорд",
    price: "от 1500 ₽",
    per: "сеанс",
    pos: "center center",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/76eff1a3-2252-43e1-974c-ef008a2af7ec.jpg",
    name: "Хатха йога",
    sub: "Классическая практика",
    price: "от 800 ₽",
    per: "90 мин",
    pos: "center center",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/9f052fc9-253d-4b61-8a2a-ef5cea940beb.jpg",
    name: "Йога Айенгара",
    sub: "Точность и выравнивание тела",
    price: "от 800 ₽",
    per: "занятие",
    pos: "center center",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/bucket/70246e78-d5a5-4b2a-9070-6d144045008f.png",
    name: "Йога для беременных",
    sub: "Бережная поддержка на каждом этапе",
    price: "1 500 ₽",
    per: "разовое · 90 мин",
    price2: "3 850 ₽",
    per2: "абонемент 4 занятия",
    pos: "center 65%",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/36ffee5d-74d6-4441-b7ce-77ced0cba167.jpg",
    name: "Здоровая спина",
    sub: "Терапевтическая программа",
    price: "1 500 ₽",
    per: "разовое · 90 мин",
    price2: "8 120 ₽",
    per2: "абонемент 8 занятий",
    pos: "center center",
  },
  {
    img: "https://cdn.poehali.dev/files/e332e9bb-a6e5-4967-9dec-7382c12ad3fd.png",
    name: "Фитнес Микс",
    sub: "Силовые + кардио · для всех",
    price: "5 800 ₽",
    per: "абонемент 8 занятий · 55 мин",
    pos: "center 40%",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/18ac39e0-034c-4075-9171-a120d098d277.jpg",
    name: "Йогатерапия",
    sub: "Восстановление после травм",
    price: "от 800 ₽",
    per: "90 мин",
    pos: "center center",
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
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: d.pos ?? "center center", display: "block", transition: "transform 0.3s" }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>

              {/* Контент */}
              <div style={{ padding: "20px 20px 24px", display: "flex", flexDirection: "column", flex: 1 }}>
                <div style={{ fontSize: 17, fontWeight: 700, color: "var(--pp-text)", marginBottom: 4 }}>{d.name}</div>
                <div style={{ fontSize: 13, color: "var(--pp-muted)", marginBottom: 16, lineHeight: 1.5 }}>{d.sub}</div>

                {/* Цена */}
                <div style={{ marginBottom: 16, marginTop: "auto", display: "flex", flexDirection: "column", gap: 4 }}>
                  <div>
                    <span style={{ ...S, fontSize: 22, fontWeight: 400, color: "var(--pp-teal)" }}>{d.price}</span>
                    <span style={{ fontSize: 12, color: "var(--pp-muted)", marginLeft: 6 }}>/ {d.per}</span>
                  </div>
                  {d.price2 && (
                    <div>
                      <span style={{ ...S, fontSize: 18, fontWeight: 400, color: "var(--pp-teal)" }}>{d.price2}</span>
                      <span style={{ fontSize: 12, color: "var(--pp-muted)", marginLeft: 6 }}>/ {d.per2}</span>
                    </div>
                  )}
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