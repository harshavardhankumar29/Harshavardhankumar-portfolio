import { motion } from 'framer-motion';
import { Trophy, Code, BrainCircuit } from 'lucide-react';

const achievements = [
    {
        title: "Top 10 Finalist",
        platform: "Code-A-Haunt Hackathon, LPU",
        description: "Secured a top 10 place out of numerous teams by building and pitching a competitive project within a strict 24-hour timeframe.",
        icon: <Trophy className="w-8 h-8 text-yellow-500" />
    },
    {
        title: "Agentic AI Authored",
        platform: "Google & Kaggle",
        description: "Completed an intensive 5-day Agentic AI program with Google and Kaggle, successfully implementing and deploying autonomous agents.",
        icon: <BrainCircuit className="w-8 h-8 text-blue-500" />
    },
    {
        title: "250+ Problems Solved",
        platform: "DSA & Algorithmic Practice",
        description: "Solved 250+ algorithmic problems across LeetCode, GeeksforGeeks, and similar competitive coding platforms to master core CS concepts.",
        icon: <Code className="w-8 h-8 text-emerald-500" />
    }
];

export default function Achievements() {
    return (
        <section id="achievements" className="pb-12 pt-4 relative z-10 w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-6 sm:mb-8"
            >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold tracking-tighter mb-2 sm:mb-4 text-accent"><span className="text-zinc-600">KEY</span> ACHIEVEMENTS</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {achievements.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-zinc-900/40 border border-white/5 p-5 sm:p-6 rounded-xl sm:rounded-2xl flex flex-col justify-between group hover:border-white/20 transition-all hover:-translate-y-1"
                    >
                        <div className="mb-4 sm:mb-6 bg-black/50 w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform">
                            {item.icon}
                        </div>
                        <div>
                            <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{item.title}</h3>
                            <p className="text-xs sm:text-sm text-accent font-mono mb-2 sm:mb-3">{item.platform}</p>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
