export const palette = {
  container: '#f8f8f8',
  border: 'rgba(111, 111, 111, 0.2)',
  borderGray: '#7c8aa2',
  brightGray: '#f7f9fa',
  green: '#90d355',
  darkGray: '#4a4a4a',
  linearGray: '#4b4b4b',
  linearDark: '#b3b3b3',
  error: '#f05666',
  textGray: '#828296',
  textDarkGray: '#444c59',
  black: '#30333a',
  grizzle: '#cacaca',
  gray: '#6f6f6f',
  original: '#3b4349',
  orange: '#e6b04d',
  linearOrange: '#f0a756',
  grey: '#c0c0c0',
  dark: '#838383',
  lightGray: '#d3d8e4',
  primary: '#01579b',
  purple: '#2b3857',
  secondary: '#307ff0',
  borderFilter: 'rgba(74, 74, 74, 0.1)',
  borderWidth: 'rgba(74, 74, 74, 0.2)',
  processBar: 'rgba(48, 51, 58, 0.1)',
  shadow: 'rgba(101, 150, 255, 0.19)',
  graySecondary: 'rgba(115, 181, 251, 0.9)',
  white: '#fff',
  success: 'rgba(114,197,17, 0.1)',
  textGreen: '#72c511',
  borderButton: 'rgba(74, 74, 74, 0.2)',
  shadowWhite: 'rgba(255, 255, 255, 0)',
  shadowMenu: 'rgba(247, 247, 247, 0.5)',
  borderShadow: 'rgba(255, 255, 255, 0.24)',
  linearPrimary: '#ff5722',
  lightSecondary: '#ff9800',
  linearBlue: '#008fe5',
  linearPurple: '#57677f',
  lineargradient: ['#d2b479', '#bf9540', '#CD8F14'],
};

export const measure = {
  avatar: {
    large: 140,
    full: 80,
    medium: 60,
    near_medium: 48,
    small: 40,
    smallest: 30,
    dots: 12,
  },
  font: {
    min: 12,
    normal: 14,
    medium: 16,
    large: 24,
    full: 32,
    max: 20,
    maxOption: 40,
  },
  borderRadius: {
    button: 50,
    tiny: 8,
  },
  lineHeight: {
    normal: 20,
    large: 24,
  },
  cardImage: {
    small: {
      height: 84,
      width: 116,
    },
    normal: {
      height: 66,
      width: 120,
    },
  },
  image: 180,
  icon: {
    medium: 30,
    normal: 20,
    small: 16,
  },
  wrapIcon: {
    normal: 40,
  },
  padding: {
    vertical: 10,
  },
  marginHorizontal: 18,
  gutter: 15,
  gutter2x: 30,
  headerBarHeight: 40,
  tabBarHeight: 60,
};

export const commonStyles = {
  tabPage: {
    flex: 1,
    backgroundColor: palette.white,
    paddingBottom: measure.tabBarHeight,
  },
};

const theme = {
  commonStyles,
  measure,
  palette,
};

export default theme;
