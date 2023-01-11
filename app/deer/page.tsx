'use client';

import { useCallback } from 'react';

import { loadFull } from 'tsparticles';
import Particles from 'react-particles';
import type { Engine } from 'tsparticles-engine';
import { loadPolygonMaskPlugin } from 'tsparticles-plugin-polygon-mask';

import { particlesOptions } from './config';
// import { particlesOptions } from '../svg-box/config';

function MyPolyMask() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
    await loadPolygonMaskPlugin(engine);
  }, []);

  return (
    <section>
      <div className='card overflow-hidden w-96 h-96 backdrop-blur-[2px] bg-white/5 border-2 border-slate-100'>
        <Particles options={particlesOptions} init={particlesInit} />
      </div>
    </section>
  );
}

export default MyPolyMask;
