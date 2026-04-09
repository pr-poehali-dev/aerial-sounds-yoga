import { useState, useEffect, useRef } from "react";

function useCountUp(target: number, duration = 2000, start = 10) {
  const [count, setCount] = useState(start);
  const ref = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const startTime = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(start + (target - start) * ease));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, start]);
  return { count, ref };
}
import Icon from "@/components/ui/icon";

const IMG_AERIAL = "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/1b4d24cf-24bb-434a-9db9-633edc94e35a.jpg";
const IMG_GONG = "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/0c9c4157-3312-44ff-bb40-6e49e113cab2.jpg";
const API_URL = "https://functions.poehali.dev/460e133a-853d-4f85-aefa-16408cdddcab";

const SERVICES = [
  {
    emoji: "🪢",
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/dadad880-36bc-46af-bbbb-f39c2b3ae72e.jpg",
    title: "Аэройога в гамаках",
    desc: "Для начинающих и продолжающих. Гамак берёт нагрузку на себя — тело раскрывается без боли. Группы до 8 человек и индивидуальные занятия.",
    tags: ["Группы до 8 чел.", "Индивидуальные", "Детские классы"],
    price: "от 500 ₽",
    per: "занятие",
    color: "var(--pp-teal)",
  },
  {
    emoji: "🔔",
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/70fc32d6-2106-42f0-8af9-fa47c0451d05.jpg",
    title: "Гонг-медитации",
    desc: "Тибетские чаши, гонг, монохорд. Просто лечь и слушать — никакой подготовки не нужно. Подходит абсолютно всем.",
    tags: ["Групповые", "VIP мини-группы", "Корпоративные"],
    price: "от 1500 ₽",
    per: "сеанс",
    color: "var(--pp-gold)",
  },
  {
    emoji: "✨",
    img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/12fddbc8-ab75-4c1e-9a4b-21ec572c763c.jpg",
    title: "Аэройога",
    desc: "Эксклюзивный гибрид: ты лежишь в коконе гамака, пока живые вибрации гонга окутывают тело и разум. Только у нас.",
    tags: ["Групповой", "VIP мини-группа", "Индивидуальный"],
    price: "___ ₽",
    per: "сеанс",
    color: "#8B7BB8",
    exclusive: true,
  },
];

const PAINS = [
  { emoji: "💺", text: "Боль после долгого сидения за компьютером" },
  { emoji: "🌅", text: "Скованность по утрам, «деревянная» спина" },
  { emoji: "🩻", text: "Протрузии, остеохондроз, межпозвонковые грыжи" },
  { emoji: "⚡", text: "Боль, которая «отдаёт» в ногу или руку" },
  { emoji: "😣", text: "Постоянное напряжение в плечах и шее" },
];

const BENEFITS = [
  { icon: "Leaf", title: "Декомпрессия позвоночника", text: "Позвонки вытягиваются без нагрузки — в невесомости гамака" },
  { icon: "Sparkles", title: "Глубокое растяжение", text: "Без боли и насилия над собой — тело раскрывается само" },
  { icon: "Waves", title: "Перезагрузка за 5 минут", text: "Гонг снижает кортизол и выводит из хронического стресса" },
  { icon: "Moon", title: "Сон как у ребёнка", text: "Клиенты отмечают улучшение сна уже с первого посещения" },
];

const STEPS = [
  { n: "1", title: "Теория и анатомия", text: "Биомеханика, безопасность, работа с гамаком разных типов" },
  { n: "2", title: "Методика преподавания", text: "Построение урока, работа с группой, ведение начинающих" },
  { n: "3", title: "Практика под наблюдением", text: "Самостоятельное ведение занятий с обратной связью" },
  { n: "4", title: "Сертификат и старт", text: "Сертификат о прохождении курса + поддержка при запуске первых классов" },
];

const REVIEWS = [
  {
    avatar: "🌸",
    text: "«Моя любимая студия аэройоги! Хожу сюда с самого открытия и это действительно то место, где я отдыхаю и телом, и душой. Хочу поблагодарить Алёну Самарину за то, что благодаря ней я познакомилась с аэройогой. Мне очень нравятся занятия Здоровая спина у Даньшиной Евгении. И отдельно хочу отметить, что в студии работают прекрасные массажисты, остеопат и косметолог, услугами которых я пользуюсь регулярно.»",
    name: "Apple User", meta: "⭐⭐⭐⭐⭐",
  },
  {
    avatar: "🌿",
    text: "«ЛУЧШАЯ СТУДИЯ В Г. АРТЁМ! Команда ФИТНСЛИМ чудесна, вежливый персонал, общение с клиентами на высшем уровне. Всегда чисто, уютно. Атмосфера в студии прекрасна, хочется возвращаться снова и снова. Мою любовь к аэройоге привила инструктор Елена. Хочется отметить Самарину Алену Владимировну — основательницу студии. После каждого занятия я чувствую прилив энергии и силы. Рекомендую!»",
    name: "Екатерина Трешина", meta: "⭐⭐⭐⭐⭐",
  },
  {
    avatar: "🦋",
    text: "«Моё знакомство с йогой случилось здесь 4 года назад. За это время изменилось и моё физическое тело, и общее здоровье, и даже мировосприятие. Перестала болеть спина, ушёл «вдовий горб», поясница пришла в норму. Дыхательные практики научили справляться с бессонницей. В студии каждый из инструкторов — мастер своего дела. Для каждого находится время, доброе слово и индивидуальный подход.»",
    name: "Наша Мокеева", meta: "⭐⭐⭐⭐⭐",
  },
  {
    avatar: "🌺",
    text: "«О, я реально в восторге — это потрясающе божественное место! Тренер Оксана супер интегрированно ведёт аэройогу, после занятия дали чаю с орехами, ну а гигиенический душ во всех туалетах меня окончательно покорил.»",
    name: "Гость студии", meta: "⭐⭐⭐⭐⭐",
  },
];

