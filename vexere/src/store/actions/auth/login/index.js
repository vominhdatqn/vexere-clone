import * as LOGIN from 'store/action-types/auth/login';
import { getFormValues } from 'redux-form';
import AsyncStorage from '@react-native-community/async-storage';
import { app } from 'config';
import { navigate } from 'App';

const actionLoginBegin = () => ({
  type: LOGIN.API_LOGIN_EMAIL.PENDING,
});

const actionLoginSuccess = data => ({
  type: LOGIN.API_LOGIN_EMAIL.SUCCESS,
  payload: data,
});

const actionLoginError = err => ({
  type: LOGIN.API_LOGIN_EMAIL.ERROR,
  payload: err,
});
export const actionLogin = fcmTokenFB => async (dispatch, getState) => {
  dispatch(actionLoginBegin());
  try {
    const state = getState();
    const formValues = getFormValues('formLogin')(state);
    const { email, password } = formValues;

    app
      .firestore()
      .collection('users')
      .where('email', '==', email)
      .onSnapshot(snap => {
        snap.forEach(doc => {
          if (doc.data()) {
            app
              .firestore()
              .collection('users')
              .where('password', '==', password)
              .onSnapshot(snapUser => {
                snapUser.forEach(docUser => {
                  const {
                    tokenFCM,
                    email,
                    name,
                    jobTitle,
                    avatar,
                    id,
                  } = docUser.data();
                  AsyncStorage.setItem('tokenFCM', fcmTokenFB);

                  app
                    .firestore()
                    .collection('notifications')
                    .where('id', '==', id)
                    .get()
                    .then(function(querySnapshot) {
                      const userArr = [];
                      querySnapshot.forEach(function(docNotification) {
                        userArr.push(docNotification.data());
                      });
                      const unReadNotifications = userArr.filter(
                        e => e.unRead === true && e.read === false
                      );

                      dispatch({
                        type: 'GET_NOTIFICATION',
                        payload: {
                          notifications: userArr,
                          unReadNotifications: unReadNotifications.length,
                          listUnRead: unReadNotifications,
                        },
                      });
                    })
                    .catch(function(error) {
                      console.log('Error getting documents: ', error);
                    });
                  dispatch(
                    actionLoginSuccess({
                      accessToken: tokenFCM,
                      profile: {
                        email,
                        name,
                        jobTitle,
                        avatar: avatar ? avatar : '',
                      },
                    })
                  );
                });
              });
          }
        });
      });
  } catch (error) {
    dispatch(actionLoginError(error));
  }
};
