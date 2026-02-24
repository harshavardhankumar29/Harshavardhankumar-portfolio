import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormState({ name: '', email: '', message: '' });
            setTimeout(() => setIsSubmitted(false), 3000);
        }, 1500);
    };

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const socials = [
        { Icon: Github, href: "https://github.com/harshavardhankumar29", label: "GitHub" },
        { Icon: Linkedin, href: "https://www.linkedin.com/in/harsha-vardhan-kumar24/", label: "LinkedIn" },
        { Icon: Mail, href: "mailto:hharsha2904@gmail.com", label: "Email" },
        { Icon: Phone, href: "tel:+918074388410", label: "Phone" },
    ];

    return (
        <section id="contact" className="py-32 px-6 md:px-12 relative z-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">

                {/* Left Side: Text & Social */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex-1"
                >
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-white">
                        Let's build something <span className="text-gray-500">meaningful.</span>
                    </h2>

                    <p className="text-xl text-gray-400 mb-12 max-w-lg leading-relaxed">
                        I'm currently available for internships, freelance work, and open to full-time opportunities. If you have a project that needs some creative touch, I'd love to hear about it.
                    </p>

                    <div className="flex gap-4 mb-12 flex-wrap">
                        {socials.map(({ Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target={href.startsWith('http') ? '_blank' : undefined}
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="p-4 border border-white/10 rounded-full hover:bg-accent hover:text-black hover:border-transparent transition-all duration-300 group"
                            >
                                <Icon className="w-6 h-6" />
                            </a>
                        ))}
                    </div>

                    <div className="space-y-2 text-gray-400">
                        <p>Punjab, Phagwara (LPU) · Hyderabad, India</p>
                        <a href="mailto:hharsha2904@gmail.com" className="hover:text-accent transition-colors block">
                            hharsha2904@gmail.com
                        </a>
                        <a href="tel:+918074388410" className="hover:text-accent transition-colors block">
                            +91 80743 88410
                        </a>
                    </div>
                </motion.div>

                {/* Right Side: Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex-1"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="group relative">
                            <input
                                type="text"
                                name="name"
                                required
                                value={formState.name}
                                onChange={handleChange}
                                placeholder="Name"
                                className="w-full bg-white/5 border border-white/10 p-4 text-white placeholder-gray-500 focus:outline-none focus:border-accent/50 focus:bg-white/10 transition-all rounded-lg peer"
                            />
                        </div>

                        <div className="group relative">
                            <input
                                type="email"
                                name="email"
                                required
                                value={formState.email}
                                onChange={handleChange}
                                placeholder="Email"
                                className="w-full bg-white/5 border border-white/10 p-4 text-white placeholder-gray-500 focus:outline-none focus:border-accent/50 focus:bg-white/10 transition-all rounded-lg"
                            />
                        </div>

                        <div className="group relative">
                            <textarea
                                name="message"
                                required
                                value={formState.message}
                                onChange={handleChange}
                                rows="6"
                                placeholder="Message"
                                className="w-full bg-white/5 border border-white/10 p-4 text-white placeholder-gray-500 focus:outline-none focus:border-accent/50 focus:bg-white/10 transition-all rounded-lg resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-4 bg-accent text-black font-bold rounded-lg flex justify-center items-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <span className="animate-pulse">Sending...</span>
                            ) : isSubmitted ? (
                                <span className="text-green-600">Message Sent!</span>
                            ) : (
                                <>
                                    Send Message <Send className="w-4 h-4" />
                                </>
                            )}
                        </button>
                    </form>
                </motion.div>
            </div>

        </section>
    );
}
