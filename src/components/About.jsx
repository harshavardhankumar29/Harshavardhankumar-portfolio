import { motion } from 'framer-motion';
import { MapPin, Code2, Globe, ArrowUpRight, GraduationCap } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="py-32 px-6 md:px-12 relative z-10 bg-black text-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl font-bold tracking-tighter mb-4">About Me</h2>
                    <p className="text-gray-400 max-w-xl">
                        A glimpse into my world, my work, and what drives me.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">

                    {/* Bio Card - Large */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 row-span-2 bg-zinc-900/50 backdrop-blur-sm border border-white/10 p-8 rounded-2xl flex flex-col justify-between group hover:border-white/20 transition-colors"
                    >
                        <div className="mb-4">
                            <h3 className="text-2xl font-bold mb-4">Harsha Vardhan Kumar</h3>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                I'm a Full Stack Developer who obsesses over the <span className="text-white decoration-accent underline decoration-1 underline-offset-4">details</span>.
                                Currently pursuing B.Tech in Computer Science at <span className="text-white font-medium">Lovely Professional University</span> (CGPA: 8.4),
                                I build scalable, accessible web applications using the MERN stack, REST APIs, and real-time technologies.
                                I've also explored AI/ML through hands-on training and Agentic AI programs with Google & Kaggle.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <div className="px-4 py-2 bg-white/5 rounded-full text-sm border border-white/10">Full Stack</div>
                            <div className="px-4 py-2 bg-white/5 rounded-full text-sm border border-white/10">MERN Ecosystem</div>
                            <div className="px-4 py-2 bg-white/5 rounded-full text-sm border border-white/10">AI / ML</div>
                            <div className="px-4 py-2 bg-white/5 rounded-full text-sm border border-white/10">Problem Solving</div>
                        </div>
                    </motion.div>

                    {/* Location Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-zinc-900/50 backdrop-blur-sm border border-white/10 p-6 rounded-2xl flex flex-col justify-between group hover:border-white/20 transition-colors"
                    >
                        <div className="bg-white/5 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                            <MapPin className="text-white" />
                        </div>
                        <div>
                            <h4 className="text-sm text-gray-400 uppercase tracking-wider mb-2">Based In</h4>
                            <p className="text-xl font-bold">Punjab, India</p>
                            <p className="text-sm text-gray-500 mt-1">LPU · UTC+5:30</p>
                        </div>
                    </motion.div>

                    {/* Education Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="bg-zinc-900/50 backdrop-blur-sm border border-white/10 p-6 rounded-2xl flex flex-col justify-between group hover:border-white/20 transition-colors"
                    >
                        <div className="bg-white/5 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                            <GraduationCap className="text-white" />
                        </div>
                        <div>
                            <h4 className="text-sm text-gray-400 uppercase tracking-wider mb-2">Education</h4>
                            <p className="text-base font-bold leading-tight">B.Tech CSE</p>
                            <p className="text-sm text-gray-400 mt-1">LPU · CGPA 8.4</p>
                            <p className="text-xs text-gray-500 mt-1">Since Aug 2023</p>
                        </div>
                    </motion.div>

                    {/* Stack Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-zinc-900/50 backdrop-blur-sm border border-white/10 p-6 rounded-2xl flex flex-col justify-between group hover:border-white/20 transition-colors"
                    >
                        <div className="bg-white/5 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                            <Code2 className="text-white" />
                        </div>
                        <div>
                            <h4 className="text-sm text-gray-400 uppercase tracking-wider mb-2">Core Stack</h4>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-black rounded text-xs text-gray-300">React</span>
                                <span className="px-2 py-1 bg-black rounded text-xs text-gray-300">Node.js</span>
                                <span className="px-2 py-1 bg-black rounded text-xs text-gray-300">MongoDB</span>
                                <span className="px-2 py-1 bg-black rounded text-xs text-gray-300">Express</span>
                                <span className="px-2 py-1 bg-black rounded text-xs text-gray-300">C++</span>
                                <span className="px-2 py-1 bg-black rounded text-xs text-gray-300">Python</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Achievements Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.25 }}
                        className="bg-zinc-900/50 backdrop-blur-sm border border-white/10 p-6 rounded-2xl flex flex-col justify-between group hover:border-white/20 transition-colors"
                    >
                        <div>
                            <h4 className="text-sm text-gray-400 uppercase tracking-wider mb-4">Achievements</h4>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li>🏆 Top 10 · Code-A-Haunt Hackathon, LPU</li>
                                <li>🤖 Google & Kaggle Agentic AI Program</li>
                                <li>💻 250+ DSA problems solved</li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Connect Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="md:col-span-3 bg-gradient-to-r from-zinc-900 to-black border border-white/10 p-8 rounded-2xl flex items-center justify-between group hover:border-white/20 transition-colors relative overflow-hidden"
                    >
                        <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
                            <div className="bg-white text-black w-14 h-14 rounded-full flex items-center justify-center">
                                <Globe className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-1">Let's work together</h3>
                                <p className="text-gray-400">Have a project in mind?</p>
                            </div>
                        </div>

                        <a
                            href="#contact"
                            className="relative z-10 bg-accent text-black px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
                        >
                            Get in touch <ArrowUpRight className="w-4 h-4" />
                        </a>

                        {/* Abstract Background Element */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
