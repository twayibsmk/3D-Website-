import { motion } from 'framer-motion';

const AbstractVisuals = {
  Rings() {
    return (
      <div style={{ position: 'relative', width: '150px', height: '150px', transformStyle: 'preserve-3d', perspective: '800px' }}>
        {[0, 60, 120].map((deg, i) => (
          <motion.div
            key={i}
            animate={{ rotateX: 360, rotateY: 360 }}
            transition={{ repeat: Infinity, duration: 8 + i * 2, ease: "linear" }}
            style={{
              position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
              border: '2px solid var(--accent-cyan)', borderRadius: '50%',
              transform: `rotateX(${deg}deg)`,
              boxShadow: '0 0 20px rgba(0, 229, 255, 0.2), inset 0 0 10px rgba(0, 229, 255, 0.2)'
            }}
          />
        ))}
      </div>
    )
  },
  Topography() {
    return (
      <div style={{ position: 'relative', width: '150px', height: '100px', transformStyle: 'preserve-3d', perspective: '800px' }}>
        <motion.div
           animate={{ rotateZ: 360, y: [-10, 10, -10] }}
           transition={{ rotateZ: { repeat: Infinity, duration: 20, ease: "linear" }, y: { repeat: Infinity, duration: 4, ease: "easeInOut" } }}
           style={{ transformStyle: 'preserve-3d', width: '100%', height: '100%', transform: 'rotateX(60deg)' }}
        >
          {[0, 1, 2, 3].map((layer) => (
            <div key={layer} style={{
              position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
              border: '1px solid var(--accent-magenta)',
              borderRadius: '20px',
              transform: `translateZ(${layer * 15}px) scale(${1 - layer * 0.1})`,
              boxShadow: layer === 3 ? '0 0 30px var(--accent-magenta)' : 'none',
              background: 'rgba(255,0,85,0.05)'
            }} />
          ))}
        </motion.div>
      </div>
    )
  },
  NodeCube() {
    return (
      <div style={{ position: 'relative', width: '100px', height: '100px', transformStyle: 'preserve-3d' }}>
        <motion.div
          animate={{ rotateX: 360, rotateY: 360 }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          style={{ width: '100%', height: '100%', border: '1px solid #fff', background: 'rgba(255,255,255,0.1)', boxShadow: '0 0 40px rgba(255,255,255,0.5)', transformStyle: 'preserve-3d', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          {/* smaller generated cubes */}
          {[0, 1, 2].map((i) => (
            <motion.div key={i}
              initial={{ opacity: 1, scale: 0, y: 0 }}
              animate={{ opacity: 0, scale: 1.5, y: -100 }}
              transition={{ repeat: Infinity, duration: 2, delay: i * 0.6 }}
              style={{ position: 'absolute', width: '20px', height: '20px', border: '1px solid var(--accent-cyan)', background: 'var(--accent-cyan)' }}
            />
          ))}
        </motion.div>
      </div>
    )
  }
};

const services = [
  {
    title: "Self-Optimizing Operations",
    details: "Custom AI model deployment that manages complex supply chains and logistics completely autonomously.",
    Visual: AbstractVisuals.Rings
  },
  {
    title: "Predictive Execution",
    details: "Systems that pull real-time data to forecast trends and execute decisions with zero latency.",
    Visual: AbstractVisuals.Topography
  },
  {
    title: "Generative Automation",
    details: "Complete automation of administrative and software development workflows.",
    Visual: AbstractVisuals.NodeCube
  }
];

export default function Capabilities() {
  return (
    <motion.div 
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      style={{ padding: '20vh 10vw 10vh', display: 'flex', flexDirection: 'column' }}
    >
      <div style={{ textAlign: 'center', marginBottom: '10vh' }}>
        <h2 className="heading-hero" style={{ fontSize: '3.5rem' }}>Core Capabilities</h2>
        <p className="subhead" style={{ margin: '1rem auto' }}>Architecting pure, intervention-free execution.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', flex: 1 }}>
        {services.map((svc, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            className="glass-panel"
            style={{ padding: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', borderTop: '2px solid rgba(255,255,255,0.1)' }}
          >
            <div style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
              <svc.Visual />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', letterSpacing: '0.05em' }}>{svc.title}</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{svc.details}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
