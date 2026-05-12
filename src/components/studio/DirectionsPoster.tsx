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

        {/* Блок приложения */}
        <div style={{
          marginTop: 56,
          background: "#1a1520",
          borderRadius: 24,
          padding: "48px 40px",
          display: "flex",
          alignItems: "center",
          gap: 48,
          flexWrap: "wrap",
        }}>
          {/* Текст */}
          <div style={{ flex: "1 1 280px" }}>
            <div style={{
              display: "inline-block",
              background: "rgba(156,111,214,0.18)",
              border: "1px solid rgba(156,111,214,0.4)",
              borderRadius: 100,
              padding: "5px 16px",
              fontSize: 11,
              color: "#9c6fd6",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: 18,
            }}>
              Мобильное приложение
            </div>
            <h3 style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(20px, 2.4vw, 30px)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.25,
              marginBottom: 14,
            }}>
              Записывайся на тренировки<br />
              <span style={{ color: "#9c6fd6" }}>через приложение</span>
            </h3>
            <p style={{
              fontSize: 14,
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.7,
              marginBottom: 28,
              maxWidth: 360,
            }}>
              Скачай в App Store или RuStore — расписание, свободные места и запись буквально в два клика.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a
                href="https://apps.apple.com/ru/app/mobifitness/id986278836"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", gap: 10,
                  background: "#9c6fd6", color: "#fff",
                  borderRadius: 14, padding: "12px 20px",
                  textDecoration: "none", transition: "opacity 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div>
                  <div style={{ fontSize: 10, opacity: 0.8 }}>Скачать в</div>
                  <div style={{ fontSize: 14, fontWeight: 700 }}>App Store</div>
                </div>
              </a>
              <a
                href="https://www.rustore.ru/catalog/app/com.itrack.fitnslim122797"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", gap: 10,
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#fff", borderRadius: 14, padding: "12px 20px",
                  textDecoration: "none", transition: "background 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.13)")}
                onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.07)")}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <rect width="24" height="24" rx="6" fill="#9c6fd6"/>
                  <text x="12" y="16.5" textAnchor="middle" fontSize="11" fontWeight="800" fill="white" fontFamily="Arial">RU</text>
                </svg>
                <div>
                  <div style={{ fontSize: 10, opacity: 0.6 }}>Скачать в</div>
                  <div style={{ fontSize: 14, fontWeight: 700 }}>RuStore</div>
                </div>
              </a>
            </div>
          </div>

          {/* Phone mockup */}
          <div style={{ flex: "0 0 auto", display: "flex", justifyContent: "center", position: "relative" }}>
            <div style={{
              position: "absolute", width: 220, height: 220, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(156,111,214,0.25) 0%, transparent 70%)",
              top: "50%", left: "50%", transform: "translate(-50%, -50%)",
              pointerEvents: "none",
            }} />
            <div style={{
              width: 200,
              background: "#0d0d0d",
              borderRadius: 38,
              padding: 6,
              boxShadow: "0 0 0 1px #333, 0 0 0 2px #1a1a1a, 0 24px 60px rgba(0,0,0,0.6), 0 0 40px rgba(156,111,214,0.18)",
              position: "relative",
            }}>
              <div style={{
                position: "absolute", top: 14, left: "50%", transform: "translateX(-50%)",
                width: 70, height: 18, background: "#0d0d0d", borderRadius: 14, zIndex: 10,
              }} />
              <div style={{ borderRadius: 34, overflow: "hidden" }}>
                <img
                  src="https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/bucket/d350ff49-c532-4799-98f0-35ed2d5ebda9.jpg"
                  alt="Расписание в приложении"
                  style={{ width: "100%", display: "block", borderRadius: 34 }}
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}