import {keyframes} from 'styled-components/macro';

export const fadeIn= keyframes`
    0%{opacity: 0;}
    100%{opacity: 1;}
  `;

export const fadeOut= keyframes`
0%{opacity: 1;}
100%{opacity: 0;}
`;


export const expand= keyframes`
  0% {
    transform: translateX(1400px);
  }
  100% {
    transform: translateX(0px)
  }
`;

export const scroll= keyframes`
    0%   {left: 500px;}
    100% {left: -950px;}
  `;

export const zoomOut = keyframes`
    0%{
      transform: scale(2)
    }
    10%{
      transform: scale(1.9)
    }
    20%{
      transform: scale(1.8)
    }
    30%{
      transform: scale(1.7)
    }
    40%{
      transform: scale(1.6)
    }
    50%{
      transform: scale(1.5)
    }
    60%{
      transform: scale(1.4)
    }
    70%{
      transform: scale(1.3)
    }
    80%{
      transform: scale(1.2)
    }
    90%{
      transform: scale(1.1)
    }
    100%{
      transform: scale(1)
    }
`;

export const growLeft = keyframes`
    from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
`;

export const fadeInRigth = keyframes`
     from {
    opacity: 0;
    transform: translateX(-15px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

