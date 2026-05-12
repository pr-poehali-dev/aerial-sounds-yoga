import { useState } from "react";
import NavBar from "@/components/studio/NavBar";
import HeroSection from "@/components/studio/HeroSection";
import ServicesSection from "@/components/studio/ServicesSection";
import GallerySection from "@/components/studio/GallerySection";
import TrainingFaqFooter from "@/components/studio/TrainingFaqFooter";
import SpaSection from "@/components/studio/SpaSection";
import PricingSection from "@/components/studio/PricingSection";
import ContactForm from "@/components/studio/ContactForm";
import PrivacyModal from "@/components/studio/PrivacyModal";

export default function Index() {
  const [showForm, setShowForm] = useState(false);
  const [privacyModal, setPrivacyModal] = useState<"privacy" | "consent" | null>(null);


  return (
    <div style={{ background: "var(--pp-cream)", minHeight: "100vh", color: "var(--pp-text)" }}>
      <NavBar onShowForm={() => setShowForm(true)} />
      <HeroSection onShowForm={() => setShowForm(true)} />
      <ServicesSection onShowForm={() => setShowForm(true)} />
      <PricingSection onShowForm={() => setShowForm(true)} />
      <GallerySection />
      <SpaSection />
      <TrainingFaqFooter onShowForm={() => setShowForm(true)} onShowPrivacy={setPrivacyModal} />

      {showForm && <ContactForm onClose={() => setShowForm(false)} />}
      {privacyModal && <PrivacyModal type={privacyModal} onClose={() => setPrivacyModal(null)} />}

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes popupIn { from { opacity: 0; transform: scale(0.94) translateY(16px); } to { opacity: 1; transform: scale(1) translateY(0); } }
      `}</style>
    </div>
  );
}