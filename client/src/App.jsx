import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import ParticlesBackground from './components/ParticlesBackground';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Loader onDone={() => setLoaded(true)} />
      <AnimatePresence>
        {loaded && (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            style={{ position: 'relative', zIndex: 1 }}
          >
            <CustomCursor />
            <ScrollProgress />
            <ParticlesBackground />
            <Navbar />
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Education />
              <Certificates />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
