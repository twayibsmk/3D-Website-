import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Home() {
  return (
    <motion.div 
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      style={{ overflowX: 'hidden' }}
    >
      {/* 100vh Hero viewport */}
      <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
        {/* The Spline Component takes full background */}
        <div style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            zIndex: 0, pointerEvents: 'auto'
        }}>
          <Spline scene="https://prod.spline.design/8O65kd2obHWPYNIu/scene.splinecode" />
        </div>

        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
          padding: '0 5vw', pointerEvents: 'none', zIndex: 10, textAlign: 'center'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <motion.h1 
              className="heading-hero" 
              style={{ marginBottom: '1rem', textShadow: '0 0 30px rgba(0,0,0,0.8)' }}
            >
              AETHERIS: <br/>ARCHITECTING AUTONOMY.
            </motion.h1>
            <p className="subhead" style={{ textShadow: '0 0 20px rgba(0,0,0,0.8)' }}>
              Bespoke, self-executing AI infrastructure that runs your company with surgical precision. Zero intervention required.
            </p>

            <motion.div 
              animate={{ opacity: [0.3, 1, 0.3], boxShadow: ['0 0 0px #00e5ff', '0 0 30px #00e5ff', '0 0 0px #00e5ff'] }} 
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              style={{ marginTop: '3rem', width: '2px', height: '10vh', background: 'var(--accent-cyan)' }}
            />
          </motion.div>
        </div>
      </div>

      {/* New Below-The-Fold Section */}
      <div style={{ 
        width: '100%', minHeight: '50vh', padding: '10vh 5vw',
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        zIndex: 10, position: 'relative'
      }}>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ maxWidth: '800px', textAlign: 'center' }}
        >
          <h2 style={{ 
            fontSize: 'clamp(2rem, 3vw, 3rem)', color: 'white', 
            fontWeight: '600', marginBottom: '2rem', letterSpacing: '0.05em' 
          }}>
            BEYOND AUTOMATION. TOTAL AUTONOMY.
          </h2>
          <p style={{ 
            fontSize: '1.125rem', color: '#E0E0E0', 
            lineHeight: '1.8', fontWeight: '300' 
          }}>
            The era of human-in-the-loop bottlenecks is over. Aetheris Intelligence doesn't just assist your team; it assumes total operational control. By bridging deep neural networks with real-time spatial data processing, we create digital ecosystems that organically evolve, scale, and execute in the background. Leave legacy systems behind and step into the architecture of the future.
          </p>
        </motion.div>
      </div>

    </motion.div>
  );
}
