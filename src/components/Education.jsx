import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const educationData = [
    {
        degree: "B.Tech in Computer Science and Engineering",
        institution: "Lovely Professional University (LPU), Punjab",
        period: "Aug 2023 - Present",
        grade: "CGPA: 8.4",
        description: "Focusing on core computer science subjects, Full Stack Development, and undertaking various AI/ML specializations."
    },
    {
        degree: "Intermediate (Class 12th)",
        institution: "Narayana Junior College, Hyderabad",
        period: "Apr 2020 - May 2022",
        grade: "93%",
        description: "Studied core sciences with a strong focus on mathematics and physics, laying the foundation for engineering coursework."
    },
    {
        degree: "Matriculation (Class 10th)",
        institution: "Hindu Public School, Hyderabad",
        period: "Apr 2014 - Mar 2020",
        grade: "89.5%",
        description: "Completed secondary education with high merit, building strong analytical and problem-solving fundamentals."
    }
];

export default function Education() {
    return (
        <section id="education" className="pb-12 pt-4 relative z-10 w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-6 sm:mb-8"
            >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold tracking-tighter mb-2 sm:mb-4 text-accent"><span className="text-zinc-600">MY</span> EDUCATION</h2>
            </motion.div>

            <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-8 sm:space-y-12 pb-4">
                {educationData.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative pl-8 md:pl-12"
                    >
                        {/* Timeline Node */}
                        <div className="absolute -left-4 top-1 w-8 h-8 bg-black border border-white/20 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full" />
                        </div>

                        <div className="bg-zinc-900/40 hover:bg-zinc-900/60 transition-colors border border-white/5 p-5 md:p-8 rounded-xl md:rounded-2xl group">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-accent transition-colors">{item.degree}</h3>
                                    <p className="text-base sm:text-lg text-gray-400 mt-1">{item.institution}</p>
                                </div>
                                <div className="flex flex-col items-start md:items-end">
                                    <span className="text-sm font-mono text-gray-500 bg-white/5 px-3 py-1 rounded-full border border-white/10 mb-2">
                                        {item.period}
                                    </span>
                                    <span className="text-sm font-bold text-accent">
                                        {item.grade}
                                    </span>
                                </div>
                            </div>
                            <p className="text-gray-400 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
