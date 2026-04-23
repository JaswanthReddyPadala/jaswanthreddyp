export default function Footer() {
  return (
    <footer style={{
      padding: '1.5rem 2.5rem',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      borderTop: '1px solid var(--border)',
      flexWrap: 'wrap', gap: '0.5rem',
    }}>
      <span style={{
        fontFamily: 'var(--mono)', fontSize: '0.65rem',
        letterSpacing: '0.08em', color: 'var(--muted)',
      }}>
        © 2026 Jaswanth Reddy Padala · Full-Stack · AI · Freelance
      </span>
      <span style={{
        fontFamily: 'var(--serif)', fontStyle: 'italic',
        fontSize: '0.85rem', color: 'rgba(255,45,0,0.4)',
      }}>
        Built with intent.
      </span>
    </footer>
  );
}
