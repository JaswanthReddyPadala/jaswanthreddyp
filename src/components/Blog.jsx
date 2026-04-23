import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

const posts = [
  {
    date: 'Coming soon',
    title: 'Building Bodhi: Architecture of an Enterprise AI Agent Platform',
    excerpt: 'How we designed the skills/plugins system, LangGraph workflows, and Azure infrastructure for a multi-LLM agentic platform.',
    soon: true,
  },
  {
    date: 'Coming soon',
    title: "Why Your Business Needs a Website in 2026 — Not a Social Media Page",
    excerpt: "A practical argument for owning your digital presence instead of renting it from platforms that can change the rules overnight.",
    soon: true,
  },
  {
    date: 'Coming soon',
    title: 'React useEffect: When to Use It and When to Stop',
    excerpt: "Most useEffect calls in real codebases shouldn't exist. Here's how to identify them and what to do instead.",
    soon: true,
  },
  {
    date: 'Coming soon',
    title: "AI Agents in Production: What Nobody Tells You",
    excerpt: 'Lessons from building and deploying real agentic workflows — the gaps between demos and what actually ships.',
    soon: true,
  },
];

const ease = [0.22, 1, 0.36, 1];

function PostCard({ date, title, excerpt, soon, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08, ease }}
      whileHover={!soon ? { y: -3 } : {}}
      style={{
        background: 'var(--card-bg)', border: '1px solid var(--border)',
        padding: '2rem', position: 'relative',
        opacity: soon ? 0.4 : 1,
        pointerEvents: soon ? 'none' : 'auto',
        cursor: soon ? 'default' : 'pointer',
        transition: 'background .2s, border-color .2s',
      }}
      onMouseEnter={!soon ? e => { e.currentTarget.style.background = 'var(--card-bg-hover)'; e.currentTarget.style.borderColor = 'var(--border-hover)'; } : undefined}
      onMouseLeave={!soon ? e => { e.currentTarget.style.background = 'var(--card-bg)'; e.currentTarget.style.borderColor = 'var(--border)'; } : undefined}
    >
      <div style={{
        fontFamily: 'var(--mono)', fontSize: '0.65rem',
        letterSpacing: '0.1em', textTransform: 'uppercase',
        color: soon ? 'var(--muted)' : 'var(--red)', marginBottom: '0.8rem',
      }}>{date}</div>
      <div style={{
        fontFamily: 'var(--serif)', fontSize: '1.1rem',
        fontWeight: 900, fontStyle: 'italic',
        marginBottom: '0.5rem', lineHeight: 1.2,
      }}>{title}</div>
      <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.7 }}>{excerpt}</p>
      <motion.span
        whileHover={!soon ? { x: 3, y: -3, color: 'var(--red)' } : {}}
        style={{
          position: 'absolute', right: '1.5rem', bottom: '1.5rem',
          fontSize: '0.9rem', color: 'var(--muted)',
          display: 'inline-block',
        }}
      >↗</motion.span>
    </motion.div>
  );
}

export default function Blog() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="blog" ref={ref} style={{ padding: '6rem 2.5rem', borderBottom: '1px solid var(--border)' }}>
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
        Writing
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
        <i>Thoughts</i><br /><b style={{ fontStyle: 'normal' }}>& Notes.</b>
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2px' }}>
        {posts.map((p, i) => <PostCard key={i} {...p} index={i} />)}
      </div>
    </section>
  );
}
