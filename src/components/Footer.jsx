export default function Footer() {
    return (
        <footer className="py-8 px-6 md:px-12 border-t border-white/10 bg-black relative z-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400 font-mono text-center md:text-left">

                <div className="flex flex-col sm:flex-row gap-4">
                    <span>© 2026 Harsha Vardhan Kumar</span>
                </div>

                <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                    <a href="#work" className="hover:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded-sm transition-colors px-1">Work</a>
                    <a href="#about" className="hover:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded-sm transition-colors px-1">About</a>
                    <a href="#contact" className="hover:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded-sm transition-colors px-1">Contact</a>
                </div>

                <div className="flex flex-wrap justify-center gap-4 md:gap-4">
                    <a href="https://www.linkedin.com/in/harsha-vardhan-kumar24/" target="_blank" rel="noopener noreferrer" className="hover:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded-sm transition-colors px-1">LinkedIn</a>
                    <a href="https://github.com/harshavardhankumar29" target="_blank" rel="noopener noreferrer" className="hover:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded-sm transition-colors px-1">GitHub</a>
                    <a href="mailto:hharsha2904@gmail.com" className="hover:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded-sm transition-colors px-1">Email</a>
                </div>
            </div>
        </footer>
    );
}
