import React from 'react';
import { PHOTOS, type PhotoItem } from '../../data/photos';
import { Sparkles } from 'lucide-react';

interface LoveLetterSectionProps {
  onPhotoClick: (photo: PhotoItem) => void;
}

export const LoveLetterSection: React.FC<LoveLetterSectionProps> = ({ onPhotoClick }) => {
  return (
    <section 
      id="carta" 
      className="relative w-full bg-[#FFF8F2] text-[#3D101F] px-4 sm:px-6 py-16 sm:py-24 overflow-hidden"
    >
      {/* Decorative Warm Ivory Ambient Background Accents */}
      <div 
        className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[#E8BFC8]/30 blur-3xl pointer-events-none"
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-1/3 left-0 w-80 h-80 rounded-full bg-[#C7A56B]/15 blur-3xl pointer-events-none"
        aria-hidden="true" 
      />

      <div className="relative max-w-xl mx-auto flex flex-col space-y-12 sm:space-y-16">
        
        {/* Letter Header / Letterhead */}
        <div className="text-center space-y-3 border-b border-[#C7A56B]/30 pb-8">
          <div className="inline-flex items-center justify-center gap-2 text-[#7C2439]">
            <Sparkles className="w-4 h-4 text-[#C7A56B]" />
            <span className="font-romantic text-xs tracking-[0.28em] uppercase font-semibold text-[#7C2439]">
              Carta desde el corazón
            </span>
            <Sparkles className="w-4 h-4 text-[#C7A56B]" />
          </div>
          <h2 className="font-romantic text-3xl sm:text-4xl text-[#3D101F] font-bold tracking-tight">
            Para ti, Sofía
          </h2>
          <p className="font-romantic italic text-base sm:text-lg text-[#7C2439]/80">
            Palabras sinceras que nacen de lo que siento por ti
          </p>
        </div>

        {/* Fragment 1: Opening devotion */}
        <div className="relative bg-white/70 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-[#E8BFC8]/50 shadow-sm">
          <span className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-[#7C2439] text-[#FFF8F2] text-[11px] font-romantic tracking-widest uppercase">
            Capítulo I
          </span>
          <p className="font-romantic text-xl sm:text-2xl text-[#3D101F] leading-relaxed font-medium">
            «Sofía, quiero que sepas lo muchísimo que te amo y lo especial que eres para mí.»
          </p>
          <div className="mt-4 pt-4 border-t border-[#E8BFC8]/40">
            <p className="text-base sm:text-[17px] text-[#4A1728] leading-relaxed font-normal">
              Admiro muchísimo la persona que eres. Me parece preciosa tu forma de ser, tu corazón, tu esencia y esa belleza que no depende solamente de lo que se ve por fuera, sino de todo lo bonito que llevas dentro.
            </p>
          </div>
        </div>

        {/* Editorial Photo Duo (Photos 3 & 6) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 items-center">
          {/* Photo 1: Radiant joy */}
          <figure 
            onClick={() => onPhotoClick(PHOTOS[0])}
            className="group cursor-pointer rounded-2xl overflow-hidden border border-[#C7A56B]/30 bg-[#FFF8F2] shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-[#2D0B16]">
              <img
                src={PHOTOS[0].mobile}
                srcSet={`${PHOTOS[0].mobile} 720w, ${PHOTOS[0].desktop} 1206w`}
                sizes="(max-width: 640px) 100vw, 300px"
                alt={PHOTOS[0].alt}
                loading="lazy"
                width={PHOTOS[0].mobileWidth}
                height={PHOTOS[0].mobileHeight}
                style={{ objectPosition: PHOTOS[0].objectPosition }}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#20050E]/70 via-transparent to-transparent flex items-end p-4">
                <span className="font-romantic text-xs text-[#FFF8F2] tracking-wider">
                  {PHOTOS[0].title}
                </span>
              </div>
            </div>
            <figcaption className="p-3 bg-white text-center">
              <p className="font-romantic italic text-xs text-[#7C2439]">
                {PHOTOS[0].storyCaption}
              </p>
            </figcaption>
          </figure>

          {/* Photo 6: Emerald radiance */}
          <figure 
            onClick={() => onPhotoClick(PHOTOS[5])}
            className="group cursor-pointer rounded-2xl overflow-hidden border border-[#C7A56B]/30 bg-[#FFF8F2] shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-[#2D0B16]">
              <img
                src={PHOTOS[5].mobile}
                srcSet={`${PHOTOS[5].mobile} 720w, ${PHOTOS[5].desktop} 1206w`}
                sizes="(max-width: 640px) 100vw, 300px"
                alt={PHOTOS[5].alt}
                loading="lazy"
                width={PHOTOS[5].mobileWidth}
                height={PHOTOS[5].mobileHeight}
                style={{ objectPosition: PHOTOS[5].objectPosition }}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#20050E]/70 via-transparent to-transparent flex items-end p-4">
                <span className="font-romantic text-xs text-[#FFF8F2] tracking-wider">
                  {PHOTOS[5].title}
                </span>
              </div>
            </div>
            <figcaption className="p-3 bg-white text-center">
              <p className="font-romantic italic text-xs text-[#7C2439]">
                {PHOTOS[5].storyCaption}
              </p>
            </figcaption>
          </figure>
        </div>

        {/* Fragment 2: Admiration of effort and dedication */}
        <div className="relative bg-white/70 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-[#C7A56B]/40 shadow-sm space-y-4">
          <span className="inline-block px-3 py-0.5 rounded-full bg-[#C7A56B] text-[#20050E] text-[11px] font-romantic tracking-widest uppercase font-semibold">
            Capítulo II
          </span>
          <p className="text-base sm:text-[17px] text-[#4A1728] leading-relaxed font-normal">
            Admiro la forma en que te esfuerzas, la dedicación que pones en las cosas que haces y esas ganas tan sinceras de salir adelante, de aprender y de superarte constantemente.
          </p>
          <div className="p-4 rounded-2xl bg-[#FFF8F2] border-l-4 border-[#7C2439] my-2">
            <p className="font-romantic text-lg sm:text-xl text-[#3D101F] italic leading-relaxed">
              «Sé que no siempre es fácil, que a veces el cansancio pesa o los días se vuelven exigentes, pero ver cómo sigues adelante con paciencia y entereza me parece algo profundamente admirable.»
            </p>
          </div>
          <p className="text-base sm:text-[17px] text-[#4A1728] leading-relaxed font-normal">
            Tu valor está en cada paso que das, en no rendirte y en seguir construyendo tu camino con dignidad y nobleza.
          </p>
        </div>

        {/* Fragment 3: Reassurance and seeing through loving eyes */}
        <div className="relative bg-white/70 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-[#E8BFC8]/50 shadow-sm space-y-4">
          <span className="inline-block px-3 py-0.5 rounded-full bg-[#7C2439] text-[#FFF8F2] text-[11px] font-romantic tracking-widest uppercase">
            Capítulo III
          </span>
          <p className="text-base sm:text-[17px] text-[#4A1728] leading-relaxed font-normal">
            Pero también quiero recordarte algo: no necesitas ser perfecta ni demostrar constantemente cuánto vales. Tu valor no depende de lo que consigas cada día. Hay algo maravilloso en la persona que eres ahora mismo, incluso mientras sigues aprendiendo y creciendo.
          </p>
          <p className="font-romantic text-lg sm:text-xl text-[#7C2439] leading-relaxed italic">
            Ojalá pudieras verte por un instante con los ojos con los que yo te veo. Quizá entenderías por qué te admiro tanto, por qué me parece tan bonita tu esencia y por qué siento todo este amor por ti.
          </p>
        </div>

        {/* Full-width editorial featured portrait (Photo 13: Classic elegance in garden) */}
        <figure 
          onClick={() => onPhotoClick(PHOTOS[12])}
          className="group cursor-pointer rounded-3xl overflow-hidden border border-[#C7A56B]/40 shadow-xl bg-white transition-all duration-300 hover:shadow-2xl"
        >
          <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-[#2D0B16]">
            <img
              src={PHOTOS[12].mobile}
              srcSet={`${PHOTOS[12].mobile} 720w, ${PHOTOS[12].desktop} 1206w`}
              sizes="(max-width: 640px) 100vw, 600px"
              alt={PHOTOS[12].alt}
              loading="lazy"
              width={PHOTOS[12].mobileWidth}
              height={PHOTOS[12].mobileHeight}
              style={{ objectPosition: PHOTOS[12].objectPosition }}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3D101F]/80 via-transparent to-transparent flex items-end p-6">
              <div className="text-white">
                <p className="font-romantic text-lg sm:text-xl font-medium text-[#FFF8F2]">
                  {PHOTOS[12].title}
                </p>
                <p className="font-romantic italic text-sm text-[#E8BFC8]">
                  {PHOTOS[12].storyCaption}
                </p>
              </div>
            </div>
          </div>
        </figure>

        {/* Fragment 4: Declaration climax of the letter */}
        <div className="relative bg-gradient-to-b from-white to-[#FFF4EC] p-6 sm:p-10 rounded-3xl border border-[#7C2439]/30 shadow-md space-y-5 text-center">
          <p className="text-base sm:text-[17px] text-[#4A1728] leading-relaxed">
            No quiero que estas palabras sean solo un texto bonito en una pantalla. Quiero que sepas que son una forma de mostrarte algo que llevo en el corazón.
          </p>
          <div className="py-2">
            <p className="font-romantic text-2xl sm:text-3xl text-[#7C2439] font-bold leading-snug">
              «Te amo, Sofía. Amo la persona que eres, admiro tu esfuerzo y me parece profundamente bonita esa voluntad tuya de seguir adelante y convertirte en quien deseas ser.»
            </p>
          </div>
          <p className="text-sm sm:text-base text-[#5A1C30] leading-relaxed italic">
            Hoy quería que lo supieras, sin esconder mis sentimientos y sin guardarme estas palabras que significan tanto para mí.
          </p>
        </div>

      </div>
    </section>
  );
};
