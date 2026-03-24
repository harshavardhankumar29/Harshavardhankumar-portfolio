import { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, Maximize2, Minimize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const playlist = [
    {
        title: "Relaxing Electronic",
        artist: "Ambient",
        url: "/music/relaxing-electronic-ambient-music-354471.mp3"
    },
    {
        title: "Solitude",
        artist: "Dark Ambient",
        url: "/music/solitude-dark-ambient-music-354468.mp3"
    },
    {
        title: "Space Ambient",
        artist: "Cosmic",
        url: "/music/space-ambient-435262.mp3"
    },
    {
        title: "Space Background",
        artist: "Ambient",
        url: "/music/space-ambient-background-music-462074.mp3"
    },
    {
        title: "Atmospheric Space",
        artist: "Background",
        url: "/music/space-atmospheric-background-124841.mp3"
    },
    {
        title: "Rasputin",
        artist: "Boney M",
        url: "/music/Rasputin (PenduJatt.Com.Se).mp3"
    }
];
// Note: These are sample hotlinks from Pixabay (they might expire). 
// For production, download files to public/music/ folder.

export default function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(0);
    const [isMinimized, setIsMinimized] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play().catch(e => console.log("Audio play failed:", e));
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying, currentTrack]);

    const handleNext = () => {
        setCurrentTrack((prev) => (prev + 1) % playlist.length);
        setIsPlaying(true);
    };

    const handlePrev = () => {
        setCurrentTrack((prev) => (prev - 1 + playlist.length) % playlist.length);
        setIsPlaying(true);
    };

    const togglePlay = () => setIsPlaying(!isPlaying);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 transition-all duration-300 ${isMinimized ? 'w-10 h-10 sm:w-12 sm:h-12' : 'w-[calc(100vw-2rem)] sm:w-80'}`}
        >
            <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-full overflow-hidden shadow-2xl ring-1 ring-white/5">

                {/* Minimized View */}
                {isMinimized ? (
                    <button
                        onClick={() => setIsMinimized(false)}
                        className="w-full h-full flex items-center justify-center hover:bg-white/10 text-accent transition-colors"
                    >
                        <div className="flex gap-0.5 items-end h-4">
                            {[1, 2, 3].map(i => (
                                <motion.div
                                    key={i}
                                    animate={{ height: isPlaying ? [4, 16, 4] : 4 }}
                                    transition={{ repeat: Infinity, duration: 0.5, delay: i * 0.1 }}
                                    className="w-1 bg-accent rounded-full"
                                />
                            ))}
                        </div>
                    </button>
                ) : (
                    /* Expanded View */
                    <div className="flex items-center p-2 sm:p-3 gap-2 sm:gap-4">

                        {/* Album Art / Visualizer */}
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                            {isPlaying ? (
                                <div className="flex gap-0.5 items-end h-4">
                                    {[1, 2, 3, 4].map(i => (
                                        <motion.div
                                            key={i}
                                            animate={{ height: [4, 16, 8, 20, 4] }}
                                            transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.1, ease: "linear" }}
                                            className="w-1 bg-accent rounded-full"
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div className="w-2 h-2 rounded-full bg-gray-500" />
                            )}
                        </div>

                        {/* Info */}
                        <div className="flex-1 overflow-hidden">
                            <h4 className="text-xs font-bold text-white truncate">{playlist[currentTrack].title}</h4>
                            <p className="text-[10px] text-gray-400 truncate">{playlist[currentTrack].artist}</p>
                        </div>

                        <div className="flex items-center gap-1 sm:gap-2">
                            <button onClick={handlePrev} className="text-gray-400 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded-sm p-1">
                                <SkipBack className="w-4 h-4" />
                            </button>
                            <button onClick={togglePlay} className="text-white hover:text-accent transition-colors p-1 focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded-full">
                                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                            </button>
                            <button onClick={handleNext} className="text-gray-400 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded-sm p-1">
                                <SkipForward className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Minimize */}
                        <button
                            onClick={() => setIsMinimized(true)}
                            className="text-gray-400 hover:text-white transition-colors ml-1 focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded-sm p-1"
                        >
                            <Minimize2 className="w-3 h-3" />
                        </button>
                    </div>
                )}
            </div>

            <audio
                ref={audioRef}
                src={playlist[currentTrack].url}
                onEnded={handleNext}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            />
        </motion.div>
    );
}
