import { KeyedMutator } from 'swr';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface Props {
  todo: Todo;
  todos: Todo[];
}
