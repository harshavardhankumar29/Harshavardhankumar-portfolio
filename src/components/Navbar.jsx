import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Home, Folder, Code, Briefcase, Mail, GraduationCap, Trophy, Award, User, Palette } from 'lucide-react';

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['work', 'experience', 'education', 'skills', 'achievements', 'certifications', 'about', 'contact'];
            const scrollPosition = window.scrollY + window.innerHeight / 3;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        return;
                    }
                }
            }
            if (window.scrollY < 200) {
                 setActiveSection('');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: '', href: '#', icon: Home, label: 'Home' },
        { id: 'work', href: '#work', icon: Folder, label: 'Work' },
        { id: 'experience', href: '#experience', icon: Briefcase, label: 'Experience' },
        { id: 'education', href: '#education', icon: GraduationCap, label: 'Education' },
        { id: 'skills', href: '#skills', icon: Code, label: 'Skills' },
        { id: 'achievements', href: '#achievements', icon: Trophy, label: 'Achievements' },
        { id: 'certifications', href: '#certifications', icon: Award, label: 'Certifications' },
        { id: 'about', href: '#about', icon: User, label: 'About' },
        { id: 'contact', href: '#contact', icon: Mail, label: 'Contact' },
    ];

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 sm:py-3 backdrop-blur-xl bg-[#111]/80 border border-white/10 rounded-full shadow-2xl w-max max-w-[calc(100vw-1rem)] sm:max-w-[calc(100vw-2rem)] overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
            {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id || (item.id === '' && activeSection === '');
                
                return (
                    <a
                        key={item.label}
                        href={item.href}
                        title={item.label}
                        className={`p-2.5 sm:p-3 flex-shrink-0 rounded-full transition-all duration-300 ${
                            isActive 
                                ? 'bg-white/10 text-white' 
                                : 'text-gray-400 hover:text-white hover:bg-white/5'
                        } focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none`}
                    >
                        <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                    </a>
                );
            })}
            
            <div className="w-px h-6 bg-white/20 mx-1 flex-shrink-0" />
            
            <button
                onClick={() => window.dispatchEvent(new CustomEvent('open-command-menu'))}
                title="Themes & Commands (Cmd+K)"
                className="p-2.5 sm:p-3 flex-shrink-0 rounded-full text-gray-400 hover:text-white hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none transition-all duration-300 flex items-center justify-center cursor-pointer"
            >
                <Palette className="w-5 h-5 text-accent" />
            </button>
        </motion.nav>
    );
}
