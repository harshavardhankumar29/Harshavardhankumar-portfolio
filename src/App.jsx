import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import Skills from './components/Skills';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import SplineBackground from './components/SplineBackground';
import Footer from './components/Footer';
import CommandMenu from './components/CommandMenu';
import ScrollProgress from './components/ScrollProgress';
import MusicPlayer from './components/MusicPlayer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-black text-white selection:bg-accent selection:text-black font-sans">
        <ScrollProgress />
        <CommandMenu />
        <MusicPlayer />
        <SplineBackground />
        <Navbar />
        <main>
          <Hero />
          <Work />
          <Skills />
          <About />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
