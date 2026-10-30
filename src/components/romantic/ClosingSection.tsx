import React from 'react';
import { CLOSING_PHOTO, type PhotoItem } from '../../data/photos';
import { Heart, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ClosingSectionProps {
  onPhotoClick: (photo: PhotoItem) => void;
}

export const ClosingSection: React.FC<ClosingSectionProps> = ({ onPhotoClick }) => {
  const handlePetalsShower = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#E8BFC8', '#C7A56B', '#7C2439', '#FFF8F2']
      });
    } catch {
      // fallback
    }
  };

  return (
    <footer 
      id="cierre" 
      className="relative w-full bg-gradient-to-b from-[#20050E] via-[#3D101F] to-[#250913] text-[#FFF8F2] px-4 sm:px-6 py-16 sm:py-24 overflow-hidden border-t border-[#C7A56B]/30"
    >
      {/* Background ambient warmth */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-96 bg-[#7C2439]/30 blur-[120px] pointer-events-none"
        aria-hidden="true" 
      />

      <div className="relative max-w-xl mx-auto flex flex-col items-center text-center space-y-10 sm:space-y-12">
        
        {/* Featured Closing Photo Frame (Photo 9: Seaside serenity) */}
        <figure 
          onClick={() => onPhotoClick(CLOSING_PHOTO)}
          className="group relative cursor-pointer rounded-[2.5rem] overflow-hidden border-2 border-[#C7A56B]/50 shadow-2xl bg-[#2D0B16] w-60 sm:w-72 aspect-[3/4] transition-all duration-300 hover:scale-[1.02] hover:border-[#C7A56B]"
        >
          <img
            src={CLOSING_PHOTO.mobile}
            srcSet={`${CLOSING_PHOTO.mobile} 720w, ${CLOSING_PHOTO.desktop} 1206w`}
            sizes="(max-width: 640px) 240px, 288px"
            alt={CLOSING_PHOTO.alt}
            loading="lazy"
            width={CLOSING_PHOTO.mobileWidth}
            height={CLOSING_PHOTO.mobileHeight}
            style={{ objectPosition: CLOSING_PHOTO.objectPosition || 'center 20%' }}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#20050E]/80 via-transparent to-transparent flex items-end justify-center p-4">
            <span className="font-romantic text-xs italic text-[#E8BFC8]">
              {CLOSING_PHOTO.storyCaption}
            </span>
          </div>
        </figure>

        {/* Closing Love Message */}
        <div className="space-y-6 max-w-lg text-left bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-[#C7A56B]/30 shadow-xl">
          <p className="font-romantic text-lg sm:text-xl text-[#FFF8F2] leading-relaxed font-normal">
            «Sofía, sigue creciendo, sigue persiguiendo tus sueños y sigue esforzándote por aquello que deseas construir.
          </p>
          <p className="font-romantic text-base sm:text-lg text-[#E8BFC8] leading-relaxed">
            Espero que nunca dejes de reconocer todo lo bonito que existe en ti. Que también encuentres tiempo para descansar, sentirte orgullosa de tus avances y recordar que no tienes que conseguirlo todo para merecer cariño y admiración.
          </p>
          <p className="font-romantic text-base sm:text-lg text-[#FFF8F2] leading-relaxed">
            Para mí eres una persona muy especial. Te admiro por tu forma de ser, por tu corazón y por el esfuerzo que pones en seguir adelante.
          </p>
          <p className="font-romantic text-base sm:text-lg text-[#E8BFC8] leading-relaxed">
            Ojalá estas palabras te acompañen cuando tengas un día difícil y te recuerden que hay alguien que ve tu belleza interior, valora tu esfuerzo y te ama profundamente.
          </p>
          <div className="pt-2 text-center">
            <p className="font-romantic text-xl sm:text-2xl text-[#C7A56B] font-semibold italic">
              Con todo mi amor. ❤️
            </p>
          </div>
        </div>

        {/* Signatures & Dedication */}
        <div className="w-full flex flex-col items-center space-y-4 pt-2">
          
          {/* Recipient Elegance */}
          <div className="flex flex-col items-center">
            <span className="text-[11px] font-romantic tracking-[0.25em] uppercase text-[#E8BFC8]/70">
              Dedicado con infinita admiración a
            </span>
            <h3 className="font-romantic text-3xl sm:text-4xl text-[#FFF8F2] font-bold tracking-wide mt-1">
              Sofía
            </h3>
          </div>

          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C7A56B] to-transparent my-2" />

          {/* Fixed Immutable Sender Space */}
          <div className="flex flex-col items-center">
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#20050E]/80 border border-[#C7A56B]/60 shadow-lg backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#C7A56B] animate-pulse" />
              <p className="font-romantic text-base sm:text-xl text-[#FFF8F2] font-semibold tracking-wide select-none">
                Escrito por Juan Téllez
              </p>
              <span className="w-2 h-2 rounded-full bg-[#C7A56B] animate-pulse" />
            </div>
            <p className="font-romantic italic text-xs sm:text-sm text-[#E8BFC8]/80 mt-2">
              Con todo mi amor y admiración sincera
            </p>
          </div>
        </div>

        {/* Petals Shower Button */}
        <div className="pt-2">
          <button
            onClick={handlePetalsShower}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-[#C7A56B]/40 text-xs sm:text-sm font-romantic text-[#FFF8F2] tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C7A56B]" />
            <span>Celebrar nuestro cariño ✨</span>
            <Heart className="w-3.5 h-3.5 text-[#E8BFC8] fill-current" />
          </button>
        </div>

        {/* Quiet footer note */}
        <div className="pt-8 text-center text-xs text-[#E8BFC8]/70 font-romantic tracking-widest uppercase select-none">
          Escrito por Juan Téllez · Para Sofía · 2026
        </div>

      </div>
    </footer>
  );
};
