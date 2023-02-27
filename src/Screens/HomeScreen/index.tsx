import {ScrollView} from 'react-native';
import {Colors, Image, View, Text} from 'react-native-ui-lib';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import MainContainer from '@Containers/MainContainer';
import React from 'react';
import HomeNavBar from '@Components/HomeNavBar';
import CardView from '@Components/CardView';
import {translate} from '@Languages/Translate';
import styles from './styles';

export default function HomeScreen(nav: NativeStackScreenProps<any>) {
  return (
    <MainContainer>
      {/* <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" /> */}
      <View>
        <ScrollView
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}>
          <View
            row
            centerV
            paddingH-16
            paddingB-20
            paddingT-36
            backgroundColor={Colors.primary}>
            <View>
              <Image
                assetGroup="main"
                assetName={'defaultAvatar'}
                height={60}
                width={60}
              />
            </View>
            <View paddingL-25>
              <Text primarySemiBold white>
                Bùi Quang Hiệu
              </Text>
              <Text primaryRegular white>
                0123456789
              </Text>
            </View>
          </View>
          {/**Body */}
          <CardView isGradient>
            <HomeNavBar />
          </CardView>
          <CardView title={translate('home.News')}>
            <View
              row
              //@ts-expect-errors
              radius={15}
              height={300}
              backgroundColor={Colors.gray1}></View>
          </CardView>
        </ScrollView>
      </View>
    </MainContainer>
  );
}
