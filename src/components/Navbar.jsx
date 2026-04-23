import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { href: '#about',    label: 'About' },
  { href: '#work',     label: 'Work' },
  { href: '#services', label: 'Services' },
  { href: '#blog',     label: 'Writing' },
  { href: '#contact',  label: 'Contact' },
];

function NavLink({ href, label, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <li style={{ position: 'relative', listStyle: 'none' }}>
      <a
        href={href}
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          fontFamily: 'var(--mono)', fontSize: '0.7rem',
          letterSpacing: '0.12em', textTransform: 'uppercase',
          color: hovered ? 'var(--red)' : 'var(--muted)',
          transition: 'color .2s', display: 'block', padding: '4px 0',
        }}
      >
        {label}
        <AnimatePresence>
          {hovered && (
            <motion.span
              initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} exit={{ scaleX: 0 }}
              transition={{ duration: 0.2 }}
              style={{ position: 'absolute', bottom: -2, left: 0, right: 0, height: '1px', background: 'var(--red)', transformOrigin: 'left', display: 'block' }}
            />
          )}
        </AnimatePresence>
      </a>
    </li>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <motion.nav
        initial={{ y: -52, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'sticky', top: 0, zIndex: 200,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '0 2.5rem', height: '52px',
          borderBottom: '1px solid var(--border)',
          background: scrolled ? 'rgba(12,12,12,0.97)' : 'rgba(12,12,12,0.92)',
          backdropFilter: 'blur(8px)',
          transition: 'background 0.3s',
        }}
      >
        {/* Logo */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--cream)', zIndex: 210 }}
        >
          Jas<b style={{ color: 'var(--red)', fontStyle: 'normal' }}>.</b>
        </motion.a>

        {/* Desktop links */}
        <ul className="nav-links" style={{ display: 'flex', gap: '2rem', margin: 0, padding: 0 }}>
          {links.map((l, i) => (
            <motion.div key={l.href} initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.07, duration: 0.4 }}>
              <NavLink {...l} />
            </motion.div>
          ))}
        </ul>

        {/* Desktop Hire Me */}
        <motion.a
          href="#contact"
          className="nav-hire"
          whileHover={{ background: 'var(--red)', color: 'var(--black)' }}
          whileTap={{ scale: 0.96 }}
          style={{ fontFamily: 'var(--mono)', fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '.4rem 1rem', border: '1px solid var(--red)', color: 'var(--red)', transition: 'background .2s, color .2s', display: 'inline-block' }}
        >Hire Me</motion.a>

        {/* Hamburger — hidden on desktop */}
        <button
          className="nav-hamburger"
          onClick={() => setOpen(o => !o)}
          style={{
            display: 'none',
            flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
            gap: '5px', background: 'none', border: 'none', cursor: 'pointer',
            padding: '4px', zIndex: 210,
          }}
          aria-label="Toggle menu"
        >
          <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }} transition={{ duration: 0.2 }} style={{ display: 'block', width: '22px', height: '1.5px', background: open ? 'var(--red)' : 'var(--cream)' }} />
          <motion.span animate={{ opacity: open ? 0 : 1 }} transition={{ duration: 0.15 }} style={{ display: 'block', width: '22px', height: '1.5px', background: 'var(--cream)' }} />
          <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }} transition={{ duration: 0.2 }} style={{ display: 'block', width: '22px', height: '1.5px', background: open ? 'var(--red)' : 'var(--cream)' }} />
        </button>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{
              display: 'none',
              position: 'fixed', top: 0, right: 0, bottom: 0,
              width: '75vw', maxWidth: '320px',
              background: '#0f0f0f',
              borderLeft: '1px solid var(--border)',
              zIndex: 190,
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '4rem 2.5rem',
              gap: '2.5rem',
            }}
          >
            {links.map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 + i * 0.07 }}
              >
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{ fontFamily: 'var(--serif)', fontSize: '1.6rem', fontWeight: 900, fontStyle: 'italic', color: 'var(--cream)', display: 'block' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--red)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--cream)'}
                >{l.label}</a>
              </motion.div>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              style={{ fontFamily: 'var(--mono)', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '0.8rem 1.5rem', border: '1px solid var(--red)', color: 'var(--red)', display: 'inline-block', marginTop: '1rem' }}
            >Hire Me</motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 180 }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
