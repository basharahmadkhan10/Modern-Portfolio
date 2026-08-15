import { useRef, useEffect } from 'react';
import { motion, useInView, animate } from 'framer-motion';

function Counter({ from, to, duration = 2, suffix = '' }) {
 const nodeRef = useRef(null);
 const inView = useInView(nodeRef, { once: true, margin: "-100px" });

 useEffect(() => {
 if (inView) {
 const controls = animate(from, to, {
 duration: duration,
 onUpdate(value) {
 if (nodeRef.current) {
 nodeRef.current.textContent = Math.round(value) + suffix;
 }
 },
 });
 return () => controls.stop();
 }
 }, [from, to, duration, inView, suffix]);

 return <span ref={nodeRef} className="tabular-nums font-bold">{from}{suffix}</span>;
}

export default function DsaStats() {
 const ref = useRef(null);
 const inView = useInView(ref, { once: true, margin: "-20%" });

 return (
 <section ref={ref} className="py-20 md:py-32 px-8 bg-background border-t hairline-border relative overflow-hidden">
 
 {/* Fire Embers Animation (Fire Element) */}
 {inView && (
 <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
 {[...Array(25)].map((_, i) => (
 <motion.div
 key={`ember-${i}`}
 initial={{ 
 x: `${Math.random() * 100}%`, 
 y: '100%', 
 opacity: 0,
 scale: Math.random() * 0.5 + 0.5 
 }}
 animate={{ 
 y: '-20%', 
 x: `+=${Math.random() * 100 - 50}px`,
 opacity: [0, 1, 0] 
 }}
 transition={{
 duration: 3 + Math.random() * 4,
 delay: Math.random() * 2,
 ease: "easeIn",
 repeat: Infinity,
 repeatDelay: Math.random() * 2
 }}
 className="absolute w-2 h-2 bg-orange-500 rounded-full blur-[2px] shadow-[0_0_10px_rgba(255,165,0,0.8)]"
 />
 ))}
 </div>
 )}

 {/* Decorative vertical Japanese text (Achievement/Results) */}
 <div className="absolute left-4 top-1/2 -translate-y-1/2 writing-vertical text-[10vw] font-serif opacity-[0.02] dark:opacity-[0.04] pointer-events-none select-none z-0">
 実績
 </div>

 <div className="max-w-7xl mx-auto relative z-10">
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 
 {/* Stat 1: Problems Solved */}
 <motion.div 
 initial={{ opacity: 0, y: 30 }}
 animate={inView ? { opacity: 1, y: 0 } : {}}
 transition={{ duration: 0.8, delay: 0.1 }}
 className="flex flex-col items-center justify-center p-8 bg-[#f5f3eb] dark:bg-[#111111] group hover:-translate-y-2 transition-transform duration-300"
 >
 <div className="text-6xl md:text-8xl font-serif text-black dark:text-white font-black mb-4 tracking-tighter group-hover:scale-105 transition-transform duration-500 drop-shadow-sm">
 <Counter from={0} to={900} suffix="+" />
 </div>
 <div className="font-sans font-bold text-xs md:text-sm tracking-widest uppercase text-black dark:text-white text-center border-t-[1px] border-black dark:border-white pt-4 w-full">
 DSA Problems Solved
 </div>
 </motion.div>

 {/* Stat 2: CodeChef */}
 <motion.div 
 initial={{ opacity: 0, y: 30 }}
 animate={inView ? { opacity: 1, y: 0 } : {}}
 transition={{ duration: 0.8, delay: 0.3 }}
 className="flex flex-col items-center justify-center p-8 bg-[#f5f3eb] dark:bg-[#111111] group hover:-translate-y-2 transition-transform duration-300"
 >
 <div className="text-6xl md:text-8xl font-serif text-black dark:text-white font-black mb-4 tracking-tighter group-hover:scale-105 transition-transform duration-500 drop-shadow-sm">
 <Counter from={0} to={1672} />
 </div>
 <div className="font-sans font-bold text-xs md:text-sm tracking-widest uppercase text-black dark:text-white text-center flex flex-col items-center gap-3 border-t-[1px] border-black dark:border-white pt-4 w-full">
 <span>CodeChef Rating</span>
 <span className="text-black dark:text-white bg-white dark:bg-black px-3 py-1 tracking-[0.4em]">★★★</span>
 </div>
 </motion.div>

 {/* Stat 3: HackerRank */}
 <motion.div 
 initial={{ opacity: 0, y: 30 }}
 animate={inView ? { opacity: 1, y: 0 } : {}}
 transition={{ duration: 0.8, delay: 0.5 }}
 className="flex flex-col items-center justify-center p-8 bg-[#f5f3eb] dark:bg-[#111111] group hover:-translate-y-2 transition-transform duration-300"
 >
 <div className="text-6xl md:text-8xl font-serif text-black dark:text-white font-black mb-4 tracking-tighter group-hover:scale-105 transition-transform duration-500 drop-shadow-sm flex items-baseline">
 <Counter from={0} to={5} />
 <span className="text-4xl md:text-6xl ml-1">★</span>
 </div>
 <div className="font-sans font-bold text-xs md:text-sm tracking-widest uppercase text-black dark:text-white text-center flex flex-col items-center gap-3 border-t-[1px] border-black dark:border-white pt-4 w-full">
 <span>HackerRank</span>
 <span className="text-[10px] text-black dark:text-white bg-white dark:bg-black px-3 py-1 ">Python • C • C++</span>
 </div>
 </motion.div>

 </div>
 </div>
 </section>
 );
}