const TRUST = [
  { emoji: "🏋️", title: "Гамаки до 200 кг", text: "Сертифицированные крепления, ежемесячная проверка" },
  { emoji: "👥", title: "Малые группы", text: "Максимум 8 человек — каждый под вниманием" },
  { emoji: "🎓", title: "Международный сертификат", text: "Международная ассоциация аэройоги, Альянс йоги, диплом гос. образца" },
  { emoji: "🔄", title: "Гибкое расписание", text: "Утренние, дневные, вечерние. Перенос без штрафов" },
  { emoji: "💫", title: "Пробное — по спец цене", text: "Первое занятие по специальной цене" },
  { emoji: "🌿", title: "Атмосфера, не спортзал", text: "Ароматерапия, растения, чай после занятия" },
];

const FAQ_TABS = [
  {
    label: "Аэройога & Гонг",
    items: [
      { q: "Я никогда не занималась йогой. Это для меня?", a: "Да, именно для вас. Аэройога в гамаке легче напольной — часть нагрузки берёт на себя ткань. Большинство наших клиентов пришли с нулевым опытом." },
      { q: "Страшно висеть вверх ногами?", a: "Мы делаем это очень постепенно. На первых занятиях — только базовые асаны близко к полу. К перевёрнутым позициям переходят только тогда, когда вы готовы." },
      { q: "Можно на гонг-медитацию без опыта?", a: "Абсолютно. Вы просто лежите на коврике и слушаете. Никакой физической подготовки не нужно. Возраст и уровень формы — не ограничение." },
      { q: "А если не понравится первое занятие?", a: "Деньги возвращаем без вопросов. Мы уверены в качестве — поэтому и предлагаем бесплатное пробное." },
      { q: "Есть ли ограничения по здоровью?", a: "Для аэройоги — беременность, острые заболевания позвоночника, свежие травмы. Сообщите нам при записи, подберём подходящий формат." },
    ],
  },
  {
    label: "Хатха йога",
    items: [
      { q: "Что такое хатха йога и чем она отличается от других стилей?", a: "Хатха йога — классическая практика, в которой основное внимание уделяется статическим позам, дыханию и расслаблению. Это основа большинства современных направлений йоги, мягкая и доступная для любого уровня." },
      { q: "Подходит ли хатха йога для начинающих?", a: "Да, это один из лучших вариантов для старта. Темп занятий спокойный, каждая поза разбирается детально. Мы всегда предлагаем более простые вариации для новичков." },
      { q: "Нужна ли специальная физическая подготовка?", a: "Нет. Хатха йога не требует гибкости или спортивного опыта. Тело постепенно раскрывается в процессе регулярных занятий — без насилия и боли." },
      { q: "Сколько раз в неделю нужно заниматься?", a: "Для ощутимого результата достаточно 2–3 занятий в неделю. Уже через месяц вы заметите улучшение осанки, гибкости и общего самочувствия." },
    ],
  },
  {
    label: "Айенгара йога",
    items: [
      { q: "Что особенного в йоге Айенгара?", a: "Этот стиль разработан Б.К.С. Айенгаром и отличается точностью выравнивания тела в каждой позе. Используются специальные пропсы — блоки, ремни, болстеры — что делает практику безопасной и доступной для всех." },
      { q: "Подходит ли йога Айенгара при проблемах со спиной?", a: "Это один из самых терапевтических стилей. Точное выравнивание снимает нагрузку с позвоночника, укрепляет мышцы-стабилизаторы. Многие наши клиенты приходят именно с проблемами спины и шеи." },
      { q: "Нужно ли покупать пропсы самостоятельно?", a: "Нет, все необходимые пропсы есть в студии. Блоки, ремни, болстеры, стулья — всё предоставляется для занятий." },
      { q: "Чем йога Айенгара отличается от обычной хатхи?", a: "Главное отличие — детальная работа с выравниванием и длительное удержание поз. Прогресс более осознанный и точный, что особенно ценно при работе с ограничениями здоровья." },
    ],
  },
  {
    label: "Йога для беременных",
    items: [
      { q: "С какого срока можно начинать?", a: "Рекомендуем начинать со второго триместра (13–14 неделя). Если вы уже занимались йогой до беременности — с первого, но с адаптированной программой. Обязательно проконсультируйтесь с врачом." },
      { q: "Безопасно ли это для ребёнка?", a: "Да, при соблюдении всех рекомендаций. Наши инструкторы специально обучены работе с беременными. Мы исключаем позы на живот, резкие скручивания и интенсивные нагрузки." },
      { q: "Какие позы под запретом при беременности?", a: "Глубокие скручивания, позы на живот, сильные прогибы, перевёрнутые позиции во втором и третьем триместре. На занятиях мы используем только безопасные варианты с пропсами и поддержкой." },
      { q: "Помогает ли йога при родах?", a: "Да. Практика укрепляет мышцы тазового дна, учит правильному дыханию, снижает тревожность. Многие наши ученицы отмечают, что роды прошли значительно легче." },
      { q: "Можно ли заниматься до самых родов?", a: "Как правило, да — вплоть до 38–39 недели. Программа адаптируется под ваш срок и самочувствие. На последних неделях занятия более мягкие и направлены на подготовку к родам." },
    ],
  },
];

const S = { fontFamily: "'Cormorant', Georgia, serif" };

function CounterStat() {
  const { count, ref } = useCountUp(500, 2200, 10);
  return (
    <div ref={ref}>
      <div style={{ ...S, fontSize: 34, fontWeight: 400, color: "var(--pp-teal)", lineHeight: 1 }}>{count}+</div>
      <div style={{ fontSize: 12, color: "var(--pp-muted)", marginTop: 4, letterSpacing: "0.06em", textTransform: "uppercase" }}>Учеников</div>
    </div>
  );
}

