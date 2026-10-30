/**
 * Romantic Audio Player Service
 * Plays 'musica.mpeg' continuously in a loop across the entire experience.
 * Automatically initiates playback upon initial page interaction or load.
 */

class RomanticAudioService {
  private audioElement: HTMLAudioElement | null = null;
  private isPlaying = false;
  private isMuted = false;
  private shouldBePlaying = true;
  private listeners: Set<(playing: boolean, muted: boolean) => void> = new Set();
  private userInteractionBound = false;

  constructor() {
    if (typeof window !== 'undefined') {
      this.initAudio();
      this.bindUserInteraction();
    }
  }

  private initAudio() {
    // Primary audio element with loop and auto preload
    const audio = new Audio();
    audio.loop = true;
    audio.preload = 'auto';
    audio.volume = 0.75; // Pleasant romantic listening volume

    // Primary source /musica.mp3
    audio.src = '/musica.mp3';

    audio.addEventListener('play', () => {
      this.isPlaying = true;
      this.notify();
    });

    audio.addEventListener('pause', () => {
      this.isPlaying = false;
      this.notify();
    });

    // Handle seamless infinite looping fallback
    audio.addEventListener('ended', () => {
      audio.currentTime = 0;
      if (this.shouldBePlaying) {
        audio.play().catch(() => {});
      }
    });

    audio.addEventListener('error', (e) => {
      console.warn('Audio playback notice:', e);
    });

    this.audioElement = audio;

    // Handle tab visibility change: resume playing when returning to tab
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible' && this.shouldBePlaying && !this.isPlaying) {
        this.play().catch(() => {});
      }
    });

    // Try autoplay immediately
    this.play().catch(() => {
      // Autoplay waiting for first touch/click
    });
  }

  public bindUserInteraction() {
    if (this.userInteractionBound || typeof window === 'undefined') return;
    this.userInteractionBound = true;

    const startAudio = () => {
      if (this.shouldBePlaying && !this.isPlaying) {
        this.play().then(() => {
          removeListeners();
        }).catch(() => {});
      } else if (this.isPlaying) {
        removeListeners();
      }
    };

    const removeListeners = () => {
      window.removeEventListener('click', startAudio);
      window.removeEventListener('touchstart', startAudio);
      window.removeEventListener('touchend', startAudio);
      window.removeEventListener('scroll', startAudio);
      window.removeEventListener('keydown', startAudio);
      window.removeEventListener('pointerdown', startAudio);
    };

    window.addEventListener('click', startAudio, { passive: true });
    window.addEventListener('touchstart', startAudio, { passive: true });
    window.addEventListener('touchend', startAudio, { passive: true });
    window.addEventListener('scroll', startAudio, { passive: true, once: true });
    window.addEventListener('keydown', startAudio, { passive: true });
    window.addEventListener('pointerdown', startAudio, { passive: true });
  }

  public subscribe(cb: (playing: boolean, muted: boolean) => void) {
    this.listeners.add(cb);
    cb(this.isPlaying, this.isMuted);
    return () => {
      this.listeners.delete(cb);
    };
  }

  private notify() {
    this.listeners.forEach(cb => cb(this.isPlaying, this.isMuted));
  }

  public async play(): Promise<void> {
    if (!this.audioElement) return;
    this.shouldBePlaying = true;
    try {
      await this.audioElement.play();
      this.isPlaying = true;
      this.notify();
    } catch {
      // Waiting for user gesture
    }
  }

  public pause(): void {
    if (!this.audioElement) return;
    this.shouldBePlaying = false;
    this.audioElement.pause();
    this.isPlaying = false;
    this.notify();
  }

  public async togglePlay(): Promise<boolean> {
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      await this.play();
      return true;
    }
  }

  public toggleMute(): boolean {
    if (!this.audioElement) return false;
    this.isMuted = !this.isMuted;
    this.audioElement.muted = this.isMuted;
    this.notify();
    return this.isMuted;
  }

  public getStatus() {
    return {
      isPlaying: this.isPlaying,
      isMuted: this.isMuted
    };
  }
}

export const romanticAudio = new RomanticAudioService();

