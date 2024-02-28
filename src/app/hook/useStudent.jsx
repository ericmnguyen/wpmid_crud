import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { loadStudents, createStudent, updateStudent, removeStudent } from "../../features/student/studentService";

const key = 'students';

export const useGetStudents = () => {
  return useQuery({
    queryKey: [key], 
    queryFn: loadStudents
  });
};

export const useCreateStudent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: student => createStudent(student),
    onSuccess: user => {
      queryClient.invalidateQueries([key]);
    }
  })
};

export const useUpdateStudent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: student => updateStudent(student),
    onSuccess: user => {
      console.log('abc', user);
      // queryClient.setQueriesData([key]);
      queryClient.invalidateQueries([key]);
    }
  })
};

export const useRemoveStudent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: student => removeStudent(student),
    onSuccess: user => {
      queryClient.invalidateQueries([key]);
    }
  })
};