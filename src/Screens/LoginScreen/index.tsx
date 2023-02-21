import {Keyboard, SafeAreaView, StyleSheet, TextInput} from 'react-native';
import {Button, View, Text, Image, Assets} from 'react-native-ui-lib';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TouchableWithoutFeedback} from 'react-native';

import SvgXml, {LogoIcon} from '@Components/SvgXml';
import {IRootState} from '@Store/configureStore';
import {fontFamilies} from '@Themes/Fonts';
import ScreenNames from '@Constants/ScreenNames';
import MainContainer from '@Containers/MainContainer';
import InputField from '@Components/InputField';
import PrimaryButton from '@Components/PrimaryButton';
import useLogin from './services';
import styles from './styles';
import {translate} from '@Languages/Translate';

export default function LoginScreen(nav: NativeStackScreenProps<any>) {
  const {navigation, route} = nav;
  const {
    username,
    setUsername,
    password,
    setPassword,
    handleLogin,
    handleForget,
    handleRegister,
    handleGuest,
    handleHotline,
  } = useLogin(nav);

  return (
    <MainContainer>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View height="35%" center>
          <SvgXml xml={LogoIcon} />
          <Text primarySemiBold primary marginT-sm xxl>
            EduOne
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View height="65%">
          <InputField
            label={translate('main.Username')}
            borderRadius={15}
            onChangeText={(text: string) => setUsername(text)}
          />
          <InputField
            isPassword
            label="Mật khẩu"
            borderRadius={15}
            onChangeText={(text: string) => setPassword(text)}
          />
          <PrimaryButton
            label="Quên mật khẩu?"
            onPress={handleForget}
            containerStyle={styles.forgetButton}
            textStyle={styles.forGetButtonText}
          />
          <PrimaryButton
            label="Đăng nhập"
            onPress={handleLogin}
            containerStyle={styles.loginButton}
            textStyle={styles.loginButtonText}
          />
          <View row center padding-xss marginT-40>
            <Text black1 primarySemiBold>
              {`Nếu chưa có tài khoản, vui lòng `}
            </Text>
            <PrimaryButton
              label="đăng ký"
              onPress={handleRegister}
              containerStyle={styles.registerButton}
              textStyle={styles.registerButtonText}
            />
          </View>
          <PrimaryButton
            label="Đăng nhập với tư cách tài khoản khách"
            onPress={handleGuest}
            containerStyle={styles.guestButton}
            textStyle={styles.guestButtonText}
          />
          <View row center padding-xs marginT-60>
            <Text black1 primaryRegular>
              {`Hotline hỗ trợ `}
            </Text>
            <PrimaryButton
              label="1900 6888"
              onPress={handleHotline}
              containerStyle={styles.hotlineButton}
              textStyle={styles.hotlineButtonText}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </MainContainer>
  );
}
