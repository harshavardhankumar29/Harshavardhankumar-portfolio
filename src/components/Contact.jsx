import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Phone, Send } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

// ✅ EmailJS config
const EMAILJS_SERVICE_ID = 'service_8eoutfv';
const EMAILJS_TEMPLATE_ID = 'template_afgnp14';
const EMAILJS_PUBLIC_KEY = 'fdbno69LxbNbuMrr0';

export default function Contact() {
    const formRef = useRef(null);
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        emailjs.init(EMAILJS_PUBLIC_KEY);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        emailjs.sendForm(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            formRef.current
        )
            .then(() => {
                setIsSubmitting(false);
                setIsSubmitted(true);
                setFormState({ name: '', email: '', message: '' });
                setTimeout(() => setIsSubmitted(false), 4000);
            })
            .catch((err) => {
                console.error('EmailJS Error:', err);
                setIsSubmitting(false);
                setError(`Error: ${err?.text || err?.message || JSON.stringify(err)}`);
            });
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
        <section id="contact" className="py-12 relative z-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">

                {/* Left Side: Text & Social */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex-1"
                >
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-accent">
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
                                className="p-4 border border-white/10 rounded-full hover:bg-accent hover:text-black hover:border-transparent focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none transition-all duration-300 group"
                            >
                                <Icon className="w-6 h-6" />
                            </a>
                        ))}
                    </div>

                    <div className="space-y-2 text-gray-400">
                        <p>Punjab, Phagwara (LPU) · Hyderabad, India</p>
                        <a href="mailto:hharsha2904@gmail.com" className="hover:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded-sm transition-colors block w-fit">
                            hharsha2904@gmail.com
                        </a>
                        <a href="tel:+918074388410" className="hover:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded-sm transition-colors block w-fit">
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
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                        <div className="group relative">
                            <input
                                type="text"
                                name="name"
                                required
                                value={formState.name}
                                onChange={handleChange}
                                placeholder="Name"
                                className="w-full bg-white/5 border border-white/10 p-4 text-white placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent focus:bg-white/10 transition-all rounded-lg peer"
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
                                className="w-full bg-white/5 border border-white/10 p-4 text-white placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent focus:bg-white/10 transition-all rounded-lg"
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
                                className="w-full bg-white/5 border border-white/10 p-4 text-white placeholder-gray-400 leading-relaxed focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent focus:bg-white/10 transition-all rounded-lg resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-4 bg-accent text-black font-bold rounded-lg flex justify-center items-center gap-2 hover:opacity-90 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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

                        {/* Error message */}
                        {error && (
                            <p className="text-red-400 text-sm text-center mt-2">{error}</p>
                        )}

                    </form>
                </motion.div>
            </div>

        </section>
    );
}
