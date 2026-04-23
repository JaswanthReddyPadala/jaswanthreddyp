import { useEffect, useRef } from 'react';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Services from './components/Services';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function Spotlight() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const styles = getComputedStyle(document.documentElement);
      const accent = styles.getPropertyValue('--red').trim();
      const alpha = styles.getPropertyValue('--spotlight-alpha').trim() || '18';
      el.style.background = `radial-gradient(650px circle at ${e.clientX}px ${e.clientY}px, ${accent}${alpha} 0%, transparent 70%)`;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);
  return (
    <div ref={ref} style={{
      position: 'fixed', inset: 0, pointerEvents: 'none',
      zIndex: 0, transition: 'background 0.08s ease',
    }} />
  );
}

export default function App() {
  return (
    <>
      <Spotlight />
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Services />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}
