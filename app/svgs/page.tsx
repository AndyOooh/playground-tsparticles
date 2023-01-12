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
      <div className='w-96 h-96 backdrop-blur-0 border-2 border-secondary flex justify-center items-center'>
          <Particles options={particlesOptions as ISourceOptions} init={particlesInit} />
      </div>

      {/*  Owl */}
      <h1>Owl</h1>
      <div className='bg-yellow-200 border border-green-400 w-44'>
        <img src='owl.svg' alt='' />
      </div>

      <div className='bg-yellow-200 border border-green-400'>
        <img src='animals.svg' alt='' />
      </div>
      <div className='bg-yellow-200 border border-green-400'>
        <img src='arms-crossed.svg' alt='' />
      </div>
      <div className='bg-yellow-200 border border-green-400'>
        <img src='avatar.svg' alt='' />
      </div>
      <div className='bg-yellow-200 border border-green-400'>
        <img src='cat.svg' alt='' />
      </div>
      <div className='bg-yellow-200 border border-green-400'>
        <img src='deer.svg' alt='' />
      </div>
      <div className='bg-yellow-200 border border-green-400'>
        <img src='deer2.svg' alt='' />
      </div>

      {/* Elephant */}
      <div className='bg-yellow-200 border border-green-400'>
        <img src='elephant.svg' alt='' />
      </div>

      <div className='bg-yellow-200 border border-green-400 '>
        <img src='star.svg' alt='' />
      </div>

      <div className='bg-yellow-200 border border-green-400 w-44 h-44'>
        <img src='tiger.svg' alt='' />
      </div>
    </>
  );
}

export default Deer;
