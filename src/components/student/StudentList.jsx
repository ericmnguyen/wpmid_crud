import { convertStudentData } from "../../../utils/dataConversion";
import { useGetStudents, useRemoveStudent } from "../../app/hook/useStudent";

const StudentList = ({
  inputs,
  setInputs,
}) => {
  // const studentList = useSelector((state) => state.student.studentList);

  const { error, data, isFetching } = useGetStudents();
  const removeStudent = useRemoveStudent();

  const studentList = convertStudentData(data);

  const handleRemoveItem = (studentId) => {
    removeStudent.mutate(studentId);
  }

  const handleEditItem = (item) => {
    setInputs(item);
  }

  const handleStudentDetails = () => {
    // TODO implementing react router
  }

  return (
    <>
      <h1>Student List</h1>
      <ul>
        {isFetching ? <>Loading...</> : studentList?.map(item =>
          <li key={item.studentId}>
            {item.firstName}---
            {item.lastName}---
            {item.email}---
            {item.contactNo}---
            {item.courseCode}---
            {item.specialisationCode}---
            {item.year}---
            {item.nationality}---
            <button onClick={() => handleStudentDetails(item.studentId)}>Details</button>/
            <button onClick={() => handleEditItem(item)}>Edit</button>/
            <button onClick={() => handleRemoveItem(item.studentId)}>Remove</button>
          </li>)}
      </ul>
    </>
  )
};

export default StudentList;
