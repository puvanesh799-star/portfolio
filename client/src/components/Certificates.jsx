import { motion } from 'framer-motion';

const certs = [
  { icon: '🖥️', title: 'Frontend Development', issuer: 'Certified Course' },
  { icon: '🐍', title: 'Python Programming', issuer: 'Certified Course' },
  { icon: '⌨️', title: 'Typing English', issuer: 'Certified Course' },
];

const fadeUp = { hidden:{opacity:0,y:40}, show:{opacity:1,y:0,transition:{duration:0.6}} };

export default function Certificates() {
  return (
    <section id="certificates" className="section">
      <motion.div
        initial="hidden" whileInView="show" viewport={{ once:true, margin:'-80px' }}
        variants={{ show:{ transition:{ staggerChildren:0.15 } } }}
      >
        <motion.p variants={fadeUp} style={{ color:'#915eff', fontFamily:'Space Mono,monospace', fontSize:'0.85rem', marginBottom:8 }}>
          &lt;Certificates /&gt;
        </motion.p>
        <motion.h2 variants={fadeUp} className="section-title">My Credentials</motion.h2>
        <motion.p variants={fadeUp} className="section-subtitle">Certifications that validate my skills</motion.p>

        <div className="certs-grid">
          {certs.map((c) => (
            <motion.div key={c.title} variants={fadeUp} className="cert-card"
              whileHover={{ y:-6, scale:1.02 }} transition={{ type:'spring', stiffness:300 }}
            >
              <div className="cert-icon">{c.icon}</div>
              <div className="cert-title">{c.title}</div>
              <span className="cert-badge">{c.issuer}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
