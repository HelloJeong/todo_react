import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';

function TodoInsert({ onAddTodo }) {
  const [todoValue, setTodoValue] = useState('');

  const onChangeTodo = useCallback((e) => {
    setTodoValue(e.target.value);
  }, []);

  const onSubmit = (e) => {
    onAddTodo(todoValue);
    setTodoValue('');
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="todo-insert">
        <input
          className="todo-input"
          type="text"
          placeholder="할 일을 입력하세요"
          value={todoValue}
          onChange={onChangeTodo}
        />
        <button className="todo-btn-add" type="submit">
          <MdAdd />
        </button>
      </div>
    </form>
  );
}

export default TodoInsert;
