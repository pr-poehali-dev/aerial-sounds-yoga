const S = { fontFamily: "var(--font-serif)" };

interface Props {
  onShowForm: () => void;
}

const directions = [
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/6f579330-810b-4a91-81ff-18ea9196e864.jpg",
    name: "Аэройога",
    sub: "Для начинающих и продолжающих",
    price: "1 200 ₽",
    per: "разовое · 60 мин",
    price2: "5 800 ₽",
    per2: "абонемент 8 занятий",
    pos: "center center",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/c60dd3d7-32fb-441b-be98-bcd055040864.jpg",
    name: "Аэрокидс",
    sub: "Аэройога для детей · 50 мин",
    price: "1 200 ₽",
    per: "разовое",
    price2: "5 800 ₽",
    per2: "абонемент 8 занятий",
    pos: "center center",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/a6e65447-3aa5-49f8-95a1-0d9a4e8c69e1.jpg",
    name: "Растяжка + Пилатес в гамаках",
    sub: "Гибкость и пластика тела",
    price: "1 200 ₽",
    per: "разовое · 60 мин",
    price2: "5 800 ₽",
    per2: "абонемент 8 занятий",
    pos: "center center",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/6afe8304-7e00-46e3-ac84-9fc7b1fdfbb0.jpg",
    name: "Фитнес в гамаках",
    sub: "Силовые тренировки в подвесной системе",
    price: "1 200 ₽",
    per: "разовое · 60 мин",
    price2: "5 800 ₽",
    per2: "абонемент 8 занятий",
    pos: "center center",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/f026c5ed-30c4-4cf6-8e04-50d7aefc0fd7.jpg",
    name: "Фитнес на коврике",
    sub: "Функциональные тренировки",
    price: "1 200 ₽",
    per: "разовое · 55 мин",
    price2: "5 800 ₽",
    per2: "абонемент 8 занятий",
    pos: "center center",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/12ca0a5c-4f94-46b7-b4ca-f5906fa18341.jpg",
    name: "МФР + Аэройога",
    sub: "Миофасциальный релиз и воздушная йога",
    price: "1 200 ₽",
    per: "разовое · 60 мин",
    price2: "5 800 ₽",
    per2: "абонемент 8 занятий",
    pos: "center center",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/23e5d97d-66bb-4df6-bb0b-a8c0f1453121.jpg",
    name: "Красивая осанка",
    sub: "Коррекция и выравнивание позвоночника",
    price: "1 200 ₽",
    per: "разовое · 55 мин",
    price2: "5 800 ₽",
    per2: "абонемент 8 занятий",
    pos: "center center",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/763a092e-b635-4a55-a86e-d3309e04482f.jpg",
    name: "Растяжка",
    sub: "Стретчинг для всех уровней",
    price: "1 200 ₽",
    per: "разовое · 55 мин",
    price2: "5 800 ₽",
    per2: "абонемент 8 занятий",
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
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/2dae0cf6-a5bf-472d-bd41-908fbec5eaa0.jpg",
    name: "Хатха йога",
    sub: "Классическая практика",
    price: "1 500 ₽",
    per: "разовое · 90 мин",
    price2: "5 100 ₽",
    per2: "абонемент 4 занятия",
    price3: "8 120 ₽",
    per3: "абонемент 8 занятий",
    pos: "center center",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/62b2c36b-8286-4a58-a6c9-9a8cb9075106.jpg",
    name: "Йога Айенгара",
    sub: "Точность и выравнивание тела",
    price: "1 500 ₽",
    per: "разовое · 90 мин",
    price2: "5 100 ₽",
    per2: "абонемент 4 занятия",
    price3: "8 120 ₽",
    per3: "абонемент 8 занятий",
    pos: "center center",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/bucket/70246e78-d5a5-4b2a-9070-6d144045008f.png",
    name: "Йога для беременных",
    sub: "Бережная поддержка на каждом этапе",
    price: "1 500 ₽",
    per: "разовое · 90 мин",
    price2: "5 100 ₽",
    per2: "абонемент 4 занятия",
    price3: "8 120 ₽",
    per3: "абонемент 8 занятий",
    pos: "center 65%",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/f3329fa7-2fdf-41cd-ab18-ca7e1113e761.jpg",
    name: "Здоровая спина",
    sub: "Терапевтическая программа",
    price: "1 500 ₽",
    per: "разовое · 90 мин",
    price2: "5 100 ₽",
    per2: "абонемент 4 занятия",
    price3: "8 120 ₽",
    per3: "абонемент 8 занятий",
    pos: "center center",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/acd731c1-d8fb-41bb-a0a2-814ab15d23ea.jpg",
    name: "Фитнес Микс",
    sub: "Силовые + кардио · для всех",
    price: "1 200 ₽",
    per: "разовое · 55 мин",
    price2: "5 800 ₽",
    per2: "абонемент 8 занятий",
    pos: "center 40%",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/03d59f88-63c3-4dfd-a967-9c1054f6e546.jpg",
    name: "Йогатерапия",
    sub: "Восстановление после травм",
    price: "1 500 ₽",
    per: "разовое · 90 мин",
    price2: "5 100 ₽",
    per2: "абонемент 4 занятия",
    price3: "8 120 ₽",
    per3: "абонемент 8 занятий",
    pos: "center center",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/76b3a705-7718-4c27-bd8d-6c2f7df7987e.jpg",
    name: "Функциональная йога",
    sub: "Движение и осознанность тела",
    price: "1 500 ₽",
    per: "разовое · 90 мин",
    price2: "5 100 ₽",
    per2: "абонемент 4 занятия",
    price3: "8 120 ₽",
    per3: "абонемент 8 занятий",
    pos: "center center",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/ebf7e2f8-7bf6-43e9-bb4f-e346a440f0cb.jpg",
    name: "Двигательная терапия",
    sub: "Мягкое восстановление через движение",
    price: "1 500 ₽",
    per: "разовое · 90 мин",
    price2: "5 100 ₽",
    per2: "абонемент 4 занятия",
    price3: "8 120 ₽",
    per3: "абонемент 8 занятий",
    pos: "center center",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/b56ce2c7-6a49-4c48-89eb-87fb7d0a5f55.jpg",
    name: "Спина без боли",
    sub: "Терапия и профилактика болей в спине",
    price: "1 500 ₽",
    per: "разовое · 90 мин",
    price2: "5 100 ₽",
    per2: "абонемент 4 занятия",
    price3: "8 120 ₽",
    per3: "абонемент 8 занятий",
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
                  {d.price3 && (
                    <div>
                      <span style={{ ...S, fontSize: 18, fontWeight: 400, color: "var(--pp-teal)" }}>{d.price3}</span>
                      <span style={{ fontSize: 12, color: "var(--pp-muted)", marginLeft: 6 }}>/ {d.per3}</span>
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