import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* Gradient orbs */}
      <div style={{
        position:'absolute', top:'20%', left:'30%',
        width:500, height:500,
        background:'radial-gradient(circle, rgba(145,94,255,0.15) 0%, transparent 70%)',
        borderRadius:'50%', pointerEvents:'none', zIndex:0
      }} />
      <div style={{
        position:'absolute', bottom:'10%', right:'10%',
        width:400, height:400,
        background:'radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 70%)',
        borderRadius:'50%', pointerEvents:'none', zIndex:0
      }} />

      <div className="hero-content">
        <motion.div
          initial={{ opacity:0, y:30 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.6 }}
        >
          <span className="hero-tag">✦ Available for Work</span>
          <h1 className="hero-name">
            Hi, I'm <span>Puvaneshwaran</span>
          </h1>
          <div className="hero-typing">
            <span>A Passionate </span>
            <TypeAnimation
              className="type-text"
              sequence={[
                'React Developer', 2000,
                'Frontend Developer', 2000,
                'Node.js Learner', 2000,
                'Full Stack Enthusiast', 2000,
              ]}
              repeat={Infinity}
            />
          </div>
          <p style={{ color:'#8892b0', lineHeight:1.8, marginBottom:32, maxWidth:480 }}>
            B.Sc IT student from Thoothukudi, Tamil Nadu — building modern, 
            responsive web apps with React.js &amp; Node.js.
          </p>
          <div className="hero-btns">
            <Link to="contact" smooth duration={600} offset={-80}>
              <button className="btn-primary">Get In Touch ✉</button>
            </Link>
            <Link to="projects" smooth duration={600} offset={-80}>
              <button className="btn-outline">View Projects →</button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Floating code decoration */}
      <motion.div
        style={{
          position:'absolute', right:'5%', top:'15%',
          fontFamily:'Space Mono, monospace', fontSize:'0.75rem',
          color:'rgba(145,94,255,0.4)', lineHeight:2, pointerEvents:'none',
          zIndex:1
        }}
        initial={{ opacity:0, x:40 }}
        animate={{ opacity:1, x:0 }}
        transition={{ duration:0.8, delay:0.4 }}
      >
        {`const dev = {`}<br/>
        {`  name: "Puvaneshwaran",`}<br/>
        {`  role: "Full Stack Dev",`}<br/>
        {`  skills: ["React","Node"],`}<br/>
        {`  open: true`}<br/>
        {`}`}
      </motion.div>

      {/* Animated floating shapes */}
      {[...Array(5)].map((_,i) => (
        <motion.div key={i}
          style={{
            position:'absolute',
            width: 8 + i*6, height: 8 + i*6,
            borderRadius: i % 2 === 0 ? '50%' : '4px',
            background: i % 2 === 0 ? 'rgba(145,94,255,0.3)' : 'rgba(0,212,255,0.3)',
            right: `${10 + i*8}%`,
            top: `${20 + i*12}%`,
            zIndex:1
          }}
          animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease:'easeInOut' }}
        />
      ))}

      <div className="hero-scroll-hint">
        <div className="scroll-arrow" />
        <span>Scroll Down</span>
      </div>
    </section>
  );
}
