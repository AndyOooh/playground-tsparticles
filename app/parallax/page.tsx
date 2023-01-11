'use client';

import { useCallback } from 'react';

import { loadFull } from 'tsparticles';
import Particles from 'react-particles';
import type { Engine, ISourceOptions } from 'tsparticles-engine';
import { loadPolygonMaskPlugin } from 'tsparticles-plugin-polygon-mask';

import { particlesOptions } from './config';
import GlassCard from '../components/GlassCard';

function Parallax() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
    await loadPolygonMaskPlugin(engine);
  }, []);

  return (
    <div>
      <GlassCard>
        <Particles options={particlesOptions} init={particlesInit} />
      </GlassCard>
    </div>
  );
}

export default Parallax;
