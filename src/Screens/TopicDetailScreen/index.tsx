import {Text, Colors, View} from 'react-native-ui-lib';
import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import moment from 'moment';

import MainLayout from '@Containers/MainLayout';
import MainContainer from '@Containers/MainContainer';
import {ITopic} from '@Types/ITopic';
import {nameObjectToString} from '@Utils/utils';
import {getAll} from '@Api/CategoryApi';

export default function TopicDetailScreen(nav: NativeStackScreenProps<any>) {
  const {navigation} = nav;
  //@ts-expect-error
  const {data}: {data: ITopic} = nav.route.params;
  const [categories, setCategories] = useState<Record<string, string>>({});

  const getCategories = async () => {
    const res = await getAll();
    const _categories: Record<string, string> = {};
    res.forEach((item: any) => {
      _categories[item.id] = item.category_name;
    });
    setCategories(_categories);
  };

  useEffect(() => {
    getCategories();
    console.log(categories);
  }, []);

  return (
    <MainContainer>
      <MainLayout
        title="Chi tiết đề tài"
        navigation={navigation}
        statusBarColor={Colors.secondary}>
        <Text primarySemiBold xl>
          {data.topic_name}
        </Text>

        <View>
          <Text gray2 primaryLight md marginT-6>
            {`Người tạo: ${nameObjectToString(data.creator?.name)}`}
          </Text>
          <Text gray2 primaryLight md>
            {`Thời gian tạo: ${moment(data.createdAt).format(
              'hh:mm:ss -  DD/MM/YYYY',
            )}`}
          </Text>
          <View row>
            <Text gray2 primaryLight md>
              Phân loại:{' '}
            </Text>
            {data.tags &&
              data.tags.map(item => {
                return (
                  <Text key={item} gray2 primaryLight md>
                    {categories[item]}
                  </Text>
                );
              })}
          </View>
          <Text black1 primaryRegular md marginT-6>
            {data.detail}
          </Text>
        </View>
      </MainLayout>
    </MainContainer>
  );
}
