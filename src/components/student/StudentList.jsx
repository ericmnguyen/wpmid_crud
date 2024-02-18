import { useSelector } from "react-redux";
import { useEffect } from "react";
import { loadStudents, removeStudent } from "../../features/student/studentService";

const StudentList = ({
  inputs,
  setInputs,
}) => {
  const studentList = useSelector((state) => state.student.studentList);

  useEffect(() => {
    loadStudents();
  }, [])

  const handleRemoveItem = (studentId) => {
    removeStudent(studentId);
    // dispatch(removeStudent(email));
  }

  const handleEditItem = (item) => {
    setInputs(item);
  }

  return (
    <>
      <h1>Student List</h1>
      <ul>
        {studentList?.map(item =>
          <li key={item.studentId}>
            {item.firstName}---
            {item.lastName}---
            {item.email}---
            {item.contactNo}---
            {item.courseCode}---
            {item.specialisationCode}---
            {item.year}---
            {item.nationality}---
            <button onClick={() => handleEditItem(item)}>Edit</button>/
            <button onClick={() => handleRemoveItem(item.studentId)}>Remove</button>
          </li>)}
      </ul>
    </>
  )
};

export default StudentList;
