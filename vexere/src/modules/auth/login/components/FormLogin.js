import React, { useRef, useEffect, useState } from 'react';
import { View, TouchableOpacity, Alert, Platform } from 'react-native';
import { scale } from 'react-native-size-matters';
import { reduxForm } from 'redux-form';
import * as validation from 'constants/validation';
import { Text, FormInput, Button, styles } from 'shared';
import { useDispatch } from 'react-redux';
import { app } from 'config';
import { fcmService } from '../../../../fcmFirebase';
import { actionLogin } from '../../../../store/actions/auth/login';

const FormLogin = ({ handleSubmit }) => {
  const dispatch = useDispatch();
  const passwordRef = useRef(null);

  const [fcmTokenFB, setFCM] = useState();
  useEffect(() => {
    fcmService.register(onRegister, onNotification, onOpenNotification);
  }, []);

  const onRegister = token => {
    setFCM(token);
    console.log('onRegister onRegister', token);
  };
  const onNotification = notify => {
    const { title, body } = notify.data || {};

    const channelObj = {
      channelId: 'SampleChannelID',
      channelName: 'SampleChannelName',
      ChannelDes: 'SampleChannelDes',
    };
    const channel = fcmService.buildChannel(channelObj);
    const buildNotify = {
      dataId:
        Platform.OS === 'android' ? notify._notificationId : notify._messageId,
      title: Platform.OS === 'android' ? notify._title : title,
      content: Platform.OS === 'android' ? notify._body : body,
      sound: 'default',
      channel: channel,
      data: {},
      colorBgIcon: '#1A243B',
      largeIcon: 'ic_launcher',
      smallIcon: 'ic_stat_ic_notification',
      vibrate: true,
    };

    const notification = fcmService.buildNotification(buildNotify);

    fcmService.displayNotification(notification);
  };
  const onOpenNotification = notify => {
    alert('Open Notification' + notify._body);
  };
  const goToForgot = () => {
    // navigate('ForgotEmail');
  };
  const handleFocusPassword = () => {
    passwordRef.current.focus();
  };
  const handleLogin = () => {
    dispatch(actionLogin(fcmTokenFB));
  };

  return (
    <View style={{ marginTop: scale(23) }}>
      <FormInput
        onSubmitEditing={handleFocusPassword}
        validate={[validation.required, validation.isEmail]}
        returnKeyType="next"
        name="email"
        label="Email"
      />
      <FormInput
        actionRef={passwordRef}
        validate={[validation.required, validation.isPassword]}
        onSubmitEditing={handleSubmit(handleLogin)}
        secureTextEntry
        returnKeyType="done"
        name="password"
        label="Mật khẩu"
      />
      <TouchableOpacity onPress={goToForgot} activeOpacity={0.8}>
        <Text textAlign="right">Quên mật khẩu?</Text>
      </TouchableOpacity>

      <Button
        onPress={handleSubmit(handleLogin)}
        cusStyle={{ marginVertical: scale(24) }}
      >
        Đăng nhập
      </Button>
    </View>
  );
};

export default reduxForm({
  form: 'formLogin',
  initialValues: {
    email: '',
    password: '',
  },
})(FormLogin);
