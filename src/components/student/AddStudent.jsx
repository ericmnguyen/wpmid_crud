import { useDispatch } from 'react-redux'
import { addStudent } from '../../features/student/studentSlice';

const AddStudent = ({
  inputs,
  setInputs
}) => {
  const dispatch = useDispatch();

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(val => ({ ...val, [name]: value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addStudent(inputs))
    setInputs({email: '', fname: '', lname: '', dob: '', phone: '', year: 'none'});
  }

  return (
    <>
      <h1>Add new student</h1>
      <form onSubmit={handleSubmit}>
      <div className='field'>
          <input
            name='email'
            placeholder='WSU email address'
            onChange={handleChange}
            value={inputs.email}
          />
        </div>
        <div className='field'>
          <input
            name='fname'
            placeholder='First name'
            onChange={handleChange}
            value={inputs.fname}
          />
        </div>
        <div className='field'>
          <input
            name='lname'
            placeholder='Last name'
            onChange={handleChange}
            value={inputs.lname}
          />
        </div>
        <div className='field'>
          <input
            name='dob'
            placeholder='Date of Birth'
            onChange={handleChange}
            value={inputs.dob}
          />
        </div>
        <div className='field'>
          <input
            name='phone'
            placeholder='Phone number'
            onChange={handleChange}
            value={inputs.phone}
          />
        </div>
        <div className='field'>
          <label htmlFor="year">Year enrolled:</label>
          <select name="year" onChange={handleChange} value={inputs.year}>
            <option value="none" disabled selected>Select an option</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
        </div>
        <div className='field'>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </>
  )
}

export default AddStudent;
