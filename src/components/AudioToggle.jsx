import { useAudio } from '../context/AudioContext';
import { motion } from 'framer-motion';

export default function AudioToggle() {
  const { isPlaying, toggleAudio, nextTrack, currentTrackIndex, totalTracks } = useAudio();

  return (
    <div className="fixed top-8 left-8 z-50 flex items-center gap-4">
      <button
        onClick={toggleAudio}
        className="group bg-transparent hover:-translate-y-1 transition-transform flex items-center gap-2"
        aria-label="Toggle Audio"
      >
        <div className="flex gap-0.5 items-end h-3 ml-2">
          {[1, 2, 3, 4].map((bar) => (
            <motion.div
              key={bar}
              animate={isPlaying ? {
                height: ['4px', '12px', '4px'],
              } : {
                height: '2px'
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                delay: bar * 0.1,
                ease: "easeInOut"
              }}
              className="w-1 bg-black dark:bg-white rounded-t-sm"
            />
          ))}
        </div>
        <span className="font-sans font-bold text-[10px] uppercase tracking-widest text-black dark:text-white group-hover:text-accent transition-colors">
          {isPlaying ? 'Sound: On' : 'Sound: Off'}
        </span>
      </button>

      {/* Next Track Button */}
      <button 
        onClick={nextTrack}
        className="opacity-50 hover:opacity-100 transition-opacity flex items-center gap-1 group"
        title="Next Track"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black dark:text-white group-hover:text-accent transition-colors"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line></svg>
        <span className="font-sans font-bold text-[8px] uppercase tracking-widest text-black dark:text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          [{currentTrackIndex + 1}/{totalTracks}]
        </span>
      </button>
    </div>
  );
}

