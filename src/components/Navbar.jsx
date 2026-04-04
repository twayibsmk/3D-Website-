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
      className="navbar-top"
    >
      {/* Absolute positioned Logo */}
      <div className="navbar-logo">
        <Link to="/" style={{ color: 'white', fontSize: '1rem', fontWeight: 'bold', letterSpacing: '0.2em', textDecoration: 'none' }}>
          AETHERIS<span style={{ color: 'var(--accent-cyan)' }}>.</span>
        </Link>
      </div>

      <nav className="navbar-links-container">
        {links.map((link) => (
          <Link 
            key={link.path}
            to={link.path}
            className="nav-link"
            style={{ 
              color: location.pathname === link.path ? 'var(--text-primary)' : 'var(--text-secondary)'
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
