import React from 'react';

type Props = {
  children?: React.ReactNode;
};

function GlassCard({ children }: Props) {
  return (
    <div className='card w-96 backdrop-blur-[2px] bg-white/5'>
      <div className='card-body'>
        <h2 className='card-title'>Life hack</h2>
        <p>How to park your car at your garage?</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Learn now!</button>
        </div>
      </div>
      {children}
    </div>
  );
}

export default GlassCard;
