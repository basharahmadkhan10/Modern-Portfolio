export default function Outro() {
    return (
        <section className="py-32 px-8 min-h-[50vh] flex flex-col items-center justify-center border-t hairline-border relative overflow-hidden">
            <div className="absolute inset-0 bg-accent/5 dark:bg-accent/10" />
            <h2 className="text-6xl md:text-8xl font-serif text-center relative z-10 text-brown-gradient dark:text-white drop-shadow-md">
                Say <span className="text-accent italic font-light">Hello</span>
            </h2>
            <div className="relative z-10 flex gap-6 mt-12">
                <a href="mailto:hello@example.com" className="font-sans font-bold text-xs tracking-widest uppercase hover:text-accent transition-colors px-6 py-3 bg-[#f5f3eb] dark:bg-[#111111] text-black dark:text-white hover:-translate-y-1">
                    Email
                </a>
                <a href="https://www.linkedin.com/in/basharahmadkhan10/" target="_blank" rel="noreferrer" className="font-sans font-bold text-xs tracking-widest uppercase hover:text-accent transition-colors px-6 py-3 bg-[#f5f3eb] dark:bg-[#111111] text-black dark:text-white hover:-translate-y-1">
                    LinkedIn
                </a>
                <a href="https://github.com/basharahmadkhan10" target="_blank" rel="noreferrer" className="font-sans font-bold text-xs tracking-widest uppercase hover:text-accent transition-colors px-6 py-3 bg-[#f5f3eb] dark:bg-[#111111] text-black dark:text-white hover:-translate-y-1">
                    GitHub
                </a>
            </div>
        </section>
    );
}
