import * as React from 'react';

import firebase from 'react-native-firebase';
import type { Notification, NotificationOpen } from 'react-native-firebase';

class FCMService {
  register = (onRegister, onNotification, onOpenNotification) => {
    this.checkPermission(onRegister);
    this.createNotificationListeners(
      onRegister,
      onNotification,
      onOpenNotification
    );
  };
  checkPermission = onRegister => {
    firebase
      .messaging()
      .hasPermission()
      .then(enabled => {
        if (enabled) {
          //User use permission
          this.getToken(onRegister);
        } else {
          //User doesn't have permission
          this.requestPermission(onRegister);
        }
      })
      .catch(error => {
        console.log('Permission rejected', error);
      });
  };
  getToken = onRegister => {
    firebase
      .messaging()
      .getToken()
      .then(fcmToken => {
        if (fcmToken) {
          onRegister(fcmToken);
        } else {
          console.log('User does not have a device token');
        }
      })
      .catch(error => {
        console.log('Get token rejected', error);
      });
  };
  requestPermission = onRegister => {
    firebase
      .messaging()
      .requestPermission()
      .then(() => {
        this.getToken(onRegister);
      })
      .catch(error => {
        console.log('Request Permission rejected', error);
      });
  };
  deleteToken = () => {
    firebase
      .messaging()
      .deleteToken()
      .catch(error => {
        console.log('Delete token error', error);
      });
  };
  createNotificationListeners = (
    onRegister,
    onNotification,
    onOpenNotification
  ) => {
    // triggered when a particular notification has been received in foreground
    this.notificationListener = firebase
      .notifications()
      .onNotification((notification: Notification) => {
        onNotification(notification);
      });
    // if your app is in background, you can listen for when a notification is clicked // tapped// opened as follows
    this.notificationOpenedListener = firebase
      .notifications()
      .onNotificationOpened((notificationOpen: NotificationOpen) => {
        // onOpenNotification(notificationOpen)
        if (notificationOpen) {
          const notification: Notification = notificationOpen.notification;
          onOpenNotification(notification);
          this.removeDeliveredNotification(notification);
        }
      });
    // if your app is closed , you can check if was opened by a notification
    // being clicked /tapped/ opened as follows
    firebase
      .notifications()
      .getInitialNotification()
      .then(notificationOpen => {
        if (notificationOpen) {
          const notification: Notification = notificationOpen.notification;
          onOpenNotification(notification);
          this.removeDeliveredNotification(notification);
        }
      });
    // triggered for data only payload in foreground
    this.messageListener = firebase.messaging().onMessage(message => {
      onNotification(message);
    });
    // triggered when have new token
    this.onTokenRefreshListener = firebase
      .messaging()
      .onTokenRefresh(fcmToken => {
        console.log('New token refresh', fcmToken);
        onRegister(fcmToken);
      });
  };
  unRegister = () => {
    this.notificationListener();
    this.notificationOpenedListener();
    this.messageListener();
    this.onTokenRefreshListener();
  };
  buildChannel = object => {
    return new firebase.notifications.Android.Channel(
      object.channelId,
      object.channelName,
      firebase.notifications.Android.Importance.High
    ).setDescription(object.channelDes);
  };
  buildNotification = object => {
    // For Android
    firebase.notifications().android.createChannel(object.channel);

    return (
      new firebase.notifications.Notification()
        .setSound(object.sound)
        .setNotificationId(object.dataId)
        .setTitle(object.title)
        .setBody(object.content)
        .setData(object.data)
        //For Android
        .android.setChannelId(object.channel.channelId)
        .android.setLargeIcon(object.largeIcon) // create this icon in Android Studio (app/res/mipmap)
        .android.setSmallIcon(object.smallIcon) // create this icon Android Studio (app/res/drawable)
        .android.setColor(object.colorBgIcon)
        .android.setPriority(firebase.notifications.Android.Priority.High)
        .android.setVibrate(object.vibrate)
    );
    // .android.setAutoCancel(true) // Auto cancel after receive notification
  };
  scheduleNotification = (notification, days, minutes) => {
    const date = new Date();
    if (days) {
      date.setDate(date.getDate() + days);
    }
    if (minutes) {
      date.setMinutes(date.getMinutes() + minutes);
    }
    firebase
      .notifications()
      .scheduleNotification(notification, { fireDate: date.getTime() });
  };
  displayNotification = notification => {
    firebase
      .notifications()
      .displayNotification(notification)
      .catch(error => {
        console.log('Display notification error: ', error);
      });
  };
  removeDeliveredNotification = notification => {
    firebase
      .notifications()
      .removeDeliveredNotification(notification.notificationId);
  };
}
export const fcmService = new FCMService();
