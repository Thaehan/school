import {View, Text} from 'react-native-ui-lib';
import React from 'react';

import moment from 'moment';

export default function AccountDetailItem({
  label,
  value,
  multiLines = false,
}: {
  label: string;
  value: string;
  multiLines?: boolean;
}) {
  const labels: Record<string, string> = {
    name: 'Họ và tên',
    dateOfBirth: 'Ngày sinh',
    gender: 'Giới tính',
    nation: 'Quốc tịch',
    address: 'Đia chỉ',
    email: 'Email',
    phoneNumber: 'Số điện thoại',
    mainMajor: 'Chuyên ngành',
    teacherId: 'Mã giảng viên',
    selectedTopic: 'Đề tài đã chọn',
  };

  if (!labels[label] || value === '') {
    return null;
  }

  return (
    <View flex spread row paddingV-10>
      <Text primaryBold primary md>
        {`${labels[label]}:`}
      </Text>
      {multiLines ? (
        //@ts-expect-error
        <View maxWidth={'65%'}>
          <Text primaryRegular md multiLines>
            {label === 'dateOfBirth'
              ? moment(value).format('DD-MM-YYYY')
              : value}
          </Text>
        </View>
      ) : (
        <Text primaryRegular md>
          {label === 'dateOfBirth' ? moment(value).format('DD-MM-YYYY') : value}
        </Text>
      )}
    </View>
  );
}
