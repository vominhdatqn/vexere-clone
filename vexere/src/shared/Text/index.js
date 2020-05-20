import React, { useState, useEffect } from 'react';
import { Text as RText, StyleSheet } from 'react-native';
import { moderateScale, scale } from 'react-native-size-matters';
import theme from '../theme';

const styles = StyleSheet.create({
  textBaseStyles: {
    fontSize: scale(14),
    color: '#6f6f6f',
    lineHeight: scale(theme.measure.lineHeight.normal),
  },
  fontMedium: {
    fontSize: scale(theme.measure.font.medium),
  },
  fontMax: {
    fontSize: scale(theme.measure.font.max),
  },
  fontMin: {
    fontSize: scale(theme.measure.font.min),
  },
  fontNormal: {
    fontSize: scale(theme.measure.font.normal),
  },
  fontLarge: {
    fontSize: scale(theme.measure.font.large),
  },
  fontMaxOption: {
    fontSize: scale(theme.measure.font.maxOption),
  },
});

const Text = ({
  thin,
  regular,
  medium,
  bold,
  yellow,
  linearPurple,
  disabled,
  orange,
  success,
  secondary,
  primary,
  white,
  dark,
  black,
  original,
  grey,
  linearDark,
  error,
  italic,
  green,
  textAlign,
  style,
  children,
  fontSize,
  lineHeight,
  textDarkGray,
  ...other
}) => {
  useEffect(() => {
    setPropBold(bold);
    setPropSecondary(secondary);
  }, [bold, secondary]);
  const [propBold, setPropBold] = useState(bold);
  const [propSecondary, setPropSecondary] = useState(secondary);
  let fontWeight = '400';
  if (thin) {
    fontWeight = '300';
  }
  if (regular) {
    fontWeight = '400';
  }
  if (medium) {
    fontWeight = '500';
  }
  if (propBold) {
    fontWeight = 'bold';
  }
  const textBaseStyles = [styles.textBaseStyles];
  switch (fontSize) {
    case 'min':
      textBaseStyles.push(styles.fontMin);
      break;
    case 'normal':
      textBaseStyles.push(styles.fontNormal);
      break;
    case 'medium':
      textBaseStyles.push(styles.fontMedium);
      break;
    case 'max':
      textBaseStyles.push(styles.fontMax);
      break;
    case 'maxOption':
      textBaseStyles.push(styles.fontMaxOption);
      break;

    case 'large':
      textBaseStyles.push(styles.fontLarge);
      break;
    default:
      textBaseStyles.push(styles.fontNormal);
  }
  let color = theme.palette.gray;
  if (disabled) {
    color = '#cacaca';
  }

  if (linearPurple) {
    color = theme.palette.linearPurple;
  }
  if (yellow) {
    color = 'yellow';
  }
  if (green) {
    color = theme.palette.textGreen;
  }
  if (textDarkGray) {
    color = theme.palette.textDarkGray;
  }
  if (black) {
    color = theme.palette.black;
  }
  if (linearDark) {
    color = theme.palette.dark;
  }
  if (original) {
    color = theme.palette.original;
  }
  if (propSecondary) {
    color = theme.palette.secondary;
  }
  if (primary) {
    color = theme.palette.primary;
  }
  if (orange) {
    color = '#ffc107';
  }
  if (white) {
    color = theme.palette.white;
  }
  if (success) {
    color = theme.palette.green;
  }
  if (dark) {
    color = theme.palette.darkGray;
  }
  if (error) {
    color = theme.palette.error;
  }

  return (
    <RText
      allowFontScaling={false}
      style={[
        textBaseStyles,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          fontFamily: 'System',
          fontStyle: italic ? 'italic' : 'normal',
          fontWeight,
          lineHeight,
          textAlign: textAlign || 'left',
          color,
        },
        style,
      ]}
      {...other}
    >
      {children}
    </RText>
  );
};

Text.defaultProps = {
  fontWeight: '500',
  regular: false,
  thin: false,
  medium: false,
  bold: false,
  black: false,
  italic: false,
  tips: false,
};

export default Text;
