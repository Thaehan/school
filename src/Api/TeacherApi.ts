import {baseUrl} from '@Configs/configs';
import axios from 'axios';

const teacherUrl = `${baseUrl}/teachers`;

export const getTeachers = async (query?: any) => {
  console.log(query);
  const res = await axios.get(`${teacherUrl}/`);
  return res.data;
};
