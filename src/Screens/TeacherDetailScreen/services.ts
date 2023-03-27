import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useEffect, useState} from 'react';

import {ITeacher} from '@Types/ITeacher';

export default function useTeacherDetail(nav: NativeStackScreenProps<any>) {
  const prevData: any = nav.route.params?.data;

  const [teacherData, setTeacherData] = useState<ITeacher>(prevData);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getData = () => {
    setIsLoading(true);
    try {
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    teacherData,
    isLoading,
    setTeacherData,
  };
}
