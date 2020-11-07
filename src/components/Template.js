import React, { useState, useEffect, useCallback, useRef } from 'react';
import './Template.css';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';

function Template() {
  const [todos, setTodo] = useState([]);

  const todoNum = useRef(1);

  const onAddTodo = useCallback(
    (todoValue) => {
      setTodo([...todos, { id: todoNum.current, checked: false, text: todoValue }]);
      todoNum.current++;
    },
    [todos],
  );

  const onRemoveTodo = useCallback(
    (id) => {
      setTodo(todos.filter((v) => v.id !== id));
    },
    [todos],
  );

  const onClickTodo = useCallback(
    (id) => {
      todos.forEach((v) => {
        if (v.id === id) v.checked = !v.checked;
      });
      setTodo([...todos]);
    },
    [todos],
  );

  return (
    <div className="container">
      <div className="todo-header">일정 관리</div>
      <TodoInsert onAddTodo={onAddTodo} />
      <TodoList todos={todos} onRemoveTodo={onRemoveTodo} onClickTodo={onClickTodo} />
    </div>
  );
}

export default Template;
