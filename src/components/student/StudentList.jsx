import { useSelector, useDispatch } from "react-redux";
import { editStudent, removeStudent } from "../../features/student/studentSlice";

const StudentList = ({
  inputs,
  setInputs,
}) => {
  const dispatch = useDispatch();
  const studentList = useSelector((state) => state.student.studentList);

  const handleRemoveItem = (email) => {
    dispatch(removeStudent(email));
  }

  const handleEditItem = (info) => {
    setInputs({...info, fname: info.firstName, lname: info.lastName});
  }

  return (
    <>
      <h1>Student List</h1>
      <ul>
        {studentList.map(item =>
          <li key={item.email}>
            {item.email}---
            {item.firstName}---
            {item.lastName}---
            {item.dob}---
            {item.phone}---
            {item.year}---
            <button onClick={() => handleEditItem(item)}>Edit</button>/
            <button onClick={()=> handleRemoveItem(item.email)}>Remove</button>
          </li>)}
      </ul>
    </>
  )
};

export default StudentList;
