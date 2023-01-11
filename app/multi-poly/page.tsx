'use client';

import { useCallback } from 'react';

import { loadFull } from 'tsparticles';
import Particles from 'react-particles';
import type { Engine, ISourceOptions } from 'tsparticles-engine';
import { loadPolygonMaskPlugin } from 'tsparticles-plugin-polygon-mask';

import { particlesOptions } from './config';
import GlassCard from '../components/GlassCard';

function MultiPoly() {
  const particlesInit = useCallback(async (engine: Engine) => {
    const res = await loadFull(engine);
    console.log('🚀  file: page.tsx:16  res', res);
    const response = await loadPolygonMaskPlugin(engine);
    console.log('🚀  file: page.tsx:17  response', response);
  }, []);

  return (
    <div>
      <GlassCard />
      <Particles options={particlesOptions} init={particlesInit} />
    </div>
  );
}

export default MultiPoly;
