import { motion } from 'framer-motion';
import { ExternalLink, Award, ChevronRight, ChevronLeft } from 'lucide-react';
import { useRef } from 'react';

const certifications = [
    {
        title: "Building Generative AI Apps and Solutions",
        issuer: "Udemy",
        date: "Aug 2025",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
        link: "#"
    },
    {
        title: "The Bits and Bytes of Computer Networking",
        issuer: "Google",
        date: "Sep 2024",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
        link: "#"
    },
    {
        title: "Introduction to Python",
        issuer: "Infosys Springboard",
        date: "Feb 2024",
        image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=80&w=800",
        link: "#"
    }
];

export default function Certifications() {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = direction === 'left' ? -current.offsetWidth / 1.5 : current.offsetWidth / 1.5;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section id="certifications" className="pb-12 pt-4 relative z-10 w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8 flex justify-between items-end"
            >
                <div>
                    <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter mb-2 text-accent"><span className="text-zinc-600">MY</span> CERTIFICATIONS</h2>
                </div>
                
                {/* Carousel Controls */}
                <div className="flex gap-2">
                    <button 
                        onClick={() => scroll('left')}
                        className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent/50 text-white transition-all focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button 
                        onClick={() => scroll('right')}
                        className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent/50 text-white transition-all focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </motion.div>

            {/* Carousel Track */}
            <div 
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-1"
            >
                {certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[400px] snap-start bg-zinc-900/40 border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all shadow-xl"
                    >
                        <div className="relative h-48 overflow-hidden bg-black flex items-center justify-center">
                            {cert.image ? (
                                <img 
                                    src={cert.image} 
                                    alt={cert.title} 
                                    className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105"
                                />
                            ) : (
                                <Award className="w-16 h-16 text-white/20" />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-transparent" />
                        </div>
                        
                        <div className="p-6 relative">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors pr-4 h-14 md:h-12">
                                    {cert.title}
                                </h3>
                                <a 
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded-sm transition-colors mt-1"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                </a>
                            </div>
                            <div className="flex items-center justify-between text-sm mt-4">
                                <span className="text-gray-400">{cert.issuer}</span>
                                <span className="text-zinc-500 font-mono">{cert.date}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
