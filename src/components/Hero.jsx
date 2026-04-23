import { motion } from 'framer-motion';

const tickers = [
  'React · Next.js · TypeScript',
  'FastAPI · Python · LangGraph',
  'Azure · AI Agents · LLMs',
  'Tailwind · Ant Design · Jotai',
  'Presidio · Bodhi Platform',
];

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section id="home" style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'flex-end', padding: '0 2.5rem 4rem',
      position: 'relative', overflow: 'hidden',
      borderBottom: '1px solid var(--border)',
    }}>
      {/* Left red bar — scales in from top */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.1, ease }}
        style={{
          position: 'absolute', left: 0, top: 0, bottom: 0,
          width: '5px', background: 'var(--red)', transformOrigin: 'top',
        }}
      />

      {/* Diagonal slash lines */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.4 }}
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
      >
        <div style={{
          position: 'absolute', left: '-10%', top: 0, width: '2px', height: '200%',
          background: 'var(--red)', opacity: 0.25,
          transform: 'rotate(15deg)', transformOrigin: 'top left',
        }} />
        <div style={{
          position: 'absolute', left: '5%', top: 0, width: '1px', height: '200%',
          background: 'var(--red)', opacity: 0.1,
          transform: 'rotate(15deg)', transformOrigin: 'top left',
        }} />
      </motion.div>

      {/* Ghost watermark — breathes on hover */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, delay: 0.15, ease }}
        whileHover={{ WebkitTextStroke: '1px rgba(255,45,0,0.14)', transition: { duration: 0.4 } }}
        style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-48%, -55%)',
          fontFamily: 'var(--serif)',
          fontSize: 'clamp(100px, 22vw, 220px)',
          fontWeight: 900, color: 'transparent',
          WebkitTextStroke: '1px rgba(255,45,0,0.07)',
          pointerEvents: 'none', userSelect: 'none',
          letterSpacing: '-0.04em', whiteSpace: 'nowrap',
        }}
      >JASWANTH</motion.div>

      {/* Available badge */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease }}
        style={{
          fontFamily: 'var(--mono)', fontSize: '0.72rem',
          letterSpacing: '0.15em', textTransform: 'uppercase',
          color: 'var(--red)', marginBottom: '1.2rem',
          display: 'flex', alignItems: 'center', gap: '0.8rem',
        }}
      >
        <motion.span
          initial={{ width: 0 }}
          animate={{ width: '28px' }}
          transition={{ duration: 0.5, delay: 0.7 }}
          style={{ display: 'block', height: '1px', background: 'var(--red)' }}
        />
        Available for freelance · 2026
      </motion.div>

      {/* Heading — each word clips and slides up */}
      <div style={{ marginBottom: '2rem' }}>
        {[
          { text: 'Brutally', color: 'var(--cream)', italic: false },
          { text: 'good',     color: 'var(--red)',   italic: true  },
          { text: 'code.',    color: 'rgba(245,240,232,0.2)', italic: true },
        ].map(({ text, color, italic }, i) => (
          <div key={text} style={{ overflow: 'hidden' }}>
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.85, ease, delay: 0.55 + i * 0.13 }}
              style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(3rem, 8vw, 7rem)',
                fontWeight: 900,
                fontStyle: italic ? 'italic' : 'normal',
                lineHeight: 0.95,
                letterSpacing: '-0.03em',
                color,
              }}
            >{text}</motion.div>
          </div>
        ))}
      </div>

      {/* Bottom row */}
      <motion.div
        className="hero-bottom"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.0, ease }}
        style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem',
        }}
      >
        <p style={{
          fontFamily: 'var(--sans)', fontSize: '0.9rem',
          color: 'var(--muted)', maxWidth: '360px', lineHeight: 1.75,
        }}>
          I build beautiful websites for businesses and AI-powered products that actually ship — not just prototypes that collect dust.
        </p>
        <div className="hero-btns" style={{ display: 'flex', gap: '1rem' }}>
          <motion.a
            href="#work"
            whileHover={{ scale: 1.03, opacity: 0.88 }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: 'var(--red)', color: 'var(--black)',
              padding: '0.8rem 2rem',
              fontFamily: 'var(--mono)', fontSize: '0.72rem',
              letterSpacing: '0.12em', textTransform: 'uppercase',
              cursor: 'pointer', display: 'inline-block',
            }}
          >View Work</motion.a>
          <motion.a
            href="#contact"
            whileHover={{ borderColor: 'rgba(245,240,232,0.35)', scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: 'transparent', color: 'var(--cream)',
              padding: '0.8rem 2rem',
              fontFamily: 'var(--mono)', fontSize: '0.72rem',
              letterSpacing: '0.12em', textTransform: 'uppercase',
              border: '1px solid var(--border)', display: 'inline-block',
            }}
          >Let's Talk →</motion.a>
        </div>
      </motion.div>

      {/* Ticker */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        style={{
          marginTop: '3rem', borderTop: '1px solid var(--border)',
          paddingTop: '1rem', display: 'flex', gap: '2rem', overflow: 'hidden',
        }}
      >
        {tickers.map((t, i) => (
          <motion.span
            key={i}
            className="ticker-item"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 + i * 0.07 }}
            style={{
              fontFamily: 'var(--mono)', fontSize: '0.65rem',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'var(--muted)', whiteSpace: 'nowrap',
            }}
          >
            <span style={{ color: 'var(--red)', marginRight: '0.5rem' }}>→</span>
            {t}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
}
