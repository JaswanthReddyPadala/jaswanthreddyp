import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#about', label: 'About' },
    { href: '#work', label: 'Work' },
    { href: '#services', label: 'Services' },
    { href: '#blog', label: 'Writing' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '0 2.5rem', height: '52px',
      borderBottom: '1px solid var(--border)',
      background: scrolled ? 'rgba(12,12,12,0.97)' : 'rgba(12,12,12,0.92)',
      backdropFilter: 'blur(8px)',
      transition: 'background 0.3s',
    }}>
      <a href="#home" style={{
        fontFamily: 'var(--serif)', fontStyle: 'italic',
        fontSize: '1.1rem', color: 'var(--cream)',
      }}>
        Jas<b style={{ color: 'var(--red)', fontStyle: 'normal' }}>.</b>
      </a>

      {/* Desktop links */}
      <ul style={{
        display: 'flex', gap: '2rem', listStyle: 'none',
        '@media (max-width: 768px)': { display: 'none' },
      }} className="nav-links-desktop">
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href} style={{
              fontFamily: 'var(--mono)', fontSize: '0.7rem',
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'var(--muted)', transition: 'color .2s',
            }}
              onMouseEnter={e => e.target.style.color = 'var(--red)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >{l.label}</a>
          </li>
        ))}
      </ul>

      <a href="#contact" style={{
        fontFamily: 'var(--mono)', fontSize: '0.68rem',
        letterSpacing: '0.12em', textTransform: 'uppercase',
        padding: '.4rem 1rem', border: '1px solid var(--red)',
        color: 'var(--red)', transition: 'background .2s, color .2s',
      }}
        onMouseEnter={e => { e.currentTarget.style.background = 'var(--red)'; e.currentTarget.style.color = 'var(--black)'; }}
        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--red)'; }}
      >Hire Me</a>
    </nav>
  );
}
