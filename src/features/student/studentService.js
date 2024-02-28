import store from '../../app/store';
import axios from "axios";
import { getStudents } from '../../features/student/studentSlice';

// This BASE_URL should be put in env file
const BASE_URL = 'http://127.0.0.1:3000/api/student/';

export const loadStudents = async () => {
  try {
    const { data, status } = await axios.get(BASE_URL + '/all');
    if (status === 200) {
      store.dispatch(getStudents(data));
      console.log('dtaaaa', data);
      return data;
    }
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const createStudent = async(studentForm) => {
  const { data }  = await axios.post(BASE_URL + '/create', studentForm, {
  headers: {
    'Content-Type': 'application/json'
  }});
  if (data) {
    return true;
  }
  return false;
}

export const updateStudent = async(studentForm) => {
  const { data }  = await axios.put(BASE_URL + `${studentForm.studentId}`, studentForm, {
  headers: {
    'Content-Type': 'application/json'
  }});
  if (data) {
    return data;
  }
  return false;
}

export const removeStudent = async(studentId) => {
  const { data }  = await axios.delete(BASE_URL + `${studentId}`);
  if (data) {
    return true;
  }
  return false;
}