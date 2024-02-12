import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Mock some data
  studentList: [
    {
      firstName: 'Eric',
      lastName: 'Nguyen',
      dOb: '01/01/1888'
    },
    {
      firstName: 'Pratik',
      lastName: 'Bajracharya',
      dOb: '01/01/1888'
    },
  ]
}

export const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    // TODO: Handle adding new student to the student list
    studentList: (state, action) => {
      state.studentList = [...state.studentList, action.payload]
    }
  }
})

export const { studentList } = studentSlice.actions;

export default studentSlice.reducer