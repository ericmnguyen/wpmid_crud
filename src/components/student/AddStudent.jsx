import { convertStudentData } from '../../../utils/dataConversion';
import { useGetStudents, useCreateStudent, useUpdateStudent } from '../../app/hook/useStudent';

const AddStudent = ({
  inputs,
  setInputs
}) => {

  const createStudent = useCreateStudent();
  const updateStudent = useUpdateStudent();
  const { error, data, isFetching } = useGetStudents();
  const studentList = convertStudentData(data);

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(val => ({ ...val, [name]: value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const studentIndex = studentList.findIndex(item => item.studentId === inputs.studentId);
    if (studentIndex > -1) {
      // handle edit an existing student
      updateStudent.mutate(inputs);
    } else {
      // handle create a new student
      createStudent.mutate(inputs);
    }

    setInputs({
      studentId: '',
      firstName: '',
      lastName: '',
      email: '',
      contactNo: '',
      courseCode: '',
      year: 'none',
      nationality: '',
      userId: '',
    });
  }

  return (
    <>
      <h1>Add new student</h1>
      <form onSubmit={handleSubmit}>
        <div className='field'>
          <input
            name='studentId'
            placeholder='Student ID'
            onChange={handleChange}
            value={inputs.studentId}
          />
        </div>
        <div className='field'>
          <input
            name='firstName'
            placeholder='First name'
            onChange={handleChange}
            value={inputs.firstName}
          />
        </div>
        <div className='field'>
          <input
            name='lastName'
            placeholder='Last name'
            onChange={handleChange}
            value={inputs.lastName}
          />
        </div>
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
            name='contactNo'
            placeholder='Contact No'
            onChange={handleChange}
            value={inputs.contactNo}
          />
        </div>
        <div className='field'>
          <input
            name='courseCode'
            placeholder='Course Code'
            onChange={handleChange}
            value={inputs.courseCode}
          />
        </div>
        <div className='field'>
          <input
            name='specialisationCode'
            placeholder='Specialisation Code'
            onChange={handleChange}
            value={inputs.specialisationCode}
          />
        </div>
        <div className='field'>
          <label htmlFor="year">Year enrolled:</label>
          <select name="year" onChange={handleChange} value={inputs.year}>
            <option value="0" disabled defaultValue='0'>Select an option</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
        </div>
        <div className='field'>
          <input
            name='nationality'
            placeholder='Nationality'
            onChange={handleChange}
            value={inputs.nationality}
          />
        </div>
        <div className='field'>
          <input
            name='userId'
            placeholder='User ID'
            onChange={handleChange}
            value={inputs.userId}
          />
        </div>
        <div className='field' disabled={updateStudent.isPending}>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </>
  )
}

export default AddStudent;
