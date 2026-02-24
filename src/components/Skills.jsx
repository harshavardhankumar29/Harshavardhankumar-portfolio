import { motion } from 'framer-motion';

const skills = [
    "C++", "JavaScript", "Python", "PHP",
    "React", "Node.js", "Tailwind CSS", "Express.js",
    "MongoDB", "MySQL", "PostgreSQL", "REST APIs",
    "Git", "Streamlit", "Bootstrap", "HTML5 / CSS3"
];

export default function Skills() {
    return (
        <section className="py-24 bg-black overflow-hidden relative z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-20 pointer-events-none" />

            <div className="mb-12 text-center">
                <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest">Technologies</h3>
            </div>

            <div className="relative flex overflow-x-hidden">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 25,
                    }}
                    className="flex gap-16 whitespace-nowrap py-4"
                >
                    {/* Double the list to create seamless loop */}
                    {[...skills, ...skills].map((skill, index) => (
                        <span
                            key={index}
                            className="text-4xl md:text-6xl font-bold text-gray-800 hover:text-accent transition-colors cursor-default"
                        >
                            {skill}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
