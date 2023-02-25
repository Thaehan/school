import {Text, Colors, View} from 'react-native-ui-lib';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import moment from 'moment';

import MainLayout from '@Containers/MainLayout';
import MainContainer from '@Containers/MainContainer';
import {ITopic} from '@Types/ITopic';

export default function TopicDetailScreen(nav: NativeStackScreenProps<any>) {
  const {navigation} = nav;
  //@ts-expect-error
  const {data}: ITopic = nav.route.params;

  return (
    <MainContainer>
      <MainLayout
        title="Chi tiết đề tài"
        navigation={navigation}
        statusBarColor={Colors.secondary}>
        <Text primarySemiBold xl>
          {data.title}
        </Text>

        <View>
          <Text gray2 primaryLight md marginT-6>
            {`Người tạo: ${data.creator}`}
          </Text>
          <Text gray2 primaryLight md>
            {`Thời gian tạo: ${moment(data.createdAt).format(
              'hh:mm:ss -  DD/MM/YYYY',
            )}`}
          </Text>
          <Text black1 primaryRegular md marginT-6>
            {data.content}
          </Text>
        </View>
      </MainLayout>
    </MainContainer>
  );
}
