import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
 {
 title: 'ORION',
 subtitle: 'Autonomous AI Research Desk',
 desc: 'Multi-agent LangGraph system mimicking institutional equity research. A Bull agent and Bear agent conduct independent adversarial debates over live Yahoo Finance data, cross-examined by a CIO Judge Agent to issue INVEST/WATCH/PASS verdicts with kill-criteria. Features immutable evidence ledgers, historical tracking, and comprehensive market trend analysis that dramatically accelerates research efficiency. Built with resilient AI fallbacks and complex state management.',
 tech: ['LangGraph JS', 'Gemini 1.5 Pro', 'React', 'MongoDB'],
 image: '/assets/project_orion_new.png',
 link: 'https://orion-kappa-nine.vercel.app',
 github: 'https://github.com/basharahmadkhan10/Orion'
 },
 {
 title: 'CodeX Arena',
 subtitle: 'Real-Time 1v1 Coding Platform',
 desc: 'Highly scalable competitive coding arena. Supports live matchmaking, synchronized WebSockets, strict anti-cheat (tab switch, fullscreen enforcement), Elo-based ranking, and live code execution via JDoodle against hidden test cases. Features a custom Monaco Editor implementation with intelligent syntax highlighting and auto-completion. Designed for seamless low-latency combat between competitive programmers worldwide.',
 tech: ['React', 'Socket.io', 'Node.js', 'JDoodle API'],
 image: '/assets/project_codex_new.png',
 link: 'https://codex-arena.onrender.com',
 github: 'https://github.com/basharahmadkhan10/CodeX-Arena'
 },
 {
 title: 'CivicFix',
 subtitle: 'Community Issue Platform',
 desc: 'Backend-focused civic issue management system utilizing a strict state-machine-driven lifecycle (Reported -> Verified -> Assigned -> Resolved). Enforces rigorous role-based access control (RBAC) and immutable audit-logging for complete transparency and accountability. Integrated geographic mapping ensures issues are routed to correct municipal sectors instantly, drastically reducing response times for critical civic maintenance.',
 tech: ['Node.js', 'MongoDB', 'JWT RBAC', 'React'],
 image: '/assets/project_civicfix_new.png',
 link: 'https://civicfix-frontend02.onrender.com',
 github: 'https://github.com/basharahmadkhan10/CivicFix'
 },
 {
 title: 'LifeLink',
 subtitle: 'Privacy-First Blood Donation',
 desc: 'A secure, gamified blood donation network. Features a privacy-first directory, real-time emergency broadcasts via $centerSphere MongoDB geo-queries (50km radius), concurrency control to prevent multiple donors, and a medical cooldown system to ensure donor safety. Built to scale across massive metropolitan areas, directly saving lives by connecting urgent patients with eligible donors within minutes of a request being broadcasted.',
 tech: ['Laravel 11', 'MongoDB Atlas', 'Tailwind', 'PHP'],
 image: '/assets/project_lifelink_new.png',
 link: 'https://lifelink-1-h40a.onrender.com',
 github: 'https://github.com/basharahmadkhan10/LifeLink'
 },
 {
 title: 'Expense Tracker',
 subtitle: 'Flatmate Expense & Reconciliation',
 desc: 'Production-ready Next.js 14 app for complex shared expenses. Implements time-travel membership boundaries (join/leave date constraints), transparent multi-currency conversions, anomaly review queues for messy CSV imports, and an optimal debt settlement engine. Advanced algorithmic processing ensures minimum transactions are required to settle all debts amongst large friend groups, alongside gorgeous data visualization graphs.',
 tech: ['Next.js 14', 'Prisma', 'PostgreSQL', 'Tailwind v4'],
 image: '/assets/project_expense_new.png',
 link: 'https://expense-tracker-eight-nu-64.vercel.app',
 github: 'https://github.com/basharahmadkhan10/ExpenseTracker'
 },
 {
 title: 'DevPrep',
 subtitle: 'AI Interview Preparation Platform',
 desc: 'AI-powered platform parsing resumes against job descriptions to identify skill gaps and generate personalized study plans. Features precise match scoring, technical/behavioral question generation via Google Gemini API, secure JWT Auth, rate-limiting, and an elegant React interface. Helps candidates secure their dream jobs by simulating highly accurate mock interviews that adapt to the specific nuances of modern software engineering roles.',
 tech: ['React.js', 'Gemini AI', 'OAuth 2.0', 'Express'],
 image: '/assets/project_devprep_new.png',
 link: 'https://dev1prep.onrender.com',
 github: 'https://github.com/basharahmadkhan10/DevPrep'
 },
 {
 title: 'Bill Quill',
 subtitle: 'Professional Invoice Generator',
 desc: 'A full-stack invoice management system automating customer billing and reporting. Engineered dynamic invoice generation with printable formats, XML downloads, and automated monthly Excel reporting. Built on an Express.js backend with structured MongoDB data modeling. Ensures flawless financial tracking, tax compliance preparation, and incredibly swift PDF invoice rendering for modern freelancing and agency operations.',
 tech: ['Node.js', 'Express', 'MongoDB', 'TailwindCSS'],
 image: '/assets/project_billquill_new.png',
 link: 'https://bill-quill-frontend.onrender.com',
 github: 'https://github.com/basharahmadkhan10/Bill-Quill-frontend'
 }
];

