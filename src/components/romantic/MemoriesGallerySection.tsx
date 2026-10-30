import React, { useState } from 'react';
import { PHOTOS, type PhotoItem } from '../../data/photos';
import { Sparkles, Maximize2, Heart } from 'lucide-react';

interface MemoriesGallerySectionProps {
  onPhotoClick: (photo: PhotoItem) => void;
}

export const MemoriesGallerySection: React.FC<MemoriesGallerySectionProps> = ({ onPhotoClick }) => {
  const [filter, setFilter] = useState<'all' | 'admiration' | 'featured' | 'spontaneous'>('all');

  const filteredPhotos = PHOTOS.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'admiration') return p.category === 'admiration' || p.category === 'hero';
    if (filter === 'featured') return p.category === 'featured' || p.category === 'climax';
    if (filter === 'spontaneous') return p.category === 'gallery' || p.category === 'closing' || p.id === 11 || p.id === 13;
    return true;
  });

  return (
    <section 
      id="galeria" 
      className="relative w-full bg-[#20050E] text-[#FFF8F2] px-4 sm:px-6 py-16 sm:py-24 overflow-hidden border-t border-[#C7A56B]/20"
    >
      {/* Decorative Orbs */}
      <div 
        className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-[#7C2439]/25 blur-[90px] pointer-events-none"
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-1/4 -left-20 w-80 h-80 rounded-full bg-[#C7A56B]/15 blur-[90px] pointer-events-none"
        aria-hidden="true" 
      />

      <div className="relative max-w-4xl mx-auto flex flex-col space-y-10 sm:space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-[#C7A56B]">
            <Sparkles className="w-4 h-4 text-[#C7A56B]" />
            <span className="font-romantic text-xs tracking-[0.25em] uppercase font-semibold">
              Galería Editorial
            </span>
            <Sparkles className="w-4 h-4 text-[#C7A56B]" />
          </div>
          <h2 className="font-romantic text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFF8F2]">
            Cada recuerdo, un tesoro
          </h2>
          <p className="font-romantic italic text-base sm:text-lg text-[#E8BFC8]/85 max-w-md mx-auto">
            17 instantes que reflejan tu belleza, tu sonrisa, tu autenticidad y tu forma de iluminar la vida.
          </p>
        </div>

        {/* Featured Editorial Quote */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#3D101F] to-[#4A1728] border border-[#C7A56B]/30 text-center shadow-lg">
          <Heart className="w-5 h-5 text-[#C7A56B] mx-auto mb-2 fill-current" />
          <blockquote className="font-romantic text-xl sm:text-2xl italic text-[#FFF8F2] leading-relaxed">
            «Si pudiera regalarte algo, sería la posibilidad de verte por un instante con los ojos con los que yo te veo.»
          </blockquote>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-xs font-romantic tracking-wider uppercase transition-all duration-200 cursor-pointer ${
              filter === 'all' 
                ? 'bg-[#C7A56B] text-[#3D101F] font-bold shadow-md' 
                : 'bg-white/5 text-[#E8BFC8] hover:bg-white/10'
            }`}
          >
            Todas las 17 fotos ({PHOTOS.length})
          </button>
          <button
            onClick={() => setFilter('admiration')}
            className={`px-4 py-2 rounded-full text-xs font-romantic tracking-wider uppercase transition-all duration-200 cursor-pointer ${
              filter === 'admiration' 
                ? 'bg-[#C7A56B] text-[#3D101F] font-bold shadow-md' 
                : 'bg-white/5 text-[#E8BFC8] hover:bg-white/10'
            }`}
          >
            Esencia y admiración
          </button>
          <button
            onClick={() => setFilter('featured')}
            className={`px-4 py-2 rounded-full text-xs font-romantic tracking-wider uppercase transition-all duration-200 cursor-pointer ${
              filter === 'featured' 
                ? 'bg-[#C7A56B] text-[#3D101F] font-bold shadow-md' 
                : 'bg-white/5 text-[#E8BFC8] hover:bg-white/10'
            }`}
          >
            Luz y elegancia
          </button>
          <button
            onClick={() => setFilter('spontaneous')}
            className={`px-4 py-2 rounded-full text-xs font-romantic tracking-wider uppercase transition-all duration-200 cursor-pointer ${
              filter === 'spontaneous' 
                ? 'bg-[#C7A56B] text-[#3D101F] font-bold shadow-md' 
                : 'bg-white/5 text-[#E8BFC8] hover:bg-white/10'
            }`}
          >
            Espontaneidad sincera
          </button>
        </div>

        {/* Mobile-first Asymmetric Editorial Layout:
            On mobile: alternating full-width cards and 2-column paired cards.
            On tablet/desktop: dynamic 2-3 column responsive masonry.
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredPhotos.map((photo, i) => {
            // Give specific photos wider prominence
            const isWide = (i % 5 === 0) && filteredPhotos.length > 3;

            return (
              <figure
                key={photo.id}
                onClick={() => onPhotoClick(photo)}
                className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#C7A56B]/30 bg-[#2E0B17] shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl hover:border-[#C7A56B]/70 ${
                  isWide ? 'sm:col-span-2' : ''
                }`}
              >
                {/* Photo Container */}
                <div 
                  className="relative w-full overflow-hidden" 
                  style={{ 
                    aspectRatio: isWide ? '16/10' : photo.aspectRatio > 1.2 ? '4/3' : '3/4' 
                  }}
                >
                  <img
                    src={photo.thumb}
                    srcSet={`${photo.thumb} 400w, ${photo.mobile} 720w, ${photo.desktop} 1440w`}
                    sizes={isWide ? "(max-width: 640px) 100vw, 800px" : "(max-width: 640px) 100vw, 400px"}
                    alt={photo.alt}
                    loading="lazy"
                    width={photo.mobileWidth}
                    height={photo.mobileHeight}
                    style={{ objectPosition: photo.objectPosition || 'center center' }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-85 sm:opacity-60 group-hover:opacity-90 transition-opacity" />

                  {/* Top identifier tag */}
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-romantic tracking-widest text-[#FFF8F2]">
                    #{photo.id}
                  </div>

                  {/* Top expand icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-[#E8BFC8] opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>

                  {/* Bottom Caption always visible on mobile for immediate reading */}
                  <figcaption className="absolute bottom-0 inset-x-0 p-4 text-left">
                    <p className="font-romantic text-base font-semibold text-[#FFF8F2] leading-tight">
                      {photo.title}
                    </p>
                    {photo.storyCaption && (
                      <p className="font-romantic italic text-xs sm:text-sm text-[#E8BFC8] mt-1 leading-snug">
                        {photo.storyCaption}
                      </p>
                    )}
                  </figcaption>
                </div>
              </figure>
            );
          })}
        </div>

        {/* Gentle note */}
        <div className="text-center pt-4">
          <p className="font-romantic italic text-sm text-[#E8BFC8]/70">
            «Toca cualquier fotografía para apreciarla en pantalla completa con todos sus detalles»
          </p>
        </div>

      </div>
    </section>
  );
};
