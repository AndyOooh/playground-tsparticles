'use client';

import React, { useEffect, useRef } from 'react';
import SvgProfile from '../../assets/svg/SvgProfile';

type Props = {};

function Canvas({}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    //Our first draw
    if (!ctx) return;
    // ctx.fillStyle = '#F07AFF63';
    // ctx.fillStyle = `rgba(240, 122, 255, 0.39)`;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.moveTo(0, 0);
    ctx.lineTo(75, 75);
    ctx.stroke();
  }, []);

  return (
    <section className='flex flex-col justify-center items-center gap-8 border border-cyan-300'>
      <h1>Canvas</h1>
      <canvas
        id='myCanvas'
        ref={canvasRef}
        className='w-24 h-24 border-2 border-primary'
        height='150'
        width='150'>
        ALt text
      </canvas>
      <h1>New</h1>
      <div className='border border-cyan-300'>
        <SvgProfile />
      </div>
    </section>
  );
}

export default Canvas;
