import { useState, useRef } from "react";

interface Props {
  onShowForm: () => void;
}

const allPhotos = [
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/77b141e6-7eec-4f02-b57d-47a17c04a291.jpg",
    name: "Аэройога",
    pos: "center center",
  },
  {
    img: "https://cdn.poehali.dev/files/ecf6ffd8-13c0-4022-a611-275cce776681.png",
    name: "Аэрокидс",
    pos: "center center",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/aeaccb1b-09ba-4086-9a1b-4534c8f33572.jpg",
    name: "Растяжка + Пилатес в гамаках",
    pos: "center center",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/4ea1ec4c-3f2c-45d3-a415-de9c5ec75e4a.jpg",
    name: "Фитнес в гамаках",
    pos: "center center",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/714cab2e-d0b0-40c5-9b7b-5dfefb37020c.jpg",
    name: "МФР + Аэройога",
    pos: "center center",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/3d5649dd-41c6-480e-9f0c-98d3f6dd3035.jpg",
    name: "Двигательная терапия",
    pos: "center center",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/6b0c7237-4e59-4a3a-b0b6-727095218a1d.jpg",
    name: "Спина без боли",
    pos: "center center",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/03d59f88-63c3-4dfd-a967-9c1054f6e546.jpg",
    name: "Йогатерапия",
    pos: "center center",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/76b3a705-7718-4c27-bd8d-6c2f7df7987e.jpg",
    name: "Функциональная йога",
    pos: "center center",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/36ffee5d-74d6-4441-b7ce-77ced0cba167.jpg",
    name: "Здоровая спина",
    pos: "center center",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/9f052fc9-253d-4b61-8a2a-ef5cea940beb.jpg",
    name: "Йога Айенгара",
    pos: "center center",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/76eff1a3-2252-43e1-974c-ef008a2af7ec.jpg",
    name: "Хатха йога",
    pos: "center center",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/6e5d8c66-245a-445b-917e-e9083416ebb0.jpg",
    name: "Красивая осанка",
    pos: "center center",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/4767ed85-7b4a-478b-ae62-af08c4ef5b44.jpg",
    name: "Фитнес на коврике",
    pos: "center center",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/4aabafc2-467a-47e7-b5b5-255f60ac1a30.jpg",
    name: "Растяжка",
    pos: "center center",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/3e231d9b-ba97-4d02-be53-7a30d34ee9f1.jpg",
    name: "Гонг-медитации",
    pos: "center center",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/bucket/70246e78-d5a5-4b2a-9070-6d144045008f.png",
    name: "Йога для беременных",
    pos: "center 65%",
  },
  {
    img: "https://cdn.poehali.dev/files/e332e9bb-a6e5-4967-9dec-7382c12ad3fd.png",
    name: "Фитнес Микс",
    pos: "center 40%",
  },
];

