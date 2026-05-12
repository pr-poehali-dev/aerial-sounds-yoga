import { useState, useEffect, useRef } from "react";

const S = { fontFamily: "var(--font-serif)" };

interface Props {
  onShowForm: () => void;
}

const aeroyogaGroup = [
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/77b141e6-7eec-4f02-b57d-47a17c04a291.jpg",
    name: "Аэройога",
    sub: "Для начинающих и продолжающих",
    price: "1 200 ₽",
    per: "разовое · 60 мин",
    price2: "5 800 ₽",
    per2: "абонемент 8 занятий",
    pos: "center center",
  },
  {
    img: "https://cdn.poehali.dev/files/ecf6ffd8-13c0-4022-a611-275cce776681.png",
    name: "Аэрокидс",
    sub: "Аэройога для детей · 50 мин",
    price: "1 200 ₽",
    per: "разовое",
    price2: "5 800 ₽",
    per2: "абонемент 8 занятий",
    pos: "center center",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/aeaccb1b-09ba-4086-9a1b-4534c8f33572.jpg",
    name: "Растяжка + Пилатес в гамаках",
    sub: "Гибкость и пластика тела",
    price: "1 200 ₽",
    per: "разовое · 60 мин",
    price2: "5 800 ₽",
    per2: "абонемент 8 занятий",
    pos: "center center",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/4ea1ec4c-3f2c-45d3-a415-de9c5ec75e4a.jpg",
    name: "Фитнес в гамаках",
    sub: "Силовые тренировки в подвесной системе",
    price: "1 200 ₽",
    per: "разовое · 60 мин",
    price2: "5 800 ₽",
    per2: "абонемент 8 занятий",
    pos: "center center",
  },
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/714cab2e-d0b0-40c5-9b7b-5dfefb37020c.jpg",
    name: "МФР + Аэройога",
    sub: "Миофасциальный релиз и воздушная йога",
    price: "1 200 ₽",
    per: "разовое · 60 мин",
    price2: "5 800 ₽",
    per2: "абонемент 8 занятий",
    pos: "center center",
  },
];

function FlipCarouselCard({ items, onShowForm }: { items: typeof aeroyogaGroup; onShowForm: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState<number | null>(null);
  const [flipping, setFlipping] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scheduledNext = useRef<number | null>(null);

  const goTo = (idx: number) => {
    if (flipping || idx === currentIndex) return;
    if (timerRef.current) clearTimeout(timerRef.current);
    scheduledNext.current = idx;
    setNextIndex(idx);
    setFlipping(true);
    setFlipped(false);
    timerRef.current = setTimeout(() => {
      setFlipped(true);
      timerRef.current = setTimeout(() => {
        setCurrentIndex(idx);
        setNextIndex(null);
        setFlipping(false);
        setFlipped(false);
        scheduledNext.current = null;
      }, 400);
    }, 400);
  };

  const goNext = () => {
    const next = (currentIndex + 1) % items.length;
    goTo(next);
  };

  useEffect(() => {
    const interval = setInterval(goNext, 3500);
    return () => clearInterval(interval);
  }, [currentIndex, flipping]);

  const cur = items[currentIndex];
  const nxt = nextIndex !== null ? items[nextIndex] : null;

  const rotateY = flipping ? (flipped ? "rotateY(0deg)" : "rotateY(-90deg)") : "rotateY(0deg)";
  const opacity = flipping && !flipped ? 0 : 1;

  return (
    <div style={{ borderRadius: 16, overflow: "hidden", background: "var(--pp-cream)", border: "1px solid var(--pp-border)", display: "flex", flexDirection: "column" }}>
      {/* Фото-флип */}
      <div style={{ aspectRatio: "4/3", overflow: "hidden", position: "relative", perspective: "800px", cursor: "pointer" }}>
        {/* Текущее фото (уходит) */}
        <div
          style={{
            position: "absolute", inset: 0,
            transform: flipping ? (flipped ? "rotateY(90deg)" : "rotateY(0deg)") : "rotateY(0deg)",
            transformOrigin: "center center",
            transition: flipping ? "transform 0.4s ease-in-out" : "none",
            backfaceVisibility: "hidden",
          }}
        >
          <img
            src={cur.img}
            alt={cur.name}
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: cur.pos, display: "block" }}
          />
        </div>
        {/* Следующее фото (приходит) */}
        {nxt && (
          <div
            style={{
              position: "absolute", inset: 0,
              transform: flipped ? "rotateY(0deg)" : "rotateY(-90deg)",
              transformOrigin: "center center",
              transition: "transform 0.4s ease-in-out",
              backfaceVisibility: "hidden",
            }}
          >
            <img
              src={nxt.img}
              alt={nxt.name}
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: nxt.pos, display: "block" }}
            />
          </div>
        )}
        {/* Точки навигации */}
        <div style={{ position: "absolute", bottom: 10, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 6 }}>
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: i === currentIndex ? 18 : 8,
                height: 8,
                borderRadius: 4,
                border: "none",
                background: i === currentIndex ? "#fff" : "rgba(255,255,255,0.5)",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.3s",
              }}
            />
          ))}
        </div>
      </div>

      {/* Контент — плавно меняется */}
      <div
        style={{
          padding: "20px 20px 24px",
          display: "flex", flexDirection: "column", flex: 1,
          opacity, transition: "opacity 0.3s",
        }}
      >
        <div style={{ fontSize: 17, fontWeight: 700, color: "var(--pp-text)", marginBottom: 4 }}>
          {(nxt && flipped) ? nxt.name : cur.name}
        </div>
        <div style={{ fontSize: 13, color: "var(--pp-muted)", marginBottom: 16, lineHeight: 1.5 }}>
          {(nxt && flipped) ? nxt.sub : cur.sub}
        </div>
        <div style={{ marginBottom: 16, marginTop: "auto", display: "flex", flexDirection: "column", gap: 4 }}>
          {(() => {
            const d = (nxt && flipped) ? nxt : cur;
            return <>
              <div>
                <span style={{ ...S, fontSize: 22, fontWeight: 400, color: "var(--pp-teal)" }}>{d.price}</span>
                <span style={{ fontSize: 12, color: "var(--pp-muted)", marginLeft: 6 }}>/ {d.per}</span>
              </div>
              {d.price2 && <div>
                <span style={{ ...S, fontSize: 18, fontWeight: 400, color: "var(--pp-teal)" }}>{d.price2}</span>
                <span style={{ fontSize: 12, color: "var(--pp-muted)", marginLeft: 6 }}>/ {d.per2}</span>
              </div>}
            </>;
          })()}
        </div>
        <button
          onClick={onShowForm}
          style={{
            width: "100%", padding: "12px", borderRadius: 10, border: "none",
            background: "#6a42a8", color: "#fff", fontSize: 14, fontWeight: 600,
            cursor: "pointer", transition: "opacity 0.2s", fontFamily: "'Inter', sans-serif",
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
        >
          Записаться
        </button>
      </div>
    </div>
  );
}

