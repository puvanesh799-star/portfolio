import { motion } from 'framer-motion';

const fadeUp = { hidden:{opacity:0,y:40}, show:{opacity:1,y:0,transition:{duration:0.6}} };

export default function Education() {
  return (
    <section id="education" className="section">
      <motion.div
        initial="hidden" whileInView="show" viewport={{ once:true, margin:'-80px' }}
        variants={{ show:{ transition:{ staggerChildren:0.15 } } }}
      >
        <motion.p variants={fadeUp} style={{ color:'#915eff', fontFamily:'Space Mono,monospace', fontSize:'0.85rem', marginBottom:8 }}>
          &lt;Education /&gt;
        </motion.p>
        <motion.h2 variants={fadeUp} className="section-title">My Journey</motion.h2>
        <motion.p variants={fadeUp} className="section-subtitle">Academic background and qualifications</motion.p>

        <div className="timeline">
          <motion.div variants={fadeUp} className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-year">2023 — 2026</div>
            <div className="timeline-degree">B.Sc Information Technology</div>
            <div className="timeline-school">Popes College, Sawyerpuram</div>
            <span className="timeline-score">🎓 78% Aggregate</span>
            <p style={{ color:'#8892b0', marginTop:12, lineHeight:1.7, fontSize:'0.9rem' }}>
              Focused on software development, web technologies, database management, 
              and computer networks. Actively built projects in React.js and Node.js.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
