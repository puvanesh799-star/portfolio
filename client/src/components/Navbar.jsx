import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const links = ['Home','About','Skills','Projects','Education','Certificates','Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <a className="nav-logo" href="#">PM</a>
        <ul className="nav-links">
          {links.map(l => (
            <li key={l}>
              <Link to={l.toLowerCase()} smooth duration={600} offset={-80} spy activeClass="active">
                {l}
              </Link>
            </li>
          ))}
        </ul>
        <button className="nav-hamburger" onClick={() => setOpen(o => !o)} aria-label="menu">
          <span style={{ transform: open ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
          <span style={{ opacity: open ? 0 : 1 }} />
          <span style={{ transform: open ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-mobile"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          >
            {links.map(l => (
              <Link key={l} to={l.toLowerCase()} smooth duration={600} offset={-80}
                onClick={() => setOpen(false)}>
                {l}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
