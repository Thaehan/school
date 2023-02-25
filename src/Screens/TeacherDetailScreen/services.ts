import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useEffect, useState} from 'react';

import {ITeacher} from '@Types/ITeacher';
import mockList from '@Assets/Data/teacherList.json';

export default function useTeacherDetail(nav: NativeStackScreenProps<any>) {
  const prevData: any = nav.route.params;

  const [teacherData, setTeacherData] = useState<ITeacher>(prevData);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getData = () => {
    setIsLoading(true);
    try {
      mockList.map(item => {
        if (item.id === prevData.id) {
          setTeacherData(item);
        }
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      getData();
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return {
    teacherData,
    isLoading,
  };
}
