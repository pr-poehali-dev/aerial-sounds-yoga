import { useState } from "react";
import Icon from "@/components/ui/icon";

const S = { fontFamily: "var(--font-serif)" };

const IMG_BOLSTER = "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/c75588ec-50e2-4ac6-a54a-7ba8685d7d3a.jpg";
const IMG_PROPS = "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/dc82a53e-e285-48b4-8aa3-ac2afe97536f.jpg";

const RESULTS = [
  { img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/2cc6b1d0-da19-4b9a-b622-a971fa7a013b.jpg", name: "Марина, 42 года", result: "«Перестала болеть спина после 4 занятий. Врач сказал, что грыжа уменьшилась. Я в шоке в хорошем смысле!»" },
  { img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/ae94f848-c389-4165-8829-12df3ac5f8e6.jpg", name: "Ольга, 38 лет", result: "«Ходила с болью в пояснице 3 года. После курса «Здоровая спина» забыла, что это такое. Рекомендую всем!»" },
  { img: "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/2bfd49de-433b-4f38-aa11-d38ff57fa83d.jpg", name: "Светлана, 55 лет", result: "«Остеохондроз мучил меня годами. Здесь за 8 занятий я почувствовала себя лет на 20 моложе — спина ровная, движения свободные.»" },
];

const FORMATS = [
  { title: "Семейная тренировка 60 мин", desc: "Занятие для всей семьи под руководством инструктора.", price: "3 500 ₽ / 2 чел." },
  { title: "Семейная тренировка 90 мин", desc: "Занятие для всей семьи под руководством инструктора.", price: "3 500 ₽ / 2 чел." },
  { title: "Индивидуально 60 мин", desc: "5 занятий. Полностью под ваш диагноз и запрос.", price: "15 000 ₽" },
  { title: "Индивидуально 90 мин", desc: "5 занятий. Полностью под ваш диагноз и запрос.", price: "22 500 ₽" },
  { title: "Абонемент «Вездеход»", desc: "13 занятий, любые направления. Срок действия 30 дней.", price: "10 990 ₽" },

];

interface Props {
  onShowForm: () => void;
}

export default function BackHealthSection({ onShowForm }: Props) {
  const [slide, setSlide] = useState(0);

  const goTo = (i: number) => setSlide(i);

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
            Авторская программа на основе Йоги Айенгара для тех, кто устал жить с болью. Мягкая декомпрессия позвоночника + терапевтические упражнения с болстерами и ремнями — без таблеток и хирургии.
          </p>
        </div>

        {/* Главный блок — фото + описание */}
        <div className="pp-grid-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center", marginBottom: 56 }}>
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

        {/* Результаты — карусель */}
        <div style={{ marginBottom: 56 }}>
          <h3 style={{ ...S, fontSize: 28, fontWeight: 400, marginBottom: 28, textAlign: "center" }}>
            Те, кто приходит <em style={{ color: "var(--pp-teal)" }}>снова и снова</em>
          </h3>
          <div style={{ position: "relative", maxWidth: 600, margin: "0 auto" }}>
            <div className="pp-card" style={{ padding: "36px 40px", minHeight: 180, transition: "opacity 0.3s" }}>
              <div style={{ color: "var(--pp-teal)", letterSpacing: 3, marginBottom: 16, fontSize: 16 }}>★★★★★</div>
              <p style={{ fontSize: 15, color: "var(--pp-muted)", lineHeight: 1.7, marginBottom: 24, fontStyle: "italic" }}>{RESULTS[slide].result}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <img src={RESULTS[slide].img} alt={RESULTS[slide].name} style={{ width: 48, height: 48, borderRadius: "50%", objectFit: "cover", border: "2px solid var(--pp-teal)" }} />
                <span style={{ fontSize: 14, fontWeight: 600, color: "var(--pp-text)" }}>{RESULTS[slide].name}</span>
              </div>
            </div>
            {/* Точки */}
            <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 20 }}>
              {RESULTS.map((_, i) => (
                <button key={i} onClick={() => goTo(i)} style={{ width: i === slide ? 24 : 8, height: 8, borderRadius: 4, background: i === slide ? "var(--pp-teal)" : "var(--pp-border)", border: "none", cursor: "pointer", padding: 0, transition: "all 0.3s" }} />
              ))}
            </div>
          </div>
        </div>

        {/* Форматы + CTA */}
        <div className="pp-grid-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "stretch" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))", gap: 16 }}>
            {FORMATS.map((f, i) => (
              <div key={i} style={{ background: "var(--pp-cream-2)", border: "1px solid var(--pp-border)", borderRadius: 16, padding: "20px 22px" }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: "var(--pp-text)", marginBottom: 6 }}>{f.title}</div>
                <div style={{ fontSize: 13, color: "var(--pp-muted)", lineHeight: 1.5, marginBottom: 12 }}>{f.desc}</div>
                <div style={{ fontSize: 18, fontWeight: 500, color: "var(--pp-teal)", fontFamily: "var(--font-serif)" }}>{f.price}</div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, justifyContent: "center" }}>
            <button className="pp-btn" onClick={onShowForm} style={{ justifyContent: "center", fontWeight: 700, animation: "ctaPulse 1.6s ease-in-out infinite" }}>
              Записаться на первое занятие
            </button>
            <a href="https://wa.me/79147070440" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontSize: 14, color: "var(--pp-muted)", textDecoration: "none" }}>
              <Icon name="MessageCircle" size={16} /> Написать в WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}