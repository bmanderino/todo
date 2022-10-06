import React, {useState} from 'react'
import './App.css';
import { NewTaskForm } from './components/NewTaskForm';
import { ToDoList } from './components/ToDoList';

let nextID = 0;
const getID = () => ++nextID;

const tasks = [
  {
    id: getID(), // unique
    text: "Clean", // not unique
    completed: true
  },
  {
    id: getID(),
    text:"Vacuum",
    completed: false
  }
]

/*

Features:
List of active tasks
Input/Add Task
checkbox/Complete task
remove task

Stretch:
  - only show incomplete
  - sort by creation time or name
  - ...

- hooks | class components with state

- which components we need
  - responsibilities of each component
- API between components
  - internal state(?)

*/



function App() {
  const [todos, setTodos] = useState(tasks)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)
  }

  // const taskList = tasks.map(item=>(
  //
  // ))

  return (
    <>
      <p>ToDo App</p>
      <NewTaskForm onFormSubmit={handleSubmit} />
      <ToDoList todos={todos} />

      {/* <ul>
      {taskList}
      </ul> */}
    </>
  );
}

export default App;
