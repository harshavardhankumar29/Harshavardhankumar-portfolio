export default function Footer() {
    return (
        <footer className="py-8 px-6 md:px-12 border-t border-white/10 bg-black relative z-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600 font-mono">

                <div className="flex gap-4">
                    <span>© 2025 Harsha Vardhan Kumar</span>
                </div>

                <div className="flex gap-8">
                    <a href="#work" className="hover:text-accent transition-colors">Work</a>
                    <a href="#about" className="hover:text-accent transition-colors">About</a>
                    <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
                </div>

                <div className="flex gap-4">
                    <a href="https://www.linkedin.com/in/harsha-vardhan-kumar24/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
                    <a href="https://github.com/harshavardhankumar29" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a>
                    <a href="mailto:hharsha2904@gmail.com" className="hover:text-accent transition-colors">Email</a>
                </div>
            </div>
        </footer>
    );
}
