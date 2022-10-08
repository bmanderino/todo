import React from 'react';
import { RemoveTaskButton } from './RemoveTaskButton';
import PropTypes from 'prop-types';

export const ToDoItem = ({...props}) => {
  const {
    completed,
    id,
    key,
    text,
    onToggleCompleted,
    onDelete
  } = props


  return (
    <div key={key} className="todoItem">
      <input type="checkbox" defaultChecked={completed} onChange={onToggleCompleted(id)} />
      {text}
      <RemoveTaskButton onDelete={onDelete(id)} />
    </div>
  )
}

ToDoItem.propTypes = {
  completed: PropTypes.bool,
  id: PropTypes.oneOfType(
    [PropTypes.number,
    PropTypes.string]
  ),
  text: PropTypes.string,
  onToggleCompleted: PropTypes.func,
  onDelete: PropTypes.func
};