function SpinCard({ onShowForm }: { onShowForm: () => void }) {
  return (
    <div style={{ perspective: "1000px" }}>
      <div style={{ position: "relative" }}>

        {/* Лицевая сторона */}
        <div style={{
          borderRadius: 16, overflow: "hidden", background: "var(--pp-cream)",
          border: "2px solid var(--pp-gold)", display: "flex", flexDirection: "column",
          boxShadow: "0 4px 24px rgba(184,148,72,0.18)",
          backfaceVisibility: "hidden",
        }}>
          <div style={{ aspectRatio: "4/3", overflow: "hidden", position: "relative" }}>
            <img
              src="https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/6e5d8c66-245a-445b-917e-e9083416ebb0.jpg"
              alt="Красивая осанка"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            <div style={{
              position: "absolute", top: 12, right: 12,
              background: "var(--pp-gold)", color: "#fff",
              fontSize: 11, fontWeight: 700, letterSpacing: "0.06em",
              padding: "5px 10px", borderRadius: 20,
              textTransform: "uppercase", boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
            }}>Набор открыт</div>
            <div style={{
              position: "absolute", bottom: 12, left: 12,
              background: "rgba(220,60,60,0.9)", color: "#fff",
              fontSize: 11, fontWeight: 700, letterSpacing: "0.04em",
              padding: "5px 10px", borderRadius: 20,
              boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
            }}>🔥 Осталось 3 места</div>
          </div>
          <div style={{ padding: "20px 20px 24px", display: "flex", flexDirection: "column", flex: 1 }}>
            <div style={{ fontSize: 17, fontWeight: 700, color: "var(--pp-text)", marginBottom: 4 }}>Красивая осанка</div>
            <div style={{ fontSize: 13, color: "var(--pp-muted)", marginBottom: 4, lineHeight: 1.5 }}>Коррекция и выравнивание позвоночника</div>
            <div style={{ fontSize: 12, color: "var(--pp-gold)", fontWeight: 600, marginBottom: 16 }}>✦ Новое направление</div>
            <div style={{ marginBottom: 16, marginTop: "auto", display: "flex", flexDirection: "column", gap: 4 }}>
              <div>
                <span style={{ ...S, fontSize: 22, fontWeight: 400, color: "var(--pp-teal)" }}>1 200 ₽</span>
                <span style={{ fontSize: 12, color: "var(--pp-muted)", marginLeft: 6 }}>/ разовое · 60 мин</span>
              </div>
              <div>
                <span style={{ ...S, fontSize: 18, fontWeight: 400, color: "var(--pp-teal)" }}>5 800 ₽</span>
                <span style={{ fontSize: 12, color: "var(--pp-muted)", marginLeft: 6 }}>/ абонемент 8 занятий</span>
              </div>
            </div>
            <button
              onClick={onShowForm}
              style={{
                width: "100%", padding: "12px", borderRadius: 10, border: "none",
                background: "#6a42a8", color: "#fff", fontSize: 14, fontWeight: 600,
                cursor: "pointer", fontFamily: "'Inter', sans-serif",
              }}
            >Записаться</button>
          </div>
        </div>

        {/* Оборотная сторона */}
        <div style={{
          position: "absolute", inset: 0,
          borderRadius: 16,
          backgroundImage: "url(https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/a10f27f4-437e-45db-b8f1-d79255e9c197.jpg)",
          backgroundSize: "cover", backgroundPosition: "center",
          border: "2px solid var(--pp-gold)",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          backfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
          padding: 32, textAlign: "center",
          boxShadow: "0 4px 24px rgba(184,148,72,0.18)",
          overflow: "hidden",
        }}>
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.38)", borderRadius: 14 }} />
          <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <div style={{ ...S, fontSize: 24, fontWeight: 300, color: "#fff", lineHeight: 1.3, marginBottom: 12 }}>
            Красивая осанка
          </div>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", lineHeight: 1.6, marginBottom: 20 }}>
            Идёт набор в группу<br />· 60 минут · новое направление ·
          </div>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            background: "rgba(220,60,60,0.85)", color: "#fff",
            fontSize: 12, fontWeight: 700,
            padding: "6px 14px", borderRadius: 20, marginBottom: 20,
          }}>
            <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.5 0C6.5 0 10 3.5 10 7C10 8.2 9.6 9.3 8.9 10.1C9 9.6 9 9.1 8.8 8.6C8.3 9.8 7.3 10.7 6.1 11.1C6.4 10.5 6.5 9.8 6.3 9.1C5.7 10 4.8 10.6 3.8 10.8C2.1 9.9 1 8.1 1 6C1 3 4 0.5 6.5 0ZM6.5 6C6.5 7.4 5.4 8.5 4 8.5C4.5 9.3 5.4 9.8 6.5 9.8C7.9 9.8 9 8.7 9 7.3C9 6 8 5 6.8 4.8C6.9 5.2 6.8 5.6 6.5 6Z" fill="white"/>
              <path d="M6.5 11C5 12 4.5 13.5 5 15C4 14.2 3.5 13 3.5 11.8C2.5 12.5 2 13.8 2.2 15C1.2 13.8 1 12 2 10.5C2.5 11.5 3.8 12 5 11.5C5.5 11.2 6 10.5 6.5 9.8C6.5 10.2 6.5 10.6 6.5 11Z" fill="white"/>
            </svg>
            Осталось 3 места
          </div>
          <button
            onClick={onShowForm}
            style={{
              padding: "12px 28px", borderRadius: 10,
              border: "none", background: "#6a42a8",
              color: "#fff", fontSize: 14, fontWeight: 600,
              cursor: "pointer", fontFamily: "'Inter', sans-serif",
            }}
          >Записаться</button>
          </div>
        </div>

      </div>
    </div>
  );
}

