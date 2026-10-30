import React, { useState } from 'react';
import { ADMIRATION_ITEMS, type PhotoItem } from '../../data/photos';
import { Heart, ChevronRight, Sparkles } from 'lucide-react';

interface AdmirationSectionProps {
  onPhotoClick: (photo: PhotoItem) => void;
}

export const AdmirationSection: React.FC<AdmirationSectionProps> = ({ onPhotoClick }) => {
  const [activeItem, setActiveItem] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setActiveItem(activeItem === idx ? null : idx);
  };

  return (
    <section 
      id="admiracion" 
      className="relative w-full bg-[#3D101F] text-[#FFF8F2] px-4 sm:px-6 py-16 sm:py-24 overflow-hidden"
    >
      {/* Background radial glow */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[#7C2439]/35 blur-[100px] pointer-events-none" 
        aria-hidden="true"
      />

      <div className="relative max-w-xl mx-auto flex flex-col space-y-12">
        
        {/* Section Title */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center gap-2 text-[#C7A56B]">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span className="font-romantic text-xs tracking-[0.25em] uppercase font-semibold">
              Lo que veo en ti
            </span>
            <Heart className="w-3.5 h-3.5 fill-current" />
          </div>
          <h2 className="font-romantic text-3xl sm:text-4xl md:text-5xl text-[#FFF8F2] font-bold tracking-tight">
            Lo que admiro de ti
          </h2>
          <p className="font-romantic italic text-base sm:text-lg text-[#E8BFC8]/85 max-w-md mx-auto leading-relaxed">
            Cinco razones que hacen que mi corazón sienta un orgullo inmenso por la persona que eres.
          </p>
        </div>

        {/* Featured Quote Divider */}
        <div className="p-6 rounded-2xl bg-[#7C2439]/30 border border-[#C7A56B]/30 text-center backdrop-blur-sm">
          <p className="font-romantic text-lg sm:text-xl italic text-[#FFF8F2] leading-relaxed">
            «Tu esfuerzo merece ser visto, valorado y reconocido.»
          </p>
        </div>

        {/* Vertical Sequence of 5 Admiration Blocks */}
        <div className="space-y-6">
          {ADMIRATION_ITEMS.map((item, idx) => {
            const isExpanded = activeItem === idx;
            const romanNumerals = ['I', 'II', 'III', 'IV', 'V'];

            return (
              <article 
                key={item.title}
                className={`relative rounded-3xl transition-all duration-300 border ${
                  isExpanded 
                    ? 'bg-gradient-to-b from-[#4A1728] to-[#340C1A] border-[#C7A56B]/60 shadow-xl shadow-[#20050E]/60' 
                    : 'bg-[#4A1728]/40 border-white/10 hover:border-[#E8BFC8]/30 hover:bg-[#4A1728]/60'
                } overflow-hidden`}
              >
                {/* Header button (touch friendly) */}
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#C7A56B]"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-4">
                    <span className="w-9 h-9 rounded-full bg-[#3D101F] border border-[#C7A56B]/40 flex items-center justify-center font-romantic text-xs sm:text-sm text-[#C7A56B] font-semibold flex-shrink-0">
                      {romanNumerals[idx]}
                    </span>
                    <div>
                      <h3 className="font-romantic text-xl sm:text-2xl font-bold text-[#FFF8F2] leading-tight">
                        {item.title}
                      </h3>
                      <p className="font-romantic text-xs sm:text-sm text-[#E8BFC8]/80 italic mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className={`w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#E8BFC8] transition-transform duration-300 ${isExpanded ? 'rotate-90 bg-[#7C2439] text-white border-[#C7A56B]/40' : ''}`}>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </button>

                {/* Body Content */}
                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 space-y-5 animate-in fade-in duration-300">
                    {/* Dedicated Photo */}
                    <figure 
                      onClick={() => onPhotoClick(item.photo)}
                      className="group cursor-pointer rounded-2xl overflow-hidden border border-[#C7A56B]/40 bg-[#250913] shadow-md relative"
                    >
                      <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden">
                        <img
                          src={item.photo.mobile}
                          srcSet={`${item.photo.mobile} 720w, ${item.photo.desktop} 1440w`}
                          sizes="(max-width: 640px) 100vw, 600px"
                          alt={item.photo.alt}
                          loading="lazy"
                          width={item.photo.mobileWidth}
                          height={item.photo.mobileHeight}
                          style={{ objectPosition: item.photo.objectPosition || 'center center' }}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                          <p className="font-romantic italic text-xs text-[#FFF8F2]">
                            Toca para ver en grande ✨
                          </p>
                        </div>
                      </div>
                    </figure>

                    {/* Description Text */}
                    <div className="bg-black/20 p-4 rounded-2xl border border-white/5">
                      <p className="text-base sm:text-[17px] text-[#FFF8F2]/95 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* Bottom Inspiring Quote */}
        <div className="text-center pt-4 space-y-2">
          <Sparkles className="w-5 h-5 text-[#C7A56B] mx-auto animate-pulse" />
          <p className="font-romantic text-lg sm:text-xl italic text-[#E8BFC8]">
            «Te admiro por todo lo que eres y por las ganas que tienes de seguir creciendo.»
          </p>
        </div>

      </div>
    </section>
  );
};
