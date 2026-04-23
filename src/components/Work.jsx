import { useState } from 'react';

const projects = [
  {
    num: '01',
    name: 'Sri Vijayalakshmi Traders',
    desc: 'Clean, fast static website for an Indian commodity trading business. Built to establish credibility online and convert visitors into buyer inquiries.',
    tags: ['Static Website', 'Business', 'India'],
    url: 'https://www.srivijayalakshmi.in/',
    wip: false,
    internal: false,
  },
  {
    num: '02',
    name: 'VDL Global Impex',
    desc: 'Website for an India-based export company reaching international buyers across North America, EU, UK, Middle East, and Asia-Pacific. Built to communicate trust and product range to a global audience.',
    tags: ['Static Website', 'Export Business', 'Global'],
    wip: true,
    url: 'https://vdlglobalimpex.com/',
    internal: false,
  },
  {
    num: '03',
    name: 'Bodhi — AI Agent Platform',
    desc: 'Enterprise-grade agentic AI platform at Presidio. LangGraph workflows, skills/plugins architecture, multi-LLM support (Claude, GPT, Gemini), and a Next.js frontend. Powers real client deployments on Azure.',
    tags: ['AI Agents', 'LangGraph', 'FastAPI', 'Next.js', 'Azure'],
    url: null,
    wip: false,
    internal: true,
  },
];

function HoverCard({ as: Tag = 'div', children, baseStyle, ...props }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Tag
      {...props}
      style={{
        ...baseStyle,
        background: hovered ? '#161616' : '#111',
        borderColor: hovered ? 'rgba(245,240,232,0.15)' : 'var(--border)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children(hovered)}
    </Tag>
  );
}

function ProjectCard({ num, name, desc, tags, wip, url, internal }) {
  const isClickable = !!url && !internal;

  const baseStyle = {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr auto',
    gap: '2rem', alignItems: 'start',
    border: '1px solid var(--border)',
    padding: '2.2rem', color: 'inherit',
    transition: 'border-color .2s, background .2s',
    position: 'relative', overflow: 'hidden',
    cursor: isClickable ? 'pointer' : 'default',
    textDecoration: 'none',
  };

  const content = (hovered) => (
    <>
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0,
        width: '3px', background: 'var(--red)',
        transform: hovered ? 'scaleY(1)' : 'scaleY(0)',
        transformOrigin: 'top', transition: 'transform .3s',
      }} />
      <div style={{
        fontFamily: 'var(--serif)', fontSize: '2.5rem',
        fontWeight: 900, fontStyle: 'italic',
        color: 'rgba(255,45,0,0.15)', lineHeight: 1, minWidth: '60px',
      }}>{num}</div>
      <div>
        <div style={{
          fontFamily: 'var(--serif)', fontSize: '1.3rem',
          fontWeight: 900, marginBottom: '0.4rem',
        }}>{name}</div>
        <p style={{
          fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7,
          marginBottom: '0.8rem', maxWidth: '480px',
        }}>{desc}</p>
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
          {tags.map(t => (
            <span key={t} style={{
              fontFamily: 'var(--mono)', fontSize: '0.62rem',
              letterSpacing: '0.06em', textTransform: 'uppercase',
              padding: '0.2rem 0.6rem',
              background: 'rgba(255,45,0,0.08)', color: 'var(--red)',
              border: '1px solid rgba(255,45,0,0.2)',
            }}>{t}</span>
          ))}
          {wip && (
            <span style={{
              fontFamily: 'var(--mono)', fontSize: '0.62rem',
              letterSpacing: '0.06em', textTransform: 'uppercase',
              padding: '0.2rem 0.6rem',
              background: 'rgba(255,180,0,0.08)', color: '#ffb400',
              border: '1px solid rgba(255,180,0,0.2)',
            }}>In Progress</span>
          )}
        </div>
      </div>
      <div style={{
        fontSize: '1.2rem',
        color: hovered ? 'var(--cream)' : 'var(--muted)',
        transform: hovered ? 'translate(3px,-3px)' : 'none',
        transition: 'color .2s, transform .2s',
        paddingTop: '0.5rem',
        opacity: internal ? 0.25 : 1,
      }}>
        {internal ? '⚙' : '↗'}
      </div>
    </>
  );

  return (
    <HoverCard
      as={isClickable ? 'a' : 'div'}
      href={isClickable ? url : undefined}
      target={isClickable ? '_blank' : undefined}
      rel={isClickable ? 'noopener noreferrer' : undefined}
      baseStyle={baseStyle}
    >
      {content}
    </HoverCard>
  );
}

export default function Work() {
  return (
    <section id="work" style={{
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
        Work
      </div>

      <h2 style={{
        fontFamily: 'var(--serif)',
        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
        fontWeight: 900, fontStyle: 'italic',
        letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: '3rem',
      }}>
        <b style={{ fontStyle: 'normal' }}>Selected</b><br /><i>Projects.</i>
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {projects.map(p => <ProjectCard key={p.num} {...p} />)}
      </div>
    </section>
  );
}
