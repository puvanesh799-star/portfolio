import { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const fadeUp = { hidden:{opacity:0,y:40}, show:{opacity:1,y:0,transition:{duration:0.6}} };

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', message:'' });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await axios.post('/api/contact', form);
      setStatus({ type:'success', msg: res.data.message });
      setForm({ name:'', email:'', message:'' });
    } catch (err) {
      setStatus({ type:'error', msg: err.response?.data?.error || 'Something went wrong. Try again.' });
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="section">
      <motion.div
        initial="hidden" whileInView="show" viewport={{ once:true, margin:'-80px' }}
        variants={{ show:{ transition:{ staggerChildren:0.15 } } }}
      >
        <motion.p variants={fadeUp} style={{ color:'#915eff', fontFamily:'Space Mono,monospace', fontSize:'0.85rem', marginBottom:8 }}>
          &lt;Contact /&gt;
        </motion.p>
        <motion.h2 variants={fadeUp} className="section-title">Get In Touch</motion.h2>
        <motion.p variants={fadeUp} className="section-subtitle">Have an opportunity? Let's talk!</motion.p>

        <div className="contact-grid">
          <motion.div variants={fadeUp} className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm open to frontend and full stack opportunities. Whether you have a project, 
              internship, or just want to say hi — my inbox is always open!
            </p>
            <div className="contact-details">
              <div className="contact-detail"><span className="icon">📧</span> puvanesh799@gmail.com</div>
              <div className="contact-detail"><span className="icon">📱</span> +91 6381328112</div>
              <div className="contact-detail"><span className="icon">📍</span> Thoothukudi, Tamil Nadu</div>
            </div>
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="social-link" title="GitHub">🐙</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-link" title="LinkedIn">💼</a>
              <a href="mailto:puvanesh797@gmail.com" className="social-link" title="Email">📧</a>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="glass-card">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Your Name</label>
                <input id="contact-name" name="name" value={form.name} onChange={handleChange}
                  placeholder="Puvaneshwaran M" required />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input id="contact-email" type="email" name="email" value={form.email} onChange={handleChange}
                  placeholder="you@example.com" required />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea id="contact-message" name="message" value={form.message} onChange={handleChange}
                  placeholder="Your message here..." required />
              </div>
              {status && (
                <div className={`form-status ${status.type}`}>{status.msg}</div>
              )}
              <button id="contact-submit" type="submit" className="btn-primary" disabled={loading}
                style={{ width:'100%', justifyContent:'center' }}>
                {loading ? 'Sending...' : 'Send Message ✉'}
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
