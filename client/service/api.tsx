import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
});

export const putTodo = async (id: number, checked: boolean) => {
  const res = await api.put(`/todos/${id}`, {
    completed: checked,
  });
  return res.data;
};

export const deleteTodo = async (id: number) => {
  const res = await api.delete(`/todos/${id}`);
  return res.data;
};

// export const getUsers = async () => {
//   try {
//     const res = await api.get('/users');
//     return res.data;
//   } catch (error) {
//     console.error(error);
//   }
// };
