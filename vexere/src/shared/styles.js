import { StyleSheet } from 'react-native';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import theme from './theme';
const { measure, palette } = theme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.white,
  },
  flex: {
    flex: 1,
  },
  marginHorizontal: {
    marginHorizontal: scale(measure.marginHorizontal),
  },
  cusStyleDots: {
    height: verticalScale(12),
    width: verticalScale(12),
    marginBottom: verticalScale(35),
  },
  // child: {
  //   height: hp('100%'),
  //   width: wp('100%'),
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  end: {
    justifyContent: 'flex-end',
  },
  around: {
    justifyContent: 'space-around',
  },
  between: {
    justifyContent: 'space-between',
  },
  rowEnd: {
    alignItems: 'flex-end',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerRow: {
    alignItems: 'center',
  },
  centerVertical: {
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  textCenter: {
    textAlign: 'center',
  },
  fontSize: {
    fontSize: moderateScale(measure.font.medium),
  },
  cusButton: {
    borderRadius: moderateScale(8),
    height: moderateScale(48),
    marginTop: moderateScale(17),
    marginBottom: moderateScale(24),
  },
  wrapShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: 'white',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: 'white',
  },
  cusText: {
    color: 'white',
    fontSize: moderateScale(16),
    fontWeight: 'bold',
  },
  absolute: {
    position: 'absolute',
  },
  centerAbsolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  fullOption: {
    width: '100%',
    height: '100%',
  },
  modal: {
    backgroundColor: palette.white,
    borderRadius: 4,
  },
  borderSolid: {
    borderWidth: 1,
    borderColor: palette.borderFilter,
    borderRadius: measure.borderRadius.tiny,
  },
  triangle: {
    position: 'absolute',
    right: -scale(8),
    top: -scale(8),
    overflow: 'hidden',
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: scale(8),
    borderLeftWidth: scale(8),
    borderRightWidth: scale(8),
    borderLeftColor: '#007bff',
    borderTopColor: '#007bff',
    borderRightColor: 'transparent',

    justifyContent: 'center',
    alignContent: 'center',
  },
  triangleVip: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 68,
    borderLeftWidth: scale(60),
    borderTopEndRadius: scale(measure.borderRadius.tiny),
    borderLeftColor: palette.orange,
    borderTopColor: palette.orange,
    borderRightColor: 'transparent',
  },
  border: {
    borderWidth: 0.5,
    marginVertical: scale(14),
    borderColor: theme.palette.borderGray,
  },
  buttonCircle: {
    height: scale(44),
    width: scale(44),
    borderRadius: scale(44) / 2,
  },
  shadowFooter: {
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
    height: verticalScale(68),
    backgroundColor: palette.white,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
export default styles;
