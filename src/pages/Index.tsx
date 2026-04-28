import { useState, useEffect } from "react";
import NavBar from "@/components/studio/NavBar";
import HeroSection from "@/components/studio/HeroSection";
import ServicesSection from "@/components/studio/ServicesSection";
import GallerySection from "@/components/studio/GallerySection";
import TrainingFaqFooter from "@/components/studio/TrainingFaqFooter";
import ContactForm from "@/components/studio/ContactForm";
import PrivacyModal from "@/components/studio/PrivacyModal";

export default function Index() {
  const [showForm, setShowForm] = useState(false);
  const [privacyModal, setPrivacyModal] = useState<"privacy" | "consent" | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [hintDismissed, setHintDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hintDismissed) setShowHint(true);
    }, 20000);
    return () => clearTimeout(timer);
  }, [hintDismissed]);

  const handleHintClose = () => { setShowHint(false); setHintDismissed(true); };
  const handleHintAction = () => { setShowHint(false); setHintDismissed(true); setShowForm(true); };

  return (
    <div style={{ background: "var(--pp-cream)", minHeight: "100vh", color: "var(--pp-text)" }}>
      <NavBar onShowForm={() => setShowForm(true)} />
      <HeroSection onShowForm={() => setShowForm(true)} />
      <ServicesSection onShowForm={() => setShowForm(true)} />
      <GallerySection />
      <TrainingFaqFooter onShowForm={() => setShowForm(true)} onShowPrivacy={setPrivacyModal} />

      {showForm && <ContactForm onClose={() => setShowForm(false)} />}
      {privacyModal && <PrivacyModal type={privacyModal} onClose={() => setPrivacyModal(null)} />}

      {showHint && (
        <div style={{ position: "fixed", bottom: 28, left: 28, zIndex: 999, maxWidth: 320, animation: "slideUp 0.4s cubic-bezier(0.16,1,0.3,1)" }}>
          <div style={{ borderRadius: 20, boxShadow: "0 8px 40px rgba(31,29,24,0.25)", overflow: "hidden", position: "relative" }}>
            <div style={{ position: "absolute", inset: 0, backgroundImage: "url(https://cdn.poehali.dev/projects/cb6bf55d-d0e9-4bf4-a310-b60f55ba4f82/bucket/70246e78-d5a5-4b2a-9070-6d144045008f.png)", backgroundSize: "cover", backgroundPosition: "center 30%" }} />
            <div style={{ position: "absolute", inset: 0, background: "rgba(10,6,4,0.62)" }} />
            <div style={{ position: "relative", padding: "24px 24px 20px" }}>
              <button onClick={handleHintClose} style={{ position: "absolute", top: 12, right: 14, background: "rgba(255,255,255,0.15)", border: "none", fontSize: 16, color: "#fff", cursor: "pointer", lineHeight: 1, width: 28, height: 28, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>×</button>
              <div style={{ fontSize: 28, marginBottom: 10 }}>💬</div>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: 18, fontWeight: 400, color: "#fff", marginBottom: 8, lineHeight: 1.3 }}>
                Есть вопросы?
              </div>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", lineHeight: 1.6, marginBottom: 16 }}>
                Напишите нам — и мы подберём подходящее занятие именно для вас.
              </p>
              <button onClick={handleHintAction} style={{ width: "100%", padding: "11px 0", borderRadius: 100, background: "var(--pp-gold)", color: "#fff", border: "none", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "'Inter', sans-serif" }}>
                Написать нам
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}