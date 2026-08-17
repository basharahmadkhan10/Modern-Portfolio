import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
 {
 title: 'ORION',
 subtitle: 'Autonomous AI Research Desk',
 desc: [
   'Architected a production-grade multi-agent ecosystem using LangGraph, simulating a full-fledged institutional equity research desk.',
   'Designed an adversarial debate architecture where a Bull Agent and Bear Agent autonomously fetch live Yahoo Finance data, formulate opposing investment thesis, and debate them in real-time.',
   'Implemented a CIO Judge Agent that cross-examines the debate, applying strict kill-criteria to issue definitive INVEST/WATCH/PASS verdicts, supported by immutable evidence ledgers in MongoDB.'
 ],
 tech: ['LangGraph JS', 'Gemini 1.5 Pro', 'React', 'MongoDB'],
 image: '/assets/project_orion_new.png',
 link: 'https://orion-kappa-nine.vercel.app',
 github: 'https://github.com/basharahmadkhan10/Orion'
 },
 {
 title: 'CodeX Arena',
 subtitle: 'Real-Time 1v1 Coding Platform',
 desc: [
   'Engineered a highly scalable competitive coding platform focusing on low-latency synchronized execution and real-time state management.',
   'Leveraged Socket.io for instantaneous matchmaking, live opponent keystroke tracking, and state synchronization across client nodes.',
   'Integrated a custom Monaco Editor paired with the JDoodle API to execute code against hidden test cases securely. Enforced strict anti-cheat mechanisms (tab-switch tracking, fullscreen enforcement) and a mathematical Elo-based ranking system for competitive integrity.'
 ],
 tech: ['React', 'Socket.io', 'Node.js', 'JDoodle API'],
 image: '/assets/project_codex_new.png',
 link: 'https://codex-arena.onrender.com',
 github: 'https://github.com/basharahmadkhan10/CodeX-Arena'
 },
 {
 title: 'CivicFix',
 subtitle: 'Community Issue Platform',
 desc: [
   'Built a backend-heavy civic governance system revolving around a strict, state-machine-driven issue lifecycle (Reported -> Verified -> Assigned -> Resolved).',
   'Designed an audit-first backend architecture ensuring that every status update creates an append-only immutable action log, establishing absolute transparency and operational accountability without hard-deletes.',
   'Implemented robust JWT-based Role-Based Access Control (RBAC), strictly segregating privileges between Citizens, Field Officers, Supervisors, and Admins at the API gateway level.'
 ],
 tech: ['Node.js', 'MongoDB', 'JWT RBAC', 'React'],
 image: '/assets/project_civicfix_new.png',
 link: 'https://civicfix-frontend02.onrender.com',
 github: 'https://github.com/basharahmadkhan10/CivicFix'
 },
 {
 title: 'LifeLink',
 subtitle: 'Privacy-First Blood Donation',
 desc: [
   'Developed a scalable, privacy-first blood donation network designed to handle concurrent emergency broadcast operations.',
   'Utilized MongoDB geospatial queries ($centerSphere) to broadcast real-time emergency requests instantly to eligible donors within a 50km radius of the incident.',
   'Engineered critical medical constraint logic at the database level, enforcing strict cooldown periods to ensure donor safety and implementing transaction-level concurrency control to prevent multiple donors from accepting the same emergency.'
 ],
 tech: ['Laravel 11', 'MongoDB Atlas', 'Tailwind', 'PHP'],
 image: '/assets/project_lifelink_new.png',
 link: 'https://lifelink-1-h40a.onrender.com',
 github: 'https://github.com/basharahmadkhan10/LifeLink'
 },
 {
 title: 'Expense Tracker',
 subtitle: 'Flatmate Expense & Reconciliation',
 desc: [
   'Architected a production-ready financial reconciliation engine capable of untangling complex, multi-currency shared expenses amongst dynamic friend groups.',
   'Built advanced time-travel membership logic, strictly enforcing join/leave date boundaries to prevent users from being billed for expenses incurred when they were not active members.',
   'Implemented an optimal debt settlement algorithm (Graph Traversal) that mathematically minimizes the total number of transactions required to settle all outstanding balances, alongside robust CSV import sanitization queues.'
 ],
 tech: ['Next.js 14', 'Prisma', 'PostgreSQL', 'Tailwind v4'],
 image: '/assets/project_expense_new.png',
 link: 'https://expense-tracker-eight-nu-64.vercel.app',
 github: 'https://github.com/basharahmadkhan10/ExpenseTracker'
 },
 {
 title: 'DevPrep',
 subtitle: 'AI Interview Preparation Platform',
 desc: [
   'Developed an intelligent, context-aware interview preparation suite that bridges the gap between candidate resumes and raw job descriptions.',
   'Integrated the Claude/Gemini API to programmatically parse PDF resumes against JD embeddings, generating precise match scoring, skill gap identification, and highly specific technical/behavioral interview questions.',
   'Hardened the backend with production-grade security, including route-level rate limiting against brute-force attacks, secure Google OAuth 2.0 flows, and robust JWT access/refresh token rotation.'
 ],
 tech: ['React.js', 'Gemini AI', 'OAuth 2.0', 'Express'],
 image: '/assets/project_devprep_new.png',
 link: 'https://dev1prep.onrender.com',
 github: 'https://github.com/basharahmadkhan10/DevPrep'
 },
 {
 title: 'Bill Quill',
 subtitle: 'Professional Invoice Generator',
 desc: [
   'Engineered a comprehensive financial SaaS application focused on automating client billing, reporting workflows, and transaction structuring.',
   'Designed modular REST APIs in Express.js supporting highly dynamic invoice generation, including instant printable formats, secure XML data exports, and automated Excel monthly report synthesis.',
   'Structured the MongoDB data modeling to ensure flawless relational tracking between clients, recurring line items, tax compliance configurations, and historical payments.'
 ],
 tech: ['Node.js', 'Express', 'MongoDB', 'TailwindCSS'],
 image: '/assets/project_billquill_new.png',
 link: 'https://bill-quill-frontend.onrender.com',
 github: 'https://github.com/basharahmadkhan10/Bill-Quill-frontend'
 }
];

