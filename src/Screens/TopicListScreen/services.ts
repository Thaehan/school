import {useEffect, useState} from 'react';

import mockList from '@Assets/Data/topicList.json';
import {ITopic} from '@Types/ITopic';

export default function useTopicList() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [topicList, setTopicList] = useState<ITopic[]>([]);

  const getTopicList = async () => {
    setIsLoading(true);
    try {
      setTopicList(mockList);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      getTopicList();
    }, 500);

    return () => clearTimeout(timeout);
  }, []);
  return {
    isLoading,
    setIsLoading,
    topicList,
  };
}