function AboutCounter() {
  const { count, ref } = useCountUp(500, 2200, 10);
  return (
    <div ref={ref} style={{ flex: 1, background: "var(--pp-cream)", border: "1px solid var(--pp-border)", borderRadius: 16, padding: "20px 16px", textAlign: "center" }}>
      <div style={{ ...S, fontSize: 28, fontWeight: 400, color: "var(--pp-teal)", lineHeight: 1 }}>{count}+</div>
      <div style={{ fontSize: 12, color: "var(--pp-muted)", marginTop: 6, lineHeight: 1.3 }}>учеников</div>
    </div>
  );
}

function ReviewsCarousel() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const start = () => {
    timerRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % REVIEWS.length);
    }, 5000);
  };

  useEffect(() => {
    start();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const goTo = (i: number) => {
    setCurrent(i);
    if (timerRef.current) clearInterval(timerRef.current);
    start();
  };

  const r = REVIEWS[current];

  return (
    <section id="reviews" style={{ padding: "100px 24px", background: "var(--pp-cream)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ marginBottom: 48, textAlign: "center" }}>
          <div className="pp-label" style={{ marginBottom: 16 }}>Отзывы</div>
          <h2 style={{ ...S, fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300, lineHeight: 1.1 }}>
            Как меняются люди уже через <em style={{ color: "var(--pp-teal)" }}>4 занятия</em>
          </h2>
        </div>

        <div className="pp-card" style={{ padding: "40px 44px", minHeight: 260, display: "flex", flexDirection: "column", justifyContent: "space-between", transition: "opacity 0.4s" }}>
          <div style={{ color: "var(--pp-gold)", letterSpacing: 3, marginBottom: 20, fontSize: 18 }}>★★★★★</div>
          <p style={{ ...S, fontSize: "clamp(16px, 2vw, 19px)", fontStyle: "italic", color: "var(--pp-text)", lineHeight: 1.7, marginBottom: 28 }}>{r.text}</p>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--pp-teal-light)", border: "2px solid var(--pp-teal)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>{r.avatar}</div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 600, color: "var(--pp-text)" }}>{r.name}</div>
              <div style={{ fontSize: 13, color: "var(--pp-muted)" }}>{r.meta}</div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 16, marginTop: 28 }}>
          <button
            onClick={() => goTo((current - 1 + REVIEWS.length) % REVIEWS.length)}
            style={{ background: "none", border: "none", cursor: "pointer", fontSize: 28, lineHeight: 1, padding: 4, opacity: 0.7, transition: "opacity 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "0.7")}
          >👈</button>

          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{ width: i === current ? 28 : 10, height: 10, borderRadius: 5, border: "none", cursor: "pointer", background: i === current ? "var(--pp-teal)" : "var(--pp-teal-light)", transition: "all 0.3s", padding: 0 }}
            />
          ))}

          <button
            onClick={() => goTo((current + 1) % REVIEWS.length)}
            style={{ background: "none", border: "none", cursor: "pointer", fontSize: 28, lineHeight: 1, padding: 4, opacity: 0.7, transition: "opacity 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "0.7")}
          >👉</button>
        </div>
      </div>
    </section>
  );
}

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [faqTab, setFaqTab] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const resetForm = () => {
    setName(""); setPhone(""); setService(""); setMessage("");
    setError(""); setSubmitted(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, service, message }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setError(data.error || "Что-то пошло не так. Попробуйте ещё раз.");
      }
    } catch {
      setError("Ошибка сети. Проверьте подключение и попробуйте снова.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ background: "var(--pp-cream)", minHeight: "100vh", color: "var(--pp-text)" }}>

      {/* ── НАВИГАЦИЯ ─────────────────────────────────────── */}
      <nav className="pp-nav">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
          <a href="#" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
            <div style={{ width: 40, height: 40, borderRadius: "50%", border: "1.5px solid var(--pp-teal)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>🪢</div>
            <div>
              <div style={{ ...S, fontSize: 18, fontWeight: 500, color: "var(--pp-text)", lineHeight: 1.1 }}>Фитнслим</div>
              <div style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--pp-muted)" }}>Аэройога · Йога · Фитнес</div>
            </div>
          </a>
          <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
            {["О нас", "Услуги", "Обучение", "Отзывы", "FAQ"].map((t, i) => (
              <a key={t} href={`#${["about","services","training","reviews","faq"][i]}`}
                style={{ fontSize: 14, color: "var(--pp-muted)", textDecoration: "none", transition: "color 0.2s", fontWeight: 500 }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--pp-teal)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--pp-muted)")}
                className="hidden md:block">{t}</a>
            ))}
            <button className="pp-btn-primary" onClick={() => setShowForm(true)} style={{ padding: "10px 24px", fontSize: 13 }}>
              Записаться
            </button>
          </div>
        </div>
      </nav>

      {/* ── HERO ──────────────────────────────────────────── */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", paddingTop: 68 }}>
        {/* Фоновые градиенты */}
        <div style={{ position: "absolute", top: "10%", right: "5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(58,125,107,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "5%", left: "-5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(200,169,106,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 24px 80px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center", width: "100%" }}>
          {/* Текст */}
          <div>
            <div className="pp-fade-up pp-label" style={{ marginBottom: 20 }}>
              Студия аэройоги и звуковых практик
            </div>

            <h1 className="pp-fade-up d1" style={{ ...S, fontSize: "clamp(48px, 6vw, 80px)", fontWeight: 300, lineHeight: 1.05, letterSpacing: "-0.01em", marginBottom: 24, color: "var(--pp-text)" }}>
              Почувствуй<br /><em style={{ color: "var(--pp-teal)" }}>лёгкость</em><br />тела и тишину ума
            </h1>

            <p className="pp-fade-up d2" style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--pp-teal)", marginBottom: 12 }}>
              Направления студии
            </p>
            <div className="pp-fade-up d2" style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
              {["Аэройога", "Хатха-йога", "Айенгара йога", "Йогатерапия", "Йога для беременных", "Гонг-медитации", "Обучение инструкторов"].map(d => (
                <span key={d} style={{ fontSize: 13, color: "var(--pp-muted)", background: "var(--pp-cream-3)", borderRadius: 100, padding: "5px 14px", border: "1px solid var(--pp-border)" }}>{d}</span>
              ))}
            </div>
            <div className="pp-fade-up d2" style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
              {["Групповые", "Индивидуальные программы"].map(d => (
                <span key={d} style={{ fontSize: 13, fontWeight: 600, color: "var(--pp-teal)", background: "var(--pp-teal-light)", borderRadius: 100, padding: "5px 14px" }}>{d}</span>
              ))}
            </div>

            <div className="pp-fade-up d3" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 48 }}>
              <button className="pp-btn-primary" onClick={() => setShowForm(true)}>
                <Icon name="Sparkles" size={16} />
                Записаться на пробное занятие
              </button>
              <a href="#services" className="pp-btn-ghost">
                Узнать подробнее
                <Icon name="ChevronDown" size={16} />
              </a>
            </div>

            <div className="pp-fade-up d4" style={{ display: "flex", gap: 40, paddingTop: 32, borderTop: "1px solid var(--pp-border)", flexWrap: "wrap" }}>
              <CounterStat />
              {[["7 лет", "Практики"], ["98%", "Приходят снова"], ["4", "Формата"]].map(([n, l]) => (
                <div key={l}>
                  <div style={{ ...S, fontSize: 34, fontWeight: 400, color: "var(--pp-teal)", lineHeight: 1 }}>{n}</div>
                  <div style={{ fontSize: 12, color: "var(--pp-muted)", marginTop: 4, letterSpacing: "0.06em", textTransform: "uppercase" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Изображение */}
          <div className="pp-fade-up d2 pp-float" style={{ position: "relative" }}>
            <div style={{ borderRadius: 24, overflow: "hidden", aspectRatio: "3/4", boxShadow: "0 40px 100px rgba(31,29,24,0.15)" }}>
              <img src={IMG_AERIAL} alt="Аэройога в гамаках" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>

            {/* Ярлычок Аэройога */}
            <div style={{ position: "absolute", top: 24, right: -16, background: "var(--pp-teal)", borderRadius: 12, padding: "10px 16px", boxShadow: "0 8px 24px rgba(58,125,107,0.3)" }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: "#fff", letterSpacing: "0.04em" }}>✨ Аэройога</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.8)" }}>Только у нас</div>
            </div>

            {/* Кнопка телефон */}
            <a href="tel:+79147012883" style={{ position: "absolute", bottom: 24, right: -16, background: "#c8b8e8", borderRadius: 50, padding: "10px 20px 10px 14px", display: "flex", alignItems: "center", gap: 10, boxShadow: "0 4px 20px rgba(139,93,200,0.4)", textDecoration: "none", animation: "phonePulse 1.8s ease-in-out infinite" }}>
              <Icon name="Phone" size={20} style={{ color: "#fff", flexShrink: 0 }} />
              <span style={{ fontSize: 13, fontWeight: 600, color: "#fff", whiteSpace: "nowrap" }}>Начни прямо сейчас</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── О НАС ────────────────────────────────────────── */}
      <section id="about" style={{ padding: "100px 24px", background: "var(--pp-cream-2)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
          <div>
            <div className="pp-label" style={{ marginBottom: 16 }}>О студии</div>
            <h2 style={{ ...S, fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300, lineHeight: 1.1, marginBottom: 16 }}>
              Мы объединили <em style={{ color: "var(--pp-teal)" }}>йогу, фитнес и спа</em> под одной крышей
            </h2>
            <hr className="pp-divider" style={{ margin: "16px 0 20px" }} />
            <p style={{ fontSize: 15, color: "var(--pp-muted)", lineHeight: 1.75, marginBottom: 16 }}>
              Чтобы каждый нашёл свой путь к здоровью.
            </p>
            <p style={{ fontSize: 15, color: "var(--pp-muted)", lineHeight: 1.75, marginBottom: 16 }}>
              Центр Фитнслим & Пространство Пара работает в Артёме с 2019 года. За это время мы стали местом, куда приходят не просто за тренировкой — а за ощущением себя живым, лёгким и счастливым.
            </p>
            <p style={{ fontSize: 15, color: "var(--pp-muted)", lineHeight: 1.75 }}>
              Наши инструкторы — сертифицированные специалисты с опытом от 5 лет. Работаем по авторским программам, адаптированным для любого уровня: от новичков до продвинутых практиков.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: "var(--pp-cream)", border: "1px solid var(--pp-border)", borderRadius: 20, padding: "28px 32px" }}>
              <div className="pp-label" style={{ marginBottom: 16 }}>Контакты</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <a href="tel:+79147012883" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", color: "var(--pp-text)", fontSize: 15, fontWeight: 500 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--pp-teal-light)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon name="Phone" size={16} style={{ color: "var(--pp-teal)" }} />
                  </div>
                  <div>
                    <div>+7 (914) 701-28-83</div>
                    <div style={{ fontSize: 12, color: "var(--pp-muted)", marginTop: 2 }}>Фитнслим</div>
                  </div>
                </a>
                <a href="tel:+79089803545" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", color: "var(--pp-text)", fontSize: 15, fontWeight: 500 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--pp-teal-light)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon name="Phone" size={16} style={{ color: "var(--pp-teal)" }} />
                  </div>
                  <div>
                    <div>+7 (908) 980-35-45</div>
                    <div style={{ fontSize: 12, color: "var(--pp-muted)", marginTop: 2 }}>СПА Пространство Пара</div>
                  </div>
                </a>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 15, color: "var(--pp-text)" }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--pp-teal-light)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon name="MapPin" size={16} style={{ color: "var(--pp-teal)" }} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 500 }}>г. Артём, мкр. Глобус-2, 1а</div>
                    <div style={{ fontSize: 13, color: "var(--pp-muted)", marginTop: 2 }}>Приморский край</div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              {[["7+", "лет в Артёме"], ["10+", "инструкторов"]].map(([n, l]) => (
                <div key={l} style={{ flex: 1, background: "var(--pp-cream)", border: "1px solid var(--pp-border)", borderRadius: 16, padding: "20px 16px", textAlign: "center" }}>
                  <div style={{ ...S, fontSize: 28, fontWeight: 400, color: "var(--pp-teal)", lineHeight: 1 }}>{n}</div>
                  <div style={{ fontSize: 12, color: "var(--pp-muted)", marginTop: 6, lineHeight: 1.3 }}>{l}</div>
                </div>
              ))}
              <AboutCounter />
            </div>
          </div>
        </div>
      </section>

      {/* ── БОЛЬ ─────────────────────────────────────────── */}
      <section style={{ padding: "100px 24px", background: "var(--pp-cream-2)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <div className="pp-label" style={{ marginBottom: 16 }}>Узнай себя</div>
            <h2 style={{ ...S, fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 300, marginBottom: 16, lineHeight: 1.1 }}>
              Вы узнаёте себя в <em style={{ color: "var(--pp-teal)" }}>одной из этих историй</em>?
            </h2>
            <p style={{ fontSize: 16, color: "var(--pp-muted)", lineHeight: 1.7, maxWidth: 620, margin: 0 }}>
              Каждая программа в ФИТНСЛИМ создана под конкретный запрос — чтобы вы получили результат, а не просто «занятие».
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 32 }}>
            {PAINS.map((p, i) => (
              <div key={i} className="pp-card" style={{ padding: "24px 28px", display: "flex", gap: 16, alignItems: "flex-start" }}>
                <span style={{ fontSize: 28, lineHeight: 1, flexShrink: 0 }}>{p.emoji}</span>
                <p style={{ fontSize: 15, color: "var(--pp-muted)", lineHeight: 1.65, margin: 0 }}>{p.text}</p>
              </div>
            ))}
          </div>

          <div style={{ background: "rgba(58,125,107,0.07)", border: "1px solid rgba(58,125,107,0.18)", borderRadius: 20, padding: "28px 36px", textAlign: "center" }}>
            <p style={{ ...S, fontSize: 22, fontStyle: "italic", color: "var(--pp-text)", margin: 0 }}>
              Если хотя бы один пункт — про тебя, ты попала туда, куда нужно.
            </p>
          </div>
        </div>
      </section>

      {/* ── РЕШЕНИЕ ───────────────────────────────────────── */}
      <section style={{ padding: "100px 24px", background: "var(--pp-cream)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <div className="pp-label" style={{ marginBottom: 16 }}>Наш подход</div>
            <h2 style={{ ...S, fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300, lineHeight: 1.1, marginBottom: 16 }}>
              Пространство, где тело <em style={{ color: "var(--pp-teal)" }}>парит</em>, а разум молчит
            </h2>
            <hr className="pp-divider" style={{ margin: "20px 0 24px" }} />
            <p style={{ fontSize: 16, color: "var(--pp-muted)", lineHeight: 1.75, marginBottom: 32 }}>
              Мы создали место, где аэройога встречается со звуковой терапией — уникальное сочетание, работающее одновременно на физическом и эмоциональном уровне.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {BENEFITS.map((b, i) => (
                <div key={i} className="pp-card" style={{ padding: "16px 20px", display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: "var(--pp-teal-light)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon name={b.icon} fallback="Leaf" size={18} style={{ color: "var(--pp-teal)" }} />
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "var(--pp-text)", marginBottom: 2 }}>{b.title}</div>
                    <div style={{ fontSize: 13, color: "var(--pp-muted)", lineHeight: 1.5 }}>{b.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Фото гонг-медитации */}
          <div style={{ position: "relative" }}>
            <div style={{ borderRadius: 24, overflow: "hidden", aspectRatio: "4/5", boxShadow: "0 30px 80px rgba(31,29,24,0.12)" }}>
              <img src={IMG_GONG} alt="Гонг-медитация" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            {/* Плавающий блок */}
            <div style={{ position: "absolute", top: 32, left: -28, background: "var(--pp-cream-2)", borderRadius: 16, padding: "20px 24px", boxShadow: "0 12px 40px rgba(31,29,24,0.1)", border: "1px solid var(--pp-border)" }}>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <div style={{ fontSize: 28 }}>🔔</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "var(--pp-text)" }}>Гонг-медитация</div>
                  <div style={{ fontSize: 11, color: "var(--pp-muted)" }}>Тибетские чаши · Гонг · Монохорд</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── УСЛУГИ ───────────────────────────────────────── */}
      <section id="services" style={{ padding: "100px 24px", background: "var(--pp-cream-2)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <div className="pp-label" style={{ marginBottom: 16 }}>Форматы</div>
            <h2 style={{ ...S, fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 300, lineHeight: 1.1 }}>
              Выбери свой <em style={{ color: "var(--pp-teal)" }}>формат</em>
            </h2>
          </div>

          {/* Аэройога — главная карточка */}
          <div style={{ background: "linear-gradient(135deg, #3d2472 0%, #6b3fa0 60%, #8B5CC8 100%)", borderRadius: 24, padding: "40px 48px", marginBottom: 20, display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "center", position: "relative", overflow: "hidden" }}>
            {/* Рябь гонга */}
            <div style={{ position: "absolute", right: 120, top: "50%", transform: "translateY(-50%)" }}>
              {[0, 1, 2].map(i => (
                <div key={i} className="gong-ripple" style={{ width: 160, height: 160, top: -80, left: -80, animationDelay: `${i * 1}s` }} />
              ))}
            </div>

            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ display: "inline-block", background: "rgba(200,169,106,0.25)", border: "1px solid rgba(200,169,106,0.5)", borderRadius: 100, padding: "4px 16px", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--pp-gold)", marginBottom: 16 }}>
                ★ Только у нас в городе
              </div>
              <h3 style={{ ...S, fontSize: "clamp(28px, 3vw, 44px)", fontWeight: 300, color: "#E8F4F0", lineHeight: 1.1, marginBottom: 12 }}>
                Аэройога —<br /><em style={{ color: "var(--pp-gold)" }}>только у нас</em>
              </h3>
              <p style={{ fontSize: 15, color: "rgba(232,244,240,0.8)", lineHeight: 1.7, marginBottom: 20, maxWidth: 500 }}>
                2 вида гамаков на выбор: шелковые гамаки и гамаки с ручками. Подбираем формат под твои цели и уровень подготовки.
              </p>
              <div style={{ display: "flex", gap: 12, marginBottom: 24 }}>
                <div style={{ background: "rgba(255,255,255,0.12)", borderRadius: 12, padding: "10px 18px", fontSize: 13, color: "#E8F4F0" }}>🪢 Шелковые гамаки</div>
                <div style={{ background: "rgba(255,255,255,0.12)", borderRadius: 12, padding: "10px 18px", fontSize: 13, color: "#E8F4F0" }}>🤸 Гамаки с ручками</div>
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 28 }}>
                {["Групповой", "VIP мини-группа", "Индивидуальный"].map(t => (
                  <span key={t} style={{ fontSize: 12, color: "rgba(232,244,240,0.7)", background: "rgba(255,255,255,0.1)", borderRadius: 100, padding: "4px 14px" }}>{t}</span>
                ))}
              </div>
              <button className="pp-btn-gold" onClick={() => setShowForm(true)}>
                <Icon name="Sparkles" size={15} />
                Записаться
              </button>
            </div>

            <div style={{ fontSize: 80, textAlign: "center", position: "relative", zIndex: 1 }} className="pp-float">🔔</div>
          </div>

          {/* Остальные услуги */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {SERVICES.slice(0, 2).map((s, i) => (
              <div key={i} className="pp-card" style={{ padding: 32, display: "flex", flexDirection: "column" }}>
                <div style={{ width: 72, height: 72, borderRadius: "50%", overflow: "hidden", marginBottom: 20, border: "2px solid var(--pp-border)" }}>
                  <img src={s.img} alt={s.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <h3 style={{ ...S, fontSize: 26, fontWeight: 400, marginBottom: 12, lineHeight: 1.2 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: "var(--pp-muted)", lineHeight: 1.7, flex: 1, marginBottom: 20 }}>{s.desc}</p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
                  {s.tags.map(t => (
                    <span key={t} style={{ fontSize: 11, color: "var(--pp-muted)", background: "var(--pp-cream-3)", borderRadius: 100, padding: "3px 12px" }}>{t}</span>
                  ))}
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 20 }}>
                  <span style={{ ...S, fontSize: 28, fontWeight: 400, color: "var(--pp-teal)" }}>{s.price}</span>
                  <span style={{ fontSize: 13, color: "var(--pp-muted)" }}>/ {s.per}</span>
                </div>
                <button className="pp-btn-ghost" onClick={() => setShowForm(true)} style={{ justifyContent: "center" }}>
                  Записаться
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ОТЗЫВЫ ───────────────────────────────────────── */}
      <ReviewsCarousel />

      {/* ── ОБУЧЕНИЕ ─────────────────────────────────────── */}
      <section id="training" style={{ padding: "100px 24px", background: "var(--pp-cream-2)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
          <div>
            <div className="pp-label" style={{ marginBottom: 16 }}>Для инструкторов</div>
            <h2 style={{ ...S, fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300, lineHeight: 1.1, marginBottom: 16 }}>
              Обучение инструкторов <em style={{ color: "var(--pp-teal)" }}>аэройоги</em>
            </h2>
            <hr className="pp-divider" style={{ margin: "16px 0 20px" }} />
            <p style={{ fontSize: 15, color: "var(--pp-muted)", lineHeight: 1.75, marginBottom: 32 }}>
              Для тренеров, йогов и новичков с нуля — если хочешь превратить любовь к практике в профессию и зарабатывать на любимом деле.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {STEPS.map((step, i) => (
                <div key={i} style={{ display: "flex", gap: 16, padding: "20px 24px", background: "var(--pp-cream)", border: "1px solid var(--pp-border)", borderRadius: 16 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--pp-teal)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, flexShrink: 0 }}>{step.n}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "var(--pp-text)", marginBottom: 4 }}>{step.title}</div>
                    <div style={{ fontSize: 13, color: "var(--pp-muted)", lineHeight: 1.5 }}>{step.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "rgba(58,125,107,0.07)", border: "1px solid rgba(58,125,107,0.18)", borderRadius: 24, padding: 36 }}>
            <h3 style={{ ...S, fontSize: 24, fontStyle: "italic", marginBottom: 24, color: "var(--pp-text)" }}>После курса ты сможешь:</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}>
              {[
                "Вести групповые и индивидуальные занятия аэройогой",
                "Работать в любой студии или открыть свои классы",
                "Получить сертификат о прохождении курса «Фундамент Аэройоги»",
                "Зарабатывать от 50 000 ₽ в месяц на любимом деле",
                "Вести Аэройога — эксклюзивный гибридный формат",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ width: 22, height: 22, borderRadius: "50%", background: "var(--pp-teal-light)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                    <Icon name="Check" size={13} style={{ color: "var(--pp-teal)" }} />
                  </div>
                  <span style={{ fontSize: 14, color: "var(--pp-muted)", lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
            <div style={{ paddingTop: 24, borderTop: "1px solid rgba(58,125,107,0.15)" }}>
              <div style={{ fontSize: 13, color: "var(--pp-muted)", marginBottom: 16 }}>📅 Ближайший поток — уточни дату</div>
              <button className="pp-btn-primary" onClick={() => setShowForm(true)}>
                <Icon name="GraduationCap" size={16} />
                Записаться на обучение
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── ДОВЕРИЕ ──────────────────────────────────────── */}
      <section style={{ padding: "100px 24px", background: "var(--pp-cream)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="pp-label" style={{ marginBottom: 16 }}>Почему выбирают нас</div>
            <h2 style={{ ...S, fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300, lineHeight: 1.1 }}>
              Безопасно. <em style={{ color: "var(--pp-teal)" }}>Профессионально.</em> Уютно.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
            {TRUST.map((t, i) => (
              <div key={i} className="pp-card" style={{ padding: "28px 20px", textAlign: "center" }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>{t.emoji}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "var(--pp-text)", marginBottom: 6 }}>{t.title}</div>
                <div style={{ fontSize: 12, color: "var(--pp-muted)", lineHeight: 1.5 }}>{t.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section id="faq" style={{ padding: "100px 24px", background: "var(--pp-cream-2)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 64, alignItems: "start" }}>
          <div>
            <div className="pp-label" style={{ marginBottom: 16 }}>Вопросы</div>
            <h2 style={{ ...S, fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300, lineHeight: 1.1, marginBottom: 16 }}>
              Отвечаем <em style={{ color: "var(--pp-teal)" }}>честно</em>
            </h2>
            <hr className="pp-divider" style={{ margin: "16px 0 20px" }} />
            <p style={{ fontSize: 15, color: "var(--pp-muted)", lineHeight: 1.7, marginBottom: 24 }}>
              Если не нашли ответ — напишите нам, ответим в течение 15 минут.
            </p>
            <button className="pp-btn-ghost" onClick={() => setShowForm(true)}>
              <Icon name="MessageCircle" size={15} />
              Написать нам
            </button>
          </div>

          <div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {FAQ_TABS.map((tab, ti) => (
                <button key={ti} onClick={() => { setFaqTab(ti); setOpenFaq(null); }}
                  style={{ padding: "8px 18px", borderRadius: 100, border: `1px solid ${faqTab === ti ? "var(--pp-teal)" : "var(--pp-border)"}`, background: faqTab === ti ? "var(--pp-teal)" : "transparent", color: faqTab === ti ? "#fff" : "var(--pp-muted)", fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "all 0.2s" }}>
                  {tab.label}
                </button>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {FAQ_TABS[faqTab].items.map((f, i) => (
                <div key={i} style={{ background: "var(--pp-cream)", border: `1px solid ${openFaq === i ? "rgba(107,63,160,0.35)" : "var(--pp-border)"}`, borderRadius: 14, overflow: "hidden", transition: "border-color 0.2s" }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: "100%", padding: "18px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <span style={{ fontSize: 15, fontWeight: 600, color: "var(--pp-text)", lineHeight: 1.4 }}>{f.q}</span>
                    <span style={{ color: "var(--pp-teal)", fontSize: 22, flexShrink: 0, transition: "transform 0.2s", transform: openFaq === i ? "rotate(45deg)" : "none" }}>+</span>
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: "0 24px 18px", fontSize: 14, color: "var(--pp-muted)", lineHeight: 1.7 }}>{f.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ФИНАЛЬНЫЙ CTA ────────────────────────────────── */}
      <section style={{ padding: "100px 24px", background: "var(--pp-cream)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(58,125,107,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: 56, marginBottom: 24 }} className="pp-float">🪢</div>
          <div className="pp-label" style={{ marginBottom: 16 }}>Начни сегодня</div>
          <h2 style={{ ...S, fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 300, lineHeight: 1.05, marginBottom: 20 }}>
            Твой первый шаг —<br /><em style={{ color: "var(--pp-teal)" }}>по спец цене</em>
          </h2>
          <hr className="pp-divider" style={{ margin: "0 auto 24px" }} />
          <p style={{ fontSize: 17, color: "var(--pp-muted)", lineHeight: 1.7, marginBottom: 32 }}>
            Запишись на пробное занятие аэройогой или гонг-медитацию прямо сейчас.
          </p>

          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(58,125,107,0.08)", border: "1px solid rgba(58,125,107,0.2)", borderRadius: 100, padding: "8px 20px", marginBottom: 36, fontSize: 13, color: "var(--pp-muted)" }}>
            <div className="pp-blink" style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--pp-teal)", flexShrink: 0 }} />
            Мест в группе не более 8 — обычно заканчиваются за 3–5 дней
          </div>

          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 32 }}>
            <button className="pp-btn-primary" onClick={() => setShowForm(true)} style={{ padding: "18px 48px", fontSize: 16 }}>
              <Icon name="Sparkles" size={18} />
              Записаться по спец цене
            </button>
          </div>

          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+79147012883" className="pp-btn-ghost" style={{ padding: "10px 20px", fontSize: 13 }}>
              <span>📞</span> +7 (914) 701-28-83
            </a>
            <a href="https://wa.me/79147012883" target="_blank" rel="noopener noreferrer" className="pp-btn-ghost" style={{ padding: "10px 20px", fontSize: 13 }}>
              <span>📱</span> WhatsApp
            </a>
            <a href="https://t.me/+79147012883" target="_blank" rel="noopener noreferrer" className="pp-btn-ghost" style={{ padding: "10px 20px", fontSize: 13 }}>
              <span>💬</span> Telegram
            </a>
          </div>
        </div>
      </section>

      {/* ── ФУТЕР ────────────────────────────────────────── */}
      <footer style={{ background: "#1F1D18", color: "rgba(255,255,255,0.7)", padding: "60px 24px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
            <div>
              <div style={{ ...S, fontSize: 24, fontStyle: "italic", color: "#fff", marginBottom: 12 }}>Фитнслим</div>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, maxWidth: "32ch" }}>
                Студия аэройоги, гонг-медитаций и обучения инструкторов. Место, где тело парит, а разум молчит.
              </p>
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 16 }}>Услуги</div>
              {["Аэройога в гамаках", "Гонг-медитации", "Аэройога", "Обучение инструкторов"].map(t => (
                <div key={t} style={{ marginBottom: 10 }}>
                  <a href="#services" style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--pp-teal)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}>{t}</a>
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 16 }}>Контакты</div>
              <div style={{ marginBottom: 10 }}>
                <a href="tel:+79147012883" style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", textDecoration: "none", fontWeight: 500 }}>+7 (914) 701-28-83</a>
              </div>
              <div style={{ marginBottom: 10 }}>
                <a href="https://wa.me/79147012883" target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>📱 WhatsApp</a>
              </div>
              <div style={{ marginBottom: 10 }}>
                <a href="https://t.me/+79147012883" target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>💬 Telegram</a>
              </div>
              <div style={{ marginBottom: 10, fontSize: 13, color: "rgba(255,255,255,0.6)" }}>г. Ваш город, ул. Адрес</div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 28, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>© 2026 Фитнслим. Все права защищены.</span>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>Гамаки сертифицированы · нагрузка до 200 кг · первое занятие бесплатно</span>
          </div>
        </div>
      </footer>

      {/* ── МОДАЛЬНАЯ ФОРМА ──────────────────────────────── */}
      {showForm && (
        <div style={{ position: "fixed", inset: 0, zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}
          onClick={e => { if (e.target === e.currentTarget) { setShowForm(false); resetForm(); } }}>
          <div style={{ position: "absolute", inset: 0, background: "rgba(31,29,24,0.72)", backdropFilter: "blur(14px)" }} />
          <div className="pp-card pp-fade" style={{ maxWidth: 480, width: "100%", padding: "44px 40px", position: "relative", zIndex: 1, borderRadius: 24, maxHeight: "90vh", overflowY: "auto" }}>
            <button onClick={() => { setShowForm(false); resetForm(); }}
              style={{ position: "absolute", top: 18, right: 18, width: 36, height: 36, borderRadius: "50%", background: "var(--pp-cream-3)", border: "none", color: "var(--pp-muted)", cursor: "pointer", fontSize: 20, lineHeight: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>×</button>

            {!submitted ? (
              <>
                <div style={{ fontSize: 40, marginBottom: 14, textAlign: "center" }}>🪢</div>
                <h3 style={{ ...S, fontSize: 34, fontWeight: 300, textAlign: "center", marginBottom: 6, lineHeight: 1.1 }}>
                  Записаться на <em style={{ color: "var(--pp-teal)" }}>занятие</em>
                </h3>
                <p style={{ fontSize: 14, color: "var(--pp-muted)", textAlign: "center", marginBottom: 28, lineHeight: 1.6 }}>
                  Записаться на пробное занятие. Перезвоним в течение часа.
                </p>

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {/* Имя */}
                  <div>
                    <label style={{ display: "block", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--pp-muted)", marginBottom: 7 }}>Имя *</label>
                    <input className="pp-input" value={name} onChange={e => setName(e.target.value)} required placeholder="Введите ваше имя" />
                  </div>

                  {/* Телефон */}
                  <div>
                    <label style={{ display: "block", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--pp-muted)", marginBottom: 7 }}>Телефон *</label>
                    <input className="pp-input" value={phone} onChange={e => setPhone(e.target.value)} required placeholder="+7 (999) 000-00-00" type="tel" />
                  </div>

                  {/* Услуга */}
                  <div>
                    <label style={{ display: "block", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--pp-muted)", marginBottom: 7 }}>Интересует</label>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                      {["Аэройога", "Гонг-медитация", "Аэройога", "Обучение"].map(s => (
                        <button key={s} type="button" onClick={() => setService(service === s ? "" : s)}
                          style={{ padding: "8px 16px", borderRadius: 100, fontSize: 13, cursor: "pointer", transition: "all 0.18s", fontFamily: "'Golos Text', sans-serif", border: service === s ? "1.5px solid var(--pp-teal)" : "1.5px solid var(--pp-border)", background: service === s ? "var(--pp-teal-light)" : "transparent", color: service === s ? "var(--pp-teal)" : "var(--pp-muted)", fontWeight: service === s ? 600 : 400 }}>
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Ошибка */}
                  {error && (
                    <div style={{ background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: 10, padding: "10px 14px", fontSize: 13, color: "#DC2626", display: "flex", alignItems: "center", gap: 8 }}>
                      <Icon name="AlertCircle" size={15} />
                      {error}
                    </div>
                  )}

                  <button type="submit" className="pp-btn-primary" disabled={loading} style={{ justifyContent: "center", marginTop: 4, opacity: loading ? 0.7 : 1, transition: "opacity 0.2s" }}>
                    {loading ? (
                      <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ animation: "spin 0.8s linear infinite" }}><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
                        Отправляем...
                      </>
                    ) : (
                      <>
                        <Icon name="Send" size={15} />
                        Отправить заявку
                      </>
                    )}
                  </button>
                  <p style={{ fontSize: 11, color: "var(--pp-faint)", textAlign: "center" }}>Без обязательств · Ответим в течение часа</p>
                </form>
              </>
            ) : (
              <div style={{ textAlign: "center", padding: "24px 0" }}>
                <div style={{ width: 80, height: 80, borderRadius: "50%", background: "var(--pp-teal-light)", border: "2px solid var(--pp-teal)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                  <Icon name="Check" size={36} style={{ color: "var(--pp-teal)" }} />
                </div>
                <h3 style={{ ...S, fontSize: 34, marginBottom: 12, lineHeight: 1.1, fontWeight: 300 }}>
                  Заявка <em style={{ color: "var(--pp-teal)" }}>принята!</em>
                </h3>
                <p style={{ fontSize: 15, color: "var(--pp-muted)", lineHeight: 1.7, marginBottom: 28 }}>
                  Мы свяжемся с вами в течение часа и запишем на ближайшее удобное занятие. Ждём вас в Фитнслим!
                </p>
                <button className="pp-btn-ghost" onClick={() => { setShowForm(false); resetForm(); }} style={{ margin: "0 auto", display: "flex" }}>
                  Закрыть
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}