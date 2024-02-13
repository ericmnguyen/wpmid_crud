import { useState } from 'react'
import './App.css'
import AddStudent from './components/student/AddStudent';
import StudentList from './components/student/StudentList';

function App() {
  const [inputs, setInputs] = useState({});
  return (
    <>
      <AddStudent inputs={inputs} setInputs={setInputs} />
      <StudentList inputs={inputs} setInputs={setInputs} />
    </>
  )
}

export default App
