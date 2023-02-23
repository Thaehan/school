import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RNBootSplash from 'react-native-bootsplash';

import TabNavigator from './TabNavigator';
import ScreenNames from '@Constants/ScreenNames';
import HomeScreen from '@Screens/HomeScreen';
import LoginScreen from '@Screens/LoginScreen';
import CheckinScreen from '@Screens/CheckinScreen';
import CheckinHistoryScreen from '@Screens/CheckinHistoryScreen';
import AccountScreen from '@Screens/AccountScreen';
import TeacherListScreen from '@Screens/TeacherListScreen';
import TopicListScreen from '@Screens/TopicListScreen';
import TeacherDetailScreen from '@Screens/TeacherDetailScreen';
import UpdateAccountScreen from '@Screens/UpdateAccountScreen';

const MainStack = createNativeStackNavigator();

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
      <MainStack.Screen
        name={ScreenNames.TeacherList}
        component={TeacherListScreen}
      />
      <MainStack.Screen
        name={ScreenNames.TopicList}
        component={TopicListScreen}
      />
      <MainStack.Screen
        name={ScreenNames.TeacherDetail}
        component={TeacherDetailScreen}
      />
      <MainStack.Screen
        name={ScreenNames.UpdateAccount}
        component={UpdateAccountScreen}
      />
    </MainStack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide({fade: true})}>
      <MainScreenStack />
    </NavigationContainer>
  );
};

export default AppNavigator;
