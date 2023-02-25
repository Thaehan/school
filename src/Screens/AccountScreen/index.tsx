import {View, Image, Text, Colors} from 'react-native-ui-lib';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import MainContainer from '@Containers/MainContainer';
import MainLayout from '@Containers/MainLayout';
import {translate} from '@Languages/Translate';
import useAccount from './services';
import MainLoading from '@Components/MainLoading';
import AccountDetailItem from '@Components/AccountDetailItem';
import PrimaryButton from '@Components/PrimaryButton';
import styles from './styles';
import SubButton from '@Components/SubButton';

export default function AccountScreen(nav: NativeStackScreenProps<any>) {
  const {navigation, route} = nav;
  const {isLoading, administratorInformation, onPressLogout, onPressUpdate} =
    useAccount(nav);

  return (
    <MainContainer>
      <MainLayout
        subButton={<SubButton onPress={onPressLogout} />}
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
                marginB-20
              />
              {administratorInformation.selectedTopic &&
              administratorInformation.selectedTopic !== '' ? (
                <View
                  backgroundColor={Colors.green1}
                  paddingH-16
                  paddingV-4
                  center
                  //@ts-expect-error
                  radius={60}>
                  <Text primarySemiBold md white>
                    Đã chọn đề tài
                  </Text>
                </View>
              ) : (
                <View
                  backgroundColor={Colors.red1}
                  paddingH-16
                  paddingV-4
                  center
                  //@ts-expect-error
                  radius={60}>
                  <Text primarySemiBold md white>
                    Chưa có đề tài
                  </Text>
                </View>
              )}
            </View>
            <View>
              {Object.entries(administratorInformation).map(([key, value]) => {
                console.log('Info', key, value);
                return (
                  <AccountDetailItem
                    multiLines
                    key={key}
                    label={key}
                    value={value}
                  />
                );
              })}
            </View>
            <PrimaryButton
              containerStyle={styles.updateButton}
              textStyle={styles.updateText}
              label={translate('main.UpdateInformation')}
              onPress={onPressUpdate}
            />
          </View>
        ) : (
          <MainLoading />
        )}
      </MainLayout>
    </MainContainer>
  );
}
