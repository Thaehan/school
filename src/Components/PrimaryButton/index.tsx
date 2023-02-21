import {StyleProp, ViewStyle, TextStyle} from 'react-native';
import {View, TouchableOpacity, Text} from 'react-native-ui-lib';
import styles from './styles';

export default function PrimaryButton({
  label,
  textColor,
  backgroundColor,
  containerStyle,
  textStyle,
  onPress,
}: {
  label: string;
  onPress?: () => void;
  textColor?: string;
  backgroundColor?: string;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}) {
  return (
    <TouchableOpacity
      style={containerStyle ? containerStyle : styles.container}
      onPress={() => {
        if (onPress) onPress();
      }}>
      <Text primaryRegular style={textStyle ? textStyle : styles.text}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}
