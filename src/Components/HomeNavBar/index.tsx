import {Text, useWindowDimensions} from 'react-native';
import {View} from 'react-native-ui-lib';
import React, {useState} from 'react';
import homeListButton from './homeListButton';
import HomeNavItem from './HomeNavItem';

export default function HomeNavBar() {
  const {width} = useWindowDimensions();
  const widthItem = width / 4;
  const [listNav, setListNav] = useState(homeListButton.slice(0, 9));
  const [isFull, setIsFull] = useState(false);
  return (
    <View
      row
      centerH
      marginT-20
      //@ts-expect-errors
      flexWrap="wrap">
      {homeListButton.map((item, index) => {
        return (
          <HomeNavItem
            id={item.id}
            assetName={item.assetName}
            key={item.id}
            width={widthItem}
            name={item.name}
            screenName={item.screenName}
          />
        );
      })}
    </View>
  );
}
