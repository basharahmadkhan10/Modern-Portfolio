import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
 const { theme, toggleTheme } = useTheme();
 const isDark = theme === 'dark';

 return (
 <button
 onClick={toggleTheme}
 className="fixed top-8 right-8 z-50 p-2 group bg-transparent hover:-translate-y-1 transition-transform"
 aria-label="Toggle Theme"
 >
 <motion.svg
 width="24"
 height="32"
 viewBox="0 0 24 32"
 fill="none"
 xmlns="http://www.w3.org/2000/svg"
 className="w-6 h-6 text-black dark:text-white group-hover:rotate-180 transition-transform duration-700"
 >
 {/* Japanese Chochin (Lantern) stylized SVG */}
 <path d="M7 2H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
 <path d="M12 2V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
 <motion.path 
 d="M5 6C5 4.5 7 4 12 4C17 4 19 4.5 19 6V22C19 23.5 17 24 12 24C7 24 5 23.5 5 22V6Z" 
 stroke="currentColor"
 strokeWidth="1.5"
 fill={isDark ? "transparent" : "#fff"}
 animate={{ fill: isDark ? "transparent" : "#fff" }}
 />
 <path d="M5 10H19" strokeWidth="1.5" opacity="0.3" />
 <path d="M5 14H19" strokeWidth="1.5" opacity="0.3" />
 <path d="M5 18H19" strokeWidth="1.5" opacity="0.3" />
 <path d="M12 24V26" strokeWidth="1.5" strokeLinecap="round" />
 <path d="M9 28H15" strokeWidth="1.5" strokeLinecap="round" />
 
 {/* The glow / flame inside when dark */}
 {isDark && (
 <motion.circle 
 cx="12" 
 cy="14" 
 r="2" 
 fill="#d32f2f" 
 initial={{ opacity: 0 }}
 animate={{ opacity: [0.4, 1, 0.4] }}
 transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
 />
 )}
 </motion.svg>
 <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-widest uppercase text-white opacity-0 group-hover:opacity-100 transition-opacity">
 {isDark ? 'Light' : 'Dark'}
 </span>
 </button>
 );
}

