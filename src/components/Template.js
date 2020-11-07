import React, { useState, useCallback, useRef } from 'react';
import './Template.css';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';

function createTodo() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      checked: false,
      text: `abc${i}`,
    });
  }
  return array;
}

function Template() {
  const [todos, setTodo] = useState(createTodo);

  const todoNum = useRef(1);

  const onAddTodo = useCallback((todoValue) => {
    setTodo((todos) => todos.concat({ id: todoNum.current, checked: false, text: todoValue }));
    todoNum.current++;
  }, []);

  const onRemoveTodo = useCallback((id) => {
    setTodo((todos) => todos.filter((v) => v.id !== id));
  }, []);

  const onClickTodo = useCallback((id) => {
    setTodo((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)),
    );
  }, []);

  return (
    <div className="container">
      <div className="todo-header">일정 관리</div>
      <TodoInsert onAddTodo={onAddTodo} />
      <TodoList todos={todos} onRemoveTodo={onRemoveTodo} onClickTodo={onClickTodo} />
    </div>
  );
}

export default Template;
