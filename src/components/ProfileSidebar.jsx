import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, Download, ExternalLink } from 'lucide-react';

export default function ProfileSidebar() {
    const roles = [
        "Full Stack Developer",
        "MERN Ecosystem",
        "AI/ML Enthusiast",
        "Problem Solver"
    ];

    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [roles.length]);

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full bg-[#111] rounded-[2rem] p-5 lg:p-6 border border-white/5 flex flex-col items-center text-center shadow-2xl"
        >
            {/* Stylized Avatar */}
            <div className="relative w-32 h-32 lg:w-32 lg:h-32 xl:w-40 xl:h-40 mb-4 lg:mb-5 rounded-2xl sm:rounded-3xl overflow-hidden bg-black border border-white/10 group shadow-[0_0_30px_-10px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_-5px_var(--accent-color)] transition-shadow duration-500">
                <img 
                    src="/profile.png" 
                    alt="Harsha Vardhan Kumar" 
                    className="w-full h-full object-cover object-top filter contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-700 relative z-10"
                    onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                    }}
                />
                <div className="absolute inset-0 hidden flex-col items-center justify-center text-6xl font-black text-white/20 group-hover:text-white transition-colors duration-500 z-0">

                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-20 pointer-events-none" />
            </div>

            {/* Name & Animated Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-black tracking-tighter uppercase mb-2 lg:mb-3 text-accent leading-none">
                Harsha Vardhan Kumar
            </h1>

            <div className="h-6 sm:h-8 lg:h-6 xl:h-7 mb-3 lg:mb-4 overflow-hidden relative">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={currentRoleIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="text-accent font-mono text-lg absolute left-0"
                    >
                        &gt; {roles[currentRoleIndex]}
                    </motion.div>
                </AnimatePresence>
            </div>

            <p className="text-gray-300 text-base sm:text-lg lg:text-sm xl:text-base leading-snug lg:leading-normal mb-5 lg:mb-6 px-2 lg:px-0">
                Full Stack Developer crafting digital experiences with code, systems, and AI.
            </p>

            <div className="flex gap-2 lg:gap-3 xl:gap-4 mb-6 lg:mb-8 flex-wrap justify-center">
                {[
                    { icon: Github, href: "https://github.com/harshavardhankumar29" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/harsha-vardhan-kumar24/" },
                    { icon: Twitter, href: "https://x.com/hharsha2904" },
                    { icon: Mail, href: "mailto:hharsha2904@gmail.com" }
                ].map((social, index) => {
                    const Icon = social.icon;
                    return (
                        <a key={index} href={social.href} target="_blank" rel="noopener noreferrer"
                            className="w-10 h-10 lg:w-10 lg:h-10 xl:w-12 xl:h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none transition-all duration-300">
                            <Icon size={20} />
                        </a>
                    );
                })}
            </div>

            <a
                href="/Harsha_Vardhan_Kumar_Resume.pdf"
                download="Harsha_Vardhan_Kumar_Resume.pdf"
                className="w-full py-3 lg:py-3 xl:py-4 bg-accent hover:opacity-80 text-black rounded-full font-bold focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-none transition-all duration-300 border border-transparent flex items-center justify-center gap-2 text-sm xl:text-base"
            >
                <Download size={18} />
                Download Resume
            </a>
        </motion.div>
    );
}
