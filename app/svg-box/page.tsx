'use client';

import { useCallback } from 'react';

import { loadFull } from 'tsparticles';
import Particles from 'react-particles';
import type { Engine, ISourceOptions } from 'tsparticles-engine';
import { loadPolygonMaskPlugin } from 'tsparticles-plugin-polygon-mask';

import { particlesOptions } from './config';
import GlassCard from '../components/GlassCard';
import SvgProfile from '../../assets/svg/SvgProfile';

function SvgBox() {
  const particlesInit = useCallback(async (engine: Engine) => {
    const rsposne = await loadFull(engine);
    console.log('🚀  file: page.tsx:16  rsposne', rsposne);
    // await loadPolygonMaskPlugin(engine);
  }, []);

  return (
    <div>
      <GlassCard>
        <Particles options={particlesOptions} init={particlesInit} />
      </GlassCard>
      <SvgProfile>
        <Particles options={particlesOptions} init={particlesInit} />
      </SvgProfile>
    </div>
  );
}

export default SvgBox;
