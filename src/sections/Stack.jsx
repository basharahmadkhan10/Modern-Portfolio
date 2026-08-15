import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stack = [
 { 
 name: 'JavaScript', 
 role: 'Language',
 level: 'Intermediate',
 icon: (
 <div className="font-serif text-3xl font-bold tracking-tighter text-[#F7DF1E]">JS</div>
 )
 },
 { 
 name: 'C++', 
 role: 'Language',
 level: 'Intermediate',
 icon: (
 <div className="font-serif text-3xl font-bold tracking-tighter text-[#00599C]">C++</div>
 )
 },
 { 
 name: 'Python', 
 role: 'Language',
 level: 'Intermediate',
 icon: (
 <svg viewBox="0 0 128 128" width="40" height="40" className="fill-current text-[#3776AB]">
 <path d="M64 12.3c-25.7 0-24.8 11.2-24.8 11.2l.1 11.6h25.4v3.6H38.5S22 37 22 61.6c0 24.6 14.3 23.5 14.3 23.5h7.3V72.9s-.1-12.2 12-12.2h26.4s11-.2 11-10.7V25S94.8 12.3 64 12.3zm-15.4 7.6c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5z" fill="currentColor"/>
 <path d="M63.8 115.7c25.7 0 24.8-11.2 24.8-11.2l-.1-11.6H63.1v-3.6h26.3s16.5 1.7 16.5-22.9c0-24.6-14.3-23.5-14.3-23.5h-7.3v12.2s.1 12.2-12 12.2H45.9s-11 .2-11 10.7v15S33.2 115.7 63.8 115.7zm15.4-7.6c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z" fill="currentColor"/>
 </svg>
 )
 },
 { 
 name: 'Java', 
 role: 'Language',
 level: 'Basic',
 icon: (
 <div className="font-serif text-3xl font-bold tracking-tighter text-[#ED8B00]">JV</div>
 )
 },
 { 
 name: 'React / Next', 
 role: 'Frontend',
 level: 'Intermediate',
 icon: (
 <svg viewBox="-11.5 -10.23174 23 20.46348" width="40" height="40" className="fill-current text-[#61dafb]">
 <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
 <g stroke="currentColor" strokeWidth="1" fill="none">
 <ellipse rx="11" ry="4.2"/>
 <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
 <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
 </g>
 </svg>
 )
 },
 { 
 name: 'Node / PHP', 
 role: 'Backend',
 level: 'Intermediate',
 icon: (
 <svg viewBox="0 0 118 118" width="40" height="40" className="fill-current text-[#339933]">
 <path d="M59 0L110.1 29.5V88.5L59 118L7.9 88.5V29.5L59 0ZM59 10L16.6 34.5V83.5L59 108L101.4 83.5V34.5L59 10Z" fill="currentColor"/>
 <path d="M59 29.5L84.5 44.2V73.7L59 88.5L33.5 73.7V44.2L59 29.5Z" fill="currentColor"/>
 </svg>
 )
 },
 { 
 name: 'MongoDB', 
 role: 'Database',
 level: 'Intermediate',
 icon: (
 <svg viewBox="0 0 128 128" width="40" height="40" className="fill-current text-[#47A248]">
 <path d="M64 5.3c-1.5 0-3 1.2-3 2.7V112c0 1.5 1.5 2.7 3 2.7s3-1.2 3-2.7V8c0-1.5-1.5-2.7-3-2.7z" fill="currentColor"/>
 <path d="M84.7 93.3c-2.3 0-4.3-1.7-4.6-4-.3-2.3 1.3-4.5 3.6-5 6.7-1.4 11.4-7.5 11.4-14.3v-1.4c0-6-4-11.6-9.7-13.6-6-2.1-12.7.5-15.6 6.1-1.3 2.5-1.5 5.5-.5 8 1 2.3.8 5-.4 7.1-1.2 2.1-3.6 3.4-6 3.4-3.5 0-6.6-2.6-7-6.2-.5-4.4 2-8.5 6.1-10.1 5.3-2 11.3-1 15.6 2.6 4.3-3.6 10.3-4.6 15.6-2.6 6 2.2 10.1 8 10.1 14.4v1.4c0 9.8-6.9 18.5-16.6 20.5-.3.1-.7.1-1 .1z" fill="currentColor"/>
 </svg>
 )
 },
 { 
 name: 'PostgreSQL', 
 role: 'Database',
 level: 'Intermediate',
 icon: (
 <div className="font-serif text-3xl font-bold tracking-tighter text-[#336791]">SQL</div>
 )
 },
 { 
 name: 'Tailwind CSS', 
 role: 'Styling',
 level: 'Intermediate',
 icon: (
 <svg viewBox="0 0 128 128" width="40" height="40" className="fill-current text-[#06B6D4]">
 <path d="M64 24.5C46.9 24.5 35 36.3 35 53.4c0 17.1 12 28.9 29 28.9s29-11.8 29-28.9-12-28.9-29-28.9zm0 53c-13.3 0-24.1-10.8-24.1-24.1S50.7 29.3 64 29.3 88.1 40.1 88.1 53.4 77.3 77.5 64 77.5z" fill="currentColor"/>
 <path d="M84.5 53.4c0-11.3-9.2-20.5-20.5-20.5S43.5 42.1 43.5 53.4 52.7 73.9 64 73.9s20.5-9.2 20.5-20.5zM64 69.1c-8.7 0-15.7-7-15.7-15.7S55.3 37.7 64 37.7 79.7 44.7 79.7 53.4 72.7 69.1 64 69.1z" fill="currentColor"/>
 </svg>
 )
 },
 { 
 name: 'Postman', 
 role: 'API Design',
 level: 'Intermediate',
 icon: (
 <svg viewBox="0 0 128 128" width="40" height="40" className="fill-current text-[#FF6C37]">
 <path d="M64 0a64 64 0 1064 64A64 64 0 0064 0zm0 118a54 54 0 1154-54 54 54 0 01-54 54zm21-59a22 22 0 10-22 22v15h-8V59a30 30 0 1130 30z" fill="currentColor"/>
 </svg>
 )
 },
 { 
 name: 'Docker / K8s', 
 role: 'DevOps',
 level: 'Intermediate',
 icon: (
 <svg viewBox="0 0 24 24" width="40" height="40" className="fill-current text-[#2496ED]">
 <path d="M4.82 17.27q-.93 0-1.58-.65-.65-.65-.65-1.58 0-.93.65-1.58.65-.65 1.58-.65.93 0 1.58.65.65.65.65 1.58 0 .93-.65 1.58-.65.65-1.58.65Zm3.94 0q-.93 0-1.58-.65-.65-.65-.65-1.58 0-.93.65-1.58.65-.65 1.58-.65.93 0 1.58.65.65.65.65 1.58 0 .93-.65 1.58-.65.65-1.58.65Zm3.94 0q-.93 0-1.58-.65-.65-.65-.65-1.58 0-.93.65-1.58.65-.65 1.58-.65.93 0 1.58.65.65.65.65 1.58 0 .93-.65 1.58-.65.65-1.58.65Zm3.94 0q-.93 0-1.58-.65-.65-.65-.65-1.58 0-.93.65-1.58.65-.65 1.58-.65.93 0 1.58.65.65.65.65 1.58 0 .93-.65 1.58-.65.65-1.58.65ZM10.73 13.3q-.93 0-1.58-.65-.65-.65-.65-1.58 0-.93.65-1.58.65-.65 1.58-.65.93 0 1.58.65.65.65.65 1.58 0 .93-.65 1.58-.65.65-1.58.65Zm3.94 0q-.93 0-1.58-.65-.65-.65-.65-1.58 0-.93.65-1.58.65-.65 1.58-.65.93 0 1.58.65.65.65.65 1.58 0 .93-.65 1.58-.65.65-1.58.65Zm-3.94-3.97q-.93 0-1.58-.65-.65-.65-.65-1.58 0-.93.65-1.58.65-.65 1.58-.65.93 0 1.58.65.65.65.65 1.58 0 .93-.65 1.58-.65.65-1.58.65ZM23.4 16.7q0-1.6-1.12-2.73-1.12-1.12-2.73-1.12h-2V6.63q0-.88-.6-1.48t-1.47-.6h-3.4q-.32 0-.6.12-.27.13-.48.33l-5.3 5.3q-.42.42-.65 1t-.22 1.2q0 .52.12.92.13.4.33.7L3.4 15.93q-.2.2-.33.48-.12.28-.12.6v2.34h20.45V16.7Z" />
 </svg>
 )
 },
 { 
 name: 'Jenkins CI/CD', 
 role: 'DevOps',
 level: 'Intermediate',
 icon: (
 <svg viewBox="0 0 24 24" width="40" height="40" className="fill-current text-[#D33833]">
 <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
 </svg>
 )
 },
 { 
 name: 'Gemini / Agents', 
 role: 'AI',
 level: 'Intermediate',
 icon: (
 <div className="font-serif text-3xl font-bold tracking-tighter text-[#1A73E8]">AI</div>
 )
 },
];

