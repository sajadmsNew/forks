import { rem } from '@utils//tools';

export const ESLPlay = {
  center: {
    maxWidth: rem(1128),
    innerSpace: `${rem(16)}`,
    width: `calc(100% - ${rem(32)})`,
  },
  colors: {
    background: '#ebecee',
    slots: ['#26ad5d', '#f4f5f7', '#28b662', '#e43726', '#6bff37', '#fdff0d']
  },
  fonts: {
    primary: '"Open Sans", sans-serif',
    colors: {
      slots: ['#333333', '#808080']
    },
  },
  breakpoints: {
    xxs: '350px',
    xs: '560px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1700px',
    xxxl: '2000px',
    xxxxl: '2300px',
  },
};
