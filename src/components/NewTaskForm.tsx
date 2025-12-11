import {useState} from 'react'

type Prop = {
  onFormSubmit: (text: string, e:React.FormEvent<HTMLFormElement>) => void
}

export const NewTaskForm = ({onFormSubmit}: Prop) => {
  const [text, setText] = useState('')

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const handleFormSubmit = (text: string) => (e: React.FormEvent<HTMLFormElement>) => {
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