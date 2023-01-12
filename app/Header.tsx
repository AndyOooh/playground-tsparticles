import Link from 'next/link';
import React from 'react';

type Props = {};

function Header({}: Props) {
  return (
    <header className='header'>
      <div className='navbar bg-base-100'>
        <div className='flex-1'>
          <Link href={'/'} className='btn btn-ghost normal-case text-xl'>daisyUI</Link>
        </div>
        <div className='flex-none'>
          <ul className='menu menu-horizontal px-1'>
            <li>
              <Link href={'/flex-images'}>Flex-Images</Link>
            </li>
            <li>
              <Link href={'/bg-mask'}>Bg-Mask</Link>
            </li>
            <li>
              <Link href={'/canvas'}>Canvas</Link>
            </li>
            <li>
              <Link href={'/deer'}>Deer</Link>
            </li>
            <li>
              <Link href={'/my-poly-mask'}>MyPolyMask</Link>
            </li>
            <li>
              <Link href={'/svgs'}>SVGs</Link>
            </li>
            <li>
              <Link href={'/multi-poly'}>Multi-poly</Link>
            </li>
            <li>
              <Link href={'/parallax'}>Parallax</Link>
            </li>
            <li>
              <Link href={'/svg-box'}>SvgBox</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
