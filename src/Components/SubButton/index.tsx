import {View, Text, TouchableOpacity, Colors} from 'react-native-ui-lib';
import React from 'react';
import {StyleSheet} from 'react-native';

import SvgXml, {LogoutIcon} from '@Components/SvgXml';

export default function SubButton({
  onPress,
  showTitle = false,
  title,
  backgroundColor,
}: {
  onPress?: () => void;
  showTitle?: boolean;
  title?: string;
  backgroundColor?: string;
}) {
  const renderIcon = () => {
    return <SvgXml xml={LogoutIcon} />;
  };

  return (
    <View
      //@ts-expect-error
      shadow>
      <TouchableOpacity
        padding-18
        backgroundColor={backgroundColor ? backgroundColor : Colors.primary}
        spread
        center
        style={styles.bottomButton}
        onPress={() => {
          if (onPress) {
            onPress();
          }
        }}>
        {renderIcon()}
        {showTitle && title !== undefined && (
          <Text center marginL-5 color={Colors.blue7} ldRegular>
            {title}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomButton: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 42,
    right: 16,
    borderRadius: 50,
    shadowColor: Colors.gray3,
  },
});