function ProjectCard({ project, index }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showTutorial, setShowTutorial] = useState(index === 0);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { margin: "-20%" });

  useEffect(() => {
    if (!isInView && isFlipped) {
      setIsFlipped(false);
    }
  }, [isInView, isFlipped]);

  useEffect(() => {
    if (showTutorial && isInView) {
      const timer = setTimeout(() => {
        setShowTutorial(false);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [showTutorial, isInView]);


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
  onClick={() => {
    setIsFlipped(!isFlipped);
    setShowTutorial(false);
  }}
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
  
  {/* Modern Tutorial Overlay */}
  <AnimatePresence>
    {showTutorial && !isFlipped && (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 z-30 bg-black/70 backdrop-blur-sm rounded-[2rem] flex flex-col items-center justify-center"
      >
        <motion.div
          animate={{ scale: [1, 0.85, 1], y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="text-white mb-6 drop-shadow-2xl"
        >
          {/* Hand clicking icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/>
            <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"/>
            <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/>
            <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>
          </svg>
        </motion.div>
        <p className="font-sans font-bold text-sm md:text-xl text-white uppercase tracking-[0.2em] drop-shadow-md text-center px-4">
          Tap Card to Flip
        </p>
      </motion.div>
    )}
  </AnimatePresence>
  </div>

  <div className="absolute inset-0 backface-hidden bg-white/30 dark:bg-black/40 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)] p-5 md:p-10 flex flex-col justify-between overflow-y-auto rounded-[2rem]" style={{ transform: 'rotateY(180deg)' }}>
  <div>
  <h4 className="text-2xl md:text-3xl font-serif text-accent font-black uppercase mb-1">{project.title}</h4>
  <p className="font-sans font-bold text-[10px] md:text-xs uppercase mb-4 md:mb-6 text-black dark:text-white pb-2 inline-block border-b border-black/10 dark:border-white/10">{project.subtitle}</p>
  
  <div className="flex flex-col gap-3 md:gap-4 mb-6 md:mb-8">
    {project.desc.map((paragraph, i) => (
      <p key={i} className="text-xs md:text-sm font-sans font-medium text-black dark:text-white/90 leading-relaxed text-justify">
        {paragraph}
      </p>
    ))}
  </div>
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

