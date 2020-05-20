import React from 'react';
import { Layout, HeaderBar } from '../../conponents';
import ListNotification from './components/ListNotification';

const Notifications = ({ params }) => {
  return (
    <Layout>
      <HeaderBar title="Thông báo" />
      <ListNotification />
    </Layout>
  );
};

export default Notifications;
