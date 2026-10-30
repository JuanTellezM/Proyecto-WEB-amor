import React, { useState, useEffect } from 'react';
import { romanticAudio } from '../../services/audioPlayer';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

export const MusicFloatingControl: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const unsubscribe = romanticAudio.subscribe((playing, muted) => {
      setIsPlaying(playing);
      setIsMuted(muted);
    });
    return unsubscribe;
  }, []);

  const handleTogglePlay = async () => {
    await romanticAudio.togglePlay();
  };

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    romanticAudio.toggleMute();
  };

  return (
    <aside 
      aria-label="Controles de música romántica"
      className="fixed top-4 right-4 z-40"
    >
      <div 
        className={`flex items-center gap-2 p-1.5 rounded-full backdrop-blur-md border transition-all duration-300 shadow-lg ${
          isPlaying 
            ? 'bg-[#3D101F]/90 border-[#C7A56B]/60 pr-3 shadow-[#C7A56B]/20' 
            : 'bg-black/50 hover:bg-black/70 border-white/20'
        }`}
      >
        {/* Main Play / Pause Button */}
        <button
          onClick={handleTogglePlay}
          aria-label={isPlaying ? "Pausar melodía romántica" : "Reproducir melodía romántica"}
          className="w-10 h-10 min-w-[40px] rounded-full bg-[#7C2439] hover:bg-[#942C45] text-[#FFF8F2] flex items-center justify-center transition-transform hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C7A56B]"
          title={isPlaying ? "Pausar música" : "Escuchar melodía romántica"}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 fill-current" />
          ) : (
            <Play className="w-4 h-4 fill-current ml-0.5" />
          )}
        </button>

        {/* Dynamic status and mute button when playing */}
        {isPlaying ? (
          <div className="flex items-center gap-2">
            {/* Visual sound bar indicator */}
            <div className="flex items-end gap-0.5 h-3.5 px-1" aria-hidden="true">
              <span className="w-1 bg-[#C7A56B] rounded-full h-2 animate-pulse" />
              <span className="w-1 bg-[#E8BFC8] rounded-full h-3.5 animate-pulse delay-75" />
              <span className="w-1 bg-[#FFF8F2] rounded-full h-2.5 animate-pulse delay-150" />
            </div>

            <button
              onClick={handleToggleMute}
              aria-label={isMuted ? "Activar sonido" : "Silenciar música"}
              className="p-1 text-[#E8BFC8] hover:text-white transition-colors cursor-pointer"
              title={isMuted ? "Activar sonido" : "Silenciar"}
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-red-300" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </button>
          </div>
        ) : (
          <button
            onClick={handleTogglePlay}
            className="text-xs font-romantic text-[#E8BFC8] hover:text-white px-2.5 transition-colors cursor-pointer flex items-center gap-1"
          >
            <span>Activar música ♫</span>
          </button>
        )}
      </div>
    </aside>
  );
};
