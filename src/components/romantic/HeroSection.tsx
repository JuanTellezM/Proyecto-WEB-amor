import React from 'react';
import { HERO_PHOTO } from '../../data/photos';
import { ParticleCanvas } from './ParticleCanvas';
import { Heart, ChevronDown } from 'lucide-react';
import { romanticAudio } from '../../services/audioPlayer';

interface HeroSectionProps {
  onDiscoverClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onDiscoverClick }) => {
  const handleStartExperience = () => {
    romanticAudio.play();
    onDiscoverClick();
  };

  return (
    <header className="relative min-h-[100svh] w-full flex flex-col justify-between items-center text-center px-4 sm:px-6 py-8 overflow-hidden bg-warm-radial">
      {/* Background Subtle Particle Canvas */}
      <ParticleCanvas particleCount={32} />

      {/* Atmospheric Soft Light Orb */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[480px] h-[320px] sm:h-[480px] rounded-full bg-[#7C2439]/30 blur-[90px] pointer-events-none -z-0 animate-glow"
        aria-hidden="true"
      />

      {/* Top delicate monogram / crest */}
      <div className="relative z-10 pt-4 flex flex-col items-center justify-center gap-2">
        <div className="flex items-center justify-center gap-2">
          <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-[#C7A56B]/60" />
          <span className="font-romantic text-xs sm:text-sm tracking-[0.25em] uppercase text-[#E8BFC8]/90 font-medium">
            Para Sofía
          </span>
          <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-[#C7A56B]/60" />
        </div>

        {/* Permanent, unchangeable author badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#20050E]/80 border border-[#C7A56B]/60 shadow-md backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C7A56B]" />
          <p className="font-romantic text-xs sm:text-sm tracking-[0.18em] text-[#FFF8F2] uppercase font-semibold select-none">
            Escrito por Juan Téllez
          </p>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C7A56B]" />
        </div>
      </div>

      {/* Center Cinematic Card & Portrait */}
      <div className="relative z-10 w-full max-w-sm sm:max-w-md mx-auto my-auto flex flex-col items-center">
        {/* Hero Portrait Frame */}
        <div className="relative group mb-6 sm:mb-8">
          {/* Subtle Outer Golden Glow Ring */}
          <div className="absolute -inset-1.5 rounded-[2.5rem] bg-gradient-to-b from-[#C7A56B]/40 via-[#7C2439]/30 to-[#E8BFC8]/20 blur-md opacity-75" />
          
          <div className="relative w-[210px] h-[280px] sm:w-[240px] sm:h-[320px] rounded-[2.25rem] overflow-hidden border border-[#C7A56B]/40 shadow-2xl shadow-[#20050E]/80 bg-[#250913]">
            <img
              src={HERO_PHOTO.mobile}
              srcSet={`${HERO_PHOTO.mobile} 720w, ${HERO_PHOTO.desktop} 1440w`}
              sizes="(max-width: 640px) 240px, 320px"
              alt={HERO_PHOTO.alt}
              fetchPriority="high"
              width={HERO_PHOTO.mobileWidth}
              height={HERO_PHOTO.mobileHeight}
              style={{ objectPosition: HERO_PHOTO.objectPosition || 'center 25%' }}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* Soft inner vignette gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#3D101F]/80 via-transparent to-black/10 pointer-events-none" />
          </div>

          {/* Little floating romantic badge */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#3D101F]/90 border border-[#C7A56B]/40 backdrop-blur-md flex items-center gap-1.5 shadow-lg">
            <Heart className="w-3.5 h-3.5 text-[#E8BFC8] fill-[#E8BFC8]" />
            <span className="text-[11px] font-romantic tracking-widest text-[#FFF8F2]">
              UNA DECLARACIÓN
            </span>
          </div>
        </div>

        {/* Narrative Opening Typography */}
        <div className="space-y-3 px-2">
          <h1 className="font-romantic text-2xl sm:text-3xl md:text-4xl text-[#FFF8F2] font-semibold leading-snug tracking-tight">
            «Sofía, hay algo muy bonito que quiero que sepas…»
          </h1>
          <p className="font-romantic italic text-base sm:text-lg text-[#E8BFC8] font-normal leading-relaxed">
            «Hoy quiero abrirte mi corazón.»
          </p>
        </div>
      </div>

      {/* Call to Action Button & Scroll Hint */}
      <div className="relative z-10 w-full max-w-xs flex flex-col items-center gap-3 pb-safe pt-4">
        <button
          onClick={handleStartExperience}
          id="btn-discover-message"
          aria-label="Descubre mi mensaje de amor para Sofía"
          className="group relative w-full h-[50px] min-h-[48px] rounded-full bg-gradient-to-r from-[#7C2439] via-[#942C45] to-[#7C2439] text-[#FFF8F2] font-medium text-base tracking-wide flex items-center justify-center gap-2.5 px-6 shadow-xl shadow-[#7C2439]/30 border border-[#C7A56B]/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:border-[#C7A56B]/80 hover:shadow-[#C7A56B]/20 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C7A56B]"
        >
          <span>Descubre mi mensaje</span>
          <Heart className="w-4 h-4 text-[#E8BFC8] fill-[#E8BFC8] transition-transform group-hover:scale-125" />
        </button>

        <button
          onClick={handleStartExperience}
          aria-label="Desplazarse hacia abajo"
          className="text-[#E8BFC8]/60 hover:text-[#FFF8F2] transition-colors p-2 flex items-center gap-1 text-xs tracking-wider font-romantic"
        >
          <span>Desliza para leer</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
        </button>
      </div>
    </header>
  );
};
