'use client';

import ProfileImage from '../components/ProfileImage';

import { particlesOptions as owlOptions } from './owlConfig';
import { particlesOptions as bgMaskOptions } from './bgMaskConfig';
import ParticlesPolygon from '../components/ParticlesPolygon';

function FlexImages() {
  return (
    <>
      <div className='flex gap-4 w-1/2 mx-auto mb-4'>
        <div className='relative border-4 border-purple-900 rounded-full flex-1 overflow-hidden h-full aspect-square'>
          {/* <Particles options={bgMaskOptions} init={particlesInit} /> */}
          <ParticlesPolygon options={bgMaskOptions} />
        </div>
        <div className='relative border-4 border-purple-900 rounded-full flex-1 overflow-hidden h-full aspect-square'>
          {/* <ParticlesPolygon options={owlOptions} /> */}
        </div>
        <div className='relative border-4 border-purple-900 rounded-full flex-1 overflow-hidden h-full aspect-square'>
          <ParticlesPolygon options={bgMaskOptions} />
        </div>
      </div>
      <div className='flex gap-4 w-1/2 mx-auto'>
        <div className='relative flex-1 overflow-hidden h-full aspect-square'>
          <ProfileImage image='/deer.svg' />
        </div>
        <div className='relative flex-1 overflow-hidden h-full aspect-square'>
          <ProfileImage image='/elephant.svg' />
        </div>
        <div className='relative flex-1 overflow-hidden h-full aspect-square'>
          <ProfileImage image='/animals.svg' />
        </div>
      </div>
    </>
  );
}

export default FlexImages;
