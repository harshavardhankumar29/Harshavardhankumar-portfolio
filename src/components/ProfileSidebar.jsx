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
            className="w-full bg-[#111] rounded-[2rem] p-8 border border-white/5 flex flex-col items-center text-center shadow-2xl"
        >
            {/* Stylized Avatar */}
            <div className="relative w-48 h-48 mb-8 rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 group">
                <div className="absolute inset-0 bg-white/5 blur-xl group-hover:bg-white/10 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center text-6xl font-black text-white/20 group-hover:text-white transition-colors duration-500">
                    HK
                </div>
            </div>

            {/* Name & Animated Title */}
            <h1 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase mb-4 text-accent">
                Harsha Vardhan <br />Kumar
            </h1>
            
            <div className="h-8 mb-6 overflow-hidden relative">
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

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Full Stack Developer crafting digital experiences with code, systems, and AI.
            </p>

            <div className="flex gap-4 mb-10">
                {[
                    { icon: Github, href: "https://github.com/harshavardhankumar29" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/harsha-vardhan-kumar24/" },
                    { icon: Twitter, href: "https://x.com/hharsha2904" },
                    { icon: Mail, href: "mailto:hharsha2904@gmail.com" }
                ].map((social, index) => {
                    const Icon = social.icon;
                    return (
                        <a key={index} href={social.href} target="_blank" rel="noopener noreferrer"
                           className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none transition-all duration-300">
                            <Icon size={20} />
                        </a>
                    );
                })}
            </div>

            <a
                href="/Harsha_Vardhan_Kumar_Resume.pdf"
                download="Harsha_Vardhan_Kumar_Resume.pdf"
                className="w-full py-4 bg-accent hover:opacity-80 text-black rounded-full font-bold focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-none transition-all duration-300 border border-transparent flex items-center justify-center gap-2"
            >
                <Download size={18} />
                Download Resume
            </a>
        </motion.div>
    );
}
