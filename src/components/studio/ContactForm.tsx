import { useState } from "react";
import Icon from "@/components/ui/icon";
import { API_URL } from "./data";

const S = { fontFamily: "var(--font-serif)" };

interface Props {
  onClose: () => void;
}

export default function ContactForm({ onClose }: Props) {
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

  const handleClose = () => { onClose(); resetForm(); };

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
    <div
      style={{ position: "fixed", inset: 0, zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}
      onClick={e => { if (e.target === e.currentTarget) handleClose(); }}
    >
      <div style={{ position: "absolute", inset: 0, background: "rgba(31,29,24,0.72)", backdropFilter: "blur(14px)" }} />
      <div className="pp-card pp-fade" style={{ maxWidth: 480, width: "100%", padding: "44px 40px", position: "relative", zIndex: 1, borderRadius: 24, maxHeight: "90vh", overflowY: "auto" }}>
        <button
          onClick={handleClose}
          style={{ position: "absolute", top: 18, right: 18, width: 36, height: 36, borderRadius: "50%", background: "var(--pp-cream-3)", border: "none", color: "var(--pp-muted)", cursor: "pointer", fontSize: 20, lineHeight: 1, display: "flex", alignItems: "center", justifyContent: "center" }}
        >×</button>

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
              <div>
                <label style={{ display: "block", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--pp-muted)", marginBottom: 7 }}>Имя *</label>
                <input className="pp-input" value={name} onChange={e => setName(e.target.value)} required placeholder="Введите ваше имя" />
              </div>

              <div>
                <label style={{ display: "block", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--pp-muted)", marginBottom: 7 }}>Телефон *</label>
                <input className="pp-input" value={phone} onChange={e => setPhone(e.target.value)} required placeholder="+7 (999) 000-00-00" type="tel" />
              </div>

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
            <button className="pp-btn-ghost" onClick={handleClose} style={{ margin: "0 auto", display: "flex" }}>
              Закрыть
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
