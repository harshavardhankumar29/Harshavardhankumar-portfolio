import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: "Hospital Bed Management System",
        category: "Full Stack · MERN",
        description: "Real-time bed tracking with multi-role dashboards, appointment scheduling, billing, WebSocket integration & JWT auth.",
        color: "bg-emerald-500",
        link: "https://github.com/harshavardhankumar29",
        year: "2026",
        image: "/projects/hospital_bed.png"
    },
    {
        title: "Code Reviewer",
        category: "AI Tool · React + Node.js",
        description: "AI-driven code analysis platform that evaluates snippets and produces structured quality suggestions via LLM API.",
        color: "bg-blue-500",
        link: "https://github.com/harshavardhankumar29/Code-Reviewer",
        year: "2025",
        image: "/projects/code_reviewer.png"
    },
    {
        title: "Wanderlust",
        category: "Web App · Node.js + EJS",
        description: "Full-stack travel listing platform with session-based auth, CRUD workflows, and responsive Bootstrap UI.",
        color: "bg-orange-500",
        link: "https://github.com/harshavardhankumar29/Wanderlust",
        year: "2024",
        image: "/projects/wanderlust.png"
    },
    {
        title: "Expense Splitter Bot",
        category: "Utility · Python",
        description: "Split group expenses effortlessly with instant fair splits and clear settlement instructions. Perfect for trips and shared bills.",
        color: "bg-purple-500",
        link: "https://github.com/harshavardhankumar29/Expense_Splitter_bot",
        year: "2024",
        image: "/projects/expense_splitter.png"
    }
];

function ProjectCard({ project, index }) {
    return (
        <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative flex flex-col md:flex-row gap-4 sm:gap-6 p-3 sm:p-4 rounded-2xl sm:rounded-3xl bg-[#0a0a0a] hover:bg-[#151515] transition-colors duration-500 border border-white/5 hover:border-white/10 cursor-pointer overflow-hidden focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
        >
            {/* Thumbnail / Graphic Background */}
            <div className="w-full md:w-1/3 aspect-video md:aspect-[3/4] lg:aspect-video rounded-xl sm:rounded-2xl overflow-hidden relative border border-white/5 bg-black z-10 group-hover:border-white/10 transition-colors">
                {project.image && (
                    <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                )}
                <div className={`absolute inset-0 ${project.color} opacity-20 group-hover:opacity-0 transition-opacity duration-500 mix-blend-overlay`} />
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] rounded-full ${project.color} blur-[80px] opacity-30 group-hover:opacity-40 transition-all duration-700 mix-blend-screen scale-50 group-hover:scale-100 pointer-events-none`} />
            </div>

            {/* Content Area */}
            <div className="w-full md:w-2/3 flex flex-col justify-center py-4 px-2 md:px-4 relative z-20">
                 <div className="absolute top-4 right-4 text-orange-500 opacity-0 group-hover:opacity-100 -translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="w-6 h-6" />
                 </div>

                 <span className="text-xs font-mono text-gray-500 mb-1 sm:mb-2">0{index + 1} · {project.year}</span>
                 <h3 className="text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl font-bold text-white mb-1 sm:mb-2 group-hover:text-white transition-colors duration-300">
                     {project.title}
                 </h3>
                 <p className="text-xs sm:text-sm font-mono text-gray-400 mb-2 sm:mb-4">{project.category}</p>
                 <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-sm md:text-base leading-relaxed max-w-xl mb-6">
                     {project.description}
                 </p>
                 <div className="hidden md:flex items-center gap-4 bg-black/50 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0 group-hover/btn:bg-white/10 cursor-pointer w-fit">
                    <span className="text-accent font-bold text-lg">View Project</span>
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center group-hover/btn:scale-110 transition-transform">
                        <ArrowUpRight className="text-black w-6 h-6" />
                    </div>
                 </div>
            </div>
        </motion.a>
    );
}

export default function Work() {
    return (
        <section id="work" className="py-12 relative z-10 w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-6 sm:mb-8"
            >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold tracking-tighter mb-2 sm:mb-4 text-accent">
                    <span className="text-zinc-600">RECENT</span> PROJECTS
                </h2>
            </motion.div>

            <div className="flex flex-col gap-4 sm:gap-6">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </section>
    );
}
