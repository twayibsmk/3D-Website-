import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  const location = useLocation();

  const links = [
    { name: 'Blueprint', path: '/' },
    { name: 'Capabilities', path: '/capabilities' },
    { name: 'The Engine', path: '/engine' },
  ];

  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 50,
        padding: '2rem', display: 'flex', justifyContent: 'center',
        alignItems: 'center', pointerEvents: 'none',
        background: 'linear-gradient(to bottom, rgba(3,3,3,0.8), transparent)'
      }}
    >
      {/* Absolute positioned Logo */}
      <div style={{ position: 'absolute', left: '2rem', pointerEvents: 'auto' }}>
        <Link to="/" style={{ color: 'white', fontSize: '1rem', fontWeight: 'bold', letterSpacing: '0.2em', textDecoration: 'none' }}>
          AETHERIS<span style={{ color: 'var(--accent-cyan)' }}>.</span>
        </Link>
      </div>

      <nav style={{ pointerEvents: 'auto', display: 'flex', alignItems: 'center', gap: '3rem' }}>
        {links.map((link) => (
          <Link 
            key={link.path}
            to={link.path}
            style={{ 
              position: 'relative', fontSize: '0.8rem', textTransform: 'uppercase',
              fontWeight: 500, letterSpacing: '0.15em', transition: 'color 0.3s',
              color: location.pathname === link.path ? 'var(--text-primary)' : 'var(--text-secondary)',
              textDecoration: 'none'
            }}
          >
            {link.name}
            {location.pathname === link.path && (
              <motion.div
                layoutId="nav-line"
                style={{ 
                  position: 'absolute', bottom: '-4px', left: 0, right: 0, height: '1px',
                  backgroundColor: 'var(--accent-cyan)'
                }}
              />
            )}
          </Link>
        ))}
      </nav>
    </motion.header>
  );
}
