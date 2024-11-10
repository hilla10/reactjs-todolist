import React from 'react';

const TodoCard = ({ children, handleDeleteTodo, index, handleEditTodo }) => {
  return (
    <li className='todoItem'>
      {children}

      <div className='actionsContainer'>
        <button onClick={() => handleEditTodo(index)}>
          <i className='fa-solid fa-pen-to-square'></i>
        </button>
        <button onClick={() => handleDeleteTodo(index)}>
          <i className='fa-regular fa-trash-can'></i>
        </button>
      </div>
    </li>
  );
};

export default TodoCard;
