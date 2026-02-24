import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: "Hospital Bed Management System",
        category: "Full Stack · MERN",
        description: "Real-time bed tracking with multi-role dashboards, appointment scheduling, billing, WebSocket integration & JWT auth.",
        color: "bg-emerald-500",
        link: "https://github.com/harshavardhankumar29",
        year: "2026"
    },
    {
        title: "Code Reviewer",
        category: "AI Tool · React + Node.js",
        description: "AI-driven code analysis platform that evaluates snippets and produces structured quality suggestions via LLM API.",
        color: "bg-blue-500",
        link: "https://github.com/harshavardhankumar29/Code-Reviewer",
        year: "2025"
    },
    {
        title: "Wanderlust",
        category: "Web App · Node.js + EJS",
        description: "Full-stack travel listing platform with session-based auth, CRUD workflows, and responsive Bootstrap UI.",
        color: "bg-orange-500",
        link: "https://github.com/harshavardhankumar29/Wanderlust",
        year: "2024"
    },
    {
        title: "Expense Splitter Bot",
        category: "Utility · Python",
        description: "Split group expenses effortlessly with instant fair splits and clear settlement instructions. Perfect for trips and shared bills.",
        color: "bg-purple-500",
        link: "https://github.com/harshavardhankumar29/Expense_Splitter_bot",
        year: "2024"
    }
];

function ProjectCard({ project, index }) {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className="group relative h-[420px] w-full bg-zinc-900 border border-white/10 group-hover:border-accent/50 transition-colors duration-500 p-8 cursor-pointer overflow-hidden"
        >
            <div
                style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d",
                }}
                className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />

            <div
                style={{ transform: "translateZ(50px)" }}
                className="relative z-10 h-full flex flex-col justify-between"
            >
                <div className="flex justify-between items-start">
                    <span className="text-xs font-mono text-gray-500">0{index + 1} · {project.year}</span>
                    <ArrowUpRight className="w-6 h-6 text-accent opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                </div>

                <div>
                    <div className="mb-4 overflow-hidden">
                        <div className={`w-12 h-12 rounded-full ${project.color} blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent group-hover:translate-x-2 transition-all duration-300">
                        {project.title}
                    </h3>
                    <p className="text-xs font-mono text-gray-500 mb-3">{project.category}</p>
                    <p className="text-gray-400 group-hover:text-white transition-colors duration-300 text-sm leading-relaxed">
                        {project.description}
                    </p>
                </div>
            </div>
        </motion.a>
    );
}

export default function Work() {
    return (
        <section id="work" className="py-32 px-6 md:px-12 relative z-10">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-end mb-16"
                >
                    <h2 className="text-4xl font-bold tracking-tighter text-white">
                        Selected Work
                    </h2>
                    <span className="text-gray-500 mt-4 md:mt-0 max-w-sm text-right hidden md:block">
                        Projects exploring full-stack development, AI tooling, and real-time systems.
                    </span>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 perspective-1000">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
