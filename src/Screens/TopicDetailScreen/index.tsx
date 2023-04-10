import {Text, Colors, View} from 'react-native-ui-lib';
import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux';

import MainLayout from '@Containers/MainLayout';
import MainContainer from '@Containers/MainContainer';
import {ITopic} from '@Types/ITopic';
import {nameObjectToString} from '@Utils/utils';
import {getAll} from '@Api/CategoryApi';
import TagItem from '@Components/TagItem';
import ScreenNames from '@Constants/ScreenNames';
import PrimaryButton from '@Components/PrimaryButton';
import {studentSelectTopic} from '@Api/StudentApi';
import {IRootState} from '@Store/configureStore';
import styles from './styles';
import {ShowMessage} from '@Utils/flashMessage';
import {updateStudent} from '@Store/Reducers/userSlice';

export default function TopicDetailScreen(nav: NativeStackScreenProps<any>) {
  const {navigation} = nav;
  //@ts-expect-error
  const {data}: {data: ITopic} = nav.route.params;
  const [categories, setCategories] = useState<Record<string, string>>({});
  const currentUser = useSelector((state: IRootState) => state.user);
  const dispatch = useDispatch();

  const getCategories = async () => {
    const res = await getAll();
    const _categories: Record<string, string> = {};
    res.forEach((item: any) => {
      _categories[item.id] = item.category_name;
    });
    setCategories(_categories);
  };

  const handleRegisterTopic = async () => {
    try {
      const res = await studentSelectTopic(
        currentUser.studentData?.id,
        data.id,
      );
      if (res) {
        navigation.pop();
        ShowMessage({message: 'Đăng ký đề tài thành công.', type: 'success'});
        dispatch(updateStudent({selected_topic_id: data.id}));
      } else {
        ShowMessage({message: 'Có lỗi khi đăng ký đề tài.', type: 'success'});
      }
    } catch (error) {
      ShowMessage({message: 'Đăng ký không thành công!', type: 'danger'});
    }
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
          <View row flex>
            <Text gray2 primaryLight md marginT-6>
              {`Người tạo: `}
            </Text>
            <TagItem
              title={nameObjectToString(data.creator?.name)}
              screenName={ScreenNames.TeacherDetail}
              data={data.creator}
            />
          </View>
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
          {!currentUser.studentData?.selected_topic_id && (
            <PrimaryButton
              label="Đăng ký đề tài"
              onPress={handleRegisterTopic}
              textStyle={styles.updateText}
              containerStyle={styles.updateButton}
            />
          )}
        </View>
      </MainLayout>
    </MainContainer>
  );
}
