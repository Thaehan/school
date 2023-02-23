import {Text, Colors} from 'react-native-ui-lib';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import MainLayout from '@Containers/MainLayout';
import MainContainer from '@Containers/MainContainer';

export default function TeacherDetailScreen(nav: NativeStackScreenProps<any>) {
  const {route, navigation} = nav;

  return (
    <MainContainer>
      <MainLayout
        title="Chi tiết giảng viên"
        navigation={navigation}
        statusBarColor={Colors.secondary}>
        <Text>{route.params ? route.params.id : 'Screen'}</Text>
      </MainLayout>
    </MainContainer>
  );
}
