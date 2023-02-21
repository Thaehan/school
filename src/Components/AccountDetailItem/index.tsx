import {View, Text} from 'react-native-ui-lib';
import React from 'react';

import {IAdminInformation} from '@Types/IAdminInformation';
import moment from 'moment';

export default function AccountDetailItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  const labels: Record<string, string> = {
    name: 'Họ và tên',
    dateOfBirth: 'Ngày sinh',
    gender: 'Giới tính',
    nation: 'Quốc tịch',
    address: 'Đại chỉ',
  };

  return (
    <View flex spread row paddingH-16 paddingV-10>
      <Text primaryBold primary md>
        {`${labels[label]}:`}
      </Text>
      <Text primaryRegular md>
        {label == 'dateOfBirth' ? moment(value).format('DD-MM-YYYY') : value}
      </Text>
    </View>
  );
}
