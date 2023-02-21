import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {Platform, useWindowDimensions} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';

import ScreenNames from '@Constants/ScreenNames';
import HomeScreen from '@Screens/HomeScreen';
import LoginScreen from '@Screens/LoginScreen';
import CheckinScreen from '@Screens/CheckinScreen';
import CheckinHistoryScreen from '@Screens/CheckinHistoryScreen';
import TabNavigator from './TabNavigator';
import AccountScreen from '@Screens/AccountScreen';

const MainStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const MainScreenStack = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen name={ScreenNames.Login} component={LoginScreen} />
      <MainStack.Screen name={ScreenNames.MainTab} component={TabNavigator} />
      <MainStack.Screen name={ScreenNames.Home} component={HomeScreen} />
      <MainStack.Screen name={ScreenNames.Account} component={AccountScreen} />
      <MainStack.Screen name={ScreenNames.Checkin} component={CheckinScreen} />
      <MainStack.Screen
        name={ScreenNames.CheckinHistory}
        component={CheckinHistoryScreen}
      />
    </MainStack.Navigator>
  );
};

const AppNavigator = () => {
  const {width} = useWindowDimensions();

  return (
    <NavigationContainer onReady={() => RNBootSplash.hide({fade: true})}>
      <MainScreenStack />
    </NavigationContainer>
  );
};

export default AppNavigator;
