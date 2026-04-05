import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Blueprint', path: '/' },
    { name: 'Capabilities', path: '/capabilities' },
    { name: 'The Engine', path: '/engine' },
  ];

  return (
    <>
      <motion.header 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="navbar-top"
      >
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/" onClick={() => setIsOpen(false)} style={{ color: 'white', fontSize: '1.2rem', fontWeight: 'bold', letterSpacing: '0.2em', textDecoration: 'none' }}>
            AETHERIS<span style={{ color: 'var(--accent-cyan)' }}>.</span>
          </Link>
        </div>

        {/* Desktop Links */}
        <nav className="navbar-links-container desktop-nav">
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

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <motion.div 
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }} 
            className="burger-line"
          />
          <motion.div 
            animate={{ opacity: isOpen ? 0 : 1 }} 
            className="burger-line" 
          />
          <motion.div 
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }} 
            className="burger-line" 
          />
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="mobile-menu-overlay"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <nav className="mobile-nav-links">
              {links.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path}
                  className="mobile-nav-link"
                  onClick={() => setIsOpen(false)}
                  style={{ 
                    color: location.pathname === link.path ? 'var(--accent-cyan)' : 'var(--text-primary)'
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
