import {View, Text, Colors, TouchableOpacity, Image} from 'react-native-ui-lib';
import React from 'react';
import {StackActions, useNavigation} from '@react-navigation/native';

import {ITeacher} from '@Types/ITeacher';
import {translate} from '@Languages/Translate';
import ScreenNames from '@Constants/ScreenNames';

export default function TeacherItem({data}: {data: ITeacher}) {
  const navigation = useNavigation();

  const navigateToTeacherDetail = () => {
    navigation.dispatch(
      StackActions.push(ScreenNames.TeacherDetail, {id: data.id}),
    );
  };

  return (
    <TouchableOpacity
      row
      flex
      centerV
      paddingH-16
      paddingV-8
      marginB-8
      radius={10}
      backgroundColor={Colors.primary}
      onPress={navigateToTeacherDetail}>
      <View centerV width={'25%'}>
        <Image
          assetGroup="main"
          assetName={'defaultAvatar'}
          height={60}
          width={60}
        />
      </View>
      <View width={'75%'}>
        <Text
          primarySemiBold
          lg
          white>{`${data.firstName} ${data.lastName}`}</Text>
        <Text primaryRegular md white>
          {`${translate('business.TeacherId')}: ${data.teacherId}`}
        </Text>
        <Text primaryRegular md white>
          {`${translate('business.MainMajor')}: ${data.mainMajor}`}
        </Text>
        <Text primaryRegular md white>
          {`${translate('business.PhoneNumber')}: ${data.phoneNumber}`}
        </Text>
        <Text primaryRegular md white>
          {`${translate('business.Email')}: ${data.email}`}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
