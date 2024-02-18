import { createSlice } from "@reduxjs/toolkit";
import { createStudent, updateStudent } from "./studentService";

const initialState = {
  // Some mock data
  studentList: []
}

export const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    getStudents: (state, action) => {
      const { payload } = action;
      const convertedData = payload.map(item => {
        return {
          studentId: item.StudentId,
          firstName: item.FirstName,
          lastName: item.LastName,
          email: item.EmailAddress,
          courseCode: item.CourseCode,
          contactNo: item.ContactNo,
          nationality: item.Nationality,
          specialisationCode: item.SpecialisationCode,
          year: item.YearEnrolled,
          userId: item.UserId
        }
      })
      state.studentList = [...convertedData];
    },
    // Handle adding new student to the student list
    addStudent: (state, action) => {
      const { payload } = action;
      // Check if the student already existed
      const studentIndex = state.studentList.findIndex(item => item.studentId === payload.studentId);
      if (studentIndex > -1) {
        // handle edit an existing student
        updateStudent(payload);
      } else {
        // handle create a new student
        createStudent(payload);
      }
    },
  }
})

export const { getStudents, addStudent, editStudent, removeStudent } = studentSlice.actions;

export default studentSlice.reducer;
