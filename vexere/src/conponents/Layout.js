import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { styles } from 'shared';

const Layout = ({ children, cusStyles }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={[cusStyles, styles.container]}>
        {children}
      </SafeAreaView>
    </>
  );
};

export default Layout;
