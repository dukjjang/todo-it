'use client';
import { getAllTodos } from '../../hooks/useSWR';
import TodoItem from './TodoItem';
import { Todo } from '../../types/types';

export default function TodoList() {
  const { todos, isLoading, isError } = getAllTodos();

  return (
    <div className='page'>
      <h1>TodoList!</h1>
      <ul>
        {todos &&
          todos
            .slice(0, 20)
            .map((todo: Todo) => (
              <TodoItem todos={todos} key={todo.id} todo={todo} />
            ))}
      </ul>
    </div>
  );
}

// 1. 투두 수정
//
