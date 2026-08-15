import { motion } from 'framer-motion';

export default function Connections() {
  return (
    <section className="py-24 bg-[#111] dark:bg-[#050505] text-white relative overflow-hidden" id="connections">
      {/* Background texture for Connections */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,transparent_100%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center justify-center text-center min-h-[50vh]">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="font-sans font-bold text-xs md:text-sm uppercase text-white/50 mb-4 tracking-widest">
            // End of the Line
          </div>
          
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black uppercase mb-12">
            Let's <span className="text-accent italic font-light">Connect</span>
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            <a 
              href="mailto:basharkhan24k@gmail.com" 
              className="group relative inline-flex items-center justify-center px-8 py-4 font-sans font-bold text-sm md:text-base uppercase tracking-wider text-white border-2 border-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Email Me
              </span>
            </a>

            <a 
              href="https://www.linkedin.com/in/basharahmadkhan10/"
              target="_blank" rel="noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-sans font-bold text-sm md:text-base uppercase tracking-wider text-white border-2 border-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn
              </span>
            </a>

            <a 
              href="https://github.com/basharahmadkhan10" 
              target="_blank" rel="noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-sans font-bold text-sm md:text-base uppercase tracking-wider text-white border-2 border-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                GitHub
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
