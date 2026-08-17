import { createContext, useContext, useState, useRef, useEffect } from 'react';

const AudioContext = createContext();

const PLAYLIST = [
  '/assets/audio/bgm2.mp3',
  '/assets/audio/bgm.mp3',
  '/assets/audio/bgm3.mp3'
];

export function AudioProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef(new Audio(PLAYLIST[0]));

  useEffect(() => {
    audioRef.current.src = PLAYLIST[currentTrackIndex];
    audioRef.current.volume = 0.4;
    audioRef.current.load();
    if (isPlaying) {
      audioRef.current.play().catch(e => console.warn("Track play skipped (might not exist yet):", e));
    }
  }, [currentTrackIndex]);

  useEffect(() => {
    const handleEnded = () => {
      setCurrentTrackIndex((prev) => (prev + 1) % PLAYLIST.length);
    };
    audioRef.current.addEventListener('ended', handleEnded);

    const tryPlay = () => {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          document.removeEventListener('click', tryPlay);
          document.removeEventListener('scroll', tryPlay);
          document.removeEventListener('keydown', tryPlay);
        })
        .catch((e) => {
          console.warn("Autoplay prevented by browser. Waiting for user interaction.");
        });
    };

    tryPlay();

    document.addEventListener('click', tryPlay);
    document.addEventListener('scroll', tryPlay, { once: true });
    document.addEventListener('keydown', tryPlay, { once: true });

    return () => {
      audioRef.current.removeEventListener('ended', handleEnded);
      document.removeEventListener('click', tryPlay);
      document.removeEventListener('scroll', tryPlay);
      document.removeEventListener('keydown', tryPlay);
    };
  }, []);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.error("Audio play failed:", e));
    }
    setIsPlaying(!isPlaying);
  };

  const nextTrack = (e) => {
    if (e) e.stopPropagation();
    setCurrentTrackIndex((prev) => (prev + 1) % PLAYLIST.length);
    if (!isPlaying) {
      setIsPlaying(true);
    }
  };

  const prevTrack = (e) => {
    if (e) e.stopPropagation();
    setCurrentTrackIndex((prev) => (prev - 1 + PLAYLIST.length) % PLAYLIST.length);
    if (!isPlaying) {
      setIsPlaying(true);
    }
  };

  return (
    <AudioContext.Provider value={{ isPlaying, toggleAudio, nextTrack, prevTrack, currentTrackIndex, totalTracks: PLAYLIST.length }}>
      {children}
    </AudioContext.Provider>
  );
}

export const useAudio = () => useContext(AudioContext);
