import Navbar from './components/Navbar';
import ProfileSidebar from './components/ProfileSidebar';
import Work from './components/Work';
import Skills from './components/Skills';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import SplineBackground from './components/SplineBackground';
import Footer from './components/Footer';
import CommandMenu from './components/CommandMenu';
import ScrollProgress from './components/ScrollProgress';
import MusicPlayer from './components/MusicPlayer';
import { ThemeProvider } from './context/ThemeContext';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading to allow Spline and other assets to initialize
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence>
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>
      <div className="relative min-h-screen bg-black text-white selection:bg-accent selection:text-black font-sans">
        <ScrollProgress />
        <CommandMenu />
        <MusicPlayer />
        <SplineBackground />
        <Navbar />
        <main className="max-w-7xl 2xl:max-w-[90rem] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-[5%] pt-24 sm:pt-32 px-4 sm:px-6 lg:px-12 relative z-10 pb-24 sm:pb-32">
          {/* Left Sidebar */}
          <div className="w-full lg:w-1/3 xl:w-1/4 2xl:w-1/5 shrink-0">
             <div className="sticky top-24 sm:top-32 max-h-[calc(100vh-6rem)] sm:max-h-[calc(100vh-8rem)] overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-track]:bg-transparent hover:[&::-webkit-scrollbar-thumb]:bg-white/20 pb-4 pr-1">
                 <ProfileSidebar />
             </div>
          </div>
          {/* Right Scrollable Area */}
          <div className="w-full lg:w-2/3 xl:w-3/4 flex flex-col gap-8 mt-16 lg:mt-0">
            <About />
            <Work />
            <Experience />
            <Education />
            <Skills />
            <Achievements />
            <Certifications />
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
