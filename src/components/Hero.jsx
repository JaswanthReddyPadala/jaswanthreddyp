export default function Hero() {
  const tickers = [
    'React · Next.js · TypeScript',
    'FastAPI · Python · LangGraph',
    'Azure · AI Agents · LLMs',
    'Tailwind · Ant Design · Jotai',
    'Presidio · Bodhi Platform',
  ];

  return (
    <section id="home" style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'flex-end', padding: '0 2.5rem 4rem',
      position: 'relative', overflow: 'hidden',
      borderBottom: '1px solid var(--border)',
    }}>
      {/* Left red bar */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0,
        width: '5px', background: 'var(--red)',
      }} />

      {/* Diagonal slash lines */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', left: '-10%', top: 0,
          width: '2px', height: '200%',
          background: 'var(--red)', opacity: 0.25,
          transform: 'rotate(15deg)', transformOrigin: 'top left',
        }} />
        <div style={{
          position: 'absolute', left: '5%', top: 0,
          width: '1px', height: '200%',
          background: 'var(--red)', opacity: 0.1,
          transform: 'rotate(15deg)', transformOrigin: 'top left',
        }} />
      </div>

      {/* Ghost watermark */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-48%, -55%)',
        fontFamily: 'var(--serif)',
        fontSize: 'clamp(100px, 22vw, 220px)',
        fontWeight: 900, color: 'transparent',
        WebkitTextStroke: '1px rgba(255,45,0,0.07)',
        pointerEvents: 'none', userSelect: 'none',
        letterSpacing: '-0.04em', whiteSpace: 'nowrap',
      }}>JASWANTH</div>

      {/* Available badge */}
      <div style={{
        fontFamily: 'var(--mono)', fontSize: '0.72rem',
        letterSpacing: '0.15em', textTransform: 'uppercase',
        color: 'var(--red)', marginBottom: '1.2rem',
        display: 'flex', alignItems: 'center', gap: '0.8rem',
      }}>
        <span style={{ display: 'block', width: '28px', height: '1px', background: 'var(--red)' }} />
        Available for freelance · 2026
      </div>

      {/* Main heading */}
      <h1 style={{
        fontFamily: 'var(--serif)',
        fontSize: 'clamp(3rem, 8vw, 7rem)',
        fontWeight: 900, fontStyle: 'italic',
        lineHeight: 0.95, letterSpacing: '-0.03em',
        marginBottom: '2rem',
      }}>
        <span style={{ fontStyle: 'normal', color: 'var(--cream)', display: 'block' }}>Brutally</span>
        <span style={{ color: 'var(--red)', fontStyle: 'italic', display: 'block' }}>good</span>
        <span style={{ color: 'rgba(245,240,232,0.2)', display: 'block' }}>code.</span>
      </h1>

      {/* Bottom row */}
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem',
      }}>
        <p style={{
          fontFamily: 'var(--sans)', fontSize: '0.9rem',
          color: 'var(--muted)', maxWidth: '360px', lineHeight: 1.75,
        }}>
          I build beautiful websites for businesses and AI-powered products that actually ship — not just prototypes that collect dust.
        </p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a href="#work" style={{
            background: 'var(--red)', color: 'var(--black)',
            padding: '0.8rem 2rem',
            fontFamily: 'var(--mono)', fontSize: '0.72rem',
            letterSpacing: '0.12em', textTransform: 'uppercase',
            border: 'none', cursor: 'pointer', transition: 'opacity .2s',
          }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >View Work</a>
          <a href="#contact" style={{
            background: 'transparent', color: 'var(--cream)',
            padding: '0.8rem 2rem',
            fontFamily: 'var(--mono)', fontSize: '0.72rem',
            letterSpacing: '0.12em', textTransform: 'uppercase',
            border: '1px solid var(--border)', transition: 'border-color .2s',
          }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(245,240,232,0.3)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
          >Let's Talk →</a>
        </div>
      </div>

      {/* Ticker */}
      <div style={{
        marginTop: '3rem', borderTop: '1px solid var(--border)',
        paddingTop: '1rem', display: 'flex', gap: '3rem', overflow: 'hidden',
      }}>
        {tickers.map((t, i) => (
          <span key={i} style={{
            fontFamily: 'var(--mono)', fontSize: '0.65rem',
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: 'var(--muted)', whiteSpace: 'nowrap',
          }}>
            <span style={{ color: 'var(--red)', marginRight: '0.5rem' }}>→</span>
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}
