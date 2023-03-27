import {useState} from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ShowMessage} from '@Utils/flashMessage';

export default function useUpdateAccount(nav: NativeStackScreenProps<any>) {
  const {navigation} = nav;
  const [first_name, setfirst_name] = useState<string>('');
  const [last_name, setlast_name] = useState<string>('');
  // const [gender, setGender] = useState<Record<string, string>>()
  const [address, setAddress] = useState<string>('');
  const [birthday, setBirthday] = useState<Date>(new Date());

  const handleUpdate = () => {
    navigation.pop();
    ShowMessage({message: 'Cập nhật thông tin thành công.', type: 'success'});
  };

  return {
    birthday,
    setBirthday,
    first_name,
    setfirst_name,
    last_name,
    setlast_name,
    address,
    setAddress,
    handleUpdate,
  };
}
