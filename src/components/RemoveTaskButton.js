import React from 'react';
import PropTypes from 'prop-types';

export const RemoveTaskButton = ({...props}) => {
  const {
    onDelete, // (id) => {}
  } = props

  const handleDelete = () => {
    onDelete()
  }

  return <button onClick={handleDelete}>x</button>
}

RemoveTaskButton.propTypes = {
  onDelete: PropTypes.func
};