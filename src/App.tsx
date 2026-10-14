import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { MovingCarousel, CarouselImageItem } from './components/MovingCarousel';
import { WhatsAppReviews } from './components/WhatsAppReviews';
import { Bonuses } from './components/Bonuses';
import { Pricing } from './components/Pricing';
import { AboutCreator } from './components/AboutCreator';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { ImageModal } from './components/ImageModal';

export default function App() {
  const [selectedImage, setSelectedImage] = useState<CarouselImageItem | null>(null);

  const scrollToOffer = () => {
    const el = document.getElementById('oferta');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-emerald-500 selection:text-white font-sans antialiased">
      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 01 — HEADLINE & VSL (9:16) */}
        <Hero onScrollToOffer={scrollToOffer} />

        {/* CARROSSEL EM MOVIMENTO */}
        <MovingCarousel onImageClick={(item) => setSelectedImage(item)} />

        {/* DEPOIMENTOS DE CLIENTES */}
        <WhatsAppReviews />

        {/* 03 — BÔNUS EXCLUSIVOS */}
        <Bonuses />

        {/* 04 & 05 — ESCOLHA SEU PLANO (PRICING) */}
        <Pricing />

        {/* QUEM CRIOU ESSE MATERIAL */}
        <AboutCreator />

        {/* SUAS DÚVIDAS RESPONDIDAS... */}
        <FaqSection />

        {/* CTA FINAL */}
        <FinalCta onScrollToOffer={scrollToOffer} />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* Modal for image zoom on click */}
      <ImageModal
        item={selectedImage}
        onClose={() => setSelectedImage(null)}
        onScrollToOffer={scrollToOffer}
      />
    </div>
  );
}
