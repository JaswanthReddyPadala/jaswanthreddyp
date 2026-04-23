import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

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

const ease = [0.22, 1, 0.36, 1];

function ProjectCard({ num, name, desc, tags, wip, url, internal, index }) {
  const [hovered, setHovered] = useState(false);
  const isClickable = !!url && !internal;
  const Tag = isClickable ? motion.a : motion.div;

  return (
    <Tag
      href={isClickable ? url : undefined}
      target={isClickable ? '_blank' : undefined}
      rel={isClickable ? 'noopener noreferrer' : undefined}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.1, ease }}
      onMouseEnter={e => { setHovered(true); e.currentTarget.style.background = 'var(--card-bg-hover)'; e.currentTarget.style.borderColor = 'var(--border-hover)'; }}
      onMouseLeave={e => { setHovered(false); e.currentTarget.style.background = 'var(--card-bg)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
      className="proj-card"
      style={{
        display: 'grid', gridTemplateColumns: 'auto 1fr auto',
        gap: '2rem', alignItems: 'start',
        border: '1px solid var(--border)',
        background: 'var(--card-bg)',
        padding: '2.2rem', color: 'inherit',
        position: 'relative', overflow: 'hidden',
        cursor: isClickable ? 'pointer' : 'default',
        textDecoration: 'none',
        transition: 'background .2s, border-color .2s',
      }}
    >
      {/* Animated left accent bar */}
      <motion.div
        animate={{ scaleY: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'absolute', left: 0, top: 0, bottom: 0,
          width: '3px', background: 'var(--red)', transformOrigin: 'top',
        }}
      />

      {/* Project number */}
      <motion.div
        style={{
          fontFamily: 'var(--serif)', fontSize: '2.5rem',
          fontWeight: 900, fontStyle: 'italic', lineHeight: 1, minWidth: '60px',
          color: 'var(--red)', opacity: hovered ? 1 : 0.4, transition: 'opacity .3s',
        }}
      >{num}</motion.div>

      <div>
        <div style={{ fontFamily: 'var(--serif)', fontSize: '1.3rem', fontWeight: 900, marginBottom: '0.4rem' }}>{name}</div>
        <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '0.8rem', maxWidth: '480px' }}>{desc}</p>
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
          {tags.map(t => (
            <span key={t} style={{
              fontFamily: 'var(--mono)', fontSize: '0.62rem',
              letterSpacing: '0.06em', textTransform: 'uppercase',
              padding: '0.2rem 0.6rem',
              background: 'color-mix(in srgb, var(--red) 8%, transparent)',
              color: 'var(--red)',
              border: '1px solid color-mix(in srgb, var(--red) 20%, transparent)',
            }}>{t}</span>
          ))}
          {wip && (
            <span style={{
              fontFamily: 'var(--mono)', fontSize: '0.62rem',
              letterSpacing: '0.06em', textTransform: 'uppercase',
              padding: '0.2rem 0.6rem',
              background: 'rgba(255,180,0,0.08)',
              color: '#ffb400',
              border: '1px solid rgba(255,180,0,0.25)',
            }}>In Progress</span>
          )}
        </div>
      </div>

      {/* Arrow — diagonal translate on hover */}
      <motion.div
        className="proj-arrow"
        animate={{
          x: hovered ? 3 : 0,
          y: hovered ? -3 : 0,
          color: hovered ? 'var(--cream)' : 'var(--muted)',
          opacity: internal ? 0.25 : 1,
        }}
        transition={{ duration: 0.2 }}
        style={{ fontSize: '1.2rem', paddingTop: '0.5rem' }}
      >
        {internal ? '⚙' : '↗'}
      </motion.div>
    </Tag>
  );
}

export default function Work() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="work" ref={ref} style={{ padding: '6rem 2.5rem', borderBottom: '1px solid var(--border)' }}>
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
        Work
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
        <b style={{ fontStyle: 'normal' }}>Selected</b><br /><i>Projects.</i>
      </motion.h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {projects.map((p, i) => <ProjectCard key={p.num} {...p} index={i} />)}
      </div>
    </section>
  );
}
