import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{
        padding: '1.5rem 2.5rem',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        borderTop: '1px solid var(--border)',
        flexWrap: 'wrap', gap: '0.5rem',
      }}
    >
      <span style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', letterSpacing: '0.08em', color: 'var(--muted)' }}>
        © 2026 Jaswanth Reddy Padala · Full-Stack · AI · Freelance
      </span>
      <motion.span
        whileHover={{ color: 'rgba(255,45,0,0.7)' }}
        style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '0.85rem', color: 'rgba(255,45,0,0.4)', cursor: 'default' }}
      >
        Built with intent.
      </motion.span>
    </motion.footer>
  );
}
