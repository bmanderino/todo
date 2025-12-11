import { Task } from './Task';

export type Task = {
  id: number;
  text: string;
  completed: boolean;
};

type TaskListProps = {
  todos: Task[],
  setAllTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

export const TaskList =({ todos, setAllTasks }: TaskListProps) => {
  const handleDelete = (id: number) => {
    setAllTasks(prev => prev.filter((item) => item.id !== id))
  }

  const handleComplete = (id: number) => () => {
    setAllTasks(prev => prev.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ))
  }

  return (
    <div>
      {todos.map(todo => (
        <Task
          id={todo.id}
          key={todo.id}
          text={todo.text}
          completed={todo.completed}
          onDelete={handleDelete}
          onToggleCompleted={handleComplete}
        />
      ))}
    </div>
  )
}