import { createContext, useContext, useState, useRef, useEffect } from 'react';

const AudioContext = createContext();

export function AudioProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio('/assets/audio/bgm.mp3'));
  useEffect(() => {
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;

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

  return (
    <AudioContext.Provider value={{ isPlaying, toggleAudio }}>
      {children}
    </AudioContext.Provider>
  );
}

export const useAudio = () => useContext(AudioContext);
