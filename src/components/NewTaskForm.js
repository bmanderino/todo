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
    onFormSubmit(text)
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit(text)}>
        <input value={text} onChange={handleInputChange} />
        <button type="submit" disabled={!text.length}>Add</button>
      </form>
    </div>
  )
}

NewTaskForm.propTypes = {
  onFormSubmit: PropTypes.func
};