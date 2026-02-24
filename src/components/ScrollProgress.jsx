import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Check valid height to prevent animation on short pages
    // But for this portfolio, it's always scrollable.

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-[100] mix-blend-difference"
            style={{ scaleX }}
        />
    );
}
