import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { removeStudent, getStudents } from "../../features/student/studentSlice";

const StudentList = ({
  inputs,
  setInputs,
}) => {
  const dispatch = useDispatch();
  const studentList = useSelector((state) => state.student.studentList);

  useEffect(() => {
    loadStudents();
  }, [])

  const loadStudents = async () => {
    try {
      const { data, status } = await axios.get('http://127.0.0.1:3000/api/students/');
      if (status === 200) {
        dispatch(getStudents(data));
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handleRemoveItem = (email) => {
    dispatch(removeStudent(email));
  }

  const handleEditItem = (info) => {
    setInputs({ ...info, fname: info.firstName, lname: info.lastName });
  }

  return (
    <>
      <h1>Student List</h1>
      <ul>
        {studentList.map(item =>
          <li key={item.StudentId}>
            {item.FirstName}---
            {item.LastName}---
            {item.EmailAddress}---
            {item.ContactNo}---
            {item.CourseCode}---
            {item.SpecialisationCode}---
            {item.YearEnrolled}---
            {item.Nationality}---
            <button onClick={() => handleEditItem(item)}>Edit</button>/
            <button onClick={() => handleRemoveItem(item.email)}>Remove</button>
          </li>)}
      </ul>
    </>
  )
};

export default StudentList;
