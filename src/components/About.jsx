import { motion } from 'framer-motion';
import { MapPin, Globe, ArrowUpRight, Sparkles, Terminal, Cpu } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="pb-12 pt-4 relative z-10 w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-6 sm:mb-8"
            >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold tracking-tighter mb-2 sm:mb-4 text-accent"><span className="text-zinc-600">ABOUT</span> ME</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">

                {/* Bio Card - Large */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="md:col-span-2 bg-zinc-900/40 border border-white/5 p-6 sm:p-8 rounded-2xl flex flex-col justify-between group hover:border-white/20 transition-colors"
                >
                    <div className="mb-4">
                        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                            <h3 className="text-xl sm:text-2xl font-bold">My Philosophy</h3>
                        </div>
                        <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                            I'm a Full Stack Developer who obsesses over the <span className="text-white decoration-accent underline decoration-1 underline-offset-4">details</span>.
                            I build scalable, accessible web applications using the MERN stack, REST APIs, and real-time technologies.
                            My passion extends into AI/ML and Agentic AI systems, allowing me to bridge the gap between traditional development and intelligent solutions.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-auto">
                            <div className="bg-black/50 border border-white/5 p-3 sm:p-4 rounded-xl flex-1 flex items-center gap-3">
                                <Terminal className="w-5 h-5 text-gray-400" />
                                <div>
                                    <p className="text-sm text-gray-400">Core Stack</p>
                                    <p className="font-medium text-white">MERN / Next.js</p>
                                </div>
                            </div>
                            <div className="bg-black/50 border border-white/5 p-4 rounded-xl flex-1 flex items-center gap-3">
                                <Cpu className="w-5 h-5 text-gray-400" />
                                <div>
                                    <p className="text-sm text-gray-400">Focus Area</p>
                                    <p className="font-medium text-white">Agentic AI & Scale</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Location Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-zinc-900/40 border border-white/5 p-5 sm:p-6 rounded-2xl flex flex-col justify-between group hover:border-white/20 transition-colors"
                >
                    <div className="bg-black/50 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4 border border-white/5 group-hover:border-white/20 transition-colors">
                        <MapPin className="text-accent" />
                    </div>
                    <div>
                        <h4 className="text-sm text-gray-400 uppercase tracking-wider mb-2">Based In</h4>
                        <p className="text-xl font-bold text-white">Punjab, India</p>
                        <p className="text-sm text-gray-400 mt-1 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            LPU · UTC+5:30
                        </p>
                    </div>
                </motion.div>

                {/* Connect Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="md:col-span-3 bg-gradient-to-r from-zinc-900/80 to-black border border-white/5 p-6 sm:p-8 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between group hover:border-white/20 transition-colors relative overflow-hidden"
                >
                    <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-4 sm:gap-6 mb-6 md:mb-0">
                        <div className="bg-accent text-black w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
                            <Globe className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold mb-1 text-white">Let's work together</h3>
                            <p className="text-gray-400 text-sm sm:text-base">Have a project in mind?</p>
                        </div>
                    </div>

                    <a
                        href="#contact"
                        className="relative z-10 bg-accent text-black px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:opacity-90 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-none transition-all group-hover:-translate-y-1"
                    >
                        Get in touch <ArrowUpRight className="w-4 h-4" />
                    </a>
                </motion.div>

            </div>
        </section>
    );
}
