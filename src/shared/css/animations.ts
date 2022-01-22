import { css, keyframes } from 'styled-components';

type PositionsOptions = 'left' | 'right' | 'bottom' | 'top';
type FacesOptions = 'bck' | 'fwt';

type DirectionsOptions = PositionsOptions | FacesOptions;

type Options = {
  delay?: number;
  duration?: number;
  timingFunction?: string;
};

const roll = keyframes`
  0% {
    transform: translateX(-800px) rotate(-540deg);
    opacity: 0;
  }
  100% {
    transform: translateX(0) rotate(0deg);
    opacity: 1;
  }
`;

const jello = keyframes`
  0% { 
    transform: scale3d(1, 1, 1);
  }
  30% { 
    transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    transform: scale3d(1, 1, 1);
  }
`;

const wobble = keyframes`
  0%,
  100% {
    transform: translateX(0%);
    transform-origin: 50% 50%;
  }
  15% {
    transform: translateX(-30px) rotate(-6deg);
  }
  30% {
    transform: translateX(15px) rotate(6deg);
  }
  45% {
    transform: translateX(-15px) rotate(-3.6deg);
  }
  60% {
    transform: translateX(9px) rotate(2.4deg);
  }
  75% {
    transform: translateX(-6px) rotate(-1.2deg);
  }
`;

const transform = {
  right: () => keyframes`
    0% {
      transform: translateX(-100px);
    }
    100% {
      transform: translateX(0);
    }
  `,
  left: () => keyframes`
    0% {
      transform: translateX(100px);
    }
    100% {
      transform: translateX(0);
    }
  `,
  top: () => keyframes`
    0% {
      transform: translateY(-100px);
    }
    100% {
      transform: translateY(0);
    }
  `,
  bottom: () => keyframes`
    0% {
      transform: translateY(100px);
    }
    100% {
      transform: translateY(0);
    }
  `,
};

