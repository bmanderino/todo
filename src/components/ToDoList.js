import React from 'react';
import { ToDoItem } from './ToDoItem';
import PropTypes from 'prop-types';

export const ToDoList =({ ...props }) => {
  const {
    todos,
    setAllTasks
  } = props

  const handleDelete = (id) => () => {
    setAllTasks(todos.filter((item) => item.id !== id))
  }

  const handleComplete = (id) => () => {
    setAllTasks(todos.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed
      }
      return item
    }))
  }

  return (
    <div>
      {todos.map(todo => (
        <ToDoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
          onDelete={handleDelete}
          onToggleCompleted={handleComplete}
        />
      ))}
    </div>
  )
}

ToDoList.propTypes = {
  todos: PropTypes.array,
  setAllTasks: PropTypes.func
};