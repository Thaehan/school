import {baseUrl} from '@Configs/configs';
import axios from 'axios';

const topicUrl = `${baseUrl}/topics`;

export const getTopics = async (query?: any) => {
  console.log(query);
  const res = await axios.get(`${topicUrl}/`);
  return res.data;
};
