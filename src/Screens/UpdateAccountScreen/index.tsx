import {Text, Colors} from 'react-native-ui-lib';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import MainLayout from '@Containers/MainLayout';
import MainContainer from '@Containers/MainContainer';

export default function UpdateAccountScreen(nav: NativeStackScreenProps<any>) {
  const {navigation} = nav;

  return (
    <MainContainer>
      <MainLayout
        title="Cập nhật thông tin"
        navigation={navigation}
        statusBarColor={Colors.secondary}>
        <Text>{'Update scree'}</Text>
      </MainLayout>
    </MainContainer>
  );
}
