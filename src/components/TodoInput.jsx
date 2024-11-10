import React, { useState } from 'react';

const TodoInput = ({ handleAddTodos, todoValue, setTodoValue }) => {
  return (
    <header>
      <input
        type='text'
        placeholder='Enter Todo...'
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
      />
      <button
        onClick={() => {
          handleAddTodos(todoValue);
        }}>
        Add
      </button>
    </header>
  );
};

export default TodoInput;
