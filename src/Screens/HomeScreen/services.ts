import {NativeStackScreenProps} from '@react-navigation/native-stack';

import ScreenNames from '@Constants/ScreenNames';

export default function useHome(nav: NativeStackScreenProps<any>) {
  const {navigation} = nav;

  const handleCheckin = () => {
    navigation.push(ScreenNames.Checkin, {});
  };

  return {
    handleCheckin,
  };
}
