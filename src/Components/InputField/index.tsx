import {View, Text, Incubator, Button, Colors} from 'react-native-ui-lib';
import {TextInput, TextInputProps, StyleProp, ViewStyle} from 'react-native';
import React from 'react';

import styles from './styles';
import shadowBox from '@Utils/shadowBox';
import {fontSizes} from '@Themes/Fonts';

interface IInputField extends TextInputProps {
  label: string;
  isPassword?: boolean;
  error?: string;
  type?: string;
  important?: boolean;
  containerHeight?: number;
  inputBoxHeight?: number;
  borderRadius?: number;
  backgroundColor?: string;
  onCloseSuggestion?: () => void;
  disabledBoxShadow?: boolean;
  labelStyle?: StyleProp<ViewStyle>;
}

export default function InputField({
  label,
  isPassword = false,
  placeholder,
  onChangeText,
  error,
  textAlign,
  type,
  important,
  containerHeight,
  inputBoxHeight,
  borderRadius,
  backgroundColor,
  onCloseSuggestion,
  disabledBoxShadow,
  labelStyle,
  ...props
}: IInputField) {
  return (
    <View
      centerV
      marginV-10
      marginH-16
      paddingV-5
      style={[
        {
          backgroundColor: Colors.white,
          shadowOpacity: 10,
          borderRadius: borderRadius ? borderRadius : 50,
        },
        !disabledBoxShadow && shadowBox.boxShadow,
      ]}>
      <TextInput
        onChangeText={onChangeText}
        secureTextEntry={isPassword}
        style={styles.textField}
        placeholder={label}
        placeholderTextColor={Colors.secondary}
        clearButtonMode="always"
      />
    </View>
  );
}
