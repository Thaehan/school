import {useState} from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ShowMessage} from '@Utils/flashMessage';

export default function useRegisterTopic(nav: NativeStackScreenProps<any>) {
  const {navigation} = nav;

  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const handleRegister = () => {
    navigation.pop();
    ShowMessage({message: 'Đăng ký đề tài thành công.', type: 'success'});
  };

  return {
    handleRegister,
    title,
    content,
    setTitle,
    setContent,
  };
}
