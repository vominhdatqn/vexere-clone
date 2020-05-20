import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Login from 'modules/auth/login';
import Register from 'modules/auth/register';
const Stack = createStackNavigator();

const StackAuth = () => (
  <Stack.Navigator headerMode="none" animation="fade" initialRouteName="Login">
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
  </Stack.Navigator>
);
export default StackAuth;
