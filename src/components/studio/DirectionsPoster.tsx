const S = { fontFamily: "var(--font-serif)" };

interface Props {
  onShowForm: () => void;
}

const directions = [
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/e67c5e62-1829-442d-bb4d-61c30cd57e82.jpg",
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
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/45fc9d2c-b9d0-4939-b559-9ce3cce63051.jpg",
    name: "Растяжка + Пилатес в гамаках",
    sub: "Гибкость и пластика тела",
    price: "1 200 ₽",
    per: "разовое · 60 мин",
    price2: "5 800 ₽",
    per2: "абонемент 8 занятий",
    pos: "center center",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/e09cf0eb-e28d-43b7-8c2e-180bc05ef589.jpg",
    name: "Фитнес в гамаках",
    sub: "Силовые тренировки в подвесной системе",
    price: "1 200 ₽",
    per: "разовое · 60 мин",
    price2: "5 800 ₽",
    per2: "абонемент 8 занятий",
    pos: "center center",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/dcbbf48a-2d15-4628-9327-9551f13ca2d6.jpg",
    name: "Фитнес на коврике",
    sub: "Функциональные тренировки",
    price: "1 200 ₽",
    per: "разовое · 55 мин",
    price2: "5 800 ₽",
    per2: "абонемент 8 занятий",
    pos: "center center",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/780c9ddb-905e-4b37-ac43-7b2de626bcbf.jpg",
    name: "МФР + Аэройога",
    sub: "Миофасциальный релиз и воздушная йога",
    price: "1 200 ₽",
    per: "разовое · 60 мин",
    price2: "5 800 ₽",
    per2: "абонемент 8 занятий",
    pos: "center center",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/bf649963-723d-45a5-bf6e-81e4c5ee0e1a.jpg",
    name: "Красивая осанка",
    sub: "Коррекция и выравнивание позвоночника",
    price: "1 200 ₽",
    per: "разовое · 55 мин",
    price2: "5 800 ₽",
    per2: "абонемент 8 занятий",
    pos: "center center",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/e2cbf201-6eb4-4924-8b72-b455f9acfc7a.jpg",
    name: "Растяжка",
    sub: "Стретчинг для всех уровней",
    price: "1 200 ₽",
    per: "разовое · 55 мин",
    price2: "5 800 ₽",
    per2: "абонемент 8 занятий",
    pos: "center center",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/af4e1c2f-0474-47a9-bb58-44618b9e85ad.jpg",
    name: "Гонг-медитации",
    sub: "Тибетские чаши, гонг, монохорд",
    price: "от 1500 ₽",
    per: "сеанс",
    pos: "center center",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/6b787a97-f13a-4582-8dd7-e42b3258e24f.jpg",
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
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/4fb5662d-09a1-455f-aeb2-6226f2858a54.jpg",
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
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/ea1cf037-1cee-4fec-be6a-ee4fd5d0bd05.jpg",
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
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/ccda16be-68fa-4792-83b6-15b5c8cc9dbd.jpg",
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
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/93182f62-6dae-42b0-b94f-483ffb51039b.jpg",
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
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/945d9849-1e39-485a-83c9-0e7f0142e9f1.jpg",
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
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/3d5649dd-41c6-480e-9f0c-98d3f6dd3035.jpg",
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
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/6b0c7237-4e59-4a3a-b0b6-727095218a1d.jpg",
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