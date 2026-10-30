import React, { useEffect, useCallback } from 'react';
import { PHOTOS, type PhotoItem } from '../../data/photos';
import { X, ChevronLeft, ChevronRight, Heart } from 'lucide-react';

interface PhotoLightboxModalProps {
  photo: PhotoItem | null;
  onClose: () => void;
  onSelectPhoto: (photo: PhotoItem) => void;
}

export const PhotoLightboxModal: React.FC<PhotoLightboxModalProps> = ({
  photo,
  onClose,
  onSelectPhoto
}) => {
  const currentIndex = photo ? PHOTOS.findIndex((p) => p.id === photo.id) : -1;

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onSelectPhoto(PHOTOS[currentIndex - 1]);
    } else {
      onSelectPhoto(PHOTOS[PHOTOS.length - 1]);
    }
  }, [currentIndex, onSelectPhoto]);

  const handleNext = useCallback(() => {
    if (currentIndex < PHOTOS.length - 1) {
      onSelectPhoto(PHOTOS[currentIndex + 1]);
    } else {
      onSelectPhoto(PHOTOS[0]);
    }
  }, [currentIndex, onSelectPhoto]);

  // Keyboard navigation & Esc key
  useEffect(() => {
    if (!photo) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [photo, onClose, handlePrev, handleNext]);

  if (!photo) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-3 sm:p-6 transition-all duration-300 animate-in fade-in"
      role="dialog"
      aria-modal="true"
      aria-label={`Detalle de fotografía: ${photo.title}`}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Cerrar modal"
        className="absolute top-4 right-4 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-[#FFF8F2] border border-white/20 flex items-center justify-center transition-transform hover:scale-110 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C7A56B]"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Prev button */}
      <button
        onClick={handlePrev}
        aria-label="Fotografía anterior"
        className="absolute left-3 sm:left-6 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-black/80 text-[#FFF8F2] border border-white/20 flex items-center justify-center transition-transform hover:scale-110 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C7A56B]"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={handleNext}
        aria-label="Siguiente fotografía"
        className="absolute right-3 sm:right-6 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-black/80 text-[#FFF8F2] border border-white/20 flex items-center justify-center transition-transform hover:scale-110 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C7A56B]"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Center Image Container */}
      <div className="relative max-w-2xl max-h-[92vh] w-full flex flex-col items-center justify-center">
        <div className="relative rounded-2xl overflow-hidden border border-[#C7A56B]/40 shadow-2xl bg-[#1A050B] max-h-[76vh] flex items-center justify-center">
          <img
            src={photo.desktop}
            srcSet={`${photo.mobile} 720w, ${photo.desktop} 1440w`}
            sizes="(max-width: 640px) 95vw, 800px"
            alt={photo.alt}
            className="max-h-[74vh] max-w-full object-contain rounded-xl"
          />
        </div>

        {/* Modal Caption Card */}
        <div className="w-full max-w-md mt-4 text-center px-4 py-2">
          <div className="flex items-center justify-center gap-2">
            <Heart className="w-3.5 h-3.5 text-[#E8BFC8] fill-current" />
            <span className="font-romantic text-xs tracking-widest text-[#C7A56B] uppercase">
              Foto {currentIndex + 1} de {PHOTOS.length}
            </span>
          </div>
          <h3 className="font-romantic text-lg sm:text-xl font-bold text-[#FFF8F2] mt-0.5">
            {photo.title}
          </h3>
          {photo.storyCaption && (
            <p className="font-romantic italic text-sm text-[#E8BFC8] mt-1 leading-snug">
              {photo.storyCaption}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
