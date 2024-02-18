import store from '../../app/store';
import axios from "axios";
import { getStudents } from '../../features/student/studentSlice';



export const loadStudents = async () => {
  try {
    const { data, status } = await axios.get('http://127.0.0.1:3000/api/student/all');
    if (status === 200) {
      store.dispatch(getStudents(data));
    }
  } catch (error) {
    console.error(error);
  }
};

export const createStudent = async(studentForm) => {
  const { data }  = await axios.post('http://127.0.0.1:3000/api/student/create', studentForm, {
  headers: {
    'Content-Type': 'application/json'
  }});
  if (data) {
    loadStudents();
    return true;
  }
  return false;
}

export const removeStudent = async(studentId) => {
  const { data }  = await axios.delete(`http://127.0.0.1:3000/api/student/${studentId}`);
  if (data) {
    loadStudents();
    return true;
  }
  return false;
}