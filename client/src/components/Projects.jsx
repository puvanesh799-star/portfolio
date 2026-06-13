import { motion } from 'framer-motion';

const projects = [
  {
    num: '01',
    title: 'Hotel Room Booking System',
    desc: 'A full-featured hotel booking platform with real-time availability, admin controls, and secure authentication.',
    tags: ['React.js', 'Node.js', 'Express', 'JWT', 'CSS3'],
    features: ['CRUD operations for room management','JWT Authentication & Authorization','Admin Dashboard with analytics','Responsive booking UI','User-friendly interface'],
  },
  {
    num: '02',
    title: 'Portfolio Website',
    desc: 'A modern, responsive 3D portfolio built with React.js showcasing skills, projects, and contact integration.',
    tags: ['React.js', 'Node.js', 'Three.js', 'Framer Motion'],
    features: ['3D interactive elements','Glassmorphism design','Mobile-first responsive layout','Smooth animations','Contact form with API'],
  },
];

const fadeUp = { hidden:{opacity:0,y:40}, show:{opacity:1,y:0,transition:{duration:0.6}} };

export default function Projects() {
  return (
    <section id="projects" className="section">
      <motion.div
        initial="hidden" whileInView="show" viewport={{ once:true, margin:'-80px' }}
        variants={{ show:{ transition:{ staggerChildren:0.15 } } }}
      >
        <motion.p variants={fadeUp} style={{ color:'#915eff', fontFamily:'Space Mono,monospace', fontSize:'0.85rem', marginBottom:8 }}>
          &lt;Projects /&gt;
        </motion.p>
        <motion.h2 variants={fadeUp} className="section-title">Things I've Built</motion.h2>
        <motion.p variants={fadeUp} className="section-subtitle">A selection of my recent work</motion.p>

        <div className="projects-grid">
          {projects.map((p) => (
            <motion.div key={p.num} variants={fadeUp} className="project-card"
              whileHover={{ y: -8 }} transition={{ type:'spring', stiffness:300 }}
            >
              <div className="project-num">{p.num}</div>
              <div className="project-title">{p.title}</div>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map(t => <span key={t} className="project-tag">{t}</span>)}
              </div>
              <ul className="project-features">
                {p.features.map(f => <li key={f}>{f}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
