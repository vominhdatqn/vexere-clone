import React from 'react';
import { View, StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';
import { Text } from 'shared';

const TitleAuth = ({ title }) => (
  <>
    <Text dark style={{ fontSize: scale(30) }}>
      {title}
    </Text>
    <View style={stylesContainer.title} />
  </>
);
const stylesContainer = StyleSheet.create({
  title: {
    paddingBottom: scale(10),
    borderBottomWidth: 3,
    width: scale(30),
  },
});
TitleAuth.defaultProps = {
  title: 'Login',
};
export default TitleAuth;
