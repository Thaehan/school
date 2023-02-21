import {View, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-ui-lib';

interface IDayComponent {
  data: any;
  onPress?: () => void;
}

export default function DayComponent({data, onPress}: IDayComponent) {
  return (
    <TouchableOpacity
      onPress={() => {
        if (onPress) onPress();
      }}></TouchableOpacity>
  );
}
