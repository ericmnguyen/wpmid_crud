import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './App.css'

function App() {
  const studentList = useSelector((state) => state.student.studentList);
  const dispatch = useDispatch();

  console.log('studentList', studentList);

  const handleOnClick = (e) => {
    e.preventDefault();
    console.log(e);
  }

  return (
    <>
      <h1>Add new student</h1>
      <form>
        <div className='field'>
          <input id='fname' name='fname' type='text' placeholder='First name' />
        </div>
        <div className='field'>
          <input id='lname' name='lname' type='text' placeholder='Last name' />
        </div>
        <div className='field'>
          <input id='dob' name='dob' type='text' placeholder='Date of Birth' />
        </div>
        <div className='field'>
          <input id='phone' name='fname' type='text' placeholder='Phone number' />
        </div>
        <div className='field'>
          <button type='submit' onClick={handleOnClick}>Submit</button>
        </div>
      </form>
    </>
  )
}

export default App
