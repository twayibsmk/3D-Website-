import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function Engine() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cursorX = useSpring(0, { stiffness: 100, damping: 20 });
  const cursorY = useSpring(0, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const particles = Array.from({ length: 40 });

  const cards = [
    {
      title: "Neural Processing Core",
      desc: "At the heart of the Aetheris platform lies a proprietary neural architecture designed for infinite scalability. Our spatial processing grids ingest millions of concurrent data points per second, translating raw, unstructured market chaos into linear, self-executing operational pathways."
    },
    {
      title: "Decentralized Redundancy",
      desc: "Absolute autonomy requires absolute stability. Operating across a fractured matrix of decentralized server nodes, the Aetheris engine ensures zero downtime. Quantum-resistant cryptographic protocols secure your enterprise data, allowing the system to run flawlessly without human oversight."
    },
    {
      title: "Self-Healing Algorithms",
      desc: "The system is not static. Utilizing localized reinforcement learning, the Aetheris core constantly rewrites its own operational parameters. It detects inefficiencies in your supply chain and internal workflows, autonomously deploying patches and optimized pathways before a human analyst could even register the anomaly."
    }
  ];

  return (
    <motion.div 
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      style={{ overflow: 'hidden', background: 'radial-gradient(circle at center, rgba(10,10,10,0.8), #000)' }}
    >
      {/* Cursor Follower */}
      <motion.div 
        style={{
          position: 'fixed', top: 0, left: 0, width: '40px', height: '40px',
          borderRadius: '50%', background: 'radial-gradient(circle, var(--accent-cyan) 0%, transparent 70%)',
          x: cursorX, y: cursorY, translateX: '-50%', translateY: '-50%',
          pointerEvents: 'none', zIndex: 9999, mixBlendMode: 'screen',
          filter: 'blur(5px)'
        }}
      />

      <div style={{ position: 'absolute', top: '15vh', width: '100%', textAlign: 'center', zIndex: 20, pointerEvents: 'none' }}>
        <h2 className="heading-hero" style={{ fontSize: '3rem' }}>The Engine</h2>
        <p className="subhead" style={{ margin: '1rem auto' }}>Powered by the Aetheris Neural Core. Real-time processing at scale.</p>
      </div>

      {/* Interactive Floating Detail Cards */}
      <div style={{
          position: 'absolute', bottom: '5vh', width: '100%', zIndex: 30, padding: '0 5vw',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'
      }}>
        {cards.map((card, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.2, duration: 0.8 }}
            className="glass-panel"
            style={{ 
              background: 'rgba(5, 5, 5, 0.7)', padding: '2rem',
              borderTop: `2px solid ${i % 2 === 0 ? 'var(--accent-cyan)' : 'var(--accent-magenta)'}`,
              borderRadius: '12px'
            }}
          >
            <h3 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.25rem', letterSpacing: '0.05em' }}>{card.title}</h3>
            <p style={{ color: '#aaa', fontSize: '0.9rem', lineHeight: '1.6' }}>{card.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Isometric 3D Environment */}
      <div style={{
        position: 'absolute', top: '-10vh', left: 0, width: '100%', height: '120vh',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        perspective: '1200px'
      }}>
        <motion.div 
          initial={{ rotateX: 70, rotateZ: -45, scale: 0.8 }}
          animate={{ rotateX: 60, rotateZ: -45, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{
            width: '80vw', height: '80vw', maxWidth: '1000px', maxHeight: '1000px',
            transformStyle: 'preserve-3d', position: 'relative',
            border: '1px solid var(--grid-color)',
            background: 'linear-gradient(to right, var(--grid-color) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)',
            backgroundSize: '50px 50px', boxShadow: 'inset 0 0 100px #000'
          }}
        >
          {/* Particles simulating data transfer */}
          {particles.map((_, i) => (
            <motion.div 
              key={i}
              initial={{ x: Math.random() * 1000, y: Math.random() * 1000, opacity: 0 }}
              animate={{ 
                x: [Math.random() * 1000, Math.random() * 1000], 
                y: [Math.random() * 1000, Math.random() * 1000],
                opacity: [0, 1, 0]
              }}
              transition={{ repeat: Infinity, duration: 2 + Math.random() * 3, ease: "linear", delay: Math.random() * 2 }}
              style={{
                position: 'absolute', width: '4px', height: '4px',
                background: i % 2 === 0 ? 'var(--accent-cyan)' : 'var(--accent-magenta)',
                boxShadow: `0 0 10px ${i % 2 === 0 ? 'var(--accent-cyan)' : 'var(--accent-magenta)'}`,
                borderRadius: '50%'
              }}
            />
          ))}
        </motion.div>
      </div>

    </motion.div>
  );
}
