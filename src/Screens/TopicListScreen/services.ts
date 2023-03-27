import {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {LayoutAnimation} from 'react-native';

import {ITopic} from '@Types/ITopic';
import ScreenNames from '@Constants/ScreenNames';
import {getTopics} from '@Api/TopicApi';

export default function useTopicList(nav: NativeStackScreenProps<any>) {
  const {navigation} = nav;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [topicList, setTopicList] = useState<ITopic[]>([]);
  const [showButtonTitle, setShowButtonTitle] = useState<boolean>(true);

  const handleRegister = () => {
    navigation.push(ScreenNames.RegisterTopic);
  };

  const handleScroll = (event: any) => {
    const layout = {
      duration: 100,
      create: {
        type: LayoutAnimation.Types.linear,
        property: LayoutAnimation.Properties.opacity,
      },
      update: {
        type: LayoutAnimation.Types.linear,
        property: LayoutAnimation.Properties.opacity,
      },
      delete: {
        type: LayoutAnimation.Types.linear,
        property: LayoutAnimation.Properties.opacity,
      },
    };
    const currentOffset = event.nativeEvent.contentOffset.y;
    const direction = currentOffset > 0 ? 'down' : 'up';
    const isActionButtonVisible = direction === 'up';
    if (isActionButtonVisible !== showButtonTitle) {
      LayoutAnimation.configureNext(layout);
      setShowButtonTitle(isActionButtonVisible);
    }
  };

  const getTopicList = async () => {
    setIsLoading(true);
    try {
      const res = await getTopics();
      console.log(res);
      setTopicList(res);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTopicList();
  }, []);

  return {
    isLoading,
    setIsLoading,
    topicList,
    showButtonTitle,
    setShowButtonTitle,
    handleScroll,
    handleRegister,
  };
}