export default function DirectionsPoster({ onShowForm: _onShowForm }: Props) {
  const total = allPhotos.length;
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const startX = useRef<number | null>(null);

  const maxIndex = total - 2;

  const prev = () => setIndex(i => Math.max(0, i - 1));
  const next = () => setIndex(i => Math.min(maxIndex, i + 1));

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current === null) return;
    const dx = startX.current - e.changedTouches[0].clientX;
    if (dx > 40) next();
    else if (dx < -40) prev();
    startX.current = null;
  };

  return (
    <section style={{ padding: "100px 24px", background: "linear-gradient(160deg, #ebe8f2 0%, #f2f0f5 100%)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Заголовок */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{
            display: "inline-block",
            border: "2px solid var(--pp-gold)",
            borderRadius: 14,
            padding: "14px 32px",
            marginBottom: 32,
            background: "rgba(255,255,255,0.6)",
            backdropFilter: "blur(4px)",
          }}>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(15px,1.8vw,20px)", fontWeight: 600, color: "var(--pp-teal-dark)", letterSpacing: "0.02em" }}>
              Аэройога №1 в Приморском крае — это наша визитная карточка с 2019 г.
            </div>
          </div>

          <blockquote style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(18px,2.2vw,26px)", fontStyle: "italic", fontWeight: 300, color: "var(--pp-text)", lineHeight: 1.7, maxWidth: 740, margin: "0 auto 12px", padding: 0, border: "none" }}>
            С 2018 года мы стали надёжным местом для качественной практики в уютной атмосфере. Наша студия площадью 200 кв.м включает два зала с удобными раздевалками и душевыми. Полы с подогревом и панорамные окна создают комфортные условия для занятий.
          </blockquote>
          <p style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(16px,1.8vw,22px)", fontStyle: "italic", fontWeight: 300, color: "var(--pp-muted)", lineHeight: 1.7, maxWidth: 740, margin: "0 auto 20px" }}>
            Мы первыми привезли аэройогу в Приморский край, когда о гамаках никто не слышал. Сегодня у нас занимаются сотни людей, которые пришли из любопытства — и остались навсегда.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap", margin: "20px auto 24px", maxWidth: 600 }}>
            {["Снять боль в спине", "Избавиться от тревоги", "Восстановить гибкость"].map(item => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 18px", borderRadius: 100, background: "rgba(179,157,219,0.12)", border: "1px solid var(--pp-gold)" }}>
                <span style={{ color: "var(--pp-teal-dark)", fontSize: 13 }}>—</span>
                <span style={{ fontSize: 14, color: "var(--pp-text)", fontWeight: 500 }}>{item}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 15, color: "var(--pp-teal-dark)", fontWeight: 600, fontFamily: "var(--font-serif)", fontStyle: "italic", marginBottom: 28 }}>
            Присоединяйтесь к нам и откройте новые горизонты здоровья и гармонии!
          </p>
          <div style={{ width: 80, height: 2, background: "var(--pp-gold)", margin: "0 auto", borderRadius: 2 }} />
        </div>

        {/* Карусель */}
        <div style={{ position: "relative" }}>
          {/* Кнопка влево */}
          <button
            onClick={prev}
            disabled={index === 0}
            style={{
              position: "absolute", left: -20, top: "50%", transform: "translateY(-50%)",
              zIndex: 10, width: 44, height: 44, borderRadius: "50%", border: "none",
              background: index === 0 ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.9)",
              boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
              cursor: index === 0 ? "default" : "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 20, color: index === 0 ? "#ccc" : "var(--pp-teal-dark)",
              transition: "all 0.2s",
            }}
          >‹</button>

          {/* Полоса фото */}
          <div style={{ overflow: "hidden", borderRadius: 16 }}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              ref={trackRef}
              style={{
                display: "flex",
                gap: 16,
                transition: "transform 0.4s cubic-bezier(.4,0,.2,1)",
                transform: `translateX(calc(-${index} * (50% + 8px)))`,
              }}
            >
              {allPhotos.map((photo, i) => (
                <div
                  key={i}
                  style={{
                    flex: "0 0 calc(50% - 8px)",
                    position: "relative",
                    borderRadius: 16,
                    overflow: "hidden",
                    aspectRatio: "4/3",
                  }}
                >
                  <img
                    src={photo.img}
                    alt={photo.name}
                    style={{
                      width: "100%", height: "100%",
                      objectFit: "cover",
                      objectPosition: photo.pos,
                      display: "block",
                    }}
                  />
                  {/* Градиент снизу + название */}
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 50%)",
                    display: "flex", alignItems: "flex-end",
                    padding: "20px 22px",
                  }}>
                    <span style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(15px, 1.6vw, 20px)",
                      fontWeight: 600,
                      color: "#fff",
                      textShadow: "0 1px 6px rgba(0,0,0,0.4)",
                      lineHeight: 1.3,
                    }}>
                      {photo.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Кнопка вправо */}
          <button
            onClick={next}
            disabled={index >= maxIndex}
            style={{
              position: "absolute", right: -20, top: "50%", transform: "translateY(-50%)",
              zIndex: 10, width: 44, height: 44, borderRadius: "50%", border: "none",
              background: index >= maxIndex ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.9)",
              boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
              cursor: index >= maxIndex ? "default" : "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 20, color: index >= maxIndex ? "#ccc" : "var(--pp-teal-dark)",
              transition: "all 0.2s",
            }}
          >›</button>
        </div>

        {/* Точки */}
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 24 }}>
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              style={{
                width: i === index ? 22 : 8,
                height: 8,
                borderRadius: 4,
                border: "none",
                background: i === index ? "var(--pp-teal-dark)" : "rgba(124,92,191,0.25)",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.3s",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
