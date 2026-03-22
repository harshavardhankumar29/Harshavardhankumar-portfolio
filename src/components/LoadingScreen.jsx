import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-16 h-16">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
            className="absolute inset-0 rounded-full border-2 border-transparent border-t-[var(--accent-color)] border-r-[var(--accent-color)] opacity-70"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
            className="absolute inset-2 rounded-full border-2 border-transparent border-b-[var(--accent-color)] border-l-[var(--accent-color)] opacity-50"
          />
          <motion.div
            animate={{ scale: [0.8, 1.2, 0.8] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-6 rounded-full bg-[var(--accent-color)] opacity-40 blur-sm"
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center gap-2"
        >
          <p className="text-[var(--accent-color)] text-sm tracking-[0.3em] uppercase font-mono font-medium">
            Initializing
          </p>
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
                className="w-1 h-1 rounded-full bg-[var(--accent-color)]"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
