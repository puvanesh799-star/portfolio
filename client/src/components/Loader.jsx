import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ onDone }) {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(false);
      setTimeout(onDone, 500);
    }, 2000);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="loader"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="loader-logo"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            PM
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ color: '#8892b0', fontSize: '0.9rem', marginTop: 12 }}
          >
            Puvaneshwaran M
          </motion.p>
          <div className="loader-bar-wrap">
            <div className="loader-bar" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
