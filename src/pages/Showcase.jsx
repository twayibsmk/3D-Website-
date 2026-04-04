import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Orbital Automation",
    subtitle: "AI-driven robotic arm for satellite repair",
    color: "var(--accent-cyan)",
    icon: "⚙️"
  },
  {
    id: 2,
    title: "Zero-G Habitation UI",
    subtitle: "Spatial computing interface designed for astronauts",
    color: "var(--accent-magenta)",
    icon: "🌌"
  }
];

export default function Showcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <motion.div 
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}
    >
      <div style={{ position: 'absolute', top: '15vh', textAlign: 'center', width: '100%', zIndex: 10 }}>
        <h2 className="heading-hero" style={{ fontSize: '3rem', margin: 0 }}>Client Showcase</h2>
        <p className="subhead" style={{ marginTop: '0.5rem' }}>Portfolio of spatial deployments.</p>
      </div>

      <div style={{ 
        position: 'relative', width: '100%', height: '60vh', marginTop: '10vh',
        display: 'flex', alignItems: 'center', justifyContent: 'center', perspective: '1200px'
      }}>
        
        {/* Navigation Buttons */}
        <button onClick={prevSlide} style={{ position: 'absolute', left: '10vw', zIndex: 20, background: 'none', border: '1px solid var(--glass-border)', borderRadius: '50%', padding: '1rem', color: 'white', cursor: 'pointer', backdropFilter: 'blur(10px)' }}>
          <ChevronLeft size={24} />
        </button>
        
        <button onClick={nextSlide} style={{ position: 'absolute', right: '10vw', zIndex: 20, background: 'none', border: '1px solid var(--glass-border)', borderRadius: '50%', padding: '1rem', color: 'white', cursor: 'pointer', backdropFilter: 'blur(10px)' }}>
          <ChevronRight size={24} />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, rotateY: -90, scale: 0.8 }}
            animate={{ opacity: 1, rotateY: 0, scale: 1 }}
            exit={{ opacity: 0, rotateY: 90, scale: 0.8 }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
            style={{ 
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Hologram Box */}
            <motion.div 
              animate={{ rotateY: 360, y: [0, -15, 0] }}
              transition={{ rotateY: { repeat: Infinity, duration: 10, ease: "linear" }, y: { repeat: Infinity, duration: 3, ease: "easeInOut" } }}
              style={{
                width: '150px', height: '150px', marginBottom: '4rem',
                border: `1px solid ${projects[currentIndex].color}`,
                background: `linear-gradient(135deg, ${projects[currentIndex].color}22, transparent)`,
                boxShadow: `0 0 40px ${projects[currentIndex].color}44, inset 0 0 20px ${projects[currentIndex].color}44`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem',
                backdropFilter: 'blur(4px)', borderRadius: '20px'
              }}
            >
              <div style={{ filter: `drop-shadow(0 0 10px ${projects[currentIndex].color})` }}>
                {projects[currentIndex].icon}
              </div>
            </motion.div>

            {/* Pedestal Base */}
            <div style={{
              width: '250px', height: '40px',
              background: 'linear-gradient(to bottom, rgba(40,40,40,0.8), rgba(10,10,10,0.9))',
              borderTop: `2px solid ${projects[currentIndex].color}`,
              borderBottom: '1px solid #111',
              borderRadius: '50% 50% 10% 10% / 20px 20px 5px 5px',
              position: 'relative',
              boxShadow: `0 -10px 30px ${projects[currentIndex].color}33`
            }}>
              {/* Pedestal glow */}
              <div style={{ position: 'absolute', top: '-100px', left: '50%', transform: 'translateX(-50%)', width: '100px', height: '200px', background: `conic-gradient(from 180deg at 50% 100%, transparent 120deg, ${projects[currentIndex].color}44 180deg, transparent 240deg)`, filter: 'blur(10px)', pointerEvents: 'none' }} />
            </div>

            {/* Info Card */}
            <div className="glass-panel" style={{ marginTop: '2rem', padding: '2rem', textAlign: 'center', width: '350px' }}>
              <h3 style={{ color: projects[currentIndex].color, marginBottom: '0.5rem', fontSize: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                {projects[currentIndex].title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                {projects[currentIndex].subtitle}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

    </motion.div>
  );
}
