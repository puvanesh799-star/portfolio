import { motion } from 'framer-motion';

const skills = {
  Frontend: [
    { icon: '🌐', name: 'HTML5' },
    { icon: '🎨', name: 'CSS3' },
    { icon: '⚡', name: 'JavaScript' },
    { icon: '⚛️', name: 'React.js' },
  ],
  Backend: [
    { icon: '🟢', name: 'Node.js' },
    { icon: '🚂', name: 'Express.js' },
  ],
  Tools: [
    { icon: '🐙', name: 'GitHub' },
    { icon: '💻', name: 'VS Code' },
  ],
};

const fadeUp = { hidden:{opacity:0,y:40}, show:{opacity:1,y:0,transition:{duration:0.6}} };

export default function Skills() {
  return (
    <section id="skills" className="section">
      <motion.div
        initial="hidden" whileInView="show" viewport={{ once:true, margin:'-80px' }}
        variants={{ show:{ transition:{ staggerChildren:0.15 } } }}
      >
        <motion.p variants={fadeUp} style={{ color:'#915eff', fontFamily:'Space Mono,monospace', fontSize:'0.85rem', marginBottom:8 }}>
          &lt;Skills /&gt;
        </motion.p>
        <motion.h2 variants={fadeUp} className="section-title">What I Work With</motion.h2>
        <motion.p variants={fadeUp} className="section-subtitle">Technologies and tools I use to build things</motion.p>

        <div className="skills-grid">
          {Object.entries(skills).map(([cat, items], ci) => (
            <motion.div
              key={cat} variants={fadeUp}
              className="glass-card skill-category"
              style={{ transitionDelay: `${ci * 0.1}s` }}
            >
              <h3>{cat}</h3>
              <div className="skill-items">
                {items.map(({ icon, name }) => (
                  <motion.div
                    key={name}
                    className="skill-badge"
                    whileHover={{ scale: 1.08, rotate: [-1, 1, -1, 0] }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="icon">{icon}</span>
                    {name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
