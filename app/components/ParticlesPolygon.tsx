// 'use client';

import React, { useCallback } from 'react'
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import { Engine, ISourceOptions } from 'tsparticles-engine';
import { loadPolygonMaskPlugin } from 'tsparticles-plugin-polygon-mask';

type Props = {
    options: ISourceOptions
}

const ParticlesPolygon = ({options}: Props) => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
        await loadPolygonMaskPlugin(engine);
      }, []);
  return (
    <Particles options={options} init={particlesInit} />
  )
}

export default ParticlesPolygon