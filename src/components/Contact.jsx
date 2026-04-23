import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ease = [0.22, 1, 0.36, 1];

const socials = [
  { label: '↗ LinkedIn', href: 'https://www.linkedin.com/in/jaswanthreddypadala/' },
  { label: '↗ GitHub',   href: 'https://github.com/JaswanthReddyPadala/' },
  { label: '↗ Twitter',  href: 'https://twitter.com/jaswanthreddyp2' },
];

function SocialLink({ label, href }) {
  return (
    <motion.a
      href={href} target="_blank" rel="noopener noreferrer"
      whileHover={{ color: 'var(--red)', x: 3 }}
      style={{
        fontFamily: 'var(--mono)', fontSize: '0.65rem',
        letterSpacing: '0.1em', textTransform: 'uppercase',
        color: 'var(--muted)', display: 'inline-block',
      }}
    >{label}</motion.a>
  );
}

export default function Contact() {
  const { ref, isInView } = useScrollReveal();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const inputStyle = {
    width: '100%', background: 'transparent',
    border: '1px solid var(--border)',
    padding: '0.85rem 1rem', color: 'var(--cream)',
    fontFamily: 'var(--sans)', fontSize: '0.9rem',
    outline: 'none', transition: 'border-color .2s', resize: 'none',
  };

  return (
    <section id="contact" ref={ref} style={{ padding: '6rem 2.5rem', borderBottom: '1px solid var(--border)' }}>
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        style={{
          fontFamily: 'var(--mono)', fontSize: '0.68rem',
          letterSpacing: '0.18em', textTransform: 'uppercase',
          color: 'var(--red)', marginBottom: '1.2rem',
          display: 'flex', alignItems: 'center', gap: '0.8rem',
        }}
      >
        <motion.span
          initial={{ width: 0 }}
          animate={isInView ? { width: '20px' } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          style={{ display: 'block', height: '1px', background: 'var(--red)' }}
        />
        Contact
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'start' }}>
        {/* Left — slides in from left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease }}
        >
          <h2 style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            fontWeight: 900, fontStyle: 'italic',
            lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '1.5rem',
          }}>
            Got a<br /><b style={{ fontStyle: 'normal', color: 'var(--red)' }}>project?</b><br /><i>Let's build.</i>
          </h2>

          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(0,200,100,0.07)', border: '1px solid rgba(0,200,100,0.2)',
            padding: '0.35rem 0.9rem',
            fontFamily: 'var(--mono)', fontSize: '0.65rem',
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: '#00c864', marginBottom: '2rem',
          }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#00c864', animation: 'pulse 2s infinite' }} />
            Available for new projects
          </div>
          <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:.25}}`}</style>

          <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '2rem' }}>
            Whether you need a website for your business or want to add AI to your product — I want to hear what you're building.
          </p>

          <motion.a
            href="mailto:jaswanthreddypadala@gmail.com"
            whileHover={{ color: 'var(--red)' }}
            style={{
              fontFamily: 'var(--serif)', fontSize: '1rem',
              fontStyle: 'italic', color: 'var(--cream)',
              borderBottom: '1.5px solid var(--red)',
              paddingBottom: '2px', display: 'inline-block',
            }}
          >jaswanthreddypadala@gmail.com</motion.a>

          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1.5rem' }}>
            {socials.map(s => <SocialLink key={s.label} {...s} />)}
          </div>
        </motion.div>

        {/* Right — slides in from right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25, ease }}
        >
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="thanks"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  fontFamily: 'var(--serif)', fontSize: '1.3rem',
                  fontStyle: 'italic', color: 'var(--cream)', padding: '3rem 0',
                }}
              >
                Message received. I'll be in touch.
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={e => { e.preventDefault(); setSent(true); }}
                style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}
              >
                {[
                  { label: 'Name',  field: 'name',  placeholder: 'Your name' },
                  { label: 'Email', field: 'email', placeholder: 'your@email.com' },
                ].map(({ label, field, placeholder }, i) => (
                  <motion.div
                    key={field}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 + i * 0.08 }}
                    style={{ display: 'flex', flexDirection: 'column' }}
                  >
                    <label style={{
                      fontFamily: 'var(--mono)', fontSize: '0.62rem',
                      letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'var(--muted)', marginBottom: '0.2rem',
                    }}>{label}</label>
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      placeholder={placeholder} required
                      value={form[field]}
                      onChange={e => setForm(f => ({ ...f, [field]: e.target.value }))}
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'rgba(255,45,0,0.5)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.52 }}
                  style={{ display: 'flex', flexDirection: 'column' }}
                >
                  <label style={{
                    fontFamily: 'var(--mono)', fontSize: '0.62rem',
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: 'var(--muted)', marginBottom: '0.2rem',
                  }}>What are you building?</label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project — what it is, what you need, when you need it."
                    required
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'rgba(255,45,0,0.5)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  whileHover={{ opacity: 0.85, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  style={{
                    background: 'var(--red)', border: 'none',
                    color: 'var(--black)', padding: '1rem',
                    fontFamily: 'var(--mono)', fontSize: '0.72rem',
                    letterSpacing: '0.15em', textTransform: 'uppercase',
                    cursor: 'pointer', marginTop: '0.4rem',
                  }}
                >Send Message →</motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
