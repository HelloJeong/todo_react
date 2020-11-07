import React from 'react';
import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline } from 'react-icons/md';

function TodoListItem({ todo, onClickTodo, onRemoveTodo, style }) {
  return (
    <li key={todo.id} className={todo.checked ? 'checked' : ''} style={style}>
      <div className="todo-check" onClick={() => onClickTodo(todo.id)}>
        {todo.checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </div>
      <span>{todo.text}</span>
      <div className="todo-remove" onClick={() => onRemoveTodo(todo.id)}>
        <MdRemoveCircleOutline />
      </div>
    </li>
  );
}

// export default TodoListItem;
export default React.memo(TodoListItem);
