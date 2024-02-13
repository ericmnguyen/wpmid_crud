import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Mock some data
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
    // Handle adding new student to the student list
    addStudent: (state, action) => {
      const { payload } = action;
      const newStudent = {
        email: payload.email,
        firstName: payload.fname,
        lastName: payload.lname,
        dob: payload.dob,
        phone: payload.phone,
        year: payload.year
      };
      // Check if the student already existed
      const studentIndex = state.studentList.findIndex(item => item.email === payload.email);
      if (studentIndex > -1) {
        // handle edit an existing student
        state.studentList[studentIndex] = newStudent;
      } else {
        // handle create a new student
        state.studentList = [...state.studentList, newStudent];
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

export const { addStudent, editStudent, removeStudent } = studentSlice.actions;

export default studentSlice.reducer;
