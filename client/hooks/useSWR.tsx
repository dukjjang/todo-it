import useSWR from 'swr';
import axios from 'axios';

const fetcher = (path: string) =>
  axios.get(`http://localhost:8080${path}`).then((res) => res.data);

export function getAllTodos() {
  const { data, error } = useSWR(`/todos`, fetcher);

  return {
    todos: data,
    isLoading: !error && !data,
    isError: error,
  };
}
