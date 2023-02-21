import ScreenNames from '@Constants/ScreenNames';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import moment from 'moment';
import {useEffect, useState} from 'react';
import {Colors} from 'react-native-ui-lib';

import {ICheckinItem} from '@Types/ICheckinItem';
import {useDispatch, useSelector} from 'react-redux';
import {IRootState} from '@Store/configureStore';

const mock: ICheckinItem[] = [
  {
    roomId: 'GD-3',
    subjectId: 'INT2211',
    classId: 'INT2211 22',
    teacher: 'Nguyen Thuy Hanh',
    startTime: '09:00',
    endTime: '11:50',
    isCheckedIn: true,
    periodNumber: 3,
  },
  {
    roomId: 'GD-3',
    subjectId: 'INT2211',
    classId: 'INT2211 22',
    teacher: 'Nguyen Thuy Hanh',
    startTime: '09:00',
    endTime: '11:50',
    isCheckedIn: true,
    periodNumber: 3,
  },
  {
    roomId: 'GD-3',
    subjectId: 'INT2211',
    classId: 'INT2211 22',
    teacher: 'Nguyen Thuy Hanh',
    startTime: '09:00',
    endTime: '11:50',
    isCheckedIn: true,
    periodNumber: 3,
  },
  {
    roomId: 'GD-3',
    subjectId: 'INT2211',
    classId: 'INT2211 22',
    teacher: 'Nguyen Thuy Hanh',
    startTime: '09:00',
    endTime: '11:50',
    isCheckedIn: true,
    periodNumber: 3,
  },
  {
    roomId: 'GD-3',
    subjectId: 'INT2211',
    classId: 'INT2211 22',
    teacher: 'Nguyen Thuy Hanh',
    startTime: '09:00',
    endTime: '11:50',
    isCheckedIn: true,
    periodNumber: 3,
  },
  {
    roomId: 'GD-3',
    subjectId: 'INT2211',
    classId: 'INT2211 22',
    teacher: 'Nguyen Thuy Hanh',
    startTime: '09:00',
    endTime: '11:50',
    isCheckedIn: true,
    periodNumber: 3,
  },
  {
    roomId: 'GD-3',
    subjectId: 'INT2211',
    classId: 'INT2211 22',
    teacher: 'Nguyen Thuy Hanh',
    startTime: '09:00',
    endTime: '11:50',
    isCheckedIn: true,
    periodNumber: 3,
  },
];

export default function useCheckin(nav: NativeStackScreenProps<any>) {
  const {navigation, route} = nav;
  const {localLoading} = useSelector((state: IRootState) => state.loading);
  const dispatch = useDispatch();
  const [currentDateString, setCurrentDateString] = useState<string>(
    moment().format('DD/MM/YYYY'),
  );
  const [selectedDate, setSelectedDate] = useState<Record<string, any>>({});
  const [checkinList, setCheckinList] = useState<ICheckinItem[]>(mock);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleHistory = () => {
    navigation.push(ScreenNames.CheckinHistory, {});
  };

  useEffect(() => {
    console.log(currentDateString);
    let newSelectedDate: Record<string, any> = {};
    newSelectedDate[currentDateString] = {
      selected: true,
      marked: true,
    };
    setSelectedDate(newSelectedDate);
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 50);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    console.log(selectedDate);
  }, [selectedDate]);

  return {
    selectedDate,
    setSelectedDate,
    currentDateString,
    setCurrentDateString,
    handleHistory,
    checkinList,
    isLoading,
  };
}
