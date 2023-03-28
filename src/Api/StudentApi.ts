import {baseUrl} from '@Configs/configs';
import axios from 'axios';

const studentUrl = `${baseUrl}/students`;

export const getStudentById = async (params?: any) => {
  const res = await axios.get(`${studentUrl}/${params}`);
  return res.data;
};

export const studentSelectTopic = async (
  student_id?: string,
  topic_id?: string,
) => {
  const res = await axios.put(`${studentUrl}/`, {
    student_id,
    topic_id,
  });
  return res.data;
};
