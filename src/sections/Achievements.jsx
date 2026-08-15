import { motion } from 'framer-motion';

const certifications = [
  { name: "React Certificate", issuer: "HackerRank", date: "Feb 2026" },
  { name: "Cloud Computing", issuer: "NPTEL-Swayam", date: "Nov 2025" },
  { name: "OCI 2025 Certified AI Foundations", issuer: "Oracle", date: "Sept 2025" },
  { name: "Intro to Hardware and OS", issuer: "Coursera", date: "Sept 2024" }
];

export default function Achievements() {
  return (
    <section className="bg-background relative overflow-hidden" id="achievements">
      <motion.div
        className="absolute inset-0 z-0 mix-blend-multiply dark:mix-blend-color-dodge bg-cover bg-center origin-bottom pointer-events-none"
        style={{ backgroundImage: "url('/assets/fire_bg.png')" }}
        animate={{
          opacity: [0.05, 0.15, 0.08, 0.18, 0.05],
          scale: [1, 1.05, 1.02, 1.06, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />

      <div className="w-full h-[60vh] relative overflow-hidden flex flex-col items-center justify-center border-t border-white/10 dark:border-white/5">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 scale-105 parallax-banner"
          style={{ backgroundImage: "url('/assets/bg_night_2_1786806982934.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
        <h2 className="text-4xl md:text-7xl font-serif relative z-10 text-center tracking-tight text-text font-black uppercase">
          Honors & <span className="text-accent italic font-light">Glory</span>
        </h2>
        <span className="font-mono text-xs tracking-[0.4em] uppercase text-accent relative z-10 mt-6">Chapter 04</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 py-24 flex justify-center">
        <div className="max-w-3xl w-full space-y-12">
          {certifications.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              key={index}
              className="group relative"
            >
              <div className="absolute -left-6 top-0 bottom-0 w-[4px] bg-accent/20 group-hover:bg-accent transition-colors" />
              <div className="pl-6">
                <div className="font-sans font-bold text-xs md:text-sm text-accent uppercase mb-2 tracking-widest">
                  {item.date}
                </div>
                <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-black text-text uppercase mb-4 leading-none">
                  {item.name}
                </h3>
                <div className="inline-block px-4 py-2 bg-surface font-sans font-bold text-xs md:text-sm uppercase text-text border-2 border-surface-border shadow-sm">
                  {item.issuer}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
