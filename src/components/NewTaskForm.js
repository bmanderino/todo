import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types';

export const NewTaskForm = ({...props}) => {
  const {
    onFormSubmit,
  } = props

  const [text, setText] = useState('')

  const handleInputChange = (e) => {
    setText(e.target.value)
  }

  const handleFormSubmit = (text) => (e) => {
    onFormSubmit(text, e)
    setText('')
  }

  return (
    <div className="addTask">
      <form onSubmit={handleFormSubmit(text)}>
        <input value={text} onChange={handleInputChange} placeholder='Add a task' />
        <button type="submit" disabled={!text.length}>Add</button>
      </form>
    </div>
  )
}

NewTaskForm.propTypes = {
  onFormSubmit: PropTypes.func
};