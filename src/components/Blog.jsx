import { useState } from 'react';

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

function PostCard({ date, title, excerpt, soon, url }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        background: hovered && !soon ? '#161616' : '#111',
        border: '1px solid var(--border)',
        borderColor: hovered && !soon ? 'rgba(245,240,232,0.15)' : 'var(--border)',
        padding: '2rem', display: 'block',
        transition: 'background .2s, border-color .2s',
        position: 'relative',
        opacity: soon ? 0.4 : 1,
        pointerEvents: soon ? 'none' : 'auto',
        cursor: soon ? 'default' : 'pointer',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
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
      <span style={{
        position: 'absolute', right: '1.5rem', bottom: '1.5rem',
        fontSize: '0.9rem',
        color: hovered ? 'var(--red)' : 'var(--muted)',
        transform: hovered ? 'translate(3px,-3px)' : 'none',
        transition: 'color .2s, transform .2s',
      }}>↗</span>
    </div>
  );
}

export default function Blog() {
  return (
    <section id="blog" style={{
      padding: '6rem 2.5rem',
      borderBottom: '1px solid var(--border)',
    }}>
      <div style={{
        fontFamily: 'var(--mono)', fontSize: '0.68rem',
        letterSpacing: '0.18em', textTransform: 'uppercase',
        color: 'var(--red)', marginBottom: '1.2rem',
        display: 'flex', alignItems: 'center', gap: '0.8rem',
      }}>
        <span style={{ display: 'block', width: '20px', height: '1px', background: 'var(--red)' }} />
        Writing
      </div>

      <h2 style={{
        fontFamily: 'var(--serif)',
        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
        fontWeight: 900, fontStyle: 'italic',
        letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: '3rem',
      }}>
        <i>Thoughts</i><br /><b style={{ fontStyle: 'normal' }}>& Notes.</b>
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2px',
      }}>
        {posts.map((p, i) => <PostCard key={i} {...p} />)}
      </div>
    </section>
  );
}
