export const convertStudentData = data => {
  const convertedStudentList = data?.map(stu => {
    return {
      studentId: stu.StudentId,
      firstName: stu.FirstName,
      lastName: stu.LastName,
      email: stu.stu,
      courseCode: stu.CourseCode,
      contactNo: stu.ContactNo,
      nationality: stu.Nationality,
      specialisationCode: stu.SpecialisationCode,
      year: stu.YearEnrolled,
      userId: stu.UserId
    }
  });
  return convertedStudentList;
};
