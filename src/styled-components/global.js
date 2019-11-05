import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

import fonts from '../fonts';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  ${normalize()};

  html,
  body,
  #root {
    font-family: ${theme.fonts.family};
  }

  html {
    box-sizing: border-box;
    height: 100%;
    font-size: 62.5%;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 100%;
    font-size: 1.6rem;
    font-kerning: normal;
    color: ${theme.colors.black};
    background-color: ${theme.colors.bg};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -moz-font-feature-settings: "kern", "liga", "clig", "calt";
    -ms-font-feature-settings: "kern", "liga", "clig", "calt";
    -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
    font-feature-settings: "kern", "liga", "clig", "calt";
  }

  b {
    font-family: ${theme.fonts.family};
    font-weight: ${theme.fonts.weight.bold};
  }

  small {
    font-size: ${theme.fontSize.regular};
  }

  a {
    font-family: ${theme.fonts.family};
    color: ${theme.colors.purple};
    text-decoration: none;
    transition: ${theme.transition};
    -webkit-text-decoration-skip: objects;

    &:focus,
    &:hover {
      transition: ${theme.transition};
    }
  }

  h1 {
    font-family: ${theme.fonts.family};
    font-weight: ${theme.fonts.weight.bold};
    font-size: ${theme.fontSize.extraLarge};
  }

  button {
    font-family: ${theme.fonts.family};
    font-weight: ${theme.fonts.weight.medium};
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  img {
    border-style: none;
  }

  video {
    width: 100%;
  }

  hr {
    margin: 0;
    width: 100%;
    height: 0.1rem;
    border: none;
    background-color: #fff;
  }

  @font-face {
    font-family: ${theme.fonts.family};
    font-style: normal;
    font-weight: ${theme.fonts.weight.regular};
    font-display: swap;
    src: url('${fonts.RobotoRegularWoff2}') format('woff2'),
         url('${fonts.RobotoRegularWoff}') format('woff');
  }
  @font-face {
    font-family: ${theme.fonts.family};
    font-style: normal;
    font-weight: ${theme.fonts.weight.medium};
    font-display: swap;
    src: url('${fonts.RobotoMediumWoff2}') format('woff2'),
         url('${fonts.RobotoMediumWoff}') format('woff');
  }
  @font-face {
    font-family: ${theme.fonts.family};
    font-style: normal;
    font-weight: ${theme.fonts.weight.bold};
    font-display: swap;
    src: url('${fonts.RobotoBoldWoff2}') format('woff2'),
         url('${fonts.RobotoBoldWoff}') format('woff');
  }
`;

export { GlobalStyle };
