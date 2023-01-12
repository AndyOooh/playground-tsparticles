import { ISourceOptions } from 'tsparticles-engine';
// import { PolygonMaskInlineArrangement, PolygonMaskType } from 'tsparticles-plugin-polygon-mask';

// import avatar from '../assets/svg/avatar.svg';

export const particlesOptions = {
  name: 'Polygon Mask',
  fullScreen: {
    enable: true,
    zIndex: -1, // 0 is default but this was configured from template
  },
  style: {
    position: 'absolute', // think abs is default
    backgroundColor: 'pink', // doesnt work, prob tro do with z-indexes
    padding: '1rem', //works 
    // height: '15rem',
    // width: '15rem',
  },
  interactivity: {
    events: {
      onClick: {
        enable: false,
        mode: 'push',
      },
      onDiv: {
        elementId: 'repulse-div',
        enable: false,
        mode: 'repulse',
      },
      onHover: {
        enable: true,
        mode: 'bubble',
        parallax: {
          enable: false,
          force: 2,
          smooth: 10,
        },
      },
    },
    modes: {
      bubble: {
        distance: 40,
        duration: 2,
        opacity: 8,
        size: 6,
      },
      connect: {
        distance: 80,
        links: {
          opacity: 0.5,
        },
        radius: 60,
      },
      grab: {
        distance: 400,
        links: {
          opacity: 1,
        },
      },
      push: {
        quantity: 4,
      },
      remove: {
        quantity: 2,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      slow: {
        active: false,
        radius: 0,
        factor: 1,
      },
    },
  },
  particles: {
    color: {
      value: '#ffffff',
    },
    links: {
      blink: false,
      color: '#ffffff',
      consent: false,
      distance: 30,
      enable: true,
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      outModes: 'bounce',
      speed: 1,
    },
    number: {
      limit: 0,
      value: 200,
    },
    opacity: {
      animation: {
        enable: true,
        speed: 2,
        sync: false,
      },
      value: {
        min: 0.05,
        max: 0.4,
      },
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: 1,
    },
  },
  polygon: {
    draw: {
      enable: true,
      lineColor: 'rgba(255,255,255,0.2)',
      lineWidth: 1,
    },
    enable: true,
    move: {
      radius: 20,
    },
    inline: {
      arrangement: 'equidistant',
    },
    scale: 1,
    type: 'inline',
    url: 'owl.svg',
    // url: 'deer.svg',
    // url: 'https://particles.js.org/images/smalldeer.svg',
    // url: 'animals2.svg',
    // url: 'deer2.svg',
    // url: 'cat.svg',
    // url: 'tiger.svg',
    // url: 'elephant.svg',
    // url: 'avatar.svg',
  },
  background: {
    // color: '#000000',
    // image: '',
    // position: '50% 50%',
    // repeat: 'no-repeat',
    // size: 'cover',
  },
} as ISourceOptions;
