import { Command } from 'cmdk';
import { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import {
    LayoutDashboard,
    User,
    Mail,
    Palette,
    Github,
    Twitter,
    ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CommandMenu() {
    const [open, setOpen] = useState(false);
    const { setAccentColor, themes } = useTheme();

    // Toggle with Cmd+K and custom event
    useEffect(() => {
        const down = (e) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        const handleCustomOpen = () => setOpen(true);

        document.addEventListener('keydown', down);
        window.addEventListener('open-command-menu', handleCustomOpen);
        
        return () => {
            document.removeEventListener('keydown', down);
            window.removeEventListener('open-command-menu', handleCustomOpen);
        };
    }, []);

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={() => setOpen(false)}
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                        className="w-full max-w-lg bg-[#111]/70 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden"
                    >
                        <Command className="w-full">
                            <div className="flex items-center border-b border-white/10 px-4">
                                <Command.Input
                                    placeholder="Type a command or search..."
                                    className="w-full bg-transparent py-4 text-white placeholder-gray-400 focus:outline-none text-base md:text-lg"
                                />
                            </div>

                            <Command.List className="max-h-[60vh] md:max-h-[350px] overflow-y-auto p-2 scroll-py-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full">
                                <Command.Empty className="py-6 text-center text-gray-400">No results found.</Command.Empty>

                                <Command.Group heading="Navigation" className="text-gray-400 text-xs font-medium mb-2 px-2">
                                    <div className="space-y-1">
                                        <CommandItem onSelect={() => { window.location.href = '#work'; setOpen(false); }}>
                                            <LayoutDashboard className="w-4 h-4 mr-2" />
                                            <span>Work</span>
                                        </CommandItem>
                                        <CommandItem onSelect={() => { window.location.href = '#about'; setOpen(false); }}>
                                            <User className="w-4 h-4 mr-2" />
                                            <span>About</span>
                                        </CommandItem>
                                        <CommandItem onSelect={() => { window.location.href = '#contact'; setOpen(false); }}>
                                            <Mail className="w-4 h-4 mr-2" />
                                            <span>Contact</span>
                                        </CommandItem>
                                    </div>
                                </Command.Group>

                                <div className="h-px bg-white/10 my-2 mx-2" />

                                <Command.Group heading="Theme" className="text-gray-400 text-xs font-medium mb-2 px-2">
                                    <div className="space-y-1">
                                        {themes.map((theme) => (
                                            <CommandItem
                                                key={theme.value}
                                                onSelect={() => { setAccentColor(theme.value); setOpen(false); }}
                                            >
                                                <Palette className="w-4 h-4 mr-2" style={{ color: theme.value }} />
                                                <span>Set Theme to {theme.label}</span>
                                            </CommandItem>
                                        ))}
                                    </div>
                                </Command.Group>

                                <div className="h-px bg-white/10 my-2 mx-2" />

                                <Command.Group heading="Social" className="text-gray-400 text-xs font-medium mb-2 px-2">
                                    <div className="space-y-1">
                                        <CommandItem onSelect={() => { window.open('https://github.com', '_blank'); setOpen(false); }}>
                                            <Github className="w-4 h-4 mr-2" />
                                            <span>GitHub</span>
                                            <ArrowRight className="w-3 h-3 ml-auto opacity-50" />
                                        </CommandItem>
                                        <CommandItem onSelect={() => { window.open('https://x.com/hharsha2904', '_blank'); setOpen(false); }}>
                                            <Twitter className="w-4 h-4 mr-2" />
                                            <span>Twitter</span>
                                            <ArrowRight className="w-3 h-3 ml-auto opacity-50" />
                                        </CommandItem>
                                    </div>
                                </Command.Group>

                            </Command.List>
                        </Command>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

function CommandItem({ children, onSelect }) {
    return (
        <Command.Item
            onSelect={onSelect}
            className="flex items-center px-4 py-3 rounded-lg text-gray-300 hover:bg-accent/20 hover:text-accent cursor-pointer transition-colors aria-selected:bg-accent/20 aria-selected:text-accent"
        >
            {children}
        </Command.Item>
    );
}
