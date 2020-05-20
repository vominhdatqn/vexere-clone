import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { moderateScale, scale } from 'react-native-size-matters';
import theme from '../theme';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  root: {
    height: moderateScale(48),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: moderateScale(48),
  },
  fullWidth: {
    width: '100%',
  },
  text: {
    fontSize: scale(theme.measure.font.medium),
    color: '#fff',
    fontWeight: '500',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textXs: {
    fontSize: scale(theme.measure.font.medium),
  },
  textSm: {
    fontSize: 11,
  },
  white: {
    backgroundColor: '#ffffff',
  },

  linearOrange: {
    backgroundColor: theme.palette.linearOrange,
  },
  graySecondary: {
    backgroundColor: theme.palette.graySecondary,
  },
  orange: {
    backgroundColor: theme.palette.orange,
  },
  primary: {
    backgroundColor: theme.palette.primary,
  },
  secondary: {
    backgroundColor: theme.palette.secondary,
  },
  dark: {
    // backgroundColor: '#6f6f6f',
    backgroundColor: '#cd8f14',
    // backgroundColor: theme.palette.black,
  },
  gray: {
    backgroundColor: '#f7f7f7',
  },
  error: {
    backgroundColor: '#f05666',
  },
  success: {
    backgroundColor: '#bfda8d',
  },
  xs: {
    height: 22,
    width: '100%', // defaultTheme.button.xs.mobile.minWidth,
  },
  sm: {
    height: 32,
    width: '100%', // defaultTheme.button.sm.mobile.minWidth,
  },
});

const Button = ({
  scale,
  variant,
  outline,
  fullWidth,
  children,
  cusStyle,
  textStyle: textStyleProp,
  ...other
}) => {
  const buttonStyles = [styles.root];
  const textStyles = [styles.text];

  if (fullWidth) {
    buttonStyles.push(styles.fullWidth);
  }

  switch (variant) {
    case 'primary':
      buttonStyles.push(styles.primary);
      break;
    case 'white':
      buttonStyles.push(styles.white);
      break;
    case 'linearOrange':
      buttonStyles.push(styles.linearOrange);
      break;

    case 'graySecondary':
      buttonStyles.push(styles.graySecondary);
      break;
    case 'orange':
      buttonStyles.push(styles.orange);
      break;
    case 'secondary':
      buttonStyles.push(styles.secondary);
      break;
    case 'dark':
      buttonStyles.push(styles.dark);
      break;
    case 'gray':
      buttonStyles.push(styles.gray);
      break;
    case 'error':
      buttonStyles.push(styles.error);
      break;
    case 'success':
      buttonStyles.push(styles.success);
      break;
    default:
      buttonStyles.push(styles.secondary);
  }

  switch (scale) {
    case 'xs':
      // buttonStyles.push(styles.xs);
      textStyles.push(styles.textXs);
      break;
    case 'sm':
      buttonStyles.push(styles.sm);
      textStyles.push(styles.textSm);
      break;
    default:
  }

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[buttonStyles, cusStyle]}
      {...other}
    >
      {typeof children === 'function' ? (
        children({ textStyles })
      ) : (
        <Text style={[textStyles, textStyleProp]}>{children}</Text>
      )}
    </TouchableOpacity>
  );
};

Button.propTypes = {
  /**
   * One of 'small', 'normal', 'big'
   */
  scale: PropTypes.string,
  /**
   * Must be one of 'primary', 'secondary', 'dark', 'gray', 'error', 'success'
   */
  variant: PropTypes.string,
  outline: PropTypes.bool,
};
Button.defaultProps = {
  scale: 'normal',
  variant: 'secondary',
  outline: false,
};

export default Button;
