import React from 'react';

import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline } from 'react-icons/md';

function TodoList({ todos, onRemoveTodo, onClickTodo }) {
  return (
    <div className="todo-list">
      <ul>
        {todos.map((v, idx) => (
          <li key={v.id} className={v.checked ? 'checked' : ''}>
            <div className="todo-check" onClick={() => onClickTodo(v.id)}>
              {v.checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            </div>
            <span>{v.text}</span>
            <div className="todo-remove" onClick={() => onRemoveTodo(v.id)}>
              <MdRemoveCircleOutline />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
