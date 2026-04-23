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

export default function About() {
  return (
    <section id="about" style={{
      padding: '6rem 2.5rem',
      borderBottom: '1px solid var(--border)',
      position: 'relative',
    }}>
      <div style={{
        fontFamily: 'var(--mono)', fontSize: '0.68rem',
        letterSpacing: '0.18em', textTransform: 'uppercase',
        color: 'var(--red)', marginBottom: '1.2rem',
        display: 'flex', alignItems: 'center', gap: '0.8rem',
      }}>
        <span style={{ display: 'block', width: '20px', height: '1px', background: 'var(--red)' }} />
        About
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '4rem', alignItems: 'start',
      }}>
        {/* Left col */}
        <div>
          <h2 style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 900, fontStyle: 'italic',
            letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: '3rem',
          }}>
            <b style={{ fontStyle: 'normal' }}>Dev at</b><br />
            Presidio.<br />
            <i>Builder</i><br />
            by choice.
          </h2>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '1.5rem' }}>
            {skills.map(s => (
              <span key={s} style={{
                fontFamily: 'var(--mono)', fontSize: '0.65rem',
                letterSpacing: '0.08em', textTransform: 'uppercase',
                padding: '0.3rem 0.8rem',
                border: '1px solid var(--border)', color: 'var(--muted)',
                cursor: 'default', transition: 'border-color .2s, color .2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--red)'; e.currentTarget.style.color = 'var(--red)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)'; }}
              >{s}</span>
            ))}
          </div>
        </div>

        {/* Right col */}
        <div>
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', marginBottom: '2rem',
          }}>
            {stats.map(s => (
              <div key={s.n} style={{
                background: '#111', border: '1px solid var(--border)', padding: '1.8rem',
              }}>
                <div style={{
                  fontFamily: 'var(--serif)', fontSize: '3rem',
                  fontWeight: 900, color: 'var(--red)', lineHeight: 1,
                }}>{s.n}</div>
                <div style={{
                  fontFamily: 'var(--mono)', fontSize: '0.65rem',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: 'var(--muted)', marginTop: '0.3rem',
                }}>{s.l}</div>
              </div>
            ))}
          </div>

          <p style={{
            color: 'var(--muted)', fontSize: '0.92rem',
            lineHeight: 1.85, marginBottom: '1.5rem',
          }}>
            I'm a full-stack developer and AI engineer at Presidio, where I help build AI-powered enterprise products. Outside that — I take freelance work for businesses that need a fast, well-crafted web presence.
          </p>
          <p style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: 1.85, marginBottom: '1.5rem' }}>
            I don't just write code. I think about what the product needs to do, who it needs to reach, and how to make it work reliably in the real world.
          </p>

          <div style={{
            fontFamily: 'var(--mono)', fontSize: '0.72rem',
            letterSpacing: '0.08em', color: 'var(--muted)',
            borderLeft: '2px solid var(--red)', paddingLeft: '1rem',
            marginTop: '1.5rem', lineHeight: 1.8,
          }}>
            Currently building <b>Bodhi</b> — an enterprise AI agent platform<br />
            LangGraph · FastAPI · Next.js · Azure Container Apps<br />
            Multi-LLM · Skills/Plugins System · Production deployed
          </div>
        </div>
      </div>
    </section>
  );
}
