import { useAudio } from '../context/AudioContext';
import { motion } from 'framer-motion';

export default function AudioToggle() {
 const { isPlaying, toggleAudio } = useAudio();

 return (
 <button
 onClick={toggleAudio}
 className="fixed top-8 left-8 z-50 p-3 group bg-transparent hover:-translate-y-1 transition-transform flex items-center gap-2"
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
 );
}

