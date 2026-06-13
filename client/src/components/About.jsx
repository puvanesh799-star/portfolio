import { motion } from 'framer-motion';
import aboutImg from '../assets/about.jpg';

const fadeUp = { hidden:{opacity:0,y:40}, show:{opacity:1,y:0,transition:{duration:0.6}} };

export default function About() {
  return (
    <section id="about" className="section">
      <motion.div
        initial="hidden" whileInView="show" viewport={{ once:true, margin:'-80px' }}
        variants={{ show:{ transition:{ staggerChildren:0.15 } } }}
      >
        <motion.p variants={fadeUp} style={{ color:'#915eff', fontFamily:'Space Mono,monospace', fontSize:'0.85rem', marginBottom:8 }}>
          &lt;About /&gt;
        </motion.p>
        <motion.h2 variants={fadeUp} className="section-title">Who Am I?</motion.h2>
        <motion.p variants={fadeUp} className="section-subtitle">A little about my background and personality</motion.p>

        <div className="about-grid">
          <motion.div variants={fadeUp} className="about-image-wrap">
            <div className="about-img-glow" />
            <div className="about-avatar glass-card" style={{ overflow:'hidden', padding:0, display:'flex', alignItems:'center', justifyContent:'center', minHeight:320 }}>
              <img 
                src={aboutImg} 
                alt="Puvaneshwaran M" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  display: 'block'
                }} 
              />
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="about-text glass-card">
            <h3>Frontend / Full Stack Fresher Developer</h3>
            <p>
              Frontend-focused B.Sc IT student with hands-on experience in React.js, 
              responsive web development, and CRUD-based applications. Quick learner 
              and team player eager to contribute in frontend or full stack roles.
            </p>
            <div className="about-info">
              <div className="about-info-item">
                <span className="about-info-label">Name</span>
                <span className="about-info-value">Puvaneshwaran M</span>
              </div>
              <div className="about-info-item">
                <span className="about-info-label">Email</span>
                <span className="about-info-value">puvanesh799@gmail.com</span>
              </div>
              <div className="about-info-item">
                <span className="about-info-label">Phone</span>
                <span className="about-info-value">+91 6381328112</span>
              </div>
              <div className="about-info-item">
                <span className="about-info-label">Location</span>
                <span className="about-info-value">Thoothukudi, TN</span>
              </div>
              <div className="about-info-item">
                <span className="about-info-label">Degree</span>
                <span className="about-info-value">B.Sc Information Technology</span>
              </div>
              <div className="about-info-item">
                <span className="about-info-label">Status</span>
                <span className="about-info-value" style={{ color:'#00d464' }}>✓ Open to Work</span>
              </div>
            </div>
            <div className="about-tags">
              {['Quick Learner','Team Worker','Good Communication','Adaptable'].map(t => (
                <span key={t} className="about-tag">{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
