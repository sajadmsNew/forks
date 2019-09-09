import Head from 'next/head';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { FavIcon } from '@images';
import { GlobalStyle } from './GlobalStyle';
import { ESLPlay } from './Theme';
import { SVGSprite } from '@icons/sprite';

export const Layout = props => {
  const { children } = props;

  return (
    <ThemeProvider theme={ESLPlay}>
      <>
        <Head>
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#2d323c" />
          <link rel="shortcut icon" href={FavIcon} type="image/png" />
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap" rel="stylesheet" />
        </Head>
        <SVGSprite />
        <GlobalStyle />
        {children}
      </>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),
};
