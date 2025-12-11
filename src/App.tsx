import {useState, useEffect} from 'react'
import './App.css';
import  { NewTaskForm }  from './components/NewTaskForm';
import { TaskList, type Task } from './components/TaskList';

let nextID = 0;
const getID = () => ++nextID;

const tasks: Task[] = [
  {
    id: getID(),
    text: "Clean",
    completed: false
  },
  {
    id: getID(),
    text:"Vacuum",
    completed: false
  }
]

const initializeTaskList = () => {
  const raw = window.localStorage.getItem('tasks');
  return raw ? (JSON.parse(raw) as Task[]) : tasks;
}

function App() {
  const [todos, setTodos] = useState<Task[]>(initializeTaskList)

  const addNewTask = (text: string, e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let newItem = {text: text, completed: false, id: getID()}
    setTodos(prev => [...prev, newItem])
  }

  useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify(todos))
  },[todos])

  return (
    <div id="App">
      <div className='container'>
        <h1 className='mainTitle'>Get it done!</h1>
        <NewTaskForm onFormSubmit={addNewTask} />
        <TaskList todos={todos} setAllTasks={setTodos} />
      </div>
    </div>
  );
}

export default App;



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
