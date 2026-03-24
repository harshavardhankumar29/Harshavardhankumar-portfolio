import { motion } from 'framer-motion';
import { LayoutTemplate, Server, Code2, Wrench } from 'lucide-react';

const skillCategories = [
    {
        title: "Languages",
        icon: <Code2 className="w-5 h-5 text-accent" />,
        skills: ["C++", "JavaScript (ES6+)", "Python", "PHP"]
    },
    {
        title: "Frameworks",
        icon: <LayoutTemplate className="w-5 h-5 text-accent" />,
        skills: ["React", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Streamlit", "REST APIs", "Responsive Design"]
    },
    {
        title: "Backend & Database",
        icon: <Server className="w-5 h-5 text-accent" />,
        skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "PostgreSQL", "phpMyAdmin"]
    },
    {
        title: "Tools & Soft Skills",
        icon: <Wrench className="w-5 h-5 text-accent" />,
        skills: ["Git", "GitHub", "VS Code", "Postman", "Problem-Solving", "Project Management", "Team Collaboration"]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="pb-12 pt-4 relative z-10 w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-6 sm:mb-8"
            >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold tracking-tighter mb-2 sm:mb-4 text-accent"><span className="text-zinc-600">MY</span> SKILLS</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {skillCategories.map((category, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-zinc-900/40 border border-white/5 p-5 sm:p-6 rounded-xl sm:rounded-2xl hover:border-white/20 transition-colors"
                    >
                        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                            <div className="bg-black p-2 rounded-lg border border-white/10">
                                {category.icon}
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">{category.title}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, sIdx) => (
                                <span 
                                    key={sIdx}
                                    className="px-3 py-1.5 bg-black/50 border border-white/10 rounded-lg text-sm text-gray-300 hover:text-accent hover:border-accent/50 transition-all cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
