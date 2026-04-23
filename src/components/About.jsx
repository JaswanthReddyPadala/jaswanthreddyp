import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

const skills = [
  'React', 'Next.js', 'TypeScript', 'Tailwind', 'FastAPI',
  'Python', 'LangChain', 'LangGraph', 'Azure', 'Node.js', 'AI Agents', 'Jotai',
];

const stats = [
  { n: '2+', l: 'Projects Shipped' },
  { n: 'AI', l: 'Native Engineer' },
  { n: '∞', l: 'Problems Solved' },
  { n: '0', l: 'Unshipped Promises' },
];

const ease = [0.22, 1, 0.36, 1];

function SkillTag({ label, index }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.04, ease }}
      whileHover={{ borderColor: 'var(--red)', color: 'var(--red)', scale: 1.06 }}
      style={{
        fontFamily: 'var(--mono)', fontSize: '0.65rem',
        letterSpacing: '0.08em', textTransform: 'uppercase',
        padding: '0.3rem 0.8rem',
        border: '1px solid var(--border)', color: 'var(--muted)',
        cursor: 'default', transition: 'border-color .2s, color .2s',
        display: 'inline-block',
      }}
    >{label}</motion.span>
  );
}

function StatCard({ n, l, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.08, ease }}
      whileHover={{ borderColor: 'var(--red)' }}
      style={{
        background: 'var(--card-bg)', border: '1px solid var(--border)', padding: '1.8rem',
        transition: 'border-color .3s',
      }}
    >
      <div style={{ fontFamily: 'var(--serif)', fontSize: '3rem', fontWeight: 900, color: 'var(--red)', lineHeight: 1 }}>{n}</div>
      <div style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: '0.3rem' }}>{l}</div>
    </motion.div>
  );
}

export default function About() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="about" ref={ref} style={{ padding: '6rem 2.5rem', borderBottom: '1px solid var(--border)', position: 'relative' }}>
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, ease }}
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
        About
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
        {/* Left */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 900, fontStyle: 'italic',
              letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: '3rem',
            }}
          >
            <b style={{ fontStyle: 'normal' }}>Dev at</b><br />
            Presidio.<br />
            <i>Builder</i><br />
            by choice.
          </motion.h2>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '1.5rem' }}>
            {skills.map((s, i) => <SkillTag key={s} label={s} index={i} />)}
          </div>
        </div>

        {/* Right */}
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', marginBottom: '2rem' }}>
            {stats.map((s, i) => <StatCard key={s.n} {...s} index={i} />)}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: 1.85, marginBottom: '1.5rem' }}
          >
            I'm a full-stack developer and AI engineer at Presidio, where I help build AI-powered enterprise products. Outside that — I take freelance work for businesses that need a fast, well-crafted web presence.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease }}
            style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: 1.85, marginBottom: '1.5rem' }}
          >
            I don't just write code. I think about what the product needs to do, who it needs to reach, and how to make it work reliably in the real world.
          </motion.p>

        </div>
      </div>
    </section>
  );
}
