import React, { useState, useEffect } from 'react';
import { CLIMAX_PHOTO } from '../../data/photos';
import { Heart, Sparkles, ChevronDown } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ClimaxScene: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  const [hasTriggeredConfetti, setHasTriggeredConfetti] = useState(false);

  const lines = [
    "«Admiro tu corazón.»",
    "«Admiro tu esfuerzo.»",
    "«Admiro tus ganas de crecer.»",
    "«Amo tu forma de ser.»"
  ];

  // Progressive reveal timer
  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => {
        if (prev < lines.length) {
          return prev + 1;
        }
        return prev;
      });
    }, 1800);

    return () => clearInterval(timer);
  }, [lines.length]);

  // When step reaches final climax
  useEffect(() => {
    if (step >= lines.length && !hasTriggeredConfetti) {
      setHasTriggeredConfetti(true);
      try {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#E8BFC8', '#C7A56B', '#7C2439', '#FFF8F2']
        });
      } catch {
        // Safe fallback
      }
    }
  }, [step, lines.length, hasTriggeredConfetti]);

  const handleRevealAll = () => {
    setStep(lines.length);
  };

  return (
    <section 
      id="te-amo" 
      className="relative min-h-[100svh] w-full flex flex-col justify-between items-center text-center px-4 sm:px-6 py-12 overflow-hidden bg-black"
    >
      {/* Background Cinematic Image with Ken-Burns and Overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={CLIMAX_PHOTO.mobile}
          srcSet={`${CLIMAX_PHOTO.mobile} 720w, ${CLIMAX_PHOTO.desktop} 1206w`}
          sizes="100vw"
          alt={CLIMAX_PHOTO.alt}
          loading="lazy"
          width={CLIMAX_PHOTO.mobileWidth}
          height={CLIMAX_PHOTO.mobileHeight}
          style={{ objectPosition: CLIMAX_PHOTO.objectPosition || 'center 25%' }}
          className="w-full h-full object-cover opacity-45 scale-105 transition-transform duration-[12000ms] ease-out transform"
        />
        {/* Deep romantic gradient scrims */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#20050E] via-[#3D101F]/80 to-[#20050E]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(32,5,14,0.7)_100%)]" />
      </div>

      {/* Top subtle intro */}
      <div className="relative z-10 pt-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-[#C7A56B]/30">
          <Sparkles className="w-3.5 h-3.5 text-[#C7A56B]" />
          <span className="font-romantic text-xs tracking-widest text-[#FFF8F2] uppercase">
            Lo que llevo en el alma
          </span>
        </div>
      </div>

      {/* Center Progressive Text Reveal Area */}
      <div className="relative z-10 w-full max-w-lg mx-auto my-auto flex flex-col items-center justify-center space-y-6 sm:space-y-8 py-8">
        
        {/* Sequential lines */}
        <div className="space-y-3.5 sm:space-y-4 w-full">
          {lines.map((line, index) => {
            const isVisible = step > index;
            return (
              <div
                key={line}
                className={`transition-all duration-700 transform ${
                  isVisible 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
                }`}
              >
                <p className="font-romantic text-xl sm:text-2xl md:text-3xl text-[#E8BFC8] font-normal italic tracking-wide">
                  {line}
                </p>
              </div>
            );
          })}
        </div>

        {/* Grand Final Declaration: TE AMO, SOFÍA */}
        <div 
          className={`transition-all duration-1000 transform delay-300 pt-4 sm:pt-6 ${
            step >= lines.length 
              ? 'opacity-100 scale-100 translate-y-0' 
              : 'opacity-0 scale-90 translate-y-8 pointer-events-none'
          }`}
        >
          <div className="relative inline-block px-6 py-4 rounded-3xl bg-black/40 backdrop-blur-md border border-[#C7A56B]/50 shadow-2xl">
            <h2 className="font-romantic text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#FFF8F2] drop-shadow-[0_4px_24px_rgba(199,165,107,0.35)]">
              TE AMO, SOFÍA.
            </h2>
            <div className="flex items-center justify-center gap-2 mt-2">
              <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-[#E8BFC8] fill-[#7C2439] animate-pulse" />
            </div>
          </div>
        </div>

        {/* Immediate Continue / Fast-Forward if desired */}
        {step < lines.length && (
          <button
            onClick={handleRevealAll}
            className="text-xs text-[#E8BFC8]/60 hover:text-[#FFF8F2] underline underline-offset-4 font-romantic transition-colors pt-2 cursor-pointer"
          >
            Ver la declaración completa ✨
          </button>
        )}
      </div>

      {/* Bottom Scroll Hint to Next Section */}
      <div className="relative z-10 pb-safe">
        <a
          href="#galeria"
          className="text-[#E8BFC8]/70 hover:text-white transition-colors p-2 flex items-center gap-1.5 text-xs tracking-wider font-romantic"
        >
          <span>Nuestros momentos y recuerdos</span>
          <ChevronDown className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
};
