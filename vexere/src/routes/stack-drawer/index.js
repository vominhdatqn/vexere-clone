import React, { useState } from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { scale } from 'react-native-size-matters';
import Animated, {
  Value,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import { styles, Text, theme, Avatar } from 'shared';
import { useSelector } from 'react-redux';
import { selectAuth } from 'helpers/select';
import { navigate } from 'App';
import Home from 'modules/main';
const Drawer = createDrawerNavigator();

const { palette, measure } = theme;
const contentStyle = StyleSheet.create({
  label: {
    color: palette.black,
    fontSize: scale(measure.font.normal),
  },
});
// const selectToken = state => state.auth.accessToken;
const DrawerContent = props => {
  const auth = useSelector(selectAuth);
  const { avatar, name, jobTitle } = auth.login.profile;
  return (
    <DrawerContentScrollView>
      <View style={[styles.flex]}>
        <View style={styles.flex}>
          <TouchableOpacity
            onPress={() => navigate('Profile')}
            style={[styles.marginHorizontal, styles.row, styles.centerRow]}
          >
            <Avatar uri={avatar} size="medium" />
            <View style={{ marginLeft: scale(8) }}>
              <Text bold black fontSize="min">
                {name}
              </Text>
              <Text
                bold
                primary
                fontSize="min"
                style={{ marginTop: scale(8), width: scale(150) }}
              >
                {jobTitle}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};
const StackDrawer = ({ navigation }) => {
  const [progress, setProgress] = useState(new Value(0));
  const scale = interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
    extrapolateRight: Extrapolate.Clamp,
  });
  const screenStyles = { transform: [{ scale }] };
  return (
    <Drawer.Navigator
      //   drawerPosition=""
      //   drawerType="slide"
      //   overlayColor="transparent"
      drawerContentOptions={{
        activeBackgroundColor: 'transparent',
      }}
      contentContainerStyle={styles.flex}
      sceneContainerStyle={{ backgroundColor: 'white' }}
      drawerContent={props => {
        setProgress(props.progress);
        return <DrawerContent {...props} />;
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
};
export default StackDrawer;
