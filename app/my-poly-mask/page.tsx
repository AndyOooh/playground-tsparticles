'use client';

import { useCallback } from 'react';

import { loadFull } from 'tsparticles';
import Particles from 'react-particles';
import type { Engine, ISourceOptions } from 'tsparticles-engine';
import { loadPolygonMaskPlugin } from 'tsparticles-plugin-polygon-mask';

import { particlesOptions } from './config';
import GlassCard from '../components/GlassCard';

function Deer() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
    await loadPolygonMaskPlugin(engine);
  }, []);

  return (
    <>
      {/* <div className='w-80 h-80 backdrop-blur-0 border-2 border-secondary flex justify-center items-center'> */}
      <Particles options={particlesOptions as ISourceOptions} init={particlesInit} />
      {/* </div> */}
    </>
  );
}

export default Deer;
