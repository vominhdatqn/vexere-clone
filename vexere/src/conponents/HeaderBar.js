import React from 'react';
import { View, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { scale, moderateScale } from 'react-native-size-matters';
import { theme, Text, styles } from 'shared';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { measure, palette } = theme;
const { width } = Dimensions.get('window');
const HeaderBar = ({
  title,
  edit,
  menu,
  nextTitle,
  count,
  showNextTitle,
  onPressEdit,
  onPressMenu,
}) => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View
      style={[
        styles.row,
        styles.center,
        styles.wrapShadow,
        {
          backgroundColor: palette.primary,
          height: moderateScale(60),
        },
      ]}
    >
      <View style={[styles.row, styles.centerRow, { flex: 2 }]}>
        <TouchableOpacity onPress={onPressMenu}>
          {menu ? (
            <Icons
              style={{ marginLeft: scale(measure.marginHorizontal) }}
              name="menu"
              color={palette.white}
              size={moderateScale(measure.icon.medium)}
            />
          ) : (
            <TouchableOpacity onPress={goBack}>
              <Icons
                style={{ marginLeft: scale(measure.marginHorizontal) }}
                name="arrow-left"
                color={palette.white}
                size={moderateScale(measure.icon.medium)}
              />
            </TouchableOpacity>
          )}
        </TouchableOpacity>
        <View>
          <Text
            style={{ marginLeft: scale(measure.marginHorizontal) }}
            numberOfLines={1}
            white
            fontSize="medium"
          >
            {title}
            <Text bold secondary fontSize="medium">
              {showNextTitle && nextTitle}
            </Text>
          </Text>
        </View>
      </View>

      <View
        style={[
          styles.flex,
          styles.row,
          styles.centerRow,
          styles.between,
          { marginRight: scale(measure.marginHorizontal) },
        ]}
      >
        {edit && (
          <>
            <AntDesign
              name="message1"
              color={palette.white}
              size={scale(measure.icon.normal)}
            />
            <View>
              <MaterialIcons
                onPress={onPressEdit}
                name="notifications"
                color={palette.white}
                size={scale(measure.icon.normal) + 5}
              />

              {count !== 0 && (
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={onPressEdit}
                  style={[styles.absolute, styleContainer.dot, styles.center]}
                >
                  <Text white bold fontSize="min">
                    {count}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
            <Icons
              name="dots-vertical"
              color={palette.white}
              size={moderateScale(measure.icon.medium)}
            />
          </>
        )}
      </View>
    </View>
  );
};
const styleContainer = StyleSheet.create({
  dot: {
    height: scale(16),
    width: scale(16),
    borderRadius: scale(8),
    right: scale(-5),
    top: scale(-5),
    backgroundColor: theme.palette.error,
  },
});
HeaderBar.propTypes = {
  title: PropTypes.string,
  nextTitle: PropTypes.string,
  edit: PropTypes.bool,
  menu: PropTypes.bool,
  count: PropTypes.number,
  showNextTitle: PropTypes.bool,
  onPressEdit: PropTypes.func,
  onPressMenu: PropTypes.func,
};
HeaderBar.defaultProps = {
  title: 'Booking',
  nextTitle: '.com',
  count: 0,
  showNextTitle: false,
  edit: false,
  menu: false,
};
export default HeaderBar;
