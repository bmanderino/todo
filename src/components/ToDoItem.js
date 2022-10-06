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
    <div key={key} id={id}><input type="checkbox" defaultChecked={completed} onChange={onToggleCompleted} />{text} <RemoveTaskButton onDelete={onDelete} /></div>
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