import {Colors, TouchableOpacity, View} from 'react-native-ui-lib';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TextInput, Keyboard} from 'react-native';

import MainContainer from '@Containers/MainContainer';
import MainLayout from '@Containers/MainLayout';
import useTopicList from './services';
import MainLoading from '@Components/MainLoading';
import TopicItem from '@Components/TopicItem';
import SubButton from '@Components/SubButton';
import SvgXml, {SearchIcon} from '@Components/SvgXml';
import styles from './styles';
import FlatlistPaged from '@Components/FlatlistPaged';

export default function TopicListScreen(nav: NativeStackScreenProps<any>) {
  const {navigation} = nav;
  const {
    topicList,
    isLoading,
    showButtonTitle,
    handleScroll,
    handleRegister,
    currentUser,
    searchText,
    setSearchText,
    textInputRef,
    handleSearch,
  } = useTopicList(nav);

  return (
    <MainContainer>
      <MainLayout
        isFlatList
        onScroll={handleScroll}
        subButton={
          currentUser &&
          currentUser.studentData &&
          !currentUser.studentData?.selected_topic_id ? (
            <SubButton
              title="Đăng ký đề tài"
              type="register"
              showTitle={showButtonTitle}
              onPress={handleRegister}
            />
          ) : null
        }
        title="Danh sách đề tài"
        navigation={navigation}
        statusBarColor={Colors.secondary}>
        <View
          marginV-8
          paddingH-6
          paddingV-10
          row
          centerV
          //@ts-expect-errors
          radius={16}
          backgroundColor="#F6F6F6">
          <View row width={'100%'}>
            <TextInput
              ref={textInputRef}
              value={searchText}
              onChangeText={text => {
                setSearchText(text);
              }}
              placeholderTextColor={Colors.black1}
              placeholder="Tìm kiếm đề tài"
              style={styles.text}
            />
            <TouchableOpacity
              width={'20%'}
              center
              onPress={() => {
                Keyboard.dismiss();
                handleSearch();
              }}>
              <SvgXml xml={SearchIcon} />
            </TouchableOpacity>
          </View>
        </View>
        {isLoading ? (
          <MainLoading />
        ) : (
          <FlatlistPaged
            data={topicList}
            renderItem={({item}) => <TopicItem data={item} />}
          />
        )}
      </MainLayout>
    </MainContainer>
  );
}
