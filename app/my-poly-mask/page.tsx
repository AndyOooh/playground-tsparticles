'use client';

import { useCallback } from 'react';

import { loadFull } from "tsparticles";
import Particles from "react-particles";
import type { Engine, ISourceOptions } from "tsparticles-engine";
import { loadPolygonMaskPlugin } from "tsparticles-plugin-polygon-mask";

import { particlesOptions } from './config';
import GlassCard from '../components/GlassCard';

function Deer() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
    await loadPolygonMaskPlugin(engine);
  }, []);

  return (
    <div>
      {/* <GlassCard /> */}
      {/* <h1>Helloo</h1> */}
      <Particles options={particlesOptions as ISourceOptions} init={particlesInit} />
      {/* <Particles id="tsparticles" options={particlesOptions as ISourceOptions} init={particlesInit} /> */}
    </div>
  );
}

export default Deer;
