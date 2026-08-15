import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const educationPath = [
 {
 id: 1,
 institution: "Elegant Public School",
 degree: "Matriculation (10th)",
 score: "Percentage: 86.8%",
 duration: "Apr 2019 \u2013 Mar 2020",
 location: "Gaya, Bihar",
 description: "The beginning of the journey. Built a strong foundational understanding of core subjects and mathematics."
 },
 {
 id: 2,
 institution: "DAV Public School, Cantt Area",
 degree: "Intermediate (12th)",
 score: "Percentage: 76.33%",
 duration: "Apr 2020 \u2013 Mar 2022",
 location: "Gaya, Bihar",
 description: "Deepened focus on science and logic, laying the groundwork for engineering and computational thinking."
 },
 {
 id: 3,
 institution: "Lovely Professional University",
 degree: "Computer Science and Engineering",
 score: "CGPA: 8.35",
 duration: "Aug 2023 \u2013 Present",
 location: "Phagwara, Punjab",
 description: "Mastering algorithms, full-stack development, and AI. Honing my craft to build highly scalable and elegant software."
 }
];

export default function ThePath() {
 const containerRef = useRef(null);
 

 const { scrollYProgress } = useScroll({
 target: containerRef,
 offset: ["start center", "end center"]
 });


 const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

 return (
 <section ref={containerRef} className="relative bg-background overflow-hidden border-t hairline-border pt-24">
 
 {/* Banner / Chapter 01 Image Section */}
 <div className="w-full h-[60vh] relative overflow-hidden flex flex-col items-center justify-center mb-16 ">
 <div 
 className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 scale-105 parallax-banner"
 style={{ 
 backgroundImage: "url('/assets/bg_night_2_1786806982934.png')"
 }} 
 />
 <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
 <h2 className="text-5xl md:text-7xl font-serif relative z-10 text-center tracking-tight text-black dark:text-white">
 The <span className="text-brown-gradient dark:text-accent italic font-black">Path</span>
 </h2>
 <div className="font-sans font-bold text-xs tracking-widest uppercase text-black dark:text-white relative z-10 mt-6 bg-[#f5f3eb] dark:bg-[#111111] px-4 py-2 ">
 Chapter 01
 </div>
 </div>

 <div className="py-24 px-8 min-h-screen flex items-center justify-center relative overflow-hidden">
 
 {/* Dust/Soil Animation (Earth Element) */}
 <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden mix-blend-multiply dark:mix-blend-screen opacity-60">
 {[...Array(40)].map((_, i) => (
 <motion.div
 key={`dust-${i}`}
 initial={{ 
 x: `${Math.random() * 100}%`, 
 y: '-10%', 
 opacity: 0,
 rotate: Math.random() * 360,
 scale: Math.random() * 0.8 + 0.2
 }}
 animate={{ 
 y: '110%', 
 x: `+=${Math.random() * 100 - 50}px`,
 opacity: [0, 0.7, 0],
 rotate: `+=${Math.random() * 360 - 180}deg`
 }}
 transition={{
 duration: 15 + Math.random() * 15,
 delay: Math.random() * 20,
 ease: "linear",
 repeat: Infinity
 }}
 className="absolute w-1.5 h-1.5 md:w-2.5 md:h-2.5 bg-[#8b5a2b] rounded-sm"
 style={{
 filter: 'blur(1px)'
 }}
 />
 ))}
 </div>

 {/* Decorative vertical Japanese background text */}
 <div className="absolute left-12 top-1/2 -translate-y-1/2 writing-vertical text-[10vw] font-serif opacity-[0.02] dark:opacity-[0.03] pointer-events-none select-none text-text z-0">
 私の旅
 </div>

 <div className="max-w-6xl w-full relative z-10">
 <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
 <div>
 <p className="max-w-2xl font-sans text-base md:text-lg opacity-80 leading-relaxed font-light">
 Every master was once a beginner. This is the timeline of my academic forging, tracing my steps from early fundamentals to advanced software engineering.
 </p>
 </div>
 </div>

 <div className="relative pl-8 md:pl-0">
 {/* Background Track Line */}
 <div className="absolute top-0 bottom-0 left-[15px] md:left-1/2 md:-translate-x-1/2 w-[1px] bg-surface-border" />
 
 {/* Animated Ink/Glowing Line */}
 <motion.div 
 className="absolute top-0 left-[15px] md:left-1/2 md:-translate-x-1/2 w-[2px] bg-gradient-to-b from-transparent via-accent to-accent origin-top"
 style={{ height: lineHeight }}
 />

 <div className="flex flex-col gap-16 md:gap-24 relative">
 {educationPath.map((item, index) => {

 const startFade = index * 0.3;
 const endFade = startFade + 0.2;
 
 const itemOpacity = useTransform(scrollYProgress, [startFade, endFade], [0.2, 1]);
 const itemScale = useTransform(scrollYProgress, [startFade, endFade], [0.9, 1]);
 
 const isEven = index % 2 === 0;

 return (
 <motion.div 
 key={item.id}
 style={{ opacity: itemOpacity, scale: itemScale }}
 className={`flex flex-col md:flex-row items-start md:items-center w-full ${isEven ? 'md:flex-row-reverse' : ''}`}
 >
 {/* Content Box (Manga Panel Style) */}
 <div className={`w-full md:w-1/2 flex flex-col py-6 ${isEven ? 'md:pl-16' : 'md:pr-16 md:items-end md:text-right'}`}>
    <div className={`relative w-full transition-all duration-500 group ${isEven ? 'rotate-2' : '-rotate-2'} hover:rotate-0 hover:-translate-y-2 my-4 bg-[length:100%_100%] bg-center bg-no-repeat`}
       style={{ backgroundImage: "url('/assets/scroll_bg.jpg')" }}>
       
      <div className="relative z-10 w-full px-12 md:px-16 pt-16 pb-16 md:pt-20 md:pb-20 text-[#2c1e16]">
        <div className="font-sans font-bold text-[10px] md:text-xs text-[#5c4033] uppercase mb-4 flex flex-col md:flex-row gap-2 md:gap-4 md:items-center border-b-[1px] border-[#8b7355]/30 pb-2 inline-flex">
          <span>{item.duration}</span>
          <span className="hidden md:inline-block w-4 h-[1px] bg-[#8b7355]/50" />
          <span>{item.location}</span>
        </div>
        
        <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl mb-2 font-black uppercase text-[#2c1e16]">{item.institution}</h3>
        <h4 className="font-sans font-bold text-xs md:text-sm text-[#4a3525] mb-6 uppercase">{item.degree}</h4>
        
        <div className="inline-block px-3 py-1.5 bg-[#e8d5b5]/50 font-sans font-bold text-[10px] md:text-xs uppercase text-[#2c1e16] mb-6 shadow-sm border border-[#c5b399]/50">
          {item.score}
        </div>
        
        <p className="font-sans font-medium text-xs md:text-sm text-[#3d2b1f] leading-relaxed text-justify md:text-left">
          {item.description}
        </p>
      </div>
    </div>
  </div>

 {/* Center Node / Dot */}
 <div className="absolute left-[11px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-accent z-10 shadow-[0_0_15px_rgba(196,48,43,0.8)]" />
 
 </motion.div>
 );
 })}
 </div>
 </div>
 </div>
 </div>
 </section>
 );
}

