import { keyframes } from 'styled-components';

export const TournamentsEffect = keyframes`
  from {
    opacity: 0;
    visibility: hidden;
    transform: scale(.5);
  }

  to {
    opacity: 1;
    visibility: visible;
    transform: scale(1);
  }
`;