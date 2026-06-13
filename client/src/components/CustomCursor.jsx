import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e) => {
      dot.current.style.left = e.clientX + 'px';
      dot.current.style.top = e.clientY + 'px';
      ring.current.style.left = e.clientX + 'px';
      ring.current.style.top = e.clientY + 'px';
    };
    const over = () => setHovered(true);
    const out = () => setHovered(false);
    window.addEventListener('mousemove', move);
    document.querySelectorAll('a,button,input,textarea,.skill-badge,.project-card,.cert-card,.social-link').forEach(el => {
      el.addEventListener('mouseenter', over);
      el.addEventListener('mouseleave', out);
    });
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div className="cursor">
      <div ref={dot} className="cursor-dot" style={{ position: 'fixed' }} />
      <div ref={ring} className={`cursor-ring ${hovered ? 'hovered' : ''}`} style={{ position: 'fixed' }} />
    </div>
  );
}
