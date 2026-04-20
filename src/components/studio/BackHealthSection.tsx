import Icon from "@/components/ui/icon";

const S = { fontFamily: "var(--font-serif)" };

const IMG_BOLSTER = "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/08443f09-a33a-4642-bc38-f9008b4f7b8d.jpg";
const IMG_PROPS = "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/dc82a53e-e285-48b4-8aa3-ac2afe97536f.jpg";

const RESULTS = [
  { img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/4d4b828d-0a8d-48e7-8c8b-9cac34a84e75.jpg", name: "Марина, 42 года", result: "«Перестала болеть спина после 4 занятий. Врач сказал, что грыжа уменьшилась. Я в шоке в хорошем смысле!»" },
  { img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/1acac388-badd-4f99-a90b-b0157299374e.jpg", name: "Ольга, 38 лет", result: "«Ходила с болью в пояснице 3 года. После курса «Здоровая спина» забыла, что это такое. Рекомендую всем!»" },
  { img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/b51a8cdb-ca09-4e44-bddb-d9fde22f0eda.jpg", name: "Светлана, 55 лет", result: "«Остеохондроз мучил меня годами. Здесь за 8 занятий я почувствовала себя лет на 20 моложе — спина ровная, движения свободные.»" },
];

const FORMATS = [
  { title: "Мини-группа", desc: "До 4 человек. Инструктор следит за каждым.", price: "от 600 ₽" },
  { title: "Индивидуально", desc: "Полностью под ваш диагноз и запрос.", price: "от 1500 ₽" },
  { title: "Курс 8 занятий", desc: "Полный цикл с ощутимым результатом.", price: "от 4200 ₽" },

];

interface Props {
  onShowForm: () => void;
}

export default function BackHealthSection({ onShowForm }: Props) {
  return (
    <section id="back-health" style={{ padding: "100px 24px", background: "var(--pp-cream)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Заголовок */}
        <div style={{ marginBottom: 56, maxWidth: 680 }}>
          <div className="pp-label" style={{ marginBottom: 16 }}>Программа</div>
          <h2 style={{ ...S, fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 300, lineHeight: 1.1, marginBottom: 16 }}>
            Здоровая <em style={{ color: "var(--pp-teal)" }}>спина</em>
          </h2>
          <p style={{ fontSize: 18, color: "var(--pp-text)", fontWeight: 500, lineHeight: 1.6, marginBottom: 12 }}>
            Болит спина от сидячей жизни? Мы знаем как исправить!
          </p>
          <p style={{ fontSize: 16, color: "var(--pp-muted)", lineHeight: 1.75 }}>
            Авторская программа для тех, кто устал жить с болью. Мягкая декомпрессия позвоночника в гамаке + терапевтические упражнения с болстерами и ремнями — без таблеток и хирургии.
          </p>
        </div>

        {/* Главный блок — фото + описание */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center", marginBottom: 56 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ borderRadius: 24, overflow: "hidden", aspectRatio: "4/3" }}>
              <img src={IMG_BOLSTER} alt="Терапия с болстером" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ borderRadius: 16, overflow: "hidden", aspectRatio: "16/7" }}>
              <img src={IMG_PROPS} alt="Болстеры и ремни Айенгара" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <p style={{ fontSize: 13, color: "var(--pp-muted)", lineHeight: 1.6, textAlign: "center" }}>
              Болстеры, ремни и блоки из практики Айенгара — инструменты точного терапевтического воздействия на позвоночник
            </p>
          </div>
          <div>
            <p style={{ fontSize: 15, color: "var(--pp-muted)", lineHeight: 1.8, marginBottom: 24 }}>
              Когда вы лежите на болстере или работаете с ремнём, позвоночник вытягивается под собственным весом — без нагрузки, без боли. Это называется <strong>пассивная декомпрессия</strong>. Межпозвонковые диски получают пространство, нервы освобождаются от зажима, мышцы расслабляются.
            </p>
            <p style={{ fontSize: 15, color: "var(--pp-muted)", lineHeight: 1.8, marginBottom: 32 }}>
              Программа разработана совместно с остеопатом. Включает элементы йоги Айенгара с использованием болстеров, ремней и блоков. Подходит при остеохондрозе, протрузиях, межпозвонковых грыжах и хронических болях в пояснице и шее.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                "Снятие острой боли уже после 1–3 занятий",
                "Восстановление подвижности позвоночника",
                "Укрепление мышечного корсета без осевой нагрузки",
                "Работа с грыжами и протрузиями",
                "Индивидуальный подбор нагрузки",
              ].map((text, i) => (
                <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <Icon name="CheckCircle" size={18} style={{ color: "var(--pp-teal)", flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: 15, color: "var(--pp-text)", lineHeight: 1.5 }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Результаты */}
        <div style={{ marginBottom: 56 }}>
          <h3 style={{ ...S, fontSize: 28, fontWeight: 400, marginBottom: 28, textAlign: "center" }}>
            Что говорят <em style={{ color: "var(--pp-teal)" }}>после курса</em>
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {RESULTS.map((r, i) => (
              <div key={i} className="pp-card" style={{ padding: "28px 32px" }}>
                <div style={{ color: "var(--pp-teal)", letterSpacing: 3, marginBottom: 16, fontSize: 16 }}>★★★★★</div>
                <p style={{ fontSize: 14, color: "var(--pp-muted)", lineHeight: 1.7, marginBottom: 20, fontStyle: "italic" }}>{r.result}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <img src={r.img} alt={r.name} style={{ width: 44, height: 44, borderRadius: "50%", objectFit: "cover", border: "2px solid var(--pp-teal)" }} />
                  <span style={{ fontSize: 14, fontWeight: 600, color: "var(--pp-text)" }}>{r.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Расписание */}
        <div style={{ marginBottom: 48 }}>
          <h3 style={{ ...S, fontSize: 26, fontWeight: 400, marginBottom: 24, textAlign: "center" }}>
            Расписание <em style={{ color: "var(--pp-teal)" }}>занятий</em>
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, maxWidth: 640, margin: "0 auto" }}>
            <div style={{ background: "var(--pp-cream-2)", border: "1px solid var(--pp-border)", borderRadius: 16, padding: "20px 24px", display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--pp-teal)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon name="Moon" size={20} style={{ color: "#fff" }} />
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "var(--pp-text)", marginBottom: 4 }}>Пн / Ср / Пт</div>
                <div style={{ fontSize: 22, fontWeight: 300, color: "var(--pp-teal)", fontFamily: "var(--font-serif)" }}>18:30</div>
              </div>
            </div>
            <div style={{ background: "var(--pp-cream-2)", border: "1px solid var(--pp-border)", borderRadius: 16, padding: "20px 24px", display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#e07b54", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon name="Sun" size={20} style={{ color: "#fff" }} />
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "var(--pp-text)", marginBottom: 4 }}>Вт / Чт / Сб / Вс</div>
                <div style={{ fontSize: 22, fontWeight: 300, color: "#e07b54", fontFamily: "var(--font-serif)" }}>09:00</div>
              </div>
            </div>
          </div>
        </div>

        {/* Форматы + CTA */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "stretch" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {FORMATS.map((f, i) => (
              <div key={i} style={{ background: "var(--pp-cream-2)", border: "1px solid var(--pp-border)", borderRadius: 16, padding: "20px 22px" }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: "var(--pp-text)", marginBottom: 6 }}>{f.title}</div>
                <div style={{ fontSize: 13, color: "var(--pp-muted)", lineHeight: 1.5, marginBottom: 12 }}>{f.desc}</div>
                <div style={{ fontSize: 18, fontWeight: 500, color: "var(--pp-teal)", fontFamily: "var(--font-serif)" }}>{f.price}</div>
              </div>
            ))}
          </div>
          <div style={{ background: "linear-gradient(135deg, #c9a8e0 0%, #a87cc7 100%)", borderRadius: 24, padding: "40px 44px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: 16 }}>Запись на программу</div>
              <h3 style={{ ...S, fontSize: 32, fontWeight: 300, color: "#fff", lineHeight: 1.2, marginBottom: 16 }}>
                Первое занятие — по специальной цене
              </h3>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", lineHeight: 1.7, marginBottom: 32 }}>
                Расскажем о программе, оценим ваш запрос и подберём оптимальный формат.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <button className="pp-btn" onClick={onShowForm} style={{ background: "#fff", color: "#a87cc7", justifyContent: "center", fontWeight: 600 }}>
                Записаться на первое занятие
              </button>
              <a href="https://wa.me/79147070440" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontSize: 14, color: "rgba(255,255,255,0.85)", textDecoration: "none" }}>
                <Icon name="MessageCircle" size={16} /> Написать в WhatsApp
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}