const bounce = {
  right: () => keyframes`
    0% {
      transform: translateX(600px);
      animation-timing-function: ease-in;
      opacity: 0;
    }
    38% {
      transform: translateX(0);
      animation-timing-function: ease-out;
      opacity: 1;
    }
    55% {
      transform: translateX(68px);
      animation-timing-function: ease-in;
    }
    72% {
      transform: translateX(0);
      animation-timing-function: ease-out;
    }
    81% {
      transform: translateX(32px);
      animation-timing-function: ease-in;
    }
    90% {
      transform: translateX(0);
      animation-timing-function: ease-out;
    }
    95% {
      transform: translateX(8px);
      animation-timing-function: ease-in;
    }
    100% {
      transform: translateX(0);
      animation-timing-function: ease-out;
    }
  `,
  left: () => keyframes`
    0% {
      transform: translateX(-600px);
      animation-timing-function: ease-in;
      opacity: 0;
    }
    38% {
      transform: translateX(0);
      animation-timing-function: ease-out;
      opacity: 1;
    }
    55% {
      transform: translateX(-68px);
      animation-timing-function: ease-in;
    }
    72% {
      transform: translateX(0);
      animation-timing-function: ease-out;
    }
    81% {
      transform: translateX(-32px);
      animation-timing-function: ease-in;
    }
    90% {
      transform: translateX(0);
      animation-timing-function: ease-out;
    }
    95% {
      transform: translateX(-8px);
      animation-timing-function: ease-in;
    }
    100% {
      transform: translateX(0);
      animation-timing-function: ease-out;
    }
  `,
  top: () => keyframes`
    0% {
      transform: translateY(-500px);
      animation-timing-function: ease-in;
      opacity: 0;
    }
    38% {
      transform: translateY(0);
      animation-timing-function: ease-out;
      opacity: 1;
    }
    55% {
      transform: translateY(-65px);
      animation-timing-function: ease-in;
    }
    72% {
      transform: translateY(0);
      animation-timing-function: ease-out;
    }
    81% {
      transform: translateY(-28px);
      animation-timing-function: ease-in;
    }
    90% {
      transform: translateY(0);
      animation-timing-function: ease-out;
    }
    95% {
      transform: translateY(-8px);
      animation-timing-function: ease-in;
    }
    100% {
      transform: translateY(0);
      animation-timing-function: ease-out;
    }
  `,
  bottom: () => keyframes`
     0% {
      transform: translateY(500px);
      animation-timing-function: ease-in;
      opacity: 0;
    }
    38% {
      transform: translateY(0);
      animation-timing-function: ease-out;
      opacity: 1;
    }
    55% {
      transform: translateY(65px);
      animation-timing-function: ease-in;
    }
    72% {
      transform: translateY(0);
      animation-timing-function: ease-out;
    }
    81% {
      transform: translateY(28px);
      animation-timing-function: ease-in;
    }
    90% {
      transform: translateY(0);
      animation-timing-function: ease-out;
    }
    95% {
      transform: translateY(8px);
      animation-timing-function: ease-in;
    }
    100% {
      transform: translateY(0);
      animation-timing-function: ease-out;
    }
  `,
  fwt: () => keyframes`
    0% {
      transform: scale(0);
      animation-timing-function: ease-in;
      opacity: 0;
    }
    38% {
      transform: scale(1);
      animation-timing-function: ease-out;
      opacity: 1;
    }
    55% {
      transform: scale(0.7);
      animation-timing-function: ease-in;
    }
    72% {
      transform: scale(1);
      animation-timing-function: ease-out;
    }
    81% {
      transform: scale(0.84);
      animation-timing-function: ease-in;
    }
    90% {
      transform: scale(1);
      animation-timing-function: ease-out;
    }
    95% {
      transform: scale(0.95);
      animation-timing-function: ease-in;
    }
    100% {
      transform: scale(1);
      animation-timing-function: ease-out;
    }
  `,
  bck: () => keyframes`
    0% {
      transform: scale(7);
      animation-timing-function: ease-in;
      opacity: 0;
    }
    38% {
      transform: scale(1);
      animation-timing-function: ease-out;
      opacity: 1;
    }
    55% {
      transform: scale(1.5);
      animation-timing-function: ease-in;
    }
    72% {
      transform: scale(1);
      animation-timing-function: ease-out;
    }
    81% {
      transform: scale(1.24);
      animation-timing-function: ease-in;
    }
    90% {
      transform: scale(1);
      animation-timing-function: ease-out;
    }
    95% {
      transform: scale(1.04);
      animation-timing-function: ease-in;
    }
    100% {
      transform: scale(1);
      animation-timing-function: ease-out;
    }
  `,
};

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.99);
  }
  100% {
    transform: scale(1);
  }
  `;

const swing = {
  out: () => keyframes`
    0% {
      transform: rotateX(0deg);
      transform-origin: top;
      opacity: 1;
    }
    100% {
      transform: rotateX(-100deg);
      transform-origin: top;
      opacity: 0;
    }
  `,
  in: () => keyframes`
    0% {
      transform: rotateX(-100deg);
      transform-origin: top;
      opacity: 0;
    }
    100% {
      transform: rotateX(0);
      transform-origin: top;
      opacity: 1;
    }
  `,
};

export const animations = {
  slide: (
    direction: PositionsOptions,
    { delay, duration, timingFunction }: Options = {}
  ) => css`
    animation-name: ${transform[direction]()};
    animation-timing-function: ${timingFunction ||
    'cubic-bezier(0.25, 0.46, 0.45, 0.94)'};
    animation-delay: ${delay || ''};
    animation-duration: ${duration || '0.5s'};
    animation-fill-mode: both;
  `,
  bounce: (
    direction: DirectionsOptions,
    { delay, duration }: Options = {}
  ) => css`
    animation-name: ${bounce[direction]()};
    animation-delay: ${delay || ''};
    animation-duration: ${duration || '1.1s'};
    animation-fill-mode: both;
  `,
  jello: ({ delay, duration }: Options = {}) => css`
    animation-name: ${jello};
    animation-delay: ${delay || ''};
    animation-duration: ${duration || '1.1s'};
    animation-fill-mode: both;
  `,
  wobble: ({ delay, duration }: Options = {}) => css`
    animation-name: ${wobble};
    animation-delay: ${delay || ''};
    animation-duration: ${duration || '0.8s'};
    animation-fill-mode: both;
  `,
  roll: ({ delay, duration }: Options = {}) => css`
    animation-name: ${roll};
    animation-delay: ${delay || ''};
    animation-timing-function: ease-in-out;
    animation-duration: ${duration || '0.6s'};
    animation-fill-mode: both;
  `,
  pulse: ({ delay, duration }: Options = {}) => css`
    animation-name: ${pulse};
    animation-delay: ${delay || ''};
    animation-timing-function: ease-in-out;
    animation-duration: ${duration || '0.5s'};
    animation-fill-mode: both;
  `,
  swing: (direction: 'in' | 'out', { delay, duration }: Options = {}) => css`
    animation-name: ${swing[direction]()};
    animation-delay: ${delay || ''};
    animation-timing-function: cubic-bezier(0.6, -0.28, 0.735, 0.045);
    animation-duration: ${duration || '0.5s'};
    animation-fill-mode: both;
  `,
};
