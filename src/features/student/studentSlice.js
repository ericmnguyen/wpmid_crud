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
      state.studentList = [...state.studentList, newStudent];
    }
  }
})

export const { addStudent } = studentSlice.actions;

export default studentSlice.reducer;
