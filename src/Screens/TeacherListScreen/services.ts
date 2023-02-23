import {useEffect, useState} from 'react';

import mockList from '@Assets/Data/teacherList.json';
import {ITeacher} from '@Types/ITeacher';

export default function useTeacherList() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [teacherList, setTeacherList] = useState<ITeacher[]>([]);

  const getTeacherList = async () => {
    setIsLoading(true);
    try {
      setTeacherList(mockList);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      getTeacherList();
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return {
    isLoading,
    setIsLoading,
    teacherList,
  };
}
