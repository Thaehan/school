import {Colors, Text} from 'react-native-ui-lib';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import MainContainer from '@Containers/MainContainer';
import MainLayout from '@Containers/MainLayout';

export default function TeacherListScreen(nav: NativeStackScreenProps<any>) {
  const {navigation} = nav;
  return (
    <MainContainer>
      <MainLayout
        title="Danh sách giảng viên"
        navigation={navigation}
        statusBarColor={Colors.secondary}
        paddingH={16}
        paddingB={8}>
        <Text>Khoong</Text>
      </MainLayout>
    </MainContainer>
  );
}
