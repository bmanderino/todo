import React from 'react';
import PropTypes from 'prop-types';

export const RemoveTaskButton = ({...props}) => {
  const {
    onDelete, // (id) => {}
  } = props

  return <button onClick={onDelete}>X</button>
}

RemoveTaskButton.propTypes = {
  onDelete: PropTypes.func
};