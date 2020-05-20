import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import { styles, Text } from 'shared';
import { verticalScale } from 'react-native-size-matters';
import FormLogin from './components/FormLogin';
import { useDispatch } from 'react-redux';
import { Layout, TitleAuth } from '../../../conponents';

const Login = ({ navigation }) => {
  const renderItem = () => (
    <>
      <TitleAuth title="Đăng nhập" />
      <FormLogin />
    </>
  );
  const handleKeyExtractor = item => `key-login-${item}`;
  const goToRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <Layout>
      <View style={styles.marginHorizontal}>
        <KeyboardAvoidingView behavior="padding">
          <FlatList
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
            decelerationRate={1}
            // style={{ height: hp('100%') }}
            ListFooterComponent={
              <View style={[styles.row, styles.centerVertical]}>
                <Text textAlign="center">Thành viên mới? </Text>
                <TouchableOpacity onPress={goToRegister}>
                  <Text bold secondary>
                    Đăng ký
                  </Text>
                </TouchableOpacity>
              </View>
            }
            ListHeaderComponent={
              <View
                style={[
                  styles.centerVertical,
                  {
                    height: verticalScale(45),
                  },
                ]}
              />
            }
            data={[1]}
            renderItem={renderItem}
            keyExtractor={handleKeyExtractor}
          />
        </KeyboardAvoidingView>
      </View>
    </Layout>
  );
};

export default Login;
