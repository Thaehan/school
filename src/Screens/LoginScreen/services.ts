import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Alert} from 'react-native';
import {} from 'react-native-ui-lib';

import {IRootState} from '@Store/configureStore';
import ScreenNames from '@Constants/ScreenNames';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {setLoading} from '@Store/Reducers/loadingSlice';

export default function useLogin(navigation: NativeStackScreenProps<any>) {
  const dispatch = useDispatch();
  const user = useSelector((state: IRootState) => state.user);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    if (username.length == 0 || password.length == 0) {
      Alert.alert('Vui lòng nhập đầy đủ tên người dùng và mật khẩu!');
    } else {
      dispatch(setLoading(true));
      setTimeout(() => {
        navigation.navigation.replace(ScreenNames.MainTab, {
          testParams: true,
        });
        dispatch(setLoading(false));
      }, 500);
      console.log('login');
    }
  };

  const handleForget = () => {
    console.log('forget');
  };

  const handleRegister = () => {
    console.log('register');
  };

  const handleGuest = () => {
    console.log('guest');
  };

  const handleHotline = () => {
    console.log('Hotline');
  };

  useEffect(() => {
    console.log(username);
  }, [username]);

  useEffect(() => {
    console.log(password);
  }, [password]);

  return {
    username,
    setUsername,
    password,
    setPassword,
    handleLogin,
    handleForget,
    handleRegister,
    handleGuest,
    handleHotline,
  };
}
