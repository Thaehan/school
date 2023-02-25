import {Colors} from 'react-native-ui-lib';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import MainContainer from '@Containers/MainContainer';
import MainLayout from '@Containers/MainLayout';
import useTopicList from './services';
import MainLoading from '@Components/MainLoading';
import TopicItem from '@Components/TopicItem';
import SubButton from '@Components/SubButton';

export default function TopicListScreen(nav: NativeStackScreenProps<any>) {
  const {navigation} = nav;
  const {topicList, isLoading, showButtonTitle, handleScroll, handleRegister} =
    useTopicList(nav);

  return (
    <MainContainer>
      <MainLayout
        onScroll={handleScroll}
        subButton={
          <SubButton
            title="Đăng ký đề tài"
            type="register"
            showTitle={showButtonTitle}
            onPress={handleRegister}
          />
        }
        title="Danh sách đề tài"
        navigation={navigation}
        statusBarColor={Colors.secondary}>
        {isLoading ? (
          <MainLoading />
        ) : (
          topicList.map(item => {
            return <TopicItem data={item} key={item.id} />;
          })
        )}
      </MainLayout>
    </MainContainer>
  );
}
