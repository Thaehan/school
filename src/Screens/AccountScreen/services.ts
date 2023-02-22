import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useEffect, useState} from 'react';
import {Alert, AlertButton} from 'react-native';

import {IAdminInformation} from '@Types/IAdminInformation';
import ScreenNames from '@Constants/ScreenNames';
import {useDispatch} from 'react-redux';
import {setLoading} from '@Store/Reducers/loadingSlice';

export default function useAccount(nav: NativeStackScreenProps<any>) {
  const {navigation, route} = nav;
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [administratorInformation, setAdministratorInformation] =
    useState<IAdminInformation>({
      name: 'Phạm Tiến Đạt',
      gender: 'Male',
      dateOfBirth: new Date(0).toISOString(),
      nation: 'VietNam',
      address: 'Cầu Diễn, Bắc Từ Liêm, Hà Nội',
    });

  const logoutButtons: AlertButton[] = [
    {
      text: 'Đăng xuất',
      onPress: () => {
        dispatch(setLoading(true));
        setTimeout(() => {
          navigation.replace(ScreenNames.Login, {
            testParams: true,
          });
          dispatch(setLoading(false));
        }, 500);
      },
    },
    {
      text: 'Hủy',
    },
  ];

  const onPressLogout = () => {
    Alert.alert(
      'Đăng xuất',
      'Bạn chắc chắn muốn đăng xuất?',
      logoutButtons,
      {},
    );
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 50);

    return () => clearTimeout(timeout);
  }, [navigation, route.name]);

  return {
    isLoading,
    setIsLoading,
    administratorInformation,
    setAdministratorInformation,
    onPressLogout,
  };
}
