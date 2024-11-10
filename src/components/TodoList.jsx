import React from 'react';
import TodoCard from './TodoCard';

const TodoList = ({ todos, handleDeleteTodo, handleEditTodo }) => {
  return (
    <div>
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard
            key={todoIndex}
            index={todoIndex}
            handleDeleteTodo={handleDeleteTodo}
            handleEditTodo={handleEditTodo}>
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </div>
  );
};

export default TodoList;
