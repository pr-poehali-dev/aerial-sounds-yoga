import { useState } from "react";
import Icon from "@/components/ui/icon";
import { API_URL } from "./data";
import PrivacyModal from "./PrivacyModal";

const S = { fontFamily: "var(--font-serif)" };
const PHOTO = "https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/files/5e84f780-88df-4663-8583-bad6f2c81b69.jpg";

interface Props {
  onClose: () => void;
}

export default function ContactForm({ onClose }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [privacyModal, setPrivacyModal] = useState<"privacy" | "consent" | null>(null);

  const resetForm = () => { setName(""); setPhone(""); setService(""); setError(""); setSubmitted(false); };
  const handleClose = () => { onClose(); resetForm(); };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, service }),
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
    <>
      <div
        style={{ position: "fixed", inset: 0, zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}
        onClick={e => { if (e.target === e.currentTarget) handleClose(); }}
      >
        <div style={{ position: "absolute", inset: 0, background: "rgba(20,10,35,0.78)", backdropFilter: "blur(16px)" }} />

        <div style={{ position: "relative", zIndex: 1, display: "flex", borderRadius: 24, overflow: "hidden", maxWidth: 860, width: "100%", maxHeight: "92vh", boxShadow: "0 32px 80px rgba(0,0,0,0.35)" }}>

          {/* Фото слева */}
          <div style={{ flex: "0 0 42%", position: "relative", minHeight: 560 }}>
            <img src={PHOTO} alt="Красивая осанка" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, transparent 60%, rgba(255,252,248,0.15) 100%)" }} />
            <div style={{ position: "absolute", bottom: 28, left: 24, right: 24 }}>
              <div style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(10px)", borderRadius: 12, padding: "12px 16px", border: "1px solid rgba(255,255,255,0.25)" }}>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.8)", marginBottom: 4 }}>Новое направление</div>
                <div style={{ fontSize: 14, color: "#fff", fontWeight: 500 }}>Запись на пробную тренировку</div>
              </div>
            </div>
          </div>

          {/* Форма справа */}
          <div style={{ flex: 1, background: "var(--pp-cream)", padding: "44px 40px", overflowY: "auto", position: "relative" }}>
            <button
              onClick={handleClose}
              style={{ position: "absolute", top: 18, right: 18, width: 36, height: 36, borderRadius: "50%", background: "var(--pp-cream-3)", border: "none", color: "var(--pp-muted)", cursor: "pointer", fontSize: 20, display: "flex", alignItems: "center", justifyContent: "center" }}
            >×</button>

            {!submitted ? (
              <>
                <h3 style={{ ...S, fontSize: 30, fontWeight: 400, lineHeight: 1.15, marginBottom: 10, paddingRight: 32 }}>
                  Новые услуги и <em style={{ color: "var(--pp-teal)" }}>спец предложения</em>
                </h3>
                <p style={{ fontSize: 14, color: "var(--pp-muted)", lineHeight: 1.65, marginBottom: 28 }}>
                  Оставь заявку и узнай обо всех наших выгодных предложениях.
                </p>

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div>
                    <label style={{ display: "block", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--pp-muted)", marginBottom: 7 }}>Ваше имя *</label>
                    <input className="pp-input" value={name} onChange={e => setName(e.target.value)} required placeholder="Введите ваше имя" />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--pp-muted)", marginBottom: 7 }}>Телефон *</label>
                    <input className="pp-input" value={phone} onChange={e => setPhone(e.target.value)} required placeholder="+7 (___) ___-__-__" type="tel" />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--pp-muted)", marginBottom: 7 }}>Интересует</label>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                      {["Групповые", "Индивидуальные", "Обучение"].map(s => (
                        <button key={s} type="button" onClick={() => setService(service === s ? "" : s)}
                          style={{ padding: "8px 16px", borderRadius: 100, fontSize: 13, cursor: "pointer", transition: "all 0.18s", fontFamily: "'Inter', sans-serif", border: service === s ? "1.5px solid var(--pp-teal)" : "1.5px solid var(--pp-border)", background: service === s ? "var(--pp-teal-light)" : "transparent", color: service === s ? "var(--pp-teal)" : "var(--pp-muted)", fontWeight: service === s ? 600 : 400 }}>
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {error && (
                    <div style={{ background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: 10, padding: "10px 14px", fontSize: 13, color: "#DC2626", display: "flex", alignItems: "center", gap: 8 }}>
                      <Icon name="AlertCircle" size={15} />
                      {error}
                    </div>
                  )}

                  <label style={{ display: "flex", alignItems: "flex-start", gap: 10, cursor: "pointer", userSelect: "none" }}>
                    <input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)}
                      style={{ marginTop: 2, width: 16, height: 16, accentColor: "var(--pp-teal)", flexShrink: 0, cursor: "pointer" }} />
                    <span style={{ fontSize: 12, color: "var(--pp-muted)", lineHeight: 1.6 }}>
                      Я ознакомился(-ась) с{" "}
                      <button type="button" onClick={() => setPrivacyModal("consent")}
                        style={{ background: "none", border: "none", padding: 0, fontSize: 12, color: "var(--pp-teal)", cursor: "pointer", textDecoration: "underline" }}>
                        согласием на обработку данных
                      </button>{" "}и{" "}
                      <button type="button" onClick={() => setPrivacyModal("privacy")}
                        style={{ background: "none", border: "none", padding: 0, fontSize: 12, color: "var(--pp-teal)", cursor: "pointer", textDecoration: "underline" }}>
                        политикой конфиденциальности
                      </button>
                    </span>
                  </label>

                  <button type="submit" className="pp-btn-primary" disabled={loading || !agreed} style={{ justifyContent: "center", marginTop: 4, opacity: (loading || !agreed) ? 0.6 : 1, transition: "opacity 0.2s" }}>
                    {loading ? (
                      <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ animation: "spin 0.8s linear infinite" }}><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
                        Отправляем...
                      </>
                    ) : (
                      <>
                        <Icon name="Send" size={15} />
                        Оставить заявку
                      </>
                    )}
                  </button>
                  <p style={{ fontSize: 11, color: "var(--pp-faint)", textAlign: "center" }}>Без обязательств · Ответим в течение часа</p>
                </form>
              </>
            ) : (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ width: 80, height: 80, borderRadius: "50%", background: "var(--pp-teal-light)", border: "2px solid var(--pp-teal)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                  <Icon name="Check" size={36} style={{ color: "var(--pp-teal)" }} />
                </div>
                <h3 style={{ ...S, fontSize: 34, marginBottom: 12, lineHeight: 1.1, fontWeight: 300 }}>
                  Заявка <em style={{ color: "var(--pp-teal)" }}>принята!</em>
                </h3>
                <p style={{ fontSize: 15, color: "var(--pp-muted)", lineHeight: 1.7, marginBottom: 28 }}>
                  Мы свяжемся с вами в течение часа и запишем на ближайшее удобное занятие. Ждём вас!
                </p>
                <button className="pp-btn-ghost" onClick={handleClose} style={{ margin: "0 auto", display: "flex" }}>
                  Закрыть
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {privacyModal && (
        <PrivacyModal type={privacyModal} onClose={() => setPrivacyModal(null)} />
      )}
    </>
  );
}
