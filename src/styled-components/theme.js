import * as Enum from '../constants/enum';

export default {
  reflexer: {
    gridFluid: '2rem',
    rowGutter: '-0.5rem',
    colGutter: '0.5rem',
    column: 12,
    size: {
      xxl: 85,
      xl: 75,
      lg: 64,
      md: 48,
      sm: 30,
      xs: 0,
    },
  },

  fonts: {
    family: 'Roboto',
    weight: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
    style: {
      normal: 'normal',
      italic: 'italic',
      oblique: 'oblique',
      inherit: 'inherit',
    },
  },

  fontSize: {
    extraSmall: '0.9rem',
    small: '1.2rem',
    regular: '1.4rem',
    default: '1.6rem',
    medium: '1.8rem',
    large: '2.2rem',
    largeX: '2.4rem',
    largeXX: '2.8rem',
    max: '3.6rem',
  },

  colors: {
    transparent: 'transparent',
    white: '#fff',
    black: '#000',
    dark: '#121212',
    gray: '#bfbfbf',
    tabulatorGray: '#ebebeb',
    darkGray: '#d6d6d6',
    lightGray: '#fafafa',
    bg: '#202225',
    red: '#ff004d',
    blue: '#0060a0',
    lightBlue: '#008fff',
    green: '#00d09e',
    purple: '#914eff',
    textColor: '#262626',
    opacityBorder: '#1f1f1f',
  },

  container: {
    maxWidth: '128rem',
    min: '62rem',
  },

  letterSpacing: {
    extraSmall: '-0.075rem',
    small: '-0.05rem',
    min: '0.05rem',
  },

  lineHeight: {
    extraSmall: 1,
    smallerX: 1.15,
    smaller: 1.25,
    lowSmall: 1.3,
    small: 1.5,
    regular: 2,
    medium: 2.5,
    large: 3,
    extraLarge: 3.5,
  },

  border: {
    color: '#e6e6e6',
    radius: '0.4rem',
    cardRadius: '0.6rem',
    vendorList: '0.3rem solid white',
    round: '50%',
    mainRadius: '0.8rem',
    input: '0.2rem solid',
    mainBoxShadow: '0 0 4.8rem 1rem rgba(0,0,0,0.08)',
    colorMain: '#d9d9d9',
  },

  padding: {
    paddingContainer: '0 3rem',
    paddingInput: '3.1rem 0 1.2rem',
    paddingInputMinimal: '1.2rem',
    paddingInputSelect: '3.1rem 0 1.2rem',
    paddingCard: '2rem 3rem',
    paddingButton: '1.8rem 2rem 1.7rem',
  },

  opacity: {
    default: 1,
    text09: 0.9,
    text08: 0.8,
    text07: 0.7,
    text06: 0.6,
    text05: 0.5,
    text04: 0.4,
    text03: 0.3,
    text02: 0.2,
    text01: 0.1,
    invisible: 0,
  },

  transitionMin: '0.2s',
  transition: '0.3s',
  transitionSmall: '0.6s',
  transitionExtraSmall: '0.8s',

  size: Enum.mediaSize,

  select: {
    outer: '25rem',
    menu: '24rem',
  },

  zIndex: {
    modal: 6,
    modalContainer: 5,
    overlay: 4,
    navigation: 3,
    preloader: 2,
    minimal: 1,
  },
};
