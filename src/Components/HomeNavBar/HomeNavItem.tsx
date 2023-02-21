import {View, Text, TouchableOpacity, Image, Colors} from 'react-native-ui-lib';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {Alert, StyleSheet} from 'react-native';

import {IHomeListButton} from '@Types/IHomeListButton';
import {fontFamilies, fontSizes} from '@Themes/Fonts';

interface IEDocumentNav extends IHomeListButton {
  width: number;
  onPress?: () => void;
}

export default function HomeNavItem(props: IEDocumentNav) {
  const {width, name, screenName, onPress, assetName} = props;
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      onPress={
        onPress
          ? onPress
          : screenName.length != 0
          ? () => navigation.push(screenName)
          : () => Alert.alert('Chức năng đang phát triển!')
      }
      width={width}
      centerH
      marginB-lg>
      <View
        //@ts-expect-errors
        radius={10}
        border={0.5}
        borderColor={Colors.border}
        paddingV-10
        paddingH-15>
        <Image assetGroup="home" assetName={assetName} height={30} width={30} />
      </View>
      <View paddingT-xxss>
        <Text primarySemiBold md numberOfLines={2} ellipsizeMode="tail" center>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
