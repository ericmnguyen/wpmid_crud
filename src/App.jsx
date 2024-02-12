import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Add new student</h1>
      <div className='field'>
        <input type='text' placeholder='First name'/>
      </div>
      <div className='field'>
        <input type='text' placeholder='Last name'/>
      </div>
      <div className='field'>
        <input type='text' placeholder='Date of Birth'/>
      </div>
      <div className='field'>
        <input type='text' placeholder='Phone number'/>
      </div>
      <div className='field'>
        <button>Submit</button>
      </div>
    </>
  )
}

export default App
