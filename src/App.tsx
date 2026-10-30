import React, { useState, useCallback, useEffect } from 'react';
import { HeroSection } from './components/romantic/HeroSection';
import { LoveLetterSection } from './components/romantic/LoveLetterSection';
import { AdmirationSection } from './components/romantic/AdmirationSection';
import { ClimaxScene } from './components/romantic/ClimaxScene';
import { MemoriesGallerySection } from './components/romantic/MemoriesGallerySection';
import { ClosingSection } from './components/romantic/ClosingSection';
import { MusicFloatingControl } from './components/romantic/MusicFloatingControl';
import { PhotoLightboxModal } from './components/romantic/PhotoLightboxModal';
import { type PhotoItem } from './data/photos';
import { romanticAudio } from './services/audioPlayer';

export const App: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  useEffect(() => {
    romanticAudio.bindUserInteraction();
  }, []);

  const handleGlobalTouchOrClick = useCallback(() => {
    const status = romanticAudio.getStatus();
    if (!status.isPlaying) {
      romanticAudio.play();
    }
  }, []);

  const handleOpenPhoto = useCallback((photo: PhotoItem) => {
    setSelectedPhoto(photo);
  }, []);

  const handleClosePhoto = useCallback(() => {
    setSelectedPhoto(null);
  }, []);

  const handleDiscoverClick = useCallback(() => {
    romanticAudio.play();
    const cartaEl = document.getElementById('carta');
    if (cartaEl) {
      cartaEl.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div 
      onClick={handleGlobalTouchOrClick}
      onTouchStart={handleGlobalTouchOrClick}
      className="min-h-screen w-full bg-[#3D101F] text-[#FFF8F2] font-sans relative selection:bg-[#7C2439] selection:text-white overflow-x-hidden"
    >
      
      {/* Discreet floating music player */}
      <MusicFloatingControl />

      {/* Main Narrative Flow - Mobile First */}
      <main className="w-full flex flex-col">
        {/* 1. Cinematic Opening */}
        <HeroSection onDiscoverClick={handleDiscoverClick} />

        {/* 2. The Love Letter (Warm Ivory) */}
        <LoveLetterSection onPhotoClick={handleOpenPhoto} />

        {/* 3. Special Admiration Section (5 aspects) */}
        <AdmirationSection onPhotoClick={handleOpenPhoto} />

        {/* 4. Climax Scene: "TE AMO, SOFÍA" */}
        <ClimaxScene />

        {/* 5. Editorial Gallery with all 17 Photos */}
        <MemoriesGallerySection onPhotoClick={handleOpenPhoto} />

        {/* 6. Warm Closing Scene */}
        <ClosingSection onPhotoClick={handleOpenPhoto} />
      </main>

      {/* Fullscreen Photo Lightbox Modal for any of the 17 photos */}
      <PhotoLightboxModal
        photo={selectedPhoto}
        onClose={handleClosePhoto}
        onSelectPhoto={handleOpenPhoto}
      />
    </div>
  );
};

export default App;
