import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
import TodoListItem from './TodoListItem';

function TodoList({ todos, onRemoveTodo, onClickTodo }) {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo} // todo 한 개씩 전달
          key={key}
          onRemoveTodo={onRemoveTodo}
          onClickTodo={onClickTodo}
          style={style}
        />
      );
    },
    [onRemoveTodo, onClickTodo, todos],
  );
  return (
    <div className="todo-list">
      <ul>
        <List
          width={512} // 전체 너비
          height={512} // 전체 높이
          rowCount={todos.length} // 항목 개수
          rowHeight={40} // 항목 높이
          rowRenderer={rowRenderer} // 항목을 렌더링할 때 쓰는 함수
          list={todos} // 배열
          style={{ outline: 'none' }} // List에 기본 적용되는 outline 스타일 제거
        />
      </ul>
    </div>
  );
}

export default React.memo(TodoList);
