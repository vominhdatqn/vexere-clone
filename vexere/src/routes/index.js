import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import Splash from 'modules/splash';
import Home from 'modules/main';
import { selectToken } from 'helpers/select';
import StackDrawer from './stack-drawer';
import StackAuth from './stack-auth';
import Profile from 'modules/profile';
import Notifications from 'modules/notifications';
// const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const AppNavigation = ({ navigation }) => {
  const token = useSelector(selectToken);
  const [isLoading, setLoading] = React.useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);
  if (isLoading) {
    return <Splash />;
  }
  return (
    <Stack.Navigator
      headerMode="none"
      animation="fade"
      initialRouteName="StackAuth"
    >
      {token === null ? (
        <Stack.Screen name="StackAuth" component={StackAuth} />
      ) : (
        <>
          <Stack.Screen name="StackDrawer" component={StackDrawer} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Notifications" component={Notifications} />
        </>
      )}
    </Stack.Navigator>
  );
};
export default AppNavigation;
