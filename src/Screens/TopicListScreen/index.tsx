import {Colors} from 'react-native-ui-lib';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import MainContainer from '@Containers/MainContainer';
import MainLayout from '@Containers/MainLayout';
import useTopicList from './services';
import MainLoading from '@Components/MainLoading';
import TopicItem from '@Components/TopicItem';

export default function TopicListScreen(nav: NativeStackScreenProps<any>) {
  const {navigation} = nav;
  const {topicList, isLoading} = useTopicList();

  return (
    <MainContainer>
      <MainLayout
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
