import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Some mock data
  studentList: [
    {
      email: 'eric@abc.com',
      firstName: 'Eric',
      lastName: 'Nguyen',
      dob: '01/01/1888',
      phone: '098123298',
      year: '2022'
    },
    {
      email: 'pratik@abc.com',
      firstName: 'Pratik',
      lastName: 'Bajracharya',
      dob: '01/01/1888',
      phone: '098123210',
      year: '2022'
    },
  ]
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
        state.studentList[studentIndex] = payload;
      } else {
        // handle create a new student
        state.studentList = [...state.studentList, payload];
      }
    },
    editStudent: (state, action) => {
      const { payload } = action;
      console.log('payload', payload);
    },
    removeStudent: (state, action) => {
      const { payload } = action;
      state.studentList = state.studentList.filter(item => item.email !== payload);
    }
  }
})

export const { getStudents, addStudent, editStudent, removeStudent } = studentSlice.actions;

export default studentSlice.reducer;
