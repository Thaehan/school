import {Colors} from 'react-native-ui-lib';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import MainContainer from '@Containers/MainContainer';
import MainLayout from '@Containers/MainLayout';
import useTeacherList from './services';
import TeacherItem from '@Components/TeacherItem';

export default function TeacherListScreen(nav: NativeStackScreenProps<any>) {
  const {navigation} = nav;
  const {teacherList} = useTeacherList();
  return (
    <MainContainer>
      <MainLayout
        backgroundColor={Colors.primary}
        title="Danh sách giảng viên"
        navigation={navigation}
        statusBarColor={Colors.secondary}>
        {teacherList.map(item => {
          return <TeacherItem data={item} key={item.id} />;
        })}
      </MainLayout>
    </MainContainer>
  );
}
