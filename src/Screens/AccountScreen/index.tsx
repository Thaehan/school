import {View, Text, Carousel, Image} from 'react-native-ui-lib';
import React, {useEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import MainContainer from '@Containers/MainContainer';
import MainLayout from '@Containers/MainLayout';
import {translate} from '@Languages/Translate';
import useAccount from './services';
import MainLoading from '@Components/MainLoading';
import AccountDetailItem from '@Components/AccountDetailItem';
import PrimaryButton from '@Components/PrimaryButton';
import styles from './styles';

export default function AccountScreen(nav: NativeStackScreenProps<any>) {
  const {navigation, route} = nav;
  const {isLoading, setIsLoading, administratorInformation, onPressLogout} =
    useAccount(nav);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('focus');
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <MainContainer>
      <MainLayout
        // subButton={
        //   <PrimaryButton
        //     containerStyle={styles.logoutButton}
        //     textStyle={styles.logoutText}
        //     label={translate('main.Logout')}
        //     onPress={() => onPressLogout()}
        //   />
        // }
        backgroundColor="white"
        hideBackButton={route?.params?.hideBackButton}
        title={translate('home.Account')}
        navigation={navigation}>
        {!isLoading ? (
          <View>
            <View centerH paddingV-10>
              <Image
                assetGroup="main"
                assetName="defaultAvatar"
                height={60}
                width={60}
              />
            </View>
            <View>
              {Object.entries(administratorInformation).map(
                ([key, value], index) => {
                  console.log('Info', key, value);
                  return (
                    <AccountDetailItem key={key} label={key} value={value} />
                  );
                },
              )}
            </View>
            <PrimaryButton
              containerStyle={styles.logoutButton}
              textStyle={styles.logoutText}
              label={translate('main.Logout')}
              onPress={() => onPressLogout()}
            />
          </View>
        ) : (
          <MainLoading />
        )}
      </MainLayout>
    </MainContainer>
  );
}
