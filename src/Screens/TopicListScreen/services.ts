import {useEffect, useState} from 'react';

export default function useTopicList() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getTopicList = async () => {
    setIsLoading(true);
    try {
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
  };
}
