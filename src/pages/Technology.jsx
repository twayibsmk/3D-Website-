import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Card = ({ title, desc, icon, index }) => {
  return (
    <motion.div 
      className="glass-panel"
      initial={{ opacity: 0, z: -500, scale: 0.8 }}
      whileInView={{ opacity: 1, z: 0, scale: 1 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      style={{
        padding: '3rem',
        maxWidth: '500px',
        margin: '10vh auto',
        transformStyle: 'preserve-3d',
        borderTop: '1px solid var(--accent-cyan)',
        background: 'linear-gradient(135deg, rgba(20,20,20,0.8) 0%, rgba(5,5,5,0.9) 100%)',
        boxShadow: '0 20px 50px rgba(0,0,0,0.5), inset 0 0 20px rgba(0, 240, 255, 0.05)'
      }}
    >
      <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{icon}</div>
      <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{title}</h3>
      <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{desc}</p>
    </motion.div>
  )
}

export default function Technology() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const zPos = useTransform(scrollYProgress, [0, 1], [0, 1000]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 1, 0]);

  return (
    <motion.div 
      ref={containerRef}
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      style={{ height: '300vh', perspective: '1000px', overflowX: 'hidden' }}
    >
      <div style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh',
        background: 'radial-gradient(circle at center, #111 0%, #050505 100%)',
        zIndex: -1
      }} />

      <motion.div 
        style={{
          position: 'fixed',
          top: 0, left: 0, width: '100%', height: '100vh',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          z: zPos,
          opacity: opacity,
          transformStyle: 'preserve-3d'
        }}
      >
        <div style={{ position: 'absolute', top: '15vh', textAlign: 'center', width: '100%' }}>
          <h2 className="heading-hero" style={{ fontSize: '3rem', background: 'linear-gradient(to right, #fff, #888)', WebkitBackgroundClip: 'text', color: 'transparent' }}>Core Capabilities</h2>
          <p className="subhead" style={{ marginTop: '1rem' }}>Navigating the void with precision.</p>
        </div>

        <div style={{ height: '100%', overflowY: 'auto', paddingTop: '30vh', paddingBottom: '30vh', width: '100%', scrollBehavior: 'smooth' }}>
          <Card 
            index={0}
            icon="🪐"
            title="Antigravity Physics Engine" 
            desc="AI models trained specifically for microgravity navigation, calculating complex non-linear trajectories with zero latency."
          />
          <Card 
            index={1}
            icon="🧊"
            title="Immersive Spline Architecture" 
            desc="Bespoke web environments rendering complex 3D assets at 60fps across the vacuum of space, directly inside your helmet UX."
          />
          <Card 
            index={2}
            icon="🧠"
            title="Spatial AI Systems" 
            desc="Machine learning tailored for orbital deployment, recognizing geospatial anomalies and navigating debris fields autonomously."
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
