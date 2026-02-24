import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const xLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
    const xRight = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden z-10">

            <div className="w-full flex flex-col items-center justify-center relative z-10 mix-blend-difference">
                <motion.h1
                    style={{ x: xLeft, opacity }}
                    className="text-[12vw] leading-[0.8] font-black tracking-tighter text-transparent bg-clip-text bg-white/10 stroke-white/50 whitespace-nowrap cursor-default hover:text-accent transition-colors duration-300 select-none"
                // Note: text-transparent with stroke logic is handled better via CSS or custom style below if Tailwind utilities aren't enough.
                // Using inline styles for webkit-text-stroke as it's cleaner than arbitrary Tailwind values sometimes.
                >
                    <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}>FULL STACK</span>
                </motion.h1>

                <motion.h1
                    style={{ x: xRight, opacity }}
                    className="text-[12vw] leading-[0.8] font-black tracking-tighter text-transparent whitespace-nowrap cursor-default hover:text-accent transition-colors duration-300 select-none"
                >
                    <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}>DEVELOPER</span>
                </motion.h1>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute bottom-20 md:bottom-12 flex flex-col items-center gap-6 z-20 mix-blend-difference"
            >
                <p className="text-gray-400 text-lg md:text-xl max-w-lg text-center leading-relaxed">
                    Full Stack Developer crafting digital experiences with code, systems, and AI.
                </p>

                <div className="flex gap-4 md:gap-6 flex-wrap justify-center">
                    <a
                        href="#work"
                        className="group relative px-8 py-3 bg-accent text-black rounded-full font-medium overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            View Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </a>

                    <a
                        href="/Harsha_Vardhan_Kumar_Resume.pdf"
                        download="Harsha_Vardhan_Kumar_Resume.pdf"
                        className="group relative px-8 py-3 bg-white/5 text-white border border-white/20 rounded-full font-medium overflow-hidden transition-all hover:bg-white/10 hover:border-white/40"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Resume
                        </span>
                    </a>
                </div>
            </motion.div>

        </section>
    );
}