export default function Stack() {
 const ref = useRef(null);
 const isInView = useInView(ref, { once: true, margin: "-20%" });

 return (
 <section className="relative bg-background overflow-hidden border-t hairline-border pt-24">
 
 {/* Banner / Chapter 03 Image Section */}
 <div className="w-full h-[60vh] relative overflow-hidden flex flex-col items-center justify-center mb-16 ">
 <div 
 className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 scale-105 parallax-banner"
 style={{ 
 backgroundImage: "url('/assets/bg_night_3_1786807089546.png')"
 }} 
 />
 <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
 <h2 className="text-4xl md:text-7xl font-serif relative z-10 text-center tracking-tight text-black dark:text-white">
 The <span className="text-brown-gradient dark:text-accent italic font-black">Arsenal</span>
 </h2>
 <div className="font-sans font-bold text-xs tracking-widest uppercase text-black dark:text-white relative z-10 mt-6 bg-[#f5f3eb] dark:bg-[#111111] px-4 py-2 ">
 Chapter 03
 </div>
 </div>

 <div className="py-24 px-8 min-h-screen flex items-center justify-center relative">
 
 {isInView && (
 <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen opacity-40">
 {[...Array(6)].map((_, i) => (
 <motion.div
 key={i}
 initial={{ x: '-100vw', opacity: 0, scaleY: 0.2 }}
 animate={{ x: '100vw', opacity: [0, 1, 1, 0], scaleY: [0.2, 1, 0.5, 0.1] }}
 transition={{
 duration: 2.5 + Math.random() * 2,
 delay: i * 0.4 + Math.random() * 0.5,
 ease: "easeInOut",
 }}
 className="absolute w-[60vw] h-[200px] bg-gradient-to-r from-transparent via-white to-transparent blur-[40px] rounded-[100%]"
 style={{
 top: `${20 + Math.random() * 60}%`,
 transform: `rotate(${Math.random() * 10 - 5}deg)`,
 }}
 />
 ))}
 {[...Array(20)].map((_, i) => (
 <motion.div
 key={`particle-${i}`}
 initial={{ x: '-10vw', opacity: 0, y: Math.random() * 100 + 'vh' }}
 animate={{ x: '110vw', opacity: [0, 1, 0], y: `calc(${Math.random() * 100}vh - 50px)` }}
 transition={{
 duration: 3 + Math.random() * 4,
 delay: i * 0.2,
 ease: "linear",
 }}
 className="absolute w-2 h-2 bg-white rounded-full blur-[2px]"
 />
 ))}
 </div>
 )}

 <div className="absolute right-12 top-1/2 -translate-y-1/2 writing-vertical text-[10vw] font-serif opacity-[0.02] dark:opacity-[0.03] pointer-events-none select-none text-text z-0">
 技術と芸術
 </div>

 <div className="max-w-7xl w-full relative z-10" ref={ref}>
 <div className="flex flex-col md:flex-row md:items-end justify-center mb-24">
 <div className="bg-[#f5f3eb] dark:bg-[#111111] p-6 md:p-8 relative z-20 max-w-3xl">
 <p className="font-serif text-lg md:text-xl font-medium text-black dark:text-white leading-relaxed text-justify">
 I love building things that look beautiful and work flawlessly. My stack is a blend of solid frontend frameworks (React/Next), battle-tested backend architecture (Node/Laravel), and strict CI/CD DevOps workflows. Lately, I've been diving deep into autonomous multi-agent AI systems using LangGraph and Gemini to build the future of software.
 </p>
 </div>
 </div>

 <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-4 md:gap-x-6 gap-y-12 md:gap-y-16">
 {stack.map((item, index) => (
 <motion.div 
 key={item.name}
 initial={{ opacity: 0, y: 30 }}
 animate={isInView ? { opacity: 1, y: 0 } : {}}
 transition={{ delay: index * 0.08, duration: 0.8, ease: "easeOut" }}
 className="relative group cursor-none flex flex-col items-center p-6 bg-[#f5f3eb] dark:bg-[#111111] hover:-translate-y-2 transition-transform duration-300"
 >
 <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mb-6">
 <div className="absolute inset-0 rounded-full group-hover:scale-105 transition-all duration-500 ease-out" />
 
 <div className="group-hover:opacity-0 transition-opacity duration-300 opacity-80 text-black dark:text-white flex items-center justify-center">
 {item.icon}
 </div>
 
 <motion.div 
 className="absolute inset-0 flex items-center justify-center rounded-full bg-[#f5f3eb] dark:bg-[#111111] border-2 border-accent text-accent font-serif text-xl md:text-2xl opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out shadow-[0_0_10px_rgba(196,48,43,0.2)]"
 style={{ transformOrigin: 'center' }}
 >
 <span className="writing-vertical text-base tracking-widest">{item.name.substring(0, 2).toUpperCase()}</span>
 </motion.div>
 </div>

 <div className="text-center w-full relative z-10">
 <h4 className="font-sans font-black uppercase text-sm md:text-base mb-1 text-black dark:text-white tracking-wide">{item.name}</h4>
 <div className="flex flex-col items-center gap-2 mt-3 w-full">
 <span className="font-sans font-bold text-[11px] md:text-xs uppercase tracking-widest text-black dark:text-white py-1 w-full text-center opacity-90">
 {item.role}
 </span>
 </div>
 </div>
 </motion.div>
 ))}
 </div>
 </div>
 </div>
 </section>
 );
}

