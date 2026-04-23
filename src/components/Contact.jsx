import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const inputStyle = {
    width: '100%', background: 'transparent',
    border: '1px solid var(--border)',
    padding: '0.85rem 1rem', color: 'var(--cream)',
    fontFamily: 'var(--sans)', fontSize: '0.9rem',
    outline: 'none', transition: 'border-color .2s', resize: 'none',
  };

  return (
    <section id="contact" style={{
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
        Contact
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '4rem', alignItems: 'start',
      }}>
        {/* Left */}
        <div>
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
            background: 'rgba(0,200,100,0.07)',
            border: '1px solid rgba(0,200,100,0.2)',
            padding: '0.35rem 0.9rem',
            fontFamily: 'var(--mono)', fontSize: '0.65rem',
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: '#00c864', marginBottom: '2rem',
          }}>
            <span style={{
              width: '5px', height: '5px', borderRadius: '50%',
              background: '#00c864',
              animation: 'pulse 2s infinite',
            }} />
            Available for new projects
          </div>

          <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:.25}}`}</style>

          <p style={{
            fontSize: '0.9rem', color: 'var(--muted)',
            lineHeight: 1.75, marginBottom: '2rem',
          }}>
            Whether you need a website for your business or want to add AI to your product — I want to hear what you're building.
          </p>

          <a
            href="mailto:jaswanthreddypadala@gmail.com"
            style={{
              fontFamily: 'var(--serif)', fontSize: '1rem',
              fontStyle: 'italic', color: 'var(--cream)',
              borderBottom: '1.5px solid var(--red)',
              paddingBottom: '2px', display: 'inline-block',
              transition: 'color .2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--red)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--cream)'}
          >
            jaswanthreddypadala@gmail.com
          </a>

          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1.5rem' }}>
            {[
              { label: '↗ LinkedIn', href: 'https://www.linkedin.com/in/jaswanthreddypadala/' },
              { label: '↗ GitHub', href: 'https://github.com/JaswanthReddyPadala/' },
              { label: '↗ Twitter', href: 'https://twitter.com/jaswanthreddyp2' },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--mono)', fontSize: '0.65rem',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: 'var(--muted)', transition: 'color .2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--red)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
              >{s.label}</a>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div>
          {sent ? (
            <div style={{
              fontFamily: 'var(--serif)', fontSize: '1.3rem',
              fontStyle: 'italic', color: 'var(--cream)',
              padding: '3rem 0',
            }}>
              Message received. I'll be in touch.
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {[
                { label: 'Name', field: 'name', type: 'input', placeholder: 'Your name' },
                { label: 'Email', field: 'email', type: 'input', placeholder: 'your@email.com' },
              ].map(({ label, field, type, placeholder }) => (
                <div key={field} style={{ display: 'flex', flexDirection: 'column' }}>
                  <label style={{
                    fontFamily: 'var(--mono)', fontSize: '0.62rem',
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: 'var(--muted)', marginBottom: '0.2rem',
                  }}>{label}</label>
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    placeholder={placeholder}
                    required
                    value={form[field]}
                    onChange={e => setForm(f => ({ ...f, [field]: e.target.value }))}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'rgba(255,45,0,0.5)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>
              ))}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
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
              </div>
              <button
                type="submit"
                style={{
                  background: 'var(--red)', border: 'none',
                  color: 'var(--black)', padding: '1rem',
                  fontFamily: 'var(--mono)', fontSize: '0.72rem',
                  letterSpacing: '0.15em', textTransform: 'uppercase',
                  cursor: 'pointer', transition: 'opacity .2s', marginTop: '0.4rem',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >Send Message →</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
