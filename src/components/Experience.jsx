import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
    {
        role: "Web Developer Intern",
        company: "Orbosisglobal",
        period: "Sep 2025 - Present",
        description: [
            "Customized and structured a responsive WordPress website, including theme modifications, layout and SEO configuration.",
            "Configured essential plugins for contact forms, navigation flow, and performance optimization to enhance overall user interaction.",
            "Transformed the WordPress website into an Android application using Android Studio while preserving content hierarchy and structural consistency."
        ],
        skills: ["WordPress", "Android Studio", "SEO", "UI/UX"]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="pb-12 pt-4 relative z-10 w-full">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-6 sm:mb-8"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold tracking-tighter mb-2 sm:mb-4 text-accent"><span className="text-zinc-600">MY</span> EXPERIENCE</h2>
                </motion.div>

                <div className="space-y-8 sm:space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-zinc-900/50 backdrop-blur-sm border border-white/10 p-5 sm:p-8 rounded-xl sm:rounded-2xl group hover:border-white/20 transition-colors relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 sm:p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Briefcase className="w-16 h-16 sm:w-24 sm:h-24" />
                            </div>

                            <div className="relative z-10">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                    <div>
                                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-accent transition-colors">{exp.role}</h3>
                                        <p className="text-lg sm:text-xl text-gray-400">{exp.company}</p>
                                    </div>
                                    <span className="text-sm font-mono text-gray-400 bg-white/5 px-4 py-2 rounded-full border border-white/10 w-fit">
                                        {exp.period}
                                    </span>
                                </div>

                                <ul className="space-y-3 mt-6 text-gray-300">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="text-accent mt-1.5">•</span>
                                            <span className="leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Skill Tags */}
                                <div className="mt-8 flex flex-wrap gap-2 pt-6 border-t border-white/5">
                                    {exp.skills.map((skill, sIdx) => (
                                        <span 
                                            key={sIdx}
                                            className="px-3 py-1 bg-black rounded-lg text-xs font-medium text-gray-300 border border-white/10 hover:border-accent/50 hover:text-accent cursor-default transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
