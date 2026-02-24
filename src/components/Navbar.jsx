import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['work', 'about', 'experience', 'contact'];
            const scrollPosition = window.scrollY + 100;

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
            setActiveSection('');
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 backdrop-blur-md bg-black/50 border-b border-white/5"
        >
            <a href="#" className="text-xl font-bold tracking-tighter text-white hover:text-accent transition-colors">
                Portfolio.
            </a>
            <div className="flex gap-8 text-sm font-medium text-gray-400">
                {['work', 'about', 'experience', 'contact'].map((item) => (
                    <a
                        key={item}
                        href={`#${item}`}
                        className={`capitalize transition-colors duration-300 ${activeSection === item ? 'text-accent' : 'hover:text-accent'
                            }`}
                    >
                        {item}
                    </a>
                ))}
            </div>
        </motion.nav>
    );
}
