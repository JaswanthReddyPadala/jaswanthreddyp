import { useState } from 'react';

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

function ServiceCard({ icon, name, desc }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        background: hovered ? '#161616' : '#111',
        border: '1px solid var(--border)',
        padding: '2.2rem 1.8rem',
        transition: 'background .2s',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span style={{
        fontFamily: 'var(--serif)', fontSize: '2rem',
        fontStyle: 'italic', color: 'var(--red)',
        marginBottom: '1.2rem', display: 'block', fontWeight: 900,
      }}>{icon}</span>
      <div style={{
        fontFamily: 'var(--serif)', fontSize: '1.1rem',
        fontWeight: 900, marginBottom: '0.6rem',
      }}>{name}</div>
      <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.75 }}>{desc}</p>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" style={{
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
        Services
      </div>

      <h2 style={{
        fontFamily: 'var(--serif)',
        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
        fontWeight: 900, fontStyle: 'italic',
        letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: '3rem',
      }}>
        <i>What I</i><br /><b style={{ fontStyle: 'normal' }}>build</b><br /><i>for you.</i>
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '2px',
      }}>
        {services.map(s => <ServiceCard key={s.name} {...s} />)}
      </div>
    </section>
  );
}