const yogaGroup = [
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
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/36ffee5d-74d6-4441-b7ce-77ced0cba167.jpg",
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
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/9f052fc9-253d-4b61-8a2a-ef5cea940beb.jpg",
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
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/76eff1a3-2252-43e1-974c-ef008a2af7ec.jpg",
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
];

const directions = [
  {
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/4767ed85-7b4a-478b-ae62-af08c4ef5b44.jpg",
    name: "Фитнес на коврике",
    sub: "Функциональные тренировки",
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
    img: "https://cdn.poehali.dev/files/e332e9bb-a6e5-4967-9dec-7382c12ad3fd.png",
    name: "Фитнес Микс",
    sub: "Силовые + кардио · для всех",
    price: "1 200 ₽",
    per: "разовое · 55 мин",
    price2: "5 800 ₽",
    per2: "абонемент 8 занятий",
    pos: "center 40%",
  },
];

export default function DirectionsPoster({ onShowForm }: Props) {
  return (
    <section style={{ padding: "100px 24px", background: "linear-gradient(160deg, #ede5ff 0%, #f3eeff 100%)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Заголовок */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>

          {/* Рамка-бейдж */}
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

          <blockquote style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.5vw,30px)", fontStyle: "italic", fontWeight: 300, color: "var(--pp-text)", lineHeight: 1.6, maxWidth: 680, margin: "0 auto 20px", padding: 0, border: "none" }}>
            «Йога — это путешествие внутрь себя. Аэройога — это шаг в это путешествие с лёгкостью и радостью.»
          </blockquote>
          <div style={{ fontSize: 13, color: "var(--pp-muted)", fontWeight: 400, marginBottom: 32 }}>
            — Алёна Самарина, основатель студии и автор школы обучения инструкторов Аэройоги
          </div>
          <div style={{ width: 80, height: 2, background: "var(--pp-gold)", margin: "0 auto", borderRadius: 2 }} />
        </div>

        {/* Сетка карточек */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 24 }}>
          {/* Карточка-карусель для направлений в гамаках */}
          <FlipCarouselCard items={aeroyogaGroup} onShowForm={onShowForm} />
          {/* Карточка-карусель для йоги 90 мин */}
          <FlipCarouselCard items={yogaGroup} onShowForm={onShowForm} />
          {/* Красивая осанка — новое направление с вращением 360° */}
          <SpinCard onShowForm={onShowForm} />
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
                    background: "#6a42a8",
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