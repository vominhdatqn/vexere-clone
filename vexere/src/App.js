import React, { useEffect, Component } from 'react';
import { Text, View, Platform } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/es/integration/react';
import Routes from 'routes';

import { store, persister } from './store';
import { fcmService } from './fcmFirebase';

export function navigate(name, params) {
  navigationRef.current && navigationRef.current.navigate(name, params);
}
const navigationRef = React.createRef();

class App extends Component {
  componentDidMount() {
    fcmService.register(
      this.onRegister,
      this.onNotification,
      this.onOpenNotification
    );
  }
  onRegister = token => {
    console.log('Notification onRegister', token);
  };
  onNotification = notify => {
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
  onOpenNotification = notify => {
    alert('Open Notification' + notify._body);
  };
  componentWillUnmount() {
    this.onRegister();
    this.onNotification();
    this.onOpenNotification();
  }
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persister} loading={null}>
          <NavigationContainer ref={navigationRef}>
            <Routes />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    );
  }
}
export default App;
