import {Text, Colors} from 'react-native-ui-lib';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import MainContainer from '@Containers/MainContainer';
import MainLayout from '@Containers/MainLayout';

export default function TopicListScreen(nav: NativeStackScreenProps<any>) {
  const {navigation} = nav;
  return (
    <MainContainer>
      <MainLayout
        backgroundColor={Colors.primary}
        title="Danh sách đề tài"
        navigation={navigation}
        statusBarColor={Colors.secondary}>
        <Text>TopicListScreen</Text>
      </MainLayout>
    </MainContainer>
  );
}
