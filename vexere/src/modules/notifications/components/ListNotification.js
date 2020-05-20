import React from 'react';
import { View, FlatList } from 'react-native';
import { selectAuth } from 'helpers/select';
import { useSelector } from 'react-redux';
import { scale } from 'react-native-size-matters';
import { Text, theme, styles } from 'shared';
import moment from 'moment';
import localization from 'moment/locale/vi';

const ListNotification = ({ params }) => {
  const auth = useSelector(selectAuth);
  const { notifications } = auth.login;

  const handleKeyExtractor = (item, index) =>
    `notification-key-${index.toString()}`;
  return (
    <FlatList
      scrollEventThrottle={16}
      decelerationRate="fast"
      data={notifications}
      renderItem={({ item }) => (
        <View style={[styles.marginHorizontal, { paddingVertical: scale(20) }]}>
          <Text>{item.content}</Text>
          <Text style={{ marginTop: scale(8) }}>
            {moment(item.createAt)
              .locale('vi', localization)
              .fromNow(true)}{' '}
            {''}
            trước
          </Text>
        </View>
      )}
      keyExtractor={handleKeyExtractor}
    />
  );
};

export default ListNotification;
