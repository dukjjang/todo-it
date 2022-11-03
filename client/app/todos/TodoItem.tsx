import axios from 'axios';
import React, { useState } from 'react';
import { deleteTodo, putTodo } from '../../service/api';
import { Props } from '../../types/types';
import { useSWRConfig } from 'swr';
import { Todo } from '../../types/types';

export default function TodoItem({ todo, todos }: Props) {
  const [checked, setChecked] = useState(todo.completed);
  const { mutate } = useSWRConfig();

  const checkHandler = async () => {
    const isChecked = checked ? false : true;
    setChecked(isChecked);
    try {
      await putTodo(todo.id, isChecked);
    } catch (err) {
      alert(err);
    }
  };

  const deleteHandler = async () => {
    try {
      mutate('/todos', deleteTodo(todo.id), false);
    } catch (err) {
      alert('삭제에 실패하였습니다');
    }
  };

  return (
    <li>
      <input onChange={checkHandler} checked={checked} type={'checkbox'} />
      {todo.title}
      <button onClick={deleteHandler}>delete</button>
    </li>
  );
}
