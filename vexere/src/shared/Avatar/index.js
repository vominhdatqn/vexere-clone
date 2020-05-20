import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { scale } from 'react-native-size-matters';
import FastImage from 'react-native-fast-image';
import styles from '../styles';
import theme from '../theme';

const Avatar = ({ uri, size, online }) => (
  <View
    style={[
      styleContainer.container,
      {
        width: scale(theme.measure.avatar[size]),
        height: scale(theme.measure.avatar[size]),
        borderRadius: scale(theme.measure.avatar[size]) / 2,
      },
    ]}
  >
    <FastImage
      source={{
        uri,
        priority: FastImage.priority.normal,
      }}
      resizeMode={FastImage.resizeMode.cover}
      style={[
        styles.fullOption,
        {
          borderRadius: scale(theme.measure.avatar[size]) / 2,
        },
      ]}
    />
    {online && (
      <View style={[styles.absolute, styles.center, styleContainer.dot]}>
        <View
          style={{
            width: scale(12),
            backgroundColor: theme.palette.green,
            height: scale(12),
            borderRadius: scale(12 / 2),
          }}
        />
      </View>
    )}
  </View>
);

const styleContainer = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
  },
  dot: {
    right: 5,
    width: scale(16),
    backgroundColor: theme.palette.white,
    height: scale(16),
    borderRadius: scale(16 / 2),
  },
});

Avatar.propTypes = {
  uri: PropTypes.string,
  size: PropTypes.oneOf([
    'full',
    'large',
    'medium',
    'small',
    'near_medium',
    'smallest',
  ]).isRequired,
};
Avatar.defaultProps = {
  online: false,
};

export default Avatar;
