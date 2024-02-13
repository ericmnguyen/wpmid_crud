import { useSelector } from "react-redux";

const StudentList = () => {
  const studentList = useSelector((state) => state.student.studentList);

  const handleRemoveItem = (email) => {

  }

  const handleEditItem = (email) => {
    
  }

  return (
    <>
    <h1>Student List</h1>
    <ul>
      {studentList.map(item => <li key={item.email}>
        {item.email}---
        {item.firstName}---
        {item.lastName}---
        {item.dob}---
        {item.phone}---
        {item.year}---
        <button onClick={handleEditItem(item.email)}>Edit</button>/
        <button onClick={handleRemoveItem(item.email)}>Remove</button>
      </li>)}
    </ul>
    </>
  )
};

export default StudentList;
