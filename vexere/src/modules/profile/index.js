import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Avatar, theme, styles, Text } from 'shared';
import { useSelector, useDispatch } from 'react-redux';
import { selectAuth } from 'helpers/select';
import { scale } from 'react-native-size-matters';
import { Layout, HeaderBar } from '../../conponents';
const Profile = ({ params }) => {
  const dispatch = useDispatch();
  const auth = useSelector(selectAuth);
  const { avatar, name, jobTitle } = auth.login.profile;
  const logout = () => {
    dispatch({ type: 'LOG_OUT' });
  };
  return (
    <Layout>
      <HeaderBar title="Trang thông tin" />
      <View style={[styles.centerRow]}>
        <TouchableOpacity
          onPress={logout}
          style={[styles.row, styles.centerRow, { marginVertical: scale(24) }]}
        >
          <Avatar uri={avatar} size="medium" />
          <View style={[styles.absolute, { right: scale(-95) }]}>
            <Text bold primary style={{ width: scale(90) }}>
              {jobTitle}
            </Text>
          </View>
        </TouchableOpacity>

        <Text bold black>
          {name}
        </Text>
        <Text bold primary>
          {jobTitle}
        </Text>
      </View>
    </Layout>
  );
};

export default Profile;
