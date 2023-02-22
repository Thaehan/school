import {View, Text, TouchableOpacity, Colors} from 'react-native-ui-lib';
import React from 'react';
import {ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import SvgXml, {BackIcon} from '@Components/SvgXml';
import styles from './styles';

export default function MainLayout({
  right,
  hideBackButton,
  navigation,
  children,
  title,
  subButton,
  hideHeader,
  backgroundColor,
  paddingH,
  paddingV,
  padding,
  paddingB,
  paddingT,
}: {
  right?: any;
  hideBackButton?: boolean;
  navigation: any;
  children: any;
  title: string;
  subButton?: any;
  hideHeader?: boolean;
  backgroundColor?: string;
  statusBarColor?: string;
  paddingH?: number;
  paddingV?: number;
  paddingB?: number;
  paddingT?: number;
  padding?: number;
}) {
  return (
    <View
      flex
      backgroundColor={
        backgroundColor ? backgroundColor : Colors.backgroundMain
      }>
      {/* <StatusBar
        backgroundColor={
          statusBarColor ? statusBarColor : Colors.backgroundMain
        }
        barStyle="dark-content"
      /> */}
      {!hideHeader ? (
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          colors={[Colors.secondary, Colors.primary]}
          style={styles.linearGradient}>
          <View row paddingT-30 paddingB-10>
            {/* <ImageBackground
            style={{
              minHeight: '100%',
              justifyContent: 'flex-end',
              paddingBottom: 16,
            }}
            source={require('@Assets/Image/HeaderBackground.png')}> */}
            <View row centerV>
              {!hideBackButton ? (
                <TouchableOpacity
                  center
                  height={'100%'}
                  width={'10%'}
                  onPress={() => {
                    navigation.pop();
                  }}>
                  <SvgXml xml={BackIcon} style={{left: 0}} />
                </TouchableOpacity>
              ) : (
                <View height={'100%'} width={'10%'} />
              )}
              <View centerH width={'80%'}>
                <Text primaryBold white lg>
                  {title}
                </Text>
              </View>
              <View centerV width={'10%'}>
                {right && right.type === 'string' && (
                  <TouchableOpacity onPress={right.onPress}>
                    <Text white>{right.title}</Text>
                  </TouchableOpacity>
                )}
                {right && right.type === 'component' && right.component}
              </View>
            </View>
            {/* </ImageBackground> */}
          </View>
        </LinearGradient>
      ) : null}
      <View
        flex
        backgroundColor={
          backgroundColor ? backgroundColor : Colors.backgroundMain
        }
        style={{
          paddingVertical: paddingV ? paddingV : 0,
          paddingHorizontal: paddingH ? paddingH : 0,
          padding: padding ? padding : 0,
          paddingBottom: paddingB ? paddingB : 0,
          paddingTop: paddingT ? paddingT : 0,
        }}>
        <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
          {children}
        </ScrollView>
      </View>
      {subButton && subButton}
    </View>
  );
}
