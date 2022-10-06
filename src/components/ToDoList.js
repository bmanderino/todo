import React from 'react';
import { ToDoItem } from './ToDoItem';
import PropTypes from 'prop-types';

export const ToDoList =({ ...props }) => {
  const {
    todos,
    setAllTasks
  } = props

  return (
    <div>
      {todos.map(todo => (
        <ToDoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
          onDelete={null}
          onToggleCompleted={null}
        />
      ))}
    </div>
  )
}

ToDoList.propTypes = {
  todos: PropTypes.array,
  setAllTasks: PropTypes.func
};