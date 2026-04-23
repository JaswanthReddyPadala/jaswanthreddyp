import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

const services = [
  {
    icon: 'I.',
    name: 'Business Websites',
    desc: "Fast, professional static sites that establish credibility and convert visitors into leads. Clean design, real performance, built to last.",
  },
  {
    icon: 'II.',
    name: 'Web Applications',
    desc: "Full-stack React and Next.js apps — dashboards, portals, tools — engineered to scale with clean, maintainable code that won't collapse in 6 months.",
  },
  {
    icon: 'III.',
    name: 'AI Integration',
    desc: "Add intelligent automation to your product. Chatbots, AI agents, document processing, and LLM-powered workflows that work in production — not just demos.",
  },
];

const ease = [0.22, 1, 0.36, 1];

function ServiceCard({ icon, name, desc, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.1, ease }}
      whileHover={{ y: -4 }}
      style={{
        background: 'var(--card-bg)', border: '1px solid var(--border)',
        padding: '2.2rem 1.8rem',
        transition: 'background .2s, border-color .2s',
      }}
      onMouseEnter={e => { e.currentTarget.style.background = 'var(--card-bg-hover)'; e.currentTarget.style.borderColor = 'var(--red)'; }}
      onMouseLeave={e => { e.currentTarget.style.background = 'var(--card-bg)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
    >
      <motion.span
        whileHover={{ scale: 1.1, x: 3 }}
        transition={{ duration: 0.2 }}
        style={{
          fontFamily: 'var(--serif)', fontSize: '2rem',
          fontStyle: 'italic', color: 'var(--red)',
          marginBottom: '1.2rem', display: 'block', fontWeight: 900,
          cursor: 'default',
        }}
      >{icon}</motion.span>
      <div style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', fontWeight: 900, marginBottom: '0.6rem' }}>{name}</div>
      <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.75 }}>{desc}</p>
    </motion.div>
  );
}

export default function Services() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="services" ref={ref} style={{ padding: '6rem 2.5rem', borderBottom: '1px solid var(--border)' }}>
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
        Services
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.15, ease }}
        style={{
          fontFamily: 'var(--serif)',
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: 900, fontStyle: 'italic',
          letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: '3rem',
        }}
      >
        <i>What I</i><br /><b style={{ fontStyle: 'normal' }}>build</b><br /><i>for you.</i>
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2px' }}>
        {services.map((s, i) => <ServiceCard key={s.name} {...s} index={i} />)}
      </div>
    </section>
  );
}
