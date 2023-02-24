import {Colors} from 'react-native-ui-lib';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import MainLayout from '@Containers/MainLayout';
import MainContainer from '@Containers/MainContainer';
import InputField from '@Components/InputField';
import styles from './styles';
import DatePicker from '@Components/DatePicker';
import useUpdateAccount from './services';
import PrimaryButton from '@Components/PrimaryButton';

export default function UpdateAccountScreen(nav: NativeStackScreenProps<any>) {
  const {navigation, route} = nav;
  const {birthday, setBirthday, handleUpdate} = useUpdateAccount(
    nav,
    route.params,
  );

  return (
    <MainContainer>
      <MainLayout
        title="Cập nhật thông tin"
        navigation={navigation}
        statusBarColor={Colors.secondary}>
        <InputField
          label="Họ"
          containerStyle={styles.nameInput}
          showLabel
          disabledBoxShadow
        />
        <InputField
          label="Tên"
          containerStyle={styles.nameInput}
          showLabel
          disabledBoxShadow
        />
        <InputField
          label="Giới tính"
          containerStyle={styles.nameInput}
          showLabel
          disabledBoxShadow
        />
        <DatePicker
          label="Ngày sinh"
          mode="date"
          onChangeValue={date => setBirthday(date)}
          value={birthday}
          showLabel
        />

        <InputField
          label="Địa chỉ"
          containerStyle={styles.nameInput}
          showLabel
          disabledBoxShadow
        />
        <PrimaryButton
          textStyle={styles.updateText}
          label="Cập nhật thông tin"
          onPress={handleUpdate}
          containerStyle={styles.updateButton}
        />
      </MainLayout>
    </MainContainer>
  );
}