function ProjectCard({ project, index }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { margin: "-20%" });

  useEffect(() => {
    if (!isInView && isFlipped) {
      setIsFlipped(false);
    }
  }, [isInView, isFlipped]);


  useEffect(() => {
    if (isFlipped) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isFlipped]);

  return (
 <div ref={cardRef} className="project-panel w-screen shrink-0 h-full flex items-center justify-center p-4 md:p-8 relative perspective-1000">
 <div className="max-w-5xl w-full flex flex-col items-center justify-center relative z-10">
  <h3 className="text-2xl md:text-5xl font-serif font-black text-black dark:text-white uppercase mb-4 md:mb-8 text-center tracking-wide">
    {project.title}
  </h3>
  <div
  className="relative aspect-video cursor-pointer group w-full max-w-4xl mx-auto"
  onClick={() => setIsFlipped(!isFlipped)}
  >
  <motion.div
  className="w-full h-full relative transform-style-3d transition-transform duration-700"
  animate={{ rotateY: isFlipped ? 180 : 0 }}
  transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
  >
  <div className="absolute inset-0 backface-hidden overflow-hidden bg-transparent rounded-[2rem]">
  <img
  src={project.image}
  alt={project.title}
  className="absolute inset-0 w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105 p-4"
  onError={(e) => { e.target.src = '/assets/bg_night_1.png' }}
  />
  
  {/* Inspect Guide - Only on first card and only before flipping */}
  {index === 0 && !isFlipped && (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="absolute inset-x-0 bottom-12 z-20 flex flex-col items-center justify-center pointer-events-none"
    >
      <div className="bg-black/60 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 flex items-center gap-3 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
        <span className="text-xs font-sans font-bold text-white uppercase tracking-widest">Click to Flip & Inspect</span>
      </div>
    </motion.div>
  )}
  </div>

  <div className="absolute inset-0 backface-hidden bg-white/30 dark:bg-black/40 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)] p-4 md:p-10 flex flex-col justify-between overflow-y-auto rounded-[2rem]" style={{ transform: 'rotateY(180deg)' }}>
  <div>
  <h4 className="text-2xl md:text-3xl font-serif text-accent font-black uppercase mb-2">{project.title}</h4>
  <p className="font-sans font-bold text-xs uppercase mb-4 md:mb-6 text-black dark:text-white pb-2 inline-block">{project.subtitle}</p>
  <p className="text-xs md:text-sm mb-4 md:mb-8 font-sans font-medium text-black dark:text-white leading-relaxed text-justify">
  {project.desc}
  </p>
  </div>
  <div>
  <div className="flex flex-wrap gap-2 mb-8">
  {project.tech.map(t => (
  <span key={t} className="text-[10px] md:text-xs font-sans font-bold px-3 py-1.5 bg-white dark:bg-black text-black dark:text-white uppercase ">
  {t}
  </span>
  ))}
  </div>
  <div className="flex gap-6 mt-auto pt-6">
  <a href={project.link} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()} className="group flex items-center gap-2 text-xs md:text-sm font-sans font-bold uppercase text-black dark:text-white hover:text-accent transition-colors">
  LIVE <span className="w-8 h-[2px] bg-black dark:bg-white transition-all group-hover:w-12 group-hover:bg-accent" />
  </a>
  <a href={project.github} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()} className="text-xs md:text-sm font-sans font-bold uppercase text-black dark:text-white hover:text-accent transition-colors">
  GITHUB ↗
  </a>
  </div>
  </div>
  </div>
 </motion.div>
 </div>

 </div>
 </div>
 );
}

export default function TheBuild() {
 const sectionRef = useRef(null);
 const containerRef = useRef(null);

 useEffect(() => {
 let ctx = gsap.context(() => {
 const panels = gsap.utils.toArray('.project-panel');

 gsap.to(panels, {
 xPercent: -100 * (panels.length - 1),
 ease: "none",
 scrollTrigger: {
 trigger: containerRef.current,
 pin: true,
 scrub: 1,
 snap: 1 / (panels.length - 1),
 end: () => "+=" + containerRef.current.offsetWidth
 }
 });
 }, sectionRef);

 return () => ctx.revert();
 }, []);

 return (
 <section ref={sectionRef} className="relative bg-background overflow-hidden">
 
 <motion.div 
 className="absolute inset-0 z-0 mix-blend-multiply dark:mix-blend-color-dodge bg-cover bg-center origin-bottom pointer-events-none"
 style={{ backgroundImage: "url('/assets/fire_bg.png')" }}
 animate={{
 opacity: [0.2, 0.5, 0.3, 0.6, 0.2],
 scale: [1, 1.05, 1.02, 1.06, 1],
 }}
 transition={{
 duration: 6,
 repeat: Infinity,
 repeatType: "reverse",
 ease: "easeInOut"
 }}
 />

 <div className="w-full h-[60vh] relative overflow-hidden flex flex-col items-center justify-center border-t ">
 <div
 className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 scale-105 parallax-banner"
 style={{ backgroundImage: "url('/assets/bg_night_3_1786807089546.png')" }}
 />
 <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
 <h2 className="text-5xl md:text-7xl font-serif relative z-10 text-center tracking-tight text-text">
 The <span className="text-accent italic font-light">Build</span>
 </h2>
 <span className="font-mono text-xs tracking-[0.4em] uppercase text-accent relative z-10 mt-6">Chapter 02</span>
 </div>



 <div className="w-full overflow-hidden">
 <div ref={containerRef} className="flex flex-nowrap" style={{ width: `${projects.length * 100}vw`, height: '100vh' }}>
 {projects.map((project, index) => (
 <ProjectCard key={index} project={project} index={index} />
 ))}
 </div>
 </div>
 </section>
 );
}

