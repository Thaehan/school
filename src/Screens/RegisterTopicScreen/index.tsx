import {Colors} from 'react-native-ui-lib';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import MainLayout from '@Containers/MainLayout';
import MainContainer from '@Containers/MainContainer';
import InputField from '@Components/InputField';
import styles from './styles';
import useRegisterTopic from './services';
import PrimaryButton from '@Components/PrimaryButton';

export default function RegisterTopicScreen(nav: NativeStackScreenProps<any>) {
  const {navigation} = nav;
  const {title, content, setTitle, setContent, handleRegister} =
    useRegisterTopic(nav);

  return (
    <MainContainer>
      <MainLayout
        title="Đăng ký đề tài"
        navigation={navigation}
        statusBarColor={Colors.secondary}>
        <InputField
          label="Đề tài"
          containerStyle={styles.nameInput}
          showLabel
          disabledBoxShadow
          value={title}
          onChangeText={text => setTitle(text)}
        />
        <InputField
          label="Chi tiết"
          containerStyle={styles.nameInput}
          showLabel
          disabledBoxShadow
          value={content}
          onChangeText={text => setContent(text)}
          numberOfLines={20}
        />

        <PrimaryButton
          textStyle={styles.updateText}
          label="Xác nhận đăng ký"
          onPress={handleRegister}
          containerStyle={styles.updateButton}
        />
      </MainLayout>
    </MainContainer>
  );
}
