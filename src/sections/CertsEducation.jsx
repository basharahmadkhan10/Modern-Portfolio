import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const items = [
  { year: '2023 — Present', title: 'Lovely Professional University', desc: 'B.Tech CSE — CGPA: 8.35' },
  { year: 'Feb 2026', title: 'HackerRank React Cert', desc: 'Advanced React patterns and performance' },
  { year: 'Nov 2025', title: 'NPTEL Cloud Computing', desc: 'Distributed systems and cloud architecture' },
  { year: 'Sep 2025', title: 'Oracle AI Foundations', desc: 'Cloud Infrastructure & AI Associate' },
  { year: 'Jul 2025', title: 'CipherSchool MERN', desc: 'Full-Stack Web Development Training' },
];

export default function CertsEducation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section className="py-32 px-8 min-h-screen flex items-center justify-center border-t hairline-border">
      <div className="max-w-4xl w-full" ref={ref}>
        <div className="flex items-baseline gap-6 mb-24 justify-center text-center">
          <h2 className="text-4xl md:text-6xl font-serif">Path</h2>
          <span className="font-mono text-xs tracking-[0.4em] uppercase text-accent">Chapter 04</span>
        </div>

        <div className="flex flex-col gap-12">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              className="group flex flex-col md:flex-row md:items-baseline justify-between gap-4 border-b hairline-border pb-8 relative"
            >
              {/* Subtle hover background block */}
              <div className="absolute inset-0 bg-surface/50 scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-out -z-10" />

              <div className="font-mono text-xs tracking-widest uppercase opacity-50 md:w-1/4">
                {item.year}
              </div>
              <div className="md:w-3/4 flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                <h3 className="text-xl md:text-2xl font-serif group-hover:text-accent transition-colors duration-300">
                  {item.title}
                </h3>
                <span className="font-mono text-sm opacity-70">
                  {item.desc}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
