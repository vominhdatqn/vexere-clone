import React from 'react';
import { Text, View } from 'react-native';
import { styles } from 'shared';
import { selectAuth } from 'helpers/select';
import { useSelector, useDispatch } from 'react-redux';
import { app } from 'config';
import { Layout, HeaderBar } from '../../conponents';

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const auth = useSelector(selectAuth);
  const { unReadNotifications, listUnRead } = auth.login;
  const showDrawer = () => {
    navigation.openDrawer();
  };
  const goToScreenNotification = () => {
    if (listUnRead.length > 0) {
      const promiseAll = listUnRead.map(
        e =>
          new Promise(async (resolve, reject) => {
            try {
              console.log('Document successfully updated!', e.messageId);
              app
                .firestore()
                .collection('notifications')
                .doc(`${e.messageId}`)
                .update({
                  read: true,
                })
                .then(function(docRef) {
                  console.log('Document written with ID: ', docRef.id);
                  resolve();
                })
                .catch(function(error) {
                  // reject(error);
                });
            } catch (error) {
              reject(error);
            }
          })
      );
      Promise.all(promiseAll);
      dispatch({
        type: 'UPDATE_COUNT_NOTIFICATION',
      });
    }
    navigation.navigate('Notifications');
  };
  return (
    <Layout style={[styles.flex, styles.center]}>
      <HeaderBar
        showNextTitle
        menu
        onPressMenu={showDrawer}
        edit
        count={unReadNotifications}
        onPressEdit={goToScreenNotification}
      />
      <Text>Home</Text>
    </Layout>
  );
};

export default Home;
