import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Award, ChevronRight, ChevronLeft, X } from 'lucide-react';
import { useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const certifications = [
    {
        title: "Building Generative AI Apps and Solutions",
        issuer: "Udemy",
        date: "Aug 2025",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
        link: "/certificates/UC-4bf9dfd4-a675-44cc-8247-c1664f64a130.pdf"
    },
    {
        title: "The Bits and Bytes of Computer Networking",
        issuer: "Google",
        date: "Sep 2024",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
        link: "/certificates/Coursera%20FBGS2VKNVQBF.pdf"
    },
    {
        title: "Introduction to Python",
        issuer: "Infosys Springboard",
        date: "Feb 2024",
        image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=80&w=800",
        link: "/certificates/1-4a533146-448f-401e-bde2-2e123c956aa6.pdf"
    }
];

export default function Certifications() {
    const scrollRef = useRef(null);
    const [selectedCert, setSelectedCert] = useState(null);

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
                className="mb-6 sm:mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4"
            >
                <div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold tracking-tighter mb-1 sm:mb-2 text-accent"><span className="text-zinc-600">MY</span> CERTIFICATIONS</h2>
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
                className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-6 sm:pb-8 pt-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-1"
            >
                {certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => setSelectedCert(cert)}
                        className="group flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[400px] snap-start bg-zinc-900/40 border border-white/5 rounded-xl sm:rounded-2xl overflow-hidden hover:border-white/20 transition-all shadow-xl cursor-pointer"
                    >
                        <div className="relative h-40 sm:h-48 overflow-hidden bg-black flex items-center justify-center">
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
                        
                        <div className="p-4 sm:p-6 relative">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-accent transition-colors pr-2 sm:pr-4 h-14 md:h-12">
                                    {cert.title}
                                </h3>
                                <button 
                                    onClick={(e) => { e.stopPropagation(); setSelectedCert(cert); }}
                                    className="text-gray-400 hover:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded-sm transition-colors mt-1"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="flex items-center justify-between text-sm mt-4">
                                <span className="text-gray-400">{cert.issuer}</span>
                                <span className="text-zinc-500 font-mono">{cert.date}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Modal */}
            {typeof document !== 'undefined' && createPortal(
                <AnimatePresence>
                    {selectedCert && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6 md:p-12 bg-black/90 backdrop-blur-md"
                            onClick={() => setSelectedCert(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                                onClick={(e) => e.stopPropagation()}
                                className="bg-zinc-900 border border-white/10 rounded-2xl w-full max-w-5xl h-full flex flex-col overflow-hidden shadow-2xl relative"
                            >
                                <div className="flex items-center justify-between p-4 border-b border-white/10 bg-black/50">
                                    <h3 className="text-xl font-bold text-white truncate pr-4">{selectedCert.title}</h3>
                                    <button 
                                        onClick={() => setSelectedCert(null)}
                                        className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>
                                <div className="flex-1 bg-white/5 p-2 md:p-4">
                                    <iframe 
                                        src={`${selectedCert.link}#toolbar=0`}
                                        className="w-full h-full rounded-xl border-none outline-none bg-zinc-800"
                                        title={selectedCert.title}
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </section>
    );
}
