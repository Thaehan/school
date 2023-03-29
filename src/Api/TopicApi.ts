import {baseUrl} from '@Configs/configs';
import axios from 'axios';

const topicUrl = `${baseUrl}/topics`;

export const getTopics = async (search?: any) => {
  let url = `${topicUrl}/`;
  if (search) {
    url += `?search=${search}`;
  }
  const res = await axios.get(url);
  return res.data;
};
