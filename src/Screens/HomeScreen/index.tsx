import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {
  Button,
  Colors,
  Image,
  View,
  Text,
  TouchableOpacity,
} from 'react-native-ui-lib';
import {useDispatch, useSelector} from 'react-redux';

import SvgXml, {NotificationIcon} from '@Components/SvgXml';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import ScreenNames from '@Constants/ScreenNames';
import {IRootState} from '@Store/configureStore';
import {resetUser} from '@Store/Reducers/userSlice';
import MainContainer from '@Containers/MainContainer';
import MainLayout from '@Containers/MainLayout';
import useHome from './services';
import React from 'react';
import HomeNavBar from '@Components/HomeNavBar';
import CardView from '@Components/CardView';
import {translate} from '@Languages/Translate';
import {fontSizes} from '@Themes/Fonts';
import styles from './styles';

export default function HomeScreen(nav: NativeStackScreenProps<any>) {
  const {navigation, route} = nav;
  const {handleCheckin} = useHome(nav);

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
                PHẠM TIẾN ĐẠT
              </Text>
              <Text primaryRegular white>
                0123456789
              </Text>
            </View>
            {/* <TouchableOpacity onPress={() => {}}>
              <View centerH bottom>
                <SvgXml xml={NotificationIcon} />
                <Text primaryLight white xxs>
                  Thông báo
                </Text>
              </View>
            </TouchableOpacity> */}
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
