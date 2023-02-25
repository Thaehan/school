import {useState} from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ShowMessage} from '@Utils/flashMessage';

export default function useUpdateAccount(nav: NativeStackScreenProps<any>) {
  const {navigation} = nav;
  const [firstname, setFirstname] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');
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
    firstname,
    setFirstname,
    lastname,
    setLastname,
    address,
    setAddress,
    handleUpdate,
  };
}
