import {View, Text} from 'react-native-ui-lib';
import React from 'react';

import {ITeacher} from '@Types/ITeacher';

export default function TeacherItem({data}: {data: ITeacher}) {
  return (
    <View>
      <Text>{data.id}</Text>
    </View>
  );
}
