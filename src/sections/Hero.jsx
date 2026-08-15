import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '../context/ThemeContext';

gsap.registerPlugin(ScrollTrigger);


const dayImages = [
 '/assets/bg_day_1_1786806844347.png',
 '/assets/bg_day_2_1786806915486.png',
 '/assets/bg_day_3_1786806968765.png',
 '/assets/bg_day_4.png',
 '/assets/bg_day_5.png'
];

const nightImages = [
 '/assets/bg_night_1_1786806933606.png',
 '/assets/bg_night_2_1786806982934.png',
 '/assets/bg_night_3_1786807089546.png',
 '/assets/bg_night_1_1786806933606.png',
 '/assets/bg_night_2_1786806982934.png'
];

const names = [
 { text: 'Bashar Ahmad', lang: 'English' },
 { text: 'बशर अहमद', lang: 'Hindi' },
 { text: 'バシャル・アハマド', lang: 'Japanese' },
 { text: '바샤르 아흐마드', lang: 'Korean' },
 { text: 'بشار أحمد', lang: 'Arabic' }
];

const quotes = [
 "A sword is a weapon. The art of swordsmanship is learning how to kill. — Kenshin Himura",
 "There is no light for those who do not know darkness. — Seijuro Hiko",
 "Preoccupied with a single leaf, you won't see the tree. — Takuan Soho",
 "To win any battle, you must fight as if you are already dead. — Miyamoto Musashi",
 "I am the master of my own blade. — Roronoa Zoro"
];

export default function Hero() {
 const containerRef = useRef(null);
 const textRef = useRef(null);
 const { theme } = useTheme();

 const [bgIndex, setBgIndex] = useState(0);
 const [nameIndex, setNameIndex] = useState(0);
 const [quoteIndex, setQuoteIndex] = useState(0);

 const isDark = theme === 'dark';
 const currentImages = isDark ? nightImages : dayImages;


 useEffect(() => {
 const bgInterval = setInterval(() => {
 setBgIndex((prev) => (prev + 1) % 5);
 }, 6000);
 return () => clearInterval(bgInterval);
 }, [isDark]);


 useEffect(() => {
 const nameInterval = setInterval(() => {
 setNameIndex((prev) => (prev + 1) % names.length);
 }, 3000);
 return () => clearInterval(nameInterval);
 }, []);


 useEffect(() => {
 const quoteInterval = setInterval(() => {
 setQuoteIndex((prev) => (prev + 1) % quotes.length);
 }, 8000);
 return () => clearInterval(quoteInterval);
 }, []);

 useEffect(() => {

 let ctx = gsap.context(() => {
 gsap.to(containerRef.current, {
 yPercent: 30,
 ease: "none",
 scrollTrigger: {
 trigger: containerRef.current,
 start: "top top",
 end: "bottom top",
 scrub: true,
 }
 });

 gsap.to(textRef.current, {
 yPercent: -20,
 opacity: 0,
 ease: "none",
 scrollTrigger: {
 trigger: containerRef.current,
 start: "top top",
 end: "bottom top",
 scrub: true,
 }
 });
 }, containerRef);

 return () => ctx.revert();
 }, []);

 return (
 <section ref={containerRef} className="relative w-full h-screen overflow-hidden flex items-center justify-center">

 <div className="absolute inset-0 z-0 scale-105">
 <AnimatePresence mode="popLayout">
 <motion.div
 key={`${isDark}-${bgIndex}`}
 initial={{ opacity: 0, scale: 1 }}
 animate={{ opacity: 1, scale: 1.05 }}
 exit={{ opacity: 0, scale: 1.1 }}
 transition={{ duration: 2, ease: "easeInOut" }}
 className="w-full h-full absolute inset-0 bg-cover bg-center"
 style={{ backgroundImage: `url(${currentImages[bgIndex]})` }}
 >
 <div className={`w-full h-full transition-colors duration-1000 ${isDark ? 'bg-black/70' : 'bg-[#e8e6e0]/60'}`} />
 </motion.div>
 </AnimatePresence>
 </div>

 <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
 style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} />

 <div ref={textRef} className="relative z-10 flex flex-col items-center pointer-events-none w-full px-8">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
 className="text-center w-full flex flex-col items-center"
 >
 <div className="h-12 mb-8 flex items-end justify-center overflow-hidden">
 <AnimatePresence mode="wait">
 <motion.p
 key={quoteIndex}
 initial={{ y: 20, opacity: 0 }}
 animate={{ y: 0, opacity: 1 }}
 exit={{ y: -20, opacity: 0 }}
 transition={{ duration: 0.8 }}
 className="font-serif text-sm md:text-lg italic text-black dark:text-white/70 tracking-wide max-w-2xl text-center px-6 md:px-8"
 >
 {quotes[quoteIndex]}
 </motion.p>
 </AnimatePresence>
 </div>

 <div className="h-[4rem] md:h-[6rem] lg:h-[8vw] mb-2 flex items-end justify-center overflow-hidden w-full">
 <AnimatePresence mode="wait">
 <motion.h1
 key={nameIndex}
 initial={{ y: 50, opacity: 0 }}
 animate={{ y: 0, opacity: 1 }}
 exit={{ y: -50, opacity: 0 }}
 transition={{ duration: 0.5, ease: "easeOut" }}
 className="text-3xl sm:text-5xl md:text-8xl lg:text-[7vw] font-serif uppercase tracking-tight leading-none whitespace-nowrap text-black dark:text-white"
 style={{ direction: nameIndex === 4 ? 'rtl' : 'ltr' }}
 >
 {names[nameIndex].text}
 </motion.h1>
 </AnimatePresence>
 </div>
 <h1 className="text-3xl sm:text-5xl md:text-8xl lg:text-[7vw] font-serif uppercase tracking-tight leading-none italic font-light text-accent">
 Khan
 </h1>

 <p className="mt-12 text-xs md:text-sm font-mono tracking-[0.4em] uppercase opacity-80 py-4 px-8 text-black dark:text-white">
 MERN Full-Stack Developer
 </p>
 </motion.div>
 </div>

 {/* Vertical Japanese Text (Manga Style) */}
 <div className="absolute top-1/2 -translate-y-1/2 left-8 writing-vertical hidden md:flex flex-col items-center gap-6">
 <span className="text-black dark:text-accent font-serif font-black text-lg px-2 py-4 bg-[#f5f3eb] dark:bg-[#111111]">創造性</span>
 <span className="mt-2 text-black dark:text-white font-sans font-bold uppercase tracking-widest text-xs">Creative Developer</span>
 </div>

 {/* Scroll indicator (Manga Style) */}
 <motion.div
 className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none text-black dark:text-white"
 animate={{ y: [0, 10, 0] }}
 transition={{ delay: 2, duration: 1, repeat: Infinity }}
 >
 <span className="text-[10px] uppercase tracking-widest opacity-70">Scroll</span>
 <div className="w-[1px] h-12 bg-gradient-to-b from-current to-transparent opacity-70" />
 </motion.div>
 </section>
 );
}

