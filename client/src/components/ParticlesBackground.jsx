import { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function ParticlesBackground() {
  const init = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={init}
      style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}
      options={{
        background: { color: { value: 'transparent' } },
        fpsLimit: 60,
        interactivity: {
          events: { onHover: { enable: true, mode: 'repulse' }, resize: true },
          modes: { repulse: { distance: 80, duration: 0.4 } },
        },
        particles: {
          color: { value: ['#915eff', '#00d4ff', '#ffffff'] },
          links: { color: '#915eff', distance: 120, enable: true, opacity: 0.15, width: 1 },
          move: { direction: 'none', enable: true, outModes: { default: 'bounce' }, speed: 0.6 },
          number: { density: { enable: true, area: 900 }, value: 60 },
          opacity: { value: 0.3 },
          shape: { type: 'circle' },
          size: { value: { min: 1, max: 2 } },
        },
        detectRetina: true,
      }}
    />
  );
